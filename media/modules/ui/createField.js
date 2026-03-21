// Función para crear los campos desde el toolbox
export function createField({
    type,
    row,
    col,
    Logger,
    fields,
    generateUniqueFieldName,
    generateId,
    getDefaultLength,
    getWindowDimensions,
    getCurrentRecord,
    getCurrentDisplaySize,
    renderField,
    renderWindowField,
    getSubfileRelationship,
    getSflpagValue,
    selectField,
    addFieldToDds,
    showFieldProperties
}) {
    let fieldName;
    let ddsType;
    let usage;
    let dataType;
    let decimals;
    let shift;
    let isKeyword = false;

    if (type === 'text') {
        fieldName = generateUniqueFieldName('TXT_');
        ddsType = 'A';
        usage = 'O';
        dataType = 'character';
        decimals = 0;
    } else if (type === 'number') {
        fieldName = generateUniqueFieldName('NUM_');
        ddsType = 'Y';
        usage = 'I';
        dataType = 'zoned';
        decimals = 0;
        shift = 'S';
    } else if (type === 'keyword-date') {
        fieldName = 'DATE';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'keyword-time') {
        fieldName = 'TIME';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'keyword-sysname') {
        fieldName = 'SYSNAME';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'keyword-user') {
        fieldName = 'USER';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'field-date') {
        fieldName = generateUniqueFieldName('DATE_');
        ddsType = 'L';
        usage = 'O';
        dataType = 'date';
        decimals = 0;
    } else if (type === 'field-time') {
        fieldName = generateUniqueFieldName('TIME_');
        ddsType = 'T';
        usage = 'O';
        dataType = 'time';
        decimals = 0;
    } else if (type === 'field-timestamp') {
        fieldName = generateUniqueFieldName('TS_');
        ddsType = 'Z';
        usage = 'O';
        dataType = 'timestamp';
        decimals = 0;
    } else {
        fieldName = generateUniqueFieldName(type === 'constant' ? 'CONST_' : `${type.toUpperCase()}_`);
        ddsType = type === 'constant' ? '' : 'A';
        usage = 'O';
        dataType = type === 'constant' ? 'constant' : 'character';
        decimals = 0;
    }

    const field = {
        id: generateId(),
        name: fieldName,
        type: type === 'number' ? 'input' : (isKeyword ? 'keyword' : (type === 'field-date' || type === 'field-time' || type === 'field-timestamp' ? 'output' : type)),
        ddsType: ddsType,
        usage: usage,
        dataType: dataType,
        row: row,
        col: col,
        length: isKeyword ? null : getDefaultLength(type),
        decimals: decimals,
        value: type === 'constant' ? 'TEXT' : '',
        isKeyword: isKeyword
    };

    if (shift) {
        field.shift = shift;
    }

    fields.push(field);

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const winDimsForCreate = getWindowDimensions ? getWindowDimensions(currentRecord) : null;
    const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
    if (winDimsForCreate && winDimsForCreate.hasWindow) {
        const winDim = currentDisplaySize === 'DS3' ? winDimsForCreate.ds3 : winDimsForCreate.ds4;
        if (winDim) {
            renderWindowField(field, winDim);
        } else {
            renderField(field);
        }
    } else {
        renderField(field);
    }

    Logger.ui(`[CREATE] Field created: ${field.name} (id: ${field.id}) at row ${field.row}, col ${field.col}`);
    Logger.ui(`[CREATE] Field pushed to array, total fields: ${fields.length}`);

    const subfileRelationship = getSubfileRelationship ? getSubfileRelationship(currentRecord) : null;
    const sflpagRepeat = subfileRelationship ? getSflpagValue(subfileRelationship.sflctlRecord) : 1;

    Logger.ui(`[CREATE] Checking SFLPAG: subfileRelationship=${!!subfileRelationship}, sflpagRepeat=${sflpagRepeat}`);

    if (sflpagRepeat > 1) {
        const shouldRepeat = (
            (currentRecord === subfileRelationship.sflRecord && !field.isBackgroundRecord) ||
            (currentRecord === subfileRelationship.sflctlRecord && field.isBackgroundRecord)
        );

        if (shouldRepeat) {
            Logger.debug(`Creating ${sflpagRepeat - 1} visual copies for new field in SFL`);
            for (let repeat = 1; repeat < sflpagRepeat; repeat++) {
                const visualCopy = {
                    ...field,
                    id: field.id + '_repeat' + repeat,
                    row: field.row + repeat,
                    isVisualCopy: true
                };
                if (winDimsForCreate && winDimsForCreate.hasWindow) {
                    const winDim = currentDisplaySize === 'DS3' ? winDimsForCreate.ds3 : winDimsForCreate.ds4;
                    if (winDim) {
                        renderWindowField(visualCopy, winDim);
                    } else {
                        renderField(visualCopy);
                    }
                } else {
                    renderField(visualCopy);
                }
            }
        }
    }

    if (selectField) {
        selectField(field);
    }

    if (addFieldToDds) {
        addFieldToDds(field);
    }

    Logger.success('New field created:', fieldName, 'at', { row, col });

    if (showFieldProperties) {
        showFieldProperties(field);
    }
}
