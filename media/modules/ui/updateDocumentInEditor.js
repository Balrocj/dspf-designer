export function updateDocumentInEditor(options) {
    const {
        currentRecord,
        currentDocument,
        Logger,
        vscode,
        getSaveMode
    } = options;

    const preservedRecord = currentRecord;

    const sourceTextarea = document.getElementById('source-content');
    if (sourceTextarea) {
        sourceTextarea.value = currentDocument;
    }

    const saveMode = typeof getSaveMode === 'function' ? getSaveMode() : 'manual';
    if (saveMode === 'automatic' && vscode) {
        vscode.postMessage({
            type: 'update',
            content: currentDocument,
            currentRecord: preservedRecord,
            origin: 'designer-editor'
        });
        if (Logger) {
            Logger.dds('Document auto-saved after designer update. Record context:', preservedRecord);
        }
        return;
    }

    if (Logger) {
        Logger.dds('Document updated internally, waiting for Save. Record context:', preservedRecord);
    }
}
