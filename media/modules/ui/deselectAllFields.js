export function deselectAllFields({
    Logger,
    indicatorConfigurations,
    setSelectedField,
    showFieldProperties
}) {
    document.querySelectorAll('.dspf-field.selected').forEach(el => {
        el.classList.remove('selected');
    });

    Logger.debug('Clearing indicatorConfigurations when deselecting all fields');
    indicatorConfigurations.clear();

    if (setSelectedField) {
        setSelectedField(null);
    }
    if (showFieldProperties) {
        showFieldProperties(null);
    }
}
