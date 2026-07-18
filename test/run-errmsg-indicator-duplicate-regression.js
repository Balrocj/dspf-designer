// Regression test: adding an indicator to a field with a multiline ERRMSG keyword
// must not duplicate any continuation lines. This also covers the case where the
// new indicator combination overflows onto a separate indicator-only line.
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
        window: { addEventListener: () => {}, removeEventListener: () => {} },
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

    // TEST 1: Adding an indicator to a field with MSGID + a 2-continuation ERRMSG
    // must not duplicate any of the ERRMSG continuation lines, even when the new
    // indicator set overflows onto a leading indicator-only line.
    {
        const sample = [
            '     A          R PRUEBA',
            '     A            PRUEBA        10A  O 18 31',
            '     A                                      MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-',
            '     A                                      2)',
            '     A  34N43                               COLOR(RED)',
            "     A  43 73 46                            ERRMSG('User ID must be at least 8-",
            '     A                                      characters long and contain no-',
            "     A                                      spaces.')"
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);
        parseDspfFields(sample);

        const field = getFields().find((f) => f.name === 'PRUEBA');
        assert.ok(field && field.errmsg, 'PRUEBA field with ERRMSG should be parsed');
        assert.strictEqual(field.errmsg.rawLines.length, 3, 'ERRMSG should have 3 raw continuation segments');

        const oldField = JSON.parse(JSON.stringify(field));
        const updatedField = JSON.parse(JSON.stringify(field));
        // Simulate adding a 4th indicator, causing overflow onto its own line.
        updatedField.errmsgIndicators = {
            groups: [{
                indicators: [
                    { number: '43', not: false },
                    { number: '73', not: false },
                    { number: '46', not: false },
                    { number: '12', not: false }
                ]
            }],
            isOr: false
        };

        updateFieldInDds(updatedField, oldField);
        const doc = getCurrentDocument();

        const charactersCount = (doc.match(/characters long and contain no-/g) || []).length;
        const spacesCount = (doc.match(/spaces\.'\)/g) || []).length;
        const msgidCount = (doc.match(/MSGID\(/g) || []).length;

        assert.strictEqual(charactersCount, 1, `ERRMSG middle continuation duplicated. Doc:\n${doc}`);
        assert.strictEqual(spacesCount, 1, `ERRMSG closing continuation duplicated. Doc:\n${doc}`);
        assert.strictEqual(msgidCount, 1, `MSGID line duplicated. Doc:\n${doc}`);
        assert.ok(doc.includes("ERRMSG('User ID must be at least 8-"), `Expected regenerated ERRMSG opening line. Doc:\n${doc}`);
    }

    // TEST 2: Adding an indicator to a field with a single-continuation ERRMSG
    // (no MSGID, no overflow) must not duplicate the continuation line either.
    {
        const sample = [
            '     A          R PRUEBA',
            '     A            TXT_1         10A  B 16 35',
            '     A                                      DSPATR(BL)',
            '     A  33                                  COLOR(RED)',
            "     A N04                                  ERRMSG('prueba de error message con-",
            "     A                                      longitud larga.')"
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);
        parseDspfFields(sample);

        const field = getFields().find((f) => f.name === 'TXT_1');
        assert.ok(field && field.errmsg, 'TXT_1 field with ERRMSG should be parsed');

        const oldField = JSON.parse(JSON.stringify(field));
        const updatedField = JSON.parse(JSON.stringify(field));
        updatedField.errmsgIndicators = {
            groups: [{ indicators: [{ number: '04', not: true }, { number: '12', not: false }] }],
            isOr: false
        };

        updateFieldInDds(updatedField, oldField);
        const doc = getCurrentDocument();

        const continuationCount = (doc.match(/longitud larga\.'\)/g) || []).length;
        assert.strictEqual(continuationCount, 1, `ERRMSG continuation line duplicated. Doc:\n${doc}`);
    }

    console.log('PASS: run-errmsg-indicator-duplicate-regression.js');
    process.exit(0);
}

try {
    run();
} catch (error) {
    console.error('FAIL: run-errmsg-indicator-duplicate-regression.js');
    console.error(error);
    process.exit(1);
}
