const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const source = fs.readFileSync(path.join(__dirname, '../src/dspfEditorProvider.ts'), 'utf8');
const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS }
}).outputText;
const sandbox = {
    exports: {},
    require: name => name === 'vscode'
        ? { Uri: { joinPath: () => ({ toString: () => 'resource' }) } }
        : require(name)
};
vm.runInNewContext(compiled, sandbox);

const provider = new sandbox.exports.DspfEditorProvider({ extensionUri: {} });
const webview = {
    asWebviewUri: () => ({ toString: () => 'resource' }),
    cspSource: 'test'
};

for (const recordName of ['MAIN', 'Main', 'SUBFILE']) {
    for (const view of ['designer', 'preview']) {
        const html = provider.getHtmlForWebview(webview, recordName, 'automatic', view);
        for (const buttonId of ['backBtn', 'prevRecordBtn', 'nextRecordBtn']) {
            const buttonTag = html.match(new RegExp(`<button id="${buttonId}"[^>]*>`));
            assert.ok(buttonTag, `${recordName}: missing ${buttonId}`);
            const expectedDisplay = buttonId === 'backBtn' && view === 'preview' ? 'none' : 'inline-block';
            assert.ok(buttonTag[0].includes(`display: ${expectedDisplay}`),
                `${recordName}: incorrect ${buttonId} visibility in ${view}`);
        }
    }
}

console.log('PASS: MAIN, Main and SUBFILE navigation in Designer and Preview');