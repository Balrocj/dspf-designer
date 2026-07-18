// Generate ERRMSG keyword lines for a field
export function generateFieldErrmsgLinesUI({ field, generateDdsLineWithIndicators }) {
    if (!field || !field.errmsg || typeof generateDdsLineWithIndicators !== 'function') {
        return [];
    }

    const errmsg = field.errmsg;
    const indicatorGroups = errmsg.indicators || field.errmsgIndicators || [];

    // DDS keyword area starts at column 45 on 80-col displays, leaving 36 chars.
    // ERRMSG formatting overhead differs by line:
    // - single line: ERRMSG('...')  => payload max 27
    // - first line (continued): ERRMSG('...- => payload max 27
    // - middle continuation: ...-   => payload max 35
    // - last continuation: ...')    => payload max 34
    const MAX_SINGLE_PAYLOAD = 27;
    const MAX_FIRST_PAYLOAD = 27;
    const MAX_MIDDLE_PAYLOAD = 35;
    const MAX_LAST_PAYLOAD = 34;

    const takeChunk = (value, cap) => {
        if (!value || value.length <= cap) {
            return { chunk: value || '', rest: '' };
        }

        let breakAt = value.lastIndexOf(' ', cap);
        if (breakAt <= 0) {
            breakAt = cap;
        }

        const chunk = value.slice(0, breakAt);
        let rest = value.slice(breakAt);
        if (rest.startsWith(' ')) {
            rest = rest.slice(1);
        }

        return { chunk, rest };
    };

    const buildContinuationLines = (contentLines, hasClosureMarker) => {
        if (!Array.isArray(contentLines) || contentLines.length === 0) {
            return [];
        }

        const lines = [];
        lines.push(generateDdsLineWithIndicators(`ERRMSG(${contentLines[0]}`, indicatorGroups));

        for (let i = 1; i < contentLines.length - 1; i++) {
            lines.push(`     A                                      ${contentLines[i]}`);
        }

        if (contentLines.length > 1) {
            lines.push(`     A                                      ${contentLines[contentLines.length - 1]})`);
        } else if (hasClosureMarker) {
            lines.push('     A                                      )');
        }

        return lines;
    };

    if (Array.isArray(errmsg.rawLines) && errmsg.rawLines.length > 0) {
        const contentLines = errmsg.rawLines.filter(line => line && line.trim().length > 0 && line !== ')');
        const hasClosureMarker = errmsg.rawLines.includes(')');
        const wasMultiline = errmsg.rawLines.length > 1 || hasClosureMarker;

        if (wasMultiline && contentLines.length >= 1) {
            return buildContinuationLines(contentLines, hasClosureMarker);
        }

        if (contentLines.length === 1) {
            return [generateDdsLineWithIndicators(`ERRMSG(${contentLines[0]})`, indicatorGroups)];
        }
    }

    if (typeof errmsg.raw === 'string' && errmsg.raw.trim().length > 0) {
        return [generateDdsLineWithIndicators(`ERRMSG(${errmsg.raw})`, indicatorGroups)];
    }

    if (typeof errmsg.value !== 'string') {
        return [];
    }

    const input = errmsg.value.replace(/\r/g, '');
    const escaped = input.replace(/'/g, "''").replace(/\n/g, '');

    if (escaped.length <= MAX_SINGLE_PAYLOAD) {
        return [generateDdsLineWithIndicators(`ERRMSG('${escaped}')`, indicatorGroups)];
    }

    const segments = [];
    let rest = escaped;

    const first = takeChunk(rest, MAX_FIRST_PAYLOAD);
    segments.push(first.chunk);
    rest = first.rest;

    while (rest.length > MAX_LAST_PAYLOAD) {
        const middle = takeChunk(rest, MAX_MIDDLE_PAYLOAD);
        segments.push(middle.chunk);
        rest = middle.rest;
    }

    if (rest.length > 0) {
        segments.push(rest);
    }

    const contentLines = segments.map((segment, index) => {
        if (index === 0) {
            return `'${segment}-`;
        }
        if (index === segments.length - 1) {
            return `${segment}'`;
        }
        return `${segment}-`;
    });

    return buildContinuationLines(contentLines, false);
}
