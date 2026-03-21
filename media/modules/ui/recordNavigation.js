export function navigateToPreviousRecord({
    Logger,
    vscode,
    getAllRecords,
    getCurrentRecord,
    getCurrentView
}) {
    const allRecords = getAllRecords ? getAllRecords() : [];
    if (!allRecords || allRecords.length === 0) {
        Logger.warn('No records available for navigation');
        return;
    }

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const currentIndex = allRecords.findIndex(r => r.name === currentRecord);
    if (currentIndex > 0) {
        const prevRecord = allRecords[currentIndex - 1];
        Logger.ui('Navigating to previous record:', prevRecord.name, 'preserving view:', getCurrentView ? getCurrentView() : undefined);
        vscode.postMessage({
            type: 'navigateToRecord',
            recordName: prevRecord.name,
            preserveView: getCurrentView ? getCurrentView() : undefined
        });
    } else {
        Logger.info('Already at first record');
    }
}

export function navigateToNextRecord({
    Logger,
    vscode,
    getAllRecords,
    getCurrentRecord,
    getCurrentView
}) {
    const allRecords = getAllRecords ? getAllRecords() : [];
    if (!allRecords || allRecords.length === 0) {
        Logger.warn('No records available for navigation');
        return;
    }

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const currentIndex = allRecords.findIndex(r => r.name === currentRecord);
    if (currentIndex < allRecords.length - 1) {
        const nextRecord = allRecords[currentIndex + 1];
        Logger.ui('Navigating to next record:', nextRecord.name, 'preserving view:', getCurrentView ? getCurrentView() : undefined);
        vscode.postMessage({
            type: 'navigateToRecord',
            recordName: nextRecord.name,
            preserveView: getCurrentView ? getCurrentView() : undefined
        });
    } else {
        Logger.info('Already at last record');
    }
}
