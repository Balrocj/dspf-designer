export function setViewZoom(options) {
    const {
        zoomValue,
        setCurrentZoom
    } = options;

    const clampedZoom = Math.max(0.5, Math.min(2, zoomValue));
    if (setCurrentZoom) {
        setCurrentZoom(clampedZoom);
    }

    const viewsContainer = document.getElementById('views-container');
    if (viewsContainer) {
        viewsContainer.style.setProperty('--view-zoom', clampedZoom.toString());
    }

    const zoomLabel = document.getElementById('zoomLabel');
    if (zoomLabel) {
        zoomLabel.textContent = `${Math.round(clampedZoom * 100)}%`;
    }
}
