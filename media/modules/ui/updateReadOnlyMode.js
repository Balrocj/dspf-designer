export function updateReadOnlyMode({
    Logger,
    isReadOnly,
    setCurrentView,
    updatePreviewView
}) {
    Logger.debug('updateReadOnlyMode called, isReadOnly:', isReadOnly);

    const designerTab = document.getElementById('designerTab');
    const designerView = document.getElementById('designer-view');
    const previewTab = document.getElementById('previewTab');
    const previewView = document.getElementById('preview-view');
    const saveBtn = document.getElementById('saveBtn');
    const addRecordBtn = document.querySelector('.add-record-btn');
    const sourceEditor = document.getElementById('source-editor');

    if (isReadOnly) {
        if (designerTab) {
            designerTab.style.display = 'none';
        }

        if (designerView) {
            designerView.style.display = 'none';
        }

        if (saveBtn) {
            saveBtn.style.display = 'none';
        }

        if (addRecordBtn) {
            addRecordBtn.style.display = 'none';
        }

        if (sourceEditor) {
            sourceEditor.readOnly = true;
            sourceEditor.style.cursor = 'not-allowed';
        }

        if (previewTab && previewView) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));

            previewTab.classList.add('active');
            previewView.classList.add('active');
            if (setCurrentView) {
                setCurrentView('preview');
            }
            updatePreviewView();
        }

        const header = document.querySelector('.header h1');
        if (header && !header.querySelector('.readonly-badge')) {
            const badge = document.createElement('span');
            badge.className = 'readonly-badge';
            badge.textContent = ' [READ ONLY]';
            badge.style.color = '#ff6b6b';
            badge.style.fontSize = '0.8em';
            badge.style.fontWeight = 'normal';
            header.appendChild(badge);
        }

        Logger.key('Read-only mode enabled - Designer tab hidden, Preview/Source only');
    } else {
        if (designerTab) {
            designerTab.style.display = 'inline-block';
        }

        if (designerView) {
            designerView.style.display = 'block';
        }

        if (saveBtn) {
            saveBtn.style.display = 'inline-block';
        }

        if (addRecordBtn) {
            addRecordBtn.style.display = 'inline-block';
        }

        if (sourceEditor) {
            sourceEditor.readOnly = false;
            sourceEditor.style.cursor = 'text';
        }

        const badge = document.querySelector('.readonly-badge');
        if (badge) {
            badge.remove();
        }

        Logger.key('Edit mode enabled');
    }
}
