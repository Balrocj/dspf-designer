const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function run() {
    try {
        const scriptPath = path.resolve(__dirname, '..', 'media', 'dspfDesigner.js');
        const code = fs.readFileSync(scriptPath, 'utf8');

        const sandbox = {
            module: {},
            console: console,
            window: { addEventListener: () => {} },
            // Minimal DOM mocks used by the webview script
            document: {
                addEventListener: (evt, cb) => { if (evt === 'DOMContentLoaded') { setImmediate(cb); } },
                createElement: () => ({ style: {}, appendChild: () => {}, setAttribute: () => {}, innerHTML: '', className: '', querySelectorAll: () => [], querySelector: () => null, remove: () => {} }),
                getElementById: () => ({ addEventListener: () => {}, innerHTML: '', value: '', appendChild: () => {}, style: {}, classList: { add: () => {}, remove: () => {} }, querySelectorAll: () => [], querySelector: () => null, remove: () => {} }),
                querySelector: () => ({ addEventListener: () => {}, innerHTML: '', value: '', appendChild: () => {}, style: {}, classList: { add: () => {}, remove: () => {} } }),
                querySelectorAll: () => []
            },
            Logger: { parse: () => {}, dds: () => {}, error: () => {}, debug: () => {}, warn: () => {} },
            currentDocument: null,
            updateDocumentInEditor: () => {},
            // Mock the VS Code acquireVsCodeApi for webview scripts
            acquireVsCodeApi: () => ({ postMessage: () => {} }),
        };
        // Provide timer functions in the sandbox used by the webview script
        sandbox.setTimeout = (fn, ms) => setImmediate(fn);
        sandbox.setInterval = (fn, ms) => { const id = setInterval(fn, ms); return id; };
        sandbox.clearTimeout = (id) => { /* no-op */ };
        sandbox.clearInterval = (id) => { clearInterval(id); };
        vm.createContext(sandbox);
        // Run the webview script; it will attach test exports to module.exports when available
        vm.runInContext(code, sandbox);
        // Prefer module.exports, but fall back to window.__TESTS for test exposure
        const removeFieldFromDds = (sandbox.module && sandbox.module.exports && sandbox.module.exports.removeFieldFromDds) || (sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.removeFieldFromDds);
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

        // Set the IIFE-scoped currentDocument using test setter
        if (sandbox.module && sandbox.module.exports && sandbox.module.exports.setCurrentDocument) {
            sandbox.module.exports.setCurrentDocument(sample);
        } else if (sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.setCurrentDocument) {
            sandbox.window.__TESTS.setCurrentDocument(sample);
        } else {
            sandbox.currentDocument = sample; // fallback
        }
        removeFieldFromDds({ name: 'MYFLD', row: 10, col: 5 });
        // Retrieve the updated document from the IIFE via test getter
        const moduleGetter = sandbox.module && sandbox.module.exports && sandbox.module.exports.getCurrentDocument;
        const windowGetter = sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.getCurrentDocument;
        console.log('module.getCurrentDocument=', !!moduleGetter, 'window.getCurrentDocument=', !!windowGetter);
        let result = null;
        if (moduleGetter) {
            result = sandbox.module.exports.getCurrentDocument();
        } else if (windowGetter) {
            result = sandbox.window.__TESTS.getCurrentDocument();
        } else {
            result = sandbox.currentDocument;
        }
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

        // Set document for second test
        if (sandbox.module && sandbox.module.exports && sandbox.module.exports.setCurrentDocument) {
            sandbox.module.exports.setCurrentDocument(sample);
        } else if (sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.setCurrentDocument) {
            sandbox.window.__TESTS.setCurrentDocument(sample);
        } else {
            sandbox.currentDocument = sample; // fallback
        }
        removeFieldFromDds({ name: 'BTN', row: 2, col: 22 });

        // Retrieve the updated document via available getter (like test1)
        const moduleGetter2 = sandbox.module && sandbox.module.exports && sandbox.module.exports.getCurrentDocument;
        const windowGetter2 = sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.getCurrentDocument;
        let result2 = null;
        if (moduleGetter2) {
            result2 = sandbox.module.exports.getCurrentDocument();
        } else if (windowGetter2) {
            result2 = sandbox.window.__TESTS.getCurrentDocument();
        } else {
            result2 = sandbox.currentDocument;
        }
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

        if (sandbox.module && sandbox.module.exports && sandbox.module.exports.setCurrentDocument) {
            sandbox.module.exports.setCurrentDocument(sample);
        } else if (sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.setCurrentDocument) {
            sandbox.window.__TESTS.setCurrentDocument(sample);
        } else {
            sandbox.currentDocument = sample; // fallback
        }

        removeFieldFromDds({ name: 'W_EDT_EST', row: 8, col: 19 });

        const moduleGetter3 = sandbox.module && sandbox.module.exports && sandbox.module.exports.getCurrentDocument;
        const windowGetter3 = sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.getCurrentDocument;
        let result3 = null;
        if (moduleGetter3) {
            result3 = sandbox.module.exports.getCurrentDocument();
        } else if (windowGetter3) {
            result3 = sandbox.window.__TESTS.getCurrentDocument();
        } else {
            result3 = sandbox.currentDocument;
        }
        console.log('Result after removal (test3):\n' + result3);
        assert(!result3.includes("VALUES('A' 'I')"), 'Inline VALUES should be removed when deleting field');
        assert(result3.includes('NEXT'), 'NEXT field should remain');
        console.log('Test 3 passed');

        // Test 4: Ensure deleting a field with DSPATR does not remove the following field that has COLOR
        sample = [
            "A            W_EDT_USRM    10A  O 11 56DSPATR(HI)",
            ("A" + " ".repeat(42) + "COLOR(BLU)"),  // COLOR as a separate line
            "A            W_EDT_FECM    10A  O 12 56COLOR(BLU)",
            "A            OTHER         1A  B  1  1",
        ].join('\n');

        if (sandbox.module && sandbox.module.exports && sandbox.module.exports.setCurrentDocument) {
            sandbox.module.exports.setCurrentDocument(sample);
        } else if (sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.setCurrentDocument) {
            sandbox.window.__TESTS.setCurrentDocument(sample);
        } else {
            sandbox.currentDocument = sample; // fallback
        }

        // Delete the first field and verify the second remains
        removeFieldFromDds({ name: 'W_EDT_USRM', row: 11, col: 56 });

        const moduleGetter4 = sandbox.module && sandbox.module.exports && sandbox.module.exports.getCurrentDocument;
        const windowGetter4 = sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.getCurrentDocument;
        let result4 = null;
        if (moduleGetter4) {
            result4 = sandbox.module.exports.getCurrentDocument();
        } else if (windowGetter4) {
            result4 = sandbox.window.__TESTS.getCurrentDocument();
        } else {
            result4 = sandbox.currentDocument;
        }
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

        if (sandbox.module && sandbox.module.exports && sandbox.module.exports.setCurrentDocument) {
            sandbox.module.exports.setCurrentDocument(sample);
        } else if (sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.setCurrentDocument) {
            sandbox.window.__TESTS.setCurrentDocument(sample);
        } else {
            sandbox.currentDocument = sample;
        }

        removeFieldFromDds({ name: 'W_DSP_HORM', row: 13, col: 56 });

        const moduleGetter5 = sandbox.module && sandbox.module.exports && sandbox.module.exports.getCurrentDocument;
        const windowGetter5 = sandbox.window && sandbox.window.__TESTS && sandbox.window.__TESTS.getCurrentDocument;
        let result5 = null;
        if (moduleGetter5) {
            result5 = sandbox.module.exports.getCurrentDocument();
        } else if (windowGetter5) {
            result5 = sandbox.window.__TESTS.getCurrentDocument();
        } else {
            result5 = sandbox.currentDocument;
        }
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