export async function calibrateCharMetrics(screenCoordinates, logger) {
    try {
        if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
        }
    } catch (err) {
        if (logger && typeof logger.warn === 'function') {
            logger.warn('Font readiness check failed, using immediate metrics', err);
        }
    }

    await new Promise(requestAnimationFrame);
    const probe = document.createElement('span');
    const sampleText = 'WWWWWWWWWW';
    probe.textContent = sampleText;
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.whiteSpace = 'pre';
    probe.style.fontFamily = "'3270', 'IBM Plex Mono', 'Consolas', 'Courier New', monospace";
    probe.style.fontSize = '15px';
    probe.style.lineHeight = '20px';
    document.body.appendChild(probe);
    const rect = probe.getBoundingClientRect();
    document.body.removeChild(probe);

    const width = rect.width / sampleText.length;
    const height = rect.height;
    if (width && height) {
        screenCoordinates.CHAR_WIDTH = width;
        screenCoordinates.CHAR_HEIGHT = height;
        if (logger && typeof logger.ui === 'function') {
            logger.ui(`Calibrated char metrics -> width: ${width.toFixed(2)}px, height: ${height.toFixed(2)}px`);
        }
        return { width, height };
    }

    if (logger && typeof logger.warn === 'function') {
        logger.warn('Could not calibrate char metrics, using defaults');
    }
    return null;
}
