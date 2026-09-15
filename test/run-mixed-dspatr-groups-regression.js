const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function createHarness() {
    const bundlePath = path.resolve(__dirname, '..', 'media', 'dspfDesigner.bundle.js');
    const code = fs.readFileSync(bundlePath, 'utf8');
    const elementStub = {
        style: {}, dataset: {}, appendChild: () => {}, setAttribute: () => {}, addEventListener: () => {},
        classList: { add: () => {}, remove: () => {} }, querySelector: () => null,
        querySelectorAll: () => [], remove: () => {}, getBoundingClientRect: () => ({}), innerHTML: '', value: ''
    };
    const sandbox = {
        module: { exports: {} }, console,
        window: { addEventListener: () => {} },
        document: {
            addEventListener: () => {}, head: { appendChild: () => {}, removeChild: () => {} },
            body: { appendChild: () => {}, removeChild: () => {} }, createElement: () => ({ ...elementStub }),
            getElementById: () => ({ ...elementStub }), querySelector: () => ({ ...elementStub }), querySelectorAll: () => []
        },
        acquireVsCodeApi: () => ({ postMessage: () => {} }), setTimeout: (fn) => { fn(); return 0; },
        clearTimeout: () => {}, setInterval: () => 0, clearInterval: () => {},
        requestAnimationFrame: (fn) => { fn(); return 0; }, cancelAnimationFrame: () => {}, performance: { now: () => 0 }
    };
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    return sandbox.window.__TESTS || sandbox.module.exports;
}

function run() {
    try {
        const tests = createHarness();
        const { setCurrentDocument, getCurrentDocument, setCurrentRecord, parseDspfFields, getFields, updateFieldInDds } = tests;
        const source = [
            '     A          R MIXED',
            '     A            ZCODCS        1A  B 15 21',
            '     A  42                                  DSPATR(RI PC)',
            '     A  33                                  DSPATR(UL)',
            '     A  32                                  DSPATR(PR)',
            '     A            NEXTFLD       10A  O 16 21'
        ].join('\n');

        setCurrentRecord('MIXED');
        setCurrentDocument(source);
        parseDspfFields(source);
        const parsedField = getFields().find(field => field.name === 'ZCODCS');

        assert.ok(parsedField, 'The test field should be parsed');
        assert.deepStrictEqual(
            JSON.parse(JSON.stringify(parsedField.dspatrGroups.map(group => group.attributes))),
            [['reverse', 'cursorPosition'], ['underline'], ['protect']],
            'Each original DSPATR line should retain its own attribute group'
        );

        const updatedField = JSON.parse(JSON.stringify(parsedField));
        delete updatedField.attributeIndicators.protect;
        updatedField.attributeIndicatorsModified = true;
        updateFieldInDds(updatedField, parsedField);

        const result = getCurrentDocument();
        assert.match(result, /A\s+42\s+DSPATR\(RI PC\)/, 'RI and PC must keep indicator 42');
        assert.match(result, /A\s+33\s+DSPATR\(UL\)/, 'UL must keep indicator 33');
        assert.match(result, /A\s+DSPATR\(PR\)/, 'PR must remain without an indicator');
        assert.doesNotMatch(result, /A\s+32\s+DSPATR\(PR\)/, 'PR indicator 32 must be removed');
        console.log('Test passed: mixed DSPATR groups preserve independent indicators.');
        process.exit(0);
    } catch (error) {
        console.error('Test failed:', error);
        process.exit(1);
    }
}

run();