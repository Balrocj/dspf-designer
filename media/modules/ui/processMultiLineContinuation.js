/**
 * Process multi-line DDS constant continuation lines.
 * Handles continuation indicators (trailing dashes) and properly concatenates lines.
 * 
 * @param {Object} options - Configuration object
 * @param {string} options.initialLine - The first line containing opening quote and dash
 * @param {Function} options.getNextLine - Function(index) that returns next line or null
 * @param {number} options.startIndex - Starting index for continuation lines
 * @param {string} options.context - Context for logging ('PREVIEW' or 'DESIGNER')
 * @param {Object} options.Logger - Logger instance
 * @returns {Object} Result object: { fullLine: string, linesConsumed: number }
 */
export function processMultiLineContinuation({ initialLine, getNextLine, startIndex, context, Logger }) {
    let fullLine = initialLine;
    let linesConsumed = 0;
    let currentIndex = startIndex;
    const isStringContinuation = initialLine.includes("'");

    // Process continuation lines
    while (true) {
        const nextLine = getNextLine(currentIndex);
        if (!nextLine) {break;}

        // Check if next line is a continuation
        // A continuation line starts with 'A' at position 5, has spaces/empty where row/col would be,
        // and the trimmed content starts with content (not another row/col position)
        const fullAfterA = nextLine.length > 6 ? nextLine.substring(6) : '';
        const afterA = fullAfterA.trim();
        const contentAfter18 = nextLine.length > 18 ? nextLine.substring(18).trim() : '';
        const indicatorAreaContent = nextLine.length > 6 ? nextLine.substring(6, 18).trim() : '';
        const isIndicatorOnlyLine = indicatorAreaContent.length > 0 &&
                                    /^O?\s*[N\d\s]+$/.test(indicatorAreaContent) &&
                                    contentAfter18 === '';
        const isContinuation = nextLine.length > 6 &&
                             nextLine[5] === 'A' &&
                             !isIndicatorOnlyLine &&
                             !/^\d+\s+\d+/.test(afterA) &&
                             (afterA.length > 0 || (isStringContinuation && fullAfterA.length > 0)); // Allow blank continuation lines in string constants

        if (!isContinuation) {break;}

        Logger.parse(`Continuation found at index ${currentIndex}: ${nextLine}`);

        // For continuation lines, skip position 0-5 (DDS format)
        // In DDS, string constant continuations start at a fixed column (typically 45)
        // We must preserve ALL characters including leading spaces in the constant
        // For string constants, content typically starts at column 45 (index 38 after substring(6))
        // But we need to handle cases where it might be at different positions
        // The key is: if this is a continuation of a string constant, preserve ALL spaces

        // Check if this looks like a string constant continuation
        // (has a quote somewhere in the line)
        const hasQuote = fullAfterA.includes("'");

        let continuationContent;
        let contentStart;

        if (isStringContinuation || hasQuote) {
            // This is a string constant continuation
            // Take content from column 45 (index 38 after substring(6)) to preserve spacing
            // This is the standard DDS position for constant continuation
            const ddsConstantColumn = 38; // Column 45 in original line

            // If the line is long enough, take from the standard column
            // Otherwise take from the beginning (in case of non-standard formatting)
            if (fullAfterA.length > ddsConstantColumn) {
                continuationContent = fullAfterA.substring(ddsConstantColumn);
                contentStart = ddsConstantColumn;
            } else {
                // Line is shorter, take everything
                continuationContent = fullAfterA;
                contentStart = 0;
            }
        } else {
            // Not a string constant, skip leading spaces as before
            contentStart = fullAfterA.search(/\S/);
            continuationContent = contentStart >= 0 ? fullAfterA.substring(contentStart) : '';
        }

        // Determine if continuation line has leading spaces (indentation)
        // substring(6) removes columns 1-6, so remaining index maps to: contentStart + 7 = real column
        // Column 45 → contentStart 38, Column 46 → contentStart 39
        // If contentStart > 38, content is beyond column 45, so needs space
        const hasLeadingSpaces = contentStart > 38;
        Logger.parse(`[${context}] contentStart: ${contentStart}, column: ${contentStart + 7}, hasLeadingSpaces: ${hasLeadingSpaces}`);

        // Check if this is the last line (has closing quote)
        const isLastLine = continuationContent.includes("'");

        // If it's the last line, also remove the trailing continuation char ('-' or '+') from continuationContent
        // before the closing quote (it's also a continuation indicator). Allow spaces after '-'/'+'.
        if (isLastLine && continuationContent.length > 1) {
            const beforeQuote = continuationContent.substring(0, continuationContent.length - 1);
            const lastContMatch = beforeQuote.match(/[-+]\s*$/);
            if (lastContMatch) {
                const trimmedBefore = beforeQuote.substring(0, beforeQuote.length - lastContMatch[0].length);
                continuationContent = trimmedBefore + "'";
                Logger.parse(`[${context}] Removed trailing continuation sequence from last continuation line: "${continuationContent}"`);
            }
        }

        // Before concatenating, check if fullLine's constant value ends with a continuation char ('-' or '+')
        // Extract the content between quotes from fullLine to check
        const constantMatch = fullLine.match(/'([^']*)$/);
        if (constantMatch) {
            const currentConstantValue = constantMatch[1];
            const contMatch = currentConstantValue.match(/[-+]\s*$/);
            const hasContinuation = !!contMatch;
            Logger.parse(`[${context}] Before concat: constant value ends with: "${currentConstantValue.slice(-10)}", hasContinuation: ${hasContinuation}, isLastLine: ${isLastLine}`);

            // Always remove trailing continuation sequence (including trailing spaces) from current line
            if (hasContinuation) {
                const removeLen = contMatch[0].length;
                if (hasLeadingSpaces) {
                    Logger.parse(`[${context}] Removing trailing continuation sequence and replacing with space (has indentation)`);
                    fullLine = fullLine.substring(0, fullLine.length - removeLen) + ' ';
                } else {
                    Logger.parse(`[${context}] Removing trailing continuation sequence without space (no indentation)`);
                    fullLine = fullLine.substring(0, fullLine.length - removeLen);
                }
            }
        }

        fullLine = fullLine + continuationContent;
        Logger.parse(`[${context}] After concat: fullLine length: ${fullLine.length}, last 10 chars: "${fullLine.slice(-10)}"`);

        currentIndex++;
        linesConsumed++;

        // If this continuation line has the closing quote, we're done
        if (isLastLine) {
            break;
        }
    }

    Logger.parse(`Completed multi-line constant, full line length: ${fullLine.length}`);
    Logger.parse(`Complete constant last 40 chars: "${fullLine.slice(-40)}"`);

    return {
        fullLine: fullLine,
        linesConsumed: linesConsumed
    };
}
