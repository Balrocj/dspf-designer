// Generate MSGID keyword lines for a field
export function generateFieldMsgidLinesUI({ field }) {
    if (!field || !field.msgid) {
        return [];
    }

    const msgid = field.msgid;

    // If MSGID has multiline rawLines, preserve that format
    if (Array.isArray(msgid.rawLines) && msgid.rawLines.length > 0) {
        // Preserve parsed segments exactly, only dropping truly empty lines.
        const contentLines = msgid.rawLines.filter(line => line && line.trim().length > 0 && line !== ')');
        const hasClosureMarker = msgid.rawLines.includes(')');

        const wasMultiline = msgid.rawLines.length > 1 || hasClosureMarker;

        if (wasMultiline && contentLines.length >= 1) {
            const lines = [];
            lines.push(`     A                                      MSGID(${contentLines[0]}`);

            for (let i = 1; i < contentLines.length - 1; i++) {
                lines.push(`     A                                      ${contentLines[i]}`);
            }

            if (contentLines.length > 1) {
                lines.push(`     A                                      ${contentLines[contentLines.length - 1]})`);
            } else if (hasClosureMarker) {
                lines.push(`     A                                      )`);
            }

            return lines;
        } else if (contentLines.length === 1) {
            const content = contentLines[0];
            return [`     A                                      MSGID(${content})`];
        }
    }

    // Check if the raw contains a continuation indicator (hyphen at the end)
    // This is a safety check in case rawLines wasn't properly set but still needs multiline
    if (msgid.raw && msgid.raw.trim().endsWith('-')) {
        // Split the raw by the hyphen and try to recover the multiline form
        const parts = msgid.raw.split('-');
        if (parts.length >= 2) {
            const lines = [];
            lines.push(`     A                                      MSGID(${parts[0].trim()}-`);
            for (let i = 1; i < parts.length - 1; i++) {
                lines.push(`     A                                      ${parts[i].trim()}-`);
            }
            lines.push(`     A                                      ${parts[parts.length - 1].trim()})`);
            return lines;
        }
    }

    const parts = [];

    const prefix = typeof msgid.prefix === 'string' ? msgid.prefix.trim() : '';
    const messageId = typeof msgid.messageId === 'string' ? msgid.messageId.trim() : '';
    const file = typeof msgid.file === 'string' ? msgid.file.trim() : '';
    const library = typeof msgid.library === 'string' ? msgid.library.trim() : '';

    if (prefix) {
        parts.push(prefix);
    }
    if (messageId) {
        parts.push(messageId);
    }

    if (file) {
        if (library) {
            parts.push(`${library}/${file}`);
        } else {
            parts.push(file);
        }
    }

    if (parts.length < 2) {
        return [];
    }

    return [`     A                                      MSGID(${parts.join(' ')})`];
}
