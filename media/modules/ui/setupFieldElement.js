export function setupFieldElement(options) {
    const {
        fieldElement,
        field,
        Logger,
        applyAttributeClasses,
        setFieldContent,
        selectField,
        isReadOnly,
        editField
    } = options;

    fieldElement.className = `dspf-field ${field.type}-field`;
    fieldElement.dataset.fieldId = field.id;

    if (field.isBackgroundRecord) {
        fieldElement.classList.add('field-background');
    }

    if (field.isVisualCopy) {
        fieldElement.classList.add('field-visual-copy');
        fieldElement.style.pointerEvents = 'none';
        fieldElement.style.zIndex = '1';
        Logger.debug(`[VISUAL COPY] Created copy with id: ${field.id}, row: ${field.row}`);
    } else {
        Logger.debug(`[ORIGINAL] Created original field with id: ${field.id}, row: ${field.row}`);
    }

    applyAttributeClasses(fieldElement, field.attributes);

    // Also apply attributes from attributeIndicators (when attributes have indicators)
    if (field.attributeIndicators) {
        if (field.attributeIndicators.underline) { fieldElement.classList.add('underline'); }
        if (field.attributeIndicators.reverse) { fieldElement.classList.add('reverse'); }
        if (field.attributeIndicators.blink) { fieldElement.classList.add('blink'); }
        if (field.attributeIndicators.highlight) { fieldElement.classList.add('highlight'); }
    }

    setFieldContent(fieldElement, field);

    fieldElement.draggable = true;
    fieldElement.style.cursor = 'move';

    fieldElement.addEventListener('click', function(e) {
        Logger.ui(`[CLICK] Field clicked: ${field.name} (id: ${field.id}, isVisualCopy: ${field.isVisualCopy || false})`);
        Logger.ui(`[CLICK] Element dataset.fieldId: ${fieldElement.dataset.fieldId}`);
        Logger.ui(`[CLICK] Element classes: ${fieldElement.className}`);
        Logger.ui(`[CLICK] Element zIndex: ${fieldElement.style.zIndex || 'default'}`);
        Logger.ui(`[CLICK] Element pointerEvents: ${fieldElement.style.pointerEvents || 'auto'}`);
        e.stopPropagation();
        selectField(field);
    });

    fieldElement.addEventListener('dblclick', function() {
        if (!isReadOnly) {
            editField(field);
        }
    });

    fieldElement.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', JSON.stringify({
            type: 'existing-field',
            fieldId: field.id
        }));
        fieldElement.style.opacity = '0.5';
        Logger.debug('Started dragging field:', field.name);
    });

    fieldElement.addEventListener('dragend', function() {
        fieldElement.style.opacity = '1';
        Logger.debug('Ended dragging field:', field.name);
    });
}
