export const ScreenCoordinates = {
    CHAR_HEIGHT: 20,
    CHAR_WIDTH: 8,

    SCREEN_SIZES: {
        'DS3': { rows: 24, cols: 80 },
        'DS4': { rows: 27, cols: 132 }
    },

    toPixels(row, col, offset = { row: 0, col: 0 }) {
        return {
            top: (row - 1 - offset.row) * this.CHAR_HEIGHT,
            left: (col - 1 - offset.col) * this.CHAR_WIDTH
        };
    },

    fromPixels(top, left, offset = { row: 0, col: 0 }) {
        return {
            row: Math.floor(top / this.CHAR_HEIGHT) + 1 + offset.row,
            col: Math.floor(left / this.CHAR_WIDTH) + 1 + offset.col
        };
    },

    fromClientPoint(clientX, clientY, rect, zoom = 1, offset = { row: 0, col: 0 }) {
        const left = (clientX - rect.left) / zoom;
        const top = (clientY - rect.top) / zoom;
        return this.fromPixels(top, left, offset);
    },

    sizeFromPixels(height, width, zoom = 1) {
        return {
            rows: Math.round((height / zoom) / this.CHAR_HEIGHT),
            cols: Math.round((width / zoom) / this.CHAR_WIDTH)
        };
    },

    getScreenDimensions(displaySize) {
        return this.SCREEN_SIZES[displaySize] || this.SCREEN_SIZES.DS3;
    },

    isValidPosition(row, col, displaySize) {
        const dims = this.getScreenDimensions(displaySize);
        return row >= 1 && row <= dims.rows &&
               col >= 1 && col <= dims.cols;
    },

    getWidthInPixels(length) {
        return length * this.CHAR_WIDTH;
    },

    getHeightInPixels(rows) {
        return rows * this.CHAR_HEIGHT;
    },

    createWindowOffset(windowDimensions) {
        if (!windowDimensions) {
            return { row: 0, col: 0 };
        }
        return {
            row: windowDimensions.row - 1,
            col: windowDimensions.col - 1
        };
    },

    calculateFieldWrapping(field, displaySize = 'DS3') {
        const dims = this.getScreenDimensions(displaySize);
        const maxCols = dims.cols;

        if (field.type === 'constant' || field.type === 'keyword' || field.isKeyword) {
            return [{ row: field.row, col: field.col, length: field.length }];
        }

        const isNumeric = ['numeric', 'zoned', 'packed', 'float', 'binary', 'double'].includes(field.dataType);
        if (isNumeric) {
            return [{ row: field.row, col: field.col, length: field.length }];
        }

        // CNTFLD: continued input/both character field split in repeated chunks.
        // Example: length 5 + CNTFLD(002) => 2,2,1 across consecutive rows.
        if (field && field.dataType === 'character' && (field.usage === 'I' || field.usage === 'B') && field.cntfld && field.cntfld.value) {
            const fieldLength = field.length || 10;
            const cntfldRaw = String(field.cntfld.value).trim();
            if (/^\d{3}$/.test(cntfldRaw)) {
                const chunkLength = parseInt(cntfldRaw, 10);

                if (chunkLength > 0 && field.row <= dims.rows) {
                    const segments = [];
                    let remaining = fieldLength;
                    let row = field.row;

                    while (remaining > 0 && row <= dims.rows) {
                        const len = Math.min(chunkLength, remaining);
                        segments.push({ row, col: field.col, length: len });
                        remaining -= len;
                        row++;
                    }

                    if (segments.length > 0) {
                        return segments;
                    }
                }
            }
        }

        const startCol = field.col;
        const fieldLength = field.length || 10;
        const segments = [];

        let remainingLength = fieldLength;
        let currentRow = field.row;
        let currentCol = startCol;

        while (remainingLength > 0) {
            const availableSpace = maxCols - currentCol + 1;
            const segmentLength = Math.min(remainingLength, availableSpace);

            segments.push({
                row: currentRow,
                col: currentCol,
                length: segmentLength
            });

            remainingLength -= segmentLength;

            if (remainingLength > 0) {
                currentRow++;
                currentCol = 1;
            }
        }

        return segments;
    }
};
