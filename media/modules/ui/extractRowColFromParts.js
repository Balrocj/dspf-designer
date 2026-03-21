// Extract row and column from parts array
// Returns: { row, col, nextIndex } or null if invalid
export function extractRowColFromParts({ parts, startIndex }) {
    if (startIndex >= parts.length) {
        return null;
    }

    const rowStr = parts[startIndex];
    const row = parseInt(rowStr);

    if (isNaN(row)) {
        return null;
    }

    // Check for col
    if (startIndex + 1 < parts.length) {
        const colStr = parts[startIndex + 1];
        const col = parseInt(colStr);

        if (!isNaN(col)) {
            return {
                row: row,
                col: col,
                nextIndex: startIndex + 2
            };
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
