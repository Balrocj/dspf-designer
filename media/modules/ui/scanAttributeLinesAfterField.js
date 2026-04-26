// Shared attribute/color scanner to unify Designer and Preview parsing
export function scanAttributeLinesAfterField({
    options,
    Logger,
    IndicatorUtils,
    scanIndicatorsBackward,
    extractAttributes,
    attributeContentRegex
}) {
    const {
        lines,
        startIndex,
        field,
        contextLabel = 'PARSER',
        includeChecks = false,
        preserveOriginalSpacing = false,
        stopOnFieldKeywordsRegex = null,
        attributeRegex = attributeContentRegex || /COLOR\(|DSPATR\(|EDTCDE\(|EDTWRD\(|EDTMSK\(|DFTVAL\(|DFT\(|VALUES\(|CNTFLD\(|MSGID\(/,
    } = options;

    if (!Array.isArray(field.keywordOrder)) {
        field.keywordOrder = [];
    }

    const addKeywordOrder = (keywordName) => {
        if (!keywordName) {
            return;
        }
        if (!field.keywordOrder.includes(keywordName)) {
            field.keywordOrder.push(keywordName);
        }
    };

    const extractKeywordArea = (lineText) => {
        if (!lineText) {
            return '';
        }
        if (lineText.length > 43) {
            return lineText.substring(43).trim();
        }
        return lineText.trim();
    };

    const parseReffldFromLine = (lineText, initialOffset) => {
        if (!lineText) {
            return null;
        }

        const reffldStart = lineText.search(/REFFLD\(/i);
        if (reffldStart < 0) {
            return null;
        }

        const firstSegment = lineText.substring(reffldStart + 'REFFLD('.length).trim();
        if (!firstSegment) {
            return null;
        }

        const rawLines = [];
        const closedInFirst = firstSegment.indexOf(')');
        if (closedInFirst >= 0) {
            rawLines.push(firstSegment.substring(0, closedInFirst).trim());
            return { rawLines, consumedOffset: initialOffset };
        }

        rawLines.push(firstSegment);
        let lookaheadOffset = initialOffset;

        while ((startIndex + lookaheadOffset + 1) < lines.length) {
            const continuationLine = lines[startIndex + lookaheadOffset + 1];
            const continuationTrimmed = continuationLine.trim();

            const continuationIsComment = (continuationLine.length > 6 && continuationLine[5] === 'A' && continuationLine[6] === '*') ||
                continuationTrimmed.startsWith('A*') ||
                continuationTrimmed.startsWith('*') ||
                continuationTrimmed.startsWith('-');
            const continuationHasFieldName = /\b[A-Z][A-Z0-9_]{0,9}\s+\d+[A-Z]?/i.test(continuationTrimmed);
            const continuationIsRecordDef = continuationTrimmed.match(/^A\s+R\s+\w+/);
            const continuationIsBlank = continuationTrimmed === '' || continuationTrimmed === 'A';

            if (continuationIsComment || continuationHasFieldName || continuationIsRecordDef || continuationIsBlank) {
                break;
            }

            const continuationKeywordArea = extractKeywordArea(continuationLine);
            if (!continuationKeywordArea) {
                break;
            }

            const closeIndex = continuationKeywordArea.indexOf(')');
            if (closeIndex >= 0) {
                rawLines.push(continuationKeywordArea.substring(0, closeIndex).trim());
                lookaheadOffset++;
                return { rawLines, consumedOffset: lookaheadOffset };
            }

            rawLines.push(continuationKeywordArea.trim());
            lookaheadOffset++;
        }

        return {
            rawLines,
            consumedOffset: lookaheadOffset
        };
    };

    let lineOffset = 1;

    // Some DDS files define REFFLD inline on the field line and continue it
    // on the next line(s) with '+' continuation markers.
    const baseLine = lines[startIndex];
    const inlineReffld = parseReffldFromLine(baseLine, 0);
    if (inlineReffld && inlineReffld.rawLines.length > 0) {
        addKeywordOrder('REFFLD');
        const normalizedRaw = inlineReffld.rawLines.join(' ').replace(/\s+/g, ' ').trim();
        field.reffld = {
            raw: normalizedRaw,
            rawLines: inlineReffld.rawLines
        };
        if (inlineReffld.consumedOffset >= 1) {
            lineOffset = inlineReffld.consumedOffset + 1;
        }
        Logger.parse(`Found multiline inline REFFLD for ${contextLabel} field ${field.name}: ${inlineReffld.rawLines.join(' | ')}`);
    }

    while (startIndex + lineOffset < lines.length) {
        const nextLine = lines[startIndex + lineOffset];
        const nextTrimmed = nextLine.trim();

        // IMPROVED: Better comment detection - check for A* at position 6-7 (DDS format)
        // or at the start of trimmed line (could have leading spaces)
        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') ||
                         nextTrimmed.startsWith('A*') ||
                         nextTrimmed.startsWith('*') ||
                         nextTrimmed.startsWith('-');

        if (isComment) {
            Logger.debug(`[${contextLabel}] Skipping comment line at offset ${lineOffset}: "${nextTrimmed}"`);
            lineOffset++;
            continue;
        }

        // Check if this is an indicator-only line (belongs to next field)
        // Format: "A  11 42 54" or "AO 50" with NO field name after column 18
        const contentAfterColumn18 = nextLine.length > 18 ? nextLine.substring(18).trim() : '';
        const hasFieldNameAfter18 = /^[A-Z][A-Z0-9_]{0,9}\s+\d+/i.test(contentAfterColumn18);
        const indicatorAreaContent = nextLine.length > 6 ? nextLine.substring(6, 18).trim() : '';
        const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);
        const isIndicatorOnlyLine = nextLine.length > 6 &&
                                    nextLine[5] === 'A' &&
                                   !hasFieldNameAfter18 &&
                                    hasIndicatorPattern &&
                                    indicatorAreaContent.length > 0 &&
                                    contentAfterColumn18 === '';

        const hasFieldName = /^[A-Z_][A-Z0-9_]{0,9}\s+\d+[A-Z]?/i.test(contentAfterColumn18);
        const hasConstant = nextTrimmed.match(/\d+\s+\d+'/);
        const isRecordDef = nextTrimmed.match(/^A\s+R\s+\w+/);
        const isBlank = nextTrimmed === '' || nextTrimmed === 'A';
        // Check for keywords (DATE, TIME, SYSNAME, USER) - must stop before processing another field's keyword
        const hasKeyword = /\d{1,2}\s+\d{1,2}(DATE|TIME|SYSNAME|USER)/.test(nextTrimmed);
        // Check if this is a const continuation line (value with quotes but no row/col)
        // BUT: exclude lines with known keywords (COLOR, DSPATR, DFTVAL, etc.)
        const isConstContinuation = nextTrimmed.startsWith('A') &&
                                   nextTrimmed.includes("'") &&
                                   !nextTrimmed.match(/\d+\s+\d+'/) &&
                                   !attributeRegex.test(nextTrimmed);
        const hasFieldKeyword = stopOnFieldKeywordsRegex ? stopOnFieldKeywordsRegex.test(nextTrimmed) : false;

        // Stop scanning if we hit a field, constant, record, blank line, or field keyword
        if (hasFieldName || hasConstant || isRecordDef || isBlank || hasKeyword || hasFieldKeyword) {
            Logger.debug(`[${contextLabel}] Stopping scan - found ${hasFieldName ? 'field' : hasConstant ? 'constant' : isRecordDef ? 'record' : hasKeyword ? 'keyword' : hasFieldKeyword ? 'field keyword' : 'blank'}`);
            break;
        }

        // If this is an indicator-only line, skip it and continue (indicators will be picked up by backward scan)
        if (isIndicatorOnlyLine) {
            Logger.debug(`[${contextLabel}] Skipping indicator-only line at offset ${lineOffset}, continuing...`);
            lineOffset++;
            continue;
        }

        if (isConstContinuation) {
            lineOffset++;
            continue;
        }

        const hasAttribute = attributeRegex.test(nextTrimmed);

        // DEBUG: Log attribute detection
        Logger.debug(`[${contextLabel}] Line ${startIndex + lineOffset + 1}: hasAttribute=${hasAttribute}, nextTrimmed="${nextTrimmed}"`);

        // Check if this line has only indicators (no keyword yet)
        // Format: "A  01 02 03" or "AO 50" or "A N10 12"
        // If columns 19-80 (indices 18-79) are empty, it's only indicators
        const contentAfter18 = nextLine.substring(18).trim();
        Logger.debug(`[${contextLabel}] Line ${startIndex + lineOffset + 1}: contentAfter18="${contentAfter18}"`);
        const hasOnlyIndicators = !hasAttribute &&
                                 nextTrimmed.match(/^A[O\s]\s*[N\d\s]+$/) &&
                                 contentAfter18 === '' &&
                                 !hasFieldName;
        Logger.debug(`[${contextLabel}] Line ${startIndex + lineOffset + 1}: hasOnlyIndicators=${hasOnlyIndicators}`);

        if (!hasAttribute && !hasOnlyIndicators) {
            // IMPROVED: Check if this looks like an unknown keyword starting at column 44 (index 43)
            // Unknown keywords can have or not have parentheses: OVERLAY, KEEP, FLTPCN(...), etc.
            // If content starts at column 44+ and doesn't match known attributes, ignore it
            const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
            const looksLikeUnknownKeyword = nextTrimmed.startsWith('A') && contentAfter43.length > 0 && !hasFieldName;

            if (looksLikeUnknownKeyword) {
                Logger.debug(`[${contextLabel}] Skipping unknown keyword at column 44+: "${contentAfter43}"`);
                lineOffset++;
                continue;
            }
            Logger.debug(`[${contextLabel}] Stopping - unknown line type at offset ${lineOffset}`);
            break;
        }

        // If line has only indicators, skip it and continue to find the keyword line
        if (hasOnlyIndicators) {
            Logger.debug(`[${contextLabel}] Found indicator-only line at offset ${lineOffset}, continuing...`);
            lineOffset++;
            continue;
        }

        // ============================================================================
        // UNIFIED INDICATOR PROCESSING FOR ALL KEYWORDS
        // Process COLOR, DSPATR, EDTCDE, CHECK, DFTVAL, etc. with same logic
        // ============================================================================

        // Check if this is an OR line (position 6 = 'O')
        const isOrLine = nextLine.length > 6 && nextLine[6] === 'O';

        // Extract indicators from current line
        const currentLineIndicators = IndicatorUtils.extractFromDdsLine(nextLine, `${contextLabel}-CURRENT`);

        // Scan backwards to find all indicator-only lines
        const backwardScan = scanIndicatorsBackward(lines, startIndex, lineOffset, `${contextLabel}-BACKWARD`);
        const scannedLines = backwardScan.scannedLines;
        let hasOrLines = backwardScan.hasOrLines;

        // Add current line indicators if any
        // The current line with keyword (COLOR/DSPATR) can also have indicators
        if (currentLineIndicators && currentLineIndicators.length > 0) {
            if (isOrLine) {
                // This line starts a NEW OR group
                scannedLines.push({ indicators: currentLineIndicators, isOr: true });
                hasOrLines = true;
            } else {
                // This line is not OR, so add to last group (continuation)
                if (scannedLines.length > 0) {
                    // Add to the last group
                    scannedLines[scannedLines.length - 1].indicators.push(...currentLineIndicators);
                } else {
                    // First group (no previous groups from backward scan)
                    scannedLines.push({ indicators: currentLineIndicators, isOr: false });
                }
            }
        }

        // Build indicator groups structure
        const buildIndicatorGroups = () => {
            if (scannedLines.length === 0) {return null;}

            if (hasOrLines) {
                // OR format: scannedLines already contains properly grouped data
                // Each element with isOr:true starts a new group
                // Lines with isOr:false after isOr:true are continuations (AND within OR)
                const groups = [];

                scannedLines.forEach(line => {
                    if (line.isOr) {
                        // Start new OR group
                        groups.push({ indicators: [...line.indicators] });
                    } else {
                        // Continuation of previous group (AND within OR)
                        if (groups.length > 0) {
                            groups[groups.length - 1].indicators.push(...line.indicators);
                        } else {
                            // First group is not OR (should not happen, but handle it)
                            groups.push({ indicators: [...line.indicators] });
                        }
                    }
                });

                return {
                    groups: groups,
                    isOr: true
                };
            }

            // AND format: combine all indicators into single group
            const allIndicators = [];
            scannedLines.forEach(line => {
                allIndicators.push(...line.indicators);
            });
            return {
                groups: [{ indicators: allIndicators }],
                isOr: false
            };
        };

        // Extract COLOR with indicators (with OR support)
        const colorMatch = nextLine.match(/COLOR\((\w+)\)/);
        if (colorMatch) {
            addKeywordOrder('COLOR');
            const color = colorMatch[1];

            if (!field.color) {
                field.color = color;
                Logger.parse(`Found color ${field.color} for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
            }

            if (!field.colors) {
                field.colors = [];
            }
            if (!field.colors.includes(color)) {
                field.colors.push(color);
            }

            if (preserveOriginalSpacing) {
                field.originalColorLines = field.originalColorLines || {};
                // Store all lines for this color (for regeneration)
                if (!field.originalColorLines[color]) {
                    field.originalColorLines[color] = [];
                }
                field.originalColorLines[color].push(nextLine);
            }

            // Store indicators using unified structure
            const indicatorData = buildIndicatorGroups();
            if (indicatorData) {
                if (!field.colorIndicators) {
                    field.colorIndicators = {};
                }

                // If color already exists AND we're not in a modification state, accumulate groups
                // Otherwise replace (to avoid duplicating lines after user modifications)
                const shouldAccumulate = field.colorIndicators[color] && !field.colorIndicatorsModified;

                if (shouldAccumulate) {
                    field.colorIndicators[color].groups.push(...indicatorData.groups);
                    // Update isOr flag if any group is OR
                    field.colorIndicators[color].isOr = field.colorIndicators[color].isOr || indicatorData.isOr;
                    Logger.debug(`[${contextLabel}] COLOR ${color}: Accumulated ${indicatorData.groups.length} more group(s), total=${field.colorIndicators[color].groups.length}`);
                } else {
                    field.colorIndicators[color] = indicatorData;
                    Logger.debug(`[${contextLabel}] COLOR ${color}: Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                }

                indicatorData.groups.forEach((g, i) => {
                    Logger.debug(`[${contextLabel}]   Group ${i}: ${g.indicators.length} indicators:`, g.indicators.map(ind => ind.number + (ind.not ? 'N' : '')).join(', '));
                });
            }
        }

        // Extract DSPATR attributes with indicators (with OR support)
        const attrResult = extractAttributes(nextLine, nextLine);
        if (attrResult.attrs && Object.keys(attrResult.attrs).length > 0) {
            addKeywordOrder('DSPATR');
            field.attributes = { ...field.attributes, ...attrResult.attrs };

            if (preserveOriginalSpacing) {
                field.originalAttrLines = field.originalAttrLines || {};
            }

            if (attrResult.isGroupedFormat) {
                field.hasGroupedDspatr = true;
                if (preserveOriginalSpacing) {
                    field.groupedDspatrLine = nextLine;
                }
            }

            for (const [attrName, attrValue] of Object.entries(attrResult.attrs)) {
                if (attrValue && preserveOriginalSpacing) {
                    // Store all lines for this attribute
                    if (!field.originalAttrLines[attrName]) {
                        field.originalAttrLines[attrName] = [];
                    }
                    field.originalAttrLines[attrName].push(nextLine);
                }
            }

            // Store indicators using unified structure
            const indicatorData = buildIndicatorGroups();
            if (indicatorData) {
                for (const [attrName, attrValue] of Object.entries(attrResult.attrs)) {
                    if (attrValue) {
                        if (!field.attributeIndicators) {
                            field.attributeIndicators = {};
                        }

                        // If attribute already exists AND we're not in a modification state, accumulate groups
                        // Otherwise replace (to avoid duplicating lines after user modifications)
                        const shouldAccumulate = field.attributeIndicators[attrName] && !field.attributeIndicatorsModified;

                        if (shouldAccumulate) {
                            field.attributeIndicators[attrName].groups.push(...indicatorData.groups);
                            // Update isOr flag if any group is OR
                            field.attributeIndicators[attrName].isOr = field.attributeIndicators[attrName].isOr || indicatorData.isOr;
                            Logger.debug(`[${contextLabel}] DSPATR ${attrName}: Accumulated ${indicatorData.groups.length} more group(s), total=${field.attributeIndicators[attrName].groups.length}`);
                        } else {
                            field.attributeIndicators[attrName] = indicatorData;
                            Logger.debug(`[${contextLabel}] DSPATR ${attrName}: Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                        }
                    }
                }
            }
        }

        // Extract DFTVAL with indicators (same pattern as COLOR/DSPATR)
        const dftvalMatch = nextLine.match(/DFTVAL\('([^']*)'\)/);
        Logger.debug(`[${contextLabel}] Checking line ${startIndex + lineOffset + 1} for DFTVAL: ${nextTrimmed.substring(0, 50)}`);
        Logger.debug(`[${contextLabel}] DFTVAL match result:`, dftvalMatch ? `YES (value='${dftvalMatch[1]}')` : 'NO');
        if (dftvalMatch) {
            addKeywordOrder('DFTVAL');
            const value = dftvalMatch[1];
            field.dftval = { value: value };

            Logger.parse(`Found DFTVAL='${value}' for ${contextLabel} field ${field.name} at offset ${lineOffset}`);

            Logger.debug(`[${contextLabel}] DFTVAL processing - scannedLines count: ${scannedLines.length}`);
            Logger.debug(`[${contextLabel}] DFTVAL processing - currentLineIndicators:`, currentLineIndicators);
            scannedLines.forEach((sl, idx) => {
                Logger.debug(`[${contextLabel}]   DFTVAL scannedLine ${idx}: ${sl.indicators.length} indicators, isOr=${sl.isOr}`, sl.indicators.map(i => i.number).join(','));
            });

            // Store indicators using unified structure (same as COLOR/DSPATR)
            const indicatorData = buildIndicatorGroups();
            if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                field.dftvalIndicators = indicatorData;
                Logger.debug(`[${contextLabel}] DFTVAL: Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                indicatorData.groups.forEach((g, i) => {
                    Logger.debug(`[${contextLabel}]   DFTVAL Group ${i}: ${g.indicators.length} indicators:`, g.indicators.map(ind => ind.number + (ind.not ? 'N' : '')).join(', '));
                });
            } else {
                Logger.debug(`[${contextLabel}] DFTVAL: No indicator groups built (no indicators present)`);
            }
        }

        const parseKeywordTextArg = (keywordName, lineText) => {
            const quotedRegex = new RegExp(`${keywordName}\\(\\s*'((?:''|[^'])*)'\\s*\\)`, 'i');
            const quotedMatch = lineText.match(quotedRegex);
            if (quotedMatch) {
                return quotedMatch[1].replace(/''/g, "'");
            }

            const genericRegex = new RegExp(`${keywordName}\\(\\s*([^)]*?)\\s*\\)`, 'i');
            const genericMatch = lineText.match(genericRegex);
            if (!genericMatch) {
                return '';
            }

            return genericMatch[1].trim();
        };

        const edtcdeMatch = nextLine.match(/EDTCDE\(\s*([^\s)]+)(?:\s+([*$]))?\s*\)/);
        if (edtcdeMatch) {
            addKeywordOrder('EDTCDE');
            const edtcdeValue = edtcdeMatch[1].replace(/["']/g, '').trim().toUpperCase();
            if (edtcdeValue) {
                const replaceLeadingZerosWith = edtcdeMatch[2] ? edtcdeMatch[2].trim() : '';
                field.edtcde = { value: edtcdeValue };
                if ((replaceLeadingZerosWith === '*' || replaceLeadingZerosWith === '$') && edtcdeValue !== 'Z') {
                    field.edtcde.replaceLeadingZerosWith = replaceLeadingZerosWith;
                }
                Logger.parse(`Found EDTCDE(${edtcdeValue}${replaceLeadingZerosWith ? ` ${replaceLeadingZerosWith}` : ''}) for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
            }
        }

        const edtwrdValue = parseKeywordTextArg('EDTWRD', nextLine);
        if (edtwrdValue.length > 0) {
            addKeywordOrder('EDITKEYWORDS');
            field.edtwrd = { value: edtwrdValue };
            Logger.parse(`Found EDTWRD('${edtwrdValue}') for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
        }

        const edtmskValue = parseKeywordTextArg('EDTMSK', nextLine);
        if (edtmskValue.length > 0) {
            addKeywordOrder('EDITKEYWORDS');
            field.edtmsk = { value: edtmskValue };
            Logger.parse(`Found EDTMSK('${edtmskValue}') for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
        }

        const dftValue = parseKeywordTextArg('DFT', nextLine);
        if (dftValue.length > 0) {
            addKeywordOrder('DFT');
            field.dft = { value: dftValue };
            Logger.parse(`Found DFT(${dftValue}) for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
        }

        const cntfldValue = parseKeywordTextArg('CNTFLD', nextLine);
        if (/^\d{3}$/.test(cntfldValue)) {
            addKeywordOrder('CNTFLD');
            field.cntfld = { value: cntfldValue };
            Logger.parse(`Found CNTFLD(${field.cntfld.value}) for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
        }

        const msgidMatch = nextLine.match(/MSGID\(([^)]*)\)/i);
        if (msgidMatch) {
            addKeywordOrder('MSGID');
            const rawMsgid = msgidMatch[1].trim().replace(/\s+/g, ' ');
            if (rawMsgid.length > 0) {
                const tokens = rawMsgid.split(/\s+/).filter(Boolean);
                let prefix = '';
                let messageId = '';
                let fileToken = '';
                let nextTokenIndex = 0;

                const compactFirstToken = tokens.length > 0 ? tokens[0].match(/^([A-Z]+)(\d+)$/i) : null;
                if (compactFirstToken) {
                    prefix = compactFirstToken[1];
                    messageId = compactFirstToken[2];
                    nextTokenIndex = 1;
                } else if (tokens.length >= 2) {
                    prefix = tokens[0];
                    messageId = tokens[1];
                    nextTokenIndex = 2;
                }

                if (prefix && messageId && tokens.length > nextTokenIndex) {
                    fileToken = tokens[nextTokenIndex];
                }

                if (prefix && messageId) {
                    let file = '';
                    let library = '';

                    if (fileToken) {
                        if (fileToken.includes('/')) {
                            const [libPart, filePart] = fileToken.split('/');
                            library = (libPart || '').trim();
                            file = (filePart || '').trim();
                        } else {
                            file = fileToken.trim();
                        }
                    }

                    field.msgid = {
                        prefix,
                        messageId,
                        file,
                        library
                    };
                    Logger.parse(`Found MSGID(${rawMsgid}) for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
                }
            }
        }

        // Extract REFFLD keyword (reference field for Db2 metadata inheritance)
        // Format: REFFLD(FIELDNAME), REFFLD(FIELDNAME FILE), REFFLD(FIELDNAME LIB/FILE), etc.
        // Phase 1: Store raw string as-is for preservation during round-trip
        const parsedReffld = parseReffldFromLine(nextLine, lineOffset);
        if (parsedReffld && parsedReffld.rawLines.length > 0) {
            addKeywordOrder('REFFLD');
            const rawReffld = parsedReffld.rawLines.join(' ').replace(/\s+/g, ' ').trim();
            if (rawReffld.length > 0) {
                field.reffld = {
                    raw: rawReffld,
                    rawLines: parsedReffld.rawLines
                };
                Logger.parse(`Found REFFLD(${rawReffld}) for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
                if (parsedReffld.consumedOffset > lineOffset) {
                    lineOffset = parsedReffld.consumedOffset;
                }
            }
        }

            // Parse VALUES('A' 'B' ...), including DDS continuation lines
            if (/VALUES\(/i.test(nextLine)) {
                addKeywordOrder('VALUES');
                let valuesText = nextLine;
                let lookaheadOffset = lineOffset;

                // Keep appending continuation lines until closing ')' is found
                while (!/\)/.test(valuesText) && (startIndex + lookaheadOffset + 1) < lines.length) {
                    const continuationLine = lines[startIndex + lookaheadOffset + 1];
                    const continuationTrimmed = continuationLine.trim();

                    // Stop if we reached a probable new field/record/comment boundary
                    const continuationIsComment = (continuationLine.length > 6 && continuationLine[5] === 'A' && continuationLine[6] === '*') ||
                        continuationTrimmed.startsWith('A*') ||
                        continuationTrimmed.startsWith('*');
                    const continuationHasFieldName = /\b[A-Z][A-Z0-9_]{0,9}\s+\d+[A-Z]?/i.test(continuationTrimmed);
                    const continuationIsRecordDef = continuationTrimmed.match(/^A\s+R\s+\w+/);

                    if (continuationIsComment || continuationHasFieldName || continuationIsRecordDef) {
                        break;
                    }

                    valuesText += ' ' + continuationTrimmed;
                    lookaheadOffset++;
                }

                const valuesMatch = valuesText.match(/VALUES\(([^)]*)\)/i);
                if (valuesMatch) {
                    const rawValues = valuesMatch[1]
                        // Remove DDS line-continuation chars (- or +) that appear between tokens
                        // when continuation lines are joined, e.g.: 'G' -  'H' → 'G' 'H'
                        .replace(/\s*[+-]\s*/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();

                    if (rawValues.length > 0) {
                        field.values = rawValues;
                        Logger.parse(`Found VALUES(${rawValues}) for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
                    }

                    // Advance scanner to the last consumed continuation line
                    if (lookaheadOffset > lineOffset) {
                        lineOffset = lookaheadOffset;
                    }
                }
            }

        if (includeChecks) {
            const checkMatch = nextLine.match(/CHECK\(([^)]+)\)/);
            if (checkMatch) {
                addKeywordOrder('CHECK');
                Logger.debug(`[${contextLabel}] ===== FOUND CHECK LINE =====`);
                Logger.debug(`[${contextLabel}] nextLine: "${nextLine}"`);
                Logger.debug(`[${contextLabel}] lineOffset: ${lineOffset}`);
                Logger.debug(`[${contextLabel}] scannedLines.length: ${scannedLines.length}`);
                Logger.debug(`[${contextLabel}] hasOrLines: ${hasOrLines}`);
                Logger.debug(`[${contextLabel}] scannedLines:`, JSON.stringify(scannedLines));

                const codes = checkMatch[1].trim().split(/\s+/);
                Logger.debug(`[${contextLabel}] CHECK codes found: ${codes.join(', ')}`);

                // Store enabled check options
                if (!field.checkOptions) { field.checkOptions = {}; }
                codes.forEach(code => {
                    field.checkOptions[code] = true;
                });

                if (preserveOriginalSpacing) {
                    field.originalCheckLines = field.originalCheckLines || {};
                    codes.forEach(code => {
                        field.originalCheckLines[code] = nextLine;
                    });
                }

                // For ME and ER codes, store indicators using unified structure (same as COLOR)
                codes.forEach(code => {
                    if (['ME', 'ER'].includes(code)) {
                        Logger.debug(`[${contextLabel}] Processing CHECK(${code}) - calling buildIndicatorGroups()`);
                        const indicatorData = buildIndicatorGroups();
                        Logger.debug(`[${contextLabel}] CHECK(${code}): buildIndicatorGroups returned:`, JSON.stringify(indicatorData));
                        if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                            if (!field.checkIndicators) { field.checkIndicators = {}; }
                            field.checkIndicators[code] = indicatorData;
                            Logger.debug(`[${contextLabel}] CHECK(${code}): Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                            indicatorData.groups.forEach((g, idx) => {
                                Logger.debug(`[${contextLabel}]   CHECK(${code}) Group ${idx}: ${g.indicators.length} indicators: ${g.indicators.map(i => (i.not ? 'N' : '') + i.number).join(', ')}`);
                            });
                        } else {
                            Logger.debug(`[${contextLabel}] CHECK(${code}): No indicators stored (indicatorData is null or empty)`);
                        }
                    } else {
                        Logger.debug(`[${contextLabel}] Skipping indicators for CHECK(${code}) - not ME/ER`);
                    }
                });

                Logger.debug(`[${contextLabel}] Stored CHECK options for field ${field.name}`);
                Logger.debug(`[${contextLabel}] field.checkIndicators:`, JSON.stringify(field.checkIndicators));
            }
        }

        lineOffset++;
    }
}
