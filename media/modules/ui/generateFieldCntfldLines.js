// Generate CNTFLD keyword lines for a field
export function generateFieldCntfldLinesUI({
    field
}) {
    const lines = [];

    if (!field.cntfld) {
        return lines;
    }

    const rawValue = typeof field.cntfld === 'string'
        ? field.cntfld.trim()
        : (field.cntfld.value ? String(field.cntfld.value).trim() : '');

    if (!rawValue) {
        return lines;
    }

    if (!/^\d{3}$/.test(rawValue)) {
        return lines;
    }

    lines.push(`     A                                      CNTFLD(${rawValue})`);

    return lines;
}
