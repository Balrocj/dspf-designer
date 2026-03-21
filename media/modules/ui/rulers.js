export function setupRulers(currentDisplaySize, screenCoordinates, logger) {
    const horizontalRuler = document.getElementById('horizontal-ruler');
    const verticalRuler = document.getElementById('vertical-ruler');

    if (!horizontalRuler || !verticalRuler) {
        if (logger && typeof logger.warn === 'function') {
            logger.warn('Rulers not found, retrying in 100ms...');
        }
        setTimeout(() => setupRulers(currentDisplaySize, screenCoordinates, logger), 100);
        return;
    }

    if (logger && typeof logger.ui === 'function') {
        logger.ui(`Setting up rulers for ${currentDisplaySize}...`);
    }

    horizontalRuler.innerHTML = '';
    verticalRuler.innerHTML = '';

    const maxCols = currentDisplaySize === 'DS3' ? 80 : 132;
    const maxRows = currentDisplaySize === 'DS3' ? 24 : 27;

    for (let col = 1; col <= maxCols; col++) {
        const leftPos = screenCoordinates.toPixels(1, col).left;

        const tick = document.createElement('div');
        tick.className = 'ruler-tick';
        tick.style.left = leftPos + 'px';
        horizontalRuler.appendChild(tick);

        if (col % 5 === 0 || col === 1) {
            const marker = document.createElement('div');
            marker.className = 'ruler-marker';
            marker.textContent = col.toString();
            marker.style.left = leftPos + 'px';
            horizontalRuler.appendChild(marker);
        }
    }

    for (let row = 1; row <= maxRows; row++) {
        const { top: topPos } = screenCoordinates.toPixels(row, 1);

        const tick = document.createElement('div');
        tick.className = 'ruler-tick';
        tick.style.top = topPos + 'px';
        verticalRuler.appendChild(tick);

        if (row % 5 === 0 || row === 1) {
            const marker = document.createElement('div');
            marker.className = 'ruler-marker';
            marker.textContent = row.toString();
            marker.style.top = topPos + 'px';
            verticalRuler.appendChild(marker);
        }
    }

    if (logger && typeof logger.success === 'function') {
        logger.success(`Rulers setup complete for ${currentDisplaySize}!`);
    }
}
