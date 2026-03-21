const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { JSDOM } = require('jsdom');

// Load the compiled dspfDesigner.js
const bundlePath = path.join(__dirname, '../media/dspfDesigner.js');
const bundleCode = fs.readFileSync(bundlePath, 'utf8');

function run() {
    try {
        const dom = new JSDOM('<!DOCTYPE html><body></body>');
        const sandbox = {
            window: dom.window,
            document: dom.window.document,
            module: { exports: {} },
        };
        
        // Inject global variables for DOM environment
        sandbox.window.currentDocument = '';
        sandbox.window.__TESTS = {};
        
        // Set up logging
        sandbox.window.Logger = {
            dds: (...args) => console.log('📝', ...args),
            debug: (...args) => console.log('🐛', ...args),
            error: (...args) => console.error('❌', ...args),
            parse: (...args) => console.log('🔍', ...args),
        };
        
        sandbox.window.vscode = {
            postMessage: () => {},
        };
        
        // Execute bundle code in sandbox
        (function() {
            eval(bundleCode);
        }).call(sandbox.window);
        
        // Get exported functions
        const getCurrentDocument = sandbox.window.__TESTS.getCurrentDocument;
        const setCurrentDocument = sandbox.window.__TESTS.setCurrentDocument;
        const removeFieldFromDds = sandbox.window.__TESTS.removeFieldFromDds;
        
        if (!getCurrentDocument || !setCurrentDocument || !removeFieldFromDds) {
            throw new Error('Required functions not exported to __TESTS');
        }
        
        console.log('✅ Test framework loaded\n');
        
        // Test case: W_DSP_HORI and W_DSP_HORM
        // These have similar names but should not be confused
        const sample = [
            "A          R W_DSP_REG",
            "A            W_DSP_HORI    10A  O 13 11COLOR(BLU)",
            "A                                 13 47'HORA...:'",
            "A            W_DSP_HORM    10A  O 13 56COLOR(BLU)",
            "A            OTHER         1A  B  1  1",
        ].join('\n');
        
        console.log('Initial DDS:');
        console.log(sample);
        console.log('\n---\n');
        
        setCurrentDocument(sample);
        
        console.log('Deleting W_DSP_HORM at row=13, col=56...\n');
        removeFieldFromDds({ name: 'W_DSP_HORM', row: 13, col: 56 });
        
        const result = getCurrentDocument();
        
        console.log('\n---\n');
        console.log('Result after removal:');
        console.log(result);
        console.log('\n---\n');
        
        assert(result.includes('W_DSP_HORI'), 'W_DSP_HORI should remain (different variable)');
        assert(!result.includes('W_DSP_HORM'), 'W_DSP_HORM should be removed');
        assert(result.includes('OTHER'), 'OTHER should remain');
        
        console.log('✅ Test passed: W_DSP_HORM deleted without affecting W_DSP_HORI');
        process.exit(0);
    } catch (err) {
        console.error('❌ Test failed:', err);
        process.exit(1);
    }
}

run();
