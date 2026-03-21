export function applyFieldProperties({
    field,
    Logger,
    getSelectedField,
    setSelectedField,
    getFields,
    getCurrentRecord,
    getCurrentDocument,
    setCurrentDocument,
    applyColorChanges,
    getAttributeCheckboxMap,
    transferIndicators,
    KEYWORD_ATTRIBUTE_ALLOW_LIST,
    updateFieldInDds,
    parseDspfFields,
    updateSourceViewUI,
    vscode,
    showFieldProperties,
    selectField
}) {
    try {
        const selectedField = getSelectedField ? getSelectedField() : null;
        const fields = getFields ? getFields() : [];
        const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

        if (selectedField && selectedField.id === field.id) {
            if (selectedField.indicators) {
                field.indicators = selectedField.indicators;
            }
            if (selectedField.fieldIndicatorsModified) {
                field.fieldIndicatorsModified = selectedField.fieldIndicatorsModified;
            }
            if (selectedField.colorIndicatorsModified) {
                field.colorIndicatorsModified = selectedField.colorIndicatorsModified;
            }
            if (selectedField.attributeIndicatorsModified) {
                field.attributeIndicatorsModified = selectedField.attributeIndicatorsModified;
            }
            if (selectedField.dftvalIndicatorsModified) {
                field.dftvalIndicatorsModified = selectedField.dftvalIndicatorsModified;
            }
        }

        const oldField = {
            ...field,
            attributes: field.attributes ? { ...field.attributes } : undefined,
            colorIndicators: field.colorIndicators ? JSON.parse(JSON.stringify(field.colorIndicators)) : undefined,
            attributeIndicators: field.attributeIndicators ? JSON.parse(JSON.stringify(field.attributeIndicators)) : undefined,
            checkOptions: field.checkOptions ? { ...field.checkOptions } : undefined,
            checkIndicators: field.checkIndicators ? JSON.parse(JSON.stringify(field.checkIndicators)) : undefined,
            keywordIndicators: field.keywordIndicators ? JSON.parse(JSON.stringify(field.keywordIndicators)) : undefined,
            dftval: field.dftval ? { ...field.dftval } : undefined,
            dftvalIndicators: field.dftvalIndicators ? JSON.parse(JSON.stringify(field.dftvalIndicators)) : undefined
        };

        Logger.debug('Applying properties to field:', oldField.name);

        if (field.type === 'keyword' || field.isKeyword) {
            field.row = parseInt(document.getElementById('prop-row').value);
            field.col = parseInt(document.getElementById('prop-col').value);

            applyColorChanges(field);

            const attributeMap = getAttributeCheckboxMap(KEYWORD_ATTRIBUTE_ALLOW_LIST);

            if (!field.attributes) {
                field.attributes = {};
            }

            const selectedKeywordAttrs = [];
            for (const [attrName, checkboxId] of Object.entries(attributeMap)) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox && checkbox.checked) {
                    field.attributes[attrName] = true;
                    selectedKeywordAttrs.push(attrName);
                } else {
                    delete field.attributes[attrName];
                    Logger.debug(`Attribute ${attrName} removed from keyword ${field.name}`);
                }
            }

            transferIndicators({
                kind: 'attr',
                keys: selectedKeywordAttrs,
                field: field,
                fieldType: 'keyword',
                attrFormat: 'individual'
            });

            if (Object.keys(field.attributes).length === 0) {
                delete field.attributes;
            }

            transferIndicators({
                kind: 'keyword',
                keys: [field.name],
                field: field,
                fieldType: 'keyword'
            });

            Logger.debug('Old keyword:', oldField);
            Logger.debug('New keyword:', field);

            updateFieldInDds(field, oldField);

            const latestDocument = getCurrentDocument ? getCurrentDocument() : '';
            parseDspfFields(latestDocument);

            const updatedField = fields.find(f => f.name === field.name && f.record === currentRecord);
            if (updatedField) {
                if (setSelectedField) {
                    setSelectedField(updatedField);
                }
                selectField(updatedField);
                showFieldProperties(updatedField);
                Logger.debug('Re-selected keyword after re-parse:', updatedField.name);
            }

            updateSourceViewUI({
                Logger,
                vscode,
                getCurrentDocument,
                setCurrentDocument,
                getCurrentRecord,
                parseDspfFields
            });
            Logger.debug('Source view synchronized after keyword update');

            vscode.postMessage({
                type: 'applyChangesSuccess',
                message: `Keyword "${field.name}" updated successfully`
            });

            showFieldProperties(field);

            Logger.success('Keyword properties applied and DDS updated');
            return;
        }

        if (field.type !== 'constant') {
            const nameInput = document.getElementById('prop-name');
            if (nameInput) {
                const newName = nameInput.value.trim().toUpperCase();

                Logger.debug('Name validation - Field ID:', field.id, 'Old name:', oldField.name, 'New name:', newName, 'Current record:', currentRecord);

                if (!newName) {
                    alert('Field name cannot be empty.');
                    return;
                }

                if (newName !== oldField.name) {
                    Logger.debug('Name changed, checking for duplicates...');
                    Logger.debug('Current record:', currentRecord);
                    Logger.debug('All fields:', fields.map(f => `${f.name} (record: ${f.record || 'undefined'})`));

                    const fieldsInCurrentRecord = fields.filter(f => {
                        return f.record === currentRecord || (!f.record && currentRecord);
                    });

                    const duplicateField = fieldsInCurrentRecord.find(f =>
                        f.id !== field.id &&
                        f.name === newName
                    );

                    Logger.debug('Duplicate field found:', duplicateField);

                    if (duplicateField) {
                        vscode.postMessage({
                            type: 'error',
                            message: `A field with the name "${newName}" already exists in record "${currentRecord}".`
                        });

                        nameInput.value = oldField.name;
                        return;
                    }
                }

                field.name = newName;
            }
        }

        field.row = parseInt(document.getElementById('prop-row').value);
        field.col = parseInt(document.getElementById('prop-col').value);
        field.length = parseInt(document.getElementById('prop-length').value) || null;

        if (field.type !== 'constant') {
            const decimalsInput = document.getElementById('prop-decimals');
            if (decimalsInput) {
                field.decimals = (field.dataType === 'double') ? 0 : (parseInt(decimalsInput.value) || 0);
            }
        }

        if (field.type !== 'constant') {
            const usageSelect = document.getElementById('prop-usage');
            if (usageSelect) {
                field.usage = usageSelect.value;
                Logger.debug('Usage updated to:', field.usage);
            }

            const typeSelect = document.getElementById('prop-type');
            if (typeSelect) {
                field.dataType = typeSelect.value;
                Logger.debug('Data type updated to:', field.dataType);
                if (field.dataType === 'date') {
                    field.length = 10;
                    field.decimals = 0;
                    delete field.shift;
                    delete field.precision;
                } else if (field.dataType === 'time') {
                    field.length = 8;
                    field.decimals = 0;
                    delete field.shift;
                    delete field.precision;
                } else if (field.dataType === 'timestamp') {
                    field.length = 26;
                    field.decimals = 0;
                    delete field.shift;
                    delete field.precision;
                }
            }

            const shiftSelect = document.getElementById('prop-shift');
            if (shiftSelect) {
                if (field.dataType === 'float') {
                    field.precision = shiftSelect.value;
                    Logger.debug('Precision updated to:', field.precision);
                } else if (field.dataType === 'zoned' || field.dataType === 'double') {
                    field.shift = shiftSelect.value;
                    Logger.debug('Shift updated to:', field.shift);
                }
            }
        }

        if (field.type === 'constant') {
            field.value = document.getElementById('prop-value').value;
        }

        applyColorChanges(field);

        if (field.type === 'constant' || field.type !== 'keyword') {
            const attributeMap = getAttributeCheckboxMap();

            if (!field.attributes) {
                field.attributes = {};
            }

            const selectedAttrs = [];
            for (const [attrName, checkboxId] of Object.entries(attributeMap)) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox && checkbox.checked) {
                    field.attributes[attrName] = true;
                    selectedAttrs.push(attrName);
                } else {
                    delete field.attributes[attrName];
                    Logger.debug(`Attribute ${attrName} removed from field ${field.name}`);
                }
            }

            const attrFormat = field.hasGroupedDspatr ? 'grouped' : 'individual';
            const attrIndicatorsModified = transferIndicators({
                kind: 'attr',
                keys: selectedAttrs,
                field: field,
                fieldType: 'field',
                attrFormat: attrFormat
            });

            if (Object.keys(field.attributes).length === 0) {
                delete field.attributes;
            }

            if (field.hasGroupedDspatr && !attrIndicatorsModified) {
                const oldAttrSet = new Set(Object.keys(oldField.attributes || {}).filter(k => oldField.attributes[k]));
                const newAttrSet = new Set(Object.keys(field.attributes || {}).filter(k => field.attributes[k]));

                const setsAreDifferent = oldAttrSet.size !== newAttrSet.size ||
                    [...oldAttrSet].some(attr => !newAttrSet.has(attr));

                if (setsAreDifferent) {
                    field.attributeIndicatorsModified = true;
                    Logger.debug('Grouped DSPATR format detected attribute changes, will regenerate line');
                }
            }
        }

        if (field.type !== 'constant' && field.usage !== 'O') {
            const dataTypeForChecks = field.dataType;
            const isCharCheck = dataTypeForChecks === 'character' || dataTypeForChecks === 'double';
            const isNumericCheck = ['packed', 'zoned', 'float'].includes(dataTypeForChecks);
            const newCheckOptions = {};
            const applyCheckValue = (id, code) => {
                const el = document.getElementById(id);
                if (el && el.checked) {newCheckOptions[code] = true;}
            };
            if (isCharCheck) {
                applyCheckValue('check-me', 'ME');
                applyCheckValue('check-er', 'ER');
                applyCheckValue('check-mf', 'MF');
                applyCheckValue('check-fe', 'FE');
                applyCheckValue('check-rb', 'RB');
                applyCheckValue('check-rz', 'RZ');
                applyCheckValue('check-rl', 'RL');
                applyCheckValue('check-lc', 'LC');
            }
            if (isNumericCheck) {
                applyCheckValue('check-num-me', 'ME');
                applyCheckValue('check-num-er', 'ER');
                applyCheckValue('check-num-mf', 'MF');
                applyCheckValue('check-num-fe', 'FE');
                applyCheckValue('check-num-rb', 'RB');
                applyCheckValue('check-num-rz', 'RZ');
                applyCheckValue('check-num-rl', 'RL');
            }

            if (Object.keys(newCheckOptions).length > 0) {
                field.checkOptions = newCheckOptions;
            } else {
                delete field.checkOptions;
            }

            const allowedIndicatorCodes = ['ME', 'ER'];
            let checkIndicatorsModified = false;
            if (!field.checkIndicators) {field.checkIndicators = {};}
            allowedIndicatorCodes.forEach(code => {
                if (selectedField && selectedField.checkIndicators && selectedField.checkIndicators[code]) {
                    field.checkIndicators[code] = selectedField.checkIndicators[code];
                    checkIndicatorsModified = true;
                    Logger.debug(`Transferred CHECK(${code}) indicators from selectedField:`, field.checkIndicators[code]);
                } else if (field.checkIndicators[code] && !(newCheckOptions && newCheckOptions[code])) {
                    delete field.checkIndicators[code];
                    checkIndicatorsModified = true;
                }
            });
            Object.keys(field.checkIndicators).forEach(code => {
                if (!newCheckOptions[code]) {delete field.checkIndicators[code];}
            });
            if (Object.keys(field.checkIndicators).length === 0) {
                delete field.checkIndicators;
            }
            if (checkIndicatorsModified) {
                field.checkIndicatorsModified = true;
            }
        } else {
            delete field.checkOptions;
            delete field.checkIndicators;
        }

        if (field.type !== 'constant' && (field.usage === 'O' || field.usage === 'B')) {
            const dftvalCheckbox = document.getElementById('prop-dftval-enabled');
            const dftvalValueInput = document.getElementById('prop-dftval-value');

            if (dftvalCheckbox && dftvalCheckbox.checked && dftvalValueInput) {
                const dftvalValue = dftvalValueInput.value.trim();
                if (dftvalValue) {
                    field.dftval = { value: dftvalValue };
                    Logger.debug(`DFTVAL set to '${dftvalValue}' for field ${field.name}`);

                    if (selectedField && selectedField.dftvalIndicators) {
                        field.dftvalIndicators = selectedField.dftvalIndicators;
                        Logger.debug('Transferred DFTVAL indicators from selectedField:', field.dftvalIndicators);
                    }
                } else {
                    delete field.dftval;
                    delete field.dftvalIndicators;
                }
            } else {
                delete field.dftval;
                delete field.dftvalIndicators;
            }
        } else {
            delete field.dftval;
            delete field.dftvalIndicators;
        }

        Logger.debug('Old field:', oldField);
        Logger.debug('New field:', field);

        const positionChanged = oldField.row !== field.row || oldField.col !== field.col;
        const nameChanged = oldField.name !== field.name;
        const indicatorsModified = Boolean(
            field.colorIndicatorsModified ||
            field.attributeIndicatorsModified ||
            field.keywordIndicatorsModified ||
            field.fieldIndicatorsModified ||
            field.dftvalIndicatorsModified
        );

        const oldColors = JSON.stringify(oldField.colors || [oldField.color].filter(Boolean));
        const newColors = JSON.stringify(field.colors || [field.color].filter(Boolean));
        const colorChanged = oldColors !== newColors;

        const oldAttrs = JSON.stringify(oldField.attributes || {});
        const newAttrs = JSON.stringify(field.attributes || {});
        const attributesChanged = oldAttrs !== newAttrs;

        const usageChanged = oldField.usage !== field.usage;

        const dataTypeChanged = oldField.dataType !== field.dataType;
        const lengthChanged = oldField.length !== field.length;
        const decimalsChanged = oldField.decimals !== field.decimals;
        const shiftChanged = (field.dataType === 'zoned' || field.dataType === 'double') && oldField.shift !== field.shift;
        const precisionChanged = field.dataType === 'float' && oldField.precision !== field.precision;
        const checkOptionsChanged = JSON.stringify(oldField.checkOptions || {}) !== JSON.stringify(field.checkOptions || {});
        const checkIndicatorsModified = Boolean(field.checkIndicatorsModified);
        const dftvalChanged = JSON.stringify(oldField.dftval || null) !== JSON.stringify(field.dftval || null);
        const dftvalIndicatorsChanged = JSON.stringify(oldField.dftvalIndicators || null) !== JSON.stringify(field.dftvalIndicators || null);

        const valueChanged = field.type === 'constant' && oldField.value !== field.value;

        const shouldUpdateDds = Boolean(
            indicatorsModified ||
            positionChanged ||
            nameChanged ||
            colorChanged ||
            attributesChanged ||
            usageChanged ||
            dataTypeChanged ||
            lengthChanged ||
            decimalsChanged ||
            shiftChanged ||
            precisionChanged ||
            valueChanged ||
            checkOptionsChanged ||
            checkIndicatorsModified ||
            dftvalChanged ||
            dftvalIndicatorsChanged
        );

        if (shouldUpdateDds) {
            Logger.dds(`Updating DDS (colorIndicators: ${field.colorIndicatorsModified}, attributeIndicators: ${field.attributeIndicatorsModified}, checkIndicators: ${checkIndicatorsModified}, dftval: ${dftvalChanged}, dftvalIndicators: ${dftvalIndicatorsChanged}, position: ${positionChanged}, name: ${nameChanged}, color: ${colorChanged}, attributes: ${attributesChanged}, checks: ${checkOptionsChanged}, usage: ${usageChanged}, dataType: ${dataTypeChanged}, length: ${lengthChanged}, decimals: ${decimalsChanged}, shift: ${shiftChanged}, precision: ${precisionChanged}, value: ${valueChanged})`);
            updateFieldInDds(field, oldField);
            delete field.colorIndicatorsModified;
            delete field.attributeIndicatorsModified;
            delete field.checkIndicatorsModified;
            delete field.keywordIndicatorsModified;
            delete field.dftvalIndicatorsModified;

            const latestDocument = getCurrentDocument ? getCurrentDocument() : '';
            parseDspfFields(latestDocument);

            const updatedField = fields.find(f => f.name === field.name && f.record === currentRecord);
            if (updatedField) {
                if (setSelectedField) {
                    setSelectedField(updatedField);
                }
                selectField(updatedField);
                showFieldProperties(updatedField);
                Logger.debug('Re-selected field after re-parse:', updatedField.name);
            }

            updateSourceViewUI({
                Logger,
                vscode,
                getCurrentDocument,
                setCurrentDocument,
                getCurrentRecord,
                parseDspfFields
            });
            Logger.debug('Source view synchronized after field update');

            vscode.postMessage({
                type: 'applyChangesSuccess',
                message: `Changes applied to field "${field.name}"`
            });
        } else {
            Logger.debug('Skipping DDS update - no relevant changes detected');

            vscode.postMessage({
                type: 'applyChangesSuccess',
                message: `No changes detected for field "${field.name}"`
            });
        }

        showFieldProperties(field);

        Logger.success('Field properties applied');
    } catch (error) {
        Logger.error('Error applying field properties:', error);
        vscode.postMessage({
            type: 'applyChangesError',
            message: `Error applying changes: ${error.message}`
        });
    }
}
