// Generate a DDS line with optional indicators
export function generateDdsLineWithIndicatorsUI({
    keyword,
    indicatorsOrGroups,
    IndicatorUtils
}) {
    // Support both old format (array) and new format (groups structure)
    let indicators = [];
    let groups = [];
    let isOr = false;

    if (Array.isArray(indicatorsOrGroups)) {
        // Old format - backward compatibility
        indicators = indicatorsOrGroups;
    } else if (indicatorsOrGroups && indicatorsOrGroups.groups) {
        // New format with OR support
        groups = indicatorsOrGroups.groups;
        isOr = indicatorsOrGroups.isOr;
    }

    // If we have groups with OR, generate multiple lines with AO prefix
    if (groups.length > 1 && isOr) {
        const lines = [];
        groups.forEach((group, groupIndex) => {
            // Check if this group has more than 3 indicators
            if (group.indicators.length > 3) {
                // Split this OR group into multiple lines (3 indicators per line)
                const numChunks = Math.ceil(group.indicators.length / 3);

                for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                    const startIdx = chunkIndex * 3;
                    const chunk = group.indicators.slice(startIdx, startIdx + 3);
                    const indPart = IndicatorUtils.formatForDds(chunk);

                    // Determine prefix:
                    // - First group, any chunk: 'A' (no O)
                    // - Other groups, first chunk: 'AO' (marca inicio del grupo OR)
                    // - Other groups, other chunks: 'A' (continuación AND dentro del grupo)
                    const isFirstChunk = chunkIndex === 0;
                    const isFirstGroup = groupIndex === 0;
                    const prefix = (isFirstGroup || !isFirstChunk) ? 'A' : 'AO';

                    const firstIsNegative = chunk[0]?.not;
                    let prefixSpaces = firstIsNegative ? ' ' : '  ';

                    // Adjust spaces for AO prefix
                    if (prefix === 'AO') {
                        prefixSpaces = firstIsNegative ? '' : ' ';
                    }

                    // targetWidth must be 36 for AO to compensate for the extra character
                    const targetWidth = prefix === 'AO' ? 36 : 37;
                    const spacesNeeded = Math.max(1, targetWidth - indPart.length);

                    // Only add keyword on the LAST line of the LAST group
                    const isLastChunkOfLastGroup = groupIndex === groups.length - 1 && chunkIndex === numChunks - 1;
                    if (isLastChunkOfLastGroup) {
                        lines.push(`     ${prefix}${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`);
                    } else {
                        lines.push(`     ${prefix}${prefixSpaces}${indPart}`);
                    }
                }
            } else {
                // This group has 3 or fewer indicators - single line
                const indPart = IndicatorUtils.formatForDds(group.indicators);
                const prefix = groupIndex === 0 ? 'A' : 'AO';
                const firstIsNegative = group.indicators.length > 0 && group.indicators[0].not;
                let prefixSpaces = firstIsNegative ? ' ' : '  ';

                // Adjust spaces for AO prefix
                if (prefix === 'AO') {
                    prefixSpaces = firstIsNegative ? '' : ' ';
                }

                // targetWidth must be 36 for AO to compensate for the extra character
                const targetWidth = prefix === 'AO' ? 36 : 37;
                const spacesNeeded = Math.max(1, targetWidth - indPart.length);

                // Only add keyword on the LAST group
                if (groupIndex === groups.length - 1) {
                    lines.push(`     ${prefix}${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`);
                } else {
                    lines.push(`     ${prefix}${prefixSpaces}${indPart}`);
                }
            }
        });
        return lines.join('\n');
    }

    // Single group or old format - get all indicators
    const finalIndicators = groups.length > 0 ? groups[0].indicators : indicators;

    if (finalIndicators && finalIndicators.length > 0) {
        // If more than 3 indicators (AND format), split into multiple lines (3 per line max)
        if (finalIndicators.length > 3 && !isOr) {
            const lines = [];
            // Split indicators into chunks of 3, process from end to start
            const numChunks = Math.ceil(finalIndicators.length / 3);

            for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                const startIdx = chunkIndex * 3;
                const chunk = finalIndicators.slice(startIdx, startIdx + 3);
                const indPart = IndicatorUtils.formatForDds(chunk);
                const firstIsNegative = chunk[0]?.not;
                const prefixSpaces = firstIsNegative ? ' ' : '  ';

                // Check if this is the last chunk (will have the keyword)
                const isLastChunk = chunkIndex === numChunks - 1;

                if (isLastChunk) {
                    // Last chunk - add keyword
                    const targetWidth = firstIsNegative ? 37 : 36;
                    const spacesNeeded = Math.max(1, targetWidth - indPart.length);
                    lines.push(`     A${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`);
                } else {
                    // Not last chunk - just indicators
                    lines.push(`     A${prefixSpaces}${indPart}`);
                }
            }
            return lines.join('\n');
        }

        // 3 or fewer indicators - single line
        const indPart = IndicatorUtils.formatForDds(finalIndicators);
        const firstIsNegative = finalIndicators[0]?.not;
        const prefixSpaces = firstIsNegative ? ' ' : '  ';
        const targetWidth = firstIsNegative ? 37 : 36;
        const spacesNeeded = Math.max(1, targetWidth - indPart.length);
        return `     A${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`;
    }

    return `     A                                      ${keyword}`;
}
