import { ColorUtils } from './modules/utils/colorUtils.js';
import { ScreenCoordinates } from './modules/utils/screenCoordinates.js';
import { IndicatorUtils } from './modules/utils/indicatorUtils.js';
import { DisplaySizeUtils } from './modules/utils/displaySizeUtils.js';
import { IdGenerator } from './modules/utils/idGenerator.js';
import { FieldNameValidator } from './modules/utils/fieldNameValidator.js';
import { Logger } from './modules/core/logger.js';
import { ATTRIBUTE_KEYWORDS_SET, attributeContentRegex, CHECK_CHAR_CODES, CHECK_NUMERIC_CODES, REGENERATED_KEYWORDS_SET } from './modules/core/ddsConstants.js';
import { calibrateCharMetrics } from './modules/utils/charMetrics.js';
import { setupRulers as setupRulersUI } from './modules/ui/rulers.js';
import { setupCanvasInteraction } from './modules/ui/canvasSetup.js';
import { setupToolbarButtons as setupToolbarButtonsUI } from './modules/ui/toolbarSetup.js';
import { setupDisplaySizeSelector as setupDisplaySizeSelectorUI } from './modules/ui/displaySizeSelector.js';
import { updateCanvasSize as updateCanvasSizeUI } from './modules/ui/canvasSize.js';
import { setupDragAndDrop as setupDragAndDropUI } from './modules/ui/dragAndDrop.js';
import { setupGridLines as setupGridLinesUI } from './modules/ui/gridLines.js';
import { setupPreviewDisplaySizeListeners as setupPreviewDisplaySizeListenersUI } from './modules/ui/previewDisplaySizeListeners.js';
import { setupSourceSearch as setupSourceSearchUI } from './modules/ui/sourceSearch.js';
import { updateRecordTitle as updateRecordTitleUI, updateNavigationButtons as updateNavigationButtonsUI } from './modules/ui/navigation.js';
import { setupWindowResize as setupWindowResizeUI } from './modules/ui/windowResize.js';
import { updateSourceView as updateSourceViewUI, focusSourceEditor as focusSourceEditorUI } from './modules/ui/sourceView.js';
import { moveField as moveFieldUI } from './modules/ui/moveField.js';
import { applyWindowDimensions as applyWindowDimensionsUI } from './modules/ui/applyWindowDimensions.js';
import { showScreenProperties as showScreenPropertiesUI } from './modules/ui/showScreenProperties.js';
import { saveDocument as saveDocumentUI } from './modules/ui/saveDocument.js';
import { setViewZoom as setViewZoomUI } from './modules/ui/setViewZoom.js';
import { switchToView as switchToViewUI } from './modules/ui/switchToView.js';
import { setupIndicatorButtons as setupIndicatorButtonsUI } from './modules/ui/indicatorButtons.js';
import { showFieldProperties as showFieldPropertiesUI } from './modules/ui/showFieldProperties.js';
import { applyFieldProperties as applyFieldPropertiesUI } from './modules/ui/applyFieldProperties.js';
import { setupPropertiesTabs as setupPropertiesTabsUI } from './modules/ui/propertiesTabs.js';
import { loadSubfileControl as loadSubfileControlUI, applySubfileControl as applySubfileControlUI, applySflpagRepetition as applySflpagRepetitionUI, getSflRowSpan as getSflRowSpanUI, getSflpagValue as getSflpagValueUI, getSubfileRelationship as getSubfileRelationshipUI } from './modules/ui/subfileControl.js';
import { loadFunctionKeys as loadFunctionKeysUI, createFunctionKeyRow as createFunctionKeyRowUI, saveFunctionKeys as saveFunctionKeysUI } from './modules/ui/functionKeys.js';
import { showDeleteConfirmation as showDeleteConfirmationUI, executeDeleteField as executeDeleteFieldUI } from './modules/ui/deleteConfirmation.js';
import { updatePreviewView as updatePreviewViewUI } from './modules/ui/previewView.js';
import { updateReadOnlyMode as updateReadOnlyModeUI } from './modules/ui/updateReadOnlyMode.js';
import { selectField as selectFieldUI, getFreshFieldFromDds as getFreshFieldFromDdsUI } from './modules/ui/selectField.js';
import { deselectAllFields as deselectAllFieldsUI } from './modules/ui/deselectAllFields.js';
import { editField as editFieldUI } from './modules/ui/editField.js';
import { scrollToRecordInSource as scrollToRecordInSourceUI } from './modules/ui/scrollToRecordInSource.js';
import { navigateToPreviousRecord as navigateToPreviousRecordUI, navigateToNextRecord as navigateToNextRecordUI } from './modules/ui/recordNavigation.js';
import { createField as createFieldUI } from './modules/ui/createField.js';
import { generateUniqueFieldName as generateUniqueFieldNameUI } from './modules/ui/generateUniqueFieldName.js';
import { applyAttributeClasses as applyAttributeClassesUI } from './modules/ui/applyAttributeClasses.js';
import { computeFieldDisplay as computeFieldDisplayUI } from './modules/ui/computeFieldDisplay.js';
import { setFieldContent as setFieldContentUI } from './modules/ui/setFieldContent.js';
import { setupFieldElement as setupFieldElementUI } from './modules/ui/setupFieldElement.js';
import { renderField as renderFieldUI } from './modules/ui/renderField.js';
import { renderWindowField as renderWindowFieldUI } from './modules/ui/renderWindowField.js';
import { getFieldCharForDisplay as getFieldCharForDisplayUI } from './modules/ui/getFieldCharForDisplay.js';
import { getFieldDisplayText as getFieldDisplayTextUI } from './modules/ui/getFieldDisplayText.js';
import { generateWindowFieldHtml as generateWindowFieldHtmlUI } from './modules/ui/generateWindowFieldHtml.js';
import { generateId as generateIdUI } from './modules/ui/generateId.js';
import { getDefaultLength as getDefaultLengthUI } from './modules/ui/getDefaultLength.js';
import { getKeywordDisplay as getKeywordDisplayUI } from './modules/ui/getKeywordDisplay.js';
import { extractAttributes as extractAttributesUI } from './modules/ui/extractAttributes.js';
import { renderAttributeRows as renderAttributeRowsUI } from './modules/ui/renderAttributeRows.js';
import { getAttributeCheckboxMap as getAttributeCheckboxMapUI } from './modules/ui/getAttributeCheckboxMap.js';
import { formatIndicatorLabel as formatIndicatorLabelUI } from './modules/ui/formatIndicatorLabel.js';
import { setIndicatorButtonState as setIndicatorButtonStateUI } from './modules/ui/setIndicatorButtonState.js';
import { applyColorChanges as applyColorChangesUI } from './modules/ui/applyColorChanges.js';
import { getRecordType as getRecordTypeUI } from './modules/ui/getRecordType.js';
import { extractRowColFromParts as extractRowColFromPartsUI } from './modules/ui/extractRowColFromParts.js';
import { parseDdsTypeSpecification as parseDdsTypeSpecificationUI } from './modules/ui/parseDdsTypeSpecification.js';
import { parseUsageAndDecimals as parseUsageAndDecimalsUI } from './modules/ui/parseUsageAndDecimals.js';
import { extractFloatPrecision as extractFloatPrecisionUI } from './modules/ui/extractFloatPrecision.js';
import { extractShiftCode as extractShiftCodeUI } from './modules/ui/extractShiftCode.js';
import { parseWindowDimensionsFromLine as parseWindowDimensionsFromLineUI } from './modules/ui/parseWindowDimensionsFromLine.js';
import { processMultiLineContinuation as processMultiLineContinuationUI } from './modules/ui/processMultiLineContinuation.js';
import { scanIndicatorsBackward as scanIndicatorsBackwardUI } from './modules/ui/scanIndicatorsBackward.js';
import { scanAttributeLinesAfterField as scanAttributeLinesAfterFieldUI } from './modules/ui/scanAttributeLinesAfterField.js';
import { showNotification as showNotificationUI } from './modules/ui/showNotification.js';
import { updateDocumentInEditor as updateDocumentInEditorUI } from './modules/ui/updateDocumentInEditor.js';
import { buildVariableTypeAndUsageUI } from './modules/ui/buildVariableTypeAndUsage.js';
import { generateConstantFieldLinesUI } from './modules/ui/generateConstantFieldLines.js';
import { generateFieldDspatrLinesUI } from './modules/ui/generateFieldDspatrLines.js';
import { generateFieldColorLinesUI } from './modules/ui/generateFieldColorLines.js';
import { generateFieldCheckLinesUI } from './modules/ui/generateFieldCheckLines.js';
import { generateFieldEdtcdeLinesUI } from './modules/ui/generateFieldEdtcdeLines.js';
import { generateFieldEditKeywordsLinesUI } from './modules/ui/generateFieldEditKeywordsLines.js';
import { generateFieldValuesLinesUI } from './modules/ui/generateFieldValuesLines.js';
import { generateFieldDftLinesUI } from './modules/ui/generateFieldDftLines.js';
import { generateFieldDftvalLinesUI } from './modules/ui/generateFieldDftvalLines.js';
import { generateFieldCntfldLinesUI } from './modules/ui/generateFieldCntfldLines.js';
import { generateDdsLineWithIndicatorsUI } from './modules/ui/generateDdsLineWithIndicators.js';
import { applyIndicatorChangesToFieldUI } from './modules/ui/applyIndicatorChangesToField.js';


(function() {
    Logger.success('DSPF Designer script loaded');
    
    const vscode = acquireVsCodeApi();
    window.vscodeApi = vscode; // Make it globally available
    const initialConfig = window.dspfDesignerConfig || {};
    let saveMode = initialConfig.saveMode === 'automatic' ? 'automatic' : 'manual';
    
    // IBM i Color Mappings (5250 standard colors) - now using ColorUtils
    const IBM_COLORS = ColorUtils.IBM_COLORS;
    
    let currentDocument = '';
    let selectedField = null;
    let fields = [];
    let currentRecord = null; // Track which record we're editing
    let allRecords = []; // List of all records in the DSPF file
    let currentDisplaySize = 'DS3'; // Current display size: DS3 (24x80) or DS4 (27x132)
    let isReadOnly = false; // Track if document is in read-only mode
    let currentView = 'designer'; // Track the current active view (designer, preview, source)
    let currentZoom = 1; // Zoom level for views container

    function getSaveMode() {
        return saveMode;
    }
    
    // Initialize the designer when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        Logger.ui('DOM loaded, initializing designer');
        initializeDesigner();
    });
    
    // Also try to initialize immediately in case DOM is already loaded
    if (document.readyState === 'loading') {
        // Still loading, wait for DOMContentLoaded
        Logger.parse('Document still loading, waiting...');
    } else {
        // Already loaded
        Logger.success('Document already loaded, initializing immediately');
        initializeDesigner();
    }
    
    async function initializeDesigner() {
        await calibrateCharMetrics(ScreenCoordinates, Logger);
        setupCanvasInteraction(deselectAllFields, showScreenProperties);
        setupToolbarButtonsUI({
            Logger,
            vscode,
            saveDocument,
            navigateToPreviousRecord,
            navigateToNextRecord,
            setViewZoom,
            getCurrentZoom: () => currentZoom,
            switchToView
        });
        setupDisplaySizeSelectorUI({
            Logger,
            getCurrentDisplaySize: () => currentDisplaySize,
            setCurrentDisplaySize: (value) => { currentDisplaySize = value; },
            updateCanvasSize: (displaySize) => updateCanvasSizeUI(displaySize, ScreenCoordinates, Logger),
            setupRulers,
            parseDspfFields,
            getCurrentDocument: () => currentDocument,
            applyDefaultZoomForDisplaySize,
            updatePreviewView
        });
        setViewZoom(currentZoom);
        updateCanvasSizeUI(currentDisplaySize, ScreenCoordinates, Logger);
        setupGridLinesUI({
            Logger,
            setupRulers
        });
        
        // Setup drag and drop with a delay to ensure DOM is fully loaded
        setTimeout(() => {
            setupDragAndDropUI({
                Logger,
                ScreenCoordinates,
                getCurrentRecord: () => currentRecord,
                getCurrentDisplaySize: () => currentDisplaySize,
                getCurrentZoom: () => currentZoom,
                getWindowDimensions,
                moveField,
                createField
            });
        }, 100);
        
        // Ensure Designer view is active by default
        switchToView('designer');
        
        // Request initial document content
        vscode.postMessage({ type: 'getDocument' });
        
        Logger.success('DSPF Designer initialized');
    }

    function setViewZoom(zoomValue) {
        return setViewZoomUI({
            zoomValue,
            setCurrentZoom: (value) => { currentZoom = value; }
        });
    }

    function applyDefaultZoomForDisplaySize(displaySize, targetView = currentView) {
        const defaultZoom = targetView === 'designer'
            ? (displaySize === 'DS4' ? 0.7 : 1)
            : 1;
        setViewZoom(defaultZoom);
    }

    function syncDisplaySizeRadioButtons(displaySize) {
        const designerRadios = document.querySelectorAll('input[name="displaySize"]');
        designerRadios.forEach(radio => {
            radio.checked = radio.value === displaySize;
        });

        const previewRadios = document.querySelectorAll('input[name="preview-display-size"]');
        previewRadios.forEach(radio => {
            radio.checked = radio.value === displaySize;
        });
    }

    function syncDisplaySizeRadioAvailability(displayConfig) {
        const hasAnyDeclaredSize = displayConfig.hasDS3 || displayConfig.hasDS4;
        const allowDS3 = hasAnyDeclaredSize ? displayConfig.hasDS3 : true;
        const allowDS4 = hasAnyDeclaredSize ? displayConfig.hasDS4 : true;

        const updateRadioState = (radio, isAllowed) => {
            radio.disabled = !isAllowed;
            radio.title = isAllowed ? '' : 'Not available based on DSPSIZ';
            const label = radio.closest('label');
            if (label) {
                label.style.opacity = isAllowed ? '1' : '0.55';
                label.style.cursor = isAllowed ? 'pointer' : 'not-allowed';
                label.title = isAllowed ? '' : 'Not available based on DSPSIZ';
            }
        };

        const ds3Radios = document.querySelectorAll('input[name="displaySize"][value="DS3"], input[name="preview-display-size"][value="DS3"]');
        ds3Radios.forEach(radio => {
            updateRadioState(radio, allowDS3);
        });

        const ds4Radios = document.querySelectorAll('input[name="displaySize"][value="DS4"], input[name="preview-display-size"][value="DS4"]');
        ds4Radios.forEach(radio => {
            updateRadioState(radio, allowDS4);
        });
    }

    function applyDisplaySizeSettingsFromDocument() {
        const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);
        const preferredDisplaySize = displayConfig.singleSize;

        if (preferredDisplaySize && currentDisplaySize !== preferredDisplaySize) {
            currentDisplaySize = preferredDisplaySize;
            applyDefaultZoomForDisplaySize(currentDisplaySize);
            updateCanvasSizeUI(currentDisplaySize, ScreenCoordinates, Logger);
            setupRulers();
            Logger.ui(`Default display size set from DSPSIZ: ${currentDisplaySize}`);
        }

        syncDisplaySizeRadioButtons(currentDisplaySize);
        syncDisplaySizeRadioAvailability(displayConfig);
    }
    
    // Update UI based on read-only mode
    function updateReadOnlyMode() {
        return updateReadOnlyModeUI({
            Logger,
            isReadOnly,
            getSaveMode,
            setCurrentView: (value) => { currentView = value; },
            updatePreviewView
        });
    }
    
    
    // Setup numbered rulers 
    function setupRulers() {
        setupRulersUI(currentDisplaySize, ScreenCoordinates, Logger);
    }
    
    
    // Navigate to previous record
    function navigateToPreviousRecord() {
        return navigateToPreviousRecordUI({
            Logger,
            vscode,
            getAllRecords: () => allRecords,
            getCurrentRecord: () => currentRecord,
            getCurrentView: () => currentView
        });
    }
    
    // Navigate to next record
    function navigateToNextRecord() {
        return navigateToNextRecordUI({
            Logger,
            vscode,
            getAllRecords: () => allRecords,
            getCurrentRecord: () => currentRecord,
            getCurrentView: () => currentView
        });
    }
    
    
    // Generate a unique field name for the current record
    function generateUniqueFieldName(prefix) {
        return generateUniqueFieldNameUI({
            prefix,
            fields,
            IdGenerator
        });
    }
    
    // Create a new field on the canvas
    function createField(type, row, col) {
        return createFieldUI({
            type,
            row,
            col,
            Logger,
            fields,
            generateUniqueFieldName,
            generateId,
            getDefaultLength,
            getWindowDimensions,
            getCurrentRecord: () => currentRecord,
            getCurrentDisplaySize: () => currentDisplaySize,
            renderField,
            renderWindowField,
            getSubfileRelationship,
            getSflRowSpan,
            getSflpagValue,
            selectField,
            addFieldToDds,
            showFieldProperties
        });
    }
    
    // Helper: Apply display attribute classes to field element
    function applyAttributeClasses(fieldElement, attributes) {
        return applyAttributeClassesUI({
            fieldElement,
            attributes
        });
    }

    // Shared: compute display text, width, color and classes for a field (Designer/Preview)
    function computeFieldDisplay(field, mode = 'designer') {
        return computeFieldDisplayUI({
            field,
            mode,
            ColorUtils,
            ScreenCoordinates,
            getKeywordDisplay,
            getFieldDisplayText
        });
    }

    function getFieldDisplayText(field, fieldLength) {
        return getFieldDisplayTextUI({
            field,
            fieldLength,
            getFieldCharForDisplay
        });
    }
    
    // Helper: Get keyword display text
    function getKeywordDisplay(keywordName, keywordArgs = null) {
        return getKeywordDisplayUI({
            keywordName,
            keywordArgs
        });
    }
    
    // Helper: Set field element content and styling based on field type
    function setFieldContent(fieldElement, field) {
        return setFieldContentUI({
            fieldElement,
            field,
            computeFieldDisplay
        });
    }
    
    // Helper: Setup common field element properties and event listeners
    function setupFieldElement(fieldElement, field) {
        return setupFieldElementUI({
            fieldElement,
            field,
            Logger,
            applyAttributeClasses,
            setFieldContent,
            selectField,
            isReadOnly,
            editField
        });
    }
    
    // Render a field on the canvas
    function renderField(field) {
        return renderFieldUI({
            field,
            Logger,
            ScreenCoordinates,
            getCurrentDisplaySize: () => currentDisplaySize,
            setupFieldElement,
            getFieldDisplayText
        });
    }
    
    // Render field positioned relative to a window
    function renderWindowField(field, windowDimensions) {
        return renderWindowFieldUI({
            field,
            windowDimensions,
            Logger,
            ScreenCoordinates,
            getCurrentDisplaySize: () => currentDisplaySize,
            setupFieldElement,
            getFieldDisplayText
        });
    }
    
    // Helper function to get display character for a field
    function getFieldCharForDisplay(field) {
        return getFieldCharForDisplayUI({
            field
        });
    }
    
    // Select a field and show its properties
    function selectField(field) {
        return selectFieldUI({
            field,
            Logger,
            deselectAllFields,
            getSelectedField: () => selectedField,
            setSelectedField: (value) => { selectedField = value; },
            indicatorConfigurations,
            getFreshFieldFromDds: (targetField) => getFreshFieldFromDdsUI({
                field: targetField,
                Logger,
                getCurrentDocument: () => currentDocument,
                getCurrentRecord: () => currentRecord,
                parseDspfForPreview,
                getFields: () => fields,
                updateFieldAtIndex: (index, updatedField) => { fields[index] = updatedField; }
            }),
            showFieldProperties
        });
    }
    
    // Deselect all fields
    function deselectAllFields() {
        return deselectAllFieldsUI({
            Logger,
            indicatorConfigurations,
            setSelectedField: (value) => { selectedField = value; },
            showFieldProperties
        });
    }

    // -------------------- Shared indicator UI helpers --------------------
    // Convierte un array de indicadores en texto como "02 43 11" o "N03 51"
    function formatIndicatorLabel(list) {
        return formatIndicatorLabelUI(list);
    }

    // Actualiza el botón con el texto generado por formatIndicatorLabel
    function setIndicatorButtonState(btn, indicators) {
        return setIndicatorButtonStateUI({
            btn,
            indicators,
            formatIndicatorLabel
        });
    }
    
    // Attribute UI metadata (shared by variables, constants, and keyword fields)
    const ATTRIBUTE_UI_DEFS = [
        { key: 'blink', label: 'Blinking (BL)', checkboxId: 'attr-blink', dataAttr: 'blink', extraClass: '' },
        { key: 'columnSeparator', label: 'Column Separator (CS)', checkboxId: 'attr-column-separator', dataAttr: 'columnSeparator', extraClass: '' },
        { key: 'highlight', label: 'High Intensity (HI)', checkboxId: 'attr-high-intensity', dataAttr: 'highlight', extraClass: '' },
        { key: 'nonDisplay', label: 'Non-Display (ND)', checkboxId: 'attr-non-display', dataAttr: 'nonDisplay', extraClass: '' },
        { key: 'reverse', label: 'Reverse Image (RI)', checkboxId: 'attr-reverse-image', dataAttr: 'reverse', extraClass: '' },
        { key: 'underline', label: 'Underline (UL)', checkboxId: 'attr-underline', dataAttr: 'underline', extraClass: '' },
        { key: 'cursorPosition', label: 'Cursor Position (PC)', checkboxId: 'attr-cursor-position', dataAttr: 'cursorPosition', extraClass: '' },
        { key: 'modifiedDataTag', label: 'Set modified data tag (MDT)', checkboxId: 'attr-mdt', dataAttr: 'modifiedDataTag', extraClass: 'usage-not-output-attr' },
        { key: 'protect', label: 'Protect field (PR)', checkboxId: 'attr-protect', dataAttr: 'protect', extraClass: 'usage-not-output-attr' },
        { key: 'operatorId', label: 'Operator ID magnetic card (OID)', checkboxId: 'attr-oid', dataAttr: 'operatorId', extraClass: 'usage-not-output-attr' },
        { key: 'selectLightPen', label: 'Select by light pen (SP)', checkboxId: 'attr-select-pen', dataAttr: 'selectLightPen', extraClass: 'usage-not-output-attr' }
    ];

    const KEYWORD_ATTRIBUTE_ALLOW_LIST = new Set(['underline','reverse','blink','highlight','cursorPosition','columnSeparator','nonDisplay']);

    function renderAttributeRows(allowedKeys = null, fieldType = 'variable') {
        return renderAttributeRowsUI({
            allowedKeys,
            fieldType,
            attributeUiDefs: ATTRIBUTE_UI_DEFS
        });
    }

    function getAttributeCheckboxMap(allowedKeys = null) {
        return getAttributeCheckboxMapUI({
            allowedKeys,
            attributeUiDefs: ATTRIBUTE_UI_DEFS
        });
    }
    
    // Show field properties in the properties panel
    function showFieldProperties(field) {
        return showFieldPropertiesUI({
            field,
            Logger,
            KEYWORD_ATTRIBUTE_ALLOW_LIST,
            renderAttributeRows,
            getAttributeCheckboxMap,
            setupIndicatorButtons,
            setIndicatorButtonState,
            indicatorConfigurations,
            applyFieldProperties,
            deleteField
        });
    }
    
    // Show screen/record properties in the properties panel
    function showScreenProperties() {
        return showScreenPropertiesUI({
            Logger,
            vscode,
            isReadOnly,
            getCurrentDocument: () => currentDocument,
            setCurrentDocument: (value) => { currentDocument = value; },
            getCurrentRecord: () => currentRecord,
            getCurrentView: () => currentView,
            getRecordType,
            IdGenerator,
            getWindowDimensions,
            setupPropertiesTabs: setupPropertiesTabsUI,
            loadSubfileControl: loadSubfileControlUI,
            applySubfileControl: applySubfileControlUI,
            loadFunctionKeys: loadFunctionKeysUI,
            createFunctionKeyRow: createFunctionKeyRowUI,
            saveFunctionKeys: saveFunctionKeysUI,
            updateDocumentInEditor,
            generateDdsLineWithIndicators,
            indicatorConfigurations,
            DisplaySizeUtils,
            IndicatorUtils,
            scanIndicatorsBackward,
            setIndicatorButtonState,
            openIBMiModal,
            applyWindowDimensions,
            parseDspfFields,
            updatePreviewView,
            showScreenProperties
        });
    }
    
    // Get the type of the current record (SFLCTL, SFL, or SCREEN)
    function getRecordType(recordName) {
        return getRecordTypeUI({
            recordName,
            currentDocument
        });
    }
    
    // Get subfile relationship (SFL + SFLCTL pairing)
    // Returns { sflRecord, sflctlRecord, companionRecord } or null if not a subfile record
    function getSubfileRelationship(recordName) {
        return getSubfileRelationshipUI({
            recordName,
            currentDocument,
            getRecordType,
            Logger
        });
    }
    
    // Get SFLPAG value from SFLCTL record
    function getSflpagValue(sflctlRecordName) {
        return getSflpagValueUI({
            sflctlRecordName,
            currentDocument,
            currentDisplaySize,
            DisplaySizeUtils,
            Logger
        });
    }

    function getSflRowSpan(fieldsForSpan, targetRecord, subfileRelationship) {
        return getSflRowSpanUI({
            fields: fieldsForSpan,
            targetRecord,
            subfileRelationship
        });
    }
    
    // Parse WINDOW dimensions from a line during record parsing
    // Returns windowDimensions object if found for current display size, null otherwise
    function parseWindowDimensionsFromLine(trimmedLine, currentRecordName, currentWindowDimensions) {
        return parseWindowDimensionsFromLineUI({
            trimmedLine,
            currentRecordName,
            currentWindowDimensions,
            currentDisplaySize,
            DisplaySizeUtils,
            currentDocument,
            getWindowDimensions,
            Logger
        });
    }
    
    // Get window dimensions for DS3 and DS4 if this is a WINDOW record
    function getWindowDimensions(recordName) {
        const lines = currentDocument.split('\n');
        let inTargetRecord = false;
        const result = {
            hasWindow: false,
            isReference: false,
            referenceName: null,
            ds3: null,
            ds4: null
        };
        
        // Get display size configuration
        const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();

            // Skip comments/empty lines (DDS comment style: A* in fixed columns)
            const isComment = (line.length > 6 && line[5] === 'A' && line[6] === '*') || trimmedLine.startsWith('A*');
            if (!trimmedLine || isComment) {
                continue;
            }

            // Track record boundaries using explicit record definitions only
            const recordMatch = trimmedLine.match(/^.{0,5}A\s+R\s+(\w+)/);
            if (recordMatch) {
                const foundRecord = recordMatch[1];

                if (inTargetRecord && foundRecord !== recordName) {
                    break;
                }

                inTargetRecord = (foundRecord === recordName);
                continue;
            }

            // Look for WINDOW keywords
            if (inTargetRecord && trimmedLine.includes('WINDOW(')) {
                // Check if it's a reference to another window record (no digits, just a name)
                const windowRefMatch = trimmedLine.match(/WINDOW\(([A-Z0-9_]+)\)/);
                if (windowRefMatch && !/\d+\s+\d+/.test(windowRefMatch[0])) {
                    // It's a reference to another WINDOW record
                    const referencedRecord = windowRefMatch[1];
                    Logger.window(`Found WINDOW reference to ${referencedRecord} in record ${recordName}`);
                    
                    // Get dimensions from referenced record
                    const refResult = getWindowDimensions(referencedRecord);
                    
                    // Return with reference info and resolved dimensions
                    return {
                        hasWindow: refResult.hasWindow,
                        isReference: true,
                        referenceName: referencedRecord,
                        ds3: refResult.ds3,
                        ds4: refResult.ds4
                    };
                }
                
                // Otherwise, it's direct coordinates
                const windowMatch = trimmedLine.match(/WINDOW\((\d+)\s+(\d+)\s+(\d+)\s+(\d+)\)/);
                if (windowMatch) {
                    const dimensions = {
                        row: parseInt(windowMatch[1]),
                        col: parseInt(windowMatch[2]),
                        height: parseInt(windowMatch[3]),
                        width: parseInt(windowMatch[4])
                    };
                    
                    result.hasWindow = true;
                    result.isReference = false;
                    
                    // Check for explicit display size marker
                    if (trimmedLine.includes('*DS3')) {
                        result.ds3 = dimensions;
                    } else if (trimmedLine.includes('*DS4')) {
                        result.ds4 = dimensions;
                    } else if (displayConfig.singleSize) {
                        // No marker, but single size mode - assign to both sizes
                        result.ds3 = dimensions;
                        result.ds4 = dimensions;
                    }
                }
            }
        }
        
        return result;
    }
    
    // Apply window dimensions changes to DDS
    function applyWindowDimensions() {
        return applyWindowDimensionsUI({
            Logger,
            isReadOnly,
            getCurrentDocument: () => currentDocument,
            setCurrentDocument: (value) => { currentDocument = value; },
            getCurrentRecord: () => currentRecord,
            updateDocumentInEditor,
            parseDspfFields
        });
    }
    
    // Transfer indicators from modal configuration to field object
    // Consolidates duplicated indicator transfer logic for color, attributes, checks, keywords
    // Options: { kind, keys, field, fieldType, attrFormat }
    // - kind: 'color' | 'attr' | 'check' | 'keyword'
    // - keys: array of items to transfer (colors, attribute names, check codes, keyword name)
    // - field: target field object to update
    // - fieldType: for logging context (e.g., 'field', 'keyword')
    // - attrFormat: for attributes only - 'grouped' or 'individual'
    function transferIndicators(options) {
        const {
            kind,
            keys,
            field,
            fieldType = 'field',
            attrFormat = 'individual'
        } = options;

        if (!field || !kind || !keys || keys.length === 0) {
            Logger.warn(`transferIndicators: Invalid options for ${kind}:`, { kind, keysCount: keys?.length, fieldName: field?.name });
            return false;
        }

        let indicatorsModified = false;
        let storageKey = null;
        let indicatorsKey = null;
        let modifiedKey = null;

        switch (kind) {
            case 'color':
                storageKey = 'color';
                indicatorsKey = 'colorIndicators';
                modifiedKey = 'colorIndicatorsModified';
                break;
            case 'attr':
                storageKey = 'attr';
                indicatorsKey = 'attributeIndicators';
                modifiedKey = 'attributeIndicatorsModified';
                break;
            case 'check':
                storageKey = 'check';
                indicatorsKey = 'checkIndicators';
                modifiedKey = 'checkIndicatorsModified';
                break;
            case 'keyword':
                storageKey = 'keyword';
                indicatorsKey = 'keywordIndicators';
                modifiedKey = 'keywordIndicatorsModified';
                break;
            default:
                Logger.error(`transferIndicators: Unknown kind "${kind}"`);
                return false;
        }

        // Initialize storage if needed
        if (!field[indicatorsKey]) {
            field[indicatorsKey] = kind === 'color' || kind === 'attr' ? {} : [];
        }

        // For grouped format attributes, collect indicators once
        let groupedIndicators = null;

        // Transfer indicators for each key
        keys.forEach(key => {
            const configKey = `${storageKey}:${key}`;
            const hasConfig = indicatorConfigurations && indicatorConfigurations.has(configKey);

            if (hasConfig) {
                const indicators = Array.from(indicatorConfigurations.get(configKey));
                const parsedIndicators = indicators.map(ind => {
                    return typeof ind === 'string' ? JSON.parse(ind) : ind;
                });

                if (kind === 'keyword') {
                    // Keywords store indicators as array (not keyed)
                    field[indicatorsKey] = parsedIndicators;
                } else if (kind === 'attr' && attrFormat === 'grouped') {
                    // Grouped format: collect once, apply to all
                    if (!groupedIndicators) {
                        groupedIndicators = parsedIndicators;
                    }
                } else if (kind === 'color' || kind === 'attr' || kind === 'check') {
                    // Individual format: each key gets its own indicators
                    // Store in new groups structure for color and attr
                    if (kind === 'color' || kind === 'attr') {
                        field[indicatorsKey][key] = {
                            groups: [{ indicators: parsedIndicators }],
                            isOr: false
                        };
                    } else {
                        // Check indicators keep old format
                        field[indicatorsKey][key] = parsedIndicators;
                    }
                }

                indicatorsModified = true;
                Logger.debug(`[transferIndicators-${kind}] Transferred ${parsedIndicators.length} indicators for ${key}`);
            } else {
                // No config entry means user cleared indicators for this key
                if (kind === 'keyword') {
                    field[indicatorsKey] = [];
                } else if (kind === 'attr' || kind === 'color' || kind === 'check') {
                    if (field[indicatorsKey] && field[indicatorsKey][key]) {
                        delete field[indicatorsKey][key];
                        indicatorsModified = true;
                        Logger.debug(`[transferIndicators-${kind}] Cleared indicators for ${key} (no config entry)`);
                    }
                }
            }
        });

        // For grouped attributes, apply to all active attributes
        if (kind === 'attr' && attrFormat === 'grouped' && groupedIndicators !== null) {
            keys.forEach(key => {
                field[indicatorsKey][key] = [...groupedIndicators]; // Clone
                Logger.debug(`[transferIndicators-attr] Applied ${groupedIndicators.length} shared indicators to ${key}`);
            });
        }

        // Remove indicators for keys that are no longer selected (for color, attr, check)
        if (kind !== 'keyword') {
            Object.keys(field[indicatorsKey]).forEach(existingKey => {
                if (!keys.includes(existingKey)) {
                    delete field[indicatorsKey][existingKey];
                    indicatorsModified = true;
                    Logger.debug(`[transferIndicators-${kind}] Removed indicators for unselected ${existingKey}`);
                }
            });
        }

        // Clean up empty indicators storage
        if (kind === 'keyword') {
            if (field[indicatorsKey].length === 0) {
                delete field[indicatorsKey];
            }
        } else {
            if (Object.keys(field[indicatorsKey]).length === 0) {
                delete field[indicatorsKey];
            }
        }

        // Mark field if indicators were modified
        if (indicatorsModified) {
            field[modifiedKey] = true;
        }

        return indicatorsModified;
    }

    // Shared function to apply color changes from checkboxes to field object
    function applyColorChanges(field) {
        return applyColorChangesUI({
            field,
            Logger,
            transferIndicators
        });
    }
    
    // Apply property changes to a field. Apply Changes button.
    function applyFieldProperties(field) {
        return applyFieldPropertiesUI({
            field,
            Logger,
            getSelectedField: () => selectedField,
            setSelectedField: (value) => { selectedField = value; },
            getFields: () => fields,
            getCurrentRecord: () => currentRecord,
            getCurrentDocument: () => currentDocument,
            setCurrentDocument: (value) => { currentDocument = value; },
            applyColorChanges,
            getAttributeCheckboxMap,
            transferIndicators,
            KEYWORD_ATTRIBUTE_ALLOW_LIST,
            updateFieldInDds,
            parseDspfFields,
            updateSourceViewUI,
            vscode,
            showFieldProperties,
            selectField
        });
    }
    
    // Delete a field
    function deleteField(field) {
        if (isReadOnly) {
            Logger.warn('Cannot delete field in read-only mode');
            return;
        }
        
        Logger.debug('Attempting to delete field:', field);
        Logger.debug('Field ID:', field.id, 'Type:', field.type, 'Name:', field.name);
        
        // Show confirmation modal
        showDeleteConfirmationUI({
            field,
            Logger,
            onConfirm: () => executeDeleteFieldUI({
                field,
                Logger,
                fields,
                deselectAllFields,
                removeFieldFromDds
            })
        });
    }
    
    // Edit field (double-click handler)
    // Edit a field (focus properties panel)
    function editField(field) {
        return editFieldUI({
            field,
            Logger,
            isReadOnly,
            selectField
        });
    }
    
    // Move an existing field to a new position
    function moveField(fieldId, newRow, newCol) {
        return moveFieldUI({
            fieldId,
            newRow,
            newCol,
            Logger,
            fields,
            getCurrentRecord: () => currentRecord,
            setCurrentRecord: (value) => { currentRecord = value; },
            getCurrentDisplaySize: () => currentDisplaySize,
            getWindowDimensions,
            renderField,
            renderWindowField,
            getSubfileRelationship,
            getSflpagValue,
            selectField,
            updateFieldInDds
        });
    }
    
    // Save document
    function saveDocument() {
        return saveDocumentUI({
            Logger,
            vscode,
            getCurrentDocument: () => currentDocument,
            getCurrentRecord: () => currentRecord,
            showNotification
        });
    }
    
    // Switch between views
    function switchToView(viewName) {
        if (viewName === 'designer') {
            applyDefaultZoomForDisplaySize(currentDisplaySize, 'designer');
        } else {
            setViewZoom(1);
        }

        return switchToViewUI({
            viewName,
            Logger,
            setCurrentView: (value) => { currentView = value; },
            getSelectedField: () => selectedField,
            setSelectedField: (value) => { selectedField = value; },
            getFields: () => fields,
            getCurrentDocument: () => currentDocument,
            parseDspfFields,
            showFieldProperties,
            updatePreviewView,
            updateSourceViewUI,
            vscode,
            setCurrentDocument: (value) => { currentDocument = value; },
            getCurrentRecord: () => currentRecord,
            getSaveMode,
            setupSourceSearchUI,
            scrollToRecordInSource,
            focusSourceEditor: focusSourceEditorUI
        });
    }
    
    // Scroll to the line where the current record starts in source view
    function scrollToRecordInSource() {
        return scrollToRecordInSourceUI({
            currentRecord,
            currentDocument,
            Logger
        });
    }
    
    // Update the preview view with current document
    function updatePreviewView() {
        const result = updatePreviewViewUI({
            Logger,
            ScreenCoordinates,
            parseDspfForPreview,
            generateWindowFieldHtml,
            generateFieldHtml,
            setupPreviewDisplaySizeListeners: setupPreviewDisplaySizeListenersUI,
            updateCanvasSize: (displaySize) => updateCanvasSizeUI(displaySize, ScreenCoordinates, Logger),
            setupRulers,
            parseDspfFields,
            getCurrentDocument: () => currentDocument,
            getCurrentRecord: () => currentRecord,
            getCurrentDisplaySize: () => currentDisplaySize,
            setCurrentDisplaySize: (value) => { currentDisplaySize = value; },
            applyDefaultZoomForDisplaySize,
            updatePreviewView
        });

        applyDisplaySizeSettingsFromDocument();
        return result;
    }
    
    
    // ============================================================================
    // Subfile Helper Functions
    // ============================================================================
    
    // Helper: Apply SFLPAG repetition to fields array
    // Creates visual copies of SFL fields based on SFLPAG value
    // Returns: Array with original fields + visual copies
    function applySflpagRepetition(fields, targetRecord, subfileRelationship) {
        return applySflpagRepetitionUI({
            fields,
            targetRecord,
            subfileRelationship,
            getSflpagValue,
            Logger
        });
    }

    // Helper: Scan backwards from keyword line to collect all indicator-only lines
    // Returns: { groups: [{indicators: [...]}], isOr: boolean, scannedLines: [...] }
    function scanIndicatorsBackward(lines, startIndex, lineOffset, contextLabel = '') {
        return scanIndicatorsBackwardUI({
            lines,
            startIndex,
            lineOffset,
            contextLabel,
            IndicatorUtils,
            Logger
        });
    }

    // Shared attribute/color scanner to unify Designer and Preview parsing
    function scanAttributeLinesAfterField(options) {
        return scanAttributeLinesAfterFieldUI({
            options,
            Logger,
            IndicatorUtils,
            scanIndicatorsBackward,
            extractAttributes,
            attributeContentRegex
        });
    }
    
    // Parse DSPF content for preview
    function parseDspfForPreview(content, targetRecord = null) {
        const lines = content.split('\n');
        let fields = []; // Changed to let for SFLPAG reassignment
        let recordName = '';
        let screenSize = { rows: 24, cols: 80 };
        let windowDimensions = null;
        let currentRecordName = null;
        let inTargetRecord = false;
        const parsePositionContext = { previousPosition: null };
        let skipNextLines = 0; // Track lines to skip (for multi-line constants)
        
        Logger.parse('Parsing DSPF for preview, target record:', targetRecord);
        
        lines.forEach((line, index) => {
            // Skip lines that are part of multi-line constants
            if (skipNextLines > 0) {
                skipNextLines--;
                return;
            }
            
            const trimmedLine = line.trim();
            
            // Skip comment lines and empty lines
            if (!trimmedLine || trimmedLine.startsWith('A*')) {
                return;
            }
            
            // Extract screen size
            if (trimmedLine.includes('DSPSIZ(')) {
                const match = trimmedLine.match(/DSPSIZ\((\d+)\s+(\d+)/);
                if (match) {
                    screenSize.rows = parseInt(match[1]);
                    screenSize.cols = parseInt(match[2]);
                }
            }
            
			// Check for record definition line
			if (trimmedLine.match(/^.{0,5}A\s+R\s+\w+/)) {
				const match = trimmedLine.match(/R\s+(\w+)/);
				if (match) {
					currentRecordName = match[1];
					// If no target record specified, use the first non-subfile record found
					if (!targetRecord && !recordName && !trimmedLine.includes('SFL')) {
						targetRecord = currentRecordName;
						Logger.parse(`No target record specified, using first found: ${targetRecord}`);
					}
					// Check if this is our target record
					inTargetRecord = (targetRecord === currentRecordName);
                    parsePositionContext.previousPosition = null;
					Logger.parse(`Found record: ${currentRecordName}, target: ${inTargetRecord}`);
					
					// Set the main record name if not set and this is our target
					if (inTargetRecord && !recordName) {
						recordName = currentRecordName;
					}
				}
				return;
			}            // Check for WINDOW dimensions matching current display size
            if (inTargetRecord) {
                const parsedWindowDimensions = parseWindowDimensionsFromLine(trimmedLine, currentRecordName, windowDimensions);
                if (parsedWindowDimensions) {
                    windowDimensions = parsedWindowDimensions;
                }
            }
            
            // Parse field definitions only if we're in the target record
            // Align detection with Designer (absolute column 5 = 'A') and skip WINDOW keywords
                const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                if (inTargetRecord && line.length > 6 && line[5] === 'A' && (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /(^|\s)\+\d{1,3}(\s|$)/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) && !trimmedLine.includes('WINDOW(')) {
                // Check for multi-line constant (ends with '-' or '+' before quote)
                let lineToProcess = line;
                if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                    Logger.parse(`Multi-line constant detected at line ${index + 1}`);
                    
                    // Use shared function to process continuation lines
                    const result = processMultiLineContinuation({
                        initialLine: line,
                        getNextLine: (idx) => idx < lines.length ? lines[idx] : null,
                        startIndex: index + 1,
                        context: 'PREVIEW'
                    });
                    
                    lineToProcess = result.fullLine;
                    skipNextLines = result.linesConsumed; // Mark lines to be skipped in main loop
                }
                
                // Use Designer parser for consistent constant handling
                const field = parseFieldLineForDesigner(lineToProcess, parsePositionContext);
                if (field) {
                    field.recordName = currentRecordName; // Track which record this field belongs to
                    
                    // Initialize indicator storage structures
                    field.attributeIndicators = {};
                    field.colorIndicators = {};

                    // For all field types (variables, keywords, constants), scan backward to get field-level indicators from previous lines
                    const groups = [];
                    let hasOrLogic = false;
                    
                    // Scan backward for indicators in previous lines (if index > 0)
                    if (index > 0) {
                        let contextLabel = 'PREVIEW-VARIABLE-BACKWARD';
                        if (field.type === 'keyword' || field.isKeyword) {
                            contextLabel = 'PREVIEW-KEYWORD-BACKWARD';
                        } else if (field.type === 'constant') {
                            contextLabel = 'PREVIEW-CONSTANT-BACKWARD';
                        }
                        const backwardScan = scanIndicatorsBackward(lines, 0, index, contextLabel);
                            
                        // scanIndicatorsBackward returns groups already properly merged
                        backwardScan.scannedLines.forEach(scannedLine => {
                            if (scannedLine.indicators && scannedLine.indicators.length > 0) {
                                groups.push({ indicators: scannedLine.indicators });
                                if (scannedLine.isOr) {
                                    hasOrLogic = true;
                                }
                            }
                        });
                    }
                    
                    // Check for inline indicators (found during parsing in the same line as field)
                    // All field types (variables, keywords, constants) can have inline indicators
                    if (field._inlineIndicators && field._inlineIndicators.length > 0) {
                        const inlineIsOr = field._inlineIsOr || false;
                        
                        if (inlineIsOr) {
                            // Inline indicators are from a line with 'AO' prefix - create new OR group
                            groups.push({ indicators: field._inlineIndicators });
                            hasOrLogic = true;
                        } else {
                            // Inline indicators from 'A' line - join the last group or create new one
                            if (groups.length > 0) {
                                groups[groups.length - 1].indicators.push(...field._inlineIndicators);
                            } else {
                                groups.push({ indicators: field._inlineIndicators });
                            }
                        }
                        
                        // Remove temporary storage
                        delete field._inlineIndicators;
                        delete field._inlineIsOr;
                    }
                    
                    // Set field-level indicators with groups structure
                    if (groups.length > 0) {
                        // Multiple groups = OR logic, single group = AND logic
                        field.indicators = {
                            groups: groups,
                            isOr: hasOrLogic || groups.length > 1
                        };
                    }

                    scanAttributeLinesAfterField({
                        lines,
                        startIndex: index,
                        field,
                        contextLabel: 'PREVIEW',
                        attributeRegex: /COLOR\(|DSPATR\(|EDTCDE\(|EDTWRD\(|EDTMSK\(|DFTVAL\(|DFT\(|VALUES\(|CNTFLD\(/
                    });
                    
                    Logger.debug(`Parsed preview field: ${field.name} (${field.type}) at ${field.row},${field.col} for record ${currentRecordName}`);
                    fields.push(field);
                } else {
                    Logger.warn(`Failed to parse line: "${trimmedLine.substring(0, 60)}..."`);
                }
            }
        });
        
        Logger.parse(`Preview parsed ${fields.length} fields for record ${targetRecord || 'ALL'}`);
        
        // Check if target record is part of a subfile (SFL/SFLCTL) relationship
        if (targetRecord) {
            const subfileRel = getSubfileRelationship(targetRecord);
            if (subfileRel && subfileRel.companionRecord) {
                Logger.parse(`Preview: Parsing companion record: ${subfileRel.companionRecord}`);
                
                // Parse fields from companion record
                let inCompanionRecord = false;
                let companionRecordName = null;
                const companionParsePositionContext = { previousPosition: null };
                
                lines.forEach((line, index) => {
                    if (skipNextLines > 0) {
                        skipNextLines--;
                        return;
                    }
                    
                    const trimmedLine = line.trim();
                    
                    if (!trimmedLine || trimmedLine.startsWith('A*')) {
                        return;
                    }
                    
                    // Check for record definition start
                    if (trimmedLine.match(/^.{0,5}A\s+R\s+\w+/)) {
                        const match = trimmedLine.match(/R\s+(\w+)/);
                        if (match) {
                            companionRecordName = match[1];
                            inCompanionRecord = (subfileRel.companionRecord === companionRecordName);
                            companionParsePositionContext.previousPosition = null;
                            if (inCompanionRecord) {
                                Logger.parse(`Preview: Found companion record: ${companionRecordName}`);
                            }
                        }
                    }
                    
                    // Parse fields from companion record (align with Designer detection)
                    const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                    if (inCompanionRecord && line.length > 6 && line[5] === 'A' && (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /(^|\s)\+\d{1,3}(\s|$)/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) && !trimmedLine.includes('WINDOW(')) {
                        // Check for multi-line constant (ends with '-' or '+' before quote)
                        let lineToProcess = line;
                        if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                            Logger.parse(`Preview: Multi-line constant in companion record detected at line ${index + 1}`);
                            
                            // Use shared function to process continuation lines
                            const result = processMultiLineContinuation({
                                initialLine: line,
                                getNextLine: (idx) => idx < lines.length ? lines[idx] : null,
                                startIndex: index + 1,
                                context: 'PREVIEW-COMPANION'
                            });
                            
                            lineToProcess = result.fullLine;
                            skipNextLines = result.linesConsumed; // Mark lines to be skipped in main loop
                        }
                        
                        // Use Designer parser for consistent constant handling
                        const field = parseFieldLineForDesigner(lineToProcess, companionParsePositionContext);
                        if (field) {
                            field.isBackgroundRecord = true;
                            field.recordName = companionRecordName;
                            
                            // Initialize indicator storage structures
                            field.attributeIndicators = {};
                            field.colorIndicators = {};

                            scanAttributeLinesAfterField({
                                lines,
                                startIndex: index,
                                field,
                                contextLabel: 'PREVIEW-COMPANION',
                                includeDftval: true,
                                attributeRegex: /COLOR\(|DSPATR\(|EDTCDE\(|EDTWRD\(|EDTMSK\(|DFTVAL\(|DFT\(|VALUES\(|CNTFLD\(/,
                                stopOnFieldKeywordsRegex: /(PSHBTN(FLD|CHC)|RANGE\()/
                            });
                            
                            Logger.debug(`Preview: Parsed companion field: ${field.name} at ${field.row},${field.col} with color=${field.color}, attrs=${field.attributes ? Object.keys(field.attributes).join(',') : 'none'}`);
                            fields.push(field);
                        }
                    }
                });
            }
        }
        
        // Use WINDOW dimensions as declared in DDS (no auto-adjustment)
        if (windowDimensions) {
            Logger.window(`Using declared window dimensions: ${windowDimensions.height}x${windowDimensions.width} at (${windowDimensions.row},${windowDimensions.col})`);
        }
        
        // Apply SFLPAG repetition for both SFL and SFLCTL records
        const subfileRelationship = getSubfileRelationship(targetRecord);
        fields = applySflpagRepetition(fields, targetRecord, subfileRelationship);
        
        // CRITICAL: If we're viewing an SFL record and its SFLCTL has WINDOW dimensions,
        // use the SFLCTL's window dimensions for positioning SFL fields
        if (subfileRelationship && subfileRelationship.sflRecord === targetRecord) {
            const sflctlWindowDims = getWindowDimensions(subfileRelationship.sflctlRecord);
            if (sflctlWindowDims.hasWindow) {
                const sflctlWindow = currentDisplaySize === 'DS3' ? sflctlWindowDims.ds3 : sflctlWindowDims.ds4;
                if (sflctlWindow) {
                    windowDimensions = sflctlWindow;
                    Logger.window(`SFL ${targetRecord}: Using SFLCTL ${subfileRelationship.sflctlRecord} WINDOW dimensions: ${windowDimensions.height}x${windowDimensions.width} at (${windowDimensions.row},${windowDimensions.col})`);
                }
            }
        }
        
        return {
            recordName,
            screenSize,
            fields,
            windowDimensions
        };
    }
    
    // ============================================================================
    // Field Parsing Helper Functions
    // ============================================================================
    
    // Helper: Extract row and column from parts array
    // Returns: { row, col, nextIndex } or null if invalid
    function extractRowColFromParts(parts, startIndex, previousPosition = null) {
        return extractRowColFromPartsUI({
            parts,
            startIndex,
            previousPosition
        });
    }

    function updatePreviousPositionContext(parseContext, row, col, length) {
        if (!parseContext || typeof row !== 'number' || typeof col !== 'number') {
            return;
        }

        parseContext.previousPosition = {
            row,
            col,
            length: Number.isFinite(length) ? length : 0
        };
    }
    
    // Helper: Parse DDS type specification (e.g., "10A", "15S", "7P", "3Y", "2F")
    // Returns: { length, typeChar, dataType } or null if invalid
    function parseDdsTypeSpecification(typeSpec, hasDecimals = false) {
        return parseDdsTypeSpecificationUI({
            typeSpec,
            hasDecimals
        });
    }
    
    // Helper: Parse usage and decimals from parts
    // Returns: { decimals, usage, hasDecimals, nextIndex }
    function parseUsageAndDecimals(parts, startIndex) {
        return parseUsageAndDecimalsUI({
            parts,
            startIndex
        });
    }
    
    // Helper: Extract FLTPCN precision from line
    // Returns: 'SINGLE', 'DOUBLE', or null
    function extractFloatPrecision(line, dataType) {
        return extractFloatPrecisionUI({
            line,
            dataType
        });
    }
    
    // Helper: Extract shift code from type spec for zoned/double types
    // Returns: shift code (S/Y/N/D/I for zoned, J/E/O/G for double) or null
    function extractShiftCode(typeSpec, dataType) {
        return extractShiftCodeUI({
            typeSpec,
            dataType
        });
    }
    
    /**
     * Process multi-line DDS constant continuation lines.
     * Handles continuation indicators (trailing dashes) and properly concatenates lines.
     * 
     * @param {Object} options - Configuration object
     * @param {string} options.initialLine - The first line containing opening quote and dash
     * @param {Function} options.getNextLine - Function(index) that returns next line or null
     * @param {number} options.startIndex - Starting index for continuation lines
     * @param {string} options.context - Context for logging ('PREVIEW' or 'DESIGNER')
     * @returns {Object} Result object: { fullLine: string, linesConsumed: number }
     */
    function processMultiLineContinuation(options) {
        return processMultiLineContinuationUI({
            ...options,
            Logger
        });
    }
    
    // Extract display attributes with indicators
    // Returns: { attrs: {...}, indicators: [], isGroupedFormat: boolean }
    function extractAttributes(content, fullLine = null) {
        return extractAttributesUI({
            content,
            fullLine,
            IndicatorUtils,
            Logger
        });
    }
    
    // extractColorWithIndicator removed - COLOR now uses unified indicator system in scanAttributeLinesAfterField
    // extractCheckOptions and applyCheckOptionsFromCodes removed - CHECK now uses unified indicator system like COLOR/DFTVAL

    // When opening a document in edit mode, convert any relative +NN coordinates to absolute
    // values so that the edit pipeline (findFieldBlockInDds, updateFieldInDds, etc.) can locate
    // and update fields reliably by their absolute row/col.
    // Returns { content: string, modified: boolean }.
    function resolveRelativeCoordinatesInDocument(content) {
        const lines = content.split('\n');
        const posContext = { previousPosition: null };
        let modified = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();

            if (!trimmed || trimmed.startsWith('A*')) { continue; }

            // Reset position context at each record boundary
            if (/^.{0,5}A\s+R\s+\w+/.test(trimmed)) {
                posContext.previousPosition = null;
                continue;
            }

            if (line.length <= 5 || line[5] !== 'A') { continue; }

            // DDS columnar format: coordinates live in fixed columns.
            // We only inspect the coordinate region to avoid false positives in keyword args.
            const coordArea = line.length > 38 ? line.substring(38, 46) : '';
            const hasRelativeToken = /\+\d{1,3}/.test(coordArea);

            if (!hasRelativeToken) {
                // No relative token in coord area: parse to keep posContext current
                parseFieldLineForDesigner(line, posContext);
                continue;
            }

            // Parse with context to resolve absolute coordinates
            const field = parseFieldLineForDesigner(line, posContext);
            if (!field) { continue; }

            // Write absolute coordinates into the fixed DDS coordinate slot to keep
            // all fields aligned in the same column layout.
            // Fixed slot used elsewhere in parser: line.substring(39, 44)
            const paddedLine = line.length < 44 ? line.padEnd(44, ' ') : line;
            const fixedCoords = field.row.toString().padStart(2, ' ') + field.col.toString().padStart(3, ' ');
            const newLine = paddedLine.substring(0, 39) + fixedCoords + paddedLine.substring(44);

            if (newLine !== line) {
                lines[i] = newLine;
                modified = true;
                Logger.parse(`Resolved relative coordinate on line ${i + 1}: "${trimmed.substring(0, 60)}"`);
            }
        }

        return { content: lines.join('\n'), modified };
    }

    // Generate HTML for a single field
    // windowOffset: optional {row, col} to adjust position for WINDOW-relative fields
    function generateFieldHtml(field, windowOffset = null) {
        // IBM i authentic positioning: 20px per row, 8px per column
        // Position fields to match ruler marks exactly
        // Using outline instead of border so it doesn't affect child positioning
        
        // Calculate absolute position (with window offset if provided)
        let absoluteRow = field.row;
        let absoluteCol = field.col;
        
        if (windowOffset) {
            // WINDOW-relative positioning: adjust for window position
            absoluteRow = windowOffset.row + field.row - 1;
            absoluteCol = windowOffset.col + field.col + 1;
        }
        
        // Use shared helper to compute display value, color, and classes
        const { text: displayValue, widthPx, color: colorInline, classes } = computeFieldDisplay(field, 'preview');
        
        // Log for window fields
        if (windowOffset) {
            Logger.window(`Window field "${field.name}" type=${field.type} at (${field.row},${field.col}) value=[${displayValue}] length=${displayValue.length}`);
        }
        
        // Color handled exclusively by computeFieldDisplay for both views
        const isKeyword = field.type === 'keyword' || field.isKeyword;
        const colorStyle = '';
        
        // Visual copies render with same opacity as original
        
        // Calculate line wrapping for character fields that exceed screen width
        const segments = ScreenCoordinates.calculateFieldWrapping(field, currentDisplaySize);
        
        if (segments.length === 1) {
            // Single line field - render normally
            const { top, left } = ScreenCoordinates.toPixels(absoluteRow, absoluteCol);
            const widthStyle = widthPx ? `width: ${widthPx}px;` : '';
            const colorInlineStyle = colorInline ? `color: ${colorInline};` : '';
            const baseClass = (field.type === 'constant' || isKeyword) ? 'constant' : `${field.type}-field`;
            const extraClasses = classes.length ? ` ${classes.join(' ')}` : '';
            
            return `        <div class="field ${baseClass}${extraClasses}" style="top: ${top}px; left: ${left}px; ${widthStyle} ${colorInlineStyle} white-space: pre;">${displayValue}</div>\n`;
        } else {
            // Multi-line field - render each segment
            let html = '';
            let offset = 0;
            const baseClass = (field.type === 'constant' || isKeyword) ? 'constant' : `${field.type}-field`;
            const extraClasses = classes.length ? ` ${classes.join(' ')}` : '';
            const colorInlineStyle = colorInline ? `color: ${colorInline};` : '';
            
            segments.forEach(segment => {
                const segmentRow = windowOffset ? windowOffset.row + segment.row - 1 : segment.row;
                const segmentCol = windowOffset ? windowOffset.col + segment.col + 1 : segment.col;
                const { top, left } = ScreenCoordinates.toPixels(segmentRow, segmentCol);
                const segmentValue = displayValue.substring(offset, offset + segment.length);
                const widthStyle = `width: ${ScreenCoordinates.getWidthInPixels(segment.length)}px;`;
                
                html += `        <div class="field ${baseClass}${extraClasses}" data-field-segment="true" style="top: ${top}px; left: ${left}px; ${widthStyle} ${colorInlineStyle} white-space: pre;">${segmentValue}</div>\n`;
                
                offset += segment.length;
            });
            
            return html;
        }
    }
    
    // Generate HTML for fields positioned relative to a window (wrapper for backward compatibility)
    function generateWindowFieldHtml(field, windowDimensions) {
        return generateWindowFieldHtmlUI({
            field,
            windowDimensions,
            generateFieldHtml
        });
    }
    
    // Update DDS code from current fields when drag and drop in canvas (Drag and drop)
    // Add a single field to DDS without regenerating everything
    function addFieldToDds(field) {
        const lines = currentDocument.split('\n');
        const ddsLine = generateDdsLine(field);
        
        // Find the current record boundaries - CRITICAL for WINDOW records
        let recordStartIndex = -1;
        let recordEndIndex = lines.length;
        let inTargetRecord = false;
        
        for (let i = 0; i < lines.length; i++) {
            const trimmedLine = lines[i].trim();
            
            // Check for record definition: A          R RECORDNAME
            if (trimmedLine.match(/^.{0,5}A\s+R\s+(\w+)/)) {
                const match = trimmedLine.match(/^.{0,5}A\s+R\s+(\w+)/);
                if (match) {
                    const recordName = match[1];
                    
                    // If we find our target record, mark the start
                    if (recordName === currentRecord) {
                        recordStartIndex = i;
                        inTargetRecord = true;
                        Logger.dds(`Found record ${currentRecord} at line ${i + 1}`);
                    }
                    // If we were in the target record and found a new one, mark the end
                    else if (inTargetRecord) {
                        recordEndIndex = i;
                        Logger.dds(`Record ${currentRecord} ends at line ${recordEndIndex + 1}, next record is ${recordName}`);
                        break;
                    }
                }
            }
        }
        
        if (recordStartIndex === -1) {
            Logger.error(`Record ${currentRecord} not found`);
            return;
        }
        
        Logger.dds(`Record boundaries: ${recordStartIndex + 1} to ${recordEndIndex}`);
        
        // Find the correct position to insert within the current record
        let insertIndex = recordStartIndex + 1; // Default to first line after record header
        
        // Search within the record boundaries for where to insert by row/col ordering
        for (let i = recordEndIndex - 1; i > recordStartIndex; i--) {
            const line = lines[i];
            const trimmedLine = line.trim();
            
            // Skip empty lines and comments
            if (!trimmedLine || trimmedLine.startsWith('A*')) {
                continue;
            }
            
            // Skip attribute-only lines (EDTCDE, COLOR, DSPATR, etc. without row/col)
            // Check if line has attributes starting from column 44 (index 43)
            const contentAfter44 = line.length > 43 ? line.substring(43) : '';
            const isAttributeLine = trimmedLine.startsWith('A ') && attributeContentRegex.test(contentAfter44);
            
            if (isAttributeLine) {
                continue;
            }
            
            // Skip multiline constant continuation lines (no row/col, but has quotes)
            // These are A-lines with text in quotes but no row/col position
            const isContinuationLine = trimmedLine.startsWith('A') && trimmedLine.includes("'") && !trimmedLine.match(/^A\s+\d+\s+\d+/);
            if (isContinuationLine) {
                Logger.dds(`Skipping continuation line during search at line ${i + 1}`);
                continue;
            }
            
            // Parse existing field position (check from column 38 onwards for row/col coordinates)
            const contentAfter38 = line.length > 38 ? line.substring(38) : '';
            const posMatch = contentAfter38.match(/^\s*(\d+)\s+(\d+)/);
            if (posMatch) {
                const existingRow = parseInt(posMatch[1]);
                const existingCol = parseInt(posMatch[2]);
                
                // If new field should come after this one, insert after it
                if (field.row > existingRow || (field.row === existingRow && field.col > existingCol)) {
                    // Insert after this field AND any attribute/continuation lines that follow it
                    insertIndex = i + 1;
                    Logger.dds(`New field row=${field.row} col=${field.col} comes after existing field at row=${existingRow} col=${existingCol}`);
                    
                    // Skip any attribute lines, comments, unknown keywords, and continuation lines that follow this field
                    while (insertIndex < recordEndIndex) {
                        const nextLine = lines[insertIndex];
                        const nextLineTrim = nextLine.trim();
                        
                        // Check for comments
                        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                         nextLineTrim.startsWith('A*') || 
                                         nextLineTrim.startsWith('*') || 
                                         nextLineTrim.startsWith('-');
                        
                        if (isComment) {
                            Logger.dds(`Skipping comment line at ${insertIndex + 1}`);
                            insertIndex++;
                            continue;
                        }
                        
                        // Stop on blank lines
                        if (!nextLineTrim || nextLineTrim === 'A') {
                            break;
                        }
                        
                        const nextLineContentAfter44 = nextLine.length > 43 ? nextLine.substring(43) : '';
                        const isNextAttr = nextLineTrim.startsWith('A ') && attributeContentRegex.test(nextLineContentAfter44);
                        
                        // Check if next line is a multiline constant continuation (A-line with quotes, no row/col)
                        const isNextContinuation = nextLineTrim.startsWith('A') && nextLineTrim.includes("'") && !nextLineTrim.match(/^A\s+\d+\s+\d+/);
                        
                        // Check if next line has only indicators (no coordinates, no keywords)
                        // Format: "A  06 43" or "AO 03" with nothing after column 18
                        const contentAfter18 = nextLine.length > 18 ? nextLine.substring(18).trim() : '';
                        const contentAfter38ForCoords = nextLine.length > 38 ? nextLine.substring(38) : '';
                        const hasCoordinatesInPosition = /^\s*\d+\s+\d+/.test(contentAfter38ForCoords);
                        const isIndicatorOnlyLine = nextLineTrim.startsWith('A') && 
                                                    !hasCoordinatesInPosition && 
                                                    contentAfter18 === '' &&
                                                    nextLineTrim.length > 1;
                        
                        // Check if line has unknown keywords (content after column 44 that's not a known attribute)
                        const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                        const hasUnknownKeyword = contentAfter43.length > 0 && !attributeContentRegex.test(contentAfter44);
                        
                        if (isNextAttr) {
                            Logger.dds(`Skipping attribute line at ${insertIndex + 1}`);
                            insertIndex++;
                        } else if (isNextContinuation) {
                            Logger.dds(`Skipping continuation line at ${insertIndex + 1}: ${nextLineTrim.substring(0, 50)}...`);
                            insertIndex++;
                        } else if (isIndicatorOnlyLine) {
                            Logger.dds(`Skipping indicator-only line at ${insertIndex + 1}`);
                            insertIndex++;
                        } else if (hasUnknownKeyword) {
                            Logger.dds(`Skipping unknown keyword line at ${insertIndex + 1}: ${contentAfter43.substring(0, 30)}...`);
                            insertIndex++;
                        } else {
                            break;
                        }
                    }
                    break;
                } else {
                    Logger.dds(`New field row=${field.row} col=${field.col} comes before existing field at row=${existingRow} col=${existingCol}`);
                }
            }
        }
        
        Logger.dds(`Inserting field ${field.name} at line ${insertIndex + 1} within record boundaries ${recordStartIndex + 1}-${recordEndIndex}`);
        
        // Insert the new line(s) - ddsLine may contain multiple lines for long constants
        const linesToInsert = ddsLine.split('\n');
        lines.splice(insertIndex, 0, ...linesToInsert);
        currentDocument = lines.join('\n');
        
        Logger.dds(`✅ Added field ${field.name} to record ${currentRecord} at line ${insertIndex + 1}`);
        updateDocumentInEditor();
    }

    // Parse keyword coordinates and name from DDS content area (after column 18)
    // DDS fixed format for keywords: row uses 2 positions and column uses 3 positions.
    // This supports values like " 1 20DATE", "11 20DATE", " 1120DATE", " 2122TIME".
    function parseKeywordPosition(contentAfter18) {
        const fixedMatch = contentAfter18.match(/^\s*([ 0-9]{2})([ 0-9]{3})(DATE|TIME|SYSNAME|USER)\b/);

        const extractDateArgs = (text, rowToken, colToken) => {
            const escapedRow = rowToken.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
            const escapedCol = colToken.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
            const dateArgsRegex = new RegExp(`^\\s*${escapedRow}${escapedCol}DATE\\(\\s*([^)]*?)\\s*\\)`, 'i');
            const dateArgsMatch = text.match(dateArgsRegex);
            return dateArgsMatch ? dateArgsMatch[1].trim() : null;
        };

        if (fixedMatch) {
            const row = parseInt(fixedMatch[1], 10);
            const col = parseInt(fixedMatch[2], 10);
            const keyword = fixedMatch[3];
            const keywordArgs = keyword === 'DATE'
                ? extractDateArgs(contentAfter18, fixedMatch[1], fixedMatch[2])
                : null;

            if (!Number.isNaN(row) && !Number.isNaN(col)) {
                return {
                    row: String(row),
                    col: String(col),
                    keyword,
                    keywordArgs
                };
            }
        }

        // Fallback for non-fixed formatting variants
        const fallbackMatch = contentAfter18.trim().match(/^(\d{1,2})\s+(\d{1,3})(DATE|TIME|SYSNAME|USER)\b/);
        if (!fallbackMatch) {
            return null;
        }

        const fallbackKeyword = fallbackMatch[3];
        const fallbackKeywordArgs = fallbackKeyword === 'DATE'
            ? (() => {
                const dateArgsMatch = contentAfter18.trim().match(/^\d{1,2}\s+\d{1,3}DATE\(\s*([^)]*?)\s*\)/i);
                return dateArgsMatch ? dateArgsMatch[1].trim() : null;
            })()
            : null;

        return {
            row: String(parseInt(fallbackMatch[1], 10)),
            col: String(parseInt(fallbackMatch[2], 10)),
            keyword: fallbackKeyword,
            keywordArgs: fallbackKeywordArgs
        };
    }
    
    // Remove a field from DDS. After update with updateFieldInDds.
    function findFieldBlockInDds(field, recordStartLine, recordEndLine) {
        const lines = currentDocument.split('\n');
        const targetRecord = field.recordName || currentRecord;
        
        Logger.dds(`findFieldBlockInDds: searching for field ${field.name} (row=${field.row}, col=${field.col}, type=${field.type}) in record ${targetRecord}`);
        
        // Find record boundaries if not provided
        if (recordStartLine === undefined || recordEndLine === undefined) {
            recordStartLine = -1;
            recordEndLine = lines.length;
            
            if (targetRecord) {
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const recordMatch = line.match(/^.{0,5}A\s+R\s+(\w+)/);
                    if (recordMatch && recordMatch[1] === targetRecord) {
                        recordStartLine = i;
                    }
                    if (recordStartLine >= 0 && i > recordStartLine && line.match(/^.{0,5}A\s+R\s+\w+/)) {
                        recordEndLine = i;
                        break;
                    }
                }
            }
        }
        
        const startSearch = recordStartLine >= 0 ? recordStartLine : 0;
        let endSearch = recordEndLine;
        
        // Find the field's main line
        let fieldLineIndex = -1;
        
        if (field.type === 'keyword' || field.isKeyword) {
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                // Match keywords with OR without indicators (columns 7-18 can have indicators or spaces)
                // Format: "     A  03                            19 11DATE" or "     AO 05                            19 11DATE"
                // We look for the position+keyword pattern regardless of what's in columns 7-18
                // Extract content after column 18 (position starts around column 39)
                const contentAfter18 = line.substring(18);
                const parsedKeyword = parseKeywordPosition(contentAfter18);
                
                if (parsedKeyword && parsedKeyword.keyword === field.name && 
                    parsedKeyword.row === rowStr && parsedKeyword.col === colStr) {
                    fieldLineIndex = i;
                    break;
                }
            }
        } else if (field.type === 'constant') {
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                // Search in content after column 18 to handle indicators in columns 7-18
                // Format: "     A  03                            19 11'TEXT'" (spaced)
                // Format: "     A                                      1911'TEXT'" (compact)
                const contentAfter18 = line.substring(18);
                const constMatch = contentAfter18.match(/(\d{1,2})\s+(\d{1,3})'/) ||
                                    contentAfter18.match(/^(\d{1,2})(\d{3})'/);
                
                if (constMatch && constMatch[1] === rowStr && constMatch[2] === colStr) {
                    fieldLineIndex = i;
                    break;
                }
            }
        } else {
            // Regular field
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                const isConstantLine = line.match(/\d+\s+\d+'/);
                if (line.includes(field.name) && line.includes(rowStr) && line.includes(colStr) && !isConstantLine) {
                    fieldLineIndex = i;
                    break;
                }
            }
        }
        
        if (fieldLineIndex === -1) {
            Logger.dds(`  ❌ Field ${field.name} NOT FOUND at coordinates (${field.row}, ${field.col})`);
            return null;
        }
        
        Logger.dds(`  ✅ Found field at line ${fieldLineIndex + 1}`);
        
        // Scan BACKWARD for indicator-only lines before the field
        // USE SAME LOGIC AS scanIndicatorsBackward for consistency
        let blockStartIndex = fieldLineIndex;
        let j = fieldLineIndex - 1;
        
        while (j >= startSearch) {
            const prevLine = lines[j];
            const prevTrim = prevLine.trim();
            
            // Stop on blank lines or non-A lines
            if (prevTrim === '' || prevTrim === 'A' || !prevTrim.startsWith('A')) {
                break;
            }
            
            // Check if this is a different field/record/constant definition
            const hasConstant = prevTrim.match(/\d+\s+\d+'/);
            const isRecordDef = prevTrim.match(/^.{0,5}A\s+R\s+\w+/);
            const hasFieldName = prevLine.length >= 28 && /^[A-Z_][A-Z0-9_]*$/i.test(prevLine.substring(18, 28).trim());
            
            if (isRecordDef || hasConstant || hasFieldName) {
                // This is a different field - stop
                break;
            }

            // Check for attribute keywords or comments that might be part of previous field
            // Attributes are positioned from column 44 onwards (index 43)
            const prevContentAfter44 = prevLine.length > 43 ? prevLine.substring(43).trim() : '';
            const hasAttribute = prevContentAfter44.length > 0 && /^[A-Z]+\s*\(/.test(prevContentAfter44);
            const isComment = (prevLine.length > 6 && prevLine[5] === 'A' && prevLine[6] === '*') || prevTrim.startsWith('A*');
            
            if (hasAttribute || isComment) {
                // This belongs to a previous field - stop
                break;
            }


            // Check if this is an indicator-only line
            // USE SAME LOGIC AS scanIndicatorsBackward for consistency
            const prevContentAfter18 = prevLine.substring(18).trim();
            const hasFieldNameAfter18 = /^[A-Z][A-Z0-9_]{2,}\s+\d+/i.test(prevContentAfter18);
            const indicatorAreaContent = prevLine.substring(6, 18).trim();
            const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);
            const isIndicatorOnlyLine = !hasFieldNameAfter18 && hasIndicatorPattern && indicatorAreaContent.length > 0;
            
            if (isIndicatorOnlyLine) {
                // Include this indicator line in the block
                blockStartIndex = j;
                j--;
                continue;
            }
            
            // Unrecognized line - stop
            break;
        }
        
        if (blockStartIndex < fieldLineIndex) {
            Logger.dds(`  ⬆️ Found ${fieldLineIndex - blockStartIndex} indicator line(s) before field`);
        }
        
        // Now find all associated lines (including comments and unknown keywords)
        let blockEndIndex = fieldLineIndex;
        let i = fieldLineIndex + 1;
        
        while (i < lines.length && i < endSearch) {
            const nextLine = lines[i];
            const nextTrim = nextLine.trim();
            const parsedNextKeyword = parseKeywordPosition(nextLine.substring(18));
            
            // Check for comments
            const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                             nextTrim.startsWith('A*') || 
                             nextTrim.startsWith('*') || 
                             nextTrim.startsWith('-');
            
            if (isComment) {
                blockEndIndex = i;
                i++;
                continue;
            }
            
            // Stop on blank lines
            if (nextTrim === '' || nextTrim === 'A') {
                break;
            }
            
            // If it doesn't start with 'A', stop
            if (!nextTrim.startsWith('A')) {
                break;
            }
            
            // Check if line has a field/constant/record definition
            const hasConstant = nextTrim.match(/\d+\s+\d+'/);
            const isRecordDef = nextTrim.match(/^.{0,5}A\s+R\s+\w+/);
            
            if (isRecordDef || hasConstant || parsedNextKeyword) {
                break;
            }
            
            // Check if this line has a field name in columns 19-28 (DDS field name area)
            // Field names are alphanumeric and typically followed by type specification
            const fieldNameArea = nextLine.length >= 28 ? nextLine.substring(18, 28).trim() : '';
            const hasFieldName = fieldNameArea.length > 0 && /^[A-Z_][A-Z0-9_]*$/i.test(fieldNameArea);
            
            // If there's a field name AND it's followed by type spec or coordinates, it's a new field
            if (hasFieldName) {
                const contentAfter28 = nextLine.length > 28 ? nextLine.substring(28).trim() : '';
                // Check for type spec pattern (like "10A", "2F 0", etc.) or coordinates
                const hasTypeOrCoordinates = /^\d+[A-Z]?/.test(contentAfter28) || /^\d+\s+[IOB]?\s*\d+\s+\d+/.test(contentAfter28);
                if (hasTypeOrCoordinates) {
                    // This is a new field definition - stop scanning
                    break;
                }
            }
            
            // Check for indicator-only lines (lines with indicators but no keyword)
            // These are lines like "A  01 02 03" or "AO 50" with nothing in columns 19-80
            const contentAfter18 = nextLine.substring(18).trim();
            const hasOnlyIndicators = /^A[O\s]\s*[N\d\s]+$/.test(nextTrim) && contentAfter18 === '';
            
            if (hasOnlyIndicators) {
                // This is an indicator-only line - include it in the block
                blockEndIndex = i;
                i++;
                continue;
            }
            
            // Check for content at column 44+ (attributes, unknown keywords)
            const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
            
            // Check for known attribute keywords (DSPATR, COLOR, CHECK, DFTVAL, etc.)
            const knownKeywordMatch = contentAfter43.match(/^([A-Z0-9_]+)\s*\(/i);
            const hasKnownKeyword = knownKeywordMatch
                ? ATTRIBUTE_KEYWORDS_SET.has(knownKeywordMatch[1].toUpperCase())
                : false;
            
            if (contentAfter43.length > 0 || hasKnownKeyword) {
                // This is an attribute or keyword line - include it in the block
                blockEndIndex = i;
                i++;
                continue;
            }
            
            // Unrecognized line type - stop
            break;
        }
        
        Logger.dds(`  Block found: lines ${blockStartIndex + 1} to ${blockEndIndex + 1} (${blockEndIndex - blockStartIndex + 1} lines total)`);
        
        return {
            startLine: blockStartIndex,
            endLine: blockEndIndex,
            count: blockEndIndex - blockStartIndex + 1
        };
    }

    // Borra el campo del archivo source
    function removeFieldFromDds(field) {
        const lines = currentDocument.split('\n');
        
        // Use the field's recordName if available, otherwise fall back to currentRecord
        const targetRecord = field.recordName || currentRecord;
        
        Logger.debug('Searching for field to remove:', field, 'in record:', targetRecord);
        
        // Find record boundaries first
        let recordStartLine = -1;
        let recordEndLine = lines.length;
        
        if (targetRecord) {
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                //Primero busca el número de línea del record que contiene el campo
                const recordMatch = line.match(/^.{0,5}A\s+R\s+(\w+)/);
                if (recordMatch && recordMatch[1] === targetRecord) {
                    recordStartLine = i;
                    Logger.parse('Found record start at line', i + 1);
                }
                // Check if we found a different record after finding ours
                if (recordStartLine >= 0 && i > recordStartLine && line.match(/^.{0,5}A\s+R\s+\w+/)) {
                    recordEndLine = i;
                    Logger.parse('Found record end at line', i);
                    break;
                }
            }
        }
        
        const startSearch = recordStartLine >= 0 ? recordStartLine : 0;
        let endSearch = recordEndLine;
        
        if (field.type === 'keyword' || field.isKeyword) {
            // For keywords: match by name AND position
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            
            Logger.debug(`Looking for keyword "${field.name}" at row=${rowStr} col=${colStr}`);
            
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                // Match keywords with OR without indicators (SAME AS findFieldBlockInDds)
                // Format: "     A  03                            19 11DATE" or "     AO 05                            19 11DATE"
                // Extract content after column 18 (position starts around column 39)
                const contentAfter18 = line.substring(18);
                const parsedKeyword = parseKeywordPosition(contentAfter18);
                
                if (parsedKeyword && parsedKeyword.keyword === field.name && 
                    parsedKeyword.row === rowStr && parsedKeyword.col === colStr) {
                    
                    // SCAN BACKWARD for indicator-only lines before keyword (SAME AS VARIABLES)
                    let indicatorLinesToRemove = [];
                    Logger.dds('Scanning backward for indicator-only lines before keyword...');
                    
                    for (let j = i - 1; j >= startSearch; j--) {
                        const prevLine = lines[j];
                        const prevTrim = prevLine.trim();
                        
                        // Skip blank lines
                        if (prevTrim === '' || prevTrim === 'A') {
                            continue;
                        }
                        
                        // Skip comments
                        const isComment = (prevLine.length > 6 && prevLine[5] === 'A' && prevLine[6] === '*') || 
                                         prevTrim.startsWith('A*') || 
                                         prevTrim.startsWith('*');
                        if (isComment) {
                            continue;
                        }
                        
                        // Check if this is an indicator-only line (no keyword/field name, just indicators)
                        // Format: "A  11 42 54" or "AON03 51 43" or "AO 17"
                        // BUT NOT: "AO 02 43     FLD002" or "A  03                            19 11DATE"
                        
                        // Check if line has a keyword or field name
                        const hasKeywordOrField = /DATE|TIME|SYSNAME|USER/.test(prevLine) || 
                                                 (prevLine.length > 15 && /[A-Z_][A-Z0-9_]+/.test(prevLine.substring(15)));
                        
                        if (hasKeywordOrField) {
                            // This line has a field/keyword definition, stop scanning
                            Logger.dds(`  Stopped at line ${j}: has field/keyword`);
                            break;
                        }
                        
                        // Now check if it's an indicator-only line
                        const indicatorMatch = prevTrim.match(/^A\s*(O|N\d{2}|AND|\s)*\s*(?:N?\d{2}\s*)*$/);
                        
                        if (indicatorMatch) {
                            Logger.dds(`  Found indicator line at ${j}: "${prevTrim}"`);
                            indicatorLinesToRemove.push(j);
                        } else {
                            // Not an indicator line, stop scanning backward
                            Logger.dds(`  Stopped at line ${j}: not an indicator line`);
                            break;
                        }
                    }
                    
                    // Remove indicator lines (they're already in reverse order from the backward scan)
                    let keywordLineIndex = i; // Track where the keyword line is
                    if (indicatorLinesToRemove.length > 0) {
                        // DON'T reverse - array is already bottom-to-top
                        for (const idx of indicatorLinesToRemove) {
                            Logger.dds(`  Removing indicator line at index ${idx}`);
                            lines.splice(idx, 1);
                            keywordLineIndex--; // Adjust keyword line index since we removed lines before it
                            endSearch--; // Adjust end boundary
                        }
                        Logger.dds(`Removed ${indicatorLinesToRemove.length} indicator line(s) before keyword`);
                    }
                    
                    let linesToRemove = 1;
                    
                    // Special handling for DATE keyword
                    if (field.name === 'DATE') {
                        // Check if next line is EDTCDE (at adjusted index)
                        if (keywordLineIndex + 1 < lines.length && lines[keywordLineIndex + 1].match(/EDTCDE\(/)) {
                            linesToRemove = 2; // Remove DATE + EDTCDE
                            Logger.debug('Removing EDTCDE line for DATE keyword');
                            
                            // Check if line after EDTCDE has COLOR
                            if (keywordLineIndex + 2 < lines.length && lines[keywordLineIndex + 2].match(/COLOR\(/)) {
                                linesToRemove = 3; // Remove DATE + EDTCDE + COLOR
                                Logger.dds('Removing COLOR line after EDTCDE');
                            }
                        }
                    } else {
                        // For other keywords, check if next line has COLOR
                        if (keywordLineIndex + 1 < lines.length && lines[keywordLineIndex + 1].match(/COLOR\(/)) {
                            linesToRemove = 2; // Remove keyword + COLOR line
                            Logger.debug('Removing COLOR line');
                        }
                    }
                    
                    Logger.dds(`Removing ${linesToRemove} keyword line(s) starting at adjusted index ${keywordLineIndex}`);
                    lines.splice(keywordLineIndex, linesToRemove);
                    let removedCount = linesToRemove + indicatorLinesToRemove.length;
                    endSearch--; // Adjust end boundary after removing keyword
                    
                    // Set i to the adjusted position for comment/keyword cleanup
                    i = keywordLineIndex;
                    
                    // Remove comments and unknown keywords after the keyword (same as variables)
                    Logger.dds(`Starting comment/keyword cleanup at index ${i}, endSearch=${endSearch}, lines.length=${lines.length}`);
                    while (i < lines.length && i < endSearch) {
                        const nextLine = lines[i];
                        const nextTrim = nextLine.trim();
                        const parsedNextKeyword = parseKeywordPosition(nextLine.substring(18));
                        
                        Logger.dds(`  Checking line ${i}: "${nextTrim}"`);
                        
                        // Check for comments
                        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                         nextTrim.startsWith('A*') || 
                                         nextTrim.startsWith('*') || 
                                         nextTrim.startsWith('-');
                        
                        if (isComment) {
                            Logger.dds(`   Removing comment line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue;
                        }
                        
                        // Stop on blank lines
                        if (nextTrim === '' || nextTrim === 'A') {
                            Logger.dds(`   Stopping: blank line`);
                            break;
                        }
                        
                        // If it doesn't start with 'A', stop
                        if (!nextTrim.startsWith('A')) {
                            Logger.dds(`   Stopping: doesn't start with A`);
                            break;
                        }
                        
                        // Check if line has a field/constant/record definition
                        const hasConstant = nextTrim.match(/\d+\s+\d+'/);
                        const isRecordDef = nextTrim.match(/^.{0,5}A\s+R\s+\w+/);
                        
                        if (isRecordDef || hasConstant || parsedNextKeyword) {
                            Logger.dds(`   Stopping: found record def or constant`);
                            break;
                        }
                        
                        // Check for coordinates (new field)
                        const coordinateArea = nextLine.length > 39 ? nextLine.substring(39).trim() : '';
                        const hasCoordinates = /^\d{1,2}\s\d{1,2}/.test(coordinateArea) || /^\d{1,2}\s\d\D/.test(coordinateArea);
                        Logger.dds(`   Coordinates check: "${coordinateArea.substring(0, 10)}", hasCoordinates=${hasCoordinates}`);
                        if (hasCoordinates) {
                            Logger.dds(`   Stopping: found new field with coordinates`);
                            break;
                        }
                        
                        // Check for content at column 44+ (attributes, unknown keywords)
                        const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                        
                        Logger.dds(`   contentAfter43: "${contentAfter43}", length: ${contentAfter43.length}`);
                        
                        if (contentAfter43.length > 0) {
                            // Unknown keyword or attribute - remove it
                            Logger.dds(`   Removing unknown keyword/attribute line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue;
                        }
                        
                        // If we get here, it's something we don't recognize, stop
                        Logger.dds(`   Stopping: unrecognized line type`);
                        break;
                    }
                    
                    Logger.dds(`Removed keyword ${field.name} and ${removedCount - linesToRemove} associated line(s)`);
                    break;
                }
            }
        } else if (field.type === 'constant') {
            // For constants: search by row + col in content after column 18 (to handle indicators)
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            const valuePrefix = field.value.substring(0, Math.min(10, field.value.length));
            
            Logger.debug(`Looking for constant at row=${rowStr} col=${colStr} starting with "${valuePrefix}"`);
            Logger.debug(`Searching within record boundaries: lines ${startSearch + 1} to ${endSearch}`);
            
            let constantLineIndex = -1;
            let linesToRemove = 0;
            
            // Find the constant line
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                
                // Search in content after column 18
                const contentAfter18 = line.substring(18);
                const constMatch = contentAfter18.match(/(\d{1,2})\s+(\d{1,3})'/) ||
                                    contentAfter18.match(/^(\d{1,2})(\d{3})'/);
                
                if (constMatch && constMatch[1] === rowStr && constMatch[2] === colStr) {
                    // Verify value prefix after first quote
                    const quoteIndex = line.indexOf("'");
                    if (quoteIndex > 0) {
                        const lineValue = line.substring(quoteIndex + 1);
                        if (lineValue.startsWith(valuePrefix)) {
                            constantLineIndex = i;
                            linesToRemove = 1;
                            
                            // Multi-line: first line ends with '-'/'+' before closing quote
                            if (line.match(/'[^']*[-+]\s*$/)) {
                                let j = constantLineIndex + 1;
                                while (j < endSearch) {
                                    const cont = lines[j];
                                    const contTrim = cont.trim();
                                    // Stop at record header or new element
                                    const isRecordHeader = /^.{0,5}A\s+R\s+\w+/.test(contTrim);
                                    const isNewConstant = /\d+\s+\d+'/.test(contTrim);
                                    const isNewField = /\b[A-Z][A-Z0-9_]{2,}\s+\d+[A-Z]/i.test(contTrim);
                                    if (isRecordHeader || isNewConstant || isNewField) {break;}
                                    
                                    // Continuation line: 'A' start, has quote, no row/col
                                    const isContinuation = contTrim.startsWith('A') && contTrim.includes("'") && !contTrim.match(/\d+\s+\d+'/);
                                    if (!isContinuation) {break;}
                                    
                                    linesToRemove++;
                                    j++;
                                }
                            }
                            
                            // Now scan backward for indicator-only lines before the constant
                            const indicatorLinesToRemove = [];
                            if (constantLineIndex > startSearch) {
                                for (let k = constantLineIndex - 1; k >= startSearch; k--) {
                                    const prevLine = lines[k];
                                    const prevTrimmed = prevLine.trim();
                                    
                                    // Check if it's an indicator-only line
                                    // Format: "     A  03" or "     AO 05" (no position, no field name, no keyword)
                                    if (prevTrimmed.length < 10) {break;}
                                    if (!prevTrimmed.startsWith('A')) {break;}
                                    
                                    // Check if line has indicators in columns 7-18
                                    const hasIndicators = /^A(?:O)?\s*(?:N?\d{2}\s*)+$/.test(prevTrimmed);
                                    if (!hasIndicators) {break;}
                                    
                                    // Check that there's NO position or field content after column 18
                                    const contentAfter18 = prevLine.length > 18 ? prevLine.substring(18).trim() : '';
                                    if (contentAfter18.length > 0) {break;}
                                    
                                    indicatorLinesToRemove.unshift(k); // Add to front to maintain order
                                    Logger.debug(`Found indicator-only line before constant at line ${k + 1}: ${prevTrimmed}`);
                                }
                            }
                            
                            // Remove indicator lines first (in reverse order to avoid index shift)
                            indicatorLinesToRemove.forEach(idx => {
                                Logger.dds(`Removing indicator line at index ${idx}`);
                                lines.splice(idx, 1);
                                constantLineIndex--; // Adjust constant index
                            });
                            
                            // Now remove the constant lines at adjusted index
                            Logger.dds(`Removing ${linesToRemove} constant line(s) starting at adjusted index ${constantLineIndex}`);
                            lines.splice(constantLineIndex, linesToRemove);
                            let removedCount = linesToRemove + indicatorLinesToRemove.length;
                            endSearch--; // Adjust end boundary after removing constant
                            
                            // Set cleanupIndex to the adjusted position for comment/keyword cleanup
                            let cleanupIndex = constantLineIndex;
                            
                            // Remove comments and unknown keywords after the constant (same as variables)
                            Logger.dds(`Starting comment/keyword cleanup at index ${cleanupIndex}, endSearch=${endSearch}, lines.length=${lines.length}`);
                            while (cleanupIndex < lines.length && cleanupIndex < endSearch) {
                                const nextLine = lines[cleanupIndex];
                                const nextTrim = nextLine.trim();
                                
                                Logger.dds(`  Checking line ${cleanupIndex}: "${nextTrim}"`);
                                
                                // Check for comments
                                const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                                 nextTrim.startsWith('A*') || 
                                                 nextTrim.startsWith('*') || 
                                                 nextTrim.startsWith('-');
                                
                                if (isComment) {
                                    Logger.dds(`   Removing comment line: ${nextTrim.substring(0, 60)}...`);
                                    lines.splice(cleanupIndex, 1);
                                    removedCount++;
                                    endSearch--;
                                    continue;
                                }
                                
                                // Stop on blank lines
                                if (nextTrim === '' || nextTrim === 'A') {
                                    Logger.dds(`   Stopping: blank line`);
                                    break;
                                }
                                
                                // If it doesn't start with 'A', stop
                                if (!nextTrim.startsWith('A')) {
                                    Logger.dds(`   Stopping: doesn't start with A`);
                                    break;
                                }
                                
                                // Check if line has a field/constant/record definition
                                const hasConstant = nextTrim.match(/\d+\s+\d+'/);
                                const isRecordDef = nextTrim.match(/^.{0,5}A\s+R\s+\w+/);
                                
                                if (isRecordDef || hasConstant) {
                                    Logger.dds(`   Stopping: found record def or constant`);
                                    break;
                                }
                                
                                // Check for coordinates (new field)
                                const coordinateArea = nextLine.length > 39 ? nextLine.substring(39).trim() : '';
                                const hasCoordinates = /^\d{1,2}\s\d{1,2}/.test(coordinateArea) || /^\d{1,2}\s\d\D/.test(coordinateArea);
                                Logger.dds(`   Coordinates check: "${coordinateArea.substring(0, 10)}", hasCoordinates=${hasCoordinates}`);
                                if (hasCoordinates) {
                                    Logger.dds(`   Stopping: found new field with coordinates`);
                                    break;
                                }
                                
                                // Check for content at column 44+ (attributes, unknown keywords)
                                const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                                
                                Logger.dds(`   contentAfter43: "${contentAfter43}", length: ${contentAfter43.length}`);
                                
                                if (contentAfter43.length > 0) {
                                    // Unknown keyword or attribute - remove it
                                    Logger.dds(`   Removing unknown keyword/attribute line: ${nextTrim.substring(0, 60)}...`);
                                    lines.splice(cleanupIndex, 1);
                                    removedCount++;
                                    endSearch--;
                                    continue;
                                }
                                
                                // If we get here, it's something we don't recognize, stop
                                Logger.dds(`   Stopping: unrecognized line type`);
                                break;
                            }
                            
                            Logger.dds(`Removed constant and ${removedCount - linesToRemove} associated line(s)`);
                            break;
                        }
                    }
                }
            }
            
            if (constantLineIndex === -1) {
                Logger.error('Constant line not found in DDS');
            }
            
        } else {
            // For variables: search by field name + row + col
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            
            Logger.debug(`Looking for field "${field.name}" at row=${rowStr} col=${colStr}`);
            Logger.debug(`Searching within record boundaries: lines ${startSearch + 1} to ${endSearch}`);
            
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                
                // Match field name and position (must not be a constant line)
                // Some field lines may include inline attributes like VALUES('A' 'B') which contain quotes.
                // We should detect true constants (quote immediately after col) and avoid treating them as fields,
                // but still match field lines that include quotes later (attributes).
                Logger.debug(`Checking line ${i + 1}: includesName=${line.includes(field.name)}, includesRow=${line.includes(rowStr)}, includesCol=${line.includes(colStr)}, hasQuote=${line.includes("'")}`);
                const isConstantLine = line.match(/\d+\s+\d+'/); // true constant (quotes immediately after col)
                // Use includes for row/col to allow non-contiguous formatting (e.g., '2Y 0B 22 32')
                if (line.includes(field.name) && line.includes(rowStr) && line.includes(colStr) && !isConstantLine) {
                    Logger.dds('Found field line at index', i, ':', line);
                    
                    // SCAN BACKWARD for indicator-only lines before this field
                    let indicatorLinesToRemove = [];
                    Logger.dds('Scanning backward for indicator-only lines...');
                    
                    for (let j = i - 1; j >= startSearch; j--) {
                        const prevLine = lines[j];
                        const prevTrim = prevLine.trim();
                        
                        // Skip blank lines
                        if (prevTrim === '' || prevTrim === 'A') {
                            continue;
                        }
                        
                        // Skip comments
                        const isComment = (prevLine.length > 6 && prevLine[5] === 'A' && prevLine[6] === '*') || 
                                         prevTrim.startsWith('A*') || 
                                         prevTrim.startsWith('*');
                        if (isComment) {
                            continue;
                        }
                        
                        // Check if this is an indicator-only line (no field name, just indicators)
                        // Format: "A  11 42 54" or "AON03 51 43" or "AO 17"
                        // BUT NOT: "AO 02 43     FLD002" (has field name after indicators)
                        
                        // First check if line has a field name (letters after column 15)
                        const hasFieldName = prevLine.length > 15 && /[A-Z_][A-Z0-9_]+/.test(prevLine.substring(15));
                        
                        if (hasFieldName) {
                            // This line has a field definition, stop scanning
                            Logger.dds(`  Stopped at line ${j}: has field name`);
                            break;
                        }
                        
                        // Now check if it's an indicator-only line
                        const indicatorMatch = prevTrim.match(/^A\s*(O|N\d{2}|AND|\s)*\s*(?:N?\d{2}\s*)*$/);
                        
                        if (indicatorMatch) {
                            Logger.dds(`  Found indicator line at ${j}: "${prevTrim}"`);
                            indicatorLinesToRemove.push(j);
                        } else {
                            // Not an indicator line, stop scanning backward
                            Logger.dds(`  Stopped at line ${j}: not an indicator line`);
                            break;
                        }
                    }
                    
                    // Remove indicator lines (they're already in reverse order from the backward scan)
                    let fieldLineIndex = i; // Track where the field line is
                    if (indicatorLinesToRemove.length > 0) {
                        // DON'T reverse - array is already bottom-to-top (e.g., [337, 336, 335])
                        for (const idx of indicatorLinesToRemove) {
                            Logger.dds(`  Removing indicator line at index ${idx}`);
                            lines.splice(idx, 1);
                            fieldLineIndex--; // Adjust field line index since we removed lines before it
                            endSearch--; // Adjust end boundary
                        }
                        Logger.dds(`Removed ${indicatorLinesToRemove.length} indicator line(s) before field`);
                    }
                    
                    // Now remove the field line at the adjusted index
                    Logger.dds(`Removing field line at adjusted index ${fieldLineIndex}: "${lines[fieldLineIndex]}"`);
                    lines.splice(fieldLineIndex, 1);
                    let removedCount = 1 + indicatorLinesToRemove.length;
                    endSearch--; // Adjust end boundary after removing field
                    
                    // Set i to the adjusted position for attribute cleanup
                    i = fieldLineIndex;
                    
                    // IMPROVED: Use single loop with same logic as scanAttributeLinesAfterField
                    // Keep removing lines at position i (which now has the next line after field)
                    Logger.dds(`Starting attribute cleanup at index ${i}, endSearch=${endSearch}, lines.length=${lines.length}`);
                    while (i < lines.length && i < endSearch) {
                        const nextLine = lines[i];
                        const nextTrim = nextLine.trim();
                        
                        Logger.dds(`  Checking line ${i}: "${nextTrim}"`);
                        
                        // Check for comments (same logic as parser)
                        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                         nextTrim.startsWith('A*') || 
                                         nextTrim.startsWith('*') || 
                                         nextTrim.startsWith('-');
                        
                        if (isComment) {
                            Logger.dds(`   Removing comment line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue; // Don't increment i, keep checking same position
                        }
                        
                        // Stop on blank lines
                        if (nextTrim === '' || nextTrim === 'A') {
                            Logger.dds(`   Stopping: blank line`);
                            break;
                        }
                        
                        // If it doesn't start with 'A', stop
                        if (!nextTrim.startsWith('A')) {
                            Logger.dds(`   Stopping: doesn't start with A`);
                            break;
                        }
                        
                        // Check if line has a field/constant/record definition
                        const hasConstant = nextTrim.match(/\d+\s+\d+'/);
                        const isRecordDef = nextTrim.match(/^.{0,5}A\s+R\s+\w+/);
                        
                        // If there's a record definition or constant, stop
                        if (isRecordDef || hasConstant) {
                            Logger.dds(`   Stopping: found record def or constant`);
                            break;
                        }                        
                        
                        // CRITICAL: Check if this line has row/col coordinates in columns 38-43 (indices 37-42)
                        // If it does, it's a NEW FIELD and we must stop
                        // Example: "A                                 19 30DATE" has "19 30" starting around index 37
                        const coordinateArea = nextLine.length > 39 ? nextLine.substring(39).trim() : '';
                        const hasCoordinates = /^\d{1,2}\s\d{1,2}/.test(coordinateArea) || /^\d{1,2}\s\d\D/.test(coordinateArea);
                        Logger.dds(`   Coordinates check (raw substring 37+): "${coordinateArea.substring(0, 10)}", hasCoordinates=${hasCoordinates}`);
                        if (hasCoordinates) {
                            Logger.dds(`   Stopping: found new field with coordinates: "${coordinateArea.substring(0, 10)}"`);
                            break;
                        }
                        
                        // Check for content at column 44+ (attributes, unknown keywords)
                        const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                        
                        Logger.dds(`   contentAfter43: "${contentAfter43}", length: ${contentAfter43.length}`);
                        
                        if (contentAfter43.length > 0) {
                            // This line has something in the attribute area - remove it
                            // Could be: COLOR(WHT), DSPATR(RI), OVERLAY, KEEP, etc.
                            Logger.dds(`   Removing attribute/keyword line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue;
                        }

                        //Validación para saber si la linea solo tienen indicadores
                        const indicatorAreaContent = nextLine.substring(6, 18).trim();  
                        const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);
                        const hasFieldNameAfter18 = nextLine.length >= 28 && /^[A-Z][A-Z0-9_]{2,}\s+\d+/i.test(nextLine.substring(18).trim());
                        const isIndicatorOnlyLine = !hasFieldNameAfter18 && hasIndicatorPattern && indicatorAreaContent.length > 0;
                
                         // Si la línea solo tiene indicadores se debe validar la siguiente linea hasta encontrar una con un campo o atributo.
                         // Si es un atributo debe continuar con el proceso de eliminacion ya que es parte de la variable que se esta borrando; 
                         // Si es un campo  (tiene coordenadas) debe detenerse.
                        if (isIndicatorOnlyLine) {                         
                          if (i + 1 < lines.length) { 
                            const lookaheadLine = lines[i + 1];
                            const lookaheadCoordinatesArea = lookaheadLine.length > 39 ? lookaheadLine.substring(39).trim() : '';
                            const lookaheadHasCoordinates = /^\d{1,2}\s\d{1,2}/.test(lookaheadCoordinatesArea) || /^\d{1,2}\s\d\D/.test(lookaheadCoordinatesArea);
                            if (lookaheadHasCoordinates) {
                              Logger.dds(`   Stopping: next line indicates new field with coordinates: "${lookaheadCoordinatesArea.substring(0, 10)}"`);
                              break;
                            } else {
                               Logger.dds(`   Removing indicator-only line: ${nextTrim.substring(0, 60)}...`);
                               lines.splice(i, 1);
                               removedCount++;
                               endSearch--;    
                               continue;
                            }
                        }                                                      
                    }
                        // If we get here, it's something we don't recognize, stop
                        Logger.dds(`   Stopping: unrecognized line type`);
                        break;
                    }
                    
                    Logger.dds(`Removed field ${field.name} and ${removedCount - 1} associated line(s)`);
                    break;
                }
            }
        }
        
        currentDocument = lines.join('\n');
        Logger.parse('Document updated after removal');
        updateDocumentInEditor();
    }
    
    // Update a field in DDS (more efficient than remove + add) 
    // Contantes y Keywords separado. Pendiente hacer merge 
    function updateFieldInDds(field, oldField = null) {
        const lines = currentDocument.split('\n');
        
        const newDdsLine = generateDdsLine(field);
        let foundLine = false;
        
        // Use old field info for searching if provided
        const searchField = oldField || field;
        
        // Use the field's recordName if available, otherwise fall back to currentRecord
        const targetRecord = field.recordName || currentRecord;
        
        Logger.debug('Looking for field to update:', searchField.name, 'type:', searchField.type, 'in record:', targetRecord);
        Logger.debug('New DDS line will be:', newDdsLine);
        
        // Find the target record boundaries first
        let recordStartLine = -1;
        let recordEndLine = lines.length;
        
        if (targetRecord) {
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                // Check if this is the start of our record (exact match, not just includes)
                // Match: "     A          R SUBFILE" but not "     A          R PANTALLA  SFLCTL(SUBFILE)"
                const recordMatch = line.match(/^.{0,5}A\s+R\s+(\w+)/);
                if (recordMatch && recordMatch[1] === targetRecord) {
                    recordStartLine = i;
                    Logger.parse('Found record start at line', i + 1);
                    // Continue to find the end
                }
                // Check if we found a different record after finding ours
                if (recordStartLine >= 0 && i > recordStartLine && line.match(/^.{0,5}A\s+R\s+\w+/)) {
                    recordEndLine = i;
                    Logger.parse('Found record end at line', i);
                    break;
                }
            }
        }
        
        Logger.debug(`Searching within record boundaries: lines ${recordStartLine + 1} to ${recordEndLine}`);
        
        // UNIFIED APPROACH: Use findFieldBlockInDds for ALL field types (variables, constants, keywords)
        // This eliminates ~150 lines of duplicated detection logic
        const fieldBlock = findFieldBlockInDds(searchField, recordStartLine, recordEndLine);
        
        if (fieldBlock) {
            const fieldTypeLabel = searchField.type === 'constant' ? 'constant' : 
                                  (searchField.type === 'keyword' || searchField.isKeyword) ? 'keyword' : 'field';
            Logger.parse(`Found ${fieldTypeLabel} at line ${fieldBlock.startLine + 1}, block ends at line ${fieldBlock.endLine + 1}`);
            Logger.dds(`${fieldTypeLabel} block contains ${fieldBlock.count} line(s)`);
            
            // Preserve only comments and UNKNOWN keywords (e.g., OVERLAY, KEEP) after the field
            const blockLines = lines.slice(fieldBlock.startLine, fieldBlock.endLine + 1);
            const preservedExtras = [];

            // Track whether we are inside a multi-line VALUES continuation block
            let insideValuesContinuation = false;
            // Keep indicator-only lines pending until we know whether they belong to
            // a preserved (non-regenerated) keyword line that follows.
            let pendingIndicatorLines = [];

            blockLines.forEach((line, idx) => {
                // SKIP INDEX 0: that's the original field declaration that will be regenerated
                if (idx === 0) {
                    Logger.dds(`Skipping blockLines[0] (original field declaration at line ${fieldBlock.startLine + 1})`);
                    return;
                }

                const globalIndex = fieldBlock.startLine + idx;
                const trimmed = line.trim();
                const contentAfter43 = line.length > 43 ? line.substring(43).trim() : '';
                const contentAfter18 = line.length > 18 ? line.substring(18).trim() : '';

                // For constants: do NOT preserve continuation lines
                if (searchField.type === 'constant') {
                    const isContinuationLine = trimmed.startsWith('A') && trimmed.includes("'") && !trimmed.match(/\d+\s+\d+'/);
                    if (isContinuationLine) {
                        Logger.dds(`Skipping constant continuation line ${globalIndex + 1}`);
                        return;
                    }
                }

                // Always keep comments
                const isComment = trimmed.startsWith('A*') || trimmed.startsWith('*');
                if (isComment) {
                    if (pendingIndicatorLines.length > 0) {
                        preservedExtras.push(...pendingIndicatorLines);
                        pendingIndicatorLines = [];
                    }
                    preservedExtras.push(line);
                    Logger.dds(`Preserving comment line ${globalIndex + 1}`);
                    return;
                }

                // Indicator-only lines can belong to the following keyword line.
                // Buffer them first and decide preservation when we inspect next lines.
                const indicatorAreaContent = line.length > 6 ? line.substring(6, 18).trim() : '';
                const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);
                const hasFieldNameAfter18 = /^[A-Z][A-Z0-9_]{0,9}\s+\d+/i.test(contentAfter18);
                const isIndicatorOnlyLine =
                    line.length > 6 &&
                    line[5] === 'A' &&
                    hasIndicatorPattern &&
                    indicatorAreaContent.length > 0 &&
                    !hasFieldNameAfter18 &&
                    contentAfter18 === '';

                if (isIndicatorOnlyLine) {
                    pendingIndicatorLines.push(line);
                    Logger.dds(`Buffering indicator-only line ${globalIndex + 1}`);
                    return;
                }

                // Detect VALUES( lines and track multi-line continuation.
                // A continuation line is one whose DDS line ends with - or + before the newline.
                // When VALUES( is found on a line that ends with a continuation char, subsequent
                // lines that are pure quoted-value continuations (no keyword word) must also be skipped.
                if (/VALUES\(/i.test(contentAfter43)) {
                    pendingIndicatorLines = [];
                    insideValuesContinuation = /[+-]\s*$/.test(contentAfter43);
                    Logger.dds(`Skipping known VALUES line ${globalIndex + 1}, continuation=${insideValuesContinuation}`);
                    return; // regenerated by generateFieldValuesLines
                }

                // Skip continuation lines that belong to a multi-line VALUES block
                if (insideValuesContinuation) {
                    // A pure continuation line has only quoted tokens (and possibly a closing paren)
                    const isPureValuesContinuation = /^'/.test(contentAfter43) || /^\)/.test(contentAfter43);
                    if (isPureValuesContinuation) {
                        pendingIndicatorLines = [];
                        // If this line does NOT end with a continuation char, the block is closed
                        insideValuesContinuation = /[+-]\s*$/.test(contentAfter43);
                        Logger.dds(`Skipping VALUES continuation line ${globalIndex + 1}, continuation=${insideValuesContinuation}`);
                        return;
                    }
                    // If it doesn't look like a continuation token, stop tracking
                    insideValuesContinuation = false;
                }

                // Unknown keywords: keep them. Known attributes (COLOR, DSPATR, EDTCDE, etc.) are regenerated
                if (contentAfter43.length > 0) {
                    const keywordMatch = contentAfter43.match(/^([A-Z0-9_]+)\b/i);
                    const keywordName = keywordMatch ? keywordMatch[1].toUpperCase() : '';
                    const isKnown = REGENERATED_KEYWORDS_SET.has(keywordName);
                    if (!isKnown) {
                        if (pendingIndicatorLines.length > 0) {
                            preservedExtras.push(...pendingIndicatorLines);
                            pendingIndicatorLines = [];
                        }
                        preservedExtras.push(line);
                        Logger.dds(`Preserving unknown keyword line ${globalIndex + 1}: "${contentAfter43}"`);
                    } else {
                        pendingIndicatorLines = [];
                    }
                    return;
                }

                // Fallback safety: preserve non-empty trailing lines that are not regenerated
                // attributes to avoid dropping field-associated content due format variations.
                if (trimmed.startsWith('A') && contentAfter18.length > 0) {
                    if (pendingIndicatorLines.length > 0) {
                        preservedExtras.push(...pendingIndicatorLines);
                        pendingIndicatorLines = [];
                    }
                    preservedExtras.push(line);
                    Logger.dds(`Preserving trailing associated line ${globalIndex + 1}: "${trimmed}"`);
                    return;
                }

                // If line is empty/unrecognized within the block, do not carry pending indicators.
                pendingIndicatorLines = [];
            });

            // Preserve dangling indicator-only lines if they reached end of block without
            // a regenerated keyword to consume them.
            if (pendingIndicatorLines.length > 0) {
                preservedExtras.push(...pendingIndicatorLines);
            }

            // New block: regenerated field lines + preserved extras
            const linesToInsert = newDdsLine.split('\n').filter(l => l.length > 0);
            const finalBlock = [...linesToInsert, ...preservedExtras];
            lines.splice(fieldBlock.startLine, fieldBlock.count, ...finalBlock);
            Logger.dds(`Updated ${fieldTypeLabel}: replaced ${fieldBlock.count} lines with ${finalBlock.length} lines (${preservedExtras.length} preserved extras)`);
            
            foundLine = true;
        }
        
        if (!foundLine) {
            Logger.error('Could not find field/constant to update:', field.name);
            Logger.debug('Available lines in document:');
            lines.forEach((line, i) => {
                if (line.trim() && !line.trim().startsWith('A*')) {
                    Logger.debug(`  ${i + 1}: ${line}`);
                }
            });
            return;
        }
        
        currentDocument = lines.join('\n');
        updateDocumentInEditor();
    }
    
    // Helper function to update document in editor
    function updateDocumentInEditor() {
        return updateDocumentInEditorUI({
            currentRecord,
            currentDocument,
            Logger,
            vscode,
            getSaveMode
        });
    }
    
    // ============================================================================
    // DDS Generation Helper Functions
    // ============================================================================
    
    // Centralized DSPATR attribute mapping
    const DSPATR_ATTRIBUTE_MAP = {
        'underline': 'UL',
        'reverse': 'RI',
        'blink': 'BL',
        'highlight': 'HI',
        'cursorPosition': 'PC',
        'columnSeparator': 'CS',
        'nonDisplay': 'ND',
        'modifiedDataTag': 'MDT',
        'protect': 'PR',
        'operatorId': 'OID',
        'selectLightPen': 'SP'
    };
    
    // Helper: Generate a DDS line with optional indicators
    function generateDdsLineWithIndicators(keyword, indicatorsOrGroups) {
        return generateDdsLineWithIndicatorsUI({
            keyword,
            indicatorsOrGroups,
            IndicatorUtils
        });
    }
    
    // Helper: Apply indicator changes from indicatorConfigurations Map back to field object
    // This ensures that any edits made through the IBM i modal are reflected in DDS generation
    function applyIndicatorChangesToField(field) {
        return applyIndicatorChangesToFieldUI({
            field,
            indicatorConfigurations,
            Logger
        });
    }
    
    // Helper: Generate DSPATR lines for a field
    function generateFieldDspatrLines(field) {
        return generateFieldDspatrLinesUI({
            field,
            DSPATR_ATTRIBUTE_MAP,
            applyIndicatorChangesToField,
            generateDdsLineWithIndicators,
            Logger
        });
    }
    
    // Helper: Generate COLOR lines for a field
    function generateFieldColorLines(field) {
        return generateFieldColorLinesUI({
            field,
            applyIndicatorChangesToField,
            generateDdsLineWithIndicators,
            Logger
        });
    }

    // Helper: Generate CHECK keyword lines for a field
    function generateFieldCheckLines(field) {
        return generateFieldCheckLinesUI({
            field,
            CHECK_CHAR_CODES,
            CHECK_NUMERIC_CODES,
            generateDdsLineWithIndicators,
            Logger
        });
    }

    // Helper: Generate DFTVAL keyword lines for a field
    function generateFieldDftvalLines(field) {
        return generateFieldDftvalLinesUI({
            field,
            generateDdsLineWithIndicators,
            Logger
        });
    }

    // Helper: Generate DFT keyword lines for a field
    // Helper: Generate VALUES keyword lines for a field
    function generateFieldValuesLines(field) {
        return generateFieldValuesLinesUI({
            field
        });
    }

    // Helper: Generate DFT keyword lines for a field
    function generateFieldDftLines(field) {
        return generateFieldDftLinesUI({
            field
        });
    }

    // Helper: Generate CNTFLD keyword lines for a field
    function generateFieldCntfldLines(field) {
        return generateFieldCntfldLinesUI({
            field
        });
    }

    // Helper: Generate EDTCDE keyword lines for a field
    function generateFieldEdtcdeLines(field) {
        return generateFieldEdtcdeLinesUI({
            field
        });
    }

    // Helper: Generate EDTWRD/EDTMSK keyword lines for a field
    function generateFieldEditKeywordsLines(field) {
        return generateFieldEditKeywordsLinesUI({
            field
        });
    }
    
    // Helper: Generate constant field lines with continuation support AND indicators
    function generateConstantFieldLines(field) {
        return generateConstantFieldLinesUI({
            field,
            IndicatorUtils
        });
    }
    
    // Helper: Build type and usage specification for variable fields
    function buildVariableTypeAndUsage(field) {
        return buildVariableTypeAndUsageUI({
            field
        });
    }
    
    // Generate DDS line from field object
    // Genera DDS (objeto field -> texto) para guardar/actualizar líneas en source.
    function generateDdsLine(field) {
        // Apply any pending indicator changes from the Map before generating DDS
        applyIndicatorChangesToField(field);
        
        const rowStr = field.row.toString().padStart(2, ' ');
        const colStr = field.col.toString().padStart(2, ' ');
        const rowColSeparator = field.col >= 100 ? '' : ' ';
        
        // ========== KEYWORDS (DATE, TIME, SYSNAME, USER) ==========
        if (field.type === 'keyword' || field.isKeyword) {
            const lines = [];
            
            // Build indicator prefix for the main line and prepended indicator lines (SAME AS VARIABLES)
            let indicatorPrefix = '            '; // 12 spaces (default, no indicators)
            const fieldIndicatorLines = []; // For lines BEFORE the keyword line (not after)
            
            if (field.indicators && field.indicators.groups && field.indicators.groups.length > 0) {
                const groups = field.indicators.groups;
                const isOr = field.indicators.isOr || false;
                
                // Check if OR format (multiple groups with isOr=true)
                if (isOr && groups.length > 1) {
                    // OR FORMAT: First group uses 'A', subsequent groups use 'AO'
                    let allLinesBeforeKeyword = [];
                    
                    groups.forEach((group, groupIndex) => {
                        const groupIndicators = group.indicators || [];
                        if (groupIndicators.length === 0) {return;}
                        
                        // Split group into chunks of 3
                        const numChunks = Math.ceil(groupIndicators.length / 3);
                        for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                            const startIdx = chunkIndex * 3;
                            const chunk = groupIndicators.slice(startIdx, startIdx + 3);
                            const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                            const firstIsNegative = chunk[0]?.not;
                            
                            // Determine prefix: 'AO' only for first line of each group (except first group which uses 'A')
                            // Continuation lines within the same group use 'A'
                            let prefix, prefixSpaces;
                            if (chunkIndex === 0) {
                                // First line of group
                                prefix = groupIndex === 0 ? 'A' : 'AO';
                                prefixSpaces = firstIsNegative ? ' ' : '  ';
                                if (prefix === 'AO') {
                                    prefixSpaces = firstIsNegative ? '' : ' ';
                                }
                            } else {
                                // Continuation line within same group - always 'A'
                                prefix = 'A';
                                prefixSpaces = firstIsNegative ? ' ' : '  ';
                            }
                            
                            allLinesBeforeKeyword.push(`     ${prefix}${prefixSpaces}${chunkIndPart}`);
                        }
                    });
                    
                    // Last line goes to keyword line, rest go before
                    if (allLinesBeforeKeyword.length > 1) {
                        fieldIndicatorLines.push(...allLinesBeforeKeyword.slice(0, -1));
                        // Parse last line to extract indicator prefix (keep 'O' if AO)
                        const lastLine = allLinesBeforeKeyword[allLinesBeforeKeyword.length - 1];
                        const isAO = lastLine.startsWith('     AO');
                        
                        // Extract just the indicator part (after 'A' or 'AO')
                        let indicatorPart;
                        if (isAO) {
                            indicatorPart = lastLine.substring(7); // Skip '     AO'
                        } else {
                            indicatorPart = lastLine.substring(6); // Skip '     A'
                        }
                        
                        indicatorPart = indicatorPart.trimEnd();
                        
                        // For AO lines, prepend 'O' to maintain OR relationship
                        if (isAO) {
                            indicatorPrefix = 'O' + indicatorPart;
                        } else {
                            indicatorPrefix = indicatorPart;
                        }
                        
                        // Pad to 12 characters
                        const spacesNeeded = 12 - indicatorPrefix.length;
                        indicatorPrefix = indicatorPrefix + ' '.repeat(Math.max(0, spacesNeeded));
                    } else if (allLinesBeforeKeyword.length === 1) {
                        // Single line - goes to keyword line
                        const lastLine = allLinesBeforeKeyword[0];
                        const isAO = lastLine.startsWith('     AO');
                        
                        let indicatorPart;
                        if (isAO) {
                            indicatorPart = lastLine.substring(7);
                        } else {
                            indicatorPart = lastLine.substring(6);
                        }
                        
                        indicatorPart = indicatorPart.trimEnd();
                        
                        if (isAO) {
                            indicatorPrefix = 'O' + indicatorPart;
                        } else {
                            indicatorPrefix = indicatorPart;
                        }
                        
                        const spacesNeeded = 12 - indicatorPrefix.length;
                        indicatorPrefix = indicatorPrefix + ' '.repeat(Math.max(0, spacesNeeded));
                    }
                } else {
                    // AND FORMAT: Single group (or multiple groups but not OR logic)
                    const allIndicators = groups.length > 0 ? groups[0].indicators : [];
                    
                    if (allIndicators.length > 3) {
                        // More than 3: split into chunks, last chunk goes on keyword line
                        const numChunks = Math.ceil(allIndicators.length / 3);
                        
                        // Generate first chunks (indicator-only lines, before keyword)
                        for (let chunkIndex = 0; chunkIndex < numChunks - 1; chunkIndex++) {
                            const startIdx = chunkIndex * 3;
                            const chunk = allIndicators.slice(startIdx, startIdx + 3);
                            const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                            const chunkFirstIsNegative = chunk[0]?.not;
                            const chunkPrefixSpaces = chunkFirstIsNegative ? ' ' : '  ';
                            fieldIndicatorLines.push(`     A${chunkPrefixSpaces}${chunkIndPart}`);
                        }
                        
                        // Last chunk (3 or fewer) goes on keyword line
                        const lastChunkStart = (numChunks - 1) * 3;
                        const lastChunk = allIndicators.slice(lastChunkStart);
                        const indPart = IndicatorUtils.formatForDds(lastChunk);
                        const firstIsNegative = lastChunk[0]?.not;
                        const prefixSpaces = firstIsNegative ? ' ' : '  ';
                        const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                        indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
                    } else if (allIndicators.length > 0) {
                        // 3 or fewer: all go on keyword line
                        const indPart = IndicatorUtils.formatForDds(allIndicators);
                        const firstIsNegative = allIndicators[0]?.not;
                        const prefixSpaces = firstIsNegative ? ' ' : '  ';
                        const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                        indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
                    }
                }
            }
            
            // Add field indicator lines BEFORE keyword line
            if (fieldIndicatorLines.length > 0) {
                lines.push(...fieldIndicatorLines);
            }
            
            // Build keyword line with indicators (34 spaces = 12 for indicators + 22 for spacing)
            // Format: "     A  03                            19 11DATE"
            const spacingAfterIndicators = ' '.repeat(22); // 22 spaces to reach column 39
            const keywordToken = field.name === 'DATE' && field.keywordArgs
                ? `DATE(${field.keywordArgs})`
                : field.name;
            const keywordLine = `     A${indicatorPrefix}${spacingAfterIndicators}${rowStr}${rowColSeparator}${colStr}${keywordToken}`;
            lines.push(keywordLine);
            
            // Special handling for DATE keyword - add EDTCDE(Y)
            if (field.name === 'DATE') {
                lines.push('     A                                      EDTCDE(Y)');
            }

            // Add DSPATR lines if attributes are set
            const attrLines = generateFieldDspatrLines(field);
            if (attrLines.length > 0) {
                lines.push(...attrLines);
            }
            
            // Add COLOR lines if colors are present (support multiple colors like variables)
            const colors = field.colors || (field.color ? [field.color] : []);
            colors.forEach(color => {
                const colorIndicators = field.colorIndicators && field.colorIndicators[color] ? field.colorIndicators[color] : [];
                lines.push(generateDdsLineWithIndicators(`COLOR(${color})`, colorIndicators));
            });
            
            return lines.join('\n');
        }
        
        // ========== CONSTANTS ==========
        if (field.type === 'constant') {
            const mainLines = generateConstantFieldLines(field);
            const attrLines = generateFieldDspatrLines(field);
            const colorLines = generateFieldColorLines(field);
            
            // Combine all lines: main + DSPATR + COLOR
            const allLines = [...mainLines, ...attrLines, ...colorLines];
            
            // If single color without indicators, add to single COLOR line
            if (field.color && colorLines.length === 0) {
                allLines.push(`     A                                      COLOR(${field.color})`);
            }
            
            return allLines.join('\n');
        }
        
        // ========== VARIABLE FIELDS ==========
        const fieldNamePadded = field.name.padEnd(10, ' ');
        const typeAndUsage = buildVariableTypeAndUsage(field);
        const typePartPadded = typeAndUsage.padStart(9, ' ');
        
        // Build inline attributes
        let attributes = '';
        if (field.dataType === 'float' && field.precision) {
            attributes = `FLTPCN(*${field.precision})`;
        }
        
        // Handle COLOR - inline if no indicators, separate line otherwise
        const colorLines = generateFieldColorLines(field);
        if (field.color && colorLines.length === 0) {
            // No indicators - add COLOR inline
            attributes += `COLOR(${field.color})`;
        }
        
        // Build indicator prefix for the main line and prepended indicator lines
        let indicatorPrefix = '            '; // 12 spaces (default, no indicators)
        const fieldIndicatorLines = []; // For lines BEFORE the field line (not after)
        
        if (field.indicators && field.indicators.groups && field.indicators.groups.length > 0) {
            const groups = field.indicators.groups;
            const isOr = field.indicators.isOr || false;
            
            // Check if OR format (multiple groups with isOr=true)
            if (isOr && groups.length > 1) {
                // OR FORMAT: First group uses 'A', subsequent groups use 'AO'
                // Example:
                //     A  42 44 54
                //     A  87
                //     AO 02
                
                let allLinesBeforeField = [];
                
                groups.forEach((group, groupIndex) => {
                    const groupIndicators = group.indicators || [];
                    if (groupIndicators.length === 0) {return;}
                    
                    // Split group into chunks of 3
                    const numChunks = Math.ceil(groupIndicators.length / 3);
                    for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                        const startIdx = chunkIndex * 3;
                        const chunk = groupIndicators.slice(startIdx, startIdx + 3);
                        const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                        const firstIsNegative = chunk[0]?.not;
                        
                        // Determine prefix: 'AO' only for first line of each group (except first group which uses 'A')
                        // Continuation lines within the same group use 'A'
                        let prefix, prefixSpaces;
                        if (chunkIndex === 0) {
                            // First line of group
                            prefix = groupIndex === 0 ? 'A' : 'AO';
                            prefixSpaces = firstIsNegative ? ' ' : '  ';
                            if (prefix === 'AO') {
                                prefixSpaces = firstIsNegative ? '' : ' ';
                            }
                        } else {
                            // Continuation line within same group - always 'A'
                            prefix = 'A';
                            prefixSpaces = firstIsNegative ? ' ' : '  ';
                        }
                        
                        allLinesBeforeField.push(`     ${prefix}${prefixSpaces}${chunkIndPart}`);
                    }
                });
                
                // Last line goes to field line, rest go before
                if (allLinesBeforeField.length > 1) {
                    fieldIndicatorLines.push(...allLinesBeforeField.slice(0, -1));
                    // Parse last line to extract indicator prefix (keep 'O' if AO)
                    const lastLine = allLinesBeforeField[allLinesBeforeField.length - 1];
                    const isAO = lastLine.startsWith('     AO');
                    
                    // Extract just the indicator part (after 'A' or 'AO')
                    // For 'A  42' -> extract ' 42' (with space before if positive)
                    // For 'AON03' -> extract 'N03' (no space, negative)
                    // For 'AO 03' -> extract ' 03' (with space, positive)
                    let indicatorPart;
                    if (isAO) {
                        // AO prefix: next char tells us if negative (no space) or positive (space)
                        indicatorPart = lastLine.substring(7); // Skip '     AO'
                    } else {
                        // A prefix: next char is space (positive) or N (negative)
                        indicatorPart = lastLine.substring(6); // Skip '     A'
                    }
                    
                    // Trim trailing spaces but keep leading space/N
                    indicatorPart = indicatorPart.trimEnd();
                    
                    // For AO lines, prepend 'O' to maintain OR relationship
                    if (isAO) {
                        indicatorPrefix = 'O' + indicatorPart;
                    } else {
                        indicatorPrefix = indicatorPart;
                    }
                    
                    // Pad to 12 characters
                    const spacesNeeded = 12 - indicatorPrefix.length;
                    indicatorPrefix = indicatorPrefix + ' '.repeat(Math.max(0, spacesNeeded));
                } else if (allLinesBeforeField.length === 1) {
                    // Single line - goes to field line
                    const lastLine = allLinesBeforeField[0];
                    const isAO = lastLine.startsWith('     AO');
                    
                    let indicatorPart;
                    if (isAO) {
                        indicatorPart = lastLine.substring(7);
                    } else {
                        indicatorPart = lastLine.substring(6);
                    }
                    
                    indicatorPart = indicatorPart.trimEnd();
                    
                    if (isAO) {
                        indicatorPrefix = 'O' + indicatorPart;
                    } else {
                        indicatorPrefix = indicatorPart;
                    }
                    
                    const spacesNeeded = 12 - indicatorPrefix.length;
                    indicatorPrefix = indicatorPrefix + ' '.repeat(Math.max(0, spacesNeeded));
                }
            } else {
                // AND FORMAT: Single group (or multiple groups but not OR logic)
                // Like DSPATR AND - first lines have only indicators, last line has field
                const allIndicators = groups.length > 0 ? groups[0].indicators : [];
                
                if (allIndicators.length > 3) {
                    // More than 3: split into chunks, last chunk goes on field line
                    const numChunks = Math.ceil(allIndicators.length / 3);
                    
                    // Generate first chunks (indicator-only lines, before field)
                    for (let chunkIndex = 0; chunkIndex < numChunks - 1; chunkIndex++) {
                        const startIdx = chunkIndex * 3;
                        const chunk = allIndicators.slice(startIdx, startIdx + 3);
                        const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                        const chunkFirstIsNegative = chunk[0]?.not;
                        const chunkPrefixSpaces = chunkFirstIsNegative ? ' ' : '  ';
                        fieldIndicatorLines.push(`     A${chunkPrefixSpaces}${chunkIndPart}`);
                    }
                    
                    // Last chunk (3 or fewer) goes on field line
                    const lastChunkStart = (numChunks - 1) * 3;
                    const lastChunk = allIndicators.slice(lastChunkStart);
                    const indPart = IndicatorUtils.formatForDds(lastChunk);
                    const firstIsNegative = lastChunk[0]?.not;
                    const prefixSpaces = firstIsNegative ? ' ' : '  ';
                    const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                    indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
                } else if (allIndicators.length > 0) {
                    // 3 or fewer: all go on field line
                    const indPart = IndicatorUtils.formatForDds(allIndicators);
                    const firstIsNegative = allIndicators[0]?.not;
                    const prefixSpaces = firstIsNegative ? ' ' : '  ';
                    const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                    indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
                }
            }
        }
        
        // Generate DSPATR lines
        const attrLines = generateFieldDspatrLines(field);
        const checkLines = generateFieldCheckLines(field);
        const edtcdeLines = generateFieldEdtcdeLines(field);
        const editKeywordLines = generateFieldEditKeywordsLines(field);
        const valuesLines = generateFieldValuesLines(field);
        const dftLines = generateFieldDftLines(field);
        const dftvalLines = generateFieldDftvalLines(field);
        const cntfldLines = generateFieldCntfldLines(field);
        
        // Build main line with indicators
        const mainLine = `     A${indicatorPrefix}${fieldNamePadded} ${typePartPadded} ${rowStr}${rowColSeparator}${colStr}${attributes}`;
        
        // Combine: field indicator lines BEFORE main + main + DSPATR + CHECK + DFTVAL + COLOR
        const fieldIndicatorLinesStr = fieldIndicatorLines.length > 0 ? fieldIndicatorLines.join('\n') + '\n' : '';
        const attrLinesStr = attrLines.length > 0 ? '\n' + attrLines.join('\n') : '';
        const checkLinesStr = checkLines.length > 0 ? '\n' + checkLines.join('\n') : '';
        const edtcdeLinesStr = edtcdeLines.length > 0 ? '\n' + edtcdeLines.join('\n') : '';
        const editKeywordLinesStr = editKeywordLines.length > 0 ? '\n' + editKeywordLines.join('\n') : '';
        const valuesLinesStr = valuesLines.length > 0 ? '\n' + valuesLines.join('\n') : '';
        const dftLinesStr = dftLines.length > 0 ? '\n' + dftLines.join('\n') : '';
        const dftvalLinesStr = dftvalLines.length > 0 ? '\n' + dftvalLines.join('\n') : '';
        const cntfldLinesStr = cntfldLines.length > 0 ? '\n' + cntfldLines.join('\n') : '';
        const colorLinesStr = colorLines.length > 0 ? '\n' + colorLines.join('\n') : '';

        const result = fieldIndicatorLinesStr + mainLine + attrLinesStr + checkLinesStr + edtcdeLinesStr + editKeywordLinesStr + valuesLinesStr + dftLinesStr + dftvalLinesStr + cntfldLinesStr + colorLinesStr;
        
        Logger.dds(`Generated DDS: name="${field.name}" padded="${fieldNamePadded}" type="${typeAndUsage}" padded="${typePartPadded}"`);
        Logger.dds(`Full line(s): "${result}"`);
        
        return result;
    }
    
    // Utility functions
    function generateId() {
        return generateIdUI(IdGenerator);
    }
    
    function getDefaultLength(type) {
        return getDefaultLengthUI(type);
    }

    // lee/parsea el DDS (texto -> objetos field) para renderizar en Designer/Preview.
    // función principal que parsea (lee/analiza) el contenido DDS y extrae todos los campos para la vista de Designer.
    // Renderiza cada campo usando renderField o renderWindowField
    // Si el record actual tiene un companion record (SFL↔SFLCTL), también parsea los campos del companion.
    // Aplica repetición visual según SFLPAG. 
    function parseDspfFields(content) {
        fields = []; // Reset fields array
        const lines = content.split('\n');
        
        Logger.parse('Parsing DSPF content for record:', currentRecord, 'total lines:', lines.length);
        
        if (!currentRecord) {
            Logger.warn('No current record specified, parsing all fields');
        }
        
        let inTargetRecord = false;
        let currentRecordName = null;
        let windowDimensions = null;
        const parsePositionContext = { previousPosition: null };
        
        lines.forEach((line, index) => {
            const trimmedLine = line.trim();
            
            // IMPROVED: Better comment detection - check for A* at position 6-7 (DDS format)
            // or at the start of trimmed line (could have leading spaces)
            const isComment = (line.length > 6 && line[5] === 'A' && line[6] === '*') || 
                             trimmedLine.startsWith('A*');
            
            // Skip comment lines and empty lines
            if (!trimmedLine || isComment) {
                return;
            }
            
			// Check for record definition start
			if (trimmedLine.match(/^.{0,5}A\s+R\s+\w+/)) {
				const match = trimmedLine.match(/^.{0,5}A\s+R\s+(\w+)/);
				if (match) {
					currentRecordName = match[1];
					// Don't auto-change currentRecord during normal parsing
					// Only set it if it's truly uninitialized (first load)
					// This prevents the cursor from jumping when editing in source view
					
					// Check if this is our target record
					inTargetRecord = (currentRecord === currentRecordName);
                    parsePositionContext.previousPosition = null;
					Logger.parse(`Found record: ${currentRecordName}, target: ${inTargetRecord}, looking for: ${currentRecord}`);
				}
				return;
			}
            
            // Check for WINDOW dimensions matching current display size
            if (inTargetRecord) {
                const parsedWindowDimensions = parseWindowDimensionsFromLine(trimmedLine, currentRecordName, windowDimensions);
                if (parsedWindowDimensions) {
                    windowDimensions = parsedWindowDimensions;
                }
            }
            
            // Only parse fields if we're in the target record
            if (inTargetRecord) {
                // Parse field definitions for designer view
                // Check if this is a field line: starts with spaces + A, and has field positioning
                // Exclude lines that ONLY contain keywords (not field definitions with attributes)
                // A keyword-only line doesn't have a field name before the keyword
                const hasFieldName = /A\s+\w+\s+/.test(trimmedLine); // Has "A" followed by a word (field name) and spaces
                const isKeywordOnlyLine = !hasFieldName && (
                    trimmedLine.includes('WINDOW(') || 
                    trimmedLine.includes('CF') || 
                    trimmedLine.includes('CA') || 
                    trimmedLine.includes('PAGEDOWN') || 
                    trimmedLine.includes('PAGEUP') ||
                    trimmedLine.includes('RTNCSRLOC') ||
                    trimmedLine.includes('CSRLOC') ||
                    trimmedLine.includes('OVERLAY') ||
                    trimmedLine.includes('KEEP')
                );
                
                // A line that ONLY has DSPATR/COLOR/CHECK/VALUES/EDTCDE/DFTVAL is an attribute continuation line
                // These lines don't have field names like "A FIELDNAME 10A"
                // Field lines have a recognizable pattern: field name (at least 3 chars) followed by type spec
                // The type spec can be: "10A", "10", "10Y 0", or with spaces "64   O"
                const hasFieldNameInLine = /\b[A-Z][A-Z0-9_]{0,9}\s+(?:\d+[A-Z]?|L|T|Z)\b/i.test(trimmedLine);
                const hasAttributeKeyword = attributeContentRegex.test(trimmedLine);
                const isAttributeOnlyLine = !hasFieldNameInLine && hasAttributeKeyword;
                
                const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                const isFieldLine = line.length > 6 && line[5] === 'A' && 
                    (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /(^|\s)\+\d{1,3}(\s|$)/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) &&
                    !isKeywordOnlyLine && !isAttributeOnlyLine &&
                    !trimmedLine.includes('WINDOW('); // Exclude WINDOW dimension lines
                
                // Only parse fields that belong to the target record
                if (isFieldLine && inTargetRecord) {
                    Logger.parse(`Line ${index + 1} (${currentRecordName}): ${line}`);
                    
                    // Check if this is a multi-line constant (ends with '-' or '+' before end, allowing trailing spaces)
                    let fullLine = line;
                    if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                        Logger.parse(`Multi-line constant detected at line ${index + 1}`);
                        
                        // Use shared function to process continuation lines
                        const result = processMultiLineContinuation({
                            initialLine: line,
                            getNextLine: (idx) => idx < lines.length ? lines[idx] : null,
                            startIndex: index + 1,
                            context: 'DESIGNER'
                        });
                        
                        fullLine = result.fullLine;
                        // Note: linesConsumed is not used here as Designer doesn't need skipNextLines
                    }
                    
                    const field = parseFieldLineForDesigner(fullLine, parsePositionContext);
                    if (field) {
                        field.recordName = currentRecordName; // Track which record this field belongs to
                        
                        // Initialize indicator storage structures
                        field.attributeIndicators = {};
                        field.colorIndicators = {};
                        field.checkIndicators = {};
                        
                        // For all field types (variables, keywords, constants), scan backward to get field-level indicators from previous lines
                        const groups = [];
                        let hasOrLogic = false;
                        
                        // Scan backward for indicators in previous lines (if index > 0)
                        if (index > 0) {
                            let contextLabel = 'VARIABLE-BACKWARD';
                            if (field.type === 'keyword' || field.isKeyword) {
                                contextLabel = 'KEYWORD-BACKWARD';
                            } else if (field.type === 'constant') {
                                contextLabel = 'CONSTANT-BACKWARD';
                            }
                            const backwardScan = scanIndicatorsBackward(lines, 0, index, contextLabel);
                            
                            // scanIndicatorsBackward returns groups already properly merged:
                            // - Consecutive 'A' lines = one AND group
                            // - 'AO' line + following 'A' lines = one OR group
                            // Multiple groups = OR logic between groups
                            backwardScan.scannedLines.forEach(scannedLine => {
                                if (scannedLine.indicators && scannedLine.indicators.length > 0) {
                                    groups.push({ indicators: scannedLine.indicators });
                                    if (scannedLine.isOr) {
                                        hasOrLogic = true;
                                    }
                                }
                            });
                        }
                        
                        // Check for inline indicators (found during parsing in the same line as field)
                        // All field types (variables, keywords, constants) can have inline indicators
                        if (field._inlineIndicators && field._inlineIndicators.length > 0) {
                                const inlineIsOr = field._inlineIsOr || false;
                                
                                if (inlineIsOr) {
                                    // Inline indicators are from a line with 'AO' prefix - create new OR group
                                    groups.push({ indicators: field._inlineIndicators });
                                    hasOrLogic = true;
                                    Logger.parse(`${field.type} ${field.name}: Inline indicators are OR (from AO line), created separate group`);
                                } else {
                                    // Inline indicators from 'A' line - join the last group or create new one
                                    if (groups.length > 0) {
                                        groups[groups.length - 1].indicators.push(...field._inlineIndicators);
                                    } else {
                                        groups.push({ indicators: field._inlineIndicators });
                                    }
                                    Logger.parse(`${field.type} ${field.name}: Inline indicators are AND, merged with last group`);
                                }
                                
                            // Remove temporary storage
                            delete field._inlineIndicators;
                            delete field._inlineIsOr;
                        }
                        
                        // Set field-level indicators with groups structure
                        if (groups.length > 0) {
                            // Multiple groups = OR logic, single group = AND logic
                            field.indicators = {
                                groups: groups,
                                isOr: hasOrLogic || groups.length > 1
                            };
                            Logger.parse(`${field.type} ${field.name}: Found ${groups.length} field indicator group(s), isOr=${hasOrLogic || groups.length > 1}`);
                        }
                        
                        scanAttributeLinesAfterField({
                            lines,
                            startIndex: index,
                            field,
                            contextLabel: 'DESIGNER',
                            includeChecks: true,
                            includeDftval: true,
                            preserveOriginalSpacing: true,
                            attributeRegex: attributeContentRegex
                        });
                        
                        Logger.parse(`Parsed field: ${field.name} (${field.type}) at ${field.row},${field.col} for record ${currentRecordName}`);
                        Logger.debug(`Final colorIndicators for ${field.name}:`, field.colorIndicators);
                        Logger.debug(`Final attributeIndicators for ${field.name}:`, field.attributeIndicators);
                        fields.push(field);
                    } else {
                        Logger.error(`Failed to parse line: ${line}`);
                    }
                } else if (line.length > 6 && line[5] === 'A' && trimmedLine.length > 2 && !isKeywordOnlyLine && !isAttributeOnlyLine) {
                    Logger.warn(`Skipped potential field line ${index + 1}: ${line}`);
                }
            }
        });
        
        // Check if current record is part of a subfile (SFL/SFLCTL) relationship
        const subfileRel = getSubfileRelationship(currentRecord);
        if (subfileRel && subfileRel.companionRecord) {
            Logger.parse(`Parsing companion record: ${subfileRel.companionRecord}`);
            
            // Parse fields from companion record
            let inCompanionRecord = false;
            let companionRecordName = null;
            const companionParsePositionContext = { previousPosition: null };
            
            lines.forEach((line, index) => {
                const trimmedLine = line.trim();
                
                // Skip comment lines and empty lines
                if (!trimmedLine || trimmedLine.startsWith('A*')) {
                    return;
                }
                
                // Check for record definition start
                if (trimmedLine.match(/^.{0,5}A\s+R\s+\w+/)) {
                    const match = trimmedLine.match(/^.{0,5}A\s+R\s+(\w+)/);
                    if (match) {
                        companionRecordName = match[1];
                        inCompanionRecord = (subfileRel.companionRecord === companionRecordName);
                        companionParsePositionContext.previousPosition = null;
                        if (inCompanionRecord) {
                            Logger.parse(`Found companion record: ${companionRecordName}`);
                        }
                    }
                    return;
                }
                
                // Only parse fields if we're in the companion record
                if (inCompanionRecord) {
                    const hasFieldName = /A\s+\w+\s+/.test(trimmedLine);
                    const isKeywordOnlyLine = !hasFieldName && (
                        trimmedLine.includes('WINDOW(') || 
                        trimmedLine.includes('CF') || 
                        trimmedLine.includes('CA') || 
                        trimmedLine.includes('PAGEDOWN') || 
                        trimmedLine.includes('PAGEUP') ||
                        trimmedLine.includes('RTNCSRLOC') ||
                        trimmedLine.includes('CSRLOC') ||
                        trimmedLine.includes('OVERLAY') ||
                        trimmedLine.includes('KEEP') ||
                        trimmedLine.includes('SFLCTL')
                    );
                    
                    const hasFieldNameInLine = /\b[A-Z][A-Z0-9_]{0,9}\s+(?:\d+[A-Z]?|L|T|Z)\b/i.test(trimmedLine);
                    const hasAttributeKeyword = attributeContentRegex.test(trimmedLine);
                    const isAttributeOnlyLine = !hasFieldNameInLine && hasAttributeKeyword;
                    
                    const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                    const isFieldLine = trimmedLine.startsWith('A ') &&
                        (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /(^|\s)\+\d{1,3}(\s|$)/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) &&
                        !isKeywordOnlyLine && !isAttributeOnlyLine &&
                        !trimmedLine.includes('WINDOW(');
                    
                    if (isFieldLine) {
                        // Check for multi-line constant (ends with '-' or '+' before quote)
                        let fullLine = line;
                        if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                            Logger.parse(`Designer: Multi-line constant in companion record detected at line ${index + 1}`);
                            
                            // Use shared function to process continuation lines
                            const result = processMultiLineContinuation({
                                initialLine: line,
                                getNextLine: (idx) => idx < lines.length ? lines[idx] : null,
                                startIndex: index + 1,
                                context: 'DESIGNER-COMPANION'
                            });
                            
                            fullLine = result.fullLine;
                        }
                        
                        const field = parseFieldLineForDesigner(fullLine, companionParsePositionContext);
                        if (field) {
                            field.isBackgroundRecord = true;  // Mark as companion/background record
                            field.recordName = companionRecordName;
                            Logger.parse(`Parsed companion field: ${field.name} (${field.type}) at ${field.row},${field.col}`);
                            fields.push(field);
                        }
                    }
                }
            });
        }

        // Normalize WINDOW dimensions for the current record/display size.
        // This avoids stale or first-match dimensions when both DS3 and DS4 are defined.
        if (currentRecord) {
            const currentRecordWindowDims = getWindowDimensions(currentRecord);
            if (currentRecordWindowDims.hasWindow) {
                const selectedWindow = currentDisplaySize === 'DS3' ? currentRecordWindowDims.ds3 : currentRecordWindowDims.ds4;
                if (selectedWindow) {
                    windowDimensions = selectedWindow;
                    Logger.window(`Designer: Using ${currentDisplaySize} WINDOW dimensions from record ${currentRecord}: ${selectedWindow.height}x${selectedWindow.width} at (${selectedWindow.row},${selectedWindow.col})`);
                }
            }
        }
        
        // CRITICAL: If we're viewing an SFL record and its SFLCTL has WINDOW dimensions,
        // use the SFLCTL's window dimensions for positioning SFL fields
        const subfileRelationship = getSubfileRelationship(currentRecord);
        if (subfileRelationship && subfileRelationship.sflRecord === currentRecord) {
            const sflctlWindowDims = getWindowDimensions(subfileRelationship.sflctlRecord);
            if (sflctlWindowDims.hasWindow) {
                const sflctlWindow = currentDisplaySize === 'DS3' ? sflctlWindowDims.ds3 : sflctlWindowDims.ds4;
                if (sflctlWindow) {
                    windowDimensions = sflctlWindow;
                    Logger.window(`Designer: SFL ${currentRecord}: Using SFLCTL ${subfileRelationship.sflctlRecord} WINDOW dimensions: ${windowDimensions.height}x${windowDimensions.width} at (${windowDimensions.row},${windowDimensions.col})`);
                }
            }
        }
        
        // Re-render all fields in designer view
        const canvas = document.getElementById('fields-container');
        if (canvas) {
            // Clear existing fields and window frames
            canvas.querySelectorAll('.dspf-field, .window-frame').forEach(el => el.remove());
            
            // Add window frame if this is a WINDOW record
            if (windowDimensions) {
                // Use declared WINDOW dimensions (no auto-adjustment)
                Logger.window(`Designer: Using declared window dimensions: ${windowDimensions.height}x${windowDimensions.width}`);
                
                const win = windowDimensions;
                // WINDOW coordinates are absolute screen positions
                const winPos = ScreenCoordinates.toPixels(win.row, win.col);
                const winTop = winPos.top;
                const winLeft = winPos.left;
                const winHeight = ScreenCoordinates.getHeightInPixels(win.height);
                // Width includes content + 4 columns for borders and padding (2 left + 2 right)
                const winWidth = ScreenCoordinates.getWidthInPixels(win.width + 4);
                
                const windowFrame = document.createElement('div');
                windowFrame.className = 'window-frame';
                windowFrame.style.position = 'absolute';
                windowFrame.style.top = `${winTop}px`;
                windowFrame.style.left = `${winLeft}px`;
                windowFrame.style.width = `${winWidth}px`;
                windowFrame.style.height = `${winHeight}px`;
                windowFrame.style.border = '2px dotted #00FF00';
                windowFrame.style.pointerEvents = 'none';
                windowFrame.style.zIndex = '5';
                windowFrame.style.boxSizing = 'border-box';
                
                // Store original window dimensions for resizing
                windowFrame.dataset.row = win.row;
                windowFrame.dataset.col = win.col;
                windowFrame.dataset.height = win.height;
                windowFrame.dataset.width = win.width;
                
                // Add resize handles at corners
                const corners = ['nw', 'ne', 'sw', 'se'];
                corners.forEach(corner => {
                    const handle = document.createElement('div');
                    handle.className = `window-resize-handle ${corner}`;
                    handle.style.position = 'absolute';
                    handle.style.width = '10px';
                    handle.style.height = '10px';
                    handle.style.backgroundColor = '#00FF00';
                    handle.style.border = '1px solid #000';
                    handle.style.pointerEvents = 'auto';
                    handle.style.cursor = `${corner}-resize`;
                    handle.style.zIndex = '10';
                    
                    // Position handles at corners
                    if (corner.includes('n')) {handle.style.top = '-5px';}
                    if (corner.includes('s')) {handle.style.bottom = '-5px';}
                    if (corner.includes('w')) {handle.style.left = '-5px';}
                    if (corner.includes('e')) {handle.style.right = '-5px';}
                    
                    windowFrame.appendChild(handle);
                });
                
                canvas.appendChild(windowFrame);
                
                // Setup resize functionality
                setupWindowResizeUI({
                    windowFrame,
                    originalDimensions: windowDimensions,
                    Logger,
                    ScreenCoordinates,
                    getCurrentDisplaySize: () => currentDisplaySize,
                    getCurrentZoom: () => currentZoom,
                    updateWindowDimensions
                });
                
                Logger.window(`Added window frame in Designer at ${win.row},${win.col} size ${win.height}x${win.width}`);
            }
            
            Logger.ui(`Rendering ${fields.length} fields:`, fields.map(f => `${f.name}(${f.row},${f.col})`));
            
            // Check if this is a SFL or SFLCTL record to determine repetition count
            const subfileRelationship = getSubfileRelationship(currentRecord);
            const sflpagRepeat = subfileRelationship ? getSflpagValue(subfileRelationship.sflctlRecord) : 1;
            const sflRowSpan = subfileRelationship ? getSflRowSpan(fields, currentRecord, subfileRelationship) : 1;
            
            if (sflpagRepeat > 1) {
                Logger.stats(`Subfile detected: Repeating SFL fields ${sflpagRepeat} times (SFLPAG from ${subfileRelationship.sflctlRecord}, row span ${sflRowSpan})`);
            }
            
            // Render fields with repetition if needed
            fields.forEach(field => {
                // Render first instance (the real field)
                if (windowDimensions) {
                    renderWindowField(field, windowDimensions);
                } else {
                    renderField(field);
                }
                
                // Render visual copies ONLY for SFL fields (companion record when viewing SFLCTL)
                // When viewing SFL: repeat the current record fields (!isBackgroundRecord)
                // When viewing SFLCTL: repeat the companion SFL fields (isBackgroundRecord)
                const shouldRepeat = sflpagRepeat > 1 && (
                    (currentRecord === subfileRelationship?.sflRecord && !field.isBackgroundRecord) ||
                    (currentRecord === subfileRelationship?.sflctlRecord && field.isBackgroundRecord)
                );
                
                if (shouldRepeat) {
                    for (let repeat = 1; repeat < sflpagRepeat; repeat++) {
                        const visualCopy = {
                            ...field,
                            id: field.id + '_repeat' + repeat,
                            row: field.row + (repeat * sflRowSpan),
                            isVisualCopy: true // Mark as visual copy
                        };
                        
                        if (windowDimensions) {
                            renderWindowField(visualCopy, windowDimensions);
                        } else {
                            renderField(visualCopy);
                        }
                    }
                }
            });
        } else {
            Logger.error('Fields container not found for rendering');
        }
    }
    
    
    // Update WINDOW dimensions in DDS code
    function updateWindowDimensions(original, newRow, newCol, newHeight, newWidth) {
        const lines = currentDocument.split('\n');
        let updated = false;
        
        Logger.debug(`Searching for WINDOW in record: ${currentRecord}`);
        Logger.debug(`Display size: ${currentDisplaySize}`);
        Logger.debug(`Original dimensions: WINDOW(${original.row} ${original.col} ${original.height} ${original.width})`);
        Logger.debug(`New dimensions: WINDOW(${newRow} ${newCol} ${newHeight} ${newWidth})`);
        
        // First, find the record definition line with strict matching
        // Record definition format: "     A          R RECORDNAME" (after column 5)
        let recordLineIndex = -1;
        const recordRegex = new RegExp(`^\\s*A\\s+R\\s+${currentRecord}\\s*(\\s|$)`);
        
        for (let i = 0; i < lines.length; i++) {
            if (recordRegex.test(lines[i])) {
                recordLineIndex = i;
                Logger.parse(`Found record definition '${currentRecord}' at line ${i}: ${lines[i].trim()}`);
                break;
            }
        }
        
        if (recordLineIndex === -1) {
            Logger.error(`Record ${currentRecord} not found`);
            return;
        }
        
        // Search for WINDOW keyword with matching display size (*DS3 or *DS4)
        // Look for lines with both WINDOW and the appropriate *DS marker
        // IMPORTANT: Only search AFTER the record definition and BEFORE the next record definition
        const displayMarker = currentDisplaySize === 'DS3' ? '*DS3' : '*DS4';
        Logger.debug(`Looking for ${displayMarker} WINDOW after line ${recordLineIndex}...`);
        
        const windowRegex = /WINDOW\(\s*\d+\s+\d+\s+\d+\s+\d+\s*\)/;
        let nextRecordLineIndex = lines.length; // Default: search until end
        
        // Find the next record definition to limit search scope
        const nextRecordRegex = /^.{0,5}A\s+R\s+\w+/;
        for (let i = recordLineIndex + 1; i < lines.length; i++) {
            if (nextRecordRegex.test(lines[i])) {
                nextRecordLineIndex = i;
                Logger.debug(`Next record found at line ${i}, limiting search to lines ${recordLineIndex}-${i}`);
                break;
            }
        }
        
        // First try to find WINDOW on the record line itself
        if (windowRegex.test(lines[recordLineIndex])) {
            Logger.parse(`Found WINDOW on record line ${recordLineIndex}: ${lines[recordLineIndex].trim()}`);
            
            const newPattern = `WINDOW(${newRow} ${newCol} ${newHeight} ${newWidth})`;
            const oldLine = lines[recordLineIndex];
            lines[recordLineIndex] = lines[recordLineIndex].replace(windowRegex, newPattern);
            updated = true;
            
            Logger.dds(`Updated line ${recordLineIndex}:`);
            Logger.dds(`   OLD: ${oldLine.trim()}`);
            Logger.dds(`   NEW: ${lines[recordLineIndex].trim()}`);
        } else {
            // Search in following lines for WINDOW with matching display size marker
            // IMPORTANT: Only search within the current record (before next record definition)
            for (let i = recordLineIndex + 1; i < nextRecordLineIndex; i++) {
                const line = lines[i];
                
                // Check if this line has the WINDOW keyword and matches our display size
                if (windowRegex.test(line) && line.includes(displayMarker)) {
                    Logger.parse(`Found ${displayMarker} WINDOW at line ${i}: ${line.trim()}`);
                    
                    const newPattern = `WINDOW(${newRow} ${newCol} ${newHeight} ${newWidth})`;
                    const oldLine = line;
                    lines[i] = line.replace(windowRegex, newPattern);
                    updated = true;
                    
                    Logger.dds(`Updated line ${i}:`);
                    Logger.dds(`   OLD: ${oldLine.trim()}`);
                    Logger.dds(`   NEW: ${lines[i].trim()}`);
                    break;
                }
            }
        }
        
        if (updated) {
            currentDocument = lines.join('\n');
            Logger.dds('Sending update message to VS Code...');
            // Save the updated document
            vscode.postMessage({
                type: 'update',
                content: currentDocument,
                currentRecord: currentRecord
            });
            Logger.success('Update message sent');
        } else {
            Logger.error('WINDOW line not found or not updated');
        }
    }
    
    // Llamada por parseDspfFields. Extrae nombre, tipo, posición, etc. 
    // Para cada campo encontrado llama a scanAttributeLinesAfterField para obtener
    // atributos (COLOR,DSPATR,CHECK,DFTVAL) e indicadores de las líneas siguientes; y lo
    // agrega al array fields[]
    function parseFieldLineForDesigner(line, parseContext = null) {
        // DDS is columnar format - parse by exact column positions
        // Example: "     A            FLD003        51A  O  5 19"
        //          "     A            W_DSP_EST      1A  O  8 19"
        
        // Check minimum length
        if (line.length < 40) {
            return null;
        }
        
        // Column 6 must be 'A'
        if (line[5] !== 'A') {
            return null;
        }
        
        // Check for keywords (DATE, TIME, SYSNAME, USER) with optional indicators (SAME AS VARIABLES)
        // Format with indicators: "     A  03                            19 11DATE"
        // Format without indicators: "     A                                      19 11DATE"
        // Indicators are in columns 7-18, position starts at column 39
        // Check if position 6 has 'O' (OR format)
        const keywordHasOrPrefix = line.length > 6 && line[6] === 'O';
        const keywordStartPos = keywordHasOrPrefix ? 7 : 6;
        
        // Extract indicator area (columns 7-18) and content after column 18
        const indicatorArea = line.substring(keywordStartPos, 18).trim();
        const contentAfter18 = line.substring(18);
        
        // Check if content matches keyword pattern: row col KEYWORD
        const parsedKeyword = parseKeywordPosition(contentAfter18);
        if (parsedKeyword) {
            const row = parseInt(parsedKeyword.row, 10);
            const col = parseInt(parsedKeyword.col, 10);
            const keywordName = parsedKeyword.keyword;
            const keywordArgs = parsedKeyword.keywordArgs || null;
            
            Logger.key(`Found keyword: ${keywordName} at ${row},${col}`);
            
            // Extract inline indicators if present (columns 7-18)
            const inlineIndicators = [];
            if (indicatorArea.length > 0) {
                // Parse indicators from the indicator area
                const indicatorAreaParts = indicatorArea.split(/\s+/).filter(p => p.length > 0);
                for (const part of indicatorAreaParts) {
                    if (/^N?\d{2}$/.test(part)) {
                        const isNegative = part.startsWith('N');
                        const number = isNegative ? part.substring(1) : part;
                        inlineIndicators.push({ number: number.padStart(2, '0'), not: isNegative });
                    }
                }
                Logger.debug(`Found ${inlineIndicators.length} inline indicators for keyword ${keywordName}`);
            }
            
            const fieldObj = {
                id: generateId(),
                type: 'keyword',
                name: keywordName,
                row: row,
                col: col,
                dataType: 'keyword',
                isKeyword: true,
                keywordArgs,
                length: null,
                indicators: { groups: [], isOr: false } // Will be populated by backward scan + inline merge
            };
            
            // Store inline indicators if found (will be merged with backward scan)
            if (inlineIndicators.length > 0) {
                fieldObj._inlineIndicators = inlineIndicators;
                fieldObj._inlineIsOr = keywordHasOrPrefix;
                Logger.debug(`Stored ${inlineIndicators.length} inline indicators for keyword ${keywordName}, isOr=${keywordHasOrPrefix}`);
            }

            updatePreviousPositionContext(parseContext, row, col, 0);
            
            return fieldObj;
        }
        
        // Check for constant (contains quotes) - WITH INDICATOR SUPPORT
        if (line.includes("'")) {
            // Constants can have indicators just like variables:
            // Format with indicators: "     A  03                            19 11'TEXT'"
            // Format without indicators: "     A                                      19 11'TEXT'"
            // Indicators are in columns 7-18, position starts around column 39
            
            // Check if position 6 has 'O' (OR format)
            const constHasOrPrefix = line.length > 6 && line[6] === 'O';
            const constStartPos = constHasOrPrefix ? 7 : 6;
            
            // Extract indicator area (columns 7-18) and content after column 18
            const constIndicatorArea = line.substring(constStartPos, 18).trim();
            const constContentAfter18 = line.substring(18).trim();
            
            // Match pattern: ROW COL'text' or ROW COL'text (without closing quote for multi-line)
            Logger.parse(`[DESIGNER PARSE] Input line: "${line}"`);
            Logger.parse(`[DESIGNER PARSE] Input line length: ${line.length}`);
            const match = constContentAfter18.match(/(\d+)\s+(\d+)'([^']*)/); // Search in content after col 18
            const compactMatch = constContentAfter18.match(/^(\d{1,2})(\d{3})'([^']*)/);
            if (match || compactMatch) {
                const positionMatch = match || compactMatch;
                const row = parseInt(positionMatch[1]);
                const col = parseInt(positionMatch[2]);
                let text = positionMatch[3];
                
                Logger.parse(`[DESIGNER PARSE] Full match[0]: "${positionMatch[0]}"`);
                Logger.parse(`[DESIGNER PARSE] Matched text (match[3]): "${text}"`);
                Logger.parse(`[DESIGNER PARSE] Matched text length: ${text.length}, first 20 chars: "${text.substring(0, 20)}", last 20 chars: "${text.slice(-20)}"`);
                Logger.parse(`Parsed constant in Designer at (${row},${col}), value length: ${text.length}, value: "${text}"`);
                
                // Extract inline indicators if present (columns 7-18)
                const constInlineIndicators = [];
                if (constIndicatorArea.length > 0) {
                    const constIndicatorParts = constIndicatorArea.split(/\s+/).filter(p => p.length > 0);
                    for (const part of constIndicatorParts) {
                        if (/^N?\d{2}$/.test(part)) {
                            const isNegative = part.startsWith('N');
                            const number = isNegative ? part.substring(1) : part;
                            constInlineIndicators.push({ number: number.padStart(2, '0'), not: isNegative });
                        }
                    }
                    Logger.debug(`Found ${constInlineIndicators.length} inline indicators for constant at (${row},${col})`);
                }
                
                // Generate a more descriptive name based on content
                let constantName = text
                    .replace(/[^a-zA-Z0-9]/g, '_')  // Replace non-alphanumeric with underscore
                    .replace(/_+/g, '_')             // Replace multiple underscores with single
                    .replace(/^_|_$/g, '')           // Remove leading/trailing underscores
                    .toUpperCase();
                
                // If name is empty or too short, use position-based name
                if (!constantName || constantName.length < 2) {
                    constantName = `CONST_${row}_${col}`;
                } else {
                    // Limit length and add position for uniqueness
                    constantName = constantName.substring(0, 10) + `_${row}_${col}`;
                }
                
                const fieldObj = {
                    id: generateId(),
                    type: 'constant',
                    name: constantName,
                    row: row,
                    col: col,
                    value: text,
                    length: text.length,
                    attributes: extractAttributes(line),
                    color: null,
                    indicators: { groups: [], isOr: false } // Will be populated by backward scan + inline merge
                };
                
                // Store inline indicators if found (will be merged with backward scan)
                if (constInlineIndicators.length > 0) {
                    fieldObj._inlineIndicators = constInlineIndicators;
                    fieldObj._inlineIsOr = constHasOrPrefix;
                    Logger.debug(`Stored ${constInlineIndicators.length} inline indicators for constant ${constantName}, isOr=${constHasOrPrefix}`);
                }

                updatePreviousPositionContext(parseContext, row, col, text.length);
                
                return fieldObj;
            }
        }
        
        // Parse field line using helper functions - DDS format can vary:
        // Standard format: A  FIELDNAME  10A  O  5 10
        // With attributes: A  FIELDNAME  10A  O  5 10 COLOR(BLU)
        // With indicators: A  01 02 03 FIELDNAME  10A  O  5 10
        // OR format: AO N03 FIELDNAME  10A  O  5 10
        
        // Extract the content after the initial 'A' or 'AO' (at position 5-6)
        // Check if position 6 has 'O' (OR format)
        const varHasOrPrefix = line.length > 6 && line[6] === 'O';
        const startPos = varHasOrPrefix ? 7 : 6; // Skip 'AO ' or 'A '
        const content = line.substring(startPos).trim();
        Logger.debug(`Parsing content (hasOrPrefix=${varHasOrPrefix}): "${content}"`);
        
        // Split by whitespace and filter empty strings
        let parts = content.split(/\s+/).filter(p => p.length > 0);
        Logger.debug(`Parts:`, parts);
        
        if (parts.length < 4) {
            Logger.warn(`Not enough parts: ${parts.length}`);
            return null;
        }
        
        // Check for optional indicators at the beginning (columns 7-18)
        // Indicators are 2-digit numbers (or N-prefixed for negative indicators)
        // Skip indicators and start with field name
        let partIndex = 0;
        const indicatorsFound = [];
        
        while (partIndex < parts.length - 3) { // Need at least 4 parts left: name, type, row, col
            const part = parts[partIndex];
            // Check if this looks like an indicator: 2 digits or N + 2 digits
            if (/^N?\d{2}$/.test(part)) {
                indicatorsFound.push(part);
                partIndex++;
            } else {
                // Not an indicator, must be field name
                break;
            }
            
            // Maximum 3 indicators per line
            if (indicatorsFound.length >= 3) {
                break;
            }
        }
        
        if (indicatorsFound.length > 0) {
            Logger.debug(`Found ${indicatorsFound.length} field-level indicators: ${indicatorsFound.join(', ')}`);
        }
        
        // Now parse the field starting from partIndex
        const fieldName = parts[partIndex];
        
        // Validate field name using FieldNameValidator (should be alphanumeric with underscores, no special chars like *)
        if (!FieldNameValidator.isValid(fieldName, { mustStartWithLetter: false, allowEmpty: false })) {
            Logger.error(`Invalid field name: "${fieldName}"`);
            return null;
        }
        
        const typeSpec = parts[partIndex + 1];
        
        // Parse usage and decimals using helper (adjust index by partIndex)
        const usageInfo = parseUsageAndDecimals(parts, partIndex + 2);
        
        Logger.debug(`Parsing field: typeSpec="${typeSpec}" hasDecimals=${usageInfo.hasDecimals}`);
        
        // Parse type specification using helper (pass hasDecimals for proper type detection)
        const typeInfo = parseDdsTypeSpecification(typeSpec, usageInfo.hasDecimals);
        if (!typeInfo) {
            Logger.error(`Invalid type spec: "${typeSpec}"`);
            return null;
        }
        
        Logger.stats(`Mapped typeChar="${typeInfo.typeChar}" hasDecimals=${usageInfo.hasDecimals} to dataType="${typeInfo.dataType}"`);
        
        // Extract row and col using helper (adjust index by partIndex for indicators)
        let positionInfo = extractRowColFromParts(parts, usageInfo.nextIndex, parseContext ? parseContext.previousPosition : null);
        if (!positionInfo) {
            const fixedPositionArea = line.length > 39 ? line.substring(39) : '';
            const fixedPositionMatch = fixedPositionArea.match(/^\s*([ 0-9]{2})([ 0-9]{3})/);
            if (fixedPositionMatch) {
                const parsedRow = parseInt(fixedPositionMatch[1].trim(), 10);
                const parsedCol = parseInt(fixedPositionMatch[2].trim(), 10);
                if (!isNaN(parsedRow) && !isNaN(parsedCol)) {
                    positionInfo = {
                        row: parsedRow,
                        col: parsedCol,
                        nextIndex: usageInfo.nextIndex + 1
                    };
                    Logger.debug(`Extracted compact fixed coordinates row=${parsedRow}, col=${parsedCol}`);
                }
            }
        }

        if (!positionInfo) {
            Logger.error(`Missing essentials`);
            return null;
        }
        
        // Extract float precision using helper
        const precision = extractFloatPrecision(line, typeInfo.dataType);
        
        Logger.debug(`Extracted: name="${fieldName}" type="${typeSpec}" decimals="${usageInfo.decimals}" usage="${usageInfo.usage}" row="${positionInfo.row}" col="${positionInfo.col}" precision="${precision}"`);
        
        // Map usage character to internal usage and field type for compatibility
        // O = Output, I = Input, B = Both, M = Message, P = Program-to-System
        let fieldType = 'output';
        if (usageInfo.usage === 'I') {fieldType = 'input';}
        else if (usageInfo.usage === 'B') {fieldType = 'input';}
        else if (usageInfo.usage === 'O') {fieldType = 'output';}

        // Normalize unused/legacy usages (e.g., Hidden) to Output for now
        const normalizedUsage = usageInfo.usage === 'H' ? 'O' : (usageInfo.usage || 'O');
        
        Logger.parse(`Parsed: ${fieldName} (${typeInfo.dataType}) at ${positionInfo.row},${positionInfo.col} length=${typeInfo.length}`);
        
        const fieldObj = {
            id: generateId(),
            type: fieldType,
            name: fieldName,
            row: positionInfo.row,
            col: positionInfo.col,
            length: typeInfo.dataType === 'date' ? 10 : (typeInfo.dataType === 'time' ? 8 : (typeInfo.dataType === 'timestamp' ? 26 : typeInfo.length)),
            decimals: usageInfo.decimals,
            usage: normalizedUsage,
            dataType: typeInfo.dataType,
            value: ''
        };
        
        // Store inline indicators if found (these will be merged with backward scan indicators)
        if (indicatorsFound.length > 0) {
            const parsedIndicators = indicatorsFound.map(indStr => {
                const isNegative = indStr.startsWith('N');
                const number = isNegative ? indStr.substring(1) : indStr;
                return { number: number.padStart(2, '0'), not: isNegative };
            });
            
            // Store temporarily - will be merged with backward scan in parseDspfFields
            fieldObj._inlineIndicators = parsedIndicators;
            fieldObj._inlineIsOr = varHasOrPrefix; // Remember if this line had 'AO' prefix
            Logger.debug(`Stored ${parsedIndicators.length} inline indicators for field ${fieldName}, isOr=${varHasOrPrefix}`);
        }
        
        // Extract COLOR if present in the line
        const colorMatch = line.match(/COLOR\((\w+)\)/);
        if (colorMatch) {
            fieldObj.color = colorMatch[1];
            Logger.parse(`Found inline color ${fieldObj.color} for field ${fieldName}`);
        }
        
        // Extract DSPATR attributes if present in the line
        const attrResult = extractAttributes(line, line);
        if (attrResult.attrs && Object.keys(attrResult.attrs).length > 0) {
            fieldObj.attributes = attrResult.attrs;
            Logger.parse(`Found inline DSPATR attributes for field ${fieldName}:`, attrResult.attrs);
        }

        // Extract CHECK codes inline (no indicators in single-line extraction)
        const checkMatch = line.match(/CHECK\(([^)]+)\)/);
        if (checkMatch) {
            const codes = checkMatch[1].trim().split(/\s+/);
            if (!fieldObj.checkOptions) { fieldObj.checkOptions = {}; }
            codes.forEach(code => {
                fieldObj.checkOptions[code] = true;
            });
            Logger.parse(`Found inline CHECK options for field ${fieldName}:`, codes);
        }

        const edtcdeMatch = line.match(/EDTCDE\(\s*([^\s)]+)(?:\s+([*$]))?\s*\)/);
        if (edtcdeMatch) {
            const edtcdeValue = edtcdeMatch[1].replace(/["']/g, '').trim().toUpperCase();
            if (edtcdeValue) {
                const replaceLeadingZerosWith = edtcdeMatch[2] ? edtcdeMatch[2].trim() : '';
                fieldObj.edtcde = { value: edtcdeValue };
                if ((replaceLeadingZerosWith === '*' || replaceLeadingZerosWith === '$') && edtcdeValue !== 'Z') {
                    fieldObj.edtcde.replaceLeadingZerosWith = replaceLeadingZerosWith;
                }
                Logger.parse(`Found inline EDTCDE(${edtcdeValue}${replaceLeadingZerosWith ? ` ${replaceLeadingZerosWith}` : ''}) for field ${fieldName}`);
            }
        }

        const parseInlineKeywordTextArg = (keywordName, lineText) => {
            const quotedRegex = new RegExp(`${keywordName}\\(\\s*'((?:''|[^'])*)'\\s*\\)`, 'i');
            const quotedMatch = lineText.match(quotedRegex);
            if (quotedMatch) {
                return quotedMatch[1].replace(/''/g, "'");
            }

            const genericRegex = new RegExp(`${keywordName}\\(\\s*([^)]*?)\\s*\\)`, 'i');
            const genericMatch = lineText.match(genericRegex);
            if (!genericMatch) {
                return '';
            }

            return genericMatch[1].trim();
        };

        const edtwrdValue = parseInlineKeywordTextArg('EDTWRD', line);
        if (edtwrdValue.length > 0) {
            fieldObj.edtwrd = { value: edtwrdValue };
            Logger.parse(`Found inline EDTWRD('${edtwrdValue}') for field ${fieldName}`);
        }

        const edtmskValue = parseInlineKeywordTextArg('EDTMSK', line);
        if (edtmskValue.length > 0) {
            fieldObj.edtmsk = { value: edtmskValue };
            Logger.parse(`Found inline EDTMSK('${edtmskValue}') for field ${fieldName}`);
        }

        const dftValue = parseInlineKeywordTextArg('DFT', line);
        if (dftValue.length > 0) {
            fieldObj.dft = { value: dftValue };
            Logger.parse(`Found inline DFT(${dftValue}) for field ${fieldName}`);
        }

        const cntfldValue = parseInlineKeywordTextArg('CNTFLD', line);
        if (/^\d{3}$/.test(cntfldValue)) {
            fieldObj.cntfld = { value: cntfldValue };
            Logger.parse(`Found inline CNTFLD(${fieldObj.cntfld.value}) for field ${fieldName}`);
        }

            const valuesMatch = line.match(/VALUES\(([^)]*)\)/i);
            if (valuesMatch) {
                const rawValues = valuesMatch[1].replace(/\s+/g, ' ').trim();
                if (rawValues.length > 0) {
                    fieldObj.values = rawValues;
                    Logger.parse(`Found inline VALUES(${rawValues}) for field ${fieldName}`);
                }
            }

        // Note: DFTVAL is now extracted by scanAttributeLinesAfterField, not inline
        
        // Add precision for float types
        if (precision) {
            fieldObj.precision = precision;
        }
        
        // Extract shift codes for zoned/double types using helper
        const shift = extractShiftCode(typeSpec, typeInfo.dataType);
        if (shift) {
            fieldObj.shift = shift;
            Logger.debug(`Extracted shift="${fieldObj.shift}" from typeSpec="${typeSpec}"`);
        }

        updatePreviousPositionContext(parseContext, fieldObj.row, fieldObj.col, fieldObj.length);
        
        return fieldObj;
    }
    

    // Handle messages from the extension
    window.addEventListener('message', event => {
        const message = event.data;
        
        switch (message.type) {
            case 'documentContent':
                const previousDocument = currentDocument;
                currentDocument = message.content;
                currentRecord = message.currentRecord || null;
                applyDisplaySizeSettingsFromDocument();
                
                // Update the record title in the toolbar
                updateRecordTitleUI({
                    Logger,
                    getCurrentRecord: () => currentRecord
                });
                
                // Update records list if provided
                if (message.records) {
                    allRecords = message.records;
                    Logger.debug('Received records list:', allRecords.map(r => r.name));
                    updateNavigationButtonsUI({
                        getCurrentRecord: () => currentRecord,
                        getAllRecords: () => allRecords
                    });
                }
                
                // Check if we need to preserve/restore a specific view
                const viewToRestore = message.preserveView || null;
                
                Logger.debug('Message received:', { 
                    type: message.type, 
                    hasContent: !!message.content,
                    currentRecord: message.currentRecord,
                    isReadOnly: message.isReadOnly,
                    isReadOnlyUndefined: message.isReadOnly === undefined,
                    recordsCount: allRecords.length,
                    preserveView: viewToRestore
                });
                
                // Handle read-only mode ONLY if not preserving a specific view
                // (otherwise updateReadOnlyMode will force switch to Preview)
                if (message.isReadOnly !== undefined) {
                    isReadOnly = message.isReadOnly;
                    Logger.debug('Document is read-only:', isReadOnly);
                    // Only update UI if not navigating (navigating will restore view later)
                    if (!viewToRestore) {
                        updateReadOnlyMode();
                    }
                } else {
                    Logger.warn('isReadOnly is undefined in message');
                }
                
                Logger.debug('Received document content for record:', currentRecord);

                const activeViewBeforeSync = document.querySelector('.view.active');
                const normalizeLineEndings = (text) => typeof text === 'string' ? text.replace(/\r\n/g, '\n') : '';
                const isSourceEcho = !viewToRestore
                    && activeViewBeforeSync
                    && activeViewBeforeSync.id === 'source-view'
                    && normalizeLineEndings(previousDocument) === normalizeLineEndings(message.content);

                if (isSourceEcho) {
                    Logger.debug('Skipping source echo re-parse to preserve editor responsiveness/history');
                    break;
                }

                // When opening in edit mode, convert relative +NN coordinates to absolute values.
                // This matches Rational Developer's behavior and ensures that all edit operations
                // (drag and drop, attribute changes, etc.) can reliably locate fields by their
                // absolute row/col in the DDS source.
                if (!isReadOnly) {
                    const resolved = resolveRelativeCoordinatesInDocument(currentDocument);
                    if (resolved.modified) {
                        currentDocument = resolved.content;
                        Logger.parse('Converted relative (+NN) coordinates to absolute in document');
                    }
                }
                
                // Parse fields with current record filter to maintain view consistency
                // This will automatically re-render the designer view (clearing and redrawing all fields)
                parseDspfFields(currentDocument);
                
                // Restore the view if navigation requested it
                if (viewToRestore) {
                    Logger.debug('Restoring view after navigation:', viewToRestore);
                    switchToView(viewToRestore);
                } else {
                    // Update other views if they're active
                    const activeView = document.querySelector('.view.active');
                    if (activeView && activeView.id === 'preview-view') {
                        updatePreviewView();
                    } else if (activeView && activeView.id === 'source-view') {
                        updateSourceViewUI({
                            Logger,
                            vscode,
                            getCurrentDocument: () => currentDocument,
                            setCurrentDocument: (value) => { currentDocument = value; },
                            getCurrentRecord: () => currentRecord,
                            parseDspfFields,
                            getSaveMode
                        });
                    }
                    // Note: Designer view is already updated by parseDspfFields() which re-renders all fields
                }
                
                Logger.success('Document content updated, fields parsed for record:', currentRecord, 'count:', fields.length);
                break;
            
            case 'saveSuccess':
                // Document changed - no notification needed
                Logger.success('Document changed successfully');
                break;
            
            case 'saveError':
                const errorMsg = message.error || 'Unknown error occurred while saving';
                showNotification('❌ Save failed: ' + errorMsg, 'error');
                Logger.error('Save failed:', errorMsg);
                break;
        }
    });
    
    // Helper function to show notifications
    function showNotification(message, type = 'info') {
        return showNotificationUI({
            message,
            type
        });
    }
    
    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ==================== INDICATOR CONFIGURATION MODAL ====================
    
    // Store indicators for each attribute/color
    let indicatorConfigurations = new Map(); // Key: "attr:blink" or "color:RED", Value: Set of indicators
    
    // Create IBM i style indicator input modal
    function createIBMiStyleModal() {
        if (document.getElementById('ibmi-indicator-modal')) {
            return;
        }
        
        const modalHTML = `
            <div id="ibmi-indicator-modal" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 10000;
                justify-content: center;
                align-items: center;
            ">
                <div style="
                    background: var(--panel-background, #1e1e1e);
                    border: 1px solid var(--border-color, #3c3c3c);
                    border-radius: 8px;
                    padding: 20px;
                    max-width: 600px;
                    width: 90%;
                ">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h3 style="margin: 0; color: var(--text-color, #fff);">Select Indicators</h3>
                        <button id="ibmi-modal-close" style="
                            background: none;
                            border: none;
                            color: var(--text-color, #fff);
                            font-size: 24px;
                            cursor: pointer;
                            padding: 0;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        ">×</button>
                    </div>
                    
                    <div style="margin-bottom: 16px; padding: 12px; background: var(--input-background, #333); border-radius: 4px;">
                        <p style="margin: 0; color: var(--text-color, #fff); font-size: 13px;">
                            <strong id="ibmi-target-label">Field or keyword . . . . . : SFLDSP</strong>
                        </p>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <label style="color: var(--text-color, #fff); font-size: 13px; display: block; margin-bottom: 8px;">
                            Type indicators, press Enter.
                        </label>
                        <div id="ibmi-indicators-container" style="display: flex; flex-direction: column; gap: 8px;">
                            <!-- OR indicator rows will be added here -->
                        </div>
                        <p style="margin: 8px 0 0 0; color: var(--text-muted, #888); font-size: 11px; font-style: italic;">
                            (Indicators shown horizontally are under AND condition)
                        </p>
                    </div>
                    
                    <div style="display: flex; gap: 8px; justify-content: flex-end;">
                        <button id="ibmi-modal-cancel" style="
                            padding: 8px 16px;
                            background: var(--button-secondary-background, #555);
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        ">Cancel</button>
                        <button id="ibmi-modal-ok" style="
                            padding: 8px 16px;
                            background: var(--primary-color, #007ACC);
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        ">OK</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Event listeners
        document.getElementById('ibmi-modal-close').addEventListener('click', closeIBMiModal);
        document.getElementById('ibmi-modal-cancel').addEventListener('click', closeIBMiModal);
        document.getElementById('ibmi-modal-ok').addEventListener('click', saveIBMiIndicators);
        
        document.getElementById('ibmi-indicator-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeIBMiModal();
            }
        });
    }
    
    // Create simple indicator picker modal
    function createIndicatorPickerModal() {
        if (document.getElementById('indicator-picker-modal')) {
            return;
        }
        
        const modalHTML = `
            <div id="indicator-picker-modal" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 10001;
                justify-content: center;
                align-items: center;
            ">
                <div style="
                    background: var(--panel-background, #1e1e1e);
                    border: 1px solid var(--border-color, #3c3c3c);
                    border-radius: 8px;
                    padding: 20px;
                    max-width: 600px;
                    width: 90%;
                ">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h3 style="margin: 0; color: var(--text-color, #fff);">Select Indicator</h3>
                        <button id="picker-modal-close" style="
                            background: none;
                            border: none;
                            color: var(--text-color, #fff);
                            font-size: 24px;
                            cursor: pointer;
                            padding: 0;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        ">×</button>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                        <label style="color: var(--text-color, #fff); font-size: 13px; font-weight: bold; margin-bottom: 8px; display: block;">Select Indicator (1-99):</label>
                        <p style="margin: 0 0 12px 0; color: var(--text-muted, #888); font-size: 11px;">
                            Click to select. Ctrl+Click for NOT (N).
                        </p>
                        <div id="picker-indicator-grid" style="
                            display: grid;
                            grid-template-columns: repeat(10, 1fr);
                            gap: 4px;
                        "></div>
                    </div>
                    
                    <div style="display: flex; gap: 8px; justify-content: space-between;">
                        <button id="picker-modal-clear" style="
                            padding: 8px 16px;
                            background: var(--error-color, #c53520);
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        ">Clear</button>
                        <button id="picker-modal-cancel" style="
                            padding: 8px 16px;
                            background: var(--button-secondary-background, #555);
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        ">Cancel</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Create indicator grid
        const grid = document.getElementById('picker-indicator-grid');
        for (let i = 1; i <= 99; i++) {
            const cell = document.createElement('button');
            cell.className = 'picker-indicator-cell';
            cell.dataset.indicator = i.toString();
            cell.textContent = i.toString();
            cell.style.cssText = `
                padding: 8px 4px;
                border: 1px solid var(--border-color, #3c3c3c);
                background: var(--button-background, #333);
                color: var(--text-color, #fff);
                cursor: pointer;
                border-radius: 4px;
                font-size: 11px;
                transition: all 0.2s;
            `;
            
            cell.addEventListener('mouseenter', function() {
                this.style.background = 'var(--list-hover-background, #2a2d2e)';
            });
            
            cell.addEventListener('mouseleave', function() {
                this.style.background = 'var(--button-background, #333)';
            });
            
            cell.addEventListener('click', function(e) {
                const isNot = e.ctrlKey || e.metaKey;
                selectIndicatorFromPicker(this.dataset.indicator, isNot);
            });
            
            grid.appendChild(cell);
        }
        
        // Event listeners
        document.getElementById('picker-modal-close').addEventListener('click', closeIndicatorPicker);
        document.getElementById('picker-modal-cancel').addEventListener('click', closeIndicatorPicker);
        document.getElementById('picker-modal-clear').addEventListener('click', clearIndicatorFromPicker);
        
        document.getElementById('indicator-picker-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeIndicatorPicker();
            }
        });
    }
    
    let pickerCallback = null; // Function to call when indicator is selected
    let pickerCurrentValue = null;
    
    function openIndicatorPicker(callback, currentValue = null) {
        createIndicatorPickerModal();
        pickerCallback = callback;
        pickerCurrentValue = currentValue;
        
        // Clear previous selection highlights
        document.querySelectorAll('.picker-indicator-cell').forEach(cell => {
            cell.classList.remove('selected', 'selected-not');
            cell.style.background = 'var(--button-background, #333)';
            cell.style.borderColor = 'var(--border-color, #3c3c3c)';
            cell.textContent = cell.dataset.indicator;
        });
        
        // Highlight current value if exists
        if (currentValue) {
            const cellNumber = parseInt(currentValue.number, 10).toString();
            const cell = document.querySelector(`.picker-indicator-cell[data-indicator="${cellNumber}"]`);
            if (cell) {
                if (currentValue.not) {
                    cell.classList.add('selected-not');
                    cell.style.background = '#ff6600';
                    cell.style.borderColor = '#ff9900';
                    cell.textContent = 'N' + cellNumber;
                } else {
                    cell.classList.add('selected');
                    cell.style.background = 'var(--primary-color, #007ACC)';
                    cell.style.borderColor = 'var(--primary-color, #007ACC)';
                }
            }
        }
        
        document.getElementById('indicator-picker-modal').style.display = 'flex';
    }
    
    function closeIndicatorPicker() {
        document.getElementById('indicator-picker-modal').style.display = 'none';
        pickerCallback = null;
        pickerCurrentValue = null;
    }
    
    function clearIndicatorFromPicker() {
        if (pickerCallback) {
            pickerCallback(null, false); // Pass null to clear
        }
        closeIndicatorPicker();
    }
    
    function selectIndicatorFromPicker(number, isNot) {
        if (pickerCallback) {
            pickerCallback(number, isNot);
        }
        closeIndicatorPicker();
    }
    
    // IBM i style modal functions
    let currentIBMiTarget = null;
    let ibmiIndicatorGroups = []; // Array of arrays: [[{number, not}], [{number, not}]]
    
    function openIBMiModal(type, key, label) {
        Logger.debug(`🚀 [MODAL] openIBMiModal called - type: ${type}, key: ${key}, label: ${label}`);
        createIBMiStyleModal();
        
        currentIBMiTarget = { type, key };
        const configKey = `${type}:${key}`;
        Logger.debug(`🚀 [MODAL] configKey: ${configKey}`);
        Logger.debug(`🚀 [MODAL] indicatorConfigurations.has(configKey): ${indicatorConfigurations.has(configKey)}`);
        Logger.debug(`🚀 [MODAL] selectedField exists: ${!!selectedField}`);
        
        // Update label
        document.getElementById('ibmi-target-label').textContent = label;
        
        // Load existing indicators - ALWAYS load from field data first
        ibmiIndicatorGroups = [];
        
        if (selectedField) {
            Logger.debug(`🚀 [MODAL] Loading from selectedField`);
            Logger.debug(`🚀 [MODAL] selectedField.type: ${selectedField.type}`);
            Logger.debug(`🚀 [MODAL] selectedField.name: ${selectedField.name}`);
            Logger.debug(`🚀 [MODAL] selectedField.indicators:`, selectedField.indicators);
            
            // Load from field data
            const fieldData = type === 'color' ? selectedField.colorIndicators?.[key] :
                            type === 'attr' ? selectedField.attributeIndicators?.[key] :
                            type === 'dftval' ? selectedField.dftvalIndicators :
                            type === 'check' ? selectedField.checkIndicators?.[key] :
                            type === 'field-indicators' ? selectedField.indicators : null;
            
            Logger.debug(`[MODAL] Loading indicators for ${type}:${key}`);
            Logger.debug(`[MODAL] fieldData:`, fieldData);
            Logger.debug(`[MODAL] fieldData.groups:`, fieldData?.groups);
            Logger.debug(`[MODAL] fieldData.isOr:`, fieldData?.isOr);
            
            if (fieldData && fieldData.groups) {
                // Load all groups (works for both OR and AND formats)
                ibmiIndicatorGroups = fieldData.groups.map(g => [...g.indicators]);
                Logger.debug(`[MODAL] Loaded ${ibmiIndicatorGroups.length} groups:`, ibmiIndicatorGroups);
            } else {
                Logger.warn(`[MODAL] No groups found in fieldData`);
            }
        } else if (indicatorConfigurations.has(configKey)) {
            Logger.debug(`🚀 [MODAL] Loading from indicatorConfigurations (no selectedField)`);
            const configData = indicatorConfigurations.get(configKey);
            Logger.debug(`[MODAL] configData:`, configData);
            
            // For subfile keywords (sfldsp, sfldspctl) or when no selectedField
            if (configData && configData.groups) {
                // Load groups structure (works for both OR and AND formats)
                ibmiIndicatorGroups = configData.groups.map(g => [...g.indicators]);
                Logger.debug(`[MODAL] Loaded ${ibmiIndicatorGroups.length} groups from Map:`, ibmiIndicatorGroups);
            } else if (configData instanceof Set) {
                // Convert Set to single group (backward compatibility)
                const indicators = [];
                configData.forEach(indStr => {
                    try {
                        indicators.push(JSON.parse(indStr));
                    } catch (e) {}
                });
                if (indicators.length > 0) {
                    ibmiIndicatorGroups.push(indicators);
                }
            }
        }
        
        // Ensure at least one empty row
        if (ibmiIndicatorGroups.length === 0) {
            ibmiIndicatorGroups.push([]);
        }
        
        renderIBMiIndicatorRows();
        document.getElementById('ibmi-indicator-modal').style.display = 'flex';
    }
    
    function closeIBMiModal() {
        document.getElementById('ibmi-indicator-modal').style.display = 'none';
        currentIBMiTarget = null;
    }
    
    function renderIBMiIndicatorRows() {
        const container = document.getElementById('ibmi-indicators-container');
        container.innerHTML = '';
        
        ibmiIndicatorGroups.forEach((group, groupIndex) => {
            const rowDiv = document.createElement('div');
            rowDiv.style.cssText = 'display: flex; align-items: center; gap: 4px;';
            
            // Add "OR" label for rows after the first
            if (groupIndex > 0) {
                const orLabel = document.createElement('span');
                orLabel.textContent = 'OR';
                orLabel.style.cssText = 'color: #00CED1; font-weight: bold; width: 30px; font-size: 12px;';
                rowDiv.appendChild(orLabel);
            } else {
                const spacer = document.createElement('span');
                spacer.style.width = '30px';
                rowDiv.appendChild(spacer);
            }
            
            // Create indicator input fields (max 9 per IBM i style)
            for (let i = 0; i < 9; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'ibmi-indicator-input';
                input.dataset.groupIndex = groupIndex;
                input.dataset.index = i;
                input.maxLength = 3;
                input.placeholder = 'Nnn';
                input.style.cssText = `
                    width: 40px;
                    padding: 4px;
                    background: var(--input-background, #333);
                    border: 1px solid var(--border-color, #3c3c3c);
                    color: var(--text-color, #fff);
                    border-radius: 3px;
                    text-align: center;
                    font-size: 12px;
                    font-family: monospace;
                `;
                
                // Load value if exists
                if (group[i]) {
                    const ind = group[i];
                    input.value = ind.not ? `N${ind.number.toString().padStart(2, '0')}` : ind.number.toString().padStart(2, '0');
                }
                
                // Click to open picker
                input.addEventListener('click', function() {
                    const groupIdx = parseInt(this.dataset.groupIndex);
                    const idx = parseInt(this.dataset.index);
                    
                    // Parse current value to pass to picker
                    let currentValue = null;
                    const value = this.value.trim().toUpperCase();
                    if (value) {
                        const isNot = value.startsWith('N');
                        const numStr = isNot ? value.substring(1) : value;
                        const num = parseInt(numStr);
                        if (!isNaN(num) && num >= 1 && num <= 99) {
                            currentValue = { number: num.toString(), not: isNot };
                        }
                    }
                    
                    openIndicatorPicker((number, isNot) => {
                        if (number === null) {
                            // Clear the field
                            this.value = '';
                        } else {
                            this.value = isNot ? `N${number.padStart(2, '0')}` : number.padStart(2, '0');
                        }
                        updateIBMiGroupFromInputs(groupIdx);
                    }, currentValue);
                });
                
                // Manual input
                input.addEventListener('blur', function() {
                    const groupIdx = parseInt(this.dataset.groupIndex);
                    updateIBMiGroupFromInputs(groupIdx);
                });
                
                rowDiv.appendChild(input);
            }
            
            // Delete row button (only if more than 1 row)
            if (ibmiIndicatorGroups.length > 1) {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '×';
                deleteBtn.style.cssText = `
                    background: var(--error-color, #c53520);
                    color: white;
                    border: none;
                    border-radius: 3px;
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    font-size: 16px;
                    padding: 0;
                `;
                deleteBtn.addEventListener('click', () => {
                    ibmiIndicatorGroups.splice(groupIndex, 1);
                    renderIBMiIndicatorRows();
                });
                rowDiv.appendChild(deleteBtn);
            }
            
            container.appendChild(rowDiv);
        });
        
        // Add new row button
        const addRowBtn = document.createElement('button');
        addRowBtn.textContent = '+ Add OR Group';
        addRowBtn.style.cssText = `
            padding: 6px 12px;
            background: var(--primary-color, #007ACC);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            margin-top: 8px;
        `;
        addRowBtn.addEventListener('click', () => {
            ibmiIndicatorGroups.push([]);
            renderIBMiIndicatorRows();
        });
        container.appendChild(addRowBtn);
    }
    
    function updateIBMiGroupFromInputs(groupIndex) {
        const inputs = document.querySelectorAll(`input[data-group-index="${groupIndex}"]`);
        const indicators = [];
        
        inputs.forEach(input => {
            const value = input.value.trim().toUpperCase();
            if (!value) {return;}
            
            const isNot = value.startsWith('N');
            const numStr = isNot ? value.substring(1) : value;
            const num = parseInt(numStr);
            
            if (!isNaN(num) && num >= 1 && num <= 99) {
                indicators.push({ number: num.toString(), not: isNot });
            }
        });
        
        ibmiIndicatorGroups[groupIndex] = indicators;
    }
    
    function saveIBMiIndicators() {
        if (!currentIBMiTarget){return;}
        
        // Update all groups from inputs
        ibmiIndicatorGroups.forEach((_, index) => {
            updateIBMiGroupFromInputs(index);
        });
        
        // Filter out empty groups
        const nonEmptyGroups = ibmiIndicatorGroups.filter(g => g.length > 0);
        
        const configKey = `${currentIBMiTarget.type}:${currentIBMiTarget.key}`;
        const { type, key } = currentIBMiTarget;
        
        // Update the field's indicator data structure DIRECTLY (not through Map)
        if (selectedField) {
            Logger.debug(`[SAVE] Updating field ${selectedField.name} ${type}:${key}`);
            
            if (type === 'color') {
                if (!selectedField.colorIndicators) {
                    selectedField.colorIndicators = {};
                }
                
                if (nonEmptyGroups.length === 0) {
                    // Remove indicator configuration
                    delete selectedField.colorIndicators[key];
                } else if (nonEmptyGroups.length === 1) {
                    // Single group: store as simple array (AND format)
                    selectedField.colorIndicators[key] = {
                        groups: [{ indicators: nonEmptyGroups[0] }],
                        isOr: false
                    };
                } else {
                    // Multiple groups: store as OR format
                    selectedField.colorIndicators[key] = {
                        groups: nonEmptyGroups.map(g => ({ indicators: g })),
                        isOr: true
                    };
                }
                Logger.debug(`[SAVE] Updated colorIndicators[${key}]:`, selectedField.colorIndicators[key]);
            } else if (type === 'attr') {
                if (!selectedField.attributeIndicators) {
                    selectedField.attributeIndicators = {};
                }
                
                if (nonEmptyGroups.length === 0) {
                    // Remove indicator configuration
                    delete selectedField.attributeIndicators[key];
                } else if (nonEmptyGroups.length === 1) {
                    // Single group: store as simple array (AND format)
                    selectedField.attributeIndicators[key] = {
                        groups: [{ indicators: nonEmptyGroups[0] }],
                        isOr: false
                    };
                } else {
                    // Multiple groups: store as OR format
                    selectedField.attributeIndicators[key] = {
                        groups: nonEmptyGroups.map(g => ({ indicators: g })),
                        isOr: true
                    };
                }
                Logger.debug(`[SAVE] Updated attributeIndicators[${key}]:`, selectedField.attributeIndicators[key]);
            } else if (type === 'dftval') {
                // DFTVAL doesn't use keys like colors/attributes
                if (nonEmptyGroups.length === 0) {
                    // Remove indicator configuration
                    delete selectedField.dftvalIndicators;
                } else if (nonEmptyGroups.length === 1) {
                    // Single group: store as AND format
                    selectedField.dftvalIndicators = {
                        groups: [{ indicators: nonEmptyGroups[0] }],
                        isOr: false
                    };
                } else {
                    // Multiple groups: store as OR format
                    selectedField.dftvalIndicators = {
                        groups: nonEmptyGroups.map(g => ({ indicators: g })),
                        isOr: true
                    };
                }
                selectedField.dftvalIndicatorsModified = true;
                Logger.debug(`[SAVE] Updated dftvalIndicators:`, selectedField.dftvalIndicators);
            } else if (type === 'check') {
                // CHECK uses key (ME or ER)
                if (!selectedField.checkIndicators) {
                    selectedField.checkIndicators = {};
                }
                
                if (nonEmptyGroups.length === 0) {
                    // Remove indicator configuration
                    delete selectedField.checkIndicators[key];
                } else if (nonEmptyGroups.length === 1) {
                    // Single group: store as AND format
                    selectedField.checkIndicators[key] = {
                        groups: [{ indicators: nonEmptyGroups[0] }],
                        isOr: false
                    };
                } else {
                    // Multiple groups: store as OR format
                    selectedField.checkIndicators[key] = {
                        groups: nonEmptyGroups.map(g => ({ indicators: g })),
                        isOr: true
                    };
                }
                Logger.debug(`[SAVE] Updated checkIndicators[${key}]:`, selectedField.checkIndicators[key]);
            } else if (type === 'field-indicators') {
                // Field-level indicators (variables, constants, keywords)
                if (nonEmptyGroups.length === 0) {
                    // Remove indicator configuration
                    delete selectedField.indicators;
                } else if (nonEmptyGroups.length === 1) {
                    // Single group: store as AND format
                    selectedField.indicators = {
                        groups: [{ indicators: nonEmptyGroups[0] }],
                        isOr: false
                    };
                } else {
                    // Multiple groups: store as OR format
                    selectedField.indicators = {
                        groups: nonEmptyGroups.map(g => ({ indicators: g })),
                        isOr: true
                    };
                }
                selectedField.fieldIndicatorsModified = true;
                Logger.debug(`[SAVE] Updated field.indicators:`, selectedField.indicators);
            } else if (type === 'sfldsp' || type === 'sfldspctl') {
                // SFLDSP and SFLDSPCTL are subfile control keywords (no selectedField)
                // Store directly in indicatorConfigurations Map
                Logger.debug(`[SAVE] Updating ${type} indicators`);
            }
            
            // Update the field in DDS immediately (if field exists)
            // NOTE: For field-level indicators, DON'T update DDS here - let applyFieldProperties handle it
            // so that the "Apply" button can detect changes properly
            if (type !== 'sfldsp' && type !== 'sfldspctl' && type !== 'field-indicators') {
                updateFieldInDds(selectedField);
                Logger.debug('[SAVE] DDS updated');
            }
        }
        
        // Also update the Map for backward compatibility and for subfile keywords
        if (nonEmptyGroups.length === 0) {
            indicatorConfigurations.delete(configKey);
        } else if (nonEmptyGroups.length === 1) {
            // For subfile keywords, store as groups structure (not Set)
            if (type === 'sfldsp' || type === 'sfldspctl') {
                indicatorConfigurations.set(configKey, {
                    groups: [{ indicators: nonEmptyGroups[0] }],
                    isOr: false
                });
            } else {
                // For other keywords, maintain backward compatibility with Set
                const indicatorSet = new Set();
                nonEmptyGroups[0].forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
            }
        } else {
            indicatorConfigurations.set(configKey, {
                groups: nonEmptyGroups.map(g => ({ indicators: g })),
                isOr: true
            });
        }
        
        // Update button indicator count
        updateIndicatorButtonCount(currentIBMiTarget.type, currentIBMiTarget.key);
        
        closeIBMiModal();
    }
    
    function updateIndicatorButtonCount(type, key) {
        const configKey = `${type}:${key}`;
        const config = indicatorConfigurations.get(configKey);
        
        let count = 0;
        if (config instanceof Set) {
            count = config.size;
        } else if (config && config.groups) {
            count = config.groups.reduce((sum, g) => sum + g.indicators.length, 0);
        }
        
        // Find button and update badge
        const buttonSelector = type === 'color' ? `.color-indicator-btn[data-color="${key}"]` :
                              type === 'attr' ? `.attr-indicator-btn[data-attr="${key}"]` :
                              type === 'field-indicators' ? `.indicator-config-btn[data-field-indicators="true"]` :
                              type === 'sfldsp' ? '#sfldsp-indicators-btn' :
                              type === 'sfldspctl' ? '#sfldspctl-indicators-btn' : null;
        
        if (buttonSelector) {
            const button = document.querySelector(buttonSelector);
            if (button) {
                // For subfile keywords and field indicators, use setIndicatorButtonState
                if (type === 'sfldsp' || type === 'sfldspctl' || type === 'field-indicators') {
                    setIndicatorButtonState(button, config);
                } else {
                    const badge = button.querySelector('.indicator-count');
                    if (badge) {
                        if (count > 0) {
                            badge.textContent = count;
                            badge.style.display = 'flex';
                        } else {
                            badge.style.display = 'none';
                        }
                    }
                }
            }
        }
    }
    
    // Legacy compatibility - redirect to IBM i style
    function openIndicatorModal(type, key, label) {
        openIBMiModal(type, key, label);
    }  
    
    // Redirect old function to new IBM i style modal
    function openIndicatorModal(type, key, label) {
        Logger.debug(`Opening indicator modal: type=${type}, key=${key}, label=${label}`);
        Logger.debug(`Selected field:`, selectedField);
        if (selectedField) {
            Logger.debug(`Field colorIndicators:`, selectedField.colorIndicators);
            Logger.debug(`Field attributeIndicators:`, selectedField.attributeIndicators);
        }
        
        // Use new IBM i style modal
        openIBMiModal(type, key, label);
    }
    
    // Setup indicator config buttons
    // configura los event listeners (los clics en los botones), pero NO actualiza el texto de los botones 
    // con los números de los indicadores.
    function setupIndicatorButtons() {
        return setupIndicatorButtonsUI({
            Logger,
            openIndicatorModal
        });
    }
    
    // ==================== END INDICATOR MODAL ====================

// Expose select functions for unit tests running in Node VM and webview test harnesses
function __setCurrentDocumentForTests(doc) {
    currentDocument = doc;
}
function __getCurrentDocumentForTests() {
    return currentDocument;
}
function __setCurrentRecordForTests(recordName) {
    currentRecord = recordName;
}
function __getCurrentRecordForTests() {
    return currentRecord;
}
function __clearIndicatorConfigurationsForTests() {
    if (indicatorConfigurations && typeof indicatorConfigurations.clear === 'function') {
        indicatorConfigurations.clear();
    }
}
function __setIndicatorConfigurationForTests(key, value) {
    if (indicatorConfigurations && typeof indicatorConfigurations.set === 'function') {
        indicatorConfigurations.set(key, value);
    }
}
function __applySubfileControlForTests(overrides = {}) {
    return applySubfileControlUI({
        Logger: overrides.Logger || Logger,
        vscode: overrides.vscode || { postMessage: () => {} },
        getCurrentDocument: overrides.getCurrentDocument || (() => currentDocument),
        setCurrentDocument: overrides.setCurrentDocument || ((value) => { currentDocument = value; }),
        getCurrentRecord: overrides.getCurrentRecord || (() => currentRecord),
        getCurrentView: overrides.getCurrentView || (() => 'preview'),
        updateDocumentInEditor: overrides.updateDocumentInEditor || (() => {}),
        generateDdsLineWithIndicators: overrides.generateDdsLineWithIndicators || generateDdsLineWithIndicators,
        indicatorConfigurations: overrides.indicatorConfigurations || indicatorConfigurations,
        showScreenProperties: overrides.showScreenProperties || (() => {}),
        parseDspfFields: overrides.parseDspfFields || (() => {}),
        updatePreviewView: overrides.updatePreviewView || (() => {})
    });
}

try {
    if (typeof window !== 'undefined' && window) {
        window.__TESTS = window.__TESTS || {};
        if (typeof removeFieldFromDds !== 'undefined') {window.__TESTS.removeFieldFromDds = removeFieldFromDds;}
        if (typeof updateFieldInDds !== 'undefined') {window.__TESTS.updateFieldInDds = updateFieldInDds;}
        if (typeof processMultiLineContinuation !== 'undefined') {window.__TESTS.processMultiLineContinuation = processMultiLineContinuation;}
        if (typeof attributeContentRegex !== 'undefined') {window.__TESTS.attributeContentRegex = attributeContentRegex;}
        if (typeof ATTRIBUTE_KEYWORDS_SET !== 'undefined') {window.__TESTS.ATTRIBUTE_KEYWORDS_SET = ATTRIBUTE_KEYWORDS_SET;}
        if (typeof scanIndicatorsBackward !== 'undefined') {window.__TESTS.scanIndicatorsBackward = scanIndicatorsBackward;}
        if (typeof resolveRelativeCoordinatesInDocument !== 'undefined') {window.__TESTS.resolveRelativeCoordinatesInDocument = resolveRelativeCoordinatesInDocument;}
        if (typeof getWindowDimensions !== 'undefined') {window.__TESTS.getWindowDimensions = getWindowDimensions;}
        if (typeof getSubfileRelationship !== 'undefined') {window.__TESTS.getSubfileRelationship = getSubfileRelationship;}
        if (typeof getSflpagValue !== 'undefined') {window.__TESTS.getSflpagValue = getSflpagValue;}
        if (typeof getSflRowSpan !== 'undefined') {window.__TESTS.getSflRowSpan = getSflRowSpan;}
        if (typeof applySflpagRepetition !== 'undefined') {window.__TESTS.applySflpagRepetition = applySflpagRepetition;}
        window.__TESTS.setCurrentDocument = __setCurrentDocumentForTests;
        window.__TESTS.getCurrentDocument = __getCurrentDocumentForTests;
        window.__TESTS.setCurrentRecord = __setCurrentRecordForTests;
        window.__TESTS.getCurrentRecord = __getCurrentRecordForTests;
        window.__TESTS.applySubfileControl = __applySubfileControlForTests;
        window.__TESTS.clearIndicatorConfigurations = __clearIndicatorConfigurationsForTests;
        window.__TESTS.setIndicatorConfiguration = __setIndicatorConfigurationForTests;
    }
} catch (err) {
    // ignore
}

if (typeof module !== 'undefined' && module.exports) {
    try {
        if (typeof removeFieldFromDds !== 'undefined') {module.exports.removeFieldFromDds = removeFieldFromDds;}
        if (typeof updateFieldInDds !== 'undefined') {module.exports.updateFieldInDds = updateFieldInDds;}
        if (typeof processMultiLineContinuation !== 'undefined') {module.exports.processMultiLineContinuation = processMultiLineContinuation;}
        if (typeof attributeContentRegex !== 'undefined') {module.exports.attributeContentRegex = attributeContentRegex;}
        if (typeof ATTRIBUTE_KEYWORDS_SET !== 'undefined') {module.exports.ATTRIBUTE_KEYWORDS_SET = ATTRIBUTE_KEYWORDS_SET;}
        if (typeof scanIndicatorsBackward !== 'undefined') {module.exports.scanIndicatorsBackward = scanIndicatorsBackward;}
        if (typeof resolveRelativeCoordinatesInDocument !== 'undefined') {module.exports.resolveRelativeCoordinatesInDocument = resolveRelativeCoordinatesInDocument;}
        if (typeof getWindowDimensions !== 'undefined') {module.exports.getWindowDimensions = getWindowDimensions;}
        if (typeof getSubfileRelationship !== 'undefined') {module.exports.getSubfileRelationship = getSubfileRelationship;}
        if (typeof getSflpagValue !== 'undefined') {module.exports.getSflpagValue = getSflpagValue;}
        if (typeof getSflRowSpan !== 'undefined') {module.exports.getSflRowSpan = getSflRowSpan;}
        if (typeof applySflpagRepetition !== 'undefined') {module.exports.applySflpagRepetition = applySflpagRepetition;}
        module.exports.setCurrentDocument = __setCurrentDocumentForTests;
        module.exports.getCurrentDocument = __getCurrentDocumentForTests;
        module.exports.setCurrentRecord = __setCurrentRecordForTests;
        module.exports.getCurrentRecord = __getCurrentRecordForTests;
        module.exports.applySubfileControl = __applySubfileControlForTests;
        module.exports.clearIndicatorConfigurations = __clearIndicatorConfigurationsForTests;
        module.exports.setIndicatorConfiguration = __setIndicatorConfigurationForTests;
    } catch (err) {
        // Ignore - test exports are best-effort
    }
}
})();