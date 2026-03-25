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
            throw new Error('Required CNTFLD test helpers are not exported');
        }

        const sample = [
            '     A          R PRUEBA',
            '     A            FLD006         5A  B 15 38',
            '     A            FLD007        10A  O 16 10'
        ].join('\n');

        setCurrentRecord('PRUEBA');
        setCurrentDocument(sample);

        const oldField = {
            name: 'FLD006',
            row: 15,
            col: 38,
            dataType: 'character',
            usage: 'B',
            length: 5
        };

        const withCntfld = {
            ...oldField,
            cntfld: { value: '002' }
        };

        updateFieldInDds(withCntfld, oldField);
        const withCntfldDoc = getCurrentDocument();

        assert.ok(
            withCntfldDoc.includes('CNTFLD(002)'),
            'CNTFLD(002) should be generated when CNTFLD is enabled'
        );

        const withoutCntfld = {
            ...withCntfld
        };
        delete withoutCntfld.cntfld;

        updateFieldInDds(withoutCntfld, withCntfld);
        const withoutCntfldDoc = getCurrentDocument();

        assert.ok(
            !withoutCntfldDoc.includes('CNTFLD('),
            'CNTFLD should be removed when the keyword is disabled'
        );

        console.log('PASS: run-cntfld-regression.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-cntfld-regression.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
