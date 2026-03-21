export function showScreenProperties(options) {
    const {
        Logger,
        vscode,
        isReadOnly,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        getRecordType,
        IdGenerator,
        getWindowDimensions,
        setupPropertiesTabs,
        loadSubfileControl,
        applySubfileControl,
        loadFunctionKeys,
        createFunctionKeyRow,
        saveFunctionKeys,
        updateDocumentInEditor,
        generateDdsLineWithIndicators,
        indicatorConfigurations,
        DisplaySizeUtils,
        IndicatorUtils,
        scanIndicatorsBackward,
        setIndicatorButtonState,
        openIBMiModal,
        applyWindowDimensions,
        showScreenProperties: refreshScreenProperties
    } = options;

    const propertiesPanel = document.getElementById('field-properties');
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

    if (!currentRecord) {
        propertiesPanel.innerHTML = '<p>No screen selected</p>';
        return;
    }

    const recordType = getRecordType(currentRecord);
    const windowDimensions = getWindowDimensions(currentRecord);

    let windowDimensionsHtml = '';
    if (windowDimensions.hasWindow) {
        const isReference = windowDimensions.isReference || false;
        const referenceName = windowDimensions.referenceName || '';

        windowDimensionsHtml = `
                <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                <h4 style="margin: 12px 0 8px 0; color: var(--text-color); font-size: 14px;">Window</h4>
                
                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-color);">Type</label>
                    <div style="display: flex; gap: 16px; margin-bottom: 12px;">
                        <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                            <input type="radio" name="window-type" id="window-type-coords" value="coordinates" ${!isReference ? 'checked' : ''} />
                            <span>Coordinates</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                            <input type="radio" name="window-type" id="window-type-ref" value="reference" ${isReference ? 'checked' : ''} />
                            <span>Reference</span>
                        </label>
                    </div>
                </div>
                
                <div id="window-reference-section" style="display: ${isReference ? 'block' : 'none'}; margin-bottom: 16px;">
                    <div class="property-group" style="margin: 0;">
                        <label>Window Reference</label>
                        <input type="text" id="window-reference-name" value="${referenceName}" placeholder="e.g. WIND1" maxlength="10" style="padding: 6px 8px; text-transform: uppercase;" />
                    </div>
                    ${isReference && windowDimensions.ds3 ? `
                        <div style="margin-top: 8px; padding: 8px; background-color: rgba(0, 122, 204, 0.1); border-left: 3px solid #007ACC; font-size: 11px; color: var(--text-muted);">
                            <strong>Note:</strong> Resolved coordinates from ${referenceName}:<br/>
                            Row: ${windowDimensions.ds3.row}, Col: ${windowDimensions.ds3.col}, Height: ${windowDimensions.ds3.height}, Width: ${windowDimensions.ds3.width}
                        </div>
                    ` : ''}
                </div>
                
                <div id="window-coordinates-section" style="display: ${!isReference ? 'block' : 'none'};">
                    ${windowDimensions.ds3 ? `
                    <div style="margin-bottom: 12px;">
                        <label style="display: block; margin-bottom: 4px; font-weight: 600; color: #888;">*DS3 (24 x 80)</label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Row</label>
                                <input type="number" id="window-ds3-row" value="${windowDimensions.ds3.row}" min="1" max="24" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Column</label>
                                <input type="number" id="window-ds3-col" value="${windowDimensions.ds3.col}" min="1" max="80" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Height</label>
                                <input type="number" id="window-ds3-height" value="${windowDimensions.ds3.height}" min="1" max="24" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Width</label>
                                <input type="number" id="window-ds3-width" value="${windowDimensions.ds3.width}" min="1" max="80" style="padding: 4px 8px;" />
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${windowDimensions.ds4 ? `
                    <div style="margin-bottom: 12px;">
                        <label style="display: block; margin-bottom: 4px; font-weight: 600; color: #888;">*DS4 (27 x 132)</label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Row</label>
                                <input type="number" id="window-ds4-row" value="${windowDimensions.ds4.row}" min="1" max="27" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Column</label>
                                <input type="number" id="window-ds4-col" value="${windowDimensions.ds4.col}" min="1" max="132" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Height</label>
                                <input type="number" id="window-ds4-height" value="${windowDimensions.ds4.height}" min="1" max="27" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Width</label>
                                <input type="number" id="window-ds4-width" value="${windowDimensions.ds4.width}" min="1" max="132" style="padding: 4px 8px;" />
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
                
                <button id="apply-window-dimensions-btn" style="width: 100%; padding: 8px; margin-top: 8px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    Apply Changes
                </button>
            `;
    }

    propertiesPanel.innerHTML = `
            <div class="properties-tabs">
                <button class="properties-tab active" data-tab="basic">Basic</button>
                ${recordType === 'SFLCTL' ? '<button class="properties-tab" data-tab="subfile-control">Subfile Control</button>' : ''}
                ${recordType !== 'SFL' ? '<button class="properties-tab" data-tab="function-keys">Function Keys</button>' : ''}
            </div>
            
            <div class="properties-content">
                <div id="tab-basic" class="tab-panel active">
                    <div class="property-group">
                        <label>Name</label>
                        <input type="text" id="screen-name" value="${currentRecord}" readonly style="background-color: #2d2d2d; cursor: not-allowed;" />
                    </div>
                    <div class="property-group">
                        <label>Type</label>
                        <input type="text" id="screen-type" value="${recordType}" readonly style="background-color: #2d2d2d; cursor: not-allowed;" />
                    </div>
                    ${windowDimensionsHtml}
                </div>
                
                ${recordType === 'SFLCTL' ? `
                <div id="tab-subfile-control" class="tab-panel">
                    <div class="subfile-control-section">
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Size (SFLSIZ)</label>
                        
                        <div style="display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflsiz-ds3-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflsiz-ds3-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS3 (24x80):</label>
                            </div>
                            <input type="number" id="sflsiz-ds3" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                            
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflsiz-ds4-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflsiz-ds4-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS4 (27x132):</label>
                            </div>
                            <input type="number" id="sflsiz-ds4" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Page (SFLPAG)</label>
                        
                        <div style="display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflpag-ds3-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflpag-ds3-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS3 (24x80):</label>
                            </div>
                            <input type="number" id="sflpag-ds3" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                            
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflpag-ds4-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflpag-ds4-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS4 (27x132):</label>
                            </div>
                            <input type="number" id="sflpag-ds4" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Lines (SFLLIN)</label>
                        <p style="font-size: 11px; color: var(--vscode-descriptionForeground); margin-bottom: 12px;">Number of lines displayed (without indicators)</p>
                        
                        <div style="display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sfllin-ds3-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sfllin-ds3-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS3 (24x80):</label>
                            </div>
                            <input type="number" id="sfllin-ds3" placeholder="0" min="0" max="99" style="padding: 6px 8px; width: 100px;" disabled />
                            
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sfllin-ds4-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sfllin-ds4-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS4 (27x132):</label>
                            </div>
                            <input type="number" id="sfllin-ds4" placeholder="0" min="0" max="99" style="padding: 6px 8px; width: 100px;" disabled />
                            </div>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Display (SFLDSP)</label>
                        
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                            <input type="checkbox" id="sfldsp-enabled" style="width: 18px; height: 18px; cursor: pointer;">
                            <label for="sfldsp-enabled" style="margin: 0; cursor: pointer;">Include in code</label>
                            <button id="sfldsp-indicators-btn" class="indicator-config-btn" disabled>
                                <span class="indicator-icon">🔢</span>
                                <span class="indicator-text">No ind.</span>
                            </button>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Display Control (SFLDSPCTL)</label>
                        
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                            <input type="checkbox" id="sfldspctl-enabled" style="width: 18px; height: 18px; cursor: pointer;">
                            <label for="sfldspctl-enabled" style="margin: 0; cursor: pointer;">Include in code</label>
                            <button id="sfldspctl-indicators-btn" class="indicator-config-btn" disabled>
                                <span class="indicator-icon">🔢</span>
                                <span class="indicator-text">No ind.</span>
                            </button>
                        </div>
                        
                        <button id="apply-subfile-control-btn" style="width: 100%; padding: 10px; margin-top: 20px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                            Apply Changes
                        </button>
                    </div>
                </div>
                ` : ''}
                
                ${recordType !== 'SFL' ? `
                <div id="tab-function-keys" class="tab-panel">
                    <div class="function-keys-header" style="margin-bottom: 10px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Function Keys</label>
                        <!-- Column headers -->
                        <div style="display: grid; grid-template-columns: 70px 240px 70px 1fr; gap: 8px; padding: 4px 8px; font-size: 11px; font-weight: 600; color: var(--vscode-descriptionForeground); border-bottom: 1px solid var(--border-color); margin-bottom: 8px;">
                            <span>Key</span>
                            <span>Type</span>
                            <span>Indicator</span>
                            <span>Description</span>
                        </div>
                    </div>
                    
                    <div id="function-keys-list" style="max-height: 400px; overflow-y: auto; overflow-x: auto;">
                        <!-- Function keys will be populated here -->
                    </div>
                </div>
                ` : ''}
            </div>
        `;

    setupPropertiesTabs();

    if (recordType === 'SFLCTL') {
        const applySubfileControlHandler = () => applySubfileControl({
            Logger,
            vscode,
            getCurrentDocument,
            setCurrentDocument,
            getCurrentRecord,
            getCurrentView: options.getCurrentView,
            updateDocumentInEditor,
            generateDdsLineWithIndicators,
            indicatorConfigurations,
            showScreenProperties: refreshScreenProperties,
            parseDspfFields: options.parseDspfFields,
            updatePreviewView: options.updatePreviewView
        });
        loadSubfileControl({
            Logger,
            getCurrentDocument,
            getCurrentRecord,
            DisplaySizeUtils,
            IndicatorUtils,
            scanIndicatorsBackward,
            indicatorConfigurations,
            setIndicatorButtonState,
            openIBMiModal,
            applySubfileControl: applySubfileControlHandler
        });
    }

    if (recordType !== 'SFL') {
        const saveFunctionKeysHandler = () => saveFunctionKeys({
            Logger,
            isReadOnly,
            getCurrentDocument,
            setCurrentDocument,
            getCurrentRecord,
            updateDocumentInEditor
        });
        const createFunctionKeyRowHandler = (args) => createFunctionKeyRow({
            ...args,
            IdGenerator,
            saveFunctionKeys: saveFunctionKeysHandler
        });
        loadFunctionKeys({
            getCurrentDocument,
            getCurrentRecord,
            createFunctionKeyRow: createFunctionKeyRowHandler
        });
    }

    const applyWindowBtn = document.getElementById('apply-window-dimensions-btn');
    if (applyWindowBtn) {
        applyWindowBtn.addEventListener('click', function() {
            applyWindowDimensions();
        });
    }

    const windowTypeCoords = document.getElementById('window-type-coords');
    const windowTypeRef = document.getElementById('window-type-ref');
    const coordsSection = document.getElementById('window-coordinates-section');
    const refSection = document.getElementById('window-reference-section');

    if (windowTypeCoords && windowTypeRef && coordsSection && refSection) {
        windowTypeCoords.addEventListener('change', function() {
            if (this.checked) {
                coordsSection.style.display = 'block';
                refSection.style.display = 'none';
            }
        });

        windowTypeRef.addEventListener('change', function() {
            if (this.checked) {
                coordsSection.style.display = 'none';
                refSection.style.display = 'block';
            }
        });
    }
}
