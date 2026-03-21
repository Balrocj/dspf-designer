export function updateDocumentInEditor(options) {
    const {
        currentRecord,
        currentDocument,
        Logger
    } = options;

    const preservedRecord = currentRecord;

    const sourceTextarea = document.getElementById('source-content');
    if (sourceTextarea) {
        sourceTextarea.value = currentDocument;
    }

    if (Logger) {
        Logger.dds('Document updated internally, waiting for Save. Record context:', preservedRecord);
    }
}
