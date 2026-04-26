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
        if (!tests) {throw new Error('No test exports found');}

        const { setCurrentDocument, getCurrentDocument, setCurrentRecord, updateFieldInDds } = tests;

        if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !updateFieldInDds) {
            throw new Error('Required test helpers are not exported');
        }

        // ── TEST 1: REFFLD + MSGID maintain order ────────────────────────────
        {
            const sample = [
                '     A          R TEST1',
                '     A            FIELD1        R    5 10REFFLD(REFZFIELD /REFFILE)',
                '     A                                      MSGID(MSG001 +',
                '     A                                      *LIBL/MSGFILE)',
                '     A            FIELD2        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('TEST1');
            setCurrentDocument(sample);

            const oldField = {
                name: 'FIELD1', row: 5, col: 10, dataType: 'reference', usage: 'O', length: 0,
                reffld: { raw: 'REFZFIELD /REFFILE', rawLines: ['REFZFIELD /REFFILE'] },
                msgid: { prefix: 'MSG', messageId: '001', file: 'MSGFILE', library: '*LIBL', rawLines: ['MSG001 +', '*LIBL/MSGFILE'] },
                keywordOrder: ['REFFLD', 'MSGID']
            };
            const movedField = { ...oldField, row: 7, col: 15 };

            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            // Check that REFFLD appears before MSGID
            const reffldIndex = doc.indexOf('REFFLD(');
            const msgidIndex = doc.indexOf('MSGID(');
            assert.ok(reffldIndex > -1, 'REFFLD should exist');
            assert.ok(msgidIndex > -1, 'MSGID should exist');
            assert.ok(reffldIndex < msgidIndex, 'REFFLD should appear BEFORE MSGID');
            console.log('✅ TEST 1 PASSED: REFFLD and MSGID maintain order');
        }

        // ── TEST 2: REFFLD survives to MSGID in original order on field update ──
        {
            const sample = [
                '     A          R TEST2',
                '     A            FIELD1        R    5 10REFFLD(SRCREF /SRCFILE)',
                '     A                                      MSGID(INFO01 +',
                '     A                                      *LIBL/MESSAGES)',
                '     A            FIELD2        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('TEST2');
            setCurrentDocument(sample);

            const oldField = {
                name: 'FIELD1', row: 5, col: 10, dataType: 'reference', usage: 'O', length: 0,
                reffld: { raw: 'SRCREF /SRCFILE', rawLines: ['SRCREF /SRCFILE'] },
                msgid: { prefix: 'INFO', messageId: '01', file: 'MESSAGES', library: '*LIBL', rawLines: ['INFO01 +', '*LIBL/MESSAGES'] },
                keywordOrder: ['REFFLD', 'MSGID']
            };
            // Edit the field (not move)
            const editedField = { ...oldField, reffld: { raw: 'NEWREF /NEWFILE', rawLines: ['NEWREF /NEWFILE'] } };

            updateFieldInDds(editedField, oldField);
            const doc = getCurrentDocument();

            // Verify both keywords exist and REFFLD still comes first
            const reffldIdx = doc.indexOf('REFFLD(');
            const msgidIdx = doc.indexOf('MSGID(');
            assert.ok(reffldIdx > -1 && msgidIdx > -1, 'Both REFFLD and MSGID should exist');
            assert.ok(reffldIdx < msgidIdx, 'REFFLD should maintain position BEFORE MSGID after edit');
            console.log('✅ TEST 2 PASSED: Keyword order preserved on field edit');
        }

        // ── TEST 3: MSGID + REFFLD order preserved on move operation ──────────
        {
            const sample = [
                '     A          R TEST3',
                '     A            FIELD1        R    5 10MSGID(WARN01 +',
                '     A                                      *LIBL/WARNINGS)',
                '     A                                      REFFLD(WARNGREF /WLIB)',
                '     A            FIELD2        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('TEST3');
            setCurrentDocument(sample);

            const oldField = {
                name: 'FIELD1', row: 5, col: 10, dataType: 'reference', usage: 'O', length: 0,
                msgid: { prefix: 'WARN', messageId: '01', file: 'WARNINGS', library: '*LIBL', rawLines: ['WARN01 +', '*LIBL/WARNINGS'] },
                reffld: { raw: 'WARNGREF /WLIB', rawLines: ['WARNGREF /WLIB'] },
                keywordOrder: ['MSGID', 'REFFLD']
            };
            const movedField = { ...oldField, row: 9, col: 25 };

            updateFieldInDds(movedField, oldField);
            const doc = getCurrentDocument();

            // Verify order is maintained on move
            const msgidIdx = doc.indexOf('MSGID(');
            const reffldIdx = doc.indexOf('REFFLD(');

            assert.ok(msgidIdx > -1 && reffldIdx > -1, 'Both MSGID and REFFLD should exist');
            assert.ok(msgidIdx < reffldIdx, 'MSGID should maintain position BEFORE REFFLD on move');
            console.log('✅ TEST 3 PASSED: Keyword order preserved on field move');
        }

        // ── TEST 4: Multiline MSGID maintains first/continuation line order ─────
        {
            const sample = [
                '     A          R TEST4',
                '     A            FIELD1        R    5 10MSGID(longmessageid123 +',
                '     A                                      *LIBL/VERYLONGMSGFILE)',
                '     A                                      REFFLD(SRCFIELD /SRCFILE)',
                '     A            FIELD2        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('TEST4');
            setCurrentDocument(sample);

            const oldField = {
                name: 'FIELD1', row: 5, col: 10, dataType: 'reference', usage: 'O', length: 0,
                msgid: { 
                    prefix: '', messageId: '', file: 'VERYLONGMSGFILE', library: '*LIBL',
                    rawLines: ['longmessageid123 +', '*LIBL/VERYLONGMSGFILE']
                },
                reffld: { raw: 'SRCFIELD /SRCFILE', rawLines: ['SRCFIELD /SRCFILE'] },
                keywordOrder: ['MSGID', 'REFFLD']
            };
            const editedField = { ...oldField };

            updateFieldInDds(editedField, oldField);
            const doc = getCurrentDocument();

            // Verify both keyword lines exist and multiline MSGID is preserved
            assert.ok(doc.includes('MSGID(longmessageid123 +'), 'First MSGID line with continuation');
            assert.ok(doc.includes('*LIBL/VERYLONGMSGFILE)'), 'MSGID continuation line');
            assert.ok(doc.includes('REFFLD('), 'REFFLD should exist');
            
            // Check order: MSGID should appear before REFFLD
            const msgidIdx = doc.indexOf('MSGID(');
            const reffldIdx = doc.indexOf('REFFLD(');
            assert.ok(msgidIdx < reffldIdx, 'MSGID should appear before REFFLD');
            console.log('✅ TEST 4 PASSED: Multiline MSGID maintains order with REFFLD');
        }

        // ── TEST 5: Verify keywordOrder array is captured and used properly ───
        {
            const sample = [
                '     A          R TEST5',
                '     A            FIELD1        R    5 10REFFLD(REFZFIELD /LIB)',
                '     A                                      MSGID(TEST001 +',
                '     A                                      *LIBL/TESTMSG)',
                '     A            FIELD2        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('TEST5');
            setCurrentDocument(sample);

            const origField = {
                name: 'FIELD1', row: 5, col: 10, dataType: 'reference', usage: 'O', length: 0,
                reffld: { raw: 'REFZFIELD /LIB', rawLines: ['REFZFIELD /LIB'] },
                msgid: { prefix: 'TEST', messageId: '001', file: 'TESTMSG', library: '*LIBL', rawLines: ['TEST001 +', '*LIBL/TESTMSG'] },
                keywordOrder: ['REFFLD', 'MSGID']  // Captured during original parsing
            };

            // Simulate a move that preserves keywordOrder
            const movedField = {
                ...origField,
                row: 12,
                col: 30
                // keywordOrder is preserved via spread operator
            };

            updateFieldInDds(movedField, origField);
            const doc = getCurrentDocument();

            // Extract line content
            const lines = doc.split('\n');
            const reffldLine = lines.find(l => l.includes('REFFLD('));
            const msgidLine = lines.find(l => l.includes('MSGID('));

            assert.ok(reffldLine && msgidLine, 'Both REFFLD and MSGID lines should exist');

            // Find the actual indices in the document
            const reffldIdx = doc.indexOf('REFFLD(');
            const msgidIdx = doc.indexOf('MSGID(');

            assert.ok(reffldIdx < msgidIdx, 'keywordOrder REFFLD -> MSGID should be maintained');
            console.log('✅ TEST 5 PASSED: keywordOrder array is preserved and used during regeneration');
        }

        console.log('\n✅ PASS: run-keyword-position-preservation.js');
        console.log('All keyword position preservation tests passed!\n');
        process.exit(0);

    } catch (error) {
        console.error('❌ FAIL: run-keyword-position-preservation.js');
        console.error(error.message);
        console.error(error.stack);
        process.exit(1);
    }
}

run();
