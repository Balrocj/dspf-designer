const assert = require('assert');
const fs = require('fs');
const vm = require('vm');
const path = require('path');

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
const { setCurrentDocument, getCurrentDocument, setCurrentRecord, updateFieldInDds } = tests;

console.log('=== TEST: User case - MSGID inline with continuation ===\n');

// Exact case from user: MSGID inline with continuation marker
const sample = [
    '     A          R PRUEBA',
    '     A            PRUEBA       10  O 18 31MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-',
    '     A                                      2)',
    '     A    79N10                            DSPATR(RI)',
    '     A    50                               DSPATR(BL)',
    '     A    99                               COLOR(WHT)',
    '     A    60                               COLOR(TRO)'
].join('\n');

console.log('BEFORE (original):');
console.log(sample);
console.log('\n');

setCurrentRecord('PRUEBA');
setCurrentDocument(sample);

const field = {
    name: 'PRUEBA',
    type: 'variable',
    row: 18,
    col: 31,
    dataType: 'character',
    usage: 'O',
    length: 10,
    msgid: {
        prefix: 'WWM',
        messageId: '0049',
        file: 'FPRBMSGF1',
        library: 'BIBLIOTECA',
        raw: 'WWM 0049 BIBLIOTECA/FPRBMSGF1-2',
        rawLines: ['WWM 0049 BIBLIOTECA/FPRBMSGF1-', '2']
    },
    dspatr: ['RI', 'BL'],
    color: 'WHT',
    indicators: { groups: [{ indicators: [] }], isOr: false },
    keywordOrder: ['MSGID', 'DSPATR', 'COLOR']
};

const movedField = {
    ...field,
    row: 25,
    col: 40
};

console.log('Moving field from (18,31) to (25,40)...\n');

updateFieldInDds(movedField, field);
const result = getCurrentDocument();

console.log('AFTER (regenerated):');
console.log(result);
console.log('\n');

// Validation
const lines = result.split('\n');

// Find MSGID lines
const msgidLineIdx = lines.findIndex(l => l.includes('MSGID('));
const closureLineIdx = lines.findIndex(l => l.trim().includes('2)'));

console.log('=== VALIDATION ===');
console.log(`MSGID line found at index ${msgidLineIdx}: "${lines[msgidLineIdx]}"`);
console.log(`Closure "2)" line found at index ${closureLineIdx}: "${lines[closureLineIdx]}"`);
console.log('\n');

// Detailed validation
const msgidLine = lines[msgidLineIdx] || '';
const closureLine = lines[closureLineIdx] || '';

console.log('Checking requirements:');
console.log(`1. MSGID line ends with "-": ${msgidLine.endsWith('-') ? '✅' : '❌'}`);
console.log(`2. Closure line is "2)": ${closureLine.trim() === 'A                                               2)' || closureLine.includes('2)') ? '✅' : '❌'}`);
console.log(`3. They are adjacent (only 1 line apart): ${closureLineIdx === msgidLineIdx + 1 ? '✅' : '❌'}`);
console.log(`4. No duplication of "2)": ${(result.match(/2\)/g) || []).length === 1 ? '✅' : '❌'}`);

if (msgidLine.endsWith('-') && closureLineIdx === msgidLineIdx + 1 && (result.match(/2\)/g) || []).length === 1) {
    console.log('\n✅ FIXED: MSGID multiline format is preserved correctly!');
    process.exit(0);
} else {
    console.log('\n❌ ISSUE: MSGID multiline format not preserved correctly');
    process.exit(1);
}
