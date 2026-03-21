export function setupGridLines({ Logger, setupRulers }) {
    const screenGrid = document.getElementById('screen-grid');
    if (screenGrid) {
        Logger.success('Grid lines setup complete');
    }
    setupRulers();
}
