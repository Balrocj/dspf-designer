// Extract row and column from parts array
// Returns: { row, col, nextIndex } or null if invalid
export function extractRowColFromParts({ parts, startIndex, previousPosition = null }) {
    if (startIndex >= parts.length) {
        return null;
    }

    const rowStr = parts[startIndex];
    const isNumericToken = (token) => /^\d+$/.test(token);
    const isRelativeToken = (token) => /^\+\d+$/.test(token);
    const resolveRelativeColumn = (deltaToken) => {
        if (!previousPosition || typeof previousPosition.col !== 'number') {
            return null;
        }

        const previousLength = Number.isFinite(previousPosition.length) ? previousPosition.length : 0;
        const delta = parseInt(deltaToken.substring(1), 10);
        if (isNaN(delta)) {
            return null;
        }

        return previousPosition.col + previousLength + delta;
    };

    // Relative position token: "+02" means same row and relative column
    // from the end of the previous field/constant.
    if (isRelativeToken(rowStr)) {
        if (!previousPosition || typeof previousPosition.row !== 'number') {
            return null;
        }

        const relativeCol = resolveRelativeColumn(rowStr);
        if (relativeCol === null) {
            return null;
        }

        return {
            row: previousPosition.row,
            col: relativeCol,
            nextIndex: startIndex + 1
        };
    }

    if (!isNumericToken(rowStr)) {
        return null;
    }

    const row = parseInt(rowStr, 10);

    if (isNaN(row)) {
        return null;
    }

    // Check for col
    if (startIndex + 1 < parts.length) {
        const colStr = parts[startIndex + 1];

        if (isNumericToken(colStr)) {
            const col = parseInt(colStr, 10);
            return {
                row: row,
                col: col,
                nextIndex: startIndex + 2
            };
        }

        if (isRelativeToken(colStr)) {
            const relativeCol = resolveRelativeColumn(colStr);
            if (relativeCol !== null) {
                return {
                    row: row,
                    col: relativeCol,
                    nextIndex: startIndex + 2
                };
            }
        }
    }

    // Compact fixed format support when col has 3 digits and no separator exists,
    // e.g. "6118" => row=6, col=118 or "20118" => row=20, col=118
    const compactMatch = rowStr.match(/^(\d{1,2})(\d{3})$/);
    if (!compactMatch) {
        return null;
    }

    const compactRow = parseInt(compactMatch[1], 10);
    const compactCol = parseInt(compactMatch[2], 10);
    if (isNaN(compactRow) || isNaN(compactCol)) {
        return null;
    }

    return {
        row: compactRow,
        col: compactCol,
        nextIndex: startIndex + 1
    };
}
