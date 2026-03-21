// Extract shift code from type spec for zoned/double types
// Returns: shift code (S/Y/N/D/I for zoned, J/E/O/G for double) or null
export function extractShiftCode({ typeSpec, dataType }) {
    if (dataType === 'zoned') {
        // Extract shift from typeChar (S/Y/N/D/I)
        const typeMatch = typeSpec.match(/\d+([SYNDI])/);
        if (typeMatch) {
            return typeMatch[1];
        }
        return 'Y';
    } else if (dataType === 'double') {
        // Extract shift from typeChar (J/E/O/G)
        const typeMatch = typeSpec.match(/\d+([JEOG])/);
        if (typeMatch) {
            return typeMatch[1];
        }
        return 'J';
    }

    return null;
}
