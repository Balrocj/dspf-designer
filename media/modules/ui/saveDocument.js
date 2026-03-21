export function saveDocument(options) {
    const {
        Logger,
        vscode,
        getCurrentDocument,
        getCurrentRecord,
        showNotification
    } = options;

    const currentDocument = getCurrentDocument ? getCurrentDocument() : '';
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

    Logger.debug('Save function called, currentDocument:', currentDocument ? currentDocument.substring(0, 100) : 'null');

    vscode.postMessage({
        type: 'update',
        content: currentDocument,
        currentRecord: currentRecord
    });

    showNotification('✅ Document saved successfully', 'success');
    Logger.success('Document saved, preserving record context:', currentRecord);
}
