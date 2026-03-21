export function updateRecordTitle({ Logger, getCurrentRecord }) {
    const titleElement = document.querySelector('.toolbar-left h2');
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    if (titleElement && currentRecord) {
        titleElement.textContent = `DSPF Designer - ${currentRecord}`;
        Logger.debug(`Updated title to: DSPF Designer - ${currentRecord}`);
    }
}

export function updateNavigationButtons({ getCurrentRecord, getAllRecords }) {
    const prevBtn = document.getElementById('prevRecordBtn');
    const nextBtn = document.getElementById('nextRecordBtn');
    const allRecords = getAllRecords ? getAllRecords() : null;
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

    if (!prevBtn || !nextBtn || !allRecords || allRecords.length === 0) {
        return;
    }

    const currentIndex = allRecords.findIndex(r => r.name === currentRecord);
    prevBtn.disabled = (currentIndex <= 0);
    nextBtn.disabled = (currentIndex >= allRecords.length - 1);
}
