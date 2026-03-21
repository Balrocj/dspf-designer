export function setupIndicatorButtons({ Logger, openIndicatorModal }) {
    if (!openIndicatorModal) {
        Logger.warn('setupIndicatorButtons: openIndicatorModal is required');
        return;
    }

    // Remove old listeners by cloning nodes (clears all event listeners)
    document.querySelectorAll('.indicator-config-btn').forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });

    // Keyword indicator buttons
    document.querySelectorAll('.indicator-config-btn[data-keyword]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const keywordName = this.dataset.keyword;
            Logger.debug(`Keyword indicator button clicked: ${keywordName}`);
            openIndicatorModal('keyword', keywordName, `Indicadores para ${keywordName}`);
        });
    });

    // Attribute indicator buttons
    document.querySelectorAll('.indicator-config-btn[data-attr]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const attr = this.dataset.attr;
            const label = this.previousElementSibling.textContent.trim();
            Logger.debug(`Attribute indicator button clicked: ${attr}`);
            openIndicatorModal('attr', attr, `Attribute: ${label}`);
        });
    });

    // Color indicator buttons
    document.querySelectorAll('.indicator-config-btn[data-color]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const color = this.dataset.color;
            const label = this.closest('.property-group').querySelector('label').textContent.trim();
            Logger.debug(`Color indicator button clicked: ${color}`);
            openIndicatorModal('color', color, `Color: ${label}`);
        });
    });

    // CHECK indicator buttons (only ME/ER)
    document.querySelectorAll('.indicator-config-btn[data-check]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const checkCode = this.dataset.check;
            const label = this.previousElementSibling.textContent.trim();
            Logger.debug(`CHECK indicator button clicked: ${checkCode}`);
            openIndicatorModal('check', checkCode, `CHECK ${checkCode} indicators`);
        });
    });

    // DFTVAL indicator buttons
    document.querySelectorAll('.indicator-config-btn[data-dftval]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            Logger.debug('DFTVAL indicator button clicked');
            openIndicatorModal('dftval', 'enabled', 'DFTVAL indicators');
        });
    });

    // Field-level indicator buttons (variables, constants, keywords)
    document.querySelectorAll('.indicator-config-btn[data-field-indicators]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            Logger.debug('Field-level indicator button clicked');
            openIndicatorModal('field-indicators', 'field', 'Field-level indicators');
        });
    });
}
