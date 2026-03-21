export const DisplaySizeUtils = {
    getAvailableDisplaySizes(documentContent) {
        const lines = documentContent.split('\n');
        let hasDS3 = false;
        let hasDS4 = false;
        let inDspsizBlock = false;
        let currentBlock = '';

        const processDspsizBlock = (blockText) => {
            const normalizedBlock = (blockText || '').toUpperCase();
            const blockHasDS3 = normalizedBlock.includes('*DS3');
            const blockHasDS4 = normalizedBlock.includes('*DS4');

            if (blockHasDS3) {
                hasDS3 = true;
            }
            if (blockHasDS4) {
                hasDS4 = true;
            }

            if (!blockHasDS3 && !blockHasDS4) {
                hasDS3 = true;
            }
        };

        for (let line of lines) {
            const trimmed = line.trim();

            if (!inDspsizBlock && trimmed.includes('DSPSIZ(')) {
                inDspsizBlock = true;
                currentBlock = trimmed.substring(trimmed.indexOf('DSPSIZ('));

                if (trimmed.includes(')')) {
                    processDspsizBlock(currentBlock);
                    inDspsizBlock = false;
                    currentBlock = '';
                }

                continue;
            }

            if (inDspsizBlock) {
                currentBlock += ` ${trimmed}`;

                if (trimmed.includes(')')) {
                    processDspsizBlock(currentBlock);
                    inDspsizBlock = false;
                    currentBlock = '';
                }
            }
        }

        if (inDspsizBlock && currentBlock) {
            processDspsizBlock(currentBlock);
        }

        let singleSize = null;
        if (hasDS3 && !hasDS4) {
            singleSize = 'DS3';
        } else if (hasDS4 && !hasDS3) {
            singleSize = 'DS4';
        }

        return { hasDS3, hasDS4, singleSize };
    }
};
