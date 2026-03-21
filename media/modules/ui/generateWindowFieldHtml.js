export function generateWindowFieldHtml(options) {
    const { field, windowDimensions, generateFieldHtml } = options;

    return generateFieldHtml(field, { row: windowDimensions.row, col: windowDimensions.col });
}
