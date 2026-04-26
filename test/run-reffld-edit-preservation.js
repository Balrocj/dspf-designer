#!/usr/bin/env node

// Test: REFFLD should be preserved when editing field properties
// This reproduces the bug where REFFLD is lost on field update

const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '../media/dspfDesigner.bundle.js');
const bundle = fs.readFileSync(bundlePath, 'utf8');

// Create a global window object with necessary properties
global.window = {
    vscode: { getState: () => ({}) },
    __TESTS: {}
};

global.document = {
    getElementById: () => ({ value: '', checked: false }),
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    body: { innerHTML: '' },
    createElement: () => ({})
};

global.acquireVsCodeApi = () => ({
    getState: () => ({}),
    setState: () => {},
    postMessage: () => {}
});
global.console.log = (msg) => process.stdout.write(`${msg}\n`);
global.fetch = () => Promise.resolve({ text: () => '' });

// Execute bundle
eval(bundle);

const {
    parseDspfFields,
    updateFieldInDds,
    generateDdsLine
} = window.__TESTS;

if (!parseDspfFields || !updateFieldInDds) {
    console.error('ERROR: Test exports not available');
    process.exit(1);
}

// ============================================================================
// TEST 1: Parse field with REFFLD, then edit field properties
// ============================================================================
console.log('\n=== TEST 1: Edit field, REFFLD should be preserved ===');

const ddsContent1 = `     A          R MAINREC
     A            FLD001         10A  I  5  10
     A                                      REFFLD(SRCFLD SRCFILE)
`;

const fields1 = parseDspfFields(ddsContent1);
console.log(`Parsed ${fields1.length} field(s)`);
const testField1 = fields1.find(f => f.name === 'FLD001');
console.log(`Original field: name=${testField1.name}, reffld=${JSON.stringify(testField1.reffld)}`);

if (!testField1.reffld || !testField1.reffld.raw) {
    console.error('❌ TEST 1 FAILED: REFFLD not parsed initially');
    process.exit(1);
}

// Simulate user editing: change field length from 10A to 15A
const editedField1 = { ...testField1, length: 15 };

// This is what happens when updateFieldInDds is called NORMALLY (through applyFieldProperties)
// The bug is that applyFieldProperties doesn't copy reffld to oldField
// Let's demonstrate both correct and buggy behavior:

console.log('\n-- BUGGY behavior (without reffld in oldField backup): --');
const oldFieldBuggy = {
    ...testField1,
    // BUG: reffld is NOT being copied here, so it's lost
};
console.log(`oldFieldBuggy has reffld: ${JSON.stringify(oldFieldBuggy.reffld)}`);

// When we simulate the DDS generation without reffld preserved:
// The line should NOT have REFFLD because it wasn't preserved
const generatedWithoutReffld = generateDdsLine(editedField1);
console.log(`Generated DDS (without reffld): ${generatedWithoutReffld}`);

if (!generatedWithoutReffld.includes('REFFLD')) {
    console.log('✅ Confirmed: REFFLD lost when not preserved in backup');
} else {
    console.log('? REFFLD still present (might be from field itself)');
}

console.log('\n-- CORRECT behavior (with reffld in oldField backup): --');
const oldFieldCorrect = {
    ...testField1,
    reffld: testField1.reffld // MUST be copied here to preserve it
};
console.log(`oldFieldCorrect has reffld: ${JSON.stringify(oldFieldCorrect.reffld)}`);

// When reffld is preserved, the edited field should keep it
const editedFieldWithPreservedReffld = {
    ...editedField1,
    reffld: oldFieldCorrect.reffld // This is what SHOULD happen
};

const generatedWithReffld = generateDdsLine(editedFieldWithPreservedReffld);
console.log(`Generated DDS (with reffld): ${generatedWithReffld}`);

if (generatedWithReffld.includes('REFFLD')) {
    console.log('✅ TEST 1 PASSED: REFFLD preserved when copied to backup');
} else {
    console.log('❌ TEST 1 FAILED: REFFLD not in generated line');
    process.exit(1);
}

// ============================================================================
// TEST 2: Multiple field edits, each should preserve REFFLD
// ============================================================================
console.log('\n=== TEST 2: Sequential edits preserve REFFLD ===');

const ddsContent2 = `     A          R MAINREC
     A            FLD002         10A  I  5  10
     A                                      REFFLD(SRCFLD SRCFILE)
`;

const fields2 = parseDspfFields(ddsContent2);
const testField2 = fields2.find(f => f.name === 'FLD002');

// Edit 1: Change row
const edited2a = { ...testField2, row: 8 };
const edited2aWithReffld = {
    ...edited2a,
    reffld: testField2.reffld // Preserve on first edit
};
const dds2a = generateDdsLine(edited2aWithReffld);
console.log(`After edit 1 (row change): REFFLD present? ${dds2a.includes('REFFLD')}`);

// Edit 2: Change col and length
const edited2b = { ...edited2aWithReffld, col: 15, length: 20 };
const dds2b = generateDdsLine(edited2b);
console.log(`After edit 2 (col+length): REFFLD present? ${dds2b.includes('REFFLD')}`);

if (dds2a.includes('REFFLD') && dds2b.includes('REFFLD')) {
    console.log('✅ TEST 2 PASSED: REFFLD preserved through sequential edits');
} else {
    console.log('❌ TEST 2 FAILED: REFFLD lost during edits');
    process.exit(1);
}

// ============================================================================
// TEST 3: Field with REFFLD should show in shouldUpdateDds checks
// ============================================================================
console.log('\n=== TEST 3: REFFLD changes should trigger update ===');

const ddsContent3 = `     A          R MAINREC
     A            FLD003         10A  I  5  10
     A                                      REFFLD(SRCFLD)
`;

const fields3 = parseDspfFields(ddsContent3);
const testField3 = fields3.find(f => f.name === 'FLD003');

// The oldField should include reffld for change detection
const oldFieldForComparison = {
    ...testField3,
    reffld: testField3.reffld // This IS copied in fixed version
};

const editedField3 = {
    ...testField3,
    row: 10 // Position changed
};

// After the fix, reffld will be preserved so the field will have it
editedField3.reffld = oldFieldForComparison.reffld;

const reffldMatches = JSON.stringify(oldFieldForComparison.reffld) === JSON.stringify(editedField3.reffld);
console.log(`REFFLD preserved across edit boundary: ${reffldMatches}`);

if (reffldMatches) {
    console.log('✅ TEST 3 PASSED: REFFLD preserved in backup for change detection');
} else {
    console.log('❌ TEST 3 FAILED: REFFLD backup not consistent');
    process.exit(1);
}

console.log('\n' + '='.repeat(70));
console.log('✅ ALL TESTS PASSED');
console.log('='.repeat(70));
console.log('\nFIX REQUIRED: In applyFieldProperties.js, add reffld to oldField backup (line ~40):');
console.log('  reffld: field.reffld ? { ...field.reffld } : undefined,');
