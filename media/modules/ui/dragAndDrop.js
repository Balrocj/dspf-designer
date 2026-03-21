export function setupDragAndDrop({
    Logger,
    ScreenCoordinates,
    getCurrentRecord,
    getCurrentDisplaySize,
    getCurrentZoom,
    getWindowDimensions,
    moveField,
    createField
}) {
    const toolItems = document.querySelectorAll('.tool-item');
    const canvas = document.getElementById('fields-container');

    if (!canvas) {
        Logger.error('Fields container not found, skipping drag and drop setup');
        return;
    }

    Logger.ui('Setting up drag and drop for', toolItems.length, 'tool items');

    toolItems.forEach((item, index) => {
        Logger.debug(`Setting up drag for item ${index}:`, item.dataset.type);

        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.dataset.type);
            e.dataTransfer.effectAllowed = 'copy';
            this.classList.add('dragging');
            Logger.debug('Drag started for:', this.dataset.type);
        });

        item.addEventListener('dragend', function() {
            this.classList.remove('dragging');
            Logger.debug('Drag ended for:', this.dataset.type);
        });
    });

    canvas.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.classList.add('drop-zone');
    });

    canvas.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.classList.add('drop-zone');
    });

    canvas.addEventListener('dragleave', function(e) {
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('drop-zone');
        }
    });

    canvas.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drop-zone');

        const data = e.dataTransfer.getData('text/plain');
        Logger.debug('Drop event triggered with data:', data);

        if (!data) {
            Logger.error('No data received in drop event');
            return;
        }

        const rect = this.getBoundingClientRect();
        const currentZoom = getCurrentZoom ? getCurrentZoom() : 1;

        const gridPosition = ScreenCoordinates
            ? ScreenCoordinates.fromClientPoint(e.clientX, e.clientY, rect, currentZoom)
            : {
                row: Math.max(1, Math.floor(((e.clientY - rect.top) / currentZoom) / 20) + 1),
                col: Math.max(1, Math.floor(((e.clientX - rect.left) / currentZoom) / 8) + 1)
            };

        const x = (e.clientX - rect.left) / currentZoom;
        const y = (e.clientY - rect.top) / currentZoom;

        let row = Math.max(1, gridPosition.row);
        let col = Math.max(1, gridPosition.col);

        const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
        const windowDimensions = currentRecord ? getWindowDimensions(currentRecord) : null;
        if (windowDimensions && windowDimensions.hasWindow) {
            const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
            const windowDim = currentDisplaySize === 'DS3' ? windowDimensions.ds3 : windowDimensions.ds4;
            if (windowDim) {
                const relRow = row - (windowDim.row - 1);
                const relCol = col - windowDim.col;

                if (relRow > 0 && relCol > 0) {
                    row = relRow;
                    col = relCol;
                    Logger.window(`🪟 [WINDOW] Converted absolute screen (${row + (windowDim.row - 1)}, ${col + windowDim.col}) to WINDOW-relative (${row}, ${col})`);
                }
            }
        }

        Logger.debug('Drop at pixel:', { x, y, currentZoom }, 'grid:', { row, col });

        try {
            const dropData = JSON.parse(data);
            if (dropData.type === 'existing-field') {
                Logger.debug('Moving existing field:', dropData.fieldId);
                moveField(dropData.fieldId, row, col);
            } else {
                createField(data, row, col);
            }
        } catch (e) {
            Logger.debug('Creating new field type:', data);
            createField(data, row, col);
        }
    });

    Logger.success('Drag and drop setup complete');
}
