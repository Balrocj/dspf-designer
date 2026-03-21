export function loadFunctionKeys(options) {
    const { getCurrentDocument, getCurrentRecord, createFunctionKeyRow } = options;
    const container = document.getElementById('function-keys-list');
    if (!container) {return;}

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();

    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    const functionKeysMap = {};

    for (let line of lines) {
        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            break;
        }

        if (inTargetRecord) {
            const cfMatch = line.match(/CF(\d+)\((\d+)(?:\s+'([^']*)')?\)/i);
            const caMatch = line.match(/CA(\d+)\((\d+)(?:\s+'([^']*)')?\)/i);

            if (cfMatch) {
                functionKeysMap[`F${parseInt(cfMatch[1])}`] = {
                    type: 'CF',
                    indicator: cfMatch[2],
                    description: cfMatch[3] || ''
                };
            } else if (caMatch) {
                functionKeysMap[`F${parseInt(caMatch[1])}`] = {
                    type: 'CA',
                    indicator: caMatch[2],
                    description: caMatch[3] || ''
                };
            }
        }
    }

    container.innerHTML = '';

    for (let i = 1; i <= 24; i++) {
        const key = `F${i}`;
        const fkData = functionKeysMap[key] || { type: '', indicator: '', description: '' };
        container.appendChild(createFunctionKeyRow({ fk: { key, ...fkData } }));
    }
}

export function createFunctionKeyRow(options) {
    const { fk = null, key, type, indicator, description, index = null, IdGenerator, saveFunctionKeys } = options;
    const row = document.createElement('div');
    row.className = 'function-key-row';
    const rowId = IdGenerator.generateUniqueId('fk-row');
    row.dataset.rowId = rowId;
    row.style.cssText = 'display: grid; grid-template-columns: 70px 240px 70px 1fr; gap: 8px; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 8px; align-items: center; min-width: 600px;';

    const resolvedFk = fk || { key, type, indicator, description };
    const resolvedKey = resolvedFk && resolvedFk.key ? resolvedFk.key : 'F1';
    const resolvedType = resolvedFk && resolvedFk.type ? resolvedFk.type : '';
    const resolvedIndicator = resolvedFk && resolvedFk.indicator ? resolvedFk.indicator : '';
    const resolvedDescription = resolvedFk && resolvedFk.description ? resolvedFk.description : '';

    row.innerHTML = `
        <select class="fk-key" style="width: 100%; padding: 4px;">
            ${generateFunctionKeyOptions(resolvedKey)}
        </select>
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
                <input type="radio" name="type-${rowId}" value="" ${resolvedType === '' ? 'checked' : ''} />
                <span style="font-size: 12px;">Unspecified</span>
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
                <input type="radio" name="type-${rowId}" value="CA" ${resolvedType === 'CA' ? 'checked' : ''} />
                <span style="font-size: 12px;">Attention</span>
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
                <input type="radio" name="type-${rowId}" value="CF" ${resolvedType === 'CF' ? 'checked' : ''} />
                <span style="font-size: 12px;">Function</span>
            </label>
        </div>
        <input type="number" class="fk-indicator" value="${resolvedIndicator}" placeholder="Ind" min="1" max="99" style="width: 100%; padding: 4px; text-align: center;" />
        <input type="text" class="fk-description" value="${resolvedDescription}" placeholder="Description" style="width: 100%; padding: 4px; min-width: 150px;" />
    `;

    row.querySelectorAll('select, input').forEach(el => {
        el.addEventListener('change', saveFunctionKeys);
        el.addEventListener('blur', saveFunctionKeys);
    });

    return row;
}

export function saveFunctionKeys(options) {
    const {
        Logger,
        isReadOnly,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        updateDocumentInEditor
    } = options;

    if (isReadOnly) {
        Logger.warn('Cannot save function keys in read-only mode');
        return;
    }

    Logger.ui('Saving function keys...');

    const container = document.getElementById('function-keys-list');
    if (!container) {return;}

    const configuredKeys = [];
    const rows = container.querySelectorAll('.function-key-row');

    rows.forEach(row => {
        const keySelect = row.querySelector('.fk-key');
        const typeRadios = row.querySelectorAll('input[type="radio"]');
        const indicatorInput = row.querySelector('.fk-indicator');
        const descriptionInput = row.querySelector('.fk-description');

        const key = keySelect.value;
        let type = '';
        typeRadios.forEach(radio => {
            if (radio.checked) {
                type = radio.value;
            }
        });
        const indicator = indicatorInput.value.trim();
        const description = descriptionInput.value.trim();

        if (type && indicator) {
            configuredKeys.push({ key, type, indicator, description });
        }
    });

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();
    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    let recordLineIndex = -1;
    let insertIndex = -1;
    let recordStartIndex = -1;
    const linesToRemove = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            recordStartIndex = i;
            recordLineIndex = i;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            insertIndex = i;
            break;
        }

        if (inTargetRecord) {
            if (line.match(/CF\d+\(/) || line.match(/CA\d+\(/) ||
                line.includes('PAGEDOWN(') || line.includes('PAGEUP(')) {
                linesToRemove.push(i);
            }
        }
    }

    if (recordLineIndex !== -1) {
        insertIndex = recordLineIndex + 1;
    } else if (insertIndex === -1) {
        insertIndex = lines.length;
    }

    for (let i = linesToRemove.length - 1; i >= 0; i--) {
        const removedIndex = linesToRemove[i];
        lines.splice(removedIndex, 1);

        if (removedIndex < insertIndex) {
            insertIndex--;
        }
    }

    const newLines = [];
    configuredKeys.forEach(fk => {
        let keyword = '';

        if (fk.key === 'PAGEDOWN' || fk.key === 'PAGEUP') {
            keyword = fk.key;
        } else {
            const fNum = fk.key.substring(1).padStart(2, '0');
            keyword = `${fk.type}${fNum}`;
        }

        const indicator = fk.indicator.padStart(2, '0');
        const desc = fk.description ? ` '${fk.description}'` : '';
        const line = `     A                                      ${keyword}(${indicator}${desc})`;
        newLines.push(line);
    });

    lines.splice(insertIndex, 0, ...newLines);

    const nextDocument = lines.join('\n');
    setCurrentDocument(nextDocument);
    updateDocumentInEditor();

    Logger.success(`Saved ${configuredKeys.length} function keys to DDS`);
}

function generateFunctionKeyOptions(selectedKey) {
    const keys = [];
    for (let i = 1; i <= 24; i++) {
        keys.push(`F${i}`);
    }

    return keys.map(k => `<option value="${k}" ${k === selectedKey ? 'selected' : ''}>${k}</option>`).join('');
}
