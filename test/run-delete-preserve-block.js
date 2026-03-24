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
        const removeFieldFromDds = tests.removeFieldFromDds;

        if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !removeFieldFromDds) {
            throw new Error('Required removeFieldFromDds test helpers are not exported');
        }

        // Delete regression: all lines between PRUEBA and FLD005 belong to PRUEBA and
        // should be removed when deleting PRUEBA, including unknown/non-regenerated keywords.
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

        removeFieldFromDds({
            name: 'PRUEBA',
            recordName: 'PRUEBA',
            row: 18,
            col: 31
        });

        const result = getCurrentDocument();

        assert(!result.includes('PRUEBA        10A  O 18 31'), 'PRUEBA field line should be removed');
        assert(!result.includes('DSPATR(RI)'), 'Associated DSPATR line should be removed');
        assert(!result.includes('RANGE(1 10)'), 'Associated unknown/non-regenerated RANGE line should be removed');
        assert(result.includes('FLD005'), 'Next field FLD005 should remain');

        console.log('Test passed: delete removes full PRUEBA block (including unknown/non-regenerated lines).');
        process.exit(0);
    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

run();
