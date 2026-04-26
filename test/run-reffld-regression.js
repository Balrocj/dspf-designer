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

        const { setCurrentDocument, getCurrentDocument, setCurrentRecord, updateFieldInDds } = tests;

        if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !updateFieldInDds) {
            throw new Error('Required test helpers are not exported');
        }

        // ── TEST 1: REFFLD is parsed and preserved ───────────────────────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      REFFLD(REFFLD_SOURCE SRCFILE)',
                '     A            FLD007        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = { name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10 };
            const withReffld = {
                ...oldField,
                reffld: { raw: 'REFFLD_SOURCE SRCFILE' }
            };

            updateFieldInDds(withReffld, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(REFFLD_SOURCE SRCFILE)'),
                `REFFLD line should be generated. Got:\n${doc}`
            );
        }

        // ── TEST 2: REFFLD survives a move (round-trip preservation) ─────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      REFFLD(REFFLD_SOURCE SRCFILE)',
                '     A            FLD007        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const fieldBeforeMove = {
                name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10,
                reffld: { raw: 'REFFLD_SOURCE SRCFILE' }
            };
            const fieldAfterMove = { ...fieldBeforeMove, row: 8, col: 20 };

            updateFieldInDds(fieldAfterMove, fieldBeforeMove);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(REFFLD_SOURCE SRCFILE)'),
                `REFFLD should survive a move. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('8') && doc.includes('20'),
                `New coordinates (8,20) should appear after move. Got:\n${doc}`
            );
        }

        // ── TEST 3: REFFLD with library reference ─────────────────────────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = { name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10 };
            const withReffldLib = {
                ...oldField,
                reffld: { raw: 'CUSTNAME MYLIB/CUSTPF' }
            };

            updateFieldInDds(withReffldLib, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(CUSTNAME MYLIB/CUSTPF)'),
                `REFFLD with lib/file should be generated. Got:\n${doc}`
            );
        }

        // ── TEST 4: REFFLD can be removed (field without REFFLD) ─────────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      REFFLD(REFFLD_SOURCE SRCFILE)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const fieldWithReffld = {
                name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10,
                reffld: { raw: 'REFFLD_SOURCE SRCFILE' }
            };
            const fieldWithoutReffld = { ...fieldWithReffld };
            delete fieldWithoutReffld.reffld;

            updateFieldInDds(fieldWithoutReffld, fieldWithReffld);
            const doc = getCurrentDocument();

            assert.ok(
                !doc.includes('REFFLD('),
                `REFFLD should be removed when cleared. Got:\n${doc}`
            );
        }

        // ── TEST 5: Reference type (R n U) must be preserved on updates ──────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            SCRPRO2       R   4  B  6 48TEXT(\'Product Number\')',
                '     A                                      REFFLD(RACMST/ACMPRO *LIBL/ACMST)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = {
                name: 'SCRPRO2',
                row: 6,
                col: 48,
                dataType: 'reference',
                usage: 'B',
                decimals: 4,
                length: 0,
                reffld: { raw: 'RACMST/ACMPRO *LIBL/ACMST' }
            };
            const movedField = { ...oldField, row: 7 };

            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                /SCRPRO2\s+R\s+4\s+B/i.test(doc),
                `Reference type should remain R 4 B (not 10A). Got:\n${doc}`
            );
            assert.ok(
                !/SCRPRO2\s+10A\s+B/i.test(doc),
                `Reference type must not be converted to 10A. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('REFFLD(RACMST/ACMPRO *LIBL/ACMST)'),
                `REFFLD should remain present after update. Got:\n${doc}`
            );
        }

        // ── TEST 6: Preserve original keyword order (REFFLD before DSPATR) ──────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            SCRPRO2       R   4  B  6 48TEXT(\'Product Number\')',
                '     A                                      REFFLD(RACMST/ACMPRO *LIBL/ACMST)',
                '     A                                      DSPATR(UL)',
                '     A N10                                  DSPATR(RI)',
                '     A  98                                  DSPATR(PR)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = {
                name: 'SCRPRO2',
                row: 6,
                col: 48,
                dataType: 'reference',
                usage: 'B',
                decimals: 4,
                length: 0,
                reffld: { raw: 'RACMST/ACMPRO *LIBL/ACMST' },
                attributes: {
                    underline: true,
                    reverse: true,
                    protect: true
                },
                attributeIndicators: {
                    reverse: {
                        groups: [{ indicators: [{ number: '10', not: true }] }],
                        isOr: false
                    },
                    protect: {
                        groups: [{ indicators: [{ number: '98', not: false }] }],
                        isOr: false
                    }
                },
                keywordOrder: ['REFFLD', 'DSPATR']
            };
            const movedField = { ...oldField, row: 7 };

            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            const reffldIndex = doc.indexOf('REFFLD(RACMST/ACMPRO *LIBL/ACMST)');
            const firstDspatrIndex = doc.indexOf('DSPATR(');

            assert.ok(
                reffldIndex >= 0 && firstDspatrIndex >= 0 && reffldIndex < firstDspatrIndex,
                `REFFLD should stay before DSPATR after update. Got:\n${doc}`
            );
        }

        // ── TEST 7: Old-style reference indicator with type override ('R A B') ──
        // Some DDS sources use 'R' as the reference INDICATOR at col 29 and then an
        // explicit data-type letter (e.g. 'A') before the usage letter (e.g. 'B').
        // The parser must skip that type-override token so usage is correctly read as 'B',
        // not defaulted to 'O'.
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            SCRBNK    R      A  B 10 48',
                '     A                                      REFFLD(RACMST/ACMBNK *LIBL/ACMST)',
                '     A  10                                  DSPATR(RI)',
                '     A                                      DSPATR(UL)',
                '     A  98                                  DSPATR(PR)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = {
                name: 'SCRBNK',
                row: 10,
                col: 48,
                dataType: 'reference',
                usage: 'B',
                decimals: 0,
                length: 0,
                reffld: { raw: 'RACMST/ACMBNK *LIBL/ACMST' },
                attributes: { underline: true, reverse: true, protect: true },
                attributeIndicators: {
                    reverse: {
                        groups: [{ indicators: [{ number: '10', not: false }] }],
                        isOr: false
                    },
                    protect: {
                        groups: [{ indicators: [{ number: '98', not: false }] }],
                        isOr: false
                    }
                }
            };
            const movedField = { ...oldField, row: 11 };

            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                /SCRBNK\s+R\s+\d+\s+B/i.test(doc),
                `Old-style reference field should preserve usage B (not O). Got:\n${doc}`
            );
            assert.ok(
                !/SCRBNK\s+R\s+\d+\s+O/i.test(doc),
                `Old-style reference field must not downgrade usage to O. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('REFFLD(RACMST/ACMBNK *LIBL/ACMST)'),
                `REFFLD should be preserved for old-style reference field. Got:\n${doc}`
            );
        }

        // ── TEST 8: Multiline REFFLD on field line must stay multiline ─────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            SCRNME    R        O  1 23REFFLD(RCNTRCNT/CNTNME +',
                '     A                                      *LIBL/CNTRLCNT)',
                '     A                                      DSPATR(HI)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = {
                name: 'SCRNME',
                row: 1,
                col: 23,
                dataType: 'reference',
                usage: 'O',
                decimals: 0,
                length: 0,
                attributes: { highIntensity: true },
                reffld: {
                    raw: 'RCNTRCNT/CNTNME + *LIBL/CNTRLCNT',
                    rawLines: ['RCNTRCNT/CNTNME +', '*LIBL/CNTRLCNT']
                },
                keywordOrder: ['REFFLD', 'DSPATR']
            };

            const movedField = { ...oldField, row: 2 };
            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(RCNTRCNT/CNTNME +'),
                `First REFFLD line should keep continuation '+'. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('*LIBL/CNTRLCNT)'),
                `Second REFFLD continuation line should be preserved. Got:\n${doc}`
            );

            const continuationOccurrences = (doc.match(/\*LIBL\/CNTRLCNT\)/g) || []).length;
            assert.strictEqual(
                continuationOccurrences,
                1,
                `REFFLD continuation line must not be duplicated. Found ${continuationOccurrences}. Got:\n${doc}`
            );
        }

        console.log('PASS: run-reffld-regression.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-reffld-regression.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
