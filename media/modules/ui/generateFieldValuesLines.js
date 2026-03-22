export function generateFieldValuesLinesUI({ field }) {
    const lines = [];
    if (!field?.values) {
        return lines;
    }

    const rawValues = (typeof field.values === 'string' ? field.values : '').trim();
    if (!rawValues) {
        return lines;
    }

    const prefix = '     A                                      ';
    const keyword = `VALUES(${rawValues})`;
    const maxLineLength = 80;

    if ((prefix + keyword).length <= maxLineLength) {
        lines.push(prefix + keyword);
        return lines;
    }

    const tokens = [];
    const tokenRegex = /'(?:''|[^'])*'/g;
    let match;
    while ((match = tokenRegex.exec(rawValues)) !== null) {
        tokens.push(match[0]);
    }

    if (tokens.length === 0) {
        lines.push((prefix + keyword).substring(0, maxLineLength));
        return lines;
    }

    let current = 'VALUES(';
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const isLast = i === tokens.length - 1;
        const candidate = `${current}${current === 'VALUES(' ? '' : ' '}${token}${isLast ? ')' : ''}`;

        if ((prefix + candidate).length <= maxLineLength) {
            current = candidate;
            if (isLast) {
                lines.push(prefix + current);
            }
            continue;
        }

        lines.push(prefix + current + ' -');
        current = token + (isLast ? ')' : '');

        if (isLast) {
            lines.push(prefix + current);
        }
    }

    return lines;
}
