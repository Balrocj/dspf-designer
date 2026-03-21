export function setupWindowResize({
    windowFrame,
    originalDimensions,
    Logger,
    ScreenCoordinates,
    getCurrentDisplaySize,
    getCurrentZoom,
    updateWindowDimensions
}) {
    const handles = windowFrame.querySelectorAll('.window-resize-handle');

    handles.forEach(handle => {
        handle.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const corner = this.className.split(' ')[1];
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = windowFrame.offsetWidth;
            const startHeight = windowFrame.offsetHeight;
            const startLeft = windowFrame.offsetLeft;
            const startTop = windowFrame.offsetTop;

            function onMouseMove(e) {
                const currentZoom = getCurrentZoom ? getCurrentZoom() : 1;
                const deltaX = (e.clientX - startX) / currentZoom;
                const deltaY = (e.clientY - startY) / currentZoom;

                let newWidth = startWidth;
                let newHeight = startHeight;
                let newLeft = startLeft;
                let newTop = startTop;

                if (corner.includes('e')) {
                    newWidth = Math.max(80, startWidth + deltaX);
                }
                if (corner.includes('w')) {
                    const widthChange = -deltaX;
                    newWidth = Math.max(80, startWidth + widthChange);
                    newLeft = startLeft - (newWidth - startWidth);
                }
                if (corner.includes('s')) {
                    newHeight = Math.max(40, startHeight + deltaY);
                }
                if (corner.includes('n')) {
                    const heightChange = -deltaY;
                    newHeight = Math.max(40, startHeight + heightChange);
                    newTop = startTop - (newHeight - startHeight);
                }

                windowFrame.style.width = `${newWidth}px`;
                windowFrame.style.height = `${newHeight}px`;
                windowFrame.style.left = `${newLeft}px`;
                windowFrame.style.top = `${newTop}px`;
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                const currentZoom = getCurrentZoom ? getCurrentZoom() : 1;
                const gridPosition = ScreenCoordinates
                    ? ScreenCoordinates.fromPixels(windowFrame.offsetTop, windowFrame.offsetLeft)
                    : {
                        row: Math.round(windowFrame.offsetTop / 20) + 1,
                        col: Math.round(windowFrame.offsetLeft / 8) + 1
                    };
                const gridSize = ScreenCoordinates
                    ? ScreenCoordinates.sizeFromPixels(windowFrame.offsetHeight, windowFrame.offsetWidth, 1)
                    : {
                        rows: Math.round(windowFrame.offsetHeight / 20),
                        cols: Math.round(windowFrame.offsetWidth / 8)
                    };

                let newRow = gridPosition.row;
                let newCol = gridPosition.col;
                let newHeight = gridSize.rows;
                let newWidth = gridSize.cols - 4;

                const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : 'DS3';
                const maxRows = currentDisplaySize === 'DS3' ? 24 : 27;
                const maxCols = currentDisplaySize === 'DS3' ? 80 : 132;

                newRow = Math.max(1, Math.min(newRow, maxRows));
                newCol = Math.max(1, Math.min(newCol, maxCols));
                newHeight = Math.max(1, Math.min(newHeight, maxRows - newRow + 1));
                newWidth = Math.max(1, Math.min(newWidth, maxCols - newCol + 1));

                Logger.window(`Window resized to: row=${newRow}, col=${newCol}, height=${newHeight}, width=${newWidth}, zoom=${currentZoom}`);
                Logger.debug(`Validation check - Display: ${currentDisplaySize}, Max rows: ${maxRows}, Max cols: ${maxCols}`);

                updateWindowDimensions(originalDimensions, newRow, newCol, newHeight, newWidth);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
}
