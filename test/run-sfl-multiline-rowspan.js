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
        const getSubfileRelationship = tests.getSubfileRelationship;
        const getSflpagValue = tests.getSflpagValue;
        const getSflRowSpan = tests.getSflRowSpan;
        const applySflpagRepetition = tests.applySflpagRepetition;

        if (!setCurrentDocument || !getSubfileRelationship || !getSflpagValue || !getSflRowSpan || !applySflpagRepetition) {
            throw new Error('Required SFL multiline helpers are not exported');
        }

        // FMTSFL consumes 2 display rows per subfile entry (rows 8 and 9)
        const sample = [
            '     A                                      DSPSIZ(24 80 *DS3)',
            '     A          R FMTSFL',
            '     A                                      SFL',
            '     A            DATE           6Y 0O  8  2',
            '     A            DESC          27A  O  8 14',
            '     A                                  9  2\'Fec Valor:\'',
            '     A            NVDATE         6Y 0O  9 13',
            '     A          R FMTCTL                    SFLCTL(FMTSFL)',
            '     A                                      SFLSIZ(0009)',
            '     A  *DS3                                SFLPAG(0003)'
        ].join('\n');

        setCurrentDocument(sample);

        const rel = getSubfileRelationship('FMTSFL');
        assert.ok(rel, 'Expected SFL relationship for FMTSFL');
        assert.strictEqual(rel.sflRecord, 'FMTSFL', 'Expected FMTSFL as SFL record');
        assert.strictEqual(rel.sflctlRecord, 'FMTCTL', 'Expected FMTCTL as SFLCTL record');

        const sflpag = getSflpagValue(rel.sflctlRecord);
        assert.strictEqual(sflpag, 3, 'Expected SFLPAG(0003) to be parsed as 3');

        const fields = [
            { id: 'f1', name: 'DATE', row: 8, col: 2, isBackgroundRecord: false },
            { id: 'f2', name: 'DESC', row: 8, col: 14, isBackgroundRecord: false },
            { id: 'f3', name: 'FECVAL', row: 9, col: 2, isBackgroundRecord: false },
            { id: 'f4', name: 'NVDATE', row: 9, col: 13, isBackgroundRecord: false }
        ];

        const span = getSflRowSpan(fields, 'FMTSFL', rel);
        assert.strictEqual(span, 2, 'Expected row span 2 for multiline subfile entry');

        const repeated = applySflpagRepetition(fields, 'FMTSFL', rel);
        assert.strictEqual(repeated.length, 12, 'Expected original 4 fields + 8 visual copies (3 entries total)');

        const dateRows = repeated
            .filter(f => f.name === 'DATE')
            .map(f => f.row)
            .sort((a, b) => a - b);

        const fecValRows = repeated
            .filter(f => f.name === 'FECVAL')
            .map(f => f.row)
            .sort((a, b) => a - b);

        assert.strictEqual(dateRows.join(','), '8,10,12', 'DATE rows should jump by 2 per repeated entry');
        assert.strictEqual(fecValRows.join(','), '9,11,13', 'FECVAL rows should jump by 2 per repeated entry');

        console.log('PASS: run-sfl-multiline-rowspan.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-sfl-multiline-rowspan.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
