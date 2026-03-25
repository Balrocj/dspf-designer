const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function countKeywordLines(text, keyword) {
    return text
        .split('\n')
        .filter(line => line.includes(keyword))
        .length;
}

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
            value: '',
            checked: false,
            disabled: false
        };

        const elements = {
            'sfldsp-enabled': { ...elementStub, checked: false },
            'sfldspctl-enabled': { ...elementStub, checked: false }
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
                getElementById: (id) => elements[id] || null,
                querySelector: () => null,
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
        const applySubfileControl = tests.applySubfileControl;
        const clearIndicatorConfigurations = tests.clearIndicatorConfigurations;

        if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !applySubfileControl || !clearIndicatorConfigurations) {
            throw new Error('Required applySubfileControl test helpers are not exported');
        }

        const sample = [
            '     A          R PANTALLA                  SFLCTL(SUBFILE)',
            '     A                                      SFLDSPCTL',
            '     A            FLD001        10A  O 10 10',
            '     A          R NEXTREC',
            '     A            FLD002        10A  O  1  1'
        ].join('\n');

        setCurrentRecord('PANTALLA');
        setCurrentDocument(sample);
        clearIndicatorConfigurations();

        // Step 1: Uncheck + apply should remove SFLDSPCTL line.
        elements['sfldspctl-enabled'].checked = false;
        applySubfileControl();

        const afterDisable = getCurrentDocument();
        assert.strictEqual(
            countKeywordLines(afterDisable, 'SFLDSPCTL'),
            0,
            'SFLDSPCTL should be removed after disabling and applying'
        );

        // Step 2: Re-check + apply should reinsert bare SFLDSPCTL line.
        elements['sfldspctl-enabled'].checked = true;
        applySubfileControl();

        const afterReEnable = getCurrentDocument();
        assert.strictEqual(
            countKeywordLines(afterReEnable, 'SFLDSPCTL'),
            1,
            'SFLDSPCTL should be reinserted after re-enabling and applying'
        );

        console.log('PASS: run-sfldspctl-reinsert-on-enable.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-sfldspctl-reinsert-on-enable.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
