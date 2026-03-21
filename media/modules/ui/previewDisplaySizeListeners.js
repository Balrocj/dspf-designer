export function setupPreviewDisplaySizeListeners({
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
    const previewRadioButtons = document.querySelectorAll('input[name="preview-display-size"]');
    previewRadioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const nextDisplaySize = this.value;
            setCurrentDisplaySize(nextDisplaySize);
            Logger.debug(`Preview display size changed to: ${nextDisplaySize}`);

            if (applyDefaultZoomForDisplaySize) {
                applyDefaultZoomForDisplaySize(nextDisplaySize);
            }

            const designerRadios = document.querySelectorAll('input[name="displaySize"]');
            designerRadios.forEach(dr => {
                dr.checked = dr.value === nextDisplaySize;
            });

            updateCanvasSize(nextDisplaySize);
            setupRulers();

            parseDspfFields(getCurrentDocument());
            updatePreviewView();
        });
    });
}
