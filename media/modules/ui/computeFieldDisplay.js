export function computeFieldDisplay(options) {
    const {
        field,
        mode = 'designer',
        ColorUtils,
        ScreenCoordinates,
        getKeywordDisplay,
        getFieldDisplayText
    } = options;

    const isPreview = mode === 'preview';
    let text = '';
    let color = '';
    let classes = [];

    // Constants
    if (field.type === 'constant') {
        text = field.value || '';
        classes.push('constant');
        let effectiveColorCode = field.color;
        if (!effectiveColorCode && field.colors && field.colors.length > 0) {
            effectiveColorCode = field.colors[0];
        }
        if (effectiveColorCode && ColorUtils.isValidColorCode(effectiveColorCode)) {
            color = ColorUtils.IBM_COLORS[effectiveColorCode];
        }
    }
    // Keywords shown like constants
    else if (field.type === 'keyword' || field.isKeyword) {
        text = getKeywordDisplay(field.name, field.keywordArgs);
        classes.push('constant');
        let effectiveColorCode = field.color;
        if (!effectiveColorCode && field.colors && field.colors.length > 0) {
            effectiveColorCode = field.colors[0];
        }
        // If a color code exists, use it; otherwise let CSS default (green) apply
        if (effectiveColorCode && ColorUtils.isValidColorCode(effectiveColorCode)) {
            color = ColorUtils.IBM_COLORS[effectiveColorCode];
        }
    }
    // Variables
    else {
        const fieldLength = field.length || 1;
        text = getFieldDisplayText(field, fieldLength);

        // Type class
        if (field.type === 'input') {classes.push('input-field');}
        else if (field.type === 'output') {classes.push('output-field');}
        else {classes.push(`${field.type}-field`);} // fallback

        // Color
        color = ColorUtils.getColorStyle(field, '#00ffff').replace('color: ', '').replace(';', '') || '#00ffff';
    }

    // Attributes -> classes
    if (field.attributes) {
        if (field.attributes.underline) {classes.push('underline');}
        if (field.attributes.reverse) {classes.push('reverse');}
        if (isPreview && field.attributes.blink) {classes.push('blink');}
        if (isPreview && field.attributes.nonDisplay) {classes.push('non-display');}
    }

    // Also check attributeIndicators (when attributes have indicators with OR groups)
    if (field.attributeIndicators) {
        if (field.attributeIndicators.underline) {classes.push('underline');}
        if (field.attributeIndicators.reverse) {classes.push('reverse');}
        if (isPreview && field.attributeIndicators.blink) {classes.push('blink');}
        if (isPreview && field.attributeIndicators.nonDisplay) {classes.push('non-display');}
        if (field.attributeIndicators.highlight) {classes.push('highlight');}
    }

    // Width in pixels
    const widthPx = ScreenCoordinates.getWidthInPixels(text.length || field.length || 1);

    return { text, widthPx, color, classes };
}
