// Generate REFFLD keyword lines for a field
// Phase 1: Simple preservation of REFFLD syntax as parsed
export function generateFieldReffldLinesUI({ field }) {
    if (!field || !field.reffld) {
        return [];
    }

    const reffld = field.reffld;
    
    // Preserve multiline REFFLD continuations exactly in DDS shape when available.
    // Example:
    //   REFFLD(RCNTRCNT/CNTNME +
    //          *LIBL/CNTRLCNT)
    // Preserve parsed segments exactly, only dropping truly empty lines.
    const contentLines = reffld.rawLines ? reffld.rawLines.filter(line => line && line.trim().length > 0 && line !== ')') : [];
    const hasClosureMarker = reffld.rawLines && reffld.rawLines.includes(')');

    const wasMultiline = reffld.rawLines && (reffld.rawLines.length > 1 || hasClosureMarker);

    if (wasMultiline && contentLines.length >= 1) {
        const lines = [];
        lines.push(`     A                                      REFFLD(${contentLines[0]}`);

        for (let i = 1; i < contentLines.length - 1; i++) {
            lines.push(`     A                                      ${contentLines[i]}`);
        }

        if (contentLines.length > 1) {
            lines.push(`     A                                      ${contentLines[contentLines.length - 1]})`);
        } else if (hasClosureMarker) {
            lines.push(`     A                                      )`);
        }

        return lines;
    }

    // If reffld has a raw string (from parsing), use it as-is
    if (reffld.raw) {
        return [`     A                                      REFFLD(${reffld.raw})`];
    }

    // If reffld is an object with parts (future UI support), reconstruct it
    // For Phase 1, this path is not used, but we prepare for Phase 3
    if (reffld.fieldName) {
        let parts = [reffld.fieldName];
        if (reffld.file) {
            if (reffld.library) {
                parts.push(`${reffld.library}/${reffld.file}`);
            } else {
                parts.push(reffld.file);
            }
        }
        return [`     A                                      REFFLD(${parts.join(' ')})`];
    }

    return [];
}
