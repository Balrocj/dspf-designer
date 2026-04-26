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

// Test with exact format from your example - WITH additional keywords after MSGID
const sample = [
    '     A          R PRUEBA',
    '     A            PRUEBA       10  O 18 31MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-',
    '     A                                      2)',
    '     A    79N10                            DSPATR(RI)',
    '     A    50                               DSPATR(BL)',
    '     A    99                               COLOR(WHT)',
    '     A    60                               COLOR(TRO)'
].join('\n');

console.log('=== ORIGINAL DOCUMENT ===');
console.log(sample);
console.log('\n');

setCurrentRecord('PRUEBA');
setCurrentDocument(sample);

const oldField = {
    name: 'PRUEBA',
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
    attributes: {
        reverse: true,
        blink: true
    },
    colors: ['WHT', 'TRO'],
    indicators: {
        groups: [{ indicators: [] }],
        isOr: false
    },
    colorIndicators: {
        'WHT': { groups: [{ indicators: [{value: '99', not: false}] }], isOr: false },
        'TRO': { groups: [{ indicators: [{value: '60', not: false}] }], isOr: false }
    },
    attributeIndicators: {
        'reverse': { groups: [{ indicators: [{value: '79', not: true}, {value: 'N10', not: false}] }], isOr: false },
        'blink': { groups: [{ indicators: [{value: '50', not: false}] }], isOr: false }
    },
    keywordOrder: ['MSGID', 'DSPATR', 'COLOR']
};

console.log('=== FIELD OBJECT BEFORE ===');
console.log(JSON.stringify(oldField, null, 2));
console.log('\n');

// Move the field
const movedField = {
    ...oldField,
    row: 25,
    col: 40
};

console.log('=== MOVING FIELD FROM (18,31) TO (25,40) ===\n');

updateFieldInDds(movedField, oldField);
const doc = getCurrentDocument();

console.log('=== RESULTING DOCUMENT ===');
console.log(doc);
console.log('\n');

// Check if multiline is preserved
const lines = doc.split('\n');
const msgidLines = lines.filter(line => line.includes('MSGID') || (line.trim().startsWith('A') && line.includes('2)')));

console.log('=== MSGID-related lines in result ===');
msgidLines.forEach((line, idx) => {
    console.log(`${idx}: "${line}"`);
});

// Verify
const hasMsgidOpenLine = doc.includes('MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-');
const hasCloseLine = doc.includes('2)');
const msgidClosureCount = (doc.match(/2\)/g) || []).length;

console.log(`\n=== CHECKS ===`);
console.log(`Has MSGID opening with continuation: ${hasMsgidOpenLine}`);
console.log(`Has closure line "2)": ${hasCloseLine}`);
console.log(`Closure "2)" appears ${msgidClosureCount} time(s)`);

if (msgidClosureCount > 1) {
    console.log('\n❌ PROBLEM: Closure "2)" appears more than once (duplication)');
} else if (!hasMsgidOpenLine || !hasCloseLine) {
    console.log('\n❌ PROBLEM: MSGID multiline is malformed');
} else {
    // Check if they're adjacent
    const openIdx = doc.indexOf('MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-');
    const closeIdx = doc.indexOf('2)');
    const betweenText = doc.substring(openIdx, closeIdx + 2);
    const linesBetween = betweenText.split('\n').length;
    
    console.log(`\nMSGID opening at char ${openIdx}, closure at char ${closeIdx}`);
    console.log(`Lines between opening and closure: ${linesBetween}`);
    
    if (linesBetween === 2) {
        console.log('\n✅ GOOD: MSGID opening and closure are adjacent');
    } else {
        console.log(`\n❌ PROBLEM: ${linesBetween - 1} lines between MSGID opening and closure`);
        console.log('Text between:');
        console.log(betweenText);
    }
}
