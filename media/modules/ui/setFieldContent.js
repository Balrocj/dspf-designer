export function setFieldContent(options) {
    const { fieldElement, field, computeFieldDisplay } = options;

    const { text, widthPx, color, classes } = computeFieldDisplay(field, 'designer');
    fieldElement.textContent = text || '';
    fieldElement.style.padding = '0';
    fieldElement.style.minWidth = 'auto';
    fieldElement.style.backgroundColor = 'transparent';
    fieldElement.style.border = 'none';
    fieldElement.style.whiteSpace = 'pre';
    if (widthPx) { fieldElement.style.width = `${widthPx}px`; }
    if (color) { fieldElement.style.color = color; }
    classes.forEach(cls => fieldElement.classList.add(cls));
}
