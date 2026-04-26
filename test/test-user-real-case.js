/**
 * Test: User's exact EJEMPLOBK.DSPF case
 * File lines 74-80 with PRUEBA field having inline MSGID with continuation
 */

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

// EXACT format from EJEMPLOBK.DSPF lines 74-80
const sample = [
    '     A          R PRUEBA',
    '     A            PRUEBA        10   O 18 31MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-',
    '     A                                      2)',
    '     A  79N10                               DSPATR(RI)',
    '     A  50                                  DSPATR(BL)',
    '     A  99                                  COLOR(WHT)',
    '     A  60                                  COLOR(TRQ)'
].join('\n');

console.log('=== ORIGINAL (FROM EJEMPLOBK.DSPF) ===');
console.log(sample);
console.log('\n');

setCurrentRecord('PRUEBA');
setCurrentDocument(sample);

const oldField = {
    name: 'PRUEBA',
    row: 18,
    col: 31,
    dataType: 'numeric',
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
    colors: ['WHT', 'TRQ'],
    indicators: {
        groups: [{ indicators: [] }],
        isOr: false
    },
    colorIndicators: {
        'WHT': { groups: [{ indicators: [{value: '99', not: false}] }], isOr: false },
        'TRQ': { groups: [{ indicators: [{value: '60', not: false}] }], isOr: false }
    },
    attributeIndicators: {
        'reverse': { groups: [{ indicators: [{value: '79', not: true}, {value: 'N10', not: false}] }], isOr: false },
        'blink': { groups: [{ indicators: [{value: '50', not: false}] }], isOr: false }
    },
    keywordOrder: ['MSGID', 'DSPATR', 'COLOR']
};

console.log('=== TEST CASE: Moving PRUEBA field ===\n');

// Move the field to a new position
const movedField = {
    ...oldField,
    row: 25,
    col: 40
};

updateFieldInDds(movedField, oldField);
const result = getCurrentDocument();

console.log('=== RESULT (AFTER MOVE) ===');
console.log(result);
console.log('\n');

// Validate
const resultLines = result.split('\n');

let msgidLineIndex = -1;
let closureLineIndex = -1;

for (let i = 0; i < resultLines.length; i++) {
    const line = resultLines[i];
    if (line.includes('MSGID(')) {
        msgidLineIndex = i;
    }
    if (msgidLineIndex >= 0 && i > msgidLineIndex && line.includes('2)')) {
        closureLineIndex = i;
        break;
    }
}

console.log('=== VALIDATION ===');

let pass = true;

if (msgidLineIndex === -1) {
    console.log('❌ MSGID line not found');
    pass = false;
} else {
    const msgidLine = resultLines[msgidLineIndex];
    console.log(`MSGID at line ${msgidLineIndex}: "${msgidLine.trim()}"`);
    
    if (!msgidLine.includes('MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-')) {
        console.log('❌ MSGID content is wrong');
        pass = false;
    } else {
        console.log('✅ MSGID content correct');
    }
    
    if (!msgidLine.trim().endsWith('-')) {
        console.log('❌ MSGID line does NOT end with "-"');
        pass = false;
    } else {
        console.log('✅ MSGID line ends with "-"');
    }
}

if (closureLineIndex === -1) {
    console.log('❌ Closure "2)" not found');
    pass = false;
} else {
    const closureLine = resultLines[closureLineIndex];
    console.log(`Closure at line ${closureLineIndex}: "${closureLine.trim()}"`);
    
    if (!closureLine.includes('2)')) {
        console.log('❌ Closure content is wrong');
        pass = false;
    } else {
        console.log('✅ Closure content correct');
    }
}

if (msgidLineIndex >= 0 && closureLineIndex >= 0) {
    if (closureLineIndex - msgidLineIndex !== 1) {
        console.log(`❌ Lines not adjacent! Distance: ${closureLineIndex - msgidLineIndex}`);
        pass = false;
    } else {
        console.log('✅ MSGID and closure are adjacent');
    }
}

// Check for duplication
const closureCount = (result.match(/2\)/g) || []).length;
if (closureCount > 1) {
    console.log(`❌ Closure "2)" appears ${closureCount} times (should be 1)`);
    pass = false;
} else {
    console.log('✅ No "2)" duplication');
}

console.log('\n' + (pass ? '✅ ALL CHECKS PASSED' : '❌ SOME CHECKS FAILED'));
process.exit(pass ? 0 : 1);
