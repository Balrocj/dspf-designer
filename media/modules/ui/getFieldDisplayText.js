// Muestra como se debe mostrar un campo en la interfaz de usuario, dependiendo de su tipo y longitud. 
// Para campos numéricos, se muestra una representación con caracteres específicos para indicar la longitud 
// y el formato del número. Para otros tipos de campos, se muestra una repetición del carácter correspondiente 
// a la longitud del campo.
export function getFieldDisplayText(options) {
    const { field, fieldLength, getFieldCharForDisplay } = options;

    if (field.dataType === 'date') {
        return 'yyyy-mm-dd';
    }

    if (field.dataType === 'time') {
        return 'hh.mm.ss';
    }

    if (field.dataType === 'timestamp') {
        return 'yyyy-mm-dd-hh.mm.ss.mmmmmm';
    }

    const length = fieldLength || field.length || 1;
    const isNumeric = field.dataType === 'numeric' || field.dataType === 'zoned' || field.dataType === 'packed' || field.dataType === 'float' || field.dataType === 'binary';
    if (isNumeric) {
        const digitChar = getFieldCharForDisplay(field);

        if (field.dataType === 'float') {
            const decimals = Number.isInteger(field.decimals) ? field.decimals : 0;
            const integerDigits = Math.max(1, length - decimals);
            const mantissa = decimals > 0
                ? `${digitChar.repeat(integerDigits)},${digitChar.repeat(decimals)}`
                : digitChar.repeat(length);
            const precisionChar = field.precision === 'DOUBLE' ? 'D' : 'E';
            return `-${mantissa}${precisionChar}-${digitChar.repeat(3)}`;
        }

        if (field.usage === 'I' && field.shift === 'S' || field.usage === 'B' && field.shift === 'S') {
            return length >= 1 ? digitChar.repeat(length) + '-' : digitChar;
        }

        return digitChar.repeat(length);
    }
    const fieldChar = getFieldCharForDisplay(field);
    return fieldChar.repeat(length);
}
