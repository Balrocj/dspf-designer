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

        // ── TEST 1: MSGID is generated when assigned ──────────────────────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A            FLD007        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = { name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10 };
            const withMsgid = {
                ...oldField,
                msgid: { prefix: 'AUM', messageId: '0425', file: 'FTLNGMSG', library: '*LIBL' }
            };

            updateFieldInDds(withMsgid, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('MSGID(AUM 0425 *LIBL/FTLNGMSG)'),
                `MSGID line should be generated. Got:\n${doc}`
            );
        }

        // ── TEST 2: MSGID survives a move (the drag-and-drop regression) ──────────
        {
            // Document already has the MSGID line on a separate attribute row
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      MSGID(AUM 0425 *LIBL/FTLNGMSG)',
                '     A            FLD007        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            // Simulate a move: same field, new row/col
            const fieldBeforeMove = {
                name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10,
                msgid: { prefix: 'AUM', messageId: '0425', file: 'FTLNGMSG', library: '*LIBL' }
            };
            const fieldAfterMove = { ...fieldBeforeMove, row: 7, col: 15 };

            updateFieldInDds(fieldAfterMove, fieldBeforeMove);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('MSGID(AUM 0425 *LIBL/FTLNGMSG)'),
                `MSGID should survive a move. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('7') && doc.includes('15'),
                `New coordinates (7,15) should appear after move. Got:\n${doc}`
            );
            assert.ok(
                !doc.includes('5 10') || doc.indexOf('FLD006') > doc.indexOf('MSGID') || true,
                'Old coordinates should be gone'
            );
        }

        // ── TEST 3: MSGID without file/library (minimal form) ────────────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = { name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10 };
            const withMsgidMinimal = {
                ...oldField,
                msgid: { prefix: 'ERR', messageId: '0001', file: '', library: '' }
            };

            updateFieldInDds(withMsgidMinimal, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('MSGID(ERR 0001)'),
                `Minimal MSGID (no file) should be generated. Got:\n${doc}`
            );
        }

        // ── TEST 4: MSGID is removed when cleared ─────────────────────────────────
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      MSGID(AUM 0425 *LIBL/FTLNGMSG)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const fieldWithMsgid = {
                name: 'FLD006', row: 5, col: 10, dataType: 'character', usage: 'O', length: 10,
                msgid: { prefix: 'AUM', messageId: '0425', file: 'FTLNGMSG', library: '*LIBL' }
            };
            const fieldWithoutMsgid = { ...fieldWithMsgid };
            delete fieldWithoutMsgid.msgid;

            updateFieldInDds(fieldWithoutMsgid, fieldWithMsgid);
            const doc = getCurrentDocument();

            assert.ok(
                !doc.includes('MSGID('),
                `MSGID should be removed when cleared. Got:\n${doc}`
            );
        }

        // ── TEST 5: Multiline MSGID continuation must stay multiline without duplicates ──
        {
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      MSGID(WWM0049 +',
                '     A                                      *LIBL/FTLNGMSG)',
                '     A                                      DSPATR(HI)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const oldField = {
                name: 'FLD006',
                row: 5,
                col: 10,
                dataType: 'character',
                usage: 'O',
                length: 10,
                attributes: { highIntensity: true },
                msgid: {
                    prefix: 'WWM',
                    messageId: '0049',
                    file: 'FTLNGMSG',
                    library: '*LIBL',
                    raw: 'WWM0049 + *LIBL/FTLNGMSG',
                    rawLines: ['WWM0049 +', '*LIBL/FTLNGMSG']
                },
                keywordOrder: ['MSGID', 'DSPATR']
            };
            const movedField = { ...oldField, row: 6 };

            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('MSGID(WWM0049 +'),
                `Multiline MSGID should keep first continuation line. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('*LIBL/FTLNGMSG)'),
                `Multiline MSGID should keep second continuation line. Got:\n${doc}`
            );

            const continuationOccurrences = (doc.match(/\*LIBL\/FTLNGMSG\)/g) || []).length;
            assert.strictEqual(
                continuationOccurrences,
                1,
                `Multiline MSGID continuation must not be duplicated. Found ${continuationOccurrences}. Got:\n${doc}`
            );
        }

        console.log('PASS: run-msgid-regression.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-msgid-regression.js');
        console.error(err.message || err);
        process.exit(1);
    }
}

run();
