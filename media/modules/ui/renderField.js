export function renderField(options) {
    const {
        field,
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

    // Calculate line wrapping for character fields that exceed screen width
    const segments = ScreenCoordinates.calculateFieldWrapping(field, getCurrentDisplaySize());

    if (segments.length === 1) {
        // Single line field - render normally
        const fieldElement = document.createElement('div');
        setupFieldElement(fieldElement, field);

        // Position fields to match ruler marks exactly
        const { left, top } = ScreenCoordinates.toPixels(field.row, field.col);
        fieldElement.style.left = `${left}px`;
        fieldElement.style.top = `${top}px`;

        canvas.appendChild(fieldElement);
        Logger.success(`Rendered field: ${field.name} at (${field.row}, ${field.col}) -> (${top}px, ${left}px)`);
    } else {
        // Multi-line field - render each segment
        segments.forEach((segment, index) => {
            const fieldElement = document.createElement('div');
            setupFieldElement(fieldElement, field);

            // Mark as segment and store segment info
            fieldElement.dataset.fieldSegment = index;
            fieldElement.dataset.segmentLength = segment.length;

            const { left, top } = ScreenCoordinates.toPixels(segment.row, segment.col);
            fieldElement.style.left = `${left}px`;
            fieldElement.style.top = `${top}px`;

            // Override width for this segment
            fieldElement.style.width = `${segment.length * 8}px`;

            // Update content to show only this segment
            const fieldLength = field.length || 10;
            const fullDisplayValue = getFieldDisplayText(field, fieldLength);
            const startOffset = segments.slice(0, index).reduce((sum, seg) => sum + seg.length, 0);
            const segmentValue = fullDisplayValue.substring(startOffset, startOffset + segment.length);
            fieldElement.textContent = segmentValue;

            canvas.appendChild(fieldElement);
            Logger.success(`Rendered field segment ${index + 1}/${segments.length}: ${field.name} at (${segment.row}, ${segment.col})`);
        });
    }
}
