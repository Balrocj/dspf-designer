// Shared function to apply color changes from checkboxes to field object
export function applyColorChanges({ field, Logger, transferIndicators }) {
    const colorMap = {
        'color-green': 'GRN',
        'color-white': 'WHT',
        'color-red': 'RED',
        'color-turquoise': 'TRQ',
        'color-yellow': 'YLW',
        'color-pink': 'PNK',
        'color-blue': 'BLU'
    };

    // Collect all selected colors
    const selectedColors = [];
    for (const [checkboxId, colorCode] of Object.entries(colorMap)) {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            selectedColors.push(colorCode);
        }
    }

    // Update field colors
    if (selectedColors.length > 0) {
        // Set the first color as the primary color (for backward compatibility)
        field.color = selectedColors[0];
        // Store all colors in the colors array
        field.colors = selectedColors;
        Logger.debug(`Colors set to [${selectedColors.join(', ')}] for field ${field.name}`);

        // Initialize colorIndicators if needed
        if (!field.colorIndicators) {
            field.colorIndicators = {};
        }

        // Use unified indicator transfer helper
        transferIndicators({
            kind: 'color',
            keys: selectedColors,
            field: field,
            fieldType: 'field'
        });
    } else {
        // Remove colors if no checkbox is selected
        delete field.color;
        delete field.colors;
        delete field.colorIndicators;
        Logger.debug(`Colors removed for field ${field.name}`);
    }
}
