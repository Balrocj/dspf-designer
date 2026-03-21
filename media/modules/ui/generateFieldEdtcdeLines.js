// Generate EDTCDE keyword lines for a field
export function generateFieldEdtcdeLinesUI({
    field
}) {
    const lines = [];

    if (!field.edtcde || !field.edtcde.value) {
        return lines;
    }

    const edtcdeValue = String(field.edtcde.value).trim().toUpperCase();
    const replaceLeadingZerosWith = field.edtcde.replaceLeadingZerosWith
        ? String(field.edtcde.replaceLeadingZerosWith).trim()
        : '';
    const allowReplacement = edtcdeValue !== 'Z';

    const keyword = (allowReplacement && replaceLeadingZerosWith)
        ? `EDTCDE(${edtcdeValue} ${replaceLeadingZerosWith})`
        : `EDTCDE(${edtcdeValue})`;

    lines.push(`     A                                      ${keyword}`);
    return lines;
}
