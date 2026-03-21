export function updateCanvasSize(displaySize, ScreenCoordinates, Logger) {
    const canvas = document.getElementById('fields-container');
    const screenWithRulers = document.getElementById('screen-with-rulers');
    const horizontalRuler = document.getElementById('horizontal-ruler');
    const verticalRuler = document.getElementById('vertical-ruler');

    if (!canvas || !screenWithRulers) {return;}

    const dims = ScreenCoordinates.getScreenDimensions(displaySize);
    const widthPx = ScreenCoordinates.getWidthInPixels(dims.cols);
    const heightPx = ScreenCoordinates.getHeightInPixels(dims.rows);
    if (canvas) {
        canvas.style.width = `${widthPx}px`;
        canvas.style.height = `${heightPx}px`;
    }
    if (horizontalRuler) {
        horizontalRuler.style.width = `${widthPx + 4}px`;
        horizontalRuler.style.backgroundSize = `${ScreenCoordinates.CHAR_WIDTH}px 100%`;
    }
    if (verticalRuler) {
        verticalRuler.style.height = `${heightPx + 4}px`;
        verticalRuler.style.backgroundSize = `100% ${ScreenCoordinates.CHAR_HEIGHT}px`;
    }
    if (screenWithRulers) {
        screenWithRulers.style.width = `${widthPx + 42}px`;
        screenWithRulers.style.height = `${heightPx + 42}px`;
    }

    Logger.ui(`Canvas resized for ${displaySize}`);
}
