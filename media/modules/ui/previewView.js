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
    const hiddenFields = Array.from(new Map(parsedScreen.fields
        .filter(field =>
            field &&
            field.isHidden &&
            !field.isVisualCopy &&
            field.recordName === currentRecord &&
            !field.isBackgroundRecord
        )
        .map(field => [`${field.recordName || ''}|${field.name}|${field.dataType}|${field.length}|${field.decimals}`, field])
    ).values());

    const getHiddenTypeLabel = (field) => {
        switch (field?.dataType) {
            case 'character': return 'alphanumeric';
            case 'zoned':
            case 'packed':
            case 'float':
            case 'double': return 'numeric';
            case 'date': return 'date';
            case 'time': return 'time';
            case 'timestamp': return 'timestamp';
            case 'reference': return 'reference';
            default: return field?.dataType || 'unknown';
        }
    };

    const rows = currentDisplaySize === 'DS3' ? 24 : 27;
    const cols = currentDisplaySize === 'DS3' ? 80 : 132;

    // Render indicator panel into the toolbar element (sits outside the scrollable container)
    const previewToolbar = document.getElementById('preview-toolbar');
    if (previewToolbar) {
        previewToolbar.innerHTML = `
            <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px;">
                <label style="margin: 0; color: #cccccc; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap;">
                    <input id="preview-indicator-sim-enabled" type="checkbox" ${simulationState.enabled ? 'checked' : ''}>
                    <span>Condition Work Screen display appear</span>
                </label>
                <div id="preview-indicator-list" style="display: flex; flex-wrap: wrap; gap: 8px; ${simulationState.enabled ? '' : 'opacity: 0.45; pointer-events: none;'}">
                    ${availableIndicators.length > 0
                        ? availableIndicators.map(ind => `
                            <label style="display: inline-flex; align-items: center; gap: 4px; color: #cccccc; cursor: pointer;">
                                <input class="preview-indicator-checkbox" type="checkbox" data-indicator="${ind}" ${activeIndicators.has(ind) ? 'checked' : ''} ${simulationState.enabled ? '' : 'disabled'}>
                                <span>${ind}</span>
                            </label>
                        `).join('')
                        : '<span style="color: #666; font-size: 12px;">No indicators detected</span>'}
                </div>
                <details style="position: relative; color: #cccccc; font-size: 12px; margin-left: auto;">
                    <summary style="cursor: pointer; user-select: none; padding: 4px 8px; border: 1px solid #555; border-radius: 4px; background-color: #1a1a1a; white-space: nowrap;">
                        Hidden fields (${hiddenFields.length})
                    </summary>
                    <div style="position: absolute; top: calc(100% + 6px); right: 0; z-index: 80; width: min(560px, 92vw); max-height: 220px; overflow: auto; padding: 8px; border: 1px solid #555; border-radius: 6px; background-color: #111111; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45); display: grid; gap: 4px;">
                        ${hiddenFields.length > 0
                            ? hiddenFields.map(field => {
                                const len = typeof field.length === 'number' ? field.length : '-';
                                const dec = typeof field.decimals === 'number' ? field.decimals : '0';
                                return `<div style="display: grid; grid-template-columns: 1.3fr 0.9fr auto auto; gap: 8px; font-family: 'Consolas', 'Courier New', monospace; color: #a8d5ff;">
                                    <span>${field.name}</span>
                                    <span style="color: #c8c8c8; font-family: inherit;">${getHiddenTypeLabel(field)}</span>
                                    <span style="color: #9f9f9f; font-family: inherit;">L:${len}</span>
                                    <span style="color: #9f9f9f; font-family: inherit;">D:${dec}</span>
                                </div>`;
                            }).join('')
                            : '<span style="color: #777;">No hidden fields</span>'}
                    </div>
                </details>
            </div>
        `;
    }

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
        if (fieldForPreview && (fieldForPreview.hidden || fieldForPreview.isHidden)) {
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

    // Checkboxes are in #preview-toolbar (outside previewContainer), query from document
    document.querySelectorAll('.preview-indicator-checkbox').forEach(input => {
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
