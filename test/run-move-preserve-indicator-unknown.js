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
    try {
        const tests = createHarness();
        if (!tests) {
            throw new Error('No test exports found');
        }

        const setCurrentDocument = tests.setCurrentDocument;
        const getCurrentDocument = tests.getCurrentDocument;
        const setCurrentRecord = tests.setCurrentRecord;
        const updateFieldInDds = tests.updateFieldInDds;

        if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !updateFieldInDds) {
            throw new Error('Required updateFieldInDds test helpers are not exported');
        }

        // Move regression (through update old/new): indicator-only line + unknown keyword line
        // must remain associated with field after changing position.
        const sample = [
            '     A          R PRUEBA',
            '     A            PRUEBA        10A  O 18 31',
            '     A  60',
            '     A                                      KEEP',
            '     A            FLD005        16Y 0O  8 51EDTCDE(3 $)'
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const movedField = {
            name: 'PRUEBA',
            recordName: 'PRUEBA',
            row: 18,
            col: 33,
            length: 10,
            dataType: 'character',
            usage: 'O'
        };

        const oldField = {
            name: 'PRUEBA',
            recordName: 'PRUEBA',
            row: 18,
            col: 31,
            length: 10,
            dataType: 'character',
            usage: 'O'
        };

        updateFieldInDds(movedField, oldField);

        const result = getCurrentDocument();

        assert(result.includes('PRUEBA        10A  O 18 33'), 'Field should be moved to new column');
        assert(result.includes('A  60'), 'Indicator-only line should be preserved with associated unknown keyword');
        assert(result.includes('KEEP'), 'Unknown keyword should be preserved');
        assert(result.includes('FLD005'), 'Next field should remain');

        const idxIndicator = result.indexOf('A  60');
        const idxKeep = result.indexOf('KEEP');
        const idxFld005 = result.indexOf('FLD005');
        assert(idxIndicator > -1 && idxKeep > -1 && idxFld005 > -1, 'Expected indicator, KEEP and FLD005 in result');
        assert(idxIndicator < idxKeep && idxKeep < idxFld005, 'Indicator + KEEP should remain before FLD005');

        console.log('Test passed: move/update preserves indicator-only + unknown keyword associated lines.');
        process.exit(0);
    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

run();
