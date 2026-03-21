// Generate DFTVAL keyword lines for a field
export function generateFieldDftvalLinesUI({
    field,
    generateDdsLineWithIndicators,
    Logger
}) {
    const lines = [];
    if (!field.dftval || !field.dftval.value) {return lines;}
    const dftvalValue = field.dftval.value;
    const keyword = `DFTVAL('${dftvalValue}')`;

    // Support both old format (array) and new format (groups structure)
    const indicatorData = field.dftvalIndicators;

    Logger.debug(`[DFTVAL GEN] field.dftvalIndicators:`, indicatorData);

    // Check if indicatorData has any groups with indicators
    const hasIndicators = Array.isArray(indicatorData) ? indicatorData.length > 0 :
                         (indicatorData && indicatorData.groups && indicatorData.groups.length > 0);

    Logger.debug(`[DFTVAL GEN] hasIndicators=${hasIndicators}`);

    if (hasIndicators) {
        // Has indicators - must be on separate line(s)
        // Generate line(s) - may be multiple if OR groups exist (SAME AS COLOR)
        Logger.debug(`[DFTVAL GEN] Calling generateDdsLineWithIndicators with keyword="${keyword}"`);
        const generated = generateDdsLineWithIndicators(keyword, indicatorData);
        Logger.debug(`[DFTVAL GEN] Generated result (type=${typeof generated}):`, generated);
        Logger.debug(`[DFTVAL GEN] Generated length: ${generated.length} chars`);
        lines.push(generated); // Push the complete string (may contain \n for OR groups)
    } else {
        // No indicators - return empty array (will be added inline if needed)
        // For DFTVAL, we always generate a separate line even without indicators
        Logger.debug(`[DFTVAL GEN] No indicators, using default line`);
        lines.push(`     A                                      ${keyword}`);
    }

    Logger.debug(`[DFTVAL GEN] Returning ${lines.length} line(s):`, lines);
    return lines;
}
