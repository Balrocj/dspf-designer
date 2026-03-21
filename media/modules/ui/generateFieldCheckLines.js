// Generate CHECK keyword lines for a field
export function generateFieldCheckLinesUI({
    field,
    CHECK_CHAR_CODES,
    CHECK_NUMERIC_CODES,
    generateDdsLineWithIndicators,
    Logger
}) {
    const lines = [];
    if (!field.checkOptions) {return lines;}
    const orderedCodes = [...CHECK_CHAR_CODES, ...CHECK_NUMERIC_CODES];
    const seen = new Set();
    orderedCodes.forEach(code => {
        if (seen.has(code)) {return;}
        seen.add(code);
        if (!field.checkOptions[code]) {return;}
        const keyword = `CHECK(${code})`;
        if (['ME', 'ER'].includes(code)) {
            // ME and ER support indicators with OR groups
            const indicatorData = field.checkIndicators && field.checkIndicators[code] ? field.checkIndicators[code] : null;

            Logger.debug(`[CHECK GEN ${code}] field.checkIndicators[${code}]:`, indicatorData);

            const hasIndicators = indicatorData && indicatorData.groups && indicatorData.groups.length > 0;

            Logger.debug(`[CHECK GEN ${code}] hasIndicators=${hasIndicators}`);

            if (hasIndicators) {
                Logger.debug(`[CHECK GEN ${code}] Calling generateDdsLineWithIndicators with keyword="${keyword}"`);
                const generated = generateDdsLineWithIndicators(keyword, indicatorData);
                Logger.debug(`[CHECK GEN ${code}] Generated result (type=${typeof generated}):`, generated);
                Logger.debug(`[CHECK GEN ${code}] Generated length: ${generated.length} chars`);
                lines.push(generated); // Push complete string (may contain \n for OR groups)
            } else {
                Logger.debug(`[CHECK GEN ${code}] No indicators, using default line`);
                lines.push(`     A                                      ${keyword}`);
            }

            Logger.debug(`[CHECK GEN ${code}] Returning ${lines.length} line(s) for this code`);
        } else {
            lines.push(`     A                                      ${keyword}`);
        }
    });
    return lines;
}
