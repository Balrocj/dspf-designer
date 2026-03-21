export function renderWindowField(options) {
    const {
        field,
        windowDimensions,
        Logger,
        ScreenCoordinates,
        getCurrentDisplaySize,
        setupFieldElement,
        getFieldDisplayText
    } = options;

    const canvas = document.getElementById('fields-container');
    if (!canvas) {
        Logger.error('Fields container not found');
        return;
    }

    Logger.window(`RENDER START: ${field.name} has field.length=${field.length}`);

    // Calculate line wrapping for character fields that exceed screen width
    const segments = ScreenCoordinates.calculateFieldWrapping(field, getCurrentDisplaySize());

    if (segments.length === 1) {
        // Single line field - render normally
        const fieldElement = document.createElement('div');
        setupFieldElement(fieldElement, field);

        // Calculate absolute screen position from WINDOW + field coordinates
        const absoluteRow = windowDimensions.row + field.row - 1;
        const absoluteCol = windowDimensions.col + field.col + 1;
        const { top: relativeTop, left: relativeLeft } = ScreenCoordinates.toPixels(absoluteRow, absoluteCol);

        // Ensure fields don't go outside reasonable bounds
        const maxTop = relativeTop + 500;
        const maxLeft = relativeLeft + 800;

        fieldElement.style.left = `${Math.min(relativeLeft, maxLeft)}px`;
        fieldElement.style.top = `${Math.min(relativeTop, maxTop)}px`;

        canvas.appendChild(fieldElement);
        Logger.window(`Rendered window field: ${field.name} at window-relative (${field.row},${field.col}) -> absolute (${relativeTop},${relativeLeft});`);
    } else {
        // Multi-line field - render each segment with window offset
        segments.forEach((segment, index) => {
            const fieldElement = document.createElement('div');
            setupFieldElement(fieldElement, field);

            // Mark as segment
            fieldElement.dataset.fieldSegment = index;
            fieldElement.dataset.segmentLength = segment.length;

            const absoluteRow = windowDimensions.row + segment.row - 1;
            const absoluteCol = windowDimensions.col + segment.col + 1;
            const { top: relativeTop, left: relativeLeft } = ScreenCoordinates.toPixels(absoluteRow, absoluteCol);

            fieldElement.style.left = `${relativeLeft}px`;
            fieldElement.style.top = `${relativeTop}px`;
            fieldElement.style.width = `${segment.length * 8}px`;

            // Update content to show only this segment
            const fieldLength = field.length || 10;
            const fullDisplayValue = getFieldDisplayText(field, fieldLength);
            const startOffset = segments.slice(0, index).reduce((sum, seg) => sum + seg.length, 0);
            const segmentValue = fullDisplayValue.substring(startOffset, startOffset + segment.length);
            fieldElement.textContent = segmentValue;

            canvas.appendChild(fieldElement);
            Logger.window(`Rendered window field segment ${index + 1}/${segments.length}: ${field.name} at (${segment.row}, ${segment.col})`);
        });
    }
}
