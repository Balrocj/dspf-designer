// Parse DDS type specification (e.g., "10A", "15S", "7P", "3Y", "2F")
// Returns: { length, typeChar, dataType } or null if invalid
export function parseDdsTypeSpecification({ typeSpec, hasDecimals = false }) {
    const normalized = (typeSpec || '').trim().toUpperCase();
    if (normalized === 'L') {
        return {
            length: 10,
            typeChar: 'L',
            dataType: 'date'
        };
    }
    if (normalized === 'T') {
        return {
            length: 8,
            typeChar: 'T',
            dataType: 'time'
        };
    }
    if (normalized === 'Z') {
        return {
            length: 26,
            typeChar: 'Z',
            dataType: 'timestamp'
        };
    }

    const typeMatch = normalized.match(/(\d+)([A-Z])?/);
    if (!typeMatch) {
        return null;
    }

    const length = parseInt(typeMatch[1]);
    const typeChar = typeMatch[2]; // May be undefined
    let dataType = 'character'; // Default

    // Map DDS type to internal type
    if (!typeChar) {
        // No type letter specified
        if (hasDecimals) {
            dataType = 'zoned';
        } else {
            dataType = 'character';
        }
    } else if (typeChar === 'A') {
        dataType = 'character';
    } else if (typeChar === 'F') {
        dataType = 'float';
    } else if (typeChar === 'P') {
        dataType = 'packed';
    } else if (typeChar === 'S' || typeChar === 'Y' || typeChar === 'N' || typeChar === 'D' || typeChar === 'I') {
        // These are shift codes for Zoned type
        dataType = 'zoned';
    } else if (typeChar === 'J' || typeChar === 'E' || typeChar === 'O' || typeChar === 'G') {
        // These are shift codes for Double Byte type
        dataType = 'double';
    }

    return {
        length: length,
        typeChar: typeChar,
        dataType: dataType
    };
}
