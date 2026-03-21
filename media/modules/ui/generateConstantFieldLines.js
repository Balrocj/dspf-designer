// Generate constant field lines with continuation support AND indicators
export function generateConstantFieldLinesUI({
    field,
    IndicatorUtils
}) {
    const rowStr = field.row.toString().padStart(2, ' ');
    const colStr = field.col.toString().padStart(2, ' ');
    const constantValue = field.value || 'TEXT';

    // DDS format: text starts at column 45
    // Dash for continuation goes at column 79
    // Closing quote goes at column 80
    // So we have 34 characters (columns 45-78) for actual text per line
    const maxCharsPerLine = 34;
    const lines = [];

    // Build indicator prefix for the main line and prepended indicator lines
    let indicatorPrefix = '            '; // 12 spaces (default, no indicators)
    const fieldIndicatorLines = []; // For lines BEFORE the constant line

    if (field.indicators && field.indicators.groups && field.indicators.groups.length > 0) {
        const groups = field.indicators.groups;
        const isOr = field.indicators.isOr || false;

        if (isOr && groups.length > 1) {
            // OR FORMAT: Multiple groups
            let allLinesBeforeConst = [];

            groups.forEach((group, groupIndex) => {
                const groupIndicators = group.indicators || [];
                if (groupIndicators.length === 0) {return;}

                const numChunks = Math.ceil(groupIndicators.length / 3);
                for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                    const startIdx = chunkIndex * 3;
                    const chunk = groupIndicators.slice(startIdx, startIdx + 3);
                    const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                    const firstIsNegative = chunk[0]?.not;

                    let prefix, prefixSpaces;
                    if (chunkIndex === 0) {
                        prefix = groupIndex === 0 ? 'A' : 'AO';
                        prefixSpaces = firstIsNegative ? ' ' : '  ';
                        if (prefix === 'AO') {
                            prefixSpaces = firstIsNegative ? '' : ' ';
                        }
                    } else {
                        prefix = 'A';
                        prefixSpaces = firstIsNegative ? ' ' : '  ';
                    }

                    allLinesBeforeConst.push(`     ${prefix}${prefixSpaces}${chunkIndPart}`);
                }
            });

            // Last line goes to constant line, rest go before
            if (allLinesBeforeConst.length > 1) {
                fieldIndicatorLines.push(...allLinesBeforeConst.slice(0, -1));
                const lastLine = allLinesBeforeConst[allLinesBeforeConst.length - 1];
                const isAO = lastLine.startsWith('     AO');

                let indicatorPart;
                if (isAO) {
                    indicatorPart = lastLine.substring(7);
                } else {
                    indicatorPart = lastLine.substring(6);
                }
                indicatorPart = indicatorPart.trimEnd();

                if (isAO) {
                    indicatorPrefix = 'O' + indicatorPart;
                } else {
                    indicatorPrefix = indicatorPart;
                }

                const spacesNeeded = 12 - indicatorPrefix.length;
                indicatorPrefix = indicatorPrefix + ' '.repeat(Math.max(0, spacesNeeded));
            } else if (allLinesBeforeConst.length === 1) {
                const lastLine = allLinesBeforeConst[0];
                const isAO = lastLine.startsWith('     AO');

                let indicatorPart;
                if (isAO) {
                    indicatorPart = lastLine.substring(7);
                } else {
                    indicatorPart = lastLine.substring(6);
                }
                indicatorPart = indicatorPart.trimEnd();

                if (isAO) {
                    indicatorPrefix = 'O' + indicatorPart;
                } else {
                    indicatorPrefix = indicatorPart;
                }

                const spacesNeeded = 12 - indicatorPrefix.length;
                indicatorPrefix = indicatorPrefix + ' '.repeat(Math.max(0, spacesNeeded));
            }
        } else {
            // AND FORMAT: Single group
            const allIndicators = groups.length > 0 ? groups[0].indicators : [];

            if (allIndicators.length > 3) {
                const numChunks = Math.ceil(allIndicators.length / 3);

                for (let chunkIndex = 0; chunkIndex < numChunks - 1; chunkIndex++) {
                    const startIdx = chunkIndex * 3;
                    const chunk = allIndicators.slice(startIdx, startIdx + 3);
                    const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                    const chunkFirstIsNegative = chunk[0]?.not;
                    const chunkPrefixSpaces = chunkFirstIsNegative ? ' ' : '  ';
                    fieldIndicatorLines.push(`     A${chunkPrefixSpaces}${chunkIndPart}`);
                }

                const lastChunkStart = (numChunks - 1) * 3;
                const lastChunk = allIndicators.slice(lastChunkStart);
                const indPart = IndicatorUtils.formatForDds(lastChunk);
                const firstIsNegative = lastChunk[0]?.not;
                const prefixSpaces = firstIsNegative ? ' ' : '  ';
                const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
            } else if (allIndicators.length > 0) {
                const indPart = IndicatorUtils.formatForDds(allIndicators);
                const firstIsNegative = allIndicators[0]?.not;
                const prefixSpaces = firstIsNegative ? ' ' : '  ';
                const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
            }
        }
    }

    // Add field indicator lines BEFORE constant line
    if (fieldIndicatorLines.length > 0) {
        lines.push(...fieldIndicatorLines);
    }

    // Build constant line(s) with indicator prefix
    // Format: "     A  03                           19 11'TEXT'"
    const spacingAfterIndicators = ' '.repeat(21); // 21 spaces to reach column 38 (coordinates start at column 39)

    if (constantValue.length <= maxCharsPerLine) {
        // Short constant - single line with indicators
        lines.push(`     A${indicatorPrefix}${spacingAfterIndicators}${rowStr} ${colStr}'${constantValue}'`);
    } else {
        // Long constant - split into multiple lines with dash continuation
        let remainingText = constantValue;
        let isFirstLine = true;

        while (remainingText.length > 0) {
            const chunk = remainingText.substring(0, maxCharsPerLine);
            remainingText = remainingText.substring(maxCharsPerLine);
            const hasContinuation = remainingText.length > 0;

            if (isFirstLine) {
                // First line: includes indicators, row, column, text from column 45
                lines.push(`     A${indicatorPrefix}${spacingAfterIndicators}${rowStr} ${colStr}'${chunk}${hasContinuation ? '-' : '\''}`);
                isFirstLine = false;
            } else {
                // Continuation lines: NO indicators, text starts at column 45, NO opening quote
                lines.push(`     A                                      ${chunk}${hasContinuation ? '-' : '\''}`);
            }
        }
    }

    return lines;
}
