export function switchToView({
    viewName,
    Logger,
    setCurrentView,
    getSelectedField,
    setSelectedField,
    getFields,
    getCurrentDocument,
    parseDspfFields,
    showFieldProperties,
    updatePreviewView,
    updateSourceViewUI,
    vscode,
    setCurrentDocument,
    getCurrentRecord,
    getSaveMode,
    setupSourceSearchUI,
    scrollToRecordInSource,
    focusSourceEditor
}) {
    Logger.ui('Switching to view:', viewName);

    if (setCurrentView) {
        setCurrentView(viewName);
    }

    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
        view.style.display = 'none';
        Logger.debug('Hidden view:', view.id);
    });

    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
    });

    const propertiesPanel = document.getElementById('properties-panel');

    switch (viewName) {
        case 'designer': {
            const designerView = document.getElementById('designer-view');
            const designerTab = document.getElementById('designerTab');
            if (designerView && designerTab) {
                designerView.style.display = 'flex';
                designerView.classList.add('active');
                designerTab.classList.add('active');
                if (propertiesPanel) {
                    propertiesPanel.classList.remove('hidden');
                }

                const previouslySelectedField = getSelectedField ? getSelectedField() : null;
                const previouslySelectedFieldName = previouslySelectedField ? previouslySelectedField.name : null;
                const currentDocument = getCurrentDocument ? getCurrentDocument() : '';

                parseDspfFields(currentDocument);

                if (previouslySelectedFieldName) {
                    const currentFields = getFields ? getFields() : [];
                    const updatedField = currentFields.find(field => field.name === previouslySelectedFieldName);
                    if (updatedField) {
                        if (setSelectedField) {
                            setSelectedField(updatedField);
                        }
                        showFieldProperties(updatedField);

                        const fieldElement = document.querySelector(`[data-field-name="${updatedField.name}"]`);
                        if (fieldElement) {
                            fieldElement.classList.add('field-updated');
                            setTimeout(() => {
                                fieldElement.classList.remove('field-updated');
                            }, 800);
                        }
                        Logger.debug('Auto-updated properties for field:', updatedField.name);
                    } else {
                        if (setSelectedField) {
                            setSelectedField(null);
                        }
                        showFieldProperties(null);
                        Logger.warn('Previously selected field no longer exists, resetting properties');
                    }
                } else {
                    if (setSelectedField) {
                        setSelectedField(null);
                    }
                    showFieldProperties(null);
                }

                Logger.debug('Designer view activated and visible');
            } else {
                Logger.error('Designer elements not found');
            }
            break;
        }
        case 'preview': {
            const previewView = document.getElementById('preview-view');
            const previewTab = document.getElementById('previewTab');
            if (previewView && previewTab) {
                previewView.style.display = 'flex';
                previewView.classList.add('active');
                previewTab.classList.add('active');
                if (propertiesPanel) {
                    propertiesPanel.classList.add('hidden');
                }
                updatePreviewView();
                Logger.debug('Preview view activated and visible');
            } else {
                Logger.error('Preview elements not found');
            }
            break;
        }
        case 'source': {
            const sourceView = document.getElementById('source-view');
            const sourceTab = document.getElementById('sourceTab');
            if (sourceView && sourceTab) {
                sourceView.style.display = 'flex';
                sourceView.classList.add('active');
                sourceTab.classList.add('active');
                if (propertiesPanel) {
                    propertiesPanel.classList.add('hidden');
                }
                updateSourceViewUI({
                    Logger,
                    vscode,
                    getCurrentDocument,
                    setCurrentDocument,
                    getCurrentRecord,
                    parseDspfFields,
                    getSaveMode
                });
                setupSourceSearchUI({ Logger });
                scrollToRecordInSource();
                // Ensure keyboard input goes to CodeMirror even on delayed webview/layout updates
                if (focusSourceEditor) {
                    setTimeout(() => {
                        focusSourceEditor();
                        requestAnimationFrame(() => {
                            focusSourceEditor();
                            requestAnimationFrame(() => focusSourceEditor());
                        });
                    }, 0);
                }
                Logger.debug('Source view activated and visible');
            } else {
                Logger.error('Source elements not found');
            }
            break;
        }
    }

    document.querySelectorAll('.view').forEach(view => {
        const isActive = view.classList.contains('active');
        const displayStyle = window.getComputedStyle(view).display;
        Logger.debug(`${view.id}: active=${isActive}, display=${displayStyle}`);
    });
}
