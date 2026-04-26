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

// Test with MSGID appearing AFTER the field continuation indicator instead of inline
const sampleNonInline = [
    '     A          R PRUEBA',
    '     A            PRUEBA       10  O 18 31',
    '     A                                      MSGID(WWM 0049 BIBLIOTECA/FPRBMSGF1-',
    '     A                                      2)',
    '     A                                      DSPATR(RI)'
].join('\n');

console.log('=== TEST: MSGID on SEPARATE LINE (NOT inline) ===\n');
console.log('Original document:');
console.log(sampleNonInline);
console.log('\n');

setCurrentRecord('PRUEBA');
setCurrentDocument(sampleNonInline);

const oldField = {
    name: 'PRUEBA',
    row: 18,
    col: 31,
    dataType: 'character',
    usage: 'O',
    length: 10
};

const movedField = {
    ...oldField,
    row: 25,
    col: 40,
    msgid: {
        prefix: 'WWM',
        messageId: '0049',
        file: 'FPRBMSGF1',
        library: 'BIBLIOTECA',
        raw: 'WWM 0049 BIBLIOTECA/FPRBMSGF1-2',
        rawLines: ['WWM 0049 BIBLIOTECA/FPRBMSGF1-', '2']
    }
};

console.log('Moving field...\n');
updateFieldInDds(movedField, oldField);
const doc = getCurrentDocument();

console.log('Result:');
console.log(doc);
console.log('\n');

const lines = doc.split('\n');
const msgidLine = lines.findIndex(l => l.includes('MSGID'));
const closureLine = lines.findIndex(l => l.includes('2)'));

console.log(`MSGID line index: ${msgidLine}`);
console.log(`Closure "2)" line index: ${closureLine}`);

if (closureLine === msgidLine + 1) {
    console.log('\n✅ GOOD: Lines are adjacent');
} else if (closureLine > msgidLine) {
    console.log(`\n❌ PROBLEM: ${closureLine - msgidLine - 1} lines between MSGID and closure`);
} else {
    console.log('\n❌ PROBLEM: Closure appears before MSGID');
}
