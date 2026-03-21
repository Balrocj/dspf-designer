export function parseWindowDimensionsFromLine(options) {
    const {
        trimmedLine,
        currentRecordName,
        currentWindowDimensions,
        currentDisplaySize,
        DisplaySizeUtils,
        currentDocument,
        getWindowDimensions,
        Logger
    } = options;

    if (currentWindowDimensions) {
        return currentWindowDimensions;
    }

    if (!trimmedLine.includes('WINDOW(')) {
        return null;
    }

    const displayMarker = currentDisplaySize === 'DS3' ? '*DS3' : '*DS4';

    const windowRefMatch = trimmedLine.match(/WINDOW\(([A-Z0-9_]+)\)/);
    if (windowRefMatch && !/\d+\s+\d+/.test(windowRefMatch[0])) {
        const referencedRecord = windowRefMatch[1];
        Logger.parse(`Found WINDOW reference to ${referencedRecord} in record ${currentRecordName}`);
        const refDimensions = getWindowDimensions(referencedRecord);
        if (refDimensions.hasWindow) {
            const dimensions = currentDisplaySize === 'DS3' ? refDimensions.ds3 : refDimensions.ds4;
            if (dimensions) {
                Logger.parse(`Resolved window dimensions from ${referencedRecord}:`, dimensions);
                return dimensions;
            }
        }
        return null;
    }

    const windowMatch = trimmedLine.match(/WINDOW\((\d+)\s+(\d+)\s+(\d+)\s+(\d+)\)/);
    if (windowMatch) {
        const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);

        let appliesTo = false;
        if (trimmedLine.includes(displayMarker)) {
            appliesTo = true;
        } else if (displayConfig.singleSize) {
            appliesTo = true;
        }

        if (appliesTo) {
            const dimensions = {
                row: parseInt(windowMatch[1], 10),
                col: parseInt(windowMatch[2], 10),
                height: parseInt(windowMatch[3], 10),
                width: parseInt(windowMatch[4], 10)
            };
            const marker = trimmedLine.includes(displayMarker) ? displayMarker : '(single size)';
            Logger.parse(`Found ${marker} window dimensions for ${currentRecordName}:`, dimensions);
            return dimensions;
        }
    }

    return null;
}
