// Generate TEXT keyword lines for a field
export function generateFieldTextLinesUI({ field }) {
    if (!field || !field.text) {
        return [];
    }

    const textKeyword = field.text;

    const contentLines = Array.isArray(textKeyword.rawLines)
        ? textKeyword.rawLines.filter(line => line && line.trim().length > 0 && line !== ')')
        : [];
    const hasClosureMarker = Array.isArray(textKeyword.rawLines) && textKeyword.rawLines.includes(')');
    const wasMultilineRaw = Array.isArray(textKeyword.rawLines) && (textKeyword.rawLines.length > 1 || hasClosureMarker);

    // Preserve original multiline shape when parser captured raw lines.
    if (wasMultilineRaw && contentLines.length >= 1) {
        const lines = [];
        lines.push(`     A                                      TEXT(${contentLines[0]}`);

        for (let i = 1; i < contentLines.length - 1; i++) {
            lines.push(`     A                                      ${contentLines[i]}`);
        }

        if (contentLines.length > 1) {
            lines.push(`     A                                      ${contentLines[contentLines.length - 1]})`);
        } else if (hasClosureMarker) {
            lines.push('     A                                      )');
        }

        return lines;
    }

    if (typeof textKeyword.raw === 'string' && textKeyword.raw.trim().length > 0) {
        return [`     A                                      TEXT(${textKeyword.raw})`];
    }

    if (typeof textKeyword.value !== 'string') {
        return [];
    }

    const escapeSingleQuotes = (value) => String(value).replace(/'/g, "''");

    // DDS TEXT supports up to 50 content characters.
    const input = textKeyword.value.replace(/\r/g, '');
    let limited = '';
    let countedChars = 0;
    for (const ch of input) {
        if (ch === '\n') {
            limited += ch;
            continue;
        }
        if (countedChars >= 50) {
            break;
        }
        limited += ch;
        countedChars += 1;
    }

    const rawLogicalLines = limited.split('\n').map(escapeSingleQuotes);
    const segments = [];
    const maxSegmentLength = 28;

    rawLogicalLines.forEach((line) => {
        if (line.length === 0) {
            segments.push('');
            return;
        }
        for (let i = 0; i < line.length; i += maxSegmentLength) {
            segments.push(line.slice(i, i + maxSegmentLength));
        }
    });

    const finalSegments = segments.filter((segment, index) => segment.length > 0 || segments.length === 1 || index === segments.length - 1);

    if (finalSegments.length <= 1) {
        const single = finalSegments[0] || '';
        return [`     A                                      TEXT('${single}')`];
    }

    const lines = [];
    lines.push(`     A                                      TEXT('${finalSegments[0]}-`);

    for (let i = 1; i < finalSegments.length - 1; i++) {
        lines.push(`     A                                      ${finalSegments[i]}-`);
    }

    lines.push(`     A                                      ${finalSegments[finalSegments.length - 1]}')`);
    return lines;
}
