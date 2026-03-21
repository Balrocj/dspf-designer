export const ColorUtils = {
    IBM_COLORS: {
        'WHT': '#FFFFFF',
        'BLU': '#3B78FF',
        'RED': '#FF3B3B',
        'TRQ': '#00FFFF',
        'YLW': '#FFFF00',
        'GRN': '#00FF00',
        'PNK': '#FF00FF'
    },

    getColor(field, defaultColor = '#00ff00') {
        if (field && field.color && this.IBM_COLORS[field.color]) {
            return this.IBM_COLORS[field.color];
        }

        if (field && field.colorIndicators) {
            const colorCodes = Object.keys(field.colorIndicators);
            if (colorCodes.length > 0) {
                const firstColorCode = colorCodes[0];
                if (this.IBM_COLORS[firstColorCode]) {
                    return this.IBM_COLORS[firstColorCode];
                }
            }
        }

        return defaultColor;
    },

    getColorStyle(field, defaultColor = '#00ff00') {
        const color = this.getColor(field, defaultColor);
        return `color: ${color};`;
    },

    getDefaultForFieldType(fieldType) {
        const defaults = {
            'constant': '#00ff00',
            'input': '#ffff00',
            'output': '#00ff00',
            'keyword': '#00ffff',
            'text': '#00ff00',
            'number': '#ffff00'
        };
        return defaults[fieldType] || '#00ff00';
    },

    isValidColorCode(colorCode) {
        return colorCode && this.IBM_COLORS.hasOwnProperty(colorCode);
    },

    getAllColorCodes() {
        return Object.keys(this.IBM_COLORS);
    },

    getColorName(colorCode) {
        const names = {
            'WHT': 'White',
            'BLU': 'Blue',
            'RED': 'Red',
            'TRQ': 'Turquoise',
            'YLW': 'Yellow',
            'GRN': 'Green',
            'PNK': 'Pink'
        };
        return names[colorCode] || colorCode;
    }
};
