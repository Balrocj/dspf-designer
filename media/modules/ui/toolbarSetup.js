export function setupToolbarButtons({
    Logger,
    vscode,
    saveDocument,
    navigateToPreviousRecord,
    navigateToNextRecord,
    setViewZoom,
    getCurrentZoom,
    switchToView
}) {
    document.getElementById('saveBtn').addEventListener('click', function() {
        Logger.ui('Save button clicked!');
        saveDocument();
    });

    // Setup back button (if it exists, for multi-record files)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            Logger.ui('Back button clicked');
            vscode.postMessage({ type: 'backToRecordList' });
        });
    }

    // Setup navigation buttons
    const prevRecordBtn = document.getElementById('prevRecordBtn');
    const nextRecordBtn = document.getElementById('nextRecordBtn');

    if (prevRecordBtn) {
        prevRecordBtn.addEventListener('click', function() {
            Logger.ui('Previous Record button clicked');
            navigateToPreviousRecord();
        });
    }

    if (nextRecordBtn) {
        nextRecordBtn.addEventListener('click', function() {
            Logger.ui('Next Record button clicked');
            navigateToNextRecord();
        });
    }

    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            setViewZoom(getCurrentZoom() - 0.05);
        });
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
            setViewZoom(getCurrentZoom() + 0.05);
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', function() {
            setViewZoom(1);
        });
    }

    // Setup tab buttons
    const designerTab = document.getElementById('designerTab');
    const previewTab = document.getElementById('previewTab');
    const sourceTab = document.getElementById('sourceTab');

    if (designerTab) {
        designerTab.addEventListener('click', function(e) {
            e.preventDefault();
            Logger.ui('Designer tab clicked');
            switchToView('designer');
        });
    } else {
        Logger.error('Designer tab not found');
    }

    if (previewTab) {
        previewTab.addEventListener('click', function(e) {
            e.preventDefault();
            Logger.ui('Preview tab clicked');
            switchToView('preview');
        });
    } else {
        Logger.error('Preview tab not found');
    }

    if (sourceTab) {
        sourceTab.addEventListener('click', function(e) {
            e.preventDefault();
            Logger.ui('Source tab clicked');
            switchToView('source');
        });
    } else {
        Logger.error('Source tab not found');
    }

    Logger.success('Toolbar buttons setup complete');
}
