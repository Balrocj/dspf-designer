//Generate DSPATR lines for a field
export function generateFieldDspatrLinesUI({
    field,
    DSPATR_ATTRIBUTE_MAP,
    applyIndicatorChangesToField,
    generateDdsLineWithIndicators,
    Logger
}) {
    // Apply any pending indicator changes from the Map before generating DDS
    applyIndicatorChangesToField(field);

    const lines = [];

    if (!field.attributes || Object.keys(field.attributes).length === 0) {
        return lines;
    }

    // Check if this field originally had a grouped DSPATR format
    if (field.hasGroupedDspatr) {
        // Preserve grouped format: regenerate DSPATR(XX YY ZZ) with active attributes
        const activeCodes = [];
        for (const [attrName, ddsCode] of Object.entries(DSPATR_ATTRIBUTE_MAP)) {
            if (field.attributes[attrName]) {
                activeCodes.push(ddsCode);
            }
        }

        if (activeCodes.length > 0) {
            // Get indicators from the first attribute (all share same indicators in grouped format)
            const firstAttr = Object.keys(field.attributes).find(k => field.attributes[k]);
            const indicatorData = field.attributeIndicators && firstAttr ?
                (field.attributeIndicators[firstAttr] || []) : [];

            const groupedDspatr = `DSPATR(${activeCodes.join(' ')})`;
            const generated = generateDdsLineWithIndicators(groupedDspatr, indicatorData);
            // Split by newline in case generateDdsLineWithIndicators returns multiple lines (OR groups)
            const generatedLines = generated.split('\n');
            lines.push(...generatedLines);
            Logger.dds('Generated grouped DSPATR line with indicators');
        }
    } else {
        // Individual format: one DSPATR per line
        for (const [attrName, ddsCode] of Object.entries(DSPATR_ATTRIBUTE_MAP)) {
            if (field.attributes[attrName]) {
                // Preserve original line(s) if indicators haven't changed (now an array)
                if (field.originalAttrLines && field.originalAttrLines[attrName] && !field.attributeIndicatorsModified && Array.isArray(field.originalAttrLines[attrName])) {
                    Logger.dds(`Preserving ${field.originalAttrLines[attrName].length} original DSPATR line(s) for ${attrName}`);
                    lines.push(...field.originalAttrLines[attrName]);
                } else {
                    Logger.dds(`Generating new DSPATR line(s) for ${attrName}`);
                    const indicatorData = field.attributeIndicators && field.attributeIndicators[attrName] ? field.attributeIndicators[attrName] : [];
                    const generated = generateDdsLineWithIndicators(`DSPATR(${ddsCode})`, indicatorData);
                    // Split by newline in case generateDdsLineWithIndicators returns multiple lines (OR groups)
                    const generatedLines = generated.split('\n');
                    lines.push(...generatedLines);
                }
            }
        }
    }

    return lines;
}
