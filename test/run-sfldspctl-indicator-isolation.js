// Regression: scanIndicatorsBackward must stop at a line with any keyword in col 44+,
// even when that keyword has no parentheses (e.g. SFLDSP, OVERLAY).
// Root-cause of the bug: the old regex /^[A-Z]+\s*\(/ only matched keywords WITH '('.
// After the fix, any non-empty content in col 44+ stops the backward scan.
//
// The test scenario (from example.dspf, PANTALLA record):
//   A  28                                  SFLDSP
//   A                                      SFLDSPCTL
//
// SFLDSP has indicator 28. SFLDSPCTL has NO indicators.
// When scanning backward from SFLDSPCTL we must NOT cross the SFLDSP line.

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

        const scanIndicatorsBackward = tests.scanIndicatorsBackward;
        if (!scanIndicatorsBackward) {
            throw new Error('scanIndicatorsBackward is not exported');
        }

        // DDS lines matching the real-world PANTALLA record scenario:
        //   line 0: SFLDSP  - has indicator 28 (no parentheses on keyword)
        //   line 1: SFLDSPCTL - has NO indicators
        const lines = [
            '     A  28                                  SFLDSP',
            '     A                                      SFLDSPCTL'
        ];

        // Test 1: Scanning backward from SFLDSPCTL (lineOffset=1) must return NO indicator groups.
        // The SFLDSP line at offset 0 has content in col44+ → scan must stop there.
        const result = scanIndicatorsBackward(lines, 0, 1, 'TEST-SFLDSPCTL');

        assert.ok(result, 'scanIndicatorsBackward must return a result object');
        const groups = result.scannedLines || [];
        assert.strictEqual(
            groups.length,
            0,
            `SFLDSPCTL should have 0 indicator groups but got ${groups.length}: ${JSON.stringify(groups)}`
        );

        // Test 2: Scanning backward from SFLDSP (lineOffset=0) must also return nothing
        // (there are no lines before it).
        const resultSfldsp = scanIndicatorsBackward(lines, 0, 0, 'TEST-SFLDSP');
        const sfldspGroups = resultSfldsp.scannedLines || [];
        assert.strictEqual(
            sfldspGroups.length,
            0,
            `SFLDSP (no preceding indicator lines) should have 0 groups but got ${sfldspGroups.length}`
        );

        console.log('PASS: run-sfldspctl-indicator-isolation.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-sfldspctl-indicator-isolation.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
