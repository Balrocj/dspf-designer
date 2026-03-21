export function getDefaultLength(type) {
    switch (type) {
        case 'text':
            return 10;
        case 'number':
            return 6;
        case 'constant':
            return null;
        case 'field-date':
            return 10;
        case 'field-time':
            return 8;
        case 'field-timestamp':
            return 26;
        default:
            return 10;
    }
}
