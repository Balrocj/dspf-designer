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
    try {
        const tests = createHarness();
        if (!tests) throw new Error('No test exports found');

        const removeFieldFromDds = tests.removeFieldFromDds;
        const setCurrentDocument = (doc) => tests.setCurrentDocument ? tests.setCurrentDocument(doc) : null;
        const getCurrentDocument = () => tests.getCurrentDocument ? tests.getCurrentDocument() : null;

        if (!removeFieldFromDds) throw new Error('Could not locate removeFieldFromDds in exported module or window.__TESTS');

        // Test 1
        // Build lines with proper DSPF column alignment (A marker at 1, attribute keywords at 44)
        let sample = [
            "A          R RECORD",
            "A            MYFLD        10  5",
            ("A" + " ".repeat(42) + "VALUES('A' 'B')"),  // Ensure VALUES starts at column 44
            ("A" + " ".repeat(42) + "CHECK(ER)"),        // Ensure CHECK starts at column 44
            "A            OTHER        10 15",
        ].join('\n');

        setCurrentDocument(sample);
        removeFieldFromDds({ name: 'MYFLD', row: 10, col: 5 });
        const result = getCurrentDocument();
        console.log('Result after removal (test1):\n' + result);
        assert(!result.includes("VALUES('A' 'B')"), 'VALUES line should be removed');
        assert(!result.includes('CHECK(ER)'), 'CHECK line should be removed');
        assert(result.includes('OTHER'), 'OTHER field should remain');
        console.log('Test 1 passed');

        // Test 2
        sample = [
            "A            BTN          2Y 0B 22 32PSHBTNFLD(*NORSTCSR)",
            ("A" + " ".repeat(42) + "PSHBTNCHC(1 'F7=...' +"),
            ("A" + " ".repeat(42) + "PSHBTNCHC(1 'continued')"),
            "A            NEXT         2Y 0B  1 54",
        ].join('\n');

        setCurrentDocument(sample);
        removeFieldFromDds({ name: 'BTN', row: 2, col: 22 });
        const result2 = getCurrentDocument();
        console.log('Result after removal (test2):\n' + result2);
        assert(result2 !== null, 'Result should not be null');
        assert(!result2.includes('PSHBTNFLD'), 'PSHBTNFLD line should be removed');
        assert(!result2.includes('PSHBTNCHC'), 'PSHBTNCHC lines should be removed');
        assert(result2.includes('NEXT'), 'NEXT field should remain');
        console.log('Test 2 passed');

        // Test 3: Inline VALUES on the same line as the field
        sample = [
            "A            W_EDT_EST      1A  B  8 19VALUES('A' 'I')",
            "A            NEXT         1A  B 10  1",
        ].join('\n');

        setCurrentDocument(sample);
        removeFieldFromDds({ name: 'W_EDT_EST', row: 8, col: 19 });
        const result3 = getCurrentDocument();
        console.log('Result after removal (test3):\n' + result3);
        assert(!result3.includes("VALUES('A' 'I')"), 'Inline VALUES should be removed when deleting field');
        assert(result3.includes('NEXT'), 'NEXT field should remain');
        console.log('Test 3 passed');

        // Test 4: Ensure deleting a field with DSPATR does not remove the following field that has COLOR
        // Uses standard DDS column alignment (5-space sequence prefix) so row/col land at positions 39-43
        // and the attribute cleanup loop correctly stops at W_EDT_FECM via the coordinate check.
        sample = [
            "     A            W_EDT_USRM    10A  O 11 56DSPATR(HI)",
            ("     A" + " ".repeat(38) + "COLOR(BLU)"),  // COLOR continuation line at DDS col 44
            "     A            W_EDT_FECM    10A  O 12 56COLOR(BLU)",
            "     A            OTHER         1A  B  1  1",
        ].join('\n');

        setCurrentDocument(sample);
        // Delete the first field and verify the second remains
        removeFieldFromDds({ name: 'W_EDT_USRM', row: 11, col: 56 });
        const result4 = getCurrentDocument();
        console.log('Result after removal (test4):\n' + result4);
        assert(!result4.includes('W_EDT_USRM'), 'W_EDT_USRM should be removed');
        assert(result4.includes('W_EDT_FECM'), 'W_EDT_FECM should remain');
        assert(result4.includes('OTHER'), 'OTHER should remain');
        console.log('Test 4 passed');

        // Test 5: Similar field names - W_DSP_HORI vs W_DSP_HORM
        // Make sure deleting one doesn't delete the other due to partial name matching
        sample = [
            "A          R W_DSP_REG",
            "A            W_DSP_HORI    10A  O 13 11COLOR(BLU)",
            "A                                 13 47'HORA...:'",
            "A            W_DSP_HORM    10A  O 13 56COLOR(BLU)",
            "A            OTHER         1A  B  1  1",
        ].join('\n');

        setCurrentDocument(sample);
        removeFieldFromDds({ name: 'W_DSP_HORM', row: 13, col: 56 });
        const result5 = getCurrentDocument();
        console.log('Result after removal (test5):\n' + result5);
        assert(result5.includes('W_DSP_HORI'), 'W_DSP_HORI should remain (different variable)');
        assert(!result5.includes('W_DSP_HORM'), 'W_DSP_HORM should be removed');
        assert(result5.includes('OTHER'), 'OTHER should remain');
        console.log('Test 5 passed');
        
        console.log('All tests passed');
        process.exit(0);
    } catch (err) {
        console.error('Test failed:', err);
        process.exit(1);
    }
}

run();