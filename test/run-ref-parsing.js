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
        if (!tests) throw new Error('No test exports found');

        const { parseFileMetadata } = tests;

        if (!parseFileMetadata) {
            throw new Error('parseFileMetadata function is not exported');
        }

        // ── TEST 1: REF is parsed from file beginning ──────────────────────
        {
            const sample = [
                '     A          REF(CUSTPF)',
                '     A          R SCREEN1',
                '     A            FLD001        10A  O  5 10'
            ].join('\n');

            const result = parseFileMetadata(sample);
            assert.ok(
                result && result.ref && result.ref.raw === 'CUSTPF',
                `REF should be parsed. Got: ${JSON.stringify(result)}`
            );
        }

        // ── TEST 2: REF with library/file ────────────────────────────────
        {
            const sample = [
                '     A          REF(MYLIB/CUSTPF)',
                '     A          R SCREEN1',
                '     A            FLD001        10A  O  5 10'
            ].join('\n');

            const result = parseFileMetadata(sample);
            assert.ok(
                result && result.ref && result.ref.raw === 'MYLIB/CUSTPF',
                `REF with library should be parsed. Got: ${JSON.stringify(result)}`
            );
        }

        // ── TEST 3: REF is NOT parsed if it appears after a record ────────
        {
            const sample = [
                '     A          R SCREEN1',
                '     A          REF(CUSTPF)',
                '     A            FLD001        10A  O  5 10'
            ].join('\n');

            const result = parseFileMetadata(sample);
            assert.ok(
                !result || !result.ref,
                `REF after record should NOT be parsed. Got: ${JSON.stringify(result)}`
            );
        }

        // ── TEST 4: No REF parsing when not present ──────────────────────
        {
            const sample = [
                '     A          R SCREEN1',
                '     A            FLD001        10A  O  5 10'
            ].join('\n');

            const result = parseFileMetadata(sample);
            assert.ok(
                result && (!result.ref || result.ref === null),
                `No REF should result in null. Got: ${JSON.stringify(result)}`
            );
        }

        console.log('PASS: run-ref-parsing.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-ref-parsing.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
