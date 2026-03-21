// Actualiza el botón con el texto generado por formatIndicatorLabel
export function setIndicatorButtonState({ btn, indicators, formatIndicatorLabel }) {
    if (!btn) {
        return;
    }

    if (!formatIndicatorLabel) {
        throw new Error('setIndicatorButtonState: formatIndicatorLabel is required');
    }

    // Support both old format (array) and new format (groups)
    let flatIndicators = [];
    if (Array.isArray(indicators)) {
        flatIndicators = indicators;
    } else if (indicators && indicators.groups) {
        // Flatten all groups into single array
        indicators.groups.forEach(group => {
            flatIndicators.push(...group.indicators);
        });
    }

    const has = flatIndicators.length > 0;
    btn.classList.toggle('has-indicators', has);
    const textEl = btn.querySelector('.indicator-text');
    if (textEl) {
        textEl.textContent = formatIndicatorLabel(flatIndicators);
    }
    btn.title = has ? formatIndicatorLabel(flatIndicators) : 'Configurar indicadores';
}
