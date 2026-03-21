export function showFieldProperties({
    field,
    Logger,
    KEYWORD_ATTRIBUTE_ALLOW_LIST,
    renderAttributeRows,
    getAttributeCheckboxMap,
    setupIndicatorButtons,
    setIndicatorButtonState,
    indicatorConfigurations,
    applyFieldProperties,
    deleteField
}) {
    const propertiesPanel = document.getElementById('field-properties');

    if (!field) {
        propertiesPanel.innerHTML = '<p>Select a field to edit properties</p>';
        return;
    }

    if (field.type === 'keyword' || field.isKeyword) {
        const keywordAttrAllowList = Array.from(KEYWORD_ATTRIBUTE_ALLOW_LIST);
        propertiesPanel.innerHTML = `
                <div class="properties-tabs">
                    <button class="properties-tab active" data-tab="basic">Basic</button>
                    <button class="properties-tab" data-tab="attributes">Attributes</button>
                    <button class="properties-tab" data-tab="colors">Colors</button>
                </div>
                
                <div class="properties-content">
                    <div id="tab-basic" class="tab-panel active">
                        <div class="property-group">
                            <label>Field Name</label>
                            <input type="text" id="prop-name" value="${field.name}" readonly style="background-color: #2d2d2d; cursor: not-allowed;" />
                        </div>
                        <div class="property-group">
                            <label>Row</label>
                            <input type="number" id="prop-row" value="${field.row}" min="1" max="24" />
                        </div>
                        <div class="property-group">
                            <label>Column</label>
                            <input type="number" id="prop-col" value="${field.col}" min="1" max="80" />
                        </div>
                    </div>
                    
                    <div id="tab-attributes" class="tab-panel">
                        ${renderAttributeRows(keywordAttrAllowList, 'keyword')}
                    </div>

                    <div id="tab-colors" class="tab-panel">
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-green" value="green" />
                                <span class="color-indicator" style="background-color: #00FF00;"></span>
                                Green
                            </label>
                            <button class="indicator-config-btn" data-color="GRN" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-white" value="white" />
                                <span class="color-indicator" style="background-color: #FFFFFF;"></span>
                                White
                            </label>
                            <button class="indicator-config-btn" data-color="WHT" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-red" value="red" />
                                <span class="color-indicator" style="background-color: #FF0000;"></span>
                                Red
                            </label>
                            <button class="indicator-config-btn" data-color="RED" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-turquoise" value="turquoise" />
                                <span class="color-indicator" style="background-color: #00FFFF;"></span>
                                Turquoise
                            </label>
                            <button class="indicator-config-btn" data-color="TRQ" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-yellow" value="yellow" />
                                <span class="color-indicator" style="background-color: #FFFF00;"></span>
                                Yellow
                            </label>
                            <button class="indicator-config-btn" data-color="YLW" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-pink" value="pink" />
                                <span class="color-indicator" style="background-color: #FF00FF;"></span>
                                Pink
                            </label>
                            <button class="indicator-config-btn" data-color="PNK" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-blue" value="blue" />
                                <span class="color-indicator" style="background-color: #0000FF;"></span>
                                Blue
                            </label>
                            <button class="indicator-config-btn" data-color="BLU" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 16px; border-top: 1px solid var(--border-color); background-color: var(--panel-background);">
                    <div class="property-group" style="margin-bottom: 8px;">
                        <button id="apply-properties" style="width: 100%; padding: 8px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Apply Changes</button>
                    </div>
                    <div class="property-group" style="margin: 0;">
                        <button id="delete-field" style="width: 100%; padding: 8px; background-color: var(--error-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Delete Field</button>
                    </div>
                </div>
            `;

        document.querySelectorAll('.properties-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabName = this.dataset.tab;

                document.querySelectorAll('.properties-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(`tab-${tabName}`).classList.add('active');
            });
        });

        document.getElementById('apply-properties').addEventListener('click', function() {
            applyFieldProperties(field);
        });

        document.getElementById('delete-field').addEventListener('click', function() {
            deleteField(field);
        });

        const colors = field.colors || (field.color ? [field.color] : []);
        if (colors.length > 0) {
            const colorMap = {
                'GRN': 'color-green',
                'WHT': 'color-white',
                'RED': 'color-red',
                'TRQ': 'color-turquoise',
                'YLW': 'color-yellow',
                'PNK': 'color-pink',
                'BLU': 'color-blue'
            };

            colors.forEach(colorCode => {
                const checkboxId = colorMap[colorCode];
                if (checkboxId) {
                    const checkbox = document.getElementById(checkboxId);
                    if (checkbox) {
                        checkbox.checked = true;
                        Logger.debug(`Pre-selected color ${colorCode} (${checkboxId}) for keyword ${field.name}`);
                    }
                }
            });
        }

        if (field.attributes) {
            const attrMap = getAttributeCheckboxMap(keywordAttrAllowList);
            Object.entries(attrMap).forEach(([attrKey, checkboxId]) => {
                if (field.attributes[attrKey]) {
                    const cb = document.getElementById(checkboxId);
                    if (cb) {cb.checked = true;}
                }
            });
        }
        if (field.colorIndicators) {
            for (const [color, indicatorData] of Object.entries(field.colorIndicators)) {
                const configKey = `color:${color}`;
                const indicatorSet = new Set();

                if (Array.isArray(indicatorData)) {
                    indicatorData.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                } else if (indicatorData.groups) {
                    indicatorData.groups.forEach(group => {
                        group.indicators.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                    });
                }

                indicatorConfigurations.set(configKey, indicatorSet);
            }
        }

        if (field.attributeIndicators) {
            for (const [attrName, indicatorData] of Object.entries(field.attributeIndicators)) {
                if (!KEYWORD_ATTRIBUTE_ALLOW_LIST.has(attrName)) {continue;}
                const configKey = `attr:${attrName}`;
                const indicatorSet = new Set();

                if (Array.isArray(indicatorData)) {
                    indicatorData.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                } else if (indicatorData.groups) {
                    indicatorData.groups.forEach(group => {
                        group.indicators.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                    });
                }

                indicatorConfigurations.set(configKey, indicatorSet);
            }
        }

        setupIndicatorButtons();

        if (field.colorIndicators) {
            for (const [color, indicators] of Object.entries(field.colorIndicators)) {
                const btn = document.querySelector(`.indicator-config-btn[data-color="${color}"]`);
                setIndicatorButtonState(btn, indicators);
            }
        }

        if (field.attributeIndicators) {
            for (const [attrName, indicators] of Object.entries(field.attributeIndicators)) {
                if (!KEYWORD_ATTRIBUTE_ALLOW_LIST.has(attrName)) {continue;}
                const btn = document.querySelector(`.indicator-config-btn[data-attr="${attrName}"]`);
                setIndicatorButtonState(btn, indicators);
            }
        }

        if (field.indicators) {
            const configKey = `field-indicators:${field.name}`;

            if (field.indicators.groups) {
                const indicatorData = {
                    groups: field.indicators.groups.map(g => ({
                        indicators: g.indicators || []
                    })),
                    isOr: field.indicators.isOr || false
                };
                indicatorConfigurations.set(configKey, indicatorData);

                const btn = document.querySelector(`.indicator-config-btn[data-field-indicators="true"]`);
                if (btn) {
                    Logger.debug(`🔍 [KEYWORD-IND] About to call setIndicatorButtonState for keyword ${field.name}`);
                    Logger.debug(`🔍 [KEYWORD-IND] field.indicators:`, field.indicators);
                    Logger.debug(`🔍 [KEYWORD-IND] field.indicators.groups:`, field.indicators.groups);

                    setIndicatorButtonState(btn, field.indicators);
                    const count = field.indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                    Logger.debug(`Marked keyword field-level indicator button with ${count} indicators`);
                }
            }
        }

        return;
    }

    let currentUsage = field.usage || '';

    if (!currentUsage) {
        if (field.type === 'input') {currentUsage = 'O';}
        else if (field.type === 'output') {currentUsage = 'I';}
    }

    const usageOptions = `
            <option value="I" ${currentUsage === 'I' ? 'selected' : ''}>Input</option>
            <option value="O" ${currentUsage === 'O' ? 'selected' : ''}>Output</option>
            <option value="B" ${currentUsage === 'B' ? 'selected' : ''}>Both</option>
            <!--<option value="M" ${currentUsage === 'M' ? 'selected' : ''}>Message</option>--> 
            <!--<option value="P" ${currentUsage === 'P' ? 'selected' : ''}>Program-to-System</option>--> 
        `;

    propertiesPanel.innerHTML = `
            <div class="properties-tabs">
                <button class="properties-tab active" data-tab="basic">Basic</button>
                <button class="properties-tab" data-tab="attributes">Attributes</button>
                <button class="properties-tab" data-tab="colors">Colors</button>
                <button class="properties-tab" data-tab="keying-options">Keying options</button>
            </div>
            
            <div class="properties-content">
                <div id="tab-basic" class="tab-panel active">
                    ${field.type !== 'constant' ? `
                    <div class="property-group">
                        <label>Field Name</label>
                        <input type="text" id="prop-name" value="${field.name}" maxlength="10" />
                    </div>
                    ` : ''}
                    ${field.type !== 'constant' ? `
                    <div class="property-group">
                        <label>Usage</label>
                        <select id="prop-usage">
                            ${usageOptions}
                        </select>
                    </div>
                    <div class="property-group">
                        <label>Type</label>
                        <select id="prop-type">
                            <option value="character" ${field.dataType === 'character' ? 'selected' : ''}>Character</option>
                            <option value="date" ${field.dataType === 'date' ? 'selected' : ''}>Date (L)</option>
                            <option value="time" ${field.dataType === 'time' ? 'selected' : ''}>Time (T)</option>
                            <option value="timestamp" ${field.dataType === 'timestamp' ? 'selected' : ''}>Timestamp (Z)</option>
                            <option value="packed" ${field.dataType === 'packed' ? 'selected' : ''}>Packed (Empaquetado)</option>
                            <option value="zoned" ${field.dataType === 'zoned' ? 'selected' : ''}>Con Zona</option>
                            <option value="float" ${field.dataType === 'float' ? 'selected' : ''}>Coma flotante</option>
                            <option value="double" ${field.dataType === 'double' ? 'selected' : ''}>Double Byte</option>
                        </select>
                    </div>
                    <div class="property-group">
                        <label>Shift</label>
                        <select id="prop-shift">
                            <!-- Options will be populated dynamically based on Type -->
                        </select>
                    </div>
                    ` : ''}
                    <div class="property-group">
                        <label>Row</label>
                        <input type="number" id="prop-row" value="${field.row}" min="1" max="24" />
                    </div>
                    <div class="property-group">
                        <label>Column</label>
                        <input type="number" id="prop-col" value="${field.col}" min="1" max="80" />
                    </div>
                    <div class="property-group">
                        <label>Length</label>
                        <input type="number" id="prop-length" value="${field.length || ''}" min="1" max="9999" ${(field.type === 'constant' || field.dataType === 'date' || field.dataType === 'time' || field.dataType === 'timestamp') ? 'readonly style="background-color: #2d2d2d; cursor: not-allowed;"' : ''} />
                    </div>
                    ${field.type !== 'constant' ? `
                    <div class="property-group">
                        <label>Decimals</label>
                        <input type="number" id="prop-decimals" value="${field.decimals || 0}" min="0" ${(field.dataType === 'character' || field.dataType === 'double' || field.dataType === 'date' || field.dataType === 'time' || field.dataType === 'timestamp') ? 'readonly style="background-color: #2d2d2d; cursor: not-allowed;"' : ''} />
                    </div>
                    ` : ''}
                    ${field.type === 'constant' ? `
                    <div class="property-group">
                        <label>Value</label>
                        <input type="text" id="prop-value" value="${field.value || ''}" />
                    </div>
                    ` : ''}
                </div>
                
                <div id="tab-attributes" class="tab-panel">
                    ${renderAttributeRows(null, field.type)}
                </div>
                <div id="tab-colors" class="tab-panel">
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-green" value="green" />
                            <span class="color-indicator" style="background-color: #00FF00;"></span>
                            Green
                        </label>
                        <button class="indicator-config-btn" data-color="GRN" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-white" value="white" />
                            <span class="color-indicator" style="background-color: #FFFFFF;"></span>
                            White
                        </label>
                        <button class="indicator-config-btn" data-color="WHT" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-red" value="red" />
                            <span class="color-indicator" style="background-color: #FF0000;"></span>
                            Red
                        </label>
                        <button class="indicator-config-btn" data-color="RED" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-turquoise" value="turquoise" />
                            <span class="color-indicator" style="background-color: #00FFFF;"></span>
                            Turquoise
                        </label>
                        <button class="indicator-config-btn" data-color="TRQ" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-yellow" value="yellow" />
                            <span class="color-indicator" style="background-color: #FFFF00;"></span>
                            Yellow
                        </label>
                        <button class="indicator-config-btn" data-color="YLW" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-pink" value="pink" />
                            <span class="color-indicator" style="background-color: #FF00FF;"></span>
                            Pink
                        </label>
                        <button class="indicator-config-btn" data-color="PNK" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-blue" value="blue" />
                            <span class="color-indicator" style="background-color: #0000FF;"></span>
                            Blue
                        </label>
                        <button class="indicator-config-btn" data-color="BLU" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                </div>

                <div id="tab-keying-options" class="tab-panel">
                    <div class="property-group check-char-title" style="margin-bottom: 6px; color: var(--vscode-descriptionForeground); font-weight: 600;">Character (Input/Both)</div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-me" />
                            Mandatory entry (ME)
                        </label>
                        <button class="indicator-config-btn" data-check="ME" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-er" />
                            Automatic record advance (ER)
                        </label>
                        <button class="indicator-config-btn" data-check="ER" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-mf" />
                            Mandatory fill (MF)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-fe" />
                            Field exit key required (FE)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-rb" />
                            Right adjust blank fill (RB)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-rz" />
                            Right adjust zero fill (RZ)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-rl" />
                            Move cursor right to left (RL)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-lc" />
                            Lowercase entry allowed (LC)
                        </label>
                    </div>

                    <div class="property-group check-num-title" style="margin: 10px 0 6px 0; color: var(--vscode-descriptionForeground); font-weight: 600;">Numeric (Input/Both)</div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-me" />
                            Mandatory entry (ME)
                        </label>
                        <button class="indicator-config-btn" data-check="ME" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-er" />
                            Automatic record advance (ER)
                        </label>
                        <button class="indicator-config-btn" data-check="ER" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-mf" />
                            Mandatory fill (MF)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-fe" />
                            Field exit key required (FE)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-rb" />
                            Right adjust blank fill (RB)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-rz" />
                            Right adjust zero fill (RZ)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-rl" />
                            Move cursor right to left (RL)
                        </label>
                    </div>
                </div>

                <div id="tab-general-keywords" class="tab-panel">
                    <div class="property-group dftval-group" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="prop-dftval-enabled" />
                            Default Value (DFTVAL)
                        </label>
                        <button class="indicator-config-btn" data-dftval="enabled" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group dftval-value-group" style="display: none;">
                        <label>Value</label>
                        <input type="text" id="prop-dftval-value" placeholder="Default value" />
                    </div>
                </div>
            </div>
            
            <div style="padding: 16px; border-top: 1px solid var(--border-color); background-color: var(--panel-background);">
                <div class="property-group" style="margin-bottom: 8px;">
                    <button id="apply-properties" style="width: 100%; padding: 8px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Apply Changes</button>
                </div>
                <div class="property-group" style="margin: 0;">
                    <button id="delete-field" style="width: 100%; padding: 8px; background-color: var(--error-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Delete Field</button>
                </div>
            </div>
        `;

    const tabsContainer = propertiesPanel.querySelector('.properties-tabs');
    if (tabsContainer) {
        const generalKeywordsBtn = document.createElement('button');
        generalKeywordsBtn.className = 'properties-tab';
        generalKeywordsBtn.setAttribute('data-tab', 'general-keywords');
        generalKeywordsBtn.textContent = 'General keywords';
        tabsContainer.appendChild(generalKeywordsBtn);
    }

    const usageSelect = document.getElementById('prop-usage');
    const usageRestrictedGroups = Array.from(document.querySelectorAll('.usage-not-output-attr'));
    const keyingTabBtn = document.querySelector('.properties-tab[data-tab="keying-options"]');
    const keyingTabPanel = document.getElementById('tab-keying-options');
    const generalKeywordsTabBtn = document.querySelector('.properties-tab[data-tab="general-keywords"]');
    const generalKeywordsTabPanel = document.getElementById('tab-general-keywords');
    const checkCharGroups = Array.from(document.querySelectorAll('.check-char'));
    const checkNumGroups = Array.from(document.querySelectorAll('.check-num'));
    const checkCharTitles = Array.from(document.querySelectorAll('.check-char-title'));
    const checkNumTitles = Array.from(document.querySelectorAll('.check-num-title'));
    const dftvalGroup = document.querySelector('.dftval-group');
    const dftvalValueGroup = document.querySelector('.dftval-value-group');
    const updateUsageRestrictedAttrs = () => {
        const show = field.type !== 'constant' && usageSelect && usageSelect.value !== 'O';
        usageRestrictedGroups.forEach(group => {
            group.style.display = show ? 'flex' : 'none';
        });
        const showKeying = field.type !== 'constant' && usageSelect && usageSelect.value !== 'O';
        if (keyingTabBtn) {
            keyingTabBtn.style.display = showKeying ? 'inline-flex' : 'none';
        }
        if (keyingTabPanel) {
            keyingTabPanel.style.display = showKeying ? '' : 'none';
        }
        if (showKeying) {
            const typeSelect = document.getElementById('prop-type');
            const dataType = typeSelect ? typeSelect.value : field.dataType;
            const isChar = dataType === 'character' || dataType === 'double' || dataType === 'date' || dataType === 'time' || dataType === 'timestamp';
            const isNumeric = ['packed', 'zoned', 'float'].includes(dataType);
            checkCharGroups.forEach(g => {g.style.display = isChar ? 'flex' : 'none';});
            checkNumGroups.forEach(g => {g.style.display = isNumeric ? 'flex' : 'none';});
            checkCharTitles.forEach(t => {t.style.display = isChar ? '' : 'none';});
            checkNumTitles.forEach(t => {t.style.display = isNumeric ? '' : 'none';});
        }
        if (!showKeying && keyingTabBtn && keyingTabBtn.classList.contains('active')) {
            keyingTabBtn.classList.remove('active');
            keyingTabPanel?.classList.remove('active');
            const basicTab = document.querySelector('.properties-tab[data-tab="basic"]');
            const basicPanel = document.getElementById('tab-basic');
            basicTab?.classList.add('active');
            basicPanel?.classList.add('active');
        }
        const showDFTVAL = field.type !== 'constant' && usageSelect && (usageSelect.value === 'O' || usageSelect.value === 'B');
        if (dftvalGroup) {
            dftvalGroup.style.display = showDFTVAL ? 'flex' : 'none';
        }
        if (dftvalValueGroup) {
            dftvalValueGroup.style.display = showDFTVAL ? 'block' : 'none';
        }
        if (generalKeywordsTabBtn) {
            generalKeywordsTabBtn.style.display = showDFTVAL ? 'inline-flex' : 'none';
        }
        if (generalKeywordsTabPanel) {
            generalKeywordsTabPanel.style.display = showDFTVAL ? '' : 'none';
        }
    };
    updateUsageRestrictedAttrs();
    if (usageSelect) {
        usageSelect.addEventListener('change', updateUsageRestrictedAttrs);
    }
    const typeSelect = document.getElementById('prop-type');
    if (typeSelect) {
        typeSelect.addEventListener('change', updateUsageRestrictedAttrs);
    }

    document.querySelectorAll('.properties-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;

            document.querySelectorAll('.properties-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });

    function updateShiftOptions(type) {
        const shiftSelect = document.getElementById('prop-shift');
        if (!shiftSelect) {return;}

        let options = '';
        switch(type) {
            case 'character':
                options = `
                        <option value="A">A - Alphanumeric</option>
                        <option value="X">X - Alphabetic</option>
                        <option value="N">N - Numeric Character Shift</option>
                        <option value="I">I - Inhibit Keyboard</option>
                        <option value="D">D - Digits Only</option>
                        <option value="M">M - Numeric Character Only</option>
                        <option value="W">W - Katakana</option>
                    `;
                break;
            case 'zoned':
                options = `
                        <option value="Y">Y - Numeric Only</option>
                        <option value="S">S - Signed Numeric</option>
                        <option value="N">N - Numeric Character Shift</option>
                        <option value="I">I - Inhibit Keyboard</option>
                        <option value="D">D - Digits Only</option>
                    `;
                break;
            case 'float':
                options = `
                        <option value="SINGLE">Sencilla</option>
                        <option value="DOUBLE">Doble</option>
                    `;
                break;
            case 'double':
                options = `
                        <option value="J">J - DBCS Only</option>
                        <option value="E">E - DBCS Either</option>
                        <option value="O">O - DBCS Open</option>
                        <option value="G">G - Graphic DBCS</option>
                    `;
                break;
            case 'date':
            case 'time':
            case 'timestamp':
                options = '<option value="">None</option>';
                break;
            default:
                options = '<option value="">None</option>';
        }
        shiftSelect.innerHTML = options;
    }

    function updateLengthState(type) {
        const lengthInput = document.getElementById('prop-length');
        if (!lengthInput) {return;}

        const shouldLockLength = field.type === 'constant' || type === 'date' || type === 'time' || type === 'timestamp';
        lengthInput.readOnly = shouldLockLength;

        if (shouldLockLength) {
            lengthInput.style.backgroundColor = '#2d2d2d';
            lengthInput.style.cursor = 'not-allowed';
        } else {
            lengthInput.style.backgroundColor = '';
            lengthInput.style.cursor = '';
        }

        if (type === 'date') {
            lengthInput.value = '10';
        } else if (type === 'time') {
            lengthInput.value = '8';
        } else if (type === 'timestamp') {
            lengthInput.value = '26';
        }
    }

    if (field.type !== 'constant') {
        const typeSelect = document.getElementById('prop-type');
        const shiftSelect = document.getElementById('prop-shift');
        if (typeSelect && shiftSelect) {
            updateShiftOptions(typeSelect.value);
            updateLengthState(typeSelect.value);

            if (field.dataType === 'float' && field.precision) {
                shiftSelect.value = field.precision;
            } else if (field.shift) {
                shiftSelect.value = field.shift;
            }

            typeSelect.addEventListener('change', function() {
                updateShiftOptions(this.value);
                updateLengthState(this.value);
            });
        }
    } else {
        updateLengthState(field.dataType);
    }

    document.getElementById('apply-properties').addEventListener('click', function() {
        applyFieldProperties(field);
    });

    document.getElementById('delete-field').addEventListener('click', function() {
        Logger.ui('Delete button clicked for field:', field.name);
        deleteField(field);
    });

    if (field.type !== 'constant') {
        const nameInput = document.getElementById('prop-name');
        if (nameInput && field.name.startsWith(field.type.toUpperCase())) {
            setTimeout(() => {
                nameInput.focus();
                nameInput.select();
            }, 100);
        }
    }

    if (field.colors && field.colors.length > 0) {
        const colorMap = {
            'GRN': 'color-green',
            'WHT': 'color-white',
            'RED': 'color-red',
            'TRQ': 'color-turquoise',
            'YLW': 'color-yellow',
            'PNK': 'color-pink',
            'BLU': 'color-blue'
        };

        field.colors.forEach(color => {
            const checkboxId = colorMap[color];
            if (checkboxId) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = true;
                    Logger.debug(`Pre-selected color ${color} (${checkboxId}) for field ${field.name}`);
                }
            }
        });
    } else if (field.color) {
        const colorMap = {
            'GRN': 'color-green',
            'WHT': 'color-white',
            'RED': 'color-red',
            'TRQ': 'color-turquoise',
            'YLW': 'color-yellow',
            'PNK': 'color-pink',
            'BLU': 'color-blue'
        };

        const checkboxId = colorMap[field.color];
        if (checkboxId) {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = true;
                Logger.debug(`Pre-selected color ${field.color} (${checkboxId}) for field ${field.name}`);
            }
        }
    }

    const setCheckState = (id, value) => {
        const el = document.getElementById(id);
        if (el) {el.checked = Boolean(value);}
    };
    const dataTypeForChecks = field.dataType;
    const isCharCheck = dataTypeForChecks === 'character' || dataTypeForChecks === 'double' || dataTypeForChecks === 'date' || dataTypeForChecks === 'time' || dataTypeForChecks === 'timestamp';
    const isNumericCheck = ['packed', 'zoned', 'float'].includes(dataTypeForChecks);
    const checkOptions = field.checkOptions || {};
    if (isCharCheck) {
        setCheckState('check-me', checkOptions.ME);
        setCheckState('check-er', checkOptions.ER);
        setCheckState('check-mf', checkOptions.MF);
        setCheckState('check-fe', checkOptions.FE);
        setCheckState('check-rb', checkOptions.RB);
        setCheckState('check-rz', checkOptions.RZ);
        setCheckState('check-rl', checkOptions.RL);
        setCheckState('check-lc', checkOptions.LC);
    }
    if (isNumericCheck) {
        setCheckState('check-num-me', checkOptions.ME);
        setCheckState('check-num-er', checkOptions.ER);
        setCheckState('check-num-mf', checkOptions.MF);
        setCheckState('check-num-fe', checkOptions.FE);
        setCheckState('check-num-rb', checkOptions.RB);
        setCheckState('check-num-rz', checkOptions.RZ);
        setCheckState('check-num-rl', checkOptions.RL);
    }

    if (field.attributes) {
        Logger.parse('Field has attributes:', field.attributes);
        if (field.attributes.underline) {
            const underlineCheckbox = document.getElementById('attr-underline');
            if (underlineCheckbox) {
                underlineCheckbox.checked = true;
                Logger.debug('Checked underline checkbox');
            }
        }
        if (field.attributes.reverse) {
            const reverseCheckbox = document.getElementById('attr-reverse-image');
            if (reverseCheckbox) {
                reverseCheckbox.checked = true;
                Logger.debug('Checked reverse checkbox');
            }
        }
        if (field.attributes.blink) {
            const blinkCheckbox = document.getElementById('attr-blink');
            if (blinkCheckbox) {
                blinkCheckbox.checked = true;
                Logger.debug('Checked blink checkbox');
            }
        }
        if (field.attributes.highlight) {
            const highlightCheckbox = document.getElementById('attr-high-intensity');
            if (highlightCheckbox) {
                highlightCheckbox.checked = true;
                Logger.debug('Checked highlight checkbox');
            }
        }
        if (field.attributes.cursorPosition) {
            const cursorCheckbox = document.getElementById('attr-cursor-position');
            if (cursorCheckbox) {
                cursorCheckbox.checked = true;
                Logger.debug('Checked cursor position checkbox');
            }
        }
        if (field.attributes.columnSeparator) {
            const columnCheckbox = document.getElementById('attr-column-separator');
            if (columnCheckbox) {
                columnCheckbox.checked = true;
                Logger.debug('Checked column separator checkbox');
            }
        }
        if (field.attributes.nonDisplay) {
            const nonDisplayCheckbox = document.getElementById('attr-non-display');
            if (nonDisplayCheckbox) {
                nonDisplayCheckbox.checked = true;
                Logger.debug('Checked non-display checkbox');
            }
        }
        if (field.attributes.modifiedDataTag) {
            const mdtCheckbox = document.getElementById('attr-mdt');
            if (mdtCheckbox) {
                mdtCheckbox.checked = true;
                Logger.debug('Checked modified data tag checkbox');
            }
        }
        if (field.attributes.protect) {
            const protectCheckbox = document.getElementById('attr-protect');
            if (protectCheckbox) {
                protectCheckbox.checked = true;
                Logger.debug('Checked protect checkbox');
            }
        }
        if (field.attributes.operatorId) {
            const oidCheckbox = document.getElementById('attr-oid');
            if (oidCheckbox) {
                oidCheckbox.checked = true;
                Logger.debug('Checked operator ID checkbox');
            }
        }
        if (field.attributes.selectLightPen) {
            const spCheckbox = document.getElementById('attr-select-pen');
            if (spCheckbox) {
                spCheckbox.checked = true;
                Logger.debug('Checked select by light pen checkbox');
            }
        }
    } else {
        Logger.debug('Field has no attributes object');
    }

    if (field.colorIndicators) {
        Logger.debug('Loading colorIndicators:', field.colorIndicators);
        for (const [color, indicatorData] of Object.entries(field.colorIndicators)) {
            const configKey = `color:${color}`;

            Logger.debug(`Processing color ${color}, indicatorData type:`, typeof indicatorData, indicatorData);

            if (Array.isArray(indicatorData)) {
                Logger.debug(`Color ${color} has old array format with ${indicatorData.length} indicators`);
                const indicatorSet = new Set();
                indicatorData.forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
                Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for color ${color} into config`);
            } else if (indicatorData.groups) {
                Logger.debug(`Color ${color} has groups format with ${indicatorData.groups.length} groups`);
                const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;

                if (isOr) {
                    indicatorConfigurations.set(configKey, {
                        groups: indicatorData.groups,
                        isOr: true
                    });
                    Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for color ${color} into config`);
                } else {
                    const indicatorSet = new Set();
                    indicatorData.groups.forEach((group, idx) => {
                        Logger.debug(`  Group ${idx}: ${group.indicators.length} indicators`);
                        group.indicators.forEach(ind => {
                            Logger.debug(`    Adding indicator:`, ind);
                            indicatorSet.add(JSON.stringify(ind));
                        });
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for color ${color} into config`);
                }
            } else {
                Logger.warn(`Color ${color} has unexpected format:`, indicatorData);
            }
        }
    }

    if (field.attributeIndicators) {
        if (field.hasGroupedDspatr) {
            const firstAttr = Object.keys(field.attributeIndicators)[0];
            const sharedIndicatorData = field.attributeIndicators[firstAttr] || [];

            const isOrFormat = !Array.isArray(sharedIndicatorData) && 
                               sharedIndicatorData.groups && 
                               sharedIndicatorData.isOr === true && 
                               sharedIndicatorData.groups.length > 1;

            const attrNames = ['underline', 'reverse', 'blink', 'highlight', 'cursorPosition', 'columnSeparator', 'nonDisplay'];

            if (isOrFormat) {
                attrNames.forEach(attrName => {
                    if (field.attributes && field.attributes[attrName]) {
                        const configKey = `attr:${attrName}`;
                        indicatorConfigurations.set(configKey, {
                            groups: sharedIndicatorData.groups,
                            isOr: true
                        });
                    }
                });
                Logger.debug(`Loaded ${sharedIndicatorData.groups.length} groups (OR format) for grouped DSPATR`);
            } else {
                const flatIndicators = [];
                if (Array.isArray(sharedIndicatorData)) {
                    flatIndicators.push(...sharedIndicatorData);
                } else if (sharedIndicatorData.groups) {
                    sharedIndicatorData.groups.forEach(group => {
                        flatIndicators.push(...group.indicators);
                    });
                }

                attrNames.forEach(attrName => {
                    if (field.attributes && field.attributes[attrName]) {
                        const configKey = `attr:${attrName}`;
                        const indicatorSet = new Set();
                        flatIndicators.forEach(ind => {
                            indicatorSet.add(JSON.stringify(ind));
                        });
                        indicatorConfigurations.set(configKey, indicatorSet);
                    }
                });
                Logger.debug(`Loaded ${flatIndicators.length} shared indicators (AND format) for grouped DSPATR`);
            }
        } else {
            for (const [attrName, indicatorData] of Object.entries(field.attributeIndicators)) {
                const configKey = `attr:${attrName}`;

                if (Array.isArray(indicatorData)) {
                    const indicatorSet = new Set();
                    indicatorData.forEach(ind => {
                        indicatorSet.add(JSON.stringify(ind));
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for attribute ${attrName} into config`);
                } else if (indicatorData.groups) {
                    Logger.debug(`    Checking OR format for ${attrName}: isOr=${indicatorData.isOr}, groups.length=${indicatorData.groups.length}`);
                    const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;
                    Logger.debug(`    Result: isOr=${isOr}`);

                    if (isOr) {
                        indicatorConfigurations.set(configKey, {
                            groups: indicatorData.groups,
                            isOr: true
                        });
                        Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for attribute ${attrName} into config`);
                    } else {
                        const indicatorSet = new Set();
                        indicatorData.groups.forEach(group => {
                            group.indicators.forEach(ind => {
                                indicatorSet.add(JSON.stringify(ind));
                            });
                        });
                        indicatorConfigurations.set(configKey, indicatorSet);
                        Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for attribute ${attrName} into config`);
                    }
                }
            }
        }
    }

    if (field.checkIndicators) {
        Logger.debug('Loading checkIndicators:', field.checkIndicators);
        for (const [code, indicatorData] of Object.entries(field.checkIndicators)) {
            const configKey = `check:${code}`;

            Logger.debug(`Processing CHECK ${code}, indicatorData type:`, typeof indicatorData, indicatorData);

            if (Array.isArray(indicatorData)) {
                Logger.debug(`CHECK ${code} has old array format with ${indicatorData.length} indicators`);
                const indicatorSet = new Set();
                indicatorData.forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
                Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for CHECK ${code} into config`);
            } else if (indicatorData.groups) {
                Logger.debug(`CHECK ${code} has groups format with ${indicatorData.groups.length} groups`);
                const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;

                if (isOr) {
                    indicatorConfigurations.set(configKey, {
                        groups: indicatorData.groups,
                        isOr: true
                    });
                    Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for CHECK ${code} into config`);
                } else {
                    const indicatorSet = new Set();
                    indicatorData.groups.forEach(group => {
                        group.indicators.forEach(ind => {
                            indicatorSet.add(JSON.stringify(ind));
                        });
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for CHECK ${code} into config`);
                }
            }
        }
    }

    const dftvalEnabledCheckbox = document.getElementById('prop-dftval-enabled');
    const dftvalValueInput = document.getElementById('prop-dftval-value');
    if (field.dftval) {
        if (dftvalEnabledCheckbox) {
            dftvalEnabledCheckbox.checked = true;
        }
        if (dftvalValueInput && field.dftval.value) {
            dftvalValueInput.value = field.dftval.value;
            dftvalValueInput.parentElement.style.display = 'block';
        }

        if (field.dftvalIndicators) {
            const configKey = 'dftval:enabled';
            const indicatorData = field.dftvalIndicators;

            Logger.debug('Processing DFTVAL indicatorData type:', typeof indicatorData, indicatorData);

            if (Array.isArray(indicatorData)) {
                Logger.debug(`DFTVAL has old array format with ${indicatorData.length} indicators`);
                const indicatorSet = new Set();
                indicatorData.forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
                Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for DFTVAL into config`);
            } else if (indicatorData.groups) {
                Logger.debug(`DFTVAL has groups format with ${indicatorData.groups.length} groups`);
                const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;

                if (isOr) {
                    indicatorConfigurations.set(configKey, {
                        groups: indicatorData.groups,
                        isOr: true
                    });
                    Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for DFTVAL into config`);
                } else {
                    const indicatorSet = new Set();
                    indicatorData.groups.forEach((group, idx) => {
                        Logger.debug(`  DFTVAL Group ${idx}: ${group.indicators.length} indicators`);
                        group.indicators.forEach(ind => {
                            Logger.debug('    Adding DFTVAL indicator:', ind);
                            indicatorSet.add(JSON.stringify(ind));
                        });
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for DFTVAL into config`);
                }
            } else {
                Logger.warn('DFTVAL has unexpected format:', indicatorData);
            }
        }
    }

    if (dftvalEnabledCheckbox) {
        dftvalEnabledCheckbox.addEventListener('change', function() {
            if (dftvalValueGroup) {
                dftvalValueGroup.style.display = this.checked ? 'block' : 'none';
                if (this.checked && dftvalValueInput) {
                    dftvalValueInput.focus();
                }
            }
        });
    }

    setupIndicatorButtons();

    if (field.colorIndicators) {
        for (const [color, indicators] of Object.entries(field.colorIndicators)) {
            const hasIndicators = (Array.isArray(indicators) && indicators.length > 0) || 
                                 (indicators && indicators.groups && indicators.groups.length > 0);
            if (hasIndicators) {
                const btn = document.querySelector(`.indicator-config-btn[data-color="${color}"]`);
                setIndicatorButtonState(btn, indicators);
                const count = Array.isArray(indicators) ? indicators.length : 
                             indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                Logger.debug(`Marked color button for ${color} with ${count} indicators`);
            }
        }
    }

    if (field.attributeIndicators) {
        const attrToDataAttr = {
            'underline': 'underline',
            'reverse': 'reverse',
            'blink': 'blink',
            'highlight': 'highlight',
            'cursorPosition': 'cursorPosition',
            'columnSeparator': 'columnSeparator',
            'nonDisplay': 'nonDisplay',
            'modifiedDataTag': 'modifiedDataTag',
            'protect': 'protect',
            'operatorId': 'operatorId',
            'selectLightPen': 'selectLightPen'
        };

        for (const [attrName, indicators] of Object.entries(field.attributeIndicators)) {
            const hasIndicators = (Array.isArray(indicators) && indicators.length > 0) || 
                                 (indicators && indicators.groups && indicators.groups.length > 0);
            if (hasIndicators) {
                const dataAttr = attrToDataAttr[attrName];
                if (dataAttr) {
                    const btn = document.querySelector(`.indicator-config-btn[data-attr="${dataAttr}"]`);
                    setIndicatorButtonState(btn, indicators);
                    const count = Array.isArray(indicators) ? indicators.length : 
                                 indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                    Logger.debug(`Marked attribute button for ${attrName} with ${count} indicators`);
                }
            }
        }
    }

    if (field.checkIndicators) {
        ['ME', 'ER'].forEach(code => {
            const indicators = field.checkIndicators[code];
            if (indicators && indicators.groups && indicators.groups.length > 0) {
                const btn = document.querySelector(`.indicator-config-btn[data-check="${code}"]`);
                setIndicatorButtonState(btn, indicators);
                const count = indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                Logger.debug(`Marked CHECK(${code}) button with ${count} indicators`);
            }
        });
    }

    if (field.dftvalIndicators) {
        const hasIndicators = (Array.isArray(field.dftvalIndicators) && field.dftvalIndicators.length > 0) || 
                             (field.dftvalIndicators && field.dftvalIndicators.groups && field.dftvalIndicators.groups.length > 0);
        if (hasIndicators) {
            const btn = document.querySelector(`.indicator-config-btn[data-dftval="enabled"]`);
            setIndicatorButtonState(btn, field.dftvalIndicators);
            const count = Array.isArray(field.dftvalIndicators) ? field.dftvalIndicators.length : 
                         field.dftvalIndicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
            Logger.debug(`Marked DFTVAL button with ${count} indicators`);
        }
    }

    if (field.indicators) {
        const configKey = `field-indicators:${field.name}`;

        Logger.debug(`🔍 [${field.type.toUpperCase()}-IND-LOAD] Loading field indicators for ${field.name}`);
        Logger.debug(`🔍 [${field.type.toUpperCase()}-IND-LOAD] field.indicators:`, field.indicators);

        if (field.indicators.groups) {
            const indicatorData = {
                groups: field.indicators.groups.map(g => ({
                    indicators: g.indicators || []
                })),
                isOr: field.indicators.isOr || false
            };
            indicatorConfigurations.set(configKey, indicatorData);

            const btn = document.querySelector(`.indicator-config-btn[data-field-indicators="true"]`);
            if (btn) {
                Logger.debug('🔍 [FIELD-IND] About to call setIndicatorButtonState');
                Logger.debug('🔍 [FIELD-IND] field.indicators:', field.indicators);
                Logger.debug('🔍 [FIELD-IND] field.indicators.groups:', field.indicators.groups);

                if (field.indicators.groups.length > 0 && field.indicators.groups[0].indicators.length > 0) {
                    const firstInd = field.indicators.groups[0].indicators[0];
                    Logger.debug('🔍 [FIELD-IND] First indicator:', firstInd);
                    Logger.debug(`🔍 [FIELD-IND] First indicator.number type: ${typeof firstInd.number}`);
                    Logger.debug(`🔍 [FIELD-IND] First indicator.number value: "${firstInd.number}"`);
                }

                setIndicatorButtonState(btn, field.indicators);
                const count = field.indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                Logger.debug(`Marked field-level indicator button with ${count} indicators`);
            }
        }
    }
}
