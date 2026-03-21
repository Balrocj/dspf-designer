export function showDeleteConfirmation(options) {
    const { field, Logger, onConfirm } = options;

    const overlay = document.createElement('div');
    overlay.className = 'confirmation-modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    `;

    const modal = document.createElement('div');
    modal.className = 'confirmation-modal';
    modal.style.cssText = `
        background: #2d2d30;
        border: 1px solid #454545;
        border-radius: 6px;
        padding: 20px;
        min-width: 400px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        color: #cccccc;
    `;

    let fieldTypeLabel = 'Field';
    if (field.type === 'keyword') {
        fieldTypeLabel = 'Keyword';
    } else if (field.type === 'constant') {
        fieldTypeLabel = 'Constant';
    }

    modal.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
            <span style="font-size: 20px; color: #f48771;">⚠</span>
            <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #f48771;">Delete ${fieldTypeLabel}</h3>
        </div>
        <p style="margin: 0 0 8px 0; font-size: 13px; line-height: 1.5; color: #cccccc;">
            Are you sure you want to delete the ${fieldTypeLabel.toLowerCase()} <strong>"${field.name}"</strong>?
        </p>
        <p style="margin: 0 0 20px 0; font-size: 12px; font-style: italic; color: #999999;">
            This action cannot be undone.
        </p>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="confirm-delete-no" style="
                padding: 6px 14px;
                background-color: #3c3c3c;
                color: #cccccc;
                border: 1px solid #555555;
                border-radius: 2px;
                cursor: pointer;
                font-size: 13px;
                font-weight: 400;
                min-width: 70px;
                transition: background-color 0.15s;
            ">No</button>
            <button id="confirm-delete-yes" style="
                padding: 6px 14px;
                background-color: #c74e39;
                color: white;
                border: none;
                border-radius: 2px;
                cursor: pointer;
                font-size: 13px;
                font-weight: 400;
                min-width: 70px;
                transition: background-color 0.15s;
            ">Yes</button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const noButton = document.getElementById('confirm-delete-no');
    const yesButton = document.getElementById('confirm-delete-yes');

    setTimeout(() => {
        noButton.focus();
    }, 100);

    noButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#505050';
    });
    noButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#3c3c3c';
    });

    yesButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#a84233';
    });
    yesButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#c74e39';
    });

    const cleanup = () => {
        overlay.remove();
        document.removeEventListener('keydown', handleKeyDown);
    };

    noButton.addEventListener('click', function() {
        cleanup();
        Logger.debug('Delete cancelled by user');
    });

    yesButton.addEventListener('click', function() {
        cleanup();
        onConfirm();
    });

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            cleanup();
        } else if (e.key === 'Enter') {
            cleanup();
            onConfirm();
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            cleanup();
        }
    });
}

export function executeDeleteField(options) {
    const { field, Logger, fields, deselectAllFields, removeFieldFromDds } = options;

    const originalElement = document.querySelector(`[data-field-id="${field.id}"]`);
    if (originalElement) {
        originalElement.remove();
        Logger.debug('Removed original field element from DOM');
    }

    const copyPattern = `${field.id}_repeat`;
    const allElements = document.querySelectorAll('[data-field-id]');
    let removedCopies = 0;

    allElements.forEach(el => {
        if (el.dataset.fieldId.startsWith(copyPattern)) {
            el.remove();
            removedCopies++;
            Logger.debug(`Removed visual copy: ${el.dataset.fieldId}`);
        }
    });

    Logger.success(`Removed field from DOM: 1 original + ${removedCopies} visual copies`);

    const index = fields.findIndex(f => f.id === field.id);
    Logger.debug('Finding field in array, index:', index);
    if (index > -1) {
        fields.splice(index, 1);
        Logger.success('Field removed from fields array, remaining:', fields.length);
    } else {
        Logger.error('Field not found in fields array with id:', field.id);
        Logger.debug('All fields in array:', fields.map(f => ({ id: f.id, name: f.name, type: f.type })));
    }

    deselectAllFields();

    removeFieldFromDds(field);

    Logger.success('Field deletion process completed');
}
