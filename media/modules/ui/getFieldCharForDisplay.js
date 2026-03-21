// Function to get display character for a field
export function getFieldCharForDisplay(options) {
    const { field } = options;

    let fieldChar = '_';

    if (field.dataType === 'numeric' || field.dataType === 'zoned' || field.dataType === 'packed' || field.dataType === 'float' || field.dataType === 'binary') {
        if (field.usage === 'O') {
            fieldChar = '6';
        } else if (field.usage === 'I') {
            fieldChar = '3';
        } else if (field.usage === 'B') {
            fieldChar = '9';
        } else {
            fieldChar = '6';
        }
    } else {
        if (field.usage === 'I') {
            fieldChar = 'I';
        } else if (field.usage === 'B') {
            fieldChar = 'B';
        } else if (field.usage === 'O') {
            fieldChar = 'O';
        } else {
            fieldChar = 'O';
        }
    }

    return fieldChar;
}
