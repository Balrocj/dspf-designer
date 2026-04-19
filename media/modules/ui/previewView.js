export function updatePreviewView(options) {
    const {
        Logger,
        ScreenCoordinates,
        parseDspfForPreview,
        generateWindowFieldHtml,
        generateFieldHtml,
        setupPreviewDisplaySizeListeners,
        updateCanvasSize,
        setupRulers,
        parseDspfFields,
        getCurrentDocument,
        getCurrentRecord,
        getCurrentDisplaySize,
        setCurrentDisplaySize,
        getIndicatorSimulationState,
        setIndicatorSimulationEnabled,
        setPreviewIndicatorActive,
        getPreviewSimulatedField,
        applyDefaultZoomForDisplaySize,
        updatePreviewView: updatePreviewViewHandler
    } = options;

    const previewContainer = document.getElementById('preview-container');
    if (!previewContainer) {return;}

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();
    const currentDisplaySize = getCurrentDisplaySize();
    const simulationState = getIndicatorSimulationState ? getIndicatorSimulationState() : { enabled: false, activeIndicators: [] };

    const parsedScreen = parseDspfForPreview(currentDocument, currentRecord);

    const collectIndicatorsFromData = (indicatorData, bucket) => {
        if (!indicatorData) {
            return;
        }

        if (Array.isArray(indicatorData)) {
            indicatorData.forEach(ind => {
                if (ind && ind.number) {
                    bucket.add(String(ind.number).padStart(2, '0'));
                }
            });
            return;
        }

        if (Array.isArray(indicatorData.groups)) {
            indicatorData.groups.forEach(group => {
                const indicators = Array.isArray(group?.indicators) ? group.indicators : [];
                indicators.forEach(ind => {
                    if (ind && ind.number) {
                        bucket.add(String(ind.number).padStart(2, '0'));
                    }
                });
            });
        }
    };

    const availableIndicatorsSet = new Set();
    parsedScreen.fields.forEach(field => {
        collectIndicatorsFromData(field.indicators, availableIndicatorsSet);
        collectIndicatorsFromData(field.keywordIndicators, availableIndicatorsSet);
        collectIndicatorsFromData(field.dftvalIndicators, availableIndicatorsSet);

        const mapGroups = [field.attributeIndicators, field.colorIndicators, field.checkIndicators];
        mapGroups.forEach(groupMap => {
            if (!groupMap || typeof groupMap !== 'object') {
                return;
            }
            Object.values(groupMap).forEach(value => collectIndicatorsFromData(value, availableIndicatorsSet));
        });
    });

    const availableIndicators = Array.from(availableIndicatorsSet).sort((a, b) => Number(a) - Number(b));
    const activeIndicators = new Set(simulationState.activeIndicators || []);

    const rows = currentDisplaySize === 'DS3' ? 24 : 27;
    const cols = currentDisplaySize === 'DS3' ? 80 : 132;

    const indicatorPanel = `
        <div style="display: flex; flex-direction: column; gap: 8px; border: 1px solid #555; padding: 8px 10px; border-radius: 3px; margin: 10px auto; width: fit-content; max-width: min(95vw, 900px); background-color: #1e1e1e;">
            <label style="margin: 0; color: #cccccc; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                <input id="preview-indicator-sim-enabled" type="checkbox" ${simulationState.enabled ? 'checked' : ''}>
                <span>Condition Work Screen display appear</span>
            </label>
            <div id="preview-indicator-list" style="display: flex; flex-wrap: wrap; gap: 8px; ${simulationState.enabled ? '' : 'opacity: 0.55;'}">
                ${availableIndicators.length > 0
                    ? availableIndicators.map(ind => `
                        <label style="display: inline-flex; align-items: center; gap: 4px; color: #cccccc; cursor: pointer;">
                            <input class="preview-indicator-checkbox" type="checkbox" data-indicator="${ind}" ${activeIndicators.has(ind) ? 'checked' : ''} ${simulationState.enabled ? '' : 'disabled'}>
                            <span>${ind}</span>
                        </label>
                    `).join('')
                    : '<span style="color: #888; font-size: 12px;">No se detectaron indicadores en este record.</span>'}
            </div>
        </div>
    `;

    let html = `
        <div class="header">
            <h2>DSPF Preview - ${currentRecord || parsedScreen.recordName || 'DISPLAY'} (${currentDisplaySize})</h2>
            <!-- Display Size Selection for Preview -->
            <div style="display: flex; align-items: center; gap: 15px; border: 1px solid #555; padding: 5px 10px; border-radius: 3px; margin: 10px auto; width: fit-content; background-color: #1e1e1e;">
                <label style="margin: 0; color: #cccccc; cursor: pointer;">
                    <input type="radio" name="preview-display-size" value="DS3" ${currentDisplaySize === 'DS3' ? 'checked' : ''}>
                    <span style="margin-left: 5px;">24 x 80 (*DS3)</span>
                </label>
                <label style="margin: 0; color: #cccccc; cursor: pointer;">
                    <input type="radio" name="preview-display-size" value="DS4" ${currentDisplaySize === 'DS4' ? 'checked' : ''}>
                    <span style="margin-left: 5px;">27 x 132 (*DS4)</span>
                </label>
            </div>
            ${indicatorPanel}
        </div>
        <div class="screen" style="width: ${ScreenCoordinates.getWidthInPixels(cols)}px; height: ${ScreenCoordinates.getHeightInPixels(rows)}px;">
    `;

    for (let line = 1; line <= rows; line++) {
        const lineContent = ''.padEnd(cols, ' ');
        const lineTop = ScreenCoordinates.toPixels(line, 1).top;
        html += `<div class="screen-line" style="top: ${lineTop}px; width: ${ScreenCoordinates.getWidthInPixels(cols)}px;">${lineContent}</div>\n`;
    }

    if (parsedScreen.windowDimensions) {
        const win = parsedScreen.windowDimensions;
        const winPos = ScreenCoordinates.toPixels(win.row, win.col);
        const winTop = winPos.top;
        const winLeft = winPos.left;
        const winHeight = ScreenCoordinates.getHeightInPixels(win.height);
        const winWidth = ScreenCoordinates.getWidthInPixels(win.width + 4);

        html += `<div class="window-frame" style="
            position: absolute;
            top: ${winTop}px;
            left: ${winLeft}px;
            width: ${winWidth}px;
            height: ${winHeight}px;
            border: 2px dotted #00FF00;
            pointer-events: none;
            z-index: 5;
        "></div>`;

        Logger.window(`Adding window frame at ${win.row},${win.col} size ${win.height}x${win.width}`);
    }

    parsedScreen.fields.forEach(field => {
        const fieldForPreview = getPreviewSimulatedField ? getPreviewSimulatedField(field) : field;
        if (fieldForPreview && fieldForPreview.hidden) {
            return; // Field's conditioning indicators are not satisfied — hide it
        }
        if (parsedScreen.windowDimensions) {
            html += generateWindowFieldHtml(fieldForPreview, parsedScreen.windowDimensions);
        } else {
            html += generateFieldHtml(fieldForPreview);
        }
    });

    html += `</div>`;

    previewContainer.innerHTML = html;

    setupPreviewDisplaySizeListeners({
        Logger,
        getCurrentDisplaySize,
        setCurrentDisplaySize,
        updateCanvasSize,
        setupRulers,
        parseDspfFields,
        getCurrentDocument,
        applyDefaultZoomForDisplaySize,
        updatePreviewView: updatePreviewViewHandler
    });

    const simulationToggle = document.getElementById('preview-indicator-sim-enabled');
    if (simulationToggle && setIndicatorSimulationEnabled) {
        simulationToggle.addEventListener('change', function() {
            setIndicatorSimulationEnabled(this.checked);
            if (updatePreviewViewHandler) {
                updatePreviewViewHandler();
            }
        });
    }

    previewContainer.querySelectorAll('.preview-indicator-checkbox').forEach(input => {
        input.addEventListener('change', function() {
            if (setPreviewIndicatorActive) {
                setPreviewIndicatorActive(this.dataset.indicator, this.checked);
            }
            if (updatePreviewViewHandler) {
                updatePreviewViewHandler();
            }
        });
    });

    previewContainer.querySelectorAll('.input-field').forEach(field => {
        field.addEventListener('click', function() {
            this.contentEditable = true;
            this.focus();
        });

        field.addEventListener('blur', function() {
            this.contentEditable = false;
        });
    });
}
