export const IndicatorUtils = {
    _logParse(message, ...args) {
        const logger = globalThis.Logger;
        if (logger && typeof logger.parse === 'function') {
            logger.parse(message, ...args);
        }
    },

    parse(indicatorStr) {
        if (!indicatorStr || typeof indicatorStr !== 'string') {
            return [];
        }

        const tokens = indicatorStr.trim().split(/\s+/);
        const indicators = [];

        tokens.forEach(token => {
            const matches = token.match(/N?\d{1,2}/g);
            if (matches) {
                matches.forEach(ind => {
                    const isNegated = ind.startsWith('N');
                    const number = isNegated ? ind.substring(1) : ind;
                    indicators.push({
                        number: number.padStart(2, '0'),
                        not: isNegated
                    });
                });
            }
        });

        return indicators;
    },

    formatForDds(indicators) {
        if (!indicators || indicators.length === 0) {
            return '';
        }

        const tokens = indicators.map(ind => ind.not ? ('N' + String(ind.number).padStart(2, '0')) : String(ind.number).padStart(2, '0'));
        let result = '';
        tokens.forEach(token => {
            if (result === '') {
                result = token;
            } else {
                result += token.startsWith('N') ? token : ' ' + token;
            }
        });
        return result;
    },

    formatForDisplay(indicators) {
        if (!indicators || indicators.length === 0) {
            return '';
        }

        return indicators.map(ind =>
            ind.not ? `NOT ${ind.number}` : ind.number
        ).join(', ');
    },

    isValid(indicatorStr) {
        if (!indicatorStr) {
            return true;
        }
        return /^(N?\d{1,2}(\s+N?\d{1,2})*)$/.test(indicatorStr.trim());
    },

    create(number, not = false) {
        return {
            number: String(number).padStart(2, '0'),
            not: Boolean(not)
        };
    },

    extractFromDdsLine(fullLine, debugContext = '') {
        if (!fullLine || fullLine.length <= 6 || fullLine[5] !== 'A') {
            return [];
        }

        const indicatorArea = fullLine.substring(6, 44);
        const indicatorStr = indicatorArea.trim();

        if (debugContext && indicatorStr) {
            this._logParse(`${debugContext} indicator area: "${indicatorArea}" from line: "${fullLine}"`);
        }

        if (!indicatorStr) {
            return [];
        }

        const indicators = this.parse(indicatorStr);

        if (debugContext && indicators.length > 0) {
            this._logParse(`${debugContext} found indicators:`, indicators);
        }

        return indicators;
    },

    extractWithOrSupport(lines, startIndex, keyword, debugContext = '') {
        const result = {
            groups: [],
            isOr: false
        };

        let currentIndex = startIndex;
        let foundKeyword = false;

        while (currentIndex < lines.length && !foundKeyword) {
            const line = lines[currentIndex];

            if (!line || line.length <= 6 || line[5] !== 'A') {
                break;
            }

            const isOrLine = line[6] === 'O';
            const hasKeyword = keyword ? line.includes(keyword) : false;

            const indicators = this.extractFromDdsLine(line, debugContext);

            if (indicators.length > 0) {
                result.groups.push({ indicators: indicators });
                if (isOrLine) {
                    result.isOr = true;
                }

                if (debugContext) {
                    this._logParse(`${debugContext} line ${currentIndex + 1} (${isOrLine ? 'OR' : 'AND'}): found ${indicators.length} indicators`);
                }
            }

            if (hasKeyword) {
                foundKeyword = true;
            }

            currentIndex++;
        }

        if (result.groups.length === 1 && !result.isOr) {
            return { groups: result.groups, isOr: false };
        }

        return result;
    },

    formatGroupsForDds(groups) {
        if (!groups || groups.length === 0) {
            return [''];
        }

        const lines = [];
        groups.forEach((group, index) => {
            const formatted = this.formatForDds(group.indicators);
            const prefix = index === 0 ? '' : 'O';
            lines.push(prefix + formatted);
        });

        return lines;
    },

    flattenGroups(groups) {
        if (!groups || groups.length === 0) {
            return [];
        }

        const allIndicators = [];
        groups.forEach(group => {
            if (group.indicators) {
                allIndicators.push(...group.indicators);
            }
        });
        return allIndicators;
    }
};
