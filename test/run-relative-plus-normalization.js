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

        const normalize = tests.resolveRelativeCoordinatesInDocument;
        if (!normalize) {
            throw new Error('resolveRelativeCoordinatesInDocument helper is not exported');
        }

        const sample = [
            '     A          R PLUS',
            '     A            FLD001         5A  O  8  3',
            '     A            FLD002         6A  O   +02',
            '     A            FLD003         7A  O   +02',
            '     A            FLD004         8A  O   +02',
            '     A            FLD005         9A  O   +02 ',
            '     A            FLD006        10A  O   +03'
        ].join('\n');

        const result = normalize(sample);
        assert.strictEqual(result.modified, true, 'Expected +NN coordinates to be normalized');

        const lines = result.content.split('\n');
        const expectedCoords = [
            ' 8  3',
            ' 8 10',
            ' 8 18',
            ' 8 27',
            ' 8 37',
            ' 8 49'
        ];

        // Coordinates must live in fixed DDS slot (indices 39..43) for all fields.
        for (let i = 1; i <= 6; i++) {
            const coordSlot = lines[i].substring(39, 44);
            assert.strictEqual(
                coordSlot,
                expectedCoords[i - 1],
                `Field FLD00${i} should have fixed-slot coords ${expectedCoords[i - 1]} but got ${coordSlot}`
            );
        }

        // Verify no relative token remains in the converted record.
        assert.ok(!/\+\d{1,3}/.test(result.content), 'No +NN token should remain after normalization');

        console.log('PASS: run-relative-plus-normalization.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-relative-plus-normalization.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
