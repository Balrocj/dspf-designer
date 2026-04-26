// Generate MSGID keyword lines for a field
export function generateFieldMsgidLinesUI({ field }) {
    if (!field || !field.msgid) {
        return [];
    }

    const msgid = field.msgid;
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
