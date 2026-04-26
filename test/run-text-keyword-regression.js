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
        performance: { now: () => 0 },
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

    // TEST 1: Parse inline TEXT keyword from source line
    {
        const sample = [
            '     A          R PRUEBA',
            "     A            DESCR3        35A  O  8 36TEXT('LEGAL NAME LINE1')"
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);
        try {
            parseDspfFields(sample);
        } catch (err) {
            // Parsing for this regression may continue into rendering code requiring a fuller DOM stub.
            // Field data is still available for assertions below.
        }

        const parsedField = getFields().find((f) => f.name === 'DESCR3');
        assert.ok(parsedField, 'DESCR3 should be parsed');
        assert.ok(parsedField.text, 'TEXT keyword should be parsed into field.text');
        assert.strictEqual(parsedField.text.value, 'LEGAL NAME LINE1', `Unexpected TEXT value: ${parsedField.text && parsedField.text.value}`);
        assert.ok(Array.isArray(parsedField.keywordOrder) && parsedField.keywordOrder.includes('TEXT'), 'keywordOrder should include TEXT');
    }

    // TEST 2: Preserve multiline TEXT when moving field
    {
        const sample = [
            '     A          R PRUEBA',
            "     A            DESCR3        35A  O  8 36TEXT('LEGAL NAME LINE1-",
            "     A                                      EXTRA')"
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const oldField = {
            name: 'DESCR3',
            row: 8,
            col: 36,
            dataType: 'character',
            usage: 'O',
            length: 35,
            text: {
                value: 'LEGAL NAME LINE1EXTRA',
                raw: "'LEGAL NAME LINE1- EXTRA'",
                rawLines: ["'LEGAL NAME LINE1-", "EXTRA'"]
            },
            keywordOrder: ['TEXT']
        };

        const movedField = { ...oldField, row: 9 };
        updateFieldInDds(movedField, oldField);

        const doc = getCurrentDocument();
        assert.ok(doc.includes("TEXT('LEGAL NAME LINE1-"), `Expected first TEXT continuation line. Got:\n${doc}`);
        assert.ok(doc.includes("EXTRA')"), `Expected TEXT closing continuation line. Got:\n${doc}`);
    }

    // TEST 3: Generate TEXT from structured value and remove when cleared
    {
        const sample = [
            '     A          R PRUEBA',
            '     A            DESCR3        35A  O  8 36'
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const oldField = {
            name: 'DESCR3',
            row: 8,
            col: 36,
            dataType: 'character',
            usage: 'O',
            length: 35
        };

        const withText = {
            ...oldField,
            text: { value: 'LEGAL NAME LINE1' },
            keywordOrder: ['TEXT']
        };

        updateFieldInDds(withText, oldField);
        let doc = getCurrentDocument();
        assert.ok(doc.includes("TEXT('LEGAL NAME LINE1')"), `Expected generated TEXT keyword. Got:\n${doc}`);

        const withoutText = { ...withText };
        delete withoutText.text;
        updateFieldInDds(withoutText, withText);
        doc = getCurrentDocument();
        assert.ok(!doc.includes('TEXT('), `TEXT keyword should be removed when cleared. Got:\n${doc}`);
    }

    console.log('PASS: run-text-keyword-regression.js');
    process.exit(0);
}

try {
    run();
} catch (error) {
    console.error('FAIL: run-text-keyword-regression.js');
    console.error(error);
    process.exit(1);
}
