// Extract display attributes with indicators
// Returns: { attrs: {...}, indicators: [], isGroupedFormat: boolean }
export function extractAttributes({ content, fullLine = null, IndicatorUtils, Logger }) {
    const attrs = {};
    const result = { attrs: attrs, indicators: [], isGroupedFormat: false };

    // Extract ALL indicators from DDS line
    // Format: "A  41 43                                  DSPATR(BL)"
    if (fullLine) {
        result.indicators = IndicatorUtils.extractFromDdsLine(fullLine, 'extractAttributes');
    }

    // Check for grouped format: DSPATR(HI RI UL)
    const groupedMatch = content.match(/DSPATR\(([A-Z]{2}(?:\s+[A-Z]{2})+)\)/);
    if (groupedMatch) {
        result.isGroupedFormat = true;
        // Split the grouped attributes by spaces
        const attrCodes = groupedMatch[1].split(/\s+/);
        Logger.parse(`Found grouped DSPATR format with codes:`, attrCodes);

        attrCodes.forEach(code => {
            switch (code) {
                case 'UL': attrs.underline = true; break;
                case 'BL': attrs.blink = true; break;
                case 'HI': attrs.highlight = true; break;
                case 'RI': attrs.reverse = true; break;
                case 'PC': attrs.cursorPosition = true; break;
                case 'CS': attrs.columnSeparator = true; break;
                case 'ND': attrs.nonDisplay = true; break;
                case 'MDT': attrs.modifiedDataTag = true; break;
                case 'PR': attrs.protect = true; break;
                case 'OID': attrs.operatorId = true; break;
                case 'SP': attrs.selectLightPen = true; break;
            }
        });
    } else {
        // Individual format: DSPATR(UL) or DSPATR(BL) etc.
        if (content.includes('DSPATR(UL)')) {attrs.underline = true;}
        if (content.includes('DSPATR(BL)')) {attrs.blink = true;}
        if (content.includes('DSPATR(HI)')) {attrs.highlight = true;}
        if (content.includes('DSPATR(RI)')) {attrs.reverse = true;}
        if (content.includes('DSPATR(PC)')) {attrs.cursorPosition = true;}
        if (content.includes('DSPATR(CS)')) {attrs.columnSeparator = true;}
        if (content.includes('DSPATR(ND)')) {attrs.nonDisplay = true;}
        if (content.includes('DSPATR(MDT)')) {attrs.modifiedDataTag = true;}
        if (content.includes('DSPATR(PR)')) {attrs.protect = true;}
        if (content.includes('DSPATR(OID)')) {attrs.operatorId = true;}
        if (content.includes('DSPATR(SP)')) {attrs.selectLightPen = true;}
    }

    return result;
}
