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
        const getWindowDimensions = tests.getWindowDimensions;

        if (!setCurrentDocument) {
            throw new Error('setCurrentDocument helper is not exported');
        }
        if (!getWindowDimensions) {
            throw new Error('getWindowDimensions helper is not exported');
        }

        const sample = [
            '     A                                      DSPSIZ(24 80 *DS3)',
            '     A          R FUNCION3',
            '     A                                      WINDOW(6 8 12 62)',
            "     A                                      WDWBORDER((*DSPATR RI) (*CHAR '    '))",
            "     A                                 11  2'F3 = Salir'",
            '     A* *DS3                                WINDOW(7 3 9 73)',
            '     A          R NEXTREC',
            '     A                                  1  2\'X\''
        ].join('\n');

        setCurrentDocument(sample);

        const dims = getWindowDimensions('FUNCION3');
        assert.ok(dims && dims.hasWindow, 'Expected FUNCION3 to have WINDOW dimensions');
        assert.ok(dims.ds3, 'Expected DS3 dimensions to be detected');

        assert.strictEqual(dims.ds3.row, 6, 'DS3 row must come from active WINDOW line, not commented line');
        assert.strictEqual(dims.ds3.col, 8, 'DS3 col must come from active WINDOW line, not commented line');
        assert.strictEqual(dims.ds3.height, 12, 'DS3 height must come from active WINDOW line, not commented line');
        assert.strictEqual(dims.ds3.width, 62, 'DS3 width must come from active WINDOW line, not commented line');

        console.log('PASS: run-window-comment-ignore.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-window-comment-ignore.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
