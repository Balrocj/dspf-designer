export function scrollToRecordInSource(options) {
    const {
        currentRecord,
        currentDocument,
        Logger
    } = options;

    if (!currentRecord) {
        if (Logger) {
            Logger.warn('No current record to scroll to');
        }
        return;
    }

    const sourceEditor = document.getElementById('source-editor');
    if (!sourceEditor) {
        if (Logger) {
            Logger.error('Source editor not found');
        }
        return;
    }

    const lines = currentDocument.split('\n');
    let recordLineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const recordMatch = line.match(/^\s*A\*?\s+R\s+(\w+)/i);
        if (recordMatch && recordMatch[1].toUpperCase() === currentRecord.toUpperCase()) {
            recordLineIndex = i;
            break;
        }
    }

    if (recordLineIndex === -1) {
        if (Logger) {
            Logger.warn(`Record ${currentRecord} not found in source`);
        }
        return;
    }

    if (Logger) {
        Logger.debug(`Scrolling to record ${currentRecord} at line ${recordLineIndex + 1}`);
    }

    const lineHeight = 21;
    const scrollPosition = recordLineIndex * lineHeight;
    const offset = 100;
    sourceEditor.scrollTop = Math.max(0, scrollPosition - offset);
}
