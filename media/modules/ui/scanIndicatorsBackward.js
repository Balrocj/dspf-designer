// Helper: Scan backwards from keyword line to collect all indicator-only lines
// Returns: { scannedLines: [{indicators: [...], isOr: boolean}], hasOrLines: boolean }
export function scanIndicatorsBackward({ lines, startIndex, lineOffset, contextLabel = '', IndicatorUtils, Logger }) {
    const scannedLines = [];
    let hasOrLines = false;
    let backOffset = lineOffset - 1;
    let currentGroup = null; // Track current group being built (scanning backwards)

    while (backOffset > 0) {
        const prevLine = lines[startIndex + backOffset];

        // Check if previous line has only indicators
        // A line has ONLY indicators if:
        // 1. Starts with 'A' or 'AO' at position 5-6
        // 2. Has indicators in columns 7-18 (positions after 'A'/'AO')
        // 3. Does NOT have a field name after position 18

        // Check if line starts with 'A' at position 5 (column 6)
        if (prevLine.length < 6 || prevLine[5] !== 'A') {
            break; // Not a DDS line starting with A
        }

        // Check for field name pattern after position 18 (field names start around column 19)
        // Field names are typically followed by type spec like "10A" or "2F 0"
        const prevContentAfter18 = prevLine.substring(18).trim();
        const hasFieldName = /^[A-Z][A-Z0-9_]{2,}\s+\d+/i.test(prevContentAfter18);

        // Stop scanning if there is any trailing content from column 44 onwards.
        // This covers both keyword forms with parentheses (e.g. COLOR(...)) and
        // without parentheses (e.g. SFLDSP, SFLDSPCTL, OVERLAY), which belong to
        // a different DDS line and must not be merged as indicator-only lines.
        const prevContentAfter44 = prevLine.length > 43 ? prevLine.substring(43).trim() : '';
        const hasTrailingContent = prevContentAfter44.length > 0;
        if (hasTrailingContent) {
            Logger.debug(`[${contextLabel}] scanIndicatorsBackward stopping - found trailing content at backOffset ${backOffset}: "${prevContentAfter44}"`);
            break;
        }

        // A line has ONLY indicators if:
        // - No field name after position 18
        // - Has indicator pattern (numbers with optional N prefix) in positions 6-18
        const indicatorAreaContent = prevLine.substring(6, 18).trim();
        const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);

        const prevHasOnlyIndicators = !hasFieldName && hasIndicatorPattern && indicatorAreaContent.length > 0;

        if (!prevHasOnlyIndicators) {
            break; // Stop if not an indicator-only line
        }

        // Check if this line starts a new OR group (has 'O' at position 6)
        const startsOrGroup = prevLine.length > 6 && prevLine[6] === 'O';

        // Extract indicators from this line
        const prevIndicators = IndicatorUtils.extractFromDdsLine(prevLine, contextLabel);

        if (prevIndicators && prevIndicators.length > 0) {
            if (startsOrGroup) {
                // When scanning BACKWARDS, finding 'AO' means:
                // - Everything AFTER this (currentGroup) is a continuation of this OR group
                // - Everything BEFORE this is a DIFFERENT group
                hasOrLines = true;

                if (currentGroup) {
                    // currentGroup has indicators from lines AFTER this AO line
                    // Those are continuations (A lines after AO), so they're part of this OR group
                    // Prepend current line's indicators to currentGroup
                    currentGroup.indicators.unshift(...prevIndicators);
                    currentGroup.isOr = true; // Mark as OR group
                } else {
                    // No currentGroup yet - this AO line starts the group we'll build
                    currentGroup = { indicators: [...prevIndicators], isOr: true };
                }

                // Save this complete OR group and reset for next group (scanning further back)
                scannedLines.unshift({ indicators: currentGroup.indicators, isOr: currentGroup.isOr });
                currentGroup = null;
            } else {
                // Line without 'O' - continuation of current group OR new AND group
                if (currentGroup === null) {
                    // Start new group (will be AND unless we find AO later)
                    currentGroup = { indicators: [...prevIndicators], isOr: false };
                } else {
                    // Add to current group (prepend because scanning backwards)
                    currentGroup.indicators.unshift(...prevIndicators);
                }
            }
        }

        backOffset--;
    }

    // Add remaining group if any (this is the first/topmost group)
    if (currentGroup && currentGroup.indicators.length > 0) {
        scannedLines.unshift({ indicators: currentGroup.indicators, isOr: currentGroup.isOr });
    }

    return { scannedLines, hasOrLines };
}
