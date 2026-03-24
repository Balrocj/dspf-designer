export function getKeywordDisplay(options) {
    const { keywordName, keywordArgs = null } = options;

    if (keywordName === 'DATE') {
        const normalizedArgs = String(keywordArgs || '')
            .replace(/[()]/g, '')
            .replace(/\s+/g, '')
            .toUpperCase();

        if (normalizedArgs === '*SYS*YY' || normalizedArgs === '*JOB*YY') {
            return 'MM/DD/YYYY';
        }

        return 'MM/DD/YY';
    }

    const displays = {
        'TIME': 'HH:MM:SS',
        'SYSNAME': 'SSSSSSSS',
        'USER': 'UUUUUUUUUU'
    };
    return displays[keywordName] || keywordName;
}
