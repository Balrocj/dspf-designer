export function applyWindowDimensions(options) {
    const {
        Logger,
        isReadOnly,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        updateDocumentInEditor,
        parseDspfFields
    } = options;

    if (isReadOnly) {
        Logger.warn('Cannot apply window dimensions - document is read-only');
        return;
    }

    Logger.window('Applying window dimensions changes');

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    if (!currentRecord) {
        Logger.warn('No current record selected for window update');
        return;
    }

    const windowTypeRef = document.getElementById('window-type-ref');
    const isReference = windowTypeRef && windowTypeRef.checked;

    const currentDocument = getCurrentDocument ? getCurrentDocument() : '';
    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    let windowLineIndex = -1;
    let ds3LineIndex = -1;
    let ds4LineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            break;
        }

        if (inTargetRecord && line.includes('WINDOW(')) {
            if (line.includes('*DS3')) {
                ds3LineIndex = i;
            } else if (line.includes('*DS4')) {
                ds4LineIndex = i;
            } else {
                windowLineIndex = i;
            }
        }
    }

    if (isReference) {
        const refNameInput = document.getElementById('window-reference-name');
        if (!refNameInput) {
            Logger.error('Reference name input not found');
            return;
        }

        const refName = refNameInput.value.trim().toUpperCase();
        if (!refName) {
            Logger.error('Reference name is required');
            alert('Please enter a window reference name (e.g., WIND1)');
            return;
        }

        const newWindowLine = `     A                                      WINDOW(${refName})`;

        if (ds3LineIndex !== -1) {
            lines[ds3LineIndex] = newWindowLine;
            if (ds4LineIndex !== -1 && ds4LineIndex > ds3LineIndex) {
                lines.splice(ds4LineIndex, 1);
            } else if (ds4LineIndex !== -1 && ds4LineIndex < ds3LineIndex) {
                lines.splice(ds4LineIndex, 1);
            }
            Logger.success(`Updated WINDOW to reference: ${refName}`);
        } else if (windowLineIndex !== -1) {
            lines[windowLineIndex] = newWindowLine;
            Logger.success(`Updated WINDOW to reference: ${refName}`);
        }
    } else {
        const ds3Row = document.getElementById('window-ds3-row');
        const ds3Col = document.getElementById('window-ds3-col');
        const ds3Height = document.getElementById('window-ds3-height');
        const ds3Width = document.getElementById('window-ds3-width');

        if (ds3Row && ds3Col && ds3Height && ds3Width) {
            const row = parseInt(ds3Row.value);
            const col = parseInt(ds3Col.value);
            const height = parseInt(ds3Height.value);
            const width = parseInt(ds3Width.value);

            if (ds3LineIndex !== -1) {
                lines[ds3LineIndex] = lines[ds3LineIndex].replace(/WINDOW\([^)]+\)/, `WINDOW(${row} ${col} ${height} ${width})`);
                Logger.success(`Updated DS3 WINDOW dimensions: (${row},${col}) ${height}x${width}`);
            } else if (windowLineIndex !== -1) {
                lines[windowLineIndex] = lines[windowLineIndex].replace(/WINDOW\([^)]+\)/, `WINDOW(${row} ${col} ${height} ${width})`);
                Logger.success(`Converted WINDOW from reference to coordinates: (${row},${col}) ${height}x${width}`);
            }
        }

        const ds4Row = document.getElementById('window-ds4-row');
        const ds4Col = document.getElementById('window-ds4-col');
        const ds4Height = document.getElementById('window-ds4-height');
        const ds4Width = document.getElementById('window-ds4-width');

        if (ds4LineIndex !== -1 && ds4Row && ds4Col && ds4Height && ds4Width) {
            const row = parseInt(ds4Row.value);
            const col = parseInt(ds4Col.value);
            const height = parseInt(ds4Height.value);
            const width = parseInt(ds4Width.value);

            lines[ds4LineIndex] = lines[ds4LineIndex].replace(/WINDOW\([^)]+\)/, `WINDOW(${row} ${col} ${height} ${width})`);
            Logger.success(`Updated DS4 WINDOW dimensions: (${row},${col}) ${height}x${width}`);
        }
    }

    const updatedDocument = lines.join('\n');
    if (setCurrentDocument) {
        setCurrentDocument(updatedDocument);
    }
    updateDocumentInEditor();

    parseDspfFields(updatedDocument);

    Logger.window('Window dimensions applied successfully');
}
