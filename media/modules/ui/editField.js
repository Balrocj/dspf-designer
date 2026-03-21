export function editField({
    field,
    Logger,
    isReadOnly,
    selectField
}) {
    if (isReadOnly) {
        Logger.warn('Cannot edit field in read-only mode');
        return;
    }

    if (selectField) {
        selectField(field);
    }

    if (field.type !== 'constant') {
        const nameInput = document.getElementById('prop-name');
        if (nameInput) {
            setTimeout(() => {
                nameInput.focus();
                nameInput.select();
            }, 100);
        }
    }

    Logger.debug('Field selected for editing in properties panel');
}
