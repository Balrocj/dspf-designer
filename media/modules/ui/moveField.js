export function moveField(options) {
    const {
        fieldId,
        newRow,
        newCol,
        Logger,
        fields,
        getCurrentRecord,
        setCurrentRecord,
        getCurrentDisplaySize,
        getWindowDimensions,
        renderField,
        renderWindowField,
        getSubfileRelationship,
        getSflpagValue,
        selectField,
        updateFieldInDds
    } = options;

    const field = fields.find(f => f.id === fieldId);
    if (!field) {
        Logger.error('Field not found for moving:', fieldId);
        return;
    }

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const oldRow = field.row;
    const oldCol = field.col;

    Logger.debug(`Moving field ${field.name} from (${oldRow},${oldCol}) to (${newRow},${newCol}) in record: ${currentRecord || 'ALL'}`);

    field.row = newRow;
    field.col = newCol;

    const oldElement = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (oldElement) {
        oldElement.remove();
    }

    const copyPattern = `${fieldId}_repeat`;
    const allElements = document.querySelectorAll('[data-field-id]');
    let removedCopies = 0;

    allElements.forEach(el => {
        const elFieldId = el.getAttribute('data-field-id');
        if (elFieldId && elFieldId.includes(copyPattern)) {
            el.remove();
            removedCopies++;
        }
    });

    if (removedCopies > 0) {
        Logger.dds(`Removed ${removedCopies} visual copies during move`);
    }

    const winDimsForMove = currentRecord ? getWindowDimensions(currentRecord) : null;
    if (winDimsForMove && winDimsForMove.hasWindow) {
        const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
        const winDim = currentDisplaySize === 'DS3' ? winDimsForMove.ds3 : winDimsForMove.ds4;
        if (winDim) {
            renderWindowField(field, winDim);
        } else {
            renderField(field);
        }
    } else {
        renderField(field);
    }

    const subfileRel = currentRecord ? getSubfileRelationship(currentRecord) : null;
    if (subfileRel && subfileRel.sflRecord === currentRecord) {
        const sflpagValue = getSflpagValue(subfileRel.sflctlRecord);
        if (sflpagValue > 1) {
            Logger.dds(`Regenerating ${sflpagValue - 1} visual copies for field ${field.name} after move in SFL record`);
            for (let repeat = 1; repeat < sflpagValue; repeat++) {
                const visualCopy = {
                    ...field,
                    row: field.row + repeat,
                    isVisualCopy: true,
                    id: `${fieldId}_repeat${repeat}`
                };

                if (winDimsForMove && winDimsForMove.hasWindow) {
                    const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
                    const winDim = currentDisplaySize === 'DS3' ? winDimsForMove.ds3 : winDimsForMove.ds4;
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

    selectField(field);

    const preservedRecord = currentRecord;
    updateFieldInDds(field, { ...field, row: oldRow, col: oldCol });

    if (preservedRecord && setCurrentRecord) {
        const currentRecordAfter = getCurrentRecord ? getCurrentRecord() : null;
        if (currentRecordAfter && preservedRecord !== currentRecordAfter) {
            Logger.debug('Restoring record context after move:', preservedRecord);
            setCurrentRecord(preservedRecord);
        }
    }

    Logger.success('Field moved and DDS updated, maintaining record filter:', getCurrentRecord ? getCurrentRecord() : currentRecord);
}
