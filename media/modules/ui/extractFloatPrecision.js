// Extract FLTPCN precision from line
// Returns: 'SINGLE', 'DOUBLE', or null
export function extractFloatPrecision({ line, dataType }) {
    if (dataType !== 'float') {
        return null;
    }

    if (line.includes('FLTPCN')) {
        if (line.includes('*SINGLE')) {
            return 'SINGLE';
        } else if (line.includes('*DOUBLE')) {
            return 'DOUBLE';
        }
    }

    return null;
}
