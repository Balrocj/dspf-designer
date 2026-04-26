const assert = require('assert');
const path = require('path');

function element(value = '', checked = false) {
    return { value, checked };
}

async function run() {
    try {
        const modulePath = path.resolve(__dirname, '..', 'media', 'modules', 'ui', 'applyFieldProperties.js');
        const { applyFieldProperties } = await import(`file://${modulePath.replace(/\\/g, '/')}`);

        const elements = {
            'prop-row': element('18'),
            'prop-col': element('31'),
            'prop-length': element('10'),
            'prop-msgid-enabled': element('', true),
            'prop-msgid-prefix': element('WWM'),
            'prop-msgid-identifier': element('0049'),
            'prop-msgid-file': element('FPRBMSGF1'),
            'prop-msgid-library': element('BIBLIOTECA')
        };

        global.document = {
            getElementById: (id) => elements[id] || null
        };

        const logger = {
            debug: () => {},
            dds: () => {},
            success: () => {},
            warn: () => {},
            error: () => {}
        };

        let capturedNewField = null;
        let capturedOldField = null;

        const field = {
            id: 'f1',
            name: 'PRUEBA',
            type: 'output',
            record: 'PRUEBA',
            row: 18,
            col: 31,
            usage: 'O',
            dataType: 'character',
            length: 10,
            colors: ['RED'],
            msgid: {
                prefix: 'WWM',
                messageId: '0049',
                file: 'FPRBMSGF1',
                library: 'BIBLIOTECA',
                raw: 'WWM 0049 BIBLIOTECA/FPRBMSGF1- 2',
                rawLines: ['WWM 0049 BIBLIOTECA/FPRBMSGF1-', '2']
            }
        };

        applyFieldProperties({
            field,
            Logger: logger,
            getSelectedField: () => field,
            setSelectedField: () => {},
            getFields: () => [],
            getCurrentRecord: () => 'PRUEBA',
            getCurrentDocument: () => '',
            setCurrentDocument: () => {},
            applyColorChanges: (targetField) => {
                // Force a change so shouldUpdateDds becomes true
                targetField.colors = ['BLU'];
            },
            getAttributeCheckboxMap: () => ({}),
            transferIndicators: () => false,
            KEYWORD_ATTRIBUTE_ALLOW_LIST: [],
            updateFieldInDds: (newField, oldField) => {
                capturedNewField = JSON.parse(JSON.stringify(newField));
                capturedOldField = JSON.parse(JSON.stringify(oldField));
            },
            parseDspfFields: () => {},
            updateSourceViewUI: () => {},
            vscode: { postMessage: () => {} },
            showFieldProperties: () => {},
            selectField: () => {}
        });

        assert.ok(capturedNewField, 'updateFieldInDds should be called');
        assert.ok(capturedOldField, 'oldField should be provided');
        assert.ok(capturedNewField.msgid, 'new field should retain MSGID');
        assert.ok(Array.isArray(capturedNewField.msgid.rawLines), 'new field MSGID should keep rawLines');
        assert.strictEqual(capturedNewField.msgid.rawLines.length, 2, 'rawLines should keep multiline entries');
        assert.strictEqual(capturedNewField.msgid.rawLines[0], 'WWM 0049 BIBLIOTECA/FPRBMSGF1-');
        assert.strictEqual(capturedNewField.msgid.rawLines[1], '2');

        console.log('PASS: run-apply-msgid-panel-preservation.js');
        process.exit(0);
    } catch (error) {
        console.error('FAIL: run-apply-msgid-panel-preservation.js');
        console.error(error.message || error);
        process.exit(1);
    }
}

run();
