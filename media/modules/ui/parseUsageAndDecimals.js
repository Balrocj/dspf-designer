// Parse usage and decimals from parts
// Returns: { decimals, usage, hasDecimals, nextIndex }
export function parseUsageAndDecimals({ parts, startIndex }) {
    let decimals = 0;
    let usage = 'O';
    let hasDecimals = false;
    let currentIndex = startIndex;

    if (currentIndex >= parts.length) {
        return { decimals, usage, hasDecimals, nextIndex: currentIndex };
    }

    const nextPart = parts[currentIndex];

    // Check for decimals (and possibly usage attached to decimals)
    const decimalMatch = nextPart.match(/^(\d+)([OIBHMP]?)$/);
    if (decimalMatch) {
        hasDecimals = true;
        decimals = parseInt(decimalMatch[1]);
        // Check if usage is attached to decimals (e.g., "2I", "0O")
        if (decimalMatch[2]) {
            usage = decimalMatch[2];
            currentIndex++; // Move to next part (should be row)
        } else {
            // Decimals alone, check next part for usage or row
            currentIndex++;
            if (currentIndex < parts.length) {
                const afterDecimal = parts[currentIndex];
                // Check if it's a single letter usage
                if (afterDecimal.length === 1 && /[OIBHMP]/.test(afterDecimal)) {
                    usage = afterDecimal;
                    currentIndex++;
                }
                // Otherwise it's the row number
            }
        }
    } else if (nextPart.length === 1 && /[OIBHMP]/.test(nextPart)) {
        // It's just a usage letter (no decimals)
        usage = nextPart;
        currentIndex++;
    }
    // Otherwise it's the row number (no decimals, no usage)

    return {
        decimals: decimals,
        usage: usage,
        hasDecimals: hasDecimals,
        nextIndex: currentIndex
    };
}
