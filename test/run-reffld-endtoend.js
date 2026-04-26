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
        value: '',
        fieldId: undefined  // Make fieldId settable
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

        const { 
            setCurrentDocument, 
            getCurrentDocument, 
            setCurrentRecord, 
            updateFieldInDds 
        } = tests;

        if (!setCurrentDocument || !getCurrentDocument || !setCurrentRecord || !updateFieldInDds) {
            throw new Error('Required test helpers are not exported');
        }

        // ── TEST 1: REFFLD is preserved when field is moved ──────────────
        {
            console.log('\n=== TEST 1: Parse REFFLD, move field, verify preservation ===');
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      REFFLD(REFFIELD SRCFILE)',
                '     A            FLD007        10A  O  6 10'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            // Create field object as if it was parsed (matching what parseDspfFields would do)
            const field = {
                name: 'FLD006',
                type: 'variable',
                dataType: 'character',
                length: 10,
                usage: 'O',
                row: 5,
                col: 10,
                recordName: 'PRUEBA',
                // THIS IS KEY: field.reffld would be set by parseDspfFields during scanning
                reffld: { raw: 'REFFIELD SRCFILE' }
            };

            // Simulate user moving the field
            const movedField = { ...field, row: 8, col: 15 };
            
            updateFieldInDds(movedField, field);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(REFFIELD SRCFILE)'),
                `REFFLD should be preserved after move. Got:\n${doc}`
            );
            assert.ok(
                doc.includes('8 15'),
                `New coordinates (8,15) should be in output. Got:\n${doc}`
            );
            
            console.log('✅ REFFLD preserved when field is moved');
        }

        // ── TEST 2: REFFLD is preserved when field properties change ──────────────
        {
            console.log('\n=== TEST 2: Field property change, REFFLD preserved ===');
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD001        10A  O  5 10',
                '     A                                      REFFLD(CUSTNAME CUSTFILE)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const field = {
                name: 'FLD001',
                type: 'variable',
                dataType: 'character',
                length: 10,
                usage: 'O',
                row: 5,
                col: 10,
                recordName: 'PRUEBA',
                reffld: { raw: 'CUSTNAME CUSTFILE' }
            };

            // Change field length but keep REFFLD
            const editedField = { ...field, length: 15 };
            updateFieldInDds(editedField, field);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(CUSTNAME CUSTFILE)'),
                `REFFLD should be preserved when field properties change. Got:\n${doc}`
            );
            
            console.log('✅ REFFLD preserved when field properties change');
        }

        // ── TEST 3: REFFLD is removed when field.reffld is deleted ────────
        {
            console.log('\n=== TEST 3: Delete REFFLD from field ===');
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD006        10A  O  5 10',
                '     A                                      REFFLD(OLDVALUE)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const fieldWithReffld = {
                name: 'FLD006',
                type: 'variable',
                dataType: 'character',
                length: 10,
                usage: 'O',
                row: 5,
                col: 10,
                recordName: 'PRUEBA',
                reffld: { raw: 'OLDVALUE' }
            };

            // User clears REFFLD by removing field.reffld
            const fieldWithoutReffld = { ...fieldWithReffld };
            delete fieldWithoutReffld.reffld;

            updateFieldInDds(fieldWithoutReffld, fieldWithReffld);
            const doc = getCurrentDocument();

            assert.ok(
                !doc.includes('REFFLD('),
                `REFFLD should be removed when field.reffld is deleted. Got:\n${doc}`
            );
            
            console.log('✅ REFFLD correctly removed when cleared');
        }

        // ── TEST 4: Multiple REFFLD values are independent ──────────────
        {
            console.log('\n=== TEST 4: Multiple fields with REFFLD ===');
            const sample = [
                '     A          R PRUEBA',
                '     A            FLD001        10A  O  5 10',
                '     A                                      REFFLD(FIELD1 FILE1)',
                '     A            FLD002        10A  O  6 10',
                '     A                                      REFFLD(FIELD2 FILE2)'
            ].join('\n');

            setCurrentRecord('PRUEBA');
            setCurrentDocument(sample);

            const fld1 = {
                name: 'FLD001',
                type: 'variable',
                dataType: 'character',
                length: 10,
                usage: 'O',
                row: 5,
                col: 10,
                recordName: 'PRUEBA',
                reffld: { raw: 'FIELD1 FILE1' }
            };

            // Update only FLD001 with new coordinates
            const editedFld1 = { ...fld1, col: 20 };
            updateFieldInDds(editedFld1, fld1);
            const doc = getCurrentDocument();

            assert.ok(
                doc.includes('REFFLD(FIELD1 FILE1)'),
                `FLD001 REFFLD should be preserved`
            );
            assert.ok(
                doc.includes('REFFLD(FIELD2 FILE2)'),
                `FLD002 REFFLD should still be present (untouched)`
            );
            
            console.log('✅ Multiple REFFLD fields preserve independently');
        }

        console.log('\n✅ ALL E2E TESTS PASSED');
        console.log('PASS: run-reffld-endtoend.js');
        process.exit(0);
    } catch (err) {
        console.error('FAIL: run-reffld-endtoend.js');
        console.error(err.message || err);
        console.error(err.stack);
        process.exit(1);
    }
}

run();
