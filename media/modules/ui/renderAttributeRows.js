// Arma el HTML de las filas de atributos en el panel de propiedades.
export function renderAttributeRows(options) {
    const { allowedKeys = null, fieldType = 'variable', attributeUiDefs } = options;
    const allowSet = allowedKeys ? new Set(allowedKeys) : null;

    // Determine label based on field type
    let indicatorLabel = 'Variable Indicators';

    // First row: field-level indicators (WITHOUT checkbox, only label and button)
    const fieldIndicatorRow = `
        <div class="property-group" style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid var(--border-color, #3c3c3c); padding-bottom: 8px; margin-bottom: 8px;">
            <label style="flex: 1;">
                ${indicatorLabel}
            </label>
            <button class="indicator-config-btn" data-field-indicators="true" title="Configure field indicators"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
        </div>
    `;

    // Rest of attribute rows
    const attributeRows = attributeUiDefs
        .filter(def => !allowSet || allowSet.has(def.key))
        .map(def => `
            <div class="property-group ${def.extraClass}" style="display: flex; align-items: center; gap: 8px;">
                <label style="flex: 1;">
                    <input type="checkbox" id="${def.checkboxId}" />
                    ${def.label}
                </label>
                <button class="indicator-config-btn" data-attr="${def.dataAttr}" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
            </div>
        `)
        .join('');

    return fieldIndicatorRow + attributeRows;
}
