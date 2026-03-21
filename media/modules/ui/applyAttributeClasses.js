export function applyAttributeClasses(options) {
    const { fieldElement, attributes } = options;

    if (!attributes) {
        return;
    }

    if (attributes.underline) {
        fieldElement.classList.add('underline');
    }
    if (attributes.blink) {
        fieldElement.classList.add('blink');
    }
    if (attributes.reverse) {
        fieldElement.classList.add('reverse');
    }
}
