// Generate DFT keyword lines for a field
export function generateFieldDftLinesUI({
    field
}) {
    const lines = [];

    if (!field.dft) {
        return lines;
    }

    const dftValue = typeof field.dft === 'string'
        ? field.dft.trim()
        : (field.dft.value ? String(field.dft.value).trim() : '');

    if (!dftValue) {
        return lines;
    }

    const escapedValue = dftValue.replace(/'/g, "''");
    const keyword = `DFT('${escapedValue}')`;
    lines.push(`     A                                      ${keyword}`);

    return lines;
}
