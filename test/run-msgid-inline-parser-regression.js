const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function createHarness() {
    const bundlePath = path.resolve(__dirname, '..', 'media', 'dspfDesigner.bundle.js');
    const code = fs.readFileSync(bundlePath, 'utf8');

    const elementStub = {
        style: {},
        appendChild: () => {},
        setAttribute: () => {},
        classList: { add: () => {}, remove: () => {} },
        querySelector: () => null,
        querySelectorAll: () => [],
        remove: () => {},
        innerHTML: '',
        value: ''
    };

    const sandbox = {
        module: { exports: {} },
        console,
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
    try {
        const tests = createHarness();
        const { parseDspfFields, getFields, setCurrentDocument, getCurrentDocument, setCurrentRecord, updateFieldInDds } = tests;

        if (!parseDspfFields || !getFields || !setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !updateFieldInDds) {
            throw new Error('Required test helpers are not exported');
        }

        const sample = [
            '     A          R PRUEBA',
            '     A            PRUEBA        10   O 18 31MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-',
            '     A                                      2)',
            '     A  34N43                               COLOR(RED)',
            '     A            TXT_2         10A  O 20 17'
        ].join('\n');

        setCurrentRecord('PRUEBA');
        try {
            parseDspfFields(sample);
        } catch (err) {
            // The parser may continue into render code that needs a fuller DOM stub.
            // For this regression we only need the parsed field state produced before that.
        }
        const fields = getFields();
        const parsedField = fields.find((field) => field.name === 'PRUEBA');

        assert.ok(parsedField, 'PRUEBA should be parsed from DDS');
        assert.ok(parsedField.msgid, 'PRUEBA should include parsed MSGID');
        assert.strictEqual(
            JSON.stringify(parsedField.msgid.rawLines),
            JSON.stringify(['WWM 0049 BIBLIOTECA/FPRBMSGF1-', '2']),
            `Inline MSGID continuation should be parsed into two rawLines. Got: ${JSON.stringify(parsedField.msgid.rawLines)}`
        );

        setCurrentDocument(sample);

        const movedField = {
            ...parsedField,
            row: 19,
            col: 17
        };

        updateFieldInDds(movedField, parsedField);
        const result = getCurrentDocument();

        assert.ok(
            result.includes('MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-\n     A                                      2)'),
            `Inline MSGID continuation should remain adjacent after move. Got:\n${result}`
        );
        assert.ok(
            result.includes('A  34N43                               COLOR(RED)'),
            `COLOR(RED) line should stay associated with the field. Got:\n${result}`
        );
        assert.strictEqual(
            (result.match(/2\)/g) || []).length,
            1,
            `Inline MSGID closure must not be duplicated. Got:\n${result}`
        );
        assert.ok(
            result.indexOf('COLOR(RED)') > result.indexOf('2)'),
            `COLOR(RED) should appear after the MSGID continuation closure. Got:\n${result}`
        );

        console.log('PASS: run-msgid-inline-parser-regression.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-msgid-inline-parser-regression.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();