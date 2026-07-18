const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function createHarness() {
    const bundlePath = path.resolve(__dirname, '..', 'media', 'dspfDesigner.bundle.js');
    const code = fs.readFileSync(bundlePath, 'utf8');

    const elementStub = {
        style: {},
        dataset: {},
        appendChild: () => {},
        setAttribute: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        classList: { add: () => {}, remove: () => {} },
        querySelector: () => null,
        querySelectorAll: () => [],
        remove: () => {},
        innerHTML: '',
        value: '',
        getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 })
    };

    const sandbox = {
        module: { exports: {} },
        console: console,
        window: { addEventListener: () => {} },
        document: {
            addEventListener: () => {},
            head: { appendChild: () => {}, removeChild: () => {} },
            body: { appendChild: () => {}, removeChild: () => {} },
            createElement: () => ({ ...elementStub }),
            getElementById: () => ({ ...elementStub }),
            querySelector: () => ({ ...elementStub }),
            querySelectorAll: () => []
        },
        acquireVsCodeApi: () => ({ postMessage: () => {} }),
        setTimeout: (fn) => { fn(); return 0; },
        clearTimeout: () => {},
        setInterval: () => 0,
        clearInterval: () => {},
        requestAnimationFrame: (fn) => { fn(); return 0; },
        cancelAnimationFrame: () => {},
        performance: { now: () => 0 }
    };

    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);

    return (sandbox.window && sandbox.window.__TESTS) || sandbox.module.exports;
}

function run() {
    const tests = createHarness();
    if (!tests) {
        throw new Error('No test exports found');
    }

    const {
        setCurrentDocument,
        getCurrentDocument,
        setCurrentRecord,
        parseDspfFields,
        getFields,
        updateFieldInDds
    } = tests;

    if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !parseDspfFields || !getFields || !updateFieldInDds) {
        throw new Error('Required test helpers are not exported');
    }

    // TEST 1: Parse inline ERRMSG keyword from source line
    {
        const sample = [
            '     A          R PRUEBA',
            "     A            DESCR3        35A  I  8 36ERRMSG('BAD VALUE')"
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);
        try {
            parseDspfFields(sample);
        } catch (err) {
            // Parsing may continue into rendering code requiring a fuller DOM stub.
        }

        const parsedField = getFields().find((f) => f.name === 'DESCR3');
        assert.ok(parsedField, 'DESCR3 should be parsed');
        assert.ok(parsedField.errmsg, 'ERRMSG keyword should be parsed into field.errmsg');
        assert.strictEqual(parsedField.errmsg.value, 'BAD VALUE', `Unexpected ERRMSG value: ${parsedField.errmsg && parsedField.errmsg.value}`);
        assert.ok(Array.isArray(parsedField.keywordOrder) && parsedField.keywordOrder.includes('ERRMSG'), 'keywordOrder should include ERRMSG');
    }

    // TEST 2: Preserve multiline ERRMSG when moving field
    {
        const sample = [
            '     A          R PRUEBA',
            "     A            DESCR3        35A  I  8 36ERRMSG('BAD VALUE-",
            "     A                                      DETAILS')"
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const oldField = {
            name: 'DESCR3',
            row: 8,
            col: 36,
            dataType: 'character',
            usage: 'I',
            length: 35,
            errmsg: {
                value: 'BAD VALUEDETAILS',
                raw: "'BAD VALUE- DETAILS'",
                rawLines: ["'BAD VALUE-", "DETAILS'"]
            },
            keywordOrder: ['ERRMSG']
        };

        const movedField = { ...oldField, row: 9 };
        updateFieldInDds(movedField, oldField);

        const doc = getCurrentDocument();
        assert.ok(doc.includes("ERRMSG('BAD VALUE-"), `Expected first ERRMSG continuation line. Got:\n${doc}`);
        assert.ok(doc.includes("DETAILS')"), `Expected ERRMSG closing continuation line. Got:\n${doc}`);
    }

    // TEST 3: Generate ERRMSG with indicators and remove when cleared
    {
        const sample = [
            '     A          R PRUEBA',
            '     A            DESCR3        35A  I  8 36'
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const oldField = {
            name: 'DESCR3',
            row: 8,
            col: 36,
            dataType: 'character',
            usage: 'I',
            length: 35
        };

        const withErrmsg = {
            ...oldField,
            errmsg: { value: 'BAD VALUE' },
            errmsgIndicators: {
                groups: [{ indicators: [{ number: '11', not: false }] }],
                isOr: false
            },
            keywordOrder: ['ERRMSG']
        };

        updateFieldInDds(withErrmsg, oldField);
        let doc = getCurrentDocument();
        assert.ok(doc.includes("ERRMSG('BAD VALUE')"), `Expected generated ERRMSG keyword. Got:\n${doc}`);
        assert.ok(doc.includes('A  11') || doc.includes('A 11'), `Expected ERRMSG indicator prefix. Got:\n${doc}`);

        const withoutErrmsg = { ...withErrmsg };
        delete withoutErrmsg.errmsg;
        delete withoutErrmsg.errmsgIndicators;
        updateFieldInDds(withoutErrmsg, withErrmsg);
        doc = getCurrentDocument();
        assert.ok(!doc.includes('ERRMSG('), `ERRMSG keyword should be removed when cleared. Got:\n${doc}`);
    }

    console.log('PASS: run-errmsg-keyword-regression.js');
    process.exit(0);
}

try {
    run();
} catch (error) {
    console.error('FAIL: run-errmsg-keyword-regression.js');
    console.error(error);
    process.exit(1);
}
