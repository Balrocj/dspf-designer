// Funciones para cargar y aplicar cambios en los subfile
export function loadSubfileControl(options) {
    const {
        Logger,
        getCurrentDocument,
        getCurrentRecord,
        DisplaySizeUtils,
        IndicatorUtils,
        scanIndicatorsBackward,
        indicatorConfigurations,
        setIndicatorButtonState,
        openIBMiModal,
        applySubfileControl
    } = options;

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();

    Logger.stats('Loading subfile control keywords for record:', currentRecord);

    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    const subfileControl = {
        sflsiz: { ds3: '', ds4: '' },
        sflpag: { ds3: '', ds4: '' },
        sfllin: { ds3: '', ds4: '' },
        sfldsp: { indicators: null, present: false },
        sfldspctl: { indicators: null, present: false }
    };

    const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);

    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            break;
        }

        if (inTargetRecord) {
            const trimmed = line.trim();

            if (trimmed.includes('SFLSIZ(')) {
                const match = trimmed.match(/SFLSIZ\((\d{1,4})\)/);
                if (match) {
                    const value = match[1];
                    if (trimmed.includes('*DS3')) {
                        subfileControl.sflsiz.ds3 = value;
                        Logger.stats(`Found SFLSIZ DS3: ${value}`);
                    } else if (trimmed.includes('*DS4')) {
                        subfileControl.sflsiz.ds4 = value;
                        Logger.stats(`Found SFLSIZ DS4: ${value}`);
                    } else if (displayConfig.singleSize) {
                        if (displayConfig.singleSize === 'DS3') {
                            subfileControl.sflsiz.ds3 = value;
                            Logger.stats(`Found SFLSIZ (single size DS3): ${value}`);
                        } else if (displayConfig.singleSize === 'DS4') {
                            subfileControl.sflsiz.ds4 = value;
                            Logger.stats(`Found SFLSIZ (single size DS4): ${value}`);
                        }
                    }
                }
            }

            if (trimmed.includes('SFLPAG(')) {
                const match = trimmed.match(/SFLPAG\((\d{1,4})\)/);
                if (match) {
                    const value = match[1];
                    if (trimmed.includes('*DS3')) {
                        subfileControl.sflpag.ds3 = value;
                        Logger.stats(`Found SFLPAG DS3: ${value}`);
                    } else if (trimmed.includes('*DS4')) {
                        subfileControl.sflpag.ds4 = value;
                        Logger.stats(`Found SFLPAG DS4: ${value}`);
                    } else if (displayConfig.singleSize) {
                        if (displayConfig.singleSize === 'DS3') {
                            subfileControl.sflpag.ds3 = value;
                            Logger.stats(`Found SFLPAG (single size DS3): ${value}`);
                        } else if (displayConfig.singleSize === 'DS4') {
                            subfileControl.sflpag.ds4 = value;
                            Logger.stats(`Found SFLPAG (single size DS4): ${value}`);
                        }
                    }
                }
            }

            if (trimmed.includes('SFLLIN(')) {
                const match = trimmed.match(/SFLLIN\((\d+)\)/);
                if (match) {
                    const value = match[1];
                    if (trimmed.includes('*DS3')) {
                        subfileControl.sfllin.ds3 = value;
                        Logger.stats(`Found SFLLIN DS3: ${value}`);
                    } else if (trimmed.includes('*DS4')) {
                        subfileControl.sfllin.ds4 = value;
                        Logger.stats(`Found SFLLIN DS4: ${value}`);
                    }
                }
            }

            if (trimmed.includes('SFLDSP') && !trimmed.includes('SFLDSPCTL')) {
                Logger.debug(`[SFLDSP PARSE] Found SFLDSP at line ${index}`);
                subfileControl.sfldsp.present = true;

                const currentLineIndicators = IndicatorUtils.extractFromDdsLine(line, 'SFLDSP-PARSE');
                const isOrLine = line.length > 6 && line[6] === 'O';

                let backwardScan = { scannedLines: [], hasOrLines: false };
                if (index > 0) {
                    backwardScan = scanIndicatorsBackward(lines, 0, index, 'SFLDSP-BACKWARD');
                }
                const scannedLines = backwardScan.scannedLines;
                let hasOrLines = backwardScan.hasOrLines;

                if (currentLineIndicators && currentLineIndicators.length > 0) {
                    if (isOrLine) {
                        scannedLines.push({ indicators: currentLineIndicators, isOr: true });
                        hasOrLines = true;
                    } else {
                        if (scannedLines.length > 0) {
                            scannedLines[scannedLines.length - 1].indicators.push(...currentLineIndicators);
                        } else {
                            scannedLines.push({ indicators: currentLineIndicators, isOr: false });
                        }
                    }
                }

                if (scannedLines.length > 0) {
                    if (hasOrLines) {
                        const groups = [];
                        scannedLines.forEach(lineItem => {
                            if (lineItem.isOr) {
                                groups.push({ indicators: [...lineItem.indicators] });
                            } else {
                                if (groups.length > 0) {
                                    groups[groups.length - 1].indicators.push(...lineItem.indicators);
                                } else {
                                    groups.push({ indicators: [...lineItem.indicators] });
                                }
                            }
                        });
                        subfileControl.sfldsp.indicators = { groups: groups, isOr: true };
                    } else {
                        const allIndicators = [];
                        scannedLines.forEach(lineItem => {
                            allIndicators.push(...lineItem.indicators);
                        });
                        subfileControl.sfldsp.indicators = { groups: [{ indicators: allIndicators }], isOr: false };
                    }
                    Logger.stats(`Found SFLDSP with ${subfileControl.sfldsp.indicators.groups.length} group(s), isOr=${subfileControl.sfldsp.indicators.isOr}`);
                }
            }

            if (trimmed.includes('SFLDSPCTL')) {
                Logger.debug(`[SFLDSPCTL PARSE] Found SFLDSPCTL at line ${index}`);
                subfileControl.sfldspctl.present = true;

                const currentLineIndicators = IndicatorUtils.extractFromDdsLine(line, 'SFLDSPCTL-PARSE');
                const isOrLine = line.length > 6 && line[6] === 'O';

                let backwardScan = { scannedLines: [], hasOrLines: false };
                if (index > 0) {
                    backwardScan = scanIndicatorsBackward(lines, 0, index, 'SFLDSPCTL-BACKWARD');
                }
                const scannedLines = backwardScan.scannedLines;
                let hasOrLines = backwardScan.hasOrLines;

                if (currentLineIndicators && currentLineIndicators.length > 0) {
                    if (isOrLine) {
                        scannedLines.push({ indicators: currentLineIndicators, isOr: true });
                        hasOrLines = true;
                    } else {
                        if (scannedLines.length > 0) {
                            scannedLines[scannedLines.length - 1].indicators.push(...currentLineIndicators);
                        } else {
                            scannedLines.push({ indicators: currentLineIndicators, isOr: false });
                        }
                    }
                }

                if (scannedLines.length > 0) {
                    if (hasOrLines) {
                        const groups = [];
                        scannedLines.forEach(lineItem => {
                            if (lineItem.isOr) {
                                groups.push({ indicators: [...lineItem.indicators] });
                            } else {
                                if (groups.length > 0) {
                                    groups[groups.length - 1].indicators.push(...lineItem.indicators);
                                } else {
                                    groups.push({ indicators: [...lineItem.indicators] });
                                }
                            }
                        });
                        subfileControl.sfldspctl.indicators = { groups: groups, isOr: true };
                    } else {
                        const allIndicators = [];
                        scannedLines.forEach(lineItem => {
                            allIndicators.push(...lineItem.indicators);
                        });
                        subfileControl.sfldspctl.indicators = { groups: [{ indicators: allIndicators }], isOr: false };
                    }
                    Logger.stats(`Found SFLDSPCTL with ${subfileControl.sfldspctl.indicators.groups.length} group(s), isOr=${subfileControl.sfldspctl.indicators.isOr}`);
                }
            }
        }
    }

    const sflsizDs3Input = document.getElementById('sflsiz-ds3');
    const sflsizDs4Input = document.getElementById('sflsiz-ds4');
    const sflpagDs3Input = document.getElementById('sflpag-ds3');
    const sflpagDs4Input = document.getElementById('sflpag-ds4');
    const sfllinDs3Input = document.getElementById('sfllin-ds3');
    const sfllinDs4Input = document.getElementById('sfllin-ds4');

    const sflsizDs3Enabled = document.getElementById('sflsiz-ds3-enabled');
    const sflsizDs4Enabled = document.getElementById('sflsiz-ds4-enabled');
    const sflpagDs3Enabled = document.getElementById('sflpag-ds3-enabled');
    const sflpagDs4Enabled = document.getElementById('sflpag-ds4-enabled');
    const sfllinDs3Enabled = document.getElementById('sfllin-ds3-enabled');
    const sfllinDs4Enabled = document.getElementById('sfllin-ds4-enabled');

    if (sflsizDs3Input && sflsizDs3Enabled) {
        sflsizDs3Input.value = subfileControl.sflsiz.ds3;
        sflsizDs3Enabled.checked = subfileControl.sflsiz.ds3 !== '';
        sflsizDs3Input.disabled = !sflsizDs3Enabled.checked;
    }
    if (sflsizDs4Input && sflsizDs4Enabled) {
        sflsizDs4Input.value = subfileControl.sflsiz.ds4;
        sflsizDs4Enabled.checked = subfileControl.sflsiz.ds4 !== '';
        sflsizDs4Input.disabled = !sflsizDs4Enabled.checked;
    }
    if (sflpagDs3Input && sflpagDs3Enabled) {
        sflpagDs3Input.value = subfileControl.sflpag.ds3;
        sflpagDs3Enabled.checked = subfileControl.sflpag.ds3 !== '';
        sflpagDs3Input.disabled = !sflpagDs3Enabled.checked;
    }
    if (sflpagDs4Input && sflpagDs4Enabled) {
        sflpagDs4Input.value = subfileControl.sflpag.ds4;
        sflpagDs4Enabled.checked = subfileControl.sflpag.ds4 !== '';
        sflpagDs4Input.disabled = !sflpagDs4Enabled.checked;
    }
    if (sfllinDs3Input && sfllinDs3Enabled) {
        sfllinDs3Input.value = subfileControl.sfllin.ds3;
        sfllinDs3Enabled.checked = subfileControl.sfllin.ds3 !== '';
        sfllinDs3Input.disabled = !sfllinDs3Enabled.checked;
    }
    if (sfllinDs4Input && sfllinDs4Enabled) {
        sfllinDs4Input.value = subfileControl.sfllin.ds4;
        sfllinDs4Enabled.checked = subfileControl.sfllin.ds4 !== '';
        sfllinDs4Input.disabled = !sfllinDs4Enabled.checked;
    }

    if (sflsizDs3Enabled && sflsizDs3Input) {
        sflsizDs3Enabled.addEventListener('change', function() {
            sflsizDs3Input.disabled = !this.checked;
            if (!this.checked) {sflsizDs3Input.value = '';}
        });
    }
    if (sflsizDs4Enabled && sflsizDs4Input) {
        sflsizDs4Enabled.addEventListener('change', function() {
            sflsizDs4Input.disabled = !this.checked;
            if (!this.checked) {sflsizDs4Input.value = '';}
        });
    }
    if (sflpagDs3Enabled && sflpagDs3Input) {
        sflpagDs3Enabled.addEventListener('change', function() {
            sflpagDs3Input.disabled = !this.checked;
            if (!this.checked) {sflpagDs3Input.value = '';}
        });
    }
    if (sflpagDs4Enabled && sflpagDs4Input) {
        sflpagDs4Enabled.addEventListener('change', function() {
            sflpagDs4Input.disabled = !this.checked;
            if (!this.checked) {sflpagDs4Input.value = '';}
        });
    }
    if (sfllinDs3Enabled && sfllinDs3Input) {
        sfllinDs3Enabled.addEventListener('change', function() {
            sfllinDs3Input.disabled = !this.checked;
            if (!this.checked) {sfllinDs3Input.value = '';}
        });
    }
    if (sfllinDs4Enabled && sfllinDs4Input) {
        sfllinDs4Enabled.addEventListener('change', function() {
            sfllinDs4Input.disabled = !this.checked;
            if (!this.checked) {sfllinDs4Input.value = '';}
        });
    }

    const sfldspEnabled = document.getElementById('sfldsp-enabled');
    const sfldspBtn = document.getElementById('sfldsp-indicators-btn');

    if (sfldspEnabled && sfldspBtn) {
        const hasIndicators = subfileControl.sfldsp.indicators &&
                             subfileControl.sfldsp.indicators.groups &&
                             subfileControl.sfldsp.indicators.groups.length > 0;

        sfldspEnabled.checked = subfileControl.sfldsp.present;
        sfldspBtn.disabled = !sfldspEnabled.checked;

        if (hasIndicators) {
            const key = 'sfldsp:enabled';
            indicatorConfigurations.set(key, subfileControl.sfldsp.indicators);
            setIndicatorButtonState(sfldspBtn, subfileControl.sfldsp.indicators);
        }

        sfldspEnabled.addEventListener('change', function() {
            sfldspBtn.disabled = !this.checked;
            if (!this.checked) {
                indicatorConfigurations.delete('sfldsp:enabled');
                setIndicatorButtonState(sfldspBtn, null);
            }
        });

        sfldspBtn.addEventListener('click', function() {
            openIBMiModal('sfldsp', 'enabled', 'SFLDSP indicators');
        });
    }

    const sfldspctlEnabled = document.getElementById('sfldspctl-enabled');
    const sfldspctlBtn = document.getElementById('sfldspctl-indicators-btn');

    if (sfldspctlEnabled && sfldspctlBtn) {
        const hasIndicators = subfileControl.sfldspctl.indicators &&
                             subfileControl.sfldspctl.indicators.groups &&
                             subfileControl.sfldspctl.indicators.groups.length > 0;

        sfldspctlEnabled.checked = subfileControl.sfldspctl.present;
        sfldspctlBtn.disabled = !sfldspctlEnabled.checked;

        if (hasIndicators) {
            const key = 'sfldspctl:enabled';
            indicatorConfigurations.set(key, subfileControl.sfldspctl.indicators);
            setIndicatorButtonState(sfldspctlBtn, subfileControl.sfldspctl.indicators);
        }

        sfldspctlEnabled.addEventListener('change', function() {
            sfldspctlBtn.disabled = !this.checked;
            if (!this.checked) {
                indicatorConfigurations.delete('sfldspctl:enabled');
                setIndicatorButtonState(sfldspctlBtn, null);
            }
        });

        sfldspctlBtn.addEventListener('click', function() {
            openIBMiModal('sfldspctl', 'enabled', 'SFLDSPCTL indicators');
        });
    }

    const applyBtn = document.getElementById('apply-subfile-control-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', applySubfileControl);
    }

    Logger.success('Subfile control keywords loaded');
}

export function applySubfileControl(options) {
    const {
        Logger,
        vscode,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        getCurrentView,
        updateDocumentInEditor,
        generateDdsLineWithIndicators,
        indicatorConfigurations,
        showScreenProperties,
        parseDspfFields,
        updatePreviewView
    } = options;

    Logger.dds('Applying subfile control changes...');

    try {
        const currentDocument = getCurrentDocument();
        const currentRecord = getCurrentRecord();

        const sflsizDs3Enabled = document.getElementById('sflsiz-ds3-enabled')?.checked || false;
        const sflsizDs4Enabled = document.getElementById('sflsiz-ds4-enabled')?.checked || false;
        const sflpagDs3Enabled = document.getElementById('sflpag-ds3-enabled')?.checked || false;
        const sflpagDs4Enabled = document.getElementById('sflpag-ds4-enabled')?.checked || false;
        const sfllinDs3Enabled = document.getElementById('sfllin-ds3-enabled')?.checked || false;
        const sfllinDs4Enabled = document.getElementById('sfllin-ds4-enabled')?.checked || false;

        const sflsizDs3Value = sflsizDs3Enabled ? document.getElementById('sflsiz-ds3').value : '';
        const sflsizDs4Value = sflsizDs4Enabled ? document.getElementById('sflsiz-ds4').value : '';
        const sflpagDs3Value = sflpagDs3Enabled ? document.getElementById('sflpag-ds3').value : '';
        const sflpagDs4Value = sflpagDs4Enabled ? document.getElementById('sflpag-ds4').value : '';
        const sfllinDs3Value = sfllinDs3Enabled ? document.getElementById('sfllin-ds3').value : '';
        const sfllinDs4Value = sfllinDs4Enabled ? document.getElementById('sfllin-ds4').value : '';

        const sfldspEnabled = document.getElementById('sfldsp-enabled').checked;
        const sfldspctlEnabled = document.getElementById('sfldspctl-enabled').checked;

        const lines = currentDocument.split('\n');
        let inTargetRecord = false;
        let recordStartIndex = -1;
        let recordEndIndex = -1;

        for (let i = 0; i < lines.length; i++) {
            const trimmed = lines[i].trim();

            if (trimmed.includes(`R ${currentRecord}`) || trimmed.includes(`R  ${currentRecord}`)) {
                recordStartIndex = i;
                inTargetRecord = true;
                continue;
            }

            if (inTargetRecord && trimmed.match(/^A\s+R\s+\w+/)) {
                recordEndIndex = i;
                break;
            }
        }

        if (recordStartIndex === -1) {
            Logger.error('Could not find record start');
            vscode.postMessage({
                type: 'applyChangesError',
                message: 'Error: Could not find record definition'
            });
            return;
        }

        if (recordEndIndex === -1) {
            recordEndIndex = lines.length;
        }

        const keywordPositions = {
            sflsizDs3: -1,
            sflsizDs4: -1,
            sflpagDs3: -1,
            sflpagDs4: -1,
            sfllinDs3: -1,
            sfllinDs4: -1,
            sfldsp: -1,
            sfldspctl: -1
        };

        for (let i = recordStartIndex + 1; i < recordEndIndex; i++) {
            const trimmed = lines[i].trim();

            if (trimmed.includes('SFLSIZ(') && trimmed.includes('*DS3')) {
                keywordPositions.sflsizDs3 = i;
            } else if (trimmed.includes('SFLSIZ(') && trimmed.includes('*DS4')) {
                keywordPositions.sflsizDs4 = i;
            } else if (trimmed.includes('SFLPAG(') && trimmed.includes('*DS3')) {
                keywordPositions.sflpagDs3 = i;
            } else if (trimmed.includes('SFLPAG(') && trimmed.includes('*DS4')) {
                keywordPositions.sflpagDs4 = i;
            } else if (trimmed.includes('SFLLIN(') && trimmed.includes('*DS3')) {
                keywordPositions.sfllinDs3 = i;
            } else if (trimmed.includes('SFLLIN(') && trimmed.includes('*DS4')) {
                keywordPositions.sfllinDs4 = i;
            } else if (trimmed.includes('SFLDSPCTL')) {
                keywordPositions.sfldspctl = i;
            } else if (trimmed.includes('SFLDSP')) {
                keywordPositions.sfldsp = i;
            }
        }

        let changesCount = 0;
        let lastInsertPosition = recordStartIndex;

        if (sflsizDs3Value) {
            const padded = sflsizDs3Value.padStart(4, '0');
            const newLine = `     A  *DS3                                SFLSIZ(${padded})`;
            if (keywordPositions.sflsizDs3 !== -1) {
                lines[keywordPositions.sflsizDs3] = newLine;
                Logger.dds(`Updated SFLSIZ DS3 at line ${keywordPositions.sflsizDs3}`);
                lastInsertPosition = keywordPositions.sflsizDs3;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLSIZ DS3 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflsizDs3 !== -1) {
            lines.splice(keywordPositions.sflsizDs3, 1);
            Logger.dds('Removed SFLSIZ DS3');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflsizDs3) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sflsizDs4Value) {
            const padded = sflsizDs4Value.padStart(4, '0');
            const newLine = `     A  *DS4                                SFLSIZ(${padded})`;
            if (keywordPositions.sflsizDs4 !== -1) {
                lines[keywordPositions.sflsizDs4] = newLine;
                Logger.dds(`Updated SFLSIZ DS4 at line ${keywordPositions.sflsizDs4}`);
                lastInsertPosition = keywordPositions.sflsizDs4;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLSIZ DS4 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflsizDs4 !== -1) {
            lines.splice(keywordPositions.sflsizDs4, 1);
            Logger.dds('Removed SFLSIZ DS4');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflsizDs4) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sflpagDs3Value) {
            const padded = sflpagDs3Value.padStart(4, '0');
            const newLine = `     A  *DS3                                SFLPAG(${padded})`;
            if (keywordPositions.sflpagDs3 !== -1) {
                lines[keywordPositions.sflpagDs3] = newLine;
                Logger.dds(`Updated SFLPAG DS3 at line ${keywordPositions.sflpagDs3}`);
                lastInsertPosition = keywordPositions.sflpagDs3;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLPAG DS3 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflpagDs3 !== -1) {
            lines.splice(keywordPositions.sflpagDs3, 1);
            Logger.dds('Removed SFLPAG DS3');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflpagDs3) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sflpagDs4Value) {
            const padded = sflpagDs4Value.padStart(4, '0');
            const newLine = `     A  *DS4                                SFLPAG(${padded})`;
            if (keywordPositions.sflpagDs4 !== -1) {
                lines[keywordPositions.sflpagDs4] = newLine;
                Logger.dds(`Updated SFLPAG DS4 at line ${keywordPositions.sflpagDs4}`);
                lastInsertPosition = keywordPositions.sflpagDs4;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLPAG DS4 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflpagDs4 !== -1) {
            lines.splice(keywordPositions.sflpagDs4, 1);
            Logger.dds('Removed SFLPAG DS4');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflpagDs4) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sfllinDs3Value) {
            const newLine = `     A  *DS3                                SFLLIN(${sfllinDs3Value})`;
            if (keywordPositions.sfllinDs3 !== -1) {
                lines[keywordPositions.sfllinDs3] = newLine;
                Logger.dds(`Updated SFLLIN DS3 at line ${keywordPositions.sfllinDs3}`);
                lastInsertPosition = keywordPositions.sfllinDs3;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLLIN DS3 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sfllinDs3 !== -1) {
            lines.splice(keywordPositions.sfllinDs3, 1);
            Logger.dds('Removed SFLLIN DS3');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfllinDs3) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sfllinDs4Value) {
            const newLine = `     A  *DS4                                SFLLIN(${sfllinDs4Value})`;
            if (keywordPositions.sfllinDs4 !== -1) {
                lines[keywordPositions.sfllinDs4] = newLine;
                Logger.dds(`Updated SFLLIN DS4 at line ${keywordPositions.sfllinDs4}`);
                lastInsertPosition = keywordPositions.sfllinDs4;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLLIN DS4 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sfllinDs4 !== -1) {
            lines.splice(keywordPositions.sfllinDs4, 1);
            Logger.dds('Removed SFLLIN DS4');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfllinDs4) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sfldspEnabled) {
            const indicatorData = indicatorConfigurations.get('sfldsp:enabled');

            if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                const generated = generateDdsLineWithIndicators('SFLDSP', indicatorData);
                const newLines = generated.split('\n');

                if (keywordPositions.sfldsp !== -1) {
                    let linesToRemove = 1;
                    let j = keywordPositions.sfldsp - 1;
                    while (j >= recordStartIndex) {
                        const prevLine = lines[j];
                        const prevTrimmed = prevLine.trim();
                        const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                        if (!isIndicatorOnly) { break; }
                        linesToRemove++;
                        j--;
                    }

                    lines.splice(keywordPositions.sfldsp - (linesToRemove - 1), linesToRemove, ...newLines);
                    Logger.dds(`Updated SFLDSP: removed ${linesToRemove} lines, inserted ${newLines.length} lines`);
                    lastInsertPosition = keywordPositions.sfldsp;

                    const delta = newLines.length - linesToRemove;
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] > keywordPositions.sfldsp) {keywordPositions[key] += delta;}
                    });
                    recordEndIndex += delta;
                    changesCount++;
                } else {
                    lastInsertPosition++;
                    lines.splice(lastInsertPosition, 0, ...newLines);
                    Logger.dds(`Inserted SFLDSP: ${newLines.length} line(s)`);
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key] += newLines.length;}
                    });
                    recordEndIndex += newLines.length;
                    changesCount++;
                }
            } else {
                const newLine = '     A                                      SFLDSP';

                if (keywordPositions.sfldsp !== -1) {
                    let linesToRemove = 1;
                    let j = keywordPositions.sfldsp - 1;
                    while (j >= recordStartIndex) {
                        const prevLine = lines[j];
                        const prevTrimmed = prevLine.trim();
                        const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                        if (!isIndicatorOnly) { break; }
                        linesToRemove++;
                        j--;
                    }

                    const replaceStart = keywordPositions.sfldsp - (linesToRemove - 1);
                    lines.splice(replaceStart, linesToRemove, newLine);
                    Logger.dds(`Updated SFLDSP without indicators: removed ${linesToRemove} line(s), inserted 1 line`);
                    lastInsertPosition = replaceStart;

                    const delta = 1 - linesToRemove;
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] > keywordPositions.sfldsp) {keywordPositions[key] += delta;}
                    });
                    keywordPositions.sfldsp = replaceStart;
                    recordEndIndex += delta;
                    changesCount++;
                } else {
                    lastInsertPosition++;
                    lines.splice(lastInsertPosition, 0, newLine);
                    Logger.dds(`Inserted SFLDSP without indicators at line ${lastInsertPosition}`);
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                    });
                    keywordPositions.sfldsp = lastInsertPosition;
                    recordEndIndex++;
                    changesCount++;
                }
            }
        } else if (keywordPositions.sfldsp !== -1) {
            let linesToRemove = 1;
            let j = keywordPositions.sfldsp - 1;
            while (j >= recordStartIndex) {
                const prevLine = lines[j];
                const prevTrimmed = prevLine.trim();
                const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                if (!isIndicatorOnly) { break; }
                linesToRemove++;
                j--;
            }

            lines.splice(keywordPositions.sfldsp - (linesToRemove - 1), linesToRemove);
            Logger.dds(`Removed SFLDSP (${linesToRemove} line(s))`);
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfldsp) {keywordPositions[key] -= linesToRemove;}
            });
            recordEndIndex -= linesToRemove;
            changesCount++;
        }

        if (sfldspctlEnabled) {
            const indicatorData = indicatorConfigurations.get('sfldspctl:enabled');

            if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                const generated = generateDdsLineWithIndicators('SFLDSPCTL', indicatorData);
                const newLines = generated.split('\n');

                if (keywordPositions.sfldspctl !== -1) {
                    let linesToRemove = 1;
                    let j = keywordPositions.sfldspctl - 1;
                    while (j >= recordStartIndex) {
                        const prevLine = lines[j];
                        const prevTrimmed = prevLine.trim();
                        const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                        if (!isIndicatorOnly) { break; }
                        linesToRemove++;
                        j--;
                    }

                    lines.splice(keywordPositions.sfldspctl - (linesToRemove - 1), linesToRemove, ...newLines);
                    Logger.dds(`Updated SFLDSPCTL: removed ${linesToRemove} lines, inserted ${newLines.length} lines`);

                    const delta = newLines.length - linesToRemove;
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] > keywordPositions.sfldspctl) {keywordPositions[key] += delta;}
                    });
                    recordEndIndex += delta;
                    changesCount++;
                } else {
                    lastInsertPosition++;
                    lines.splice(lastInsertPosition, 0, ...newLines);
                    Logger.dds(`Inserted SFLDSPCTL: ${newLines.length} line(s)`);
                    recordEndIndex += newLines.length;
                    changesCount++;
                }
            } else {
                const newLine = '     A                                      SFLDSPCTL';

                if (keywordPositions.sfldspctl !== -1) {
                    let linesToRemove = 1;
                    let j = keywordPositions.sfldspctl - 1;
                    while (j >= recordStartIndex) {
                        const prevLine = lines[j];
                        const prevTrimmed = prevLine.trim();
                        const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                        if (!isIndicatorOnly) { break; }
                        linesToRemove++;
                        j--;
                    }

                    const replaceStart = keywordPositions.sfldspctl - (linesToRemove - 1);
                    lines.splice(replaceStart, linesToRemove, newLine);
                    Logger.dds(`Updated SFLDSPCTL without indicators: removed ${linesToRemove} line(s), inserted 1 line`);
                    lastInsertPosition = replaceStart;

                    const delta = 1 - linesToRemove;
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] > keywordPositions.sfldspctl) {keywordPositions[key] += delta;}
                    });
                    keywordPositions.sfldspctl = replaceStart;
                    recordEndIndex += delta;
                    changesCount++;
                } else {
                    lastInsertPosition++;
                    lines.splice(lastInsertPosition, 0, newLine);
                    Logger.dds(`Inserted SFLDSPCTL without indicators at line ${lastInsertPosition}`);
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                    });
                    keywordPositions.sfldspctl = lastInsertPosition;
                    recordEndIndex++;
                    changesCount++;
                }
            }
        } else if (keywordPositions.sfldspctl !== -1) {
            let linesToRemove = 1;
            let j = keywordPositions.sfldspctl - 1;
            while (j >= recordStartIndex) {
                const prevLine = lines[j];
                const prevTrimmed = prevLine.trim();
                const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                if (!isIndicatorOnly) { break; }
                linesToRemove++;
                j--;
            }

            lines.splice(keywordPositions.sfldspctl - (linesToRemove - 1), linesToRemove);
            Logger.dds(`Removed SFLDSPCTL (${linesToRemove} line(s))`);
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfldspctl) {keywordPositions[key] -= linesToRemove;}
            });
            recordEndIndex -= linesToRemove;
            changesCount++;
        }

        const nextDocument = lines.join('\n');
        setCurrentDocument(nextDocument);
        updateDocumentInEditor();

        Logger.success('Subfile control keywords applied successfully');

        const message = changesCount === 0
            ? 'No changes were made'
            : `Successfully updated ${changesCount} subfile control keyword${changesCount > 1 ? 's' : ''}`;
        vscode.postMessage({
            type: 'applyChangesSuccess',
            message: message
        });

        showScreenProperties();
        requestAnimationFrame(() => {
            const subfileTab = document.querySelector('.properties-tab[data-tab="subfile-control"]');
            if (subfileTab) {
                subfileTab.click();
            }
        });

        const activeView = getCurrentView ? getCurrentView() : 'designer';
        if (activeView === 'preview' && updatePreviewView) {
            updatePreviewView();
        } else if (activeView === 'designer' && parseDspfFields) {
            parseDspfFields(nextDocument);
        }
    } catch (error) {
        Logger.error('Error applying subfile control:', error);
        vscode.postMessage({
            type: 'applyChangesError',
            message: 'Error updating subfile control: ' + error.message
        });
    }
}

export function applySflpagRepetition(options) {
    const {
        fields,
        targetRecord,
        subfileRelationship,
        getSflpagValue,
        Logger
    } = options;

    if (!subfileRelationship) {
        return fields;
    }

    const sflctlRecord = subfileRelationship.sflctlRecord;
    const sflpagValue = getSflpagValue(sflctlRecord);

    if (sflpagValue <= 1) {
        return fields;
    }

    const sflRowSpan = getSflRowSpan({
        fields,
        targetRecord,
        subfileRelationship
    });

    Logger.debug(`Applying SFLPAG repetition: ${sflpagValue} times for ${targetRecord} (from ${sflctlRecord}), row span=${sflRowSpan}`);

    const originalFields = [...fields];
    const resultFields = [...fields];

    for (let repeat = 1; repeat < sflpagValue; repeat++) {
        originalFields.forEach(field => {
            const shouldRepeat = (
                (targetRecord === subfileRelationship.sflRecord && !field.isBackgroundRecord) ||
                (targetRecord === subfileRelationship.sflctlRecord && field.isBackgroundRecord)
            );

            if (shouldRepeat) {
                const visualCopy = {
                    ...field,
                    row: field.row + (repeat * sflRowSpan),
                    isVisualCopy: true
                };
                resultFields.push(visualCopy);
            }
        });
    }

    return resultFields;
}

export function getSflRowSpan(options) {
    const {
        fields,
        targetRecord,
        subfileRelationship
    } = options;

    if (!subfileRelationship || !Array.isArray(fields) || fields.length === 0) {
        return 1;
    }

    const repeatableRows = fields
        .filter(field => {
            if (!field || field.isVisualCopy) {
                return false;
            }

            return (
                (targetRecord === subfileRelationship.sflRecord && !field.isBackgroundRecord) ||
                (targetRecord === subfileRelationship.sflctlRecord && field.isBackgroundRecord)
            );
        })
        .map(field => field.row)
        .filter(row => Number.isFinite(row));

    if (repeatableRows.length === 0) {
        return 1;
    }

    const minRow = Math.min(...repeatableRows);
    const maxRow = Math.max(...repeatableRows);
    const span = (maxRow - minRow) + 1;

    return span > 0 ? span : 1;
}

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
                    Logger.stats(`Found SFLPAG for ${displayMarker}: ${sflpagValue}`);
                    break;
                } else if (displayConfig.singleSize) {
                    if (displayConfig.singleSize === currentDisplaySize) {
                        sflpagValue = parseInt(match[1], 10);
                        Logger.stats(`Found SFLPAG (single size ${displayConfig.singleSize}): ${sflpagValue}`);
                        break;
                    }
                }
            }
        }
    }

    return sflpagValue;
}

export function getSubfileRelationship(options) {
    const {
        recordName,
        currentDocument,
        getRecordType,
        Logger
    } = options;

    const lines = currentDocument.split('\n');
    const recordType = getRecordType(recordName);

    if (recordType === 'SFLCTL') {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes(`R ${recordName}`) || line.includes(`R  ${recordName}`)) {
                if (line.includes('SFLCTL(')) {
                    const match = line.match(/SFLCTL\((\w+)\)/);
                    if (match) {
                        const sflRecord = match[1];
                        Logger.debug(`Found SFLCTL relationship (same line): ${recordName} controls ${sflRecord}`);
                        return {
                            sflRecord: sflRecord,
                            sflctlRecord: recordName,
                            companionRecord: sflRecord
                        };
                    }
                }

                for (let j = i + 1; j < lines.length; j++) {
                    const nextLine = lines[j];
                    if (nextLine.match(/^\s{5}A\s+R\s+\w+/)) {
                        break;
                    }
                    if (nextLine.includes('SFLCTL(')) {
                        const match = nextLine.match(/SFLCTL\((\w+)\)/);
                        if (match) {
                            const sflRecord = match[1];
                            Logger.debug(`Found SFLCTL relationship (next line): ${recordName} controls ${sflRecord}`);
                            return {
                                sflRecord: sflRecord,
                                sflctlRecord: recordName,
                                companionRecord: sflRecord
                            };
                        }
                    }
                }
                break;
            }
        }
    }

    if (recordType === 'SFL') {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const recordMatch = line.match(/^\s{5}A\s+R\s+(\w+)/);
            if (recordMatch) {
                const ctlRecordName = recordMatch[1];

                const sflctlMatch = line.match(/SFLCTL\((\w+)\)/);
                if (sflctlMatch && sflctlMatch[1] === recordName) {
                    Logger.debug(`Found SFL relationship (same line): ${recordName} is controlled by ${ctlRecordName}`);
                    return {
                        sflRecord: recordName,
                        sflctlRecord: ctlRecordName,
                        companionRecord: ctlRecordName
                    };
                }

                for (let j = i + 1; j < lines.length; j++) {
                    const nextLine = lines[j];
                    if (nextLine.match(/^\s{5}A\s+R\s+\w+/)) {
                        break;
                    }
                    const nextMatch = nextLine.match(/SFLCTL\((\w+)\)/);
                    if (nextMatch && nextMatch[1] === recordName) {
                        Logger.debug(`Found SFL relationship (next line): ${recordName} is controlled by ${ctlRecordName}`);
                        return {
                            sflRecord: recordName,
                            sflctlRecord: ctlRecordName,
                            companionRecord: ctlRecordName
                        };
                    }
                }
            }
        }
    }

    return null;
}
