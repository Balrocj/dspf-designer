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

    if (Array.isArray(field.dspatrGroups) && field.dspatrGroups.length > 0) {
        const generatedAttributes = new Set();

        for (const group of field.dspatrGroups) {
            const activeAttributes = group.attributes.filter(attrName => field.attributes[attrName]);
            if (activeAttributes.length === 0) {
                continue;
            }

            activeAttributes.forEach(attrName => generatedAttributes.add(attrName));

            const groupIsUnchanged = activeAttributes.length === group.attributes.length;
            if (group.originalLine && groupIsUnchanged && !field.attributeIndicatorsModified) {
                lines.push(group.originalLine);
                continue;
            }

            const attributeCodes = activeAttributes.map(attrName => DSPATR_ATTRIBUTE_MAP[attrName]);
            const indicatorAttribute = activeAttributes.find(attrName =>
                field.attributeIndicators && field.attributeIndicators[attrName]);
            const indicatorData = indicatorAttribute ? field.attributeIndicators[indicatorAttribute] : [];
            const generated = generateDdsLineWithIndicators(`DSPATR(${attributeCodes.join(' ')})`, indicatorData);
            lines.push(...generated.split('\n'));
        }

        for (const [attrName, ddsCode] of Object.entries(DSPATR_ATTRIBUTE_MAP)) {
            if (field.attributes[attrName] && !generatedAttributes.has(attrName)) {
                const indicatorData = field.attributeIndicators && field.attributeIndicators[attrName] ? field.attributeIndicators[attrName] : [];
                const generated = generateDdsLineWithIndicators(`DSPATR(${ddsCode})`, indicatorData);
                lines.push(...generated.split('\n'));
            }
        }

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
