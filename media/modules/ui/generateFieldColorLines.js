// Generate COLOR lines for a field
export function generateFieldColorLinesUI({
    field,
    applyIndicatorChangesToField,
    generateDdsLineWithIndicators,
    Logger
}) {
    // Apply any pending indicator changes from the Map before generating DDS
    applyIndicatorChangesToField(field);

    const lines = [];

    if (field.colors && field.colors.length > 1) {
        // Multiple colors - each on separate line with indicators
        field.colors.forEach(color => {
            const indicatorData = field.colorIndicators && field.colorIndicators[color] ? field.colorIndicators[color] : [];

            // Check if we should preserve original lines (originalColorLines is now an array)
            if (field.originalColorLines && field.originalColorLines[color] && !field.colorIndicatorsModified && Array.isArray(field.originalColorLines[color])) {
                Logger.dds(`Preserving ${field.originalColorLines[color].length} original COLOR line(s) for ${color}`);
                lines.push(...field.originalColorLines[color]);
            } else {
                // Generate new line(s) - may be multiple if OR groups exist
                const generated = generateDdsLineWithIndicators(`COLOR(${color})`, indicatorData);
                lines.push(generated);
            }
        });
    } else if (field.color) {
        // Single color - check if it has indicators
        const indicatorData = field.colorIndicators && field.colorIndicators[field.color] ? field.colorIndicators[field.color] : [];

        // Check if indicatorData has any groups with indicators
        const hasIndicators = Array.isArray(indicatorData) ? indicatorData.length > 0 :
                             (indicatorData.groups && indicatorData.groups.length > 0);

        if (hasIndicators) {
            // Has indicators - must be on separate line
            if (field.originalColorLines && field.originalColorLines[field.color] && !field.colorIndicatorsModified && Array.isArray(field.originalColorLines[field.color])) {
                lines.push(...field.originalColorLines[field.color]);
            } else {
                const generated = generateDdsLineWithIndicators(`COLOR(${field.color})`, indicatorData);
                lines.push(generated);
            }
        }
        // If no indicators, return empty array (will be added inline)
    }

    return lines;
}
