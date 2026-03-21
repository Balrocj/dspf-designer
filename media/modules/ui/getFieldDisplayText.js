// Muestra como se debe mostrar un campo en la interfaz de usuario, dependiendo de su tipo y longitud. 
// Para campos numéricos, se muestra una representación con caracteres específicos para indicar la longitud 
// y el formato del número. Para otros tipos de campos, se muestra una repetición del carácter correspondiente 
// a la longitud del campo.
export function getFieldDisplayText(options) {
    const { field, fieldLength, getFieldCharForDisplay } = options;

    function applyEdtcdeDisplayReplacement(baseText, digitChar) {
        const edtcdeCode = field.edtcde && field.edtcde.value
            ? String(field.edtcde.value).trim().toUpperCase()
            : '';

        if (edtcdeCode === 'Z') {
            return baseText;
        }

        const replacement = field.edtcde && field.edtcde.replaceLeadingZerosWith
            ? String(field.edtcde.replaceLeadingZerosWith).trim()
            : '';

        if (!replacement || (replacement !== '*' && replacement !== '$')) {
            return baseText;
        }

        const firstDigitIndex = baseText.indexOf(digitChar);
        if (firstDigitIndex === -1) {
            return baseText;
        }

        return `${baseText.substring(0, firstDigitIndex)}${replacement}${baseText.substring(firstDigitIndex + 1)}`;
    }

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

        const edtcdeCode = field.edtcde && field.edtcde.value
            ? String(field.edtcde.value).trim().toUpperCase()
            : '';

        const formatThousandsInDigitRuns = (baseText) => {
            const escapedDigit = digitChar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const digitRunRegex = new RegExp(`${escapedDigit}{4,}`, 'g');

            return baseText.replace(digitRunRegex, (run) => run.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
        };

        const applyEdtcdeCodeFormatting = (baseText) => {
            if (!edtcdeCode) {
                return baseText;
            }

            let formattedText = baseText;

            if (['1', '2', '3', 'A', 'B', 'J', 'K', 'N', 'O'].includes(edtcdeCode)) {
                formattedText = formatThousandsInDigitRuns(formattedText);
            }

            if (['A', 'B', 'C', 'D'].includes(edtcdeCode) && !formattedText.endsWith('CR')) {
                formattedText = `${formattedText}CR`;
            }

            if (['J', 'K', 'L', 'M'].includes(edtcdeCode) && !formattedText.endsWith('-')) {
                formattedText = `${formattedText}-`;
            }

            if (['N', 'O', 'P', 'Q'].includes(edtcdeCode)) {
                formattedText = formattedText.replace(/-$/, '');
                if (!formattedText.startsWith('-')) {
                    formattedText = `-${formattedText}`;
                }
            }

            if (edtcdeCode === 'Z') {
                formattedText = formattedText.replace(/\./g, '');
                formattedText = formattedText.replace(/-/g, '');
            }

            return formattedText;
        };

        let baseNumericText;
        const isSignedInputOrBoth = (field.usage === 'I' || field.usage === 'B') && field.shift === 'S';
        const hasEdtcdePriorityOnBoth = field.usage === 'B' && Boolean(edtcdeCode);

        if (field.dataType === 'float') {
            const decimals = Number.isInteger(field.decimals) ? field.decimals : 0;
            const integerDigits = Math.max(1, length - decimals);
            const mantissa = decimals > 0
                ? `${digitChar.repeat(integerDigits)},${digitChar.repeat(decimals)}`
                : digitChar.repeat(length);
            const precisionChar = field.precision === 'DOUBLE' ? 'D' : 'E';
            baseNumericText = `-${mantissa}${precisionChar}-${digitChar.repeat(3)}`;
        } else if (isSignedInputOrBoth && !hasEdtcdePriorityOnBoth) {
            baseNumericText = length >= 1 ? digitChar.repeat(length) + '-' : digitChar;
        } else {
            baseNumericText = digitChar.repeat(length);
        }

        const edtcdeFormatted = applyEdtcdeCodeFormatting(baseNumericText);
        return applyEdtcdeDisplayReplacement(edtcdeFormatted, digitChar);
    }
    const fieldChar = getFieldCharForDisplay(field);
    return fieldChar.repeat(length);
}
