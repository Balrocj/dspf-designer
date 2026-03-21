const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

describe('removeFieldFromDds attribute whitelist', function() {
    it('removes VALUES and CHECK attribute lines (and continuations) when deleting a field', function() {
        // Load the webview script into a sandbox and expose module-like environment
        const scriptPath = path.resolve(__dirname, '..', 'media', 'dspfDesigner.js');
        const code = fs.readFileSync(scriptPath, 'utf8');

        const sandbox = {
            module: {},
            console: console,
            Logger: { parse: () => {}, dds: () => {}, error: () => {}, debug: () => {}, warn: () => {} },
            currentDocument: null,
            updateDocumentInEditor: () => {},
        };
        vm.createContext(sandbox);
        vm.runInContext(code + '\nmodule.exports = { removeFieldFromDds: removeFieldFromDds, processMultiLineContinuation: processMultiLineContinuation };', sandbox);

        const removeFieldFromDds = sandbox.module.exports.removeFieldFromDds;

        const sample = [
            "A          R RECORD",
            "A            MYFLD        10  5",
            "A                                      VALUES('A' 'B')",
            "A                                      CHECK(ER)",
            "A            OTHER        10 15",
        ].join('\n');

        sandbox.currentDocument = sample;

        removeFieldFromDds({ name: 'MYFLD' });

        const result = sandbox.currentDocument;
        assert(!result.includes("VALUES('A' 'B')"), 'VALUES line should be removed');
        assert(!result.includes('CHECK(ER)'), 'CHECK line should be removed');
        assert(result.includes('OTHER'), 'OTHER field should remain');
    });

    it('removes PSHBTNCHC/PSHBTNFLD pairs properly', function() {
        const scriptPath = path.resolve(__dirname, '..', 'media', 'dspfDesigner.js');
        const code = fs.readFileSync(scriptPath, 'utf8');

        const sandbox = {
            module: {},
            console: console,
            Logger: { parse: () => {}, dds: () => {}, error: () => {}, debug: () => {}, warn: () => {} },
            currentDocument: null,
            updateDocumentInEditor: () => {},
        };
        vm.createContext(sandbox);
        vm.runInContext(code + '\nmodule.exports = { removeFieldFromDds: removeFieldFromDds };', sandbox);

        const removeFieldFromDds = sandbox.module.exports.removeFieldFromDds;

        const sample = [
            "A            BTN          2Y 0B 22 32PSHBTNFLD(*NORSTCSR)",
            "A                                      PSHBTNCHC(1 'F7=...' +",
            "A                                      PSHBTNCHC(1 'continued')",
            "A            NEXT         2Y 0B  1 54",
        ].join('\n');

        sandbox.currentDocument = sample;

        removeFieldFromDds({ name: 'BTN' });

        const result = sandbox.currentDocument;
        assert(!result.includes('PSHBTNFLD'), 'PSHBTNFLD line should be removed');
        assert(!result.includes('PSHBTNCHC'), 'PSHBTNCHC lines should be removed');
        assert(result.includes('NEXT'), 'NEXT field should remain');
    });
});