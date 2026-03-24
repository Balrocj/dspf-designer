const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function run() {
    try {
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

        const tests = (sandbox.window && sandbox.window.__TESTS) || sandbox.module.exports;
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

        // PRUEBA regression: all lines between PRUEBA and FLD005 belong to PRUEBA.
        // Known regenerated keywords (DSPATR/DFTVAL/COLOR) can be regenerated,
        // but unknown/non-regenerated ones (RANGE) must remain attached.
        const sample = [
            '     A          R PRUEBA',
            '     A            PRUEBA        10A  O 18 31',
            '     A  79N10                               DSPATR(RI)',
            '     A  50                                  DSPATR(BL)',
            "     A  60                                  DFTVAL('XXX')",
            '     A  99                                  COLOR(WHT)',
            '     A  60                                  COLOR(TRQ)',
            '     A                                      RANGE(1 10)',
            '     A            FLD005        16Y 0O  8 51EDTCDE(3 $)'
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const updatedField = {
            name: 'PRUEBA',
            recordName: 'PRUEBA',
            row: 18,
            col: 32,
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

        updateFieldInDds(updatedField, oldField);

        const result = getCurrentDocument();

        assert(result.includes('PRUEBA        10A  O 18 32'), 'Field PRUEBA should be updated to new column');
        assert(result.includes('RANGE(1 10)'), 'RANGE line should be preserved as field-associated unknown/non-regenerated keyword');
        assert(result.includes('FLD005'), 'Next field should remain');

        // Verify RANGE still belongs to PRUEBA block and stays before next field FLD005
        const idxRange = result.indexOf('RANGE(1 10)');
        const idxFld005 = result.indexOf('FLD005');
        assert(idxRange > -1 && idxFld005 > -1 && idxRange < idxFld005, 'RANGE should remain before FLD005 within PRUEBA block');

        console.log('Test passed: updateFieldInDds preserves PRUEBA associated unknown/non-regenerated lines.');
        process.exit(0);
    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

run();
