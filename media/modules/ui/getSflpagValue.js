export function getSflpagValue(options) {
    const {
        sflctlRecordName,
        currentDocument,
        currentDisplaySize,
        DisplaySizeUtils,
        Logger
    } = options;

    if (!sflctlRecordName) {
        return 0;
    }

    const lines = currentDocument.split('\n');
    let inSflctlRecord = false;
    let sflpagValue = 0;
    const displayMarker = currentDisplaySize === 'DS3' ? '*DS3' : '*DS4';

    const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);

    for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trim();

        if (trimmed.includes(`R ${sflctlRecordName}`) || trimmed.includes(`R  ${sflctlRecordName}`)) {
            if (trimmed.includes('SFLCTL(')) {
                inSflctlRecord = true;
                continue;
            }

            for (let j = i + 1; j < lines.length; j++) {
                const nextLine = lines[j].trim();
                if (nextLine.match(/^A\s+R\s+\w+/)) {
                    break;
                }
                if (nextLine.includes('SFLCTL(')) {
                    inSflctlRecord = true;
                    break;
                }
            }
            continue;
        }

        if (inSflctlRecord && trimmed.match(/^A\s+R\s+\w+/)) {
            break;
        }

        if (inSflctlRecord && trimmed.includes('SFLPAG(')) {
            const match = trimmed.match(/SFLPAG\((\d+)\)/);
            if (match) {
                if (trimmed.includes(displayMarker)) {
                    sflpagValue = parseInt(match[1], 10);
                    if (Logger) {
                        Logger.stats(`Found SFLPAG for ${displayMarker}: ${sflpagValue}`);
                    }
                    break;
                } else if (displayConfig.singleSize) {
                    if (displayConfig.singleSize === currentDisplaySize) {
                        sflpagValue = parseInt(match[1], 10);
                        if (Logger) {
                            Logger.stats(`Found SFLPAG (single size ${displayConfig.singleSize}): ${sflpagValue}`);
                        }
                        break;
                    }
                }
            }
        }
    }

    return sflpagValue;
}
