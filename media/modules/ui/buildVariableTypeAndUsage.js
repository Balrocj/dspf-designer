export function buildVariableTypeAndUsageUI({
    field
}) {
    // Reference fields use DDS format: R <length> <usage>
    if (field.dataType === 'reference') {
        const refLength = Number.isFinite(field.decimals)
            ? field.decimals
            : (parseInt(field.decimals, 10) || 0);

        let usageChar = 'O';
        if (field.usage === 'I') {
            usageChar = 'I';
        } else if (field.usage === 'O') {
            usageChar = 'O';
        } else if (field.usage === 'B') {
            usageChar = 'B';
        } else if (field.type === 'input') {
            usageChar = 'I';
        }

        return `R ${refLength} ${usageChar}`;
    }

    const isDate = field.dataType === 'date';
    const isTime = field.dataType === 'time';
    const isTimestamp = field.dataType === 'timestamp';
    const length = isDate ? 10 : (isTime ? 8 : (isTimestamp ? 26 : (field.length || 10)));
    const decimals = field.decimals || 0;

    // Map dataType to DDS type character
    let typeChar = 'A';
    if (field.dataType === 'character') {
        typeChar = 'A';
    } else if (field.dataType === 'zoned') {
        const hasExplicitShift = typeof field.shift === 'string' && field.shift.trim() !== '';
        if (hasExplicitShift) {
            typeChar = field.shift.trim();
        } else if (field.usage === 'I' || field.usage === 'B') {
            typeChar = 'S';
        } else {
            typeChar = '';
        }
    } else if (field.dataType === 'float') {
        typeChar = 'F';
    } else if (field.dataType === 'double') {
        typeChar = field.shift || 'J';
    } else if (field.dataType === 'date') {
        typeChar = 'L';
    } else if (field.dataType === 'time') {
        typeChar = 'T';
    } else if (field.dataType === 'timestamp') {
        typeChar = 'Z';
    }

    const typeSpec = isDate ? 'L' : (isTime ? 'T' : (isTimestamp ? 'Z' : `${length}${typeChar}`));
    const isNumeric = ['zoned', 'float', 'double'].includes(field.dataType);

    // Determine usage character
    let usageChar = 'O';
    if (field.usage === 'I') {
        usageChar = 'I';
    } else if (field.usage === 'O') {
        usageChar = 'O';
    } else if (field.usage === 'B') {
        usageChar = 'B';
    } else {
        // Fallback to old field.type
        if (field.type === 'input') {
            usageChar = 'I';
        } else if (field.type === 'output') {
            usageChar = 'O';
        } else {
            usageChar = 'O';
        }
    }

    // Build type and usage string
    let typeAndUsage = '';
    if (field.dataType === 'double') {
        typeAndUsage = `${typeSpec}  ${usageChar}`;
    } else if (isNumeric && decimals > 0) {
        typeAndUsage = `${typeSpec} ${decimals}${usageChar}`;
    } else if (isNumeric) {
        typeAndUsage = `${typeSpec} 0${usageChar}`;
    } else {
        typeAndUsage = `${typeSpec}  ${usageChar}`;
    }

    return typeAndUsage;
}
