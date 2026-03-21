export function getKeywordDisplay(options) {
    const { keywordName } = options;

    const displays = {
        'DATE': 'MM/DD/YYYY',
        'TIME': 'HH:MM:SS',
        'SYSNAME': 'SSSSSSSS',
        'USER': 'UUUUUUUUUU'
    };
    return displays[keywordName] || keywordName;
}
