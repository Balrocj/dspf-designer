export function getFreshFieldFromDds({
    field,
    Logger,
    getCurrentDocument,
    getCurrentRecord,
    parseDspfForPreview,
    getFields,
    updateFieldAtIndex
}) {
    if (!field || !getCurrentDocument) {
        return field;
    }

    const currentDocument = getCurrentDocument();
    if (!currentDocument) {
        return field;
    }

    Logger.debug(`Re-parsing field ${field.name} from DDS to get fresh indicator data`);

    const parsedData = parseDspfForPreview(currentDocument, getCurrentRecord ? getCurrentRecord() : null);

    const freshField = parsedData.fields.find(f =>
        f.name === field.name &&
        f.row === field.row &&
        f.col === field.col &&
        f.type === field.type
    );

    if (freshField) {
        freshField.id = field.id;
        const fields = getFields ? getFields() : [];
        const fieldIndex = fields.findIndex(f => f.id === field.id);
        if (fieldIndex >= 0 && updateFieldAtIndex) {
            updateFieldAtIndex(fieldIndex, freshField);
        }
        Logger.debug(`Fresh field data obtained with ${Object.keys(freshField.colorIndicators || {}).length} color indicators, ${Object.keys(freshField.attributeIndicators || {}).length} attribute indicators`);
        return freshField;
    }

    Logger.warn(`Could not find fresh data for field ${field.name}, using cached data`);
    return field;
}

export function selectField({
    field,
    Logger,
    deselectAllFields,
    getSelectedField,
    setSelectedField,
    indicatorConfigurations,
    getFreshFieldFromDds,
    showFieldProperties
}) {
    Logger.ui(`[SELECT] Attempting to select field: ${field.name} (id: ${field.id})`);
    Logger.ui(`[SELECT] Field isVisualCopy: ${field.isVisualCopy || false}`);

    if (deselectAllFields) {
        deselectAllFields();
    }

    const previousSelectedField = getSelectedField ? getSelectedField() : null;
    if (previousSelectedField && previousSelectedField.id !== field.id) {
        Logger.debug('Clearing indicatorConfigurations when switching fields');
        indicatorConfigurations.clear();
    }

    if (setSelectedField) {
        setSelectedField(field);
    }
    Logger.ui(`[SELECT] selectedField set to: ${field.name}`);

    const fieldElement = document.querySelector(`[data-field-id="${field.id}"]`);
    Logger.ui(`[SELECT] Found element with selector [data-field-id="${field.id}"]: ${fieldElement ? 'YES' : 'NO'}`);

    if (fieldElement) {
        Logger.ui(`[SELECT] Element classes before: ${fieldElement.className}`);
        fieldElement.classList.add('selected');
        Logger.ui(`[SELECT] Element classes after: ${fieldElement.className}`);
        Logger.ui(`[SELECT] Element display: ${window.getComputedStyle(fieldElement).display}`);
        Logger.ui(`[SELECT] Element visibility: ${window.getComputedStyle(fieldElement).visibility}`);
    } else {
        Logger.error(`[SELECT] Could not find element with data-field-id="${field.id}"`);
        const allFields = document.querySelectorAll('[data-field-id]');
        Logger.ui(`[SELECT] Total fields in DOM: ${allFields.length}`);
        allFields.forEach((el, idx) => {
            if (idx < 5) {
                Logger.ui(`[SELECT]   - ${el.dataset.fieldId} (${el.className})`);
            }
        });
    }

    const freshField = getFreshFieldFromDds ? getFreshFieldFromDds(field) : null;
    if (showFieldProperties) {
        showFieldProperties(freshField || field);
    }
}
