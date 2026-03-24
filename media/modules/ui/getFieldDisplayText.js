// Muestra como se debe mostrar un campo en la interfaz de usuario, dependiendo de su tipo y longitud. 
// Para campos numéricos, se muestra una representación con caracteres específicos para indicar la longitud 
// y el formato del número. Para otros tipos de campos, se muestra una repetición del carácter correspondiente 
// a la longitud del campo.
export function getFieldDisplayText(options) {
    const { field, fieldLength, getFieldCharForDisplay } = options;

    // EDTWRD: plantilla IBM i de edición de palabra.
    // Estructura de la plantilla (después de quitar comillas externas):
    //   - Posición 1 (índice 0): carácter de supresión/relleno de ceros.
    //       Si es '0' → suprimir ceros a la izquierda (reemplazar por espacios).
    //       Si es otro char → usarlo como relleno. En el Designer lo mostramos
    //       como digitChar para indicar que ahí va un dígito.
    //   - Posiciones 2..N: cada ' ' (espacio) = posición de dígito (→ digitChar).
    //       '&' = espacio literal forzado (→ ' ').
    //       Cualquier otro carácter = literal fijo (se muestra tal cual).
    function applyEdtwrdFormatting(digitChar) {
        const rawTemplate = field.edtwrd && typeof field.edtwrd === 'object'
            ? (field.edtwrd.value || '')
            : (field.edtwrd || '');

        // Quitar comillas externas: '0(   )   -    ' → 0(   )   -
        const template = String(rawTemplate).replace(/^'(.*)'$/, '$1');

        if (!template) {
            return null;
        }

        // Posición 0: carácter de supresión. En el Designer lo mostramos como digitChar
        // porque indica dónde irá el dígito más significativo del número.
        const suppressChar = template[0];
        const suppressDisplay = digitChar; // siempre mostramos digitChar en pos 0

        // Posiciones 1..N: espacio → dígito, & → espacio literal, resto → literal
        let result = suppressDisplay;
        for (let i = 1; i < template.length; i++) {
            const ch = template[i];
            if (ch === ' ') {
                result += digitChar;  // posición de dígito
            } else if (ch === '&') {
                result += ' ';        // espacio forzado literal
            } else {
                result += ch;         // carácter literal (separator)
            }
        }
        return result;
    }

    // EDTMSK: máscara de edición IBM i.
    // Estructura de la máscara (después de quitar comillas):
    //   - ' ' (espacio) → posición de dígito (→ digitChar)
    //   - '&' → espacio literal forzado (→ ' ')
    //   - cualquier otro carácter → literal fijo (se muestra tal cual)
    function applyEdtmskFormatting(digitChar) {
        const rawMask = field.edtmsk && typeof field.edtmsk === 'object'
            ? (field.edtmsk.value || '')
            : (field.edtmsk || '');

        const mask = String(rawMask).replace(/^'(.*)'$/, '$1');

        if (!mask) {
            return null;
        }

        let result = '';
        for (let i = 0; i < mask.length; i++) {
            const ch = mask[i];
            if (ch === ' ') {
                result += digitChar;  // posición de dígito
            } else if (ch === '&') {
                result += ' ';        // espacio literal forzado
            } else {
                result += ch;         // literal fijo (-, /, etc.)
            }
        }
        return result;
    }

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

            // Y: fecha con separadores → MM-DD-YY (6 dígitos) o MM-DD-YYYY (8 dígitos)
            // El separador de fecha IBM i por defecto es '-' (Mas adelante se debería leer del sysval QDATSEP).
            if (edtcdeCode === 'Y') {
                const len = baseText.length;
                if (len === 6) {
                    formattedText = `${digitChar.repeat(2)}-${digitChar.repeat(2)}-${digitChar.repeat(2)}`;
                } else if (len === 8) {
                    formattedText = `${digitChar.repeat(2)}-${digitChar.repeat(2)}-${digitChar.repeat(4)}`;
                } else {
                    // Insertar '-' cada 2 dígitos como mejor aproximación
                    let r = '';
                    for (let i = 0; i < len; i++) {
                        if (i > 0 && i % 2 === 0 && i < len - 1) { r += '-'; }
                        r += digitChar;
                    }
                    formattedText = r;
                }
            }

            // W: fecha juliana → YY-DDD (5 dígitos) o YYYY-DDD (7 dígitos)
            if (edtcdeCode === 'W') {
                const len = baseText.length;
                if (len === 5) {
                    formattedText = `${digitChar.repeat(2)}-${digitChar.repeat(3)}`;
                } else if (len === 7) {
                    formattedText = `${digitChar.repeat(4)}-${digitChar.repeat(3)}`;
                } else {
                    formattedText = `${digitChar.repeat(Math.max(1, len - 3))}-${digitChar.repeat(3)}`;
                }
            }

            return formattedText;
        };

        let baseNumericText;
        const isSignedInputOrBoth = (field.usage === 'I' || field.usage === 'B') && field.shift === 'S';
        const hasEdtcdePriorityOnBoth = field.usage === 'B' && Boolean(edtcdeCode);
        const decimals = Number.isInteger(field.decimals) ? field.decimals : 0;

        const buildDecimalDisplay = (totalDigits, decimalDigits) => {
            if (decimalDigits <= 0) {
                return digitChar.repeat(totalDigits);
            }

            const integerDigits = Math.max(1, totalDigits - decimalDigits);
            return `${digitChar.repeat(integerDigits)},${digitChar.repeat(decimalDigits)}`;
        };

        if (field.dataType === 'float') {
            const integerDigits = Math.max(1, length - decimals);
            const mantissa = decimals > 0
                ? `${digitChar.repeat(integerDigits)},${digitChar.repeat(decimals)}`
                : digitChar.repeat(length);
            const precisionChar = field.precision === 'DOUBLE' ? 'D' : 'E';
            baseNumericText = `-${mantissa}${precisionChar}-${digitChar.repeat(3)}`;
        } else if (isSignedInputOrBoth && !hasEdtcdePriorityOnBoth) {
            baseNumericText = `${buildDecimalDisplay(length, decimals)}-`;
        } else {
            baseNumericText = buildDecimalDisplay(length, decimals);
        }

        // Prioridad de keywords de edición (en IBM i son mutuamente excluyentes,
        // pero si coexisten en el DDS, EDTCDE tiene precedencia sobre EDTMSK/EDTWRD):
        // 1. EDTWRD (si existe y no hay EDTCDE)
        // 2. EDTMSK (si existe y no hay EDTCDE ni EDTWRD)
        // 3. EDTCDE (siempre que exista, gana sobre los anteriores)
        if (edtcdeCode) {
            const edtcdeFormatted = applyEdtcdeCodeFormatting(baseNumericText);
            return applyEdtcdeDisplayReplacement(edtcdeFormatted, digitChar);
        }

        const edtwrdResult = applyEdtwrdFormatting(digitChar);
        if (edtwrdResult !== null) {
            return edtwrdResult;
        }

        const edtmskResult = applyEdtmskFormatting(digitChar);
        if (edtmskResult !== null) {
            return edtmskResult;
        }

        const edtcdeFormatted = applyEdtcdeCodeFormatting(baseNumericText);
        return applyEdtcdeDisplayReplacement(edtcdeFormatted, digitChar);
    }
    const fieldChar = getFieldCharForDisplay(field);
    return fieldChar.repeat(length);
}
