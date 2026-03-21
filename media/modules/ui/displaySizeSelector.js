export function setupDisplaySizeSelector({
    Logger,
    getCurrentDisplaySize,
    setCurrentDisplaySize,
    updateCanvasSize,
    setupRulers,
    parseDspfFields,
    getCurrentDocument,
    applyDefaultZoomForDisplaySize,
    updatePreviewView
}) {
    const designerRadioButtons = document.querySelectorAll('input[name="displaySize"]');
    designerRadioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            setCurrentDisplaySize(this.value);
            const currentDisplaySize = getCurrentDisplaySize();
            Logger.ui(`Designer display size changed to: ${currentDisplaySize}`);

            if (applyDefaultZoomForDisplaySize) {
                applyDefaultZoomForDisplaySize(currentDisplaySize);
            }

            updateCanvasSize(currentDisplaySize);
            setupRulers();

            parseDspfFields(getCurrentDocument());

            const previewView = document.getElementById('preview-view');
            if (previewView && previewView.classList.contains('active')) {
                updatePreviewView();
            }
        });
    });
}
