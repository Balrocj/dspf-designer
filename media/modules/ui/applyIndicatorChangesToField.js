export function applyIndicatorChangesToFieldUI({
    field,
    indicatorConfigurations,
    Logger
}) {
    if (!field) {return;}

    Logger.dds(`Applying indicator changes from Map to field: ${field.name}`);

    // Iterate through color indicators
    if (field.colors && Array.isArray(field.colors)) {
        field.colors.forEach(color => {
            const key = `color:${color}`;
            if (indicatorConfigurations.has(key)) {
                const indicatorData = indicatorConfigurations.get(key);

                if (!field.colorIndicators) {
                    field.colorIndicators = {};
                }

                // Convert from Map format to field format
                if (indicatorData.isOr && indicatorData.groups) {
                    // OR format - preserve groups structure
                    field.colorIndicators[color] = indicatorData;
                    Logger.dds(`Applied OR indicators for color ${color}:`, indicatorData);
                } else if (indicatorData instanceof Set) {
                    // AND format - convert Set to array for DDS generation
                    // The Set contains JSON strings, so we need to parse them back to objects
                    const indicatorArray = Array.from(indicatorData).map(jsonStr => JSON.parse(jsonStr));
                    field.colorIndicators[color] = indicatorArray;
                    Logger.dds(`Applied AND indicators for color ${color}:`, indicatorArray);
                }
            }
        });
    }

    // Iterate through attribute indicators
    if (field.attributes) {
        Object.keys(field.attributes).forEach(attrName => {
            if (!field.attributes[attrName]) {return;} // Skip inactive attributes

            const key = `attr:${attrName}`;
            if (indicatorConfigurations.has(key)) {
                const indicatorData = indicatorConfigurations.get(key);

                if (!field.attributeIndicators) {
                    field.attributeIndicators = {};
                }

                // Convert from Map format to field format
                if (indicatorData.isOr && indicatorData.groups) {
                    // OR format - preserve groups structure
                    field.attributeIndicators[attrName] = indicatorData;
                    Logger.dds(`Applied OR indicators for attribute ${attrName}:`, indicatorData);
                } else if (indicatorData instanceof Set) {
                    // AND format - convert Set to array for DDS generation
                    // The Set contains JSON strings, so we need to parse them back to objects
                    const indicatorArray = Array.from(indicatorData).map(jsonStr => JSON.parse(jsonStr));
                    field.attributeIndicators[attrName] = indicatorArray;
                    Logger.dds(`Applied AND indicators for attribute ${attrName}:`, indicatorArray);
                }
            }
        });
    }
}
