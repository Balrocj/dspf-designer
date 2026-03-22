// Generate EDTWRD/EDTMSK keyword lines for a field
export function generateFieldEditKeywordsLinesUI({
    field
}) {
    const lines = [];

    const escapeSingleQuotes = (text) => String(text).replace(/'/g, "''");
    const resolveValue = (keywordData) => {
        if (!keywordData) {
            return '';
        }
        if (typeof keywordData === 'string') {
            return keywordData;
        }
        if (typeof keywordData.value === 'string') {
            return keywordData.value;
        }
        return '';
    };

    const edtwrdValue = resolveValue(field.edtwrd);
    if (edtwrdValue.length > 0) {
        lines.push(`     A                                      EDTWRD('${escapeSingleQuotes(edtwrdValue)}')`);
    }

    const edtmskValue = resolveValue(field.edtmsk);
    if (edtmskValue.length > 0) {
        lines.push(`     A                                      EDTMSK('${escapeSingleQuotes(edtmskValue)}')`);
    }

    return lines;
}
