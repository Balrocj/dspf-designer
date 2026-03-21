/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_utils_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_utils_displaySizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _modules_utils_idGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _modules_utils_fieldNameValidator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _modules_utils_charMetrics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _modules_ui_rulers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _modules_ui_canvasSetup_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _modules_ui_toolbarSetup_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _modules_ui_displaySizeSelector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _modules_ui_canvasSize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _modules_ui_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var _modules_ui_gridLines_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16);
/* harmony import */ var _modules_ui_previewDisplaySizeListeners_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17);
/* harmony import */ var _modules_ui_sourceSearch_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(18);
/* harmony import */ var _modules_ui_navigation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19);
/* harmony import */ var _modules_ui_windowResize_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(20);
/* harmony import */ var _modules_ui_sourceView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21);
/* harmony import */ var _modules_ui_moveField_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(22);
/* harmony import */ var _modules_ui_applyWindowDimensions_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23);
/* harmony import */ var _modules_ui_showScreenProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(24);
/* harmony import */ var _modules_ui_saveDocument_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(25);
/* harmony import */ var _modules_ui_setViewZoom_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(26);
/* harmony import */ var _modules_ui_switchToView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(27);
/* harmony import */ var _modules_ui_indicatorButtons_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(28);
/* harmony import */ var _modules_ui_showFieldProperties_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(29);
/* harmony import */ var _modules_ui_applyFieldProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(30);
/* harmony import */ var _modules_ui_propertiesTabs_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(31);
/* harmony import */ var _modules_ui_subfileControl_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(32);
/* harmony import */ var _modules_ui_functionKeys_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(33);
/* harmony import */ var _modules_ui_deleteConfirmation_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(34);
/* harmony import */ var _modules_ui_previewView_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(35);
/* harmony import */ var _modules_ui_updateReadOnlyMode_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(36);
/* harmony import */ var _modules_ui_selectField_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(37);
/* harmony import */ var _modules_ui_deselectAllFields_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(38);
/* harmony import */ var _modules_ui_editField_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(39);
/* harmony import */ var _modules_ui_scrollToRecordInSource_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(40);
/* harmony import */ var _modules_ui_recordNavigation_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(41);
/* harmony import */ var _modules_ui_createField_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(42);
/* harmony import */ var _modules_ui_generateUniqueFieldName_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(43);
/* harmony import */ var _modules_ui_applyAttributeClasses_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(44);
/* harmony import */ var _modules_ui_computeFieldDisplay_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(45);
/* harmony import */ var _modules_ui_setFieldContent_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(46);
/* harmony import */ var _modules_ui_setupFieldElement_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(47);
/* harmony import */ var _modules_ui_renderField_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(48);
/* harmony import */ var _modules_ui_renderWindowField_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(49);
/* harmony import */ var _modules_ui_getFieldCharForDisplay_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(50);
/* harmony import */ var _modules_ui_getFieldDisplayText_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(51);
/* harmony import */ var _modules_ui_generateWindowFieldHtml_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(52);
/* harmony import */ var _modules_ui_generateId_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(53);
/* harmony import */ var _modules_ui_getDefaultLength_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(54);
/* harmony import */ var _modules_ui_getKeywordDisplay_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(55);
/* harmony import */ var _modules_ui_extractAttributes_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(56);
/* harmony import */ var _modules_ui_renderAttributeRows_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(57);
/* harmony import */ var _modules_ui_getAttributeCheckboxMap_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(58);
/* harmony import */ var _modules_ui_formatIndicatorLabel_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(59);
/* harmony import */ var _modules_ui_setIndicatorButtonState_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(60);
/* harmony import */ var _modules_ui_applyColorChanges_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(61);
/* harmony import */ var _modules_ui_getRecordType_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(62);
/* harmony import */ var _modules_ui_extractRowColFromParts_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(63);
/* harmony import */ var _modules_ui_parseDdsTypeSpecification_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(64);
/* harmony import */ var _modules_ui_parseUsageAndDecimals_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(65);
/* harmony import */ var _modules_ui_extractFloatPrecision_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(66);
/* harmony import */ var _modules_ui_extractShiftCode_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(67);
/* harmony import */ var _modules_ui_parseWindowDimensionsFromLine_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(68);
/* harmony import */ var _modules_ui_processMultiLineContinuation_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(69);
/* harmony import */ var _modules_ui_scanIndicatorsBackward_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(70);
/* harmony import */ var _modules_ui_scanAttributeLinesAfterField_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(71);
/* harmony import */ var _modules_ui_showNotification_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(72);
/* harmony import */ var _modules_ui_updateDocumentInEditor_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(73);
/* harmony import */ var _modules_ui_buildVariableTypeAndUsage_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(74);
/* harmony import */ var _modules_ui_generateConstantFieldLines_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(75);
/* harmony import */ var _modules_ui_generateFieldDspatrLines_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(76);
/* harmony import */ var _modules_ui_generateFieldColorLines_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(77);
/* harmony import */ var _modules_ui_generateFieldCheckLines_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(78);
/* harmony import */ var _modules_ui_generateFieldDftvalLines_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(79);
/* harmony import */ var _modules_ui_generateDdsLineWithIndicators_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(80);
/* harmony import */ var _modules_ui_applyIndicatorChangesToField_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(81);
/* module decorator */ module = __webpack_require__.hmd(module);



















































































(function() {
    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.success('DSPF Designer script loaded');
    
    const vscode = acquireVsCodeApi();
    window.vscodeApi = vscode; // Make it globally available
    
    // IBM i Color Mappings (5250 standard colors) - now using ColorUtils
    const IBM_COLORS = _modules_utils_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.IBM_COLORS;
    
    let currentDocument = '';
    let selectedField = null;
    let fields = [];
    let currentRecord = null; // Track which record we're editing
    let allRecords = []; // List of all records in the DSPF file
    let currentDisplaySize = 'DS3'; // Current display size: DS3 (24x80) or DS4 (27x132)
    let isReadOnly = false; // Track if document is in read-only mode
    let currentView = 'designer'; // Track the current active view (designer, preview, source)
    let currentZoom = 1; // Zoom level for views container
    
    // Initialize the designer when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.ui('DOM loaded, initializing designer');
        initializeDesigner();
    });
    
    // Also try to initialize immediately in case DOM is already loaded
    if (document.readyState === 'loading') {
        // Still loading, wait for DOMContentLoaded
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Document still loading, waiting...');
    } else {
        // Already loaded
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.success('Document already loaded, initializing immediately');
        initializeDesigner();
    }
    
    async function initializeDesigner() {
        await (0,_modules_utils_charMetrics_js__WEBPACK_IMPORTED_MODULE_8__.calibrateCharMetrics)(_modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates, _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger);
        (0,_modules_ui_canvasSetup_js__WEBPACK_IMPORTED_MODULE_10__.setupCanvasInteraction)(deselectAllFields, showScreenProperties);
        (0,_modules_ui_toolbarSetup_js__WEBPACK_IMPORTED_MODULE_11__.setupToolbarButtons)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            vscode,
            saveDocument,
            navigateToPreviousRecord,
            navigateToNextRecord,
            setViewZoom,
            getCurrentZoom: () => currentZoom,
            switchToView
        });
        (0,_modules_ui_displaySizeSelector_js__WEBPACK_IMPORTED_MODULE_12__.setupDisplaySizeSelector)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            getCurrentDisplaySize: () => currentDisplaySize,
            setCurrentDisplaySize: (value) => { currentDisplaySize = value; },
            updateCanvasSize: (displaySize) => (0,_modules_ui_canvasSize_js__WEBPACK_IMPORTED_MODULE_13__.updateCanvasSize)(displaySize, _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates, _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger),
            setupRulers,
            parseDspfFields,
            getCurrentDocument: () => currentDocument,
            applyDefaultZoomForDisplaySize,
            updatePreviewView
        });
        setViewZoom(currentZoom);
        (0,_modules_ui_canvasSize_js__WEBPACK_IMPORTED_MODULE_13__.updateCanvasSize)(currentDisplaySize, _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates, _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger);
        (0,_modules_ui_gridLines_js__WEBPACK_IMPORTED_MODULE_15__.setupGridLines)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            setupRulers
        });
        
        // Setup drag and drop with a delay to ensure DOM is fully loaded
        setTimeout(() => {
            (0,_modules_ui_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_14__.setupDragAndDrop)({
                Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
                ScreenCoordinates: _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates,
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
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.success('DSPF Designer initialized');
    }

    function setViewZoom(zoomValue) {
        return (0,_modules_ui_setViewZoom_js__WEBPACK_IMPORTED_MODULE_25__.setViewZoom)({
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
        const displayConfig = _modules_utils_displaySizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);
        const preferredDisplaySize = displayConfig.singleSize;

        if (preferredDisplaySize && currentDisplaySize !== preferredDisplaySize) {
            currentDisplaySize = preferredDisplaySize;
            applyDefaultZoomForDisplaySize(currentDisplaySize);
            (0,_modules_ui_canvasSize_js__WEBPACK_IMPORTED_MODULE_13__.updateCanvasSize)(currentDisplaySize, _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates, _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger);
            setupRulers();
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.ui(`Default display size set from DSPSIZ: ${currentDisplaySize}`);
        }

        syncDisplaySizeRadioButtons(currentDisplaySize);
        syncDisplaySizeRadioAvailability(displayConfig);
    }
    
    // Update UI based on read-only mode
    function updateReadOnlyMode() {
        return (0,_modules_ui_updateReadOnlyMode_js__WEBPACK_IMPORTED_MODULE_35__.updateReadOnlyMode)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            isReadOnly,
            setCurrentView: (value) => { currentView = value; },
            updatePreviewView
        });
    }
    
    
    // Setup numbered rulers 
    function setupRulers() {
        (0,_modules_ui_rulers_js__WEBPACK_IMPORTED_MODULE_9__.setupRulers)(currentDisplaySize, _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates, _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger);
    }
    
    
    // Navigate to previous record
    function navigateToPreviousRecord() {
        return (0,_modules_ui_recordNavigation_js__WEBPACK_IMPORTED_MODULE_40__.navigateToPreviousRecord)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            vscode,
            getAllRecords: () => allRecords,
            getCurrentRecord: () => currentRecord,
            getCurrentView: () => currentView
        });
    }
    
    // Navigate to next record
    function navigateToNextRecord() {
        return (0,_modules_ui_recordNavigation_js__WEBPACK_IMPORTED_MODULE_40__.navigateToNextRecord)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            vscode,
            getAllRecords: () => allRecords,
            getCurrentRecord: () => currentRecord,
            getCurrentView: () => currentView
        });
    }
    
    
    // Generate a unique field name for the current record
    function generateUniqueFieldName(prefix) {
        return (0,_modules_ui_generateUniqueFieldName_js__WEBPACK_IMPORTED_MODULE_42__.generateUniqueFieldName)({
            prefix,
            fields,
            IdGenerator: _modules_utils_idGenerator_js__WEBPACK_IMPORTED_MODULE_4__.IdGenerator
        });
    }
    
    // Create a new field on the canvas
    function createField(type, row, col) {
        return (0,_modules_ui_createField_js__WEBPACK_IMPORTED_MODULE_41__.createField)({
            type,
            row,
            col,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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
            getSflpagValue,
            selectField,
            addFieldToDds,
            showFieldProperties
        });
    }
    
    // Helper: Apply display attribute classes to field element
    function applyAttributeClasses(fieldElement, attributes) {
        return (0,_modules_ui_applyAttributeClasses_js__WEBPACK_IMPORTED_MODULE_43__.applyAttributeClasses)({
            fieldElement,
            attributes
        });
    }

    // Shared: compute display text, width, color and classes for a field (Designer/Preview)
    function computeFieldDisplay(field, mode = 'designer') {
        return (0,_modules_ui_computeFieldDisplay_js__WEBPACK_IMPORTED_MODULE_44__.computeFieldDisplay)({
            field,
            mode,
            ColorUtils: _modules_utils_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils,
            ScreenCoordinates: _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates,
            getKeywordDisplay,
            getFieldDisplayText
        });
    }

    function getFieldDisplayText(field, fieldLength) {
        return (0,_modules_ui_getFieldDisplayText_js__WEBPACK_IMPORTED_MODULE_50__.getFieldDisplayText)({
            field,
            fieldLength,
            getFieldCharForDisplay
        });
    }
    
    // Helper: Get keyword display text
    function getKeywordDisplay(keywordName) {
        return (0,_modules_ui_getKeywordDisplay_js__WEBPACK_IMPORTED_MODULE_54__.getKeywordDisplay)({
            keywordName
        });
    }
    
    // Helper: Set field element content and styling based on field type
    function setFieldContent(fieldElement, field) {
        return (0,_modules_ui_setFieldContent_js__WEBPACK_IMPORTED_MODULE_45__.setFieldContent)({
            fieldElement,
            field,
            computeFieldDisplay
        });
    }
    
    // Helper: Setup common field element properties and event listeners
    function setupFieldElement(fieldElement, field) {
        return (0,_modules_ui_setupFieldElement_js__WEBPACK_IMPORTED_MODULE_46__.setupFieldElement)({
            fieldElement,
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            applyAttributeClasses,
            setFieldContent,
            selectField,
            isReadOnly,
            editField
        });
    }
    
    // Render a field on the canvas
    function renderField(field) {
        return (0,_modules_ui_renderField_js__WEBPACK_IMPORTED_MODULE_47__.renderField)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            ScreenCoordinates: _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates,
            getCurrentDisplaySize: () => currentDisplaySize,
            setupFieldElement,
            getFieldDisplayText
        });
    }
    
    // Render field positioned relative to a window
    function renderWindowField(field, windowDimensions) {
        return (0,_modules_ui_renderWindowField_js__WEBPACK_IMPORTED_MODULE_48__.renderWindowField)({
            field,
            windowDimensions,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            ScreenCoordinates: _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates,
            getCurrentDisplaySize: () => currentDisplaySize,
            setupFieldElement,
            getFieldDisplayText
        });
    }
    
    // Helper function to get display character for a field
    function getFieldCharForDisplay(field) {
        return (0,_modules_ui_getFieldCharForDisplay_js__WEBPACK_IMPORTED_MODULE_49__.getFieldCharForDisplay)({
            field
        });
    }
    
    // Select a field and show its properties
    function selectField(field) {
        return (0,_modules_ui_selectField_js__WEBPACK_IMPORTED_MODULE_36__.selectField)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            deselectAllFields,
            getSelectedField: () => selectedField,
            setSelectedField: (value) => { selectedField = value; },
            indicatorConfigurations,
            getFreshFieldFromDds: (targetField) => (0,_modules_ui_selectField_js__WEBPACK_IMPORTED_MODULE_36__.getFreshFieldFromDds)({
                field: targetField,
                Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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
        return (0,_modules_ui_deselectAllFields_js__WEBPACK_IMPORTED_MODULE_37__.deselectAllFields)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            indicatorConfigurations,
            setSelectedField: (value) => { selectedField = value; },
            showFieldProperties
        });
    }

    // -------------------- Shared indicator UI helpers --------------------
    // Convierte un array de indicadores en texto como "02 43 11" o "N03 51"
    function formatIndicatorLabel(list) {
        return (0,_modules_ui_formatIndicatorLabel_js__WEBPACK_IMPORTED_MODULE_58__.formatIndicatorLabel)(list);
    }

    // Actualiza el botón con el texto generado por formatIndicatorLabel
    function setIndicatorButtonState(btn, indicators) {
        return (0,_modules_ui_setIndicatorButtonState_js__WEBPACK_IMPORTED_MODULE_59__.setIndicatorButtonState)({
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
        return (0,_modules_ui_renderAttributeRows_js__WEBPACK_IMPORTED_MODULE_56__.renderAttributeRows)({
            allowedKeys,
            fieldType,
            attributeUiDefs: ATTRIBUTE_UI_DEFS
        });
    }

    function getAttributeCheckboxMap(allowedKeys = null) {
        return (0,_modules_ui_getAttributeCheckboxMap_js__WEBPACK_IMPORTED_MODULE_57__.getAttributeCheckboxMap)({
            allowedKeys,
            attributeUiDefs: ATTRIBUTE_UI_DEFS
        });
    }
    
    // Show field properties in the properties panel
    function showFieldProperties(field) {
        return (0,_modules_ui_showFieldProperties_js__WEBPACK_IMPORTED_MODULE_28__.showFieldProperties)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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
        return (0,_modules_ui_showScreenProperties_js__WEBPACK_IMPORTED_MODULE_23__.showScreenProperties)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            vscode,
            isReadOnly,
            getCurrentDocument: () => currentDocument,
            setCurrentDocument: (value) => { currentDocument = value; },
            getCurrentRecord: () => currentRecord,
            getCurrentView: () => currentView,
            getRecordType,
            IdGenerator: _modules_utils_idGenerator_js__WEBPACK_IMPORTED_MODULE_4__.IdGenerator,
            getWindowDimensions,
            setupPropertiesTabs: _modules_ui_propertiesTabs_js__WEBPACK_IMPORTED_MODULE_30__.setupPropertiesTabs,
            loadSubfileControl: _modules_ui_subfileControl_js__WEBPACK_IMPORTED_MODULE_31__.loadSubfileControl,
            applySubfileControl: _modules_ui_subfileControl_js__WEBPACK_IMPORTED_MODULE_31__.applySubfileControl,
            loadFunctionKeys: _modules_ui_functionKeys_js__WEBPACK_IMPORTED_MODULE_32__.loadFunctionKeys,
            createFunctionKeyRow: _modules_ui_functionKeys_js__WEBPACK_IMPORTED_MODULE_32__.createFunctionKeyRow,
            saveFunctionKeys: _modules_ui_functionKeys_js__WEBPACK_IMPORTED_MODULE_32__.saveFunctionKeys,
            updateDocumentInEditor,
            generateDdsLineWithIndicators,
            indicatorConfigurations,
            DisplaySizeUtils: _modules_utils_displaySizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.DisplaySizeUtils,
            IndicatorUtils: _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils,
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
        return (0,_modules_ui_getRecordType_js__WEBPACK_IMPORTED_MODULE_61__.getRecordType)({
            recordName,
            currentDocument
        });
    }
    
    // Get subfile relationship (SFL + SFLCTL pairing)
    // Returns { sflRecord, sflctlRecord, companionRecord } or null if not a subfile record
    function getSubfileRelationship(recordName) {
        return (0,_modules_ui_subfileControl_js__WEBPACK_IMPORTED_MODULE_31__.getSubfileRelationship)({
            recordName,
            currentDocument,
            getRecordType,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Get SFLPAG value from SFLCTL record
    function getSflpagValue(sflctlRecordName) {
        return (0,_modules_ui_subfileControl_js__WEBPACK_IMPORTED_MODULE_31__.getSflpagValue)({
            sflctlRecordName,
            currentDocument,
            currentDisplaySize,
            DisplaySizeUtils: _modules_utils_displaySizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.DisplaySizeUtils,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Parse WINDOW dimensions from a line during record parsing
    // Returns windowDimensions object if found for current display size, null otherwise
    function parseWindowDimensionsFromLine(trimmedLine, currentRecordName, currentWindowDimensions) {
        return (0,_modules_ui_parseWindowDimensionsFromLine_js__WEBPACK_IMPORTED_MODULE_67__.parseWindowDimensionsFromLine)({
            trimmedLine,
            currentRecordName,
            currentWindowDimensions,
            currentDisplaySize,
            DisplaySizeUtils: _modules_utils_displaySizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.DisplaySizeUtils,
            currentDocument,
            getWindowDimensions,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
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
        const displayConfig = _modules_utils_displaySizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Check if we're entering the target record
            if (line.includes(`R ${recordName}`) || line.includes(`R  ${recordName}`)) {
                inTargetRecord = true;
                continue;
            }
            
            // Stop when we hit the next record
            if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
                break;
            }
            
            // Look for WINDOW keywords
            if (inTargetRecord && line.includes('WINDOW(')) {
                // Check if it's a reference to another window record (no digits, just a name)
                const windowRefMatch = line.match(/WINDOW\(([A-Z0-9_]+)\)/);
                if (windowRefMatch && !/\d+\s+\d+/.test(windowRefMatch[0])) {
                    // It's a reference to another WINDOW record
                    const referencedRecord = windowRefMatch[1];
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Found WINDOW reference to ${referencedRecord} in record ${recordName}`);
                    
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
                const windowMatch = line.match(/WINDOW\((\d+)\s+(\d+)\s+(\d+)\s+(\d+)\)/);
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
                    if (line.includes('*DS3')) {
                        result.ds3 = dimensions;
                    } else if (line.includes('*DS4')) {
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
        return (0,_modules_ui_applyWindowDimensions_js__WEBPACK_IMPORTED_MODULE_22__.applyWindowDimensions)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn(`transferIndicators: Invalid options for ${kind}:`, { kind, keysCount: keys?.length, fieldName: field?.name });
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`transferIndicators: Unknown kind "${kind}"`);
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[transferIndicators-${kind}] Transferred ${parsedIndicators.length} indicators for ${key}`);
            } else {
                // No config entry means user cleared indicators for this key
                if (kind === 'keyword') {
                    field[indicatorsKey] = [];
                } else if (kind === 'attr' || kind === 'color' || kind === 'check') {
                    if (field[indicatorsKey] && field[indicatorsKey][key]) {
                        delete field[indicatorsKey][key];
                        indicatorsModified = true;
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[transferIndicators-${kind}] Cleared indicators for ${key} (no config entry)`);
                    }
                }
            }
        });

        // For grouped attributes, apply to all active attributes
        if (kind === 'attr' && attrFormat === 'grouped' && groupedIndicators !== null) {
            keys.forEach(key => {
                field[indicatorsKey][key] = [...groupedIndicators]; // Clone
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[transferIndicators-attr] Applied ${groupedIndicators.length} shared indicators to ${key}`);
            });
        }

        // Remove indicators for keys that are no longer selected (for color, attr, check)
        if (kind !== 'keyword') {
            Object.keys(field[indicatorsKey]).forEach(existingKey => {
                if (!keys.includes(existingKey)) {
                    delete field[indicatorsKey][existingKey];
                    indicatorsModified = true;
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[transferIndicators-${kind}] Removed indicators for unselected ${existingKey}`);
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
        return (0,_modules_ui_applyColorChanges_js__WEBPACK_IMPORTED_MODULE_60__.applyColorChanges)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            transferIndicators
        });
    }
    
    // Apply property changes to a field. Apply Changes button.
    function applyFieldProperties(field) {
        return (0,_modules_ui_applyFieldProperties_js__WEBPACK_IMPORTED_MODULE_29__.applyFieldProperties)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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
            updateSourceViewUI: _modules_ui_sourceView_js__WEBPACK_IMPORTED_MODULE_20__.updateSourceView,
            vscode,
            showFieldProperties,
            selectField
        });
    }
    
    // Delete a field
    function deleteField(field) {
        if (isReadOnly) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn('Cannot delete field in read-only mode');
            return;
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Attempting to delete field:', field);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Field ID:', field.id, 'Type:', field.type, 'Name:', field.name);
        
        // Show confirmation modal
        (0,_modules_ui_deleteConfirmation_js__WEBPACK_IMPORTED_MODULE_33__.showDeleteConfirmation)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            onConfirm: () => (0,_modules_ui_deleteConfirmation_js__WEBPACK_IMPORTED_MODULE_33__.executeDeleteField)({
                field,
                Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
                fields,
                deselectAllFields,
                removeFieldFromDds
            })
        });
    }
    
    // Edit field (double-click handler)
    // Edit a field (focus properties panel)
    function editField(field) {
        return (0,_modules_ui_editField_js__WEBPACK_IMPORTED_MODULE_38__.editField)({
            field,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            isReadOnly,
            selectField
        });
    }
    
    // Move an existing field to a new position
    function moveField(fieldId, newRow, newCol) {
        return (0,_modules_ui_moveField_js__WEBPACK_IMPORTED_MODULE_21__.moveField)({
            fieldId,
            newRow,
            newCol,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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
        return (0,_modules_ui_saveDocument_js__WEBPACK_IMPORTED_MODULE_24__.saveDocument)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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

        return (0,_modules_ui_switchToView_js__WEBPACK_IMPORTED_MODULE_26__.switchToView)({
            viewName,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            setCurrentView: (value) => { currentView = value; },
            getSelectedField: () => selectedField,
            setSelectedField: (value) => { selectedField = value; },
            getFields: () => fields,
            getCurrentDocument: () => currentDocument,
            parseDspfFields,
            showFieldProperties,
            updatePreviewView,
            updateSourceViewUI: _modules_ui_sourceView_js__WEBPACK_IMPORTED_MODULE_20__.updateSourceView,
            vscode,
            setCurrentDocument: (value) => { currentDocument = value; },
            getCurrentRecord: () => currentRecord,
            setupSourceSearchUI: _modules_ui_sourceSearch_js__WEBPACK_IMPORTED_MODULE_17__.setupSourceSearch,
            scrollToRecordInSource
        });
    }
    
    // Scroll to the line where the current record starts in source view
    function scrollToRecordInSource() {
        return (0,_modules_ui_scrollToRecordInSource_js__WEBPACK_IMPORTED_MODULE_39__.scrollToRecordInSource)({
            currentRecord,
            currentDocument,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Update the preview view with current document
    function updatePreviewView() {
        const result = (0,_modules_ui_previewView_js__WEBPACK_IMPORTED_MODULE_34__.updatePreviewView)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            ScreenCoordinates: _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates,
            parseDspfForPreview,
            generateWindowFieldHtml,
            generateFieldHtml,
            setupPreviewDisplaySizeListeners: _modules_ui_previewDisplaySizeListeners_js__WEBPACK_IMPORTED_MODULE_16__.setupPreviewDisplaySizeListeners,
            updateCanvasSize: (displaySize) => (0,_modules_ui_canvasSize_js__WEBPACK_IMPORTED_MODULE_13__.updateCanvasSize)(displaySize, _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates, _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger),
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
        return (0,_modules_ui_subfileControl_js__WEBPACK_IMPORTED_MODULE_31__.applySflpagRepetition)({
            fields,
            targetRecord,
            subfileRelationship,
            getSflpagValue,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }

    // Helper: Scan backwards from keyword line to collect all indicator-only lines
    // Returns: { groups: [{indicators: [...]}], isOr: boolean, scannedLines: [...] }
    function scanIndicatorsBackward(lines, startIndex, lineOffset, contextLabel = '') {
        return (0,_modules_ui_scanIndicatorsBackward_js__WEBPACK_IMPORTED_MODULE_69__.scanIndicatorsBackward)({
            lines,
            startIndex,
            lineOffset,
            contextLabel,
            IndicatorUtils: _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }

    // Shared attribute/color scanner to unify Designer and Preview parsing
    function scanAttributeLinesAfterField(options) {
        return (0,_modules_ui_scanAttributeLinesAfterField_js__WEBPACK_IMPORTED_MODULE_70__.scanAttributeLinesAfterField)({
            options,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
            IndicatorUtils: _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils,
            scanIndicatorsBackward,
            extractAttributes,
            attributeContentRegex: _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex
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
        let skipNextLines = 0; // Track lines to skip (for multi-line constants)
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Parsing DSPF for preview, target record:', targetRecord);
        
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
			if (trimmedLine.match(/^A\s+R\s+\w+/)) {
				const match = trimmedLine.match(/R\s+(\w+)/);
				if (match) {
					currentRecordName = match[1];
					// If no target record specified, use the first non-subfile record found
					if (!targetRecord && !recordName && !trimmedLine.includes('SFL')) {
						targetRecord = currentRecordName;
						_modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`No target record specified, using first found: ${targetRecord}`);
					}
					// Check if this is our target record
					inTargetRecord = (targetRecord === currentRecordName);
					_modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found record: ${currentRecordName}, target: ${inTargetRecord}`);
					
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
                if (inTargetRecord && line.length > 6 && line[5] === 'A' && (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) && !trimmedLine.includes('WINDOW(')) {
                // Check for multi-line constant (ends with '-' or '+' before quote)
                let lineToProcess = line;
                if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Multi-line constant detected at line ${index + 1}`);
                    
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
                const field = parseFieldLineForDesigner(lineToProcess);
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
                        attributeRegex: /COLOR\(|DSPATR\(|EDTCDE\(|DFTVAL\(/
                    });
                    
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Parsed preview field: ${field.name} (${field.type}) at ${field.row},${field.col} for record ${currentRecordName}`);
                    fields.push(field);
                } else {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn(`Failed to parse line: "${trimmedLine.substring(0, 60)}..."`);
                }
            }
        });
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Preview parsed ${fields.length} fields for record ${targetRecord || 'ALL'}`);
        
        // Check if target record is part of a subfile (SFL/SFLCTL) relationship
        if (targetRecord) {
            const subfileRel = getSubfileRelationship(targetRecord);
            if (subfileRel && subfileRel.companionRecord) {
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Preview: Parsing companion record: ${subfileRel.companionRecord}`);
                
                // Parse fields from companion record
                let inCompanionRecord = false;
                let companionRecordName = null;
                
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
                    if (trimmedLine.match(/^A\s+R\s+\w+/)) {
                        const match = trimmedLine.match(/R\s+(\w+)/);
                        if (match) {
                            companionRecordName = match[1];
                            inCompanionRecord = (subfileRel.companionRecord === companionRecordName);
                            if (inCompanionRecord) {
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Preview: Found companion record: ${companionRecordName}`);
                            }
                        }
                    }
                    
                    // Parse fields from companion record (align with Designer detection)
                    const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                    if (inCompanionRecord && line.length > 6 && line[5] === 'A' && (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) && !trimmedLine.includes('WINDOW(')) {
                        // Check for multi-line constant (ends with '-' or '+' before quote)
                        let lineToProcess = line;
                        if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Preview: Multi-line constant in companion record detected at line ${index + 1}`);
                            
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
                        const field = parseFieldLineForDesigner(lineToProcess);
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
                                attributeRegex: /COLOR\(|DSPATR\(|DFTVAL\(/,
                                stopOnFieldKeywordsRegex: /(PSHBTN(FLD|CHC)|EDTCDE\(|VALUES\(|RANGE\()/
                            });
                            
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Preview: Parsed companion field: ${field.name} at ${field.row},${field.col} with color=${field.color}, attrs=${field.attributes ? Object.keys(field.attributes).join(',') : 'none'}`);
                            fields.push(field);
                        }
                    }
                });
            }
        }
        
        // Use WINDOW dimensions as declared in DDS (no auto-adjustment)
        if (windowDimensions) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Using declared window dimensions: ${windowDimensions.height}x${windowDimensions.width} at (${windowDimensions.row},${windowDimensions.col})`);
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`SFL ${targetRecord}: Using SFLCTL ${subfileRelationship.sflctlRecord} WINDOW dimensions: ${windowDimensions.height}x${windowDimensions.width} at (${windowDimensions.row},${windowDimensions.col})`);
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
    function extractRowColFromParts(parts, startIndex) {
        return (0,_modules_ui_extractRowColFromParts_js__WEBPACK_IMPORTED_MODULE_62__.extractRowColFromParts)({
            parts,
            startIndex
        });
    }
    
    // Helper: Parse DDS type specification (e.g., "10A", "15S", "7P", "3Y", "2F")
    // Returns: { length, typeChar, dataType } or null if invalid
    function parseDdsTypeSpecification(typeSpec, hasDecimals = false) {
        return (0,_modules_ui_parseDdsTypeSpecification_js__WEBPACK_IMPORTED_MODULE_63__.parseDdsTypeSpecification)({
            typeSpec,
            hasDecimals
        });
    }
    
    // Helper: Parse usage and decimals from parts
    // Returns: { decimals, usage, hasDecimals, nextIndex }
    function parseUsageAndDecimals(parts, startIndex) {
        return (0,_modules_ui_parseUsageAndDecimals_js__WEBPACK_IMPORTED_MODULE_64__.parseUsageAndDecimals)({
            parts,
            startIndex
        });
    }
    
    // Helper: Extract FLTPCN precision from line
    // Returns: 'SINGLE', 'DOUBLE', or null
    function extractFloatPrecision(line, dataType) {
        return (0,_modules_ui_extractFloatPrecision_js__WEBPACK_IMPORTED_MODULE_65__.extractFloatPrecision)({
            line,
            dataType
        });
    }
    
    // Helper: Extract shift code from type spec for zoned/double types
    // Returns: shift code (S/Y/N/D/I for zoned, J/E/O/G for double) or null
    function extractShiftCode(typeSpec, dataType) {
        return (0,_modules_ui_extractShiftCode_js__WEBPACK_IMPORTED_MODULE_66__.extractShiftCode)({
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
        return (0,_modules_ui_processMultiLineContinuation_js__WEBPACK_IMPORTED_MODULE_68__.processMultiLineContinuation)({
            ...options,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Extract display attributes with indicators
    // Returns: { attrs: {...}, indicators: [], isGroupedFormat: boolean }
    function extractAttributes(content, fullLine = null) {
        return (0,_modules_ui_extractAttributes_js__WEBPACK_IMPORTED_MODULE_55__.extractAttributes)({
            content,
            fullLine,
            IndicatorUtils: _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // extractColorWithIndicator removed - COLOR now uses unified indicator system in scanAttributeLinesAfterField
    // extractCheckOptions and applyCheckOptionsFromCodes removed - CHECK now uses unified indicator system like COLOR/DFTVAL
    
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Window field "${field.name}" type=${field.type} at (${field.row},${field.col}) value=[${displayValue}] length=${displayValue.length}`);
        }
        
        // Color handled exclusively by computeFieldDisplay for both views
        const isKeyword = field.type === 'keyword' || field.isKeyword;
        const colorStyle = '';
        
        // Visual copies render with same opacity as original
        
        // Calculate line wrapping for character fields that exceed screen width
        const segments = _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.calculateFieldWrapping(field, currentDisplaySize);
        
        if (segments.length === 1) {
            // Single line field - render normally
            const { top, left } = _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.toPixels(absoluteRow, absoluteCol);
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
            
            segments.forEach(segment => {
                const segmentRow = windowOffset ? windowOffset.row + segment.row - 1 : segment.row;
                const segmentCol = windowOffset ? windowOffset.col + segment.col + 1 : segment.col;
                const { top, left } = _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.toPixels(segmentRow, segmentCol);
                const segmentValue = displayValue.substring(offset, offset + segment.length);
                const widthStyle = `width: ${_modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.getWidthInPixels(segment.length)}px;`;
                
                html += `        <div class="field ${baseClass}" data-field-segment="true" style="top: ${top}px; left: ${left}px; ${widthStyle} white-space: pre;">${segmentValue}</div>\n`;
                
                offset += segment.length;
            });
            
            return html;
        }
    }
    
    // Generate HTML for fields positioned relative to a window (wrapper for backward compatibility)
    function generateWindowFieldHtml(field, windowDimensions) {
        return (0,_modules_ui_generateWindowFieldHtml_js__WEBPACK_IMPORTED_MODULE_51__.generateWindowFieldHtml)({
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
            if (trimmedLine.match(/^A\s+R\s+(\w+)/)) {
                const match = trimmedLine.match(/^A\s+R\s+(\w+)/);
                if (match) {
                    const recordName = match[1];
                    
                    // If we find our target record, mark the start
                    if (recordName === currentRecord) {
                        recordStartIndex = i;
                        inTargetRecord = true;
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Found record ${currentRecord} at line ${i + 1}`);
                    }
                    // If we were in the target record and found a new one, mark the end
                    else if (inTargetRecord) {
                        recordEndIndex = i;
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Record ${currentRecord} ends at line ${recordEndIndex + 1}, next record is ${recordName}`);
                        break;
                    }
                }
            }
        }
        
        if (recordStartIndex === -1) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`Record ${currentRecord} not found`);
            return;
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Record boundaries: ${recordStartIndex + 1} to ${recordEndIndex}`);
        
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
            const isAttributeLine = trimmedLine.startsWith('A ') && _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex.test(contentAfter44);
            
            if (isAttributeLine) {
                continue;
            }
            
            // Skip multiline constant continuation lines (no row/col, but has quotes)
            // These are A-lines with text in quotes but no row/col position
            const isContinuationLine = trimmedLine.startsWith('A') && trimmedLine.includes("'") && !trimmedLine.match(/^A\s+\d+\s+\d+/);
            if (isContinuationLine) {
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping continuation line during search at line ${i + 1}`);
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`New field row=${field.row} col=${field.col} comes after existing field at row=${existingRow} col=${existingCol}`);
                    
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
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping comment line at ${insertIndex + 1}`);
                            insertIndex++;
                            continue;
                        }
                        
                        // Stop on blank lines
                        if (!nextLineTrim || nextLineTrim === 'A') {
                            break;
                        }
                        
                        const nextLineContentAfter44 = nextLine.length > 43 ? nextLine.substring(43) : '';
                        const isNextAttr = nextLineTrim.startsWith('A ') && _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex.test(nextLineContentAfter44);
                        
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
                        const hasUnknownKeyword = contentAfter43.length > 0 && !_modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex.test(contentAfter44);
                        
                        if (isNextAttr) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping attribute line at ${insertIndex + 1}`);
                            insertIndex++;
                        } else if (isNextContinuation) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping continuation line at ${insertIndex + 1}: ${nextLineTrim.substring(0, 50)}...`);
                            insertIndex++;
                        } else if (isIndicatorOnlyLine) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping indicator-only line at ${insertIndex + 1}`);
                            insertIndex++;
                        } else if (hasUnknownKeyword) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping unknown keyword line at ${insertIndex + 1}: ${contentAfter43.substring(0, 30)}...`);
                            insertIndex++;
                        } else {
                            break;
                        }
                    }
                    break;
                } else {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`New field row=${field.row} col=${field.col} comes before existing field at row=${existingRow} col=${existingCol}`);
                }
            }
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Inserting field ${field.name} at line ${insertIndex + 1} within record boundaries ${recordStartIndex + 1}-${recordEndIndex}`);
        
        // Insert the new line(s) - ddsLine may contain multiple lines for long constants
        const linesToInsert = ddsLine.split('\n');
        lines.splice(insertIndex, 0, ...linesToInsert);
        currentDocument = lines.join('\n');
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`✅ Added field ${field.name} to record ${currentRecord} at line ${insertIndex + 1}`);
        updateDocumentInEditor();
    }

    // Parse keyword coordinates and name from DDS content area (after column 18)
    // DDS fixed format for keywords: row uses 2 positions and column uses 3 positions.
    // This supports values like " 1 20DATE", "11 20DATE", " 1120DATE", " 2122TIME".
    function parseKeywordPosition(contentAfter18) {
        const fixedMatch = contentAfter18.match(/^\s*([ 0-9]{2})([ 0-9]{3})(DATE|TIME|SYSNAME|USER)\b/);
        if (fixedMatch) {
            const row = parseInt(fixedMatch[1], 10);
            const col = parseInt(fixedMatch[2], 10);

            if (!Number.isNaN(row) && !Number.isNaN(col)) {
                return {
                    row: String(row),
                    col: String(col),
                    keyword: fixedMatch[3]
                };
            }
        }

        // Fallback for non-fixed formatting variants
        const fallbackMatch = contentAfter18.trim().match(/^(\d{1,2})\s+(\d{1,3})(DATE|TIME|SYSNAME|USER)\b/);
        if (!fallbackMatch) {
            return null;
        }

        return {
            row: String(parseInt(fallbackMatch[1], 10)),
            col: String(parseInt(fallbackMatch[2], 10)),
            keyword: fallbackMatch[3]
        };
    }
    
    // Remove a field from DDS. After update with updateFieldInDds.
    function findFieldBlockInDds(field, recordStartLine, recordEndLine) {
        const lines = currentDocument.split('\n');
        const targetRecord = field.recordName || currentRecord;
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`findFieldBlockInDds: searching for field ${field.name} (row=${field.row}, col=${field.col}, type=${field.type}) in record ${targetRecord}`);
        
        // Find record boundaries if not provided
        if (recordStartLine === undefined || recordEndLine === undefined) {
            recordStartLine = -1;
            recordEndLine = lines.length;
            
            if (targetRecord) {
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const recordMatch = line.match(/^\s*A\s+R\s+(\w+)/);
                    if (recordMatch && recordMatch[1] === targetRecord) {
                        recordStartLine = i;
                    }
                    if (recordStartLine >= 0 && i > recordStartLine && line.match(/^\s*A\s+R\s+\w+/)) {
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
                // Format: "     A  03                            19 11'TEXT'"
                const contentAfter18 = line.substring(18);
                const constMatch = contentAfter18.match(/(\d{1,2})\s+(\d{1,2})'/);
                
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  ❌ Field ${field.name} NOT FOUND at coordinates (${field.row}, ${field.col})`);
            return null;
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  ✅ Found field at line ${fieldLineIndex + 1}`);
        
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
            const isRecordDef = prevTrim.match(/^A\s+R\s+\w+/);
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  ⬆️ Found ${fieldLineIndex - blockStartIndex} indicator line(s) before field`);
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
            const isRecordDef = nextTrim.match(/^A\s+R\s+\w+/);
            
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
            const hasKnownKeyword = /^(DSPATR|COLOR|CHECK|DFTVAL|EDTCDE|EDTWRD|COMP|RANGE|VALUES|TEXT|COLHDG|CHGINPDFT|MSGID|SFLMSG|DFT|CMP|REFFLD)\s*\(/.test(contentAfter43);
            
            if (contentAfter43.length > 0 || hasKnownKeyword) {
                // This is an attribute or keyword line - include it in the block
                blockEndIndex = i;
                i++;
                continue;
            }
            
            // Unrecognized line type - stop
            break;
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Block found: lines ${blockStartIndex + 1} to ${blockEndIndex + 1} (${blockEndIndex - blockStartIndex + 1} lines total)`);
        
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
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Searching for field to remove:', field, 'in record:', targetRecord);
        
        // Find record boundaries first
        let recordStartLine = -1;
        let recordEndLine = lines.length;
        
        if (targetRecord) {
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                //Primero busca el número de línea del record que contiene el campo
                const recordMatch = line.match(/^\s*A\s+R\s+(\w+)/);
                if (recordMatch && recordMatch[1] === targetRecord) {
                    recordStartLine = i;
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Found record start at line', i + 1);
                }
                // Check if we found a different record after finding ours
                if (recordStartLine >= 0 && i > recordStartLine && line.match(/^\s*A\s+R\s+\w+/)) {
                    recordEndLine = i;
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Found record end at line', i);
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
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Looking for keyword "${field.name}" at row=${rowStr} col=${colStr}`);
            
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds('Scanning backward for indicator-only lines before keyword...');
                    
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
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Stopped at line ${j}: has field/keyword`);
                            break;
                        }
                        
                        // Now check if it's an indicator-only line
                        const indicatorMatch = prevTrim.match(/^A\s*(O|N\d{2}|AND|\s)*\s*(?:N?\d{2}\s*)*$/);
                        
                        if (indicatorMatch) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Found indicator line at ${j}: "${prevTrim}"`);
                            indicatorLinesToRemove.push(j);
                        } else {
                            // Not an indicator line, stop scanning backward
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Stopped at line ${j}: not an indicator line`);
                            break;
                        }
                    }
                    
                    // Remove indicator lines (they're already in reverse order from the backward scan)
                    let keywordLineIndex = i; // Track where the keyword line is
                    if (indicatorLinesToRemove.length > 0) {
                        // DON'T reverse - array is already bottom-to-top
                        for (const idx of indicatorLinesToRemove) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Removing indicator line at index ${idx}`);
                            lines.splice(idx, 1);
                            keywordLineIndex--; // Adjust keyword line index since we removed lines before it
                            endSearch--; // Adjust end boundary
                        }
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removed ${indicatorLinesToRemove.length} indicator line(s) before keyword`);
                    }
                    
                    let linesToRemove = 1;
                    
                    // Special handling for DATE keyword
                    if (field.name === 'DATE') {
                        // Check if next line is EDTCDE (at adjusted index)
                        if (keywordLineIndex + 1 < lines.length && lines[keywordLineIndex + 1].match(/EDTCDE\(/)) {
                            linesToRemove = 2; // Remove DATE + EDTCDE
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Removing EDTCDE line for DATE keyword');
                            
                            // Check if line after EDTCDE has COLOR
                            if (keywordLineIndex + 2 < lines.length && lines[keywordLineIndex + 2].match(/COLOR\(/)) {
                                linesToRemove = 3; // Remove DATE + EDTCDE + COLOR
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds('Removing COLOR line after EDTCDE');
                            }
                        }
                    } else {
                        // For other keywords, check if next line has COLOR
                        if (keywordLineIndex + 1 < lines.length && lines[keywordLineIndex + 1].match(/COLOR\(/)) {
                            linesToRemove = 2; // Remove keyword + COLOR line
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Removing COLOR line');
                        }
                    }
                    
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removing ${linesToRemove} keyword line(s) starting at adjusted index ${keywordLineIndex}`);
                    lines.splice(keywordLineIndex, linesToRemove);
                    let removedCount = linesToRemove + indicatorLinesToRemove.length;
                    endSearch--; // Adjust end boundary after removing keyword
                    
                    // Set i to the adjusted position for comment/keyword cleanup
                    i = keywordLineIndex;
                    
                    // Remove comments and unknown keywords after the keyword (same as variables)
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Starting comment/keyword cleanup at index ${i}, endSearch=${endSearch}, lines.length=${lines.length}`);
                    while (i < lines.length && i < endSearch) {
                        const nextLine = lines[i];
                        const nextTrim = nextLine.trim();
                        const parsedNextKeyword = parseKeywordPosition(nextLine.substring(18));
                        
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Checking line ${i}: "${nextTrim}"`);
                        
                        // Check for comments
                        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                         nextTrim.startsWith('A*') || 
                                         nextTrim.startsWith('*') || 
                                         nextTrim.startsWith('-');
                        
                        if (isComment) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing comment line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue;
                        }
                        
                        // Stop on blank lines
                        if (nextTrim === '' || nextTrim === 'A') {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: blank line`);
                            break;
                        }
                        
                        // If it doesn't start with 'A', stop
                        if (!nextTrim.startsWith('A')) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: doesn't start with A`);
                            break;
                        }
                        
                        // Check if line has a field/constant/record definition
                        const hasConstant = nextTrim.match(/\d+\s+\d+'/);
                        const isRecordDef = nextTrim.match(/^A\s+R\s+\w+/);
                        
                        if (isRecordDef || hasConstant || parsedNextKeyword) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: found record def or constant`);
                            break;
                        }
                        
                        // Check for coordinates (new field)
                        const coordinateArea = nextLine.length > 39 ? nextLine.substring(39).trim() : '';
                        const hasCoordinates = /^\d{1,2}\s\d{1,2}/.test(coordinateArea) || /^\d{1,2}\s\d\D/.test(coordinateArea);
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Coordinates check: "${coordinateArea.substring(0, 10)}", hasCoordinates=${hasCoordinates}`);
                        if (hasCoordinates) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: found new field with coordinates`);
                            break;
                        }
                        
                        // Check for content at column 44+ (attributes, unknown keywords)
                        const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                        
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   contentAfter43: "${contentAfter43}", length: ${contentAfter43.length}`);
                        
                        if (contentAfter43.length > 0) {
                            // Unknown keyword or attribute - remove it
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing unknown keyword/attribute line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue;
                        }
                        
                        // If we get here, it's something we don't recognize, stop
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: unrecognized line type`);
                        break;
                    }
                    
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removed keyword ${field.name} and ${removedCount - linesToRemove} associated line(s)`);
                    break;
                }
            }
        } else if (field.type === 'constant') {
            // For constants: search by row + col in content after column 18 (to handle indicators)
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            const valuePrefix = field.value.substring(0, Math.min(10, field.value.length));
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Looking for constant at row=${rowStr} col=${colStr} starting with "${valuePrefix}"`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Searching within record boundaries: lines ${startSearch + 1} to ${endSearch}`);
            
            let constantLineIndex = -1;
            let linesToRemove = 0;
            
            // Find the constant line
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                
                // Search in content after column 18
                const contentAfter18 = line.substring(18);
                const constMatch = contentAfter18.match(/(\d{1,2})\s+(\d{1,2})'/);
                
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
                                    const isRecordHeader = /^A\s+R\s+\w+/.test(contTrim);
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
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Found indicator-only line before constant at line ${k + 1}: ${prevTrimmed}`);
                                }
                            }
                            
                            // Remove indicator lines first (in reverse order to avoid index shift)
                            indicatorLinesToRemove.forEach(idx => {
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removing indicator line at index ${idx}`);
                                lines.splice(idx, 1);
                                constantLineIndex--; // Adjust constant index
                            });
                            
                            // Now remove the constant lines at adjusted index
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removing ${linesToRemove} constant line(s) starting at adjusted index ${constantLineIndex}`);
                            lines.splice(constantLineIndex, linesToRemove);
                            let removedCount = linesToRemove + indicatorLinesToRemove.length;
                            endSearch--; // Adjust end boundary after removing constant
                            
                            // Set cleanupIndex to the adjusted position for comment/keyword cleanup
                            let cleanupIndex = constantLineIndex;
                            
                            // Remove comments and unknown keywords after the constant (same as variables)
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Starting comment/keyword cleanup at index ${cleanupIndex}, endSearch=${endSearch}, lines.length=${lines.length}`);
                            while (cleanupIndex < lines.length && cleanupIndex < endSearch) {
                                const nextLine = lines[cleanupIndex];
                                const nextTrim = nextLine.trim();
                                
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Checking line ${cleanupIndex}: "${nextTrim}"`);
                                
                                // Check for comments
                                const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                                 nextTrim.startsWith('A*') || 
                                                 nextTrim.startsWith('*') || 
                                                 nextTrim.startsWith('-');
                                
                                if (isComment) {
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing comment line: ${nextTrim.substring(0, 60)}...`);
                                    lines.splice(cleanupIndex, 1);
                                    removedCount++;
                                    endSearch--;
                                    continue;
                                }
                                
                                // Stop on blank lines
                                if (nextTrim === '' || nextTrim === 'A') {
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: blank line`);
                                    break;
                                }
                                
                                // If it doesn't start with 'A', stop
                                if (!nextTrim.startsWith('A')) {
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: doesn't start with A`);
                                    break;
                                }
                                
                                // Check if line has a field/constant/record definition
                                const hasConstant = nextTrim.match(/\d+\s+\d+'/);
                                const isRecordDef = nextTrim.match(/^A\s+R\s+\w+/);
                                
                                if (isRecordDef || hasConstant) {
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: found record def or constant`);
                                    break;
                                }
                                
                                // Check for coordinates (new field)
                                const coordinateArea = nextLine.length > 39 ? nextLine.substring(39).trim() : '';
                                const hasCoordinates = /^\d{1,2}\s\d{1,2}/.test(coordinateArea) || /^\d{1,2}\s\d\D/.test(coordinateArea);
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Coordinates check: "${coordinateArea.substring(0, 10)}", hasCoordinates=${hasCoordinates}`);
                                if (hasCoordinates) {
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: found new field with coordinates`);
                                    break;
                                }
                                
                                // Check for content at column 44+ (attributes, unknown keywords)
                                const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                                
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   contentAfter43: "${contentAfter43}", length: ${contentAfter43.length}`);
                                
                                if (contentAfter43.length > 0) {
                                    // Unknown keyword or attribute - remove it
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing unknown keyword/attribute line: ${nextTrim.substring(0, 60)}...`);
                                    lines.splice(cleanupIndex, 1);
                                    removedCount++;
                                    endSearch--;
                                    continue;
                                }
                                
                                // If we get here, it's something we don't recognize, stop
                                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: unrecognized line type`);
                                break;
                            }
                            
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removed constant and ${removedCount - linesToRemove} associated line(s)`);
                            break;
                        }
                    }
                }
            }
            
            if (constantLineIndex === -1) {
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error('Constant line not found in DDS');
            }
            
        } else {
            // For variables: search by field name + row + col
            const rowStr = field.row.toString();
            const colStr = field.col.toString();
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Looking for field "${field.name}" at row=${rowStr} col=${colStr}`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Searching within record boundaries: lines ${startSearch + 1} to ${endSearch}`);
            
            for (let i = startSearch; i < endSearch; i++) {
                const line = lines[i];
                
                // Match field name and position (must not be a constant line)
                // Some field lines may include inline attributes like VALUES('A' 'B') which contain quotes.
                // We should detect true constants (quote immediately after col) and avoid treating them as fields,
                // but still match field lines that include quotes later (attributes).
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Checking line ${i + 1}: includesName=${line.includes(field.name)}, includesRow=${line.includes(rowStr)}, includesCol=${line.includes(colStr)}, hasQuote=${line.includes("'")}`);
                const isConstantLine = line.match(/\d+\s+\d+'/); // true constant (quotes immediately after col)
                // Use includes for row/col to allow non-contiguous formatting (e.g., '2Y 0B 22 32')
                if (line.includes(field.name) && line.includes(rowStr) && line.includes(colStr) && !isConstantLine) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds('Found field line at index', i, ':', line);
                    
                    // SCAN BACKWARD for indicator-only lines before this field
                    let indicatorLinesToRemove = [];
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds('Scanning backward for indicator-only lines...');
                    
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
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Stopped at line ${j}: has field name`);
                            break;
                        }
                        
                        // Now check if it's an indicator-only line
                        const indicatorMatch = prevTrim.match(/^A\s*(O|N\d{2}|AND|\s)*\s*(?:N?\d{2}\s*)*$/);
                        
                        if (indicatorMatch) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Found indicator line at ${j}: "${prevTrim}"`);
                            indicatorLinesToRemove.push(j);
                        } else {
                            // Not an indicator line, stop scanning backward
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Stopped at line ${j}: not an indicator line`);
                            break;
                        }
                    }
                    
                    // Remove indicator lines (they're already in reverse order from the backward scan)
                    let fieldLineIndex = i; // Track where the field line is
                    if (indicatorLinesToRemove.length > 0) {
                        // DON'T reverse - array is already bottom-to-top (e.g., [337, 336, 335])
                        for (const idx of indicatorLinesToRemove) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Removing indicator line at index ${idx}`);
                            lines.splice(idx, 1);
                            fieldLineIndex--; // Adjust field line index since we removed lines before it
                            endSearch--; // Adjust end boundary
                        }
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removed ${indicatorLinesToRemove.length} indicator line(s) before field`);
                    }
                    
                    // Now remove the field line at the adjusted index
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removing field line at adjusted index ${fieldLineIndex}: "${lines[fieldLineIndex]}"`);
                    lines.splice(fieldLineIndex, 1);
                    let removedCount = 1 + indicatorLinesToRemove.length;
                    endSearch--; // Adjust end boundary after removing field
                    
                    // Set i to the adjusted position for attribute cleanup
                    i = fieldLineIndex;
                    
                    // IMPROVED: Use single loop with same logic as scanAttributeLinesAfterField
                    // Keep removing lines at position i (which now has the next line after field)
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Starting attribute cleanup at index ${i}, endSearch=${endSearch}, lines.length=${lines.length}`);
                    while (i < lines.length && i < endSearch) {
                        const nextLine = lines[i];
                        const nextTrim = nextLine.trim();
                        
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`  Checking line ${i}: "${nextTrim}"`);
                        
                        // Check for comments (same logic as parser)
                        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') || 
                                         nextTrim.startsWith('A*') || 
                                         nextTrim.startsWith('*') || 
                                         nextTrim.startsWith('-');
                        
                        if (isComment) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing comment line: ${nextTrim.substring(0, 60)}...`);
                            lines.splice(i, 1);
                            removedCount++;
                            endSearch--;
                            continue; // Don't increment i, keep checking same position
                        }
                        
                        // Stop on blank lines
                        if (nextTrim === '' || nextTrim === 'A') {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: blank line`);
                            break;
                        }
                        
                        // If it doesn't start with 'A', stop
                        if (!nextTrim.startsWith('A')) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: doesn't start with A`);
                            break;
                        }
                        
                        // Check if line has a field/constant/record definition
                        const hasConstant = nextTrim.match(/\d+\s+\d+'/);
                        const isRecordDef = nextTrim.match(/^A\s+R\s+\w+/);
                        
                        // If there's a record definition or constant, stop
                        if (isRecordDef || hasConstant) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: found record def or constant`);
                            break;
                        }                        
                        
                        // CRITICAL: Check if this line has row/col coordinates in columns 38-43 (indices 37-42)
                        // If it does, it's a NEW FIELD and we must stop
                        // Example: "A                                 19 30DATE" has "19 30" starting around index 37
                        const coordinateArea = nextLine.length > 39 ? nextLine.substring(39).trim() : '';
                        const hasCoordinates = /^\d{1,2}\s\d{1,2}/.test(coordinateArea) || /^\d{1,2}\s\d\D/.test(coordinateArea);
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Coordinates check (raw substring 37+): "${coordinateArea.substring(0, 10)}", hasCoordinates=${hasCoordinates}`);
                        if (hasCoordinates) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: found new field with coordinates: "${coordinateArea.substring(0, 10)}"`);
                            break;
                        }
                        
                        // Check for content at column 44+ (attributes, unknown keywords)
                        const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
                        
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   contentAfter43: "${contentAfter43}", length: ${contentAfter43.length}`);
                        
                        if (contentAfter43.length > 0) {
                            // This line has something in the attribute area - remove it
                            // Could be: COLOR(WHT), DSPATR(RI), OVERLAY, KEEP, etc.
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing attribute/keyword line: ${nextTrim.substring(0, 60)}...`);
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
                              _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: next line indicates new field with coordinates: "${lookaheadCoordinatesArea.substring(0, 10)}"`);
                              break;
                            } else {
                               _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Removing indicator-only line: ${nextTrim.substring(0, 60)}...`);
                               lines.splice(i, 1);
                               removedCount++;
                               endSearch--;    
                               continue;
                            }
                        }                                                      
                    }
                        // If we get here, it's something we don't recognize, stop
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   Stopping: unrecognized line type`);
                        break;
                    }
                    
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Removed field ${field.name} and ${removedCount - 1} associated line(s)`);
                    break;
                }
            }
        }
        
        currentDocument = lines.join('\n');
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Document updated after removal');
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
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Looking for field to update:', searchField.name, 'type:', searchField.type, 'in record:', targetRecord);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('New DDS line will be:', newDdsLine);
        
        // Find the target record boundaries first
        let recordStartLine = -1;
        let recordEndLine = lines.length;
        
        if (targetRecord) {
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                // Check if this is the start of our record (exact match, not just includes)
                // Match: "     A          R SUBFILE" but not "     A          R PANTALLA  SFLCTL(SUBFILE)"
                const recordMatch = line.match(/^\s*A\s+R\s+(\w+)/);
                if (recordMatch && recordMatch[1] === targetRecord) {
                    recordStartLine = i;
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Found record start at line', i + 1);
                    // Continue to find the end
                }
                // Check if we found a different record after finding ours
                if (recordStartLine >= 0 && i > recordStartLine && line.match(/^\s*A\s+R\s+\w+/)) {
                    recordEndLine = i;
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Found record end at line', i);
                    break;
                }
            }
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Searching within record boundaries: lines ${recordStartLine + 1} to ${recordEndLine}`);
        
        // UNIFIED APPROACH: Use findFieldBlockInDds for ALL field types (variables, constants, keywords)
        // This eliminates ~150 lines of duplicated detection logic
        const fieldBlock = findFieldBlockInDds(searchField, recordStartLine, recordEndLine);
        
        if (fieldBlock) {
            const fieldTypeLabel = searchField.type === 'constant' ? 'constant' : 
                                  (searchField.type === 'keyword' || searchField.isKeyword) ? 'keyword' : 'field';
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found ${fieldTypeLabel} at line ${fieldBlock.startLine + 1}, block ends at line ${fieldBlock.endLine + 1}`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`${fieldTypeLabel} block contains ${fieldBlock.count} line(s)`);
            
            // Preserve only comments and UNKNOWN keywords (e.g., OVERLAY, KEEP) after the field
            const blockLines = lines.slice(fieldBlock.startLine, fieldBlock.endLine + 1);
            const preservedExtras = [];

            blockLines.forEach((line, idx) => {
                // SKIP INDEX 0: that's the original field declaration that will be regenerated
                if (idx === 0) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping blockLines[0] (original field declaration at line ${fieldBlock.startLine + 1})`);
                    return;
                }

                const globalIndex = fieldBlock.startLine + idx;
                const trimmed = line.trim();
                const contentAfter43 = line.length > 43 ? line.substring(43).trim() : '';

                // For constants: do NOT preserve continuation lines
                if (searchField.type === 'constant') {
                    const isContinuationLine = trimmed.startsWith('A') && trimmed.includes("'") && !trimmed.match(/\d+\s+\d+'/);
                    if (isContinuationLine) {
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Skipping constant continuation line ${globalIndex + 1}`);
                        return;
                    }
                }

                // Always keep comments
                const isComment = trimmed.startsWith('A*') || trimmed.startsWith('*');
                if (isComment) {
                    preservedExtras.push(line);
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Preserving comment line ${globalIndex + 1}`);
                    return;
                }

                // Unknown keywords: keep them. Known attributes (COLOR, DSPATR, EDTCDE, etc.) are regenerated
                if (contentAfter43.length > 0) {
                    const isKnown = _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex ? _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex.test(contentAfter43) : /^(DSPATR|COLOR|CHECK|DFTVAL|EDTCDE|EDTWRD|COMP|RANGE|VALUES|TEXT|COLHDG|CHGINPDFT|MSGID|SFLMSG|DFT|CMP|REFFLD)\s*\(/.test(contentAfter43);
                    if (!isKnown) {
                        preservedExtras.push(line);
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Preserving unknown keyword line ${globalIndex + 1}: "${contentAfter43}"`);
                    }
                }
            });

            // New block: regenerated field lines + preserved extras
            const linesToInsert = newDdsLine.split('\n').filter(l => l.length > 0);
            const finalBlock = [...linesToInsert, ...preservedExtras];
            lines.splice(fieldBlock.startLine, fieldBlock.count, ...finalBlock);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Updated ${fieldTypeLabel}: replaced ${fieldBlock.count} lines with ${finalBlock.length} lines (${preservedExtras.length} preserved extras)`);
            
            foundLine = true;
        }
        
        if (!foundLine) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error('Could not find field/constant to update:', field.name);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Available lines in document:');
            lines.forEach((line, i) => {
                if (line.trim() && !line.trim().startsWith('A*')) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`  ${i + 1}: ${line}`);
                }
            });
            return;
        }
        
        currentDocument = lines.join('\n');
        updateDocumentInEditor();
    }
    
    // Helper function to update document in editor
    function updateDocumentInEditor() {
        return (0,_modules_ui_updateDocumentInEditor_js__WEBPACK_IMPORTED_MODULE_72__.updateDocumentInEditor)({
            currentRecord,
            currentDocument,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
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
        return (0,_modules_ui_generateDdsLineWithIndicators_js__WEBPACK_IMPORTED_MODULE_79__.generateDdsLineWithIndicatorsUI)({
            keyword,
            indicatorsOrGroups,
            IndicatorUtils: _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils
        });
    }
    
    // Helper: Apply indicator changes from indicatorConfigurations Map back to field object
    // This ensures that any edits made through the IBM i modal are reflected in DDS generation
    function applyIndicatorChangesToField(field) {
        return (0,_modules_ui_applyIndicatorChangesToField_js__WEBPACK_IMPORTED_MODULE_80__.applyIndicatorChangesToFieldUI)({
            field,
            indicatorConfigurations,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Helper: Generate DSPATR lines for a field
    function generateFieldDspatrLines(field) {
        return (0,_modules_ui_generateFieldDspatrLines_js__WEBPACK_IMPORTED_MODULE_75__.generateFieldDspatrLinesUI)({
            field,
            DSPATR_ATTRIBUTE_MAP,
            applyIndicatorChangesToField,
            generateDdsLineWithIndicators,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Helper: Generate COLOR lines for a field
    function generateFieldColorLines(field) {
        return (0,_modules_ui_generateFieldColorLines_js__WEBPACK_IMPORTED_MODULE_76__.generateFieldColorLinesUI)({
            field,
            applyIndicatorChangesToField,
            generateDdsLineWithIndicators,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }

    // Helper: Generate CHECK keyword lines for a field
    function generateFieldCheckLines(field) {
        return (0,_modules_ui_generateFieldCheckLines_js__WEBPACK_IMPORTED_MODULE_77__.generateFieldCheckLinesUI)({
            field,
            CHECK_CHAR_CODES: _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.CHECK_CHAR_CODES,
            CHECK_NUMERIC_CODES: _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.CHECK_NUMERIC_CODES,
            generateDdsLineWithIndicators,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }

    // Helper: Generate DFTVAL keyword lines for a field
    function generateFieldDftvalLines(field) {
        return (0,_modules_ui_generateFieldDftvalLines_js__WEBPACK_IMPORTED_MODULE_78__.generateFieldDftvalLinesUI)({
            field,
            generateDdsLineWithIndicators,
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger
        });
    }
    
    // Helper: Generate constant field lines with continuation support AND indicators
    function generateConstantFieldLines(field) {
        return (0,_modules_ui_generateConstantFieldLines_js__WEBPACK_IMPORTED_MODULE_74__.generateConstantFieldLinesUI)({
            field,
            IndicatorUtils: _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils
        });
    }
    
    // Helper: Build type and usage specification for variable fields
    function buildVariableTypeAndUsage(field) {
        return (0,_modules_ui_buildVariableTypeAndUsage_js__WEBPACK_IMPORTED_MODULE_73__.buildVariableTypeAndUsageUI)({
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
                            const chunkIndPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(chunk);
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
                            const chunkIndPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(chunk);
                            const chunkFirstIsNegative = chunk[0]?.not;
                            const chunkPrefixSpaces = chunkFirstIsNegative ? ' ' : '  ';
                            fieldIndicatorLines.push(`     A${chunkPrefixSpaces}${chunkIndPart}`);
                        }
                        
                        // Last chunk (3 or fewer) goes on keyword line
                        const lastChunkStart = (numChunks - 1) * 3;
                        const lastChunk = allIndicators.slice(lastChunkStart);
                        const indPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(lastChunk);
                        const firstIsNegative = lastChunk[0]?.not;
                        const prefixSpaces = firstIsNegative ? ' ' : '  ';
                        const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                        indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
                    } else if (allIndicators.length > 0) {
                        // 3 or fewer: all go on keyword line
                        const indPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(allIndicators);
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
            const keywordLine = `     A${indicatorPrefix}${spacingAfterIndicators}${rowStr}${rowColSeparator}${colStr}${field.name}`;
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
                        const chunkIndPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(chunk);
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
                        const chunkIndPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(chunk);
                        const chunkFirstIsNegative = chunk[0]?.not;
                        const chunkPrefixSpaces = chunkFirstIsNegative ? ' ' : '  ';
                        fieldIndicatorLines.push(`     A${chunkPrefixSpaces}${chunkIndPart}`);
                    }
                    
                    // Last chunk (3 or fewer) goes on field line
                    const lastChunkStart = (numChunks - 1) * 3;
                    const lastChunk = allIndicators.slice(lastChunkStart);
                    const indPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(lastChunk);
                    const firstIsNegative = lastChunk[0]?.not;
                    const prefixSpaces = firstIsNegative ? ' ' : '  ';
                    const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                    indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
                } else if (allIndicators.length > 0) {
                    // 3 or fewer: all go on field line
                    const indPart = _modules_utils_indicatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.IndicatorUtils.formatForDds(allIndicators);
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
        const dftvalLines = generateFieldDftvalLines(field);
        
        // Build main line with indicators
        const mainLine = `     A${indicatorPrefix}${fieldNamePadded} ${typePartPadded} ${rowStr}${rowColSeparator}${colStr}${attributes}`;
        
        // Combine: field indicator lines BEFORE main + main + DSPATR + CHECK + DFTVAL + COLOR
        const fieldIndicatorLinesStr = fieldIndicatorLines.length > 0 ? fieldIndicatorLines.join('\n') + '\n' : '';
        const attrLinesStr = attrLines.length > 0 ? '\n' + attrLines.join('\n') : '';
        const checkLinesStr = checkLines.length > 0 ? '\n' + checkLines.join('\n') : '';
        const dftvalLinesStr = dftvalLines.length > 0 ? '\n' + dftvalLines.join('\n') : '';
        const colorLinesStr = colorLines.length > 0 ? '\n' + colorLines.join('\n') : '';

        const result = fieldIndicatorLinesStr + mainLine + attrLinesStr + checkLinesStr + dftvalLinesStr + colorLinesStr;
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Generated DDS: name="${field.name}" padded="${fieldNamePadded}" type="${typeAndUsage}" padded="${typePartPadded}"`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Full line(s): "${result}"`);
        
        return result;
    }
    
    // Utility functions
    function generateId() {
        return (0,_modules_ui_generateId_js__WEBPACK_IMPORTED_MODULE_52__.generateId)(_modules_utils_idGenerator_js__WEBPACK_IMPORTED_MODULE_4__.IdGenerator);
    }
    
    function getDefaultLength(type) {
        return (0,_modules_ui_getDefaultLength_js__WEBPACK_IMPORTED_MODULE_53__.getDefaultLength)(type);
    }

    // lee/parsea el DDS (texto -> objetos field) para renderizar en Designer/Preview.
    // función principal que parsea (lee/analiza) el contenido DDS y extrae todos los campos para la vista de Designer.
    // Renderiza cada campo usando renderField o renderWindowField
    // Si el record actual tiene un companion record (SFL↔SFLCTL), también parsea los campos del companion.
    // Aplica repetición visual según SFLPAG. 
    function parseDspfFields(content) {
        fields = []; // Reset fields array
        const lines = content.split('\n');
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse('Parsing DSPF content for record:', currentRecord, 'total lines:', lines.length);
        
        if (!currentRecord) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn('No current record specified, parsing all fields');
        }
        
        let inTargetRecord = false;
        let currentRecordName = null;
        let windowDimensions = null;
        
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
			if (trimmedLine.match(/^A\s+R\s+\w+/)) {
				const match = trimmedLine.match(/^A\s+R\s+(\w+)/);
				if (match) {
					currentRecordName = match[1];
					// Don't auto-change currentRecord during normal parsing
					// Only set it if it's truly uninitialized (first load)
					// This prevents the cursor from jumping when editing in source view
					
					// Check if this is our target record
					inTargetRecord = (currentRecord === currentRecordName);
					_modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found record: ${currentRecordName}, target: ${inTargetRecord}, looking for: ${currentRecord}`);
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
                const hasFieldNameInLine = /\b[A-Z][A-Z0-9_]{2,}\s+(?:\d+[A-Z]?|L|T|Z)\b/i.test(trimmedLine);
                const hasAttributeKeyword = (
                    trimmedLine.includes('DSPATR(') ||
                    trimmedLine.includes('COLOR(') ||
                    trimmedLine.includes('CHECK(') ||
                    trimmedLine.includes('VALUES(') ||
                    trimmedLine.includes('EDTCDE(') ||
                    trimmedLine.includes('DFTVAL(')
                );
                const isAttributeOnlyLine = !hasFieldNameInLine && hasAttributeKeyword;
                
                const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                const isFieldLine = line.length > 6 && line[5] === 'A' && 
                    (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) &&
                    !isKeywordOnlyLine && !isAttributeOnlyLine &&
                    !trimmedLine.includes('WINDOW('); // Exclude WINDOW dimension lines
                
                // Only parse fields that belong to the target record
                if (isFieldLine && inTargetRecord) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Line ${index + 1} (${currentRecordName}): ${line}`);
                    
                    // Check if this is a multi-line constant (ends with '-' or '+' before end, allowing trailing spaces)
                    let fullLine = line;
                    if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Multi-line constant detected at line ${index + 1}`);
                        
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
                    
                    const field = parseFieldLineForDesigner(fullLine);
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
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`${field.type} ${field.name}: Inline indicators are OR (from AO line), created separate group`);
                                } else {
                                    // Inline indicators from 'A' line - join the last group or create new one
                                    if (groups.length > 0) {
                                        groups[groups.length - 1].indicators.push(...field._inlineIndicators);
                                    } else {
                                        groups.push({ indicators: field._inlineIndicators });
                                    }
                                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`${field.type} ${field.name}: Inline indicators are AND, merged with last group`);
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
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`${field.type} ${field.name}: Found ${groups.length} field indicator group(s), isOr=${hasOrLogic || groups.length > 1}`);
                        }
                        
                        scanAttributeLinesAfterField({
                            lines,
                            startIndex: index,
                            field,
                            contextLabel: 'DESIGNER',
                            includeChecks: true,
                            includeDftval: true,
                            preserveOriginalSpacing: true,
                            attributeRegex: _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex
                        });
                        
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Parsed field: ${field.name} (${field.type}) at ${field.row},${field.col} for record ${currentRecordName}`);
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Final colorIndicators for ${field.name}:`, field.colorIndicators);
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Final attributeIndicators for ${field.name}:`, field.attributeIndicators);
                        fields.push(field);
                    } else {
                        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`Failed to parse line: ${line}`);
                    }
                } else if (line.length > 6 && line[5] === 'A' && trimmedLine.length > 2 && !isKeywordOnlyLine && !isAttributeOnlyLine) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn(`Skipped potential field line ${index + 1}: ${line}`);
                }
            }
        });
        
        // Check if current record is part of a subfile (SFL/SFLCTL) relationship
        const subfileRel = getSubfileRelationship(currentRecord);
        if (subfileRel && subfileRel.companionRecord) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Parsing companion record: ${subfileRel.companionRecord}`);
            
            // Parse fields from companion record
            let inCompanionRecord = false;
            let companionRecordName = null;
            
            lines.forEach((line, index) => {
                const trimmedLine = line.trim();
                
                // Skip comment lines and empty lines
                if (!trimmedLine || trimmedLine.startsWith('A*')) {
                    return;
                }
                
                // Check for record definition start
                if (trimmedLine.match(/^A\s+R\s+\w+/)) {
                    const match = trimmedLine.match(/^A\s+R\s+(\w+)/);
                    if (match) {
                        companionRecordName = match[1];
                        inCompanionRecord = (subfileRel.companionRecord === companionRecordName);
                        if (inCompanionRecord) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found companion record: ${companionRecordName}`);
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
                    
                    const hasFieldNameInLine = /\b[A-Z][A-Z0-9_]{2,}\s+(?:\d+[A-Z]?|L|T|Z)\b/i.test(trimmedLine);
                    const hasAttributeKeyword = (
                        trimmedLine.includes('DSPATR(') ||
                        trimmedLine.includes('COLOR(') ||
                        trimmedLine.includes('CHECK(') ||
                        trimmedLine.includes('VALUES(') ||
                        trimmedLine.includes('EDTCDE(')
                    );
                    const isAttributeOnlyLine = !hasFieldNameInLine && hasAttributeKeyword;
                    
                    const hasCompactFixedCoordinates = line.length > 44 && /^[ 0-9]{2}[ 0-9]{3}/.test(line.substring(39, 44));
                    const isFieldLine = trimmedLine.startsWith('A ') &&
                        (trimmedLine.includes("'") || /\d+\s+\d+/.test(trimmedLine) || /\d{4,5}(DATE|TIME|SYSNAME|USER)\b/.test(trimmedLine) || hasCompactFixedCoordinates) &&
                        !isKeywordOnlyLine && !isAttributeOnlyLine &&
                        !trimmedLine.includes('WINDOW(');
                    
                    if (isFieldLine) {
                        // Check for multi-line constant (ends with '-' or '+' before quote)
                        let fullLine = line;
                        if (line.includes("'") && line.match(/'[^']*[-+]\s*$/)) {
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Designer: Multi-line constant in companion record detected at line ${index + 1}`);
                            
                            // Use shared function to process continuation lines
                            const result = processMultiLineContinuation({
                                initialLine: line,
                                getNextLine: (idx) => idx < lines.length ? lines[idx] : null,
                                startIndex: index + 1,
                                context: 'DESIGNER-COMPANION'
                            });
                            
                            fullLine = result.fullLine;
                        }
                        
                        const field = parseFieldLineForDesigner(fullLine);
                        if (field) {
                            field.isBackgroundRecord = true;  // Mark as companion/background record
                            field.recordName = companionRecordName;
                            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Parsed companion field: ${field.name} (${field.type}) at ${field.row},${field.col}`);
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Designer: Using ${currentDisplaySize} WINDOW dimensions from record ${currentRecord}: ${selectedWindow.height}x${selectedWindow.width} at (${selectedWindow.row},${selectedWindow.col})`);
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Designer: SFL ${currentRecord}: Using SFLCTL ${subfileRelationship.sflctlRecord} WINDOW dimensions: ${windowDimensions.height}x${windowDimensions.width} at (${windowDimensions.row},${windowDimensions.col})`);
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Designer: Using declared window dimensions: ${windowDimensions.height}x${windowDimensions.width}`);
                
                const win = windowDimensions;
                // WINDOW coordinates are absolute screen positions
                const winPos = _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.toPixels(win.row, win.col);
                const winTop = winPos.top;
                const winLeft = winPos.left;
                const winHeight = _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.getHeightInPixels(win.height);
                // Width includes content + 4 columns for borders and padding (2 left + 2 right)
                const winWidth = _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates.getWidthInPixels(win.width + 4);
                
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
                (0,_modules_ui_windowResize_js__WEBPACK_IMPORTED_MODULE_19__.setupWindowResize)({
                    windowFrame,
                    originalDimensions: windowDimensions,
                    Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
                    ScreenCoordinates: _modules_utils_screenCoordinates_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCoordinates,
                    getCurrentDisplaySize: () => currentDisplaySize,
                    getCurrentZoom: () => currentZoom,
                    updateWindowDimensions
                });
                
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.window(`Added window frame in Designer at ${win.row},${win.col} size ${win.height}x${win.width}`);
            }
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.ui(`Rendering ${fields.length} fields:`, fields.map(f => `${f.name}(${f.row},${f.col})`));
            
            // Check if this is a SFL or SFLCTL record to determine repetition count
            const subfileRelationship = getSubfileRelationship(currentRecord);
            const sflpagRepeat = subfileRelationship ? getSflpagValue(subfileRelationship.sflctlRecord) : 1;
            
            if (sflpagRepeat > 1) {
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.stats(`Subfile detected: Repeating SFL fields ${sflpagRepeat} times (SFLPAG from ${subfileRelationship.sflctlRecord})`);
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
                            row: field.row + repeat,
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error('Fields container not found for rendering');
        }
    }
    
    
    // Update WINDOW dimensions in DDS code
    function updateWindowDimensions(original, newRow, newCol, newHeight, newWidth) {
        const lines = currentDocument.split('\n');
        let updated = false;
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Searching for WINDOW in record: ${currentRecord}`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Display size: ${currentDisplaySize}`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Original dimensions: WINDOW(${original.row} ${original.col} ${original.height} ${original.width})`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`New dimensions: WINDOW(${newRow} ${newCol} ${newHeight} ${newWidth})`);
        
        // First, find the record definition line with strict matching
        // Record definition format: "     A          R RECORDNAME" (after column 5)
        let recordLineIndex = -1;
        const recordRegex = new RegExp(`^\\s*A\\s+R\\s+${currentRecord}\\s*(\\s|$)`);
        
        for (let i = 0; i < lines.length; i++) {
            if (recordRegex.test(lines[i])) {
                recordLineIndex = i;
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found record definition '${currentRecord}' at line ${i}: ${lines[i].trim()}`);
                break;
            }
        }
        
        if (recordLineIndex === -1) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`Record ${currentRecord} not found`);
            return;
        }
        
        // Search for WINDOW keyword with matching display size (*DS3 or *DS4)
        // Look for lines with both WINDOW and the appropriate *DS marker
        // IMPORTANT: Only search AFTER the record definition and BEFORE the next record definition
        const displayMarker = currentDisplaySize === 'DS3' ? '*DS3' : '*DS4';
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Looking for ${displayMarker} WINDOW after line ${recordLineIndex}...`);
        
        const windowRegex = /WINDOW\(\s*\d+\s+\d+\s+\d+\s+\d+\s*\)/;
        let nextRecordLineIndex = lines.length; // Default: search until end
        
        // Find the next record definition to limit search scope
        const nextRecordRegex = /^\s*A\s+R\s+\w+/;
        for (let i = recordLineIndex + 1; i < lines.length; i++) {
            if (nextRecordRegex.test(lines[i])) {
                nextRecordLineIndex = i;
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Next record found at line ${i}, limiting search to lines ${recordLineIndex}-${i}`);
                break;
            }
        }
        
        // First try to find WINDOW on the record line itself
        if (windowRegex.test(lines[recordLineIndex])) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found WINDOW on record line ${recordLineIndex}: ${lines[recordLineIndex].trim()}`);
            
            const newPattern = `WINDOW(${newRow} ${newCol} ${newHeight} ${newWidth})`;
            const oldLine = lines[recordLineIndex];
            lines[recordLineIndex] = lines[recordLineIndex].replace(windowRegex, newPattern);
            updated = true;
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Updated line ${recordLineIndex}:`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   OLD: ${oldLine.trim()}`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   NEW: ${lines[recordLineIndex].trim()}`);
        } else {
            // Search in following lines for WINDOW with matching display size marker
            // IMPORTANT: Only search within the current record (before next record definition)
            for (let i = recordLineIndex + 1; i < nextRecordLineIndex; i++) {
                const line = lines[i];
                
                // Check if this line has the WINDOW keyword and matches our display size
                if (windowRegex.test(line) && line.includes(displayMarker)) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found ${displayMarker} WINDOW at line ${i}: ${line.trim()}`);
                    
                    const newPattern = `WINDOW(${newRow} ${newCol} ${newHeight} ${newWidth})`;
                    const oldLine = line;
                    lines[i] = line.replace(windowRegex, newPattern);
                    updated = true;
                    
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`Updated line ${i}:`);
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   OLD: ${oldLine.trim()}`);
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds(`   NEW: ${lines[i].trim()}`);
                    break;
                }
            }
        }
        
        if (updated) {
            currentDocument = lines.join('\n');
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.dds('Sending update message to VS Code...');
            // Save the updated document
            vscode.postMessage({
                type: 'update',
                content: currentDocument,
                currentRecord: currentRecord
            });
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.success('Update message sent');
        } else {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error('WINDOW line not found or not updated');
        }
    }
    
    // Llamada por parseDspfFields. Extrae nombre, tipo, posición, etc. 
    // Para cada campo encontrado llama a scanAttributeLinesAfterField para obtener
    // atributos (COLOR,DSPATR,CHECK,DFTVAL) e indicadores de las líneas siguientes; y lo
    // agrega al array fields[]
    function parseFieldLineForDesigner(line) {
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
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.key(`Found keyword: ${keywordName} at ${row},${col}`);
            
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Found ${inlineIndicators.length} inline indicators for keyword ${keywordName}`);
            }
            
            const fieldObj = {
                id: generateId(),
                type: 'keyword',
                name: keywordName,
                row: row,
                col: col,
                dataType: 'keyword',
                isKeyword: true,
                length: null,
                indicators: { groups: [], isOr: false } // Will be populated by backward scan + inline merge
            };
            
            // Store inline indicators if found (will be merged with backward scan)
            if (inlineIndicators.length > 0) {
                fieldObj._inlineIndicators = inlineIndicators;
                fieldObj._inlineIsOr = keywordHasOrPrefix;
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Stored ${inlineIndicators.length} inline indicators for keyword ${keywordName}, isOr=${keywordHasOrPrefix}`);
            }
            
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`[DESIGNER PARSE] Input line: "${line}"`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`[DESIGNER PARSE] Input line length: ${line.length}`);
            const match = constContentAfter18.match(/(\d+)\s+(\d+)'([^']*)/); // Search in content after col 18
            const compactMatch = constContentAfter18.match(/^(\d{1,2})(\d{3})'([^']*)/);
            if (match || compactMatch) {
                const positionMatch = match || compactMatch;
                const row = parseInt(positionMatch[1]);
                const col = parseInt(positionMatch[2]);
                let text = positionMatch[3];
                
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`[DESIGNER PARSE] Full match[0]: "${positionMatch[0]}"`);
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`[DESIGNER PARSE] Matched text (match[3]): "${text}"`);
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`[DESIGNER PARSE] Matched text length: ${text.length}, first 20 chars: "${text.substring(0, 20)}", last 20 chars: "${text.slice(-20)}"`);
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Parsed constant in Designer at (${row},${col}), value length: ${text.length}, value: "${text}"`);
                
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Found ${constInlineIndicators.length} inline indicators for constant at (${row},${col})`);
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Stored ${constInlineIndicators.length} inline indicators for constant ${constantName}, isOr=${constHasOrPrefix}`);
                }
                
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
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Parsing content (hasOrPrefix=${varHasOrPrefix}): "${content}"`);
        
        // Split by whitespace and filter empty strings
        let parts = content.split(/\s+/).filter(p => p.length > 0);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Parts:`, parts);
        
        if (parts.length < 4) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn(`Not enough parts: ${parts.length}`);
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Found ${indicatorsFound.length} field-level indicators: ${indicatorsFound.join(', ')}`);
        }
        
        // Now parse the field starting from partIndex
        const fieldName = parts[partIndex];
        
        // Validate field name using FieldNameValidator (should be alphanumeric with underscores, no special chars like *)
        if (!_modules_utils_fieldNameValidator_js__WEBPACK_IMPORTED_MODULE_5__.FieldNameValidator.isValid(fieldName, { mustStartWithLetter: false, allowEmpty: false })) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`Invalid field name: "${fieldName}"`);
            return null;
        }
        
        const typeSpec = parts[partIndex + 1];
        
        // Parse usage and decimals using helper (adjust index by partIndex)
        const usageInfo = parseUsageAndDecimals(parts, partIndex + 2);
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Parsing field: typeSpec="${typeSpec}" hasDecimals=${usageInfo.hasDecimals}`);
        
        // Parse type specification using helper (pass hasDecimals for proper type detection)
        const typeInfo = parseDdsTypeSpecification(typeSpec, usageInfo.hasDecimals);
        if (!typeInfo) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`Invalid type spec: "${typeSpec}"`);
            return null;
        }
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.stats(`Mapped typeChar="${typeInfo.typeChar}" hasDecimals=${usageInfo.hasDecimals} to dataType="${typeInfo.dataType}"`);
        
        // Extract row and col using helper (adjust index by partIndex for indicators)
        let positionInfo = extractRowColFromParts(parts, usageInfo.nextIndex);
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Extracted compact fixed coordinates row=${parsedRow}, col=${parsedCol}`);
                }
            }
        }

        if (!positionInfo) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error(`Missing essentials`);
            return null;
        }
        
        // Extract float precision using helper
        const precision = extractFloatPrecision(line, typeInfo.dataType);
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Extracted: name="${fieldName}" type="${typeSpec}" decimals="${usageInfo.decimals}" usage="${usageInfo.usage}" row="${positionInfo.row}" col="${positionInfo.col}" precision="${precision}"`);
        
        // Map usage character to internal usage and field type for compatibility
        // O = Output, I = Input, B = Both, M = Message, P = Program-to-System
        let fieldType = 'output';
        if (usageInfo.usage === 'I') {fieldType = 'input';}
        else if (usageInfo.usage === 'B') {fieldType = 'input';}
        else if (usageInfo.usage === 'O') {fieldType = 'output';}

        // Normalize unused/legacy usages (e.g., Hidden) to Output for now
        const normalizedUsage = usageInfo.usage === 'H' ? 'O' : (usageInfo.usage || 'O');
        
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Parsed: ${fieldName} (${typeInfo.dataType}) at ${positionInfo.row},${positionInfo.col} length=${typeInfo.length}`);
        
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Stored ${parsedIndicators.length} inline indicators for field ${fieldName}, isOr=${varHasOrPrefix}`);
        }
        
        // Extract COLOR if present in the line
        const colorMatch = line.match(/COLOR\((\w+)\)/);
        if (colorMatch) {
            fieldObj.color = colorMatch[1];
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found inline color ${fieldObj.color} for field ${fieldName}`);
        }
        
        // Extract DSPATR attributes if present in the line
        const attrResult = extractAttributes(line, line);
        if (attrResult.attrs && Object.keys(attrResult.attrs).length > 0) {
            fieldObj.attributes = attrResult.attrs;
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found inline DSPATR attributes for field ${fieldName}:`, attrResult.attrs);
        }

        // Extract CHECK codes inline (no indicators in single-line extraction)
        const checkMatch = line.match(/CHECK\(([^)]+)\)/);
        if (checkMatch) {
            const codes = checkMatch[1].trim().split(/\s+/);
            if (!fieldObj.checkOptions) { fieldObj.checkOptions = {}; }
            codes.forEach(code => {
                fieldObj.checkOptions[code] = true;
            });
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.parse(`Found inline CHECK options for field ${fieldName}:`, codes);
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Extracted shift="${fieldObj.shift}" from typeSpec="${typeSpec}"`);
        }
        
        return fieldObj;
    }
    

    // Handle messages from the extension
    window.addEventListener('message', event => {
        const message = event.data;
        
        switch (message.type) {
            case 'documentContent':
                currentDocument = message.content;
                currentRecord = message.currentRecord || null;
                applyDisplaySizeSettingsFromDocument();
                
                // Update the record title in the toolbar
                (0,_modules_ui_navigation_js__WEBPACK_IMPORTED_MODULE_18__.updateRecordTitle)({
                    Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
                    getCurrentRecord: () => currentRecord
                });
                
                // Update records list if provided
                if (message.records) {
                    allRecords = message.records;
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Received records list:', allRecords.map(r => r.name));
                    (0,_modules_ui_navigation_js__WEBPACK_IMPORTED_MODULE_18__.updateNavigationButtons)({
                        getCurrentRecord: () => currentRecord,
                        getAllRecords: () => allRecords
                    });
                }
                
                // Check if we need to preserve/restore a specific view
                const viewToRestore = message.preserveView || null;
                
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Message received:', { 
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
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Document is read-only:', isReadOnly);
                    // Only update UI if not navigating (navigating will restore view later)
                    if (!viewToRestore) {
                        updateReadOnlyMode();
                    }
                } else {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn('isReadOnly is undefined in message');
                }
                
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Received document content for record:', currentRecord);
                
                // Parse fields with current record filter to maintain view consistency
                // This will automatically re-render the designer view (clearing and redrawing all fields)
                parseDspfFields(message.content);
                
                // Restore the view if navigation requested it
                if (viewToRestore) {
                    _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('Restoring view after navigation:', viewToRestore);
                    switchToView(viewToRestore);
                } else {
                    // Update other views if they're active
                    const activeView = document.querySelector('.view.active');
                    if (activeView && activeView.id === 'preview-view') {
                        updatePreviewView();
                    } else if (activeView && activeView.id === 'source-view') {
                        (0,_modules_ui_sourceView_js__WEBPACK_IMPORTED_MODULE_20__.updateSourceView)({
                            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
                            vscode,
                            getCurrentDocument: () => currentDocument,
                            setCurrentDocument: (value) => { currentDocument = value; },
                            getCurrentRecord: () => currentRecord,
                            parseDspfFields
                        });
                    }
                    // Note: Designer view is already updated by parseDspfFields() which re-renders all fields
                }
                
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.success('Document content updated, fields parsed for record:', currentRecord, 'count:', fields.length);
                break;
            
            case 'saveSuccess':
                // Document changed - no notification needed
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.success('Document changed successfully');
                break;
            
            case 'saveError':
                const errorMsg = message.error || 'Unknown error occurred while saving';
                showNotification('❌ Save failed: ' + errorMsg, 'error');
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.error('Save failed:', errorMsg);
                break;
        }
    });
    
    // Helper function to show notifications
    function showNotification(message, type = 'info') {
        return (0,_modules_ui_showNotification_js__WEBPACK_IMPORTED_MODULE_71__.showNotification)({
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
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] openIBMiModal called - type: ${type}, key: ${key}, label: ${label}`);
        createIBMiStyleModal();
        
        currentIBMiTarget = { type, key };
        const configKey = `${type}:${key}`;
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] configKey: ${configKey}`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] indicatorConfigurations.has(configKey): ${indicatorConfigurations.has(configKey)}`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] selectedField exists: ${!!selectedField}`);
        
        // Update label
        document.getElementById('ibmi-target-label').textContent = label;
        
        // Load existing indicators - ALWAYS load from field data first
        ibmiIndicatorGroups = [];
        
        if (selectedField) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] Loading from selectedField`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] selectedField.type: ${selectedField.type}`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] selectedField.name: ${selectedField.name}`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] selectedField.indicators:`, selectedField.indicators);
            
            // Load from field data
            const fieldData = type === 'color' ? selectedField.colorIndicators?.[key] :
                            type === 'attr' ? selectedField.attributeIndicators?.[key] :
                            type === 'dftval' ? selectedField.dftvalIndicators :
                            type === 'check' ? selectedField.checkIndicators?.[key] :
                            type === 'field-indicators' ? selectedField.indicators : null;
            
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] Loading indicators for ${type}:${key}`);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] fieldData:`, fieldData);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] fieldData.groups:`, fieldData?.groups);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] fieldData.isOr:`, fieldData?.isOr);
            
            if (fieldData && fieldData.groups) {
                // Load all groups (works for both OR and AND formats)
                ibmiIndicatorGroups = fieldData.groups.map(g => [...g.indicators]);
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] Loaded ${ibmiIndicatorGroups.length} groups:`, ibmiIndicatorGroups);
            } else {
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.warn(`[MODAL] No groups found in fieldData`);
            }
        } else if (indicatorConfigurations.has(configKey)) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`🚀 [MODAL] Loading from indicatorConfigurations (no selectedField)`);
            const configData = indicatorConfigurations.get(configKey);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] configData:`, configData);
            
            // For subfile keywords (sfldsp, sfldspctl) or when no selectedField
            if (configData && configData.groups) {
                // Load groups structure (works for both OR and AND formats)
                ibmiIndicatorGroups = configData.groups.map(g => [...g.indicators]);
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[MODAL] Loaded ${ibmiIndicatorGroups.length} groups from Map:`, ibmiIndicatorGroups);
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
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updating field ${selectedField.name} ${type}:${key}`);
            
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updated colorIndicators[${key}]:`, selectedField.colorIndicators[key]);
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updated attributeIndicators[${key}]:`, selectedField.attributeIndicators[key]);
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updated dftvalIndicators:`, selectedField.dftvalIndicators);
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updated checkIndicators[${key}]:`, selectedField.checkIndicators[key]);
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
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updated field.indicators:`, selectedField.indicators);
            } else if (type === 'sfldsp' || type === 'sfldspctl') {
                // SFLDSP and SFLDSPCTL are subfile control keywords (no selectedField)
                // Store directly in indicatorConfigurations Map
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`[SAVE] Updating ${type} indicators`);
            }
            
            // Update the field in DDS immediately (if field exists)
            // NOTE: For field-level indicators, DON'T update DDS here - let applyFieldProperties handle it
            // so that the "Apply" button can detect changes properly
            if (type !== 'sfldsp' && type !== 'sfldspctl' && type !== 'field-indicators') {
                updateFieldInDds(selectedField);
                _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug('[SAVE] DDS updated');
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
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Opening indicator modal: type=${type}, key=${key}, label=${label}`);
        _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Selected field:`, selectedField);
        if (selectedField) {
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Field colorIndicators:`, selectedField.colorIndicators);
            _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(`Field attributeIndicators:`, selectedField.attributeIndicators);
        }
        
        // Use new IBM i style modal
        openIBMiModal(type, key, label);
    }
    
    // Setup indicator config buttons
    // configura los event listeners (los clics en los botones), pero NO actualiza el texto de los botones 
    // con los números de los indicadores.
    function setupIndicatorButtons() {
        return (0,_modules_ui_indicatorButtons_js__WEBPACK_IMPORTED_MODULE_27__.setupIndicatorButtons)({
            Logger: _modules_core_logger_js__WEBPACK_IMPORTED_MODULE_6__.Logger,
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

try {
    if (typeof window !== 'undefined' && window) {
        window.__TESTS = window.__TESTS || {};
        if (typeof removeFieldFromDds !== 'undefined') {window.__TESTS.removeFieldFromDds = removeFieldFromDds;}
        if (typeof processMultiLineContinuation !== 'undefined') {window.__TESTS.processMultiLineContinuation = processMultiLineContinuation;}
        if (typeof _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex !== 'undefined') {window.__TESTS.attributeContentRegex = _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex;}
        if (typeof _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.ATTRIBUTE_KEYWORDS_SET !== 'undefined') {window.__TESTS.ATTRIBUTE_KEYWORDS_SET = _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.ATTRIBUTE_KEYWORDS_SET;}
        window.__TESTS.setCurrentDocument = __setCurrentDocumentForTests;
        window.__TESTS.getCurrentDocument = __getCurrentDocumentForTests;
    }
} catch (err) {
    // ignore
}

if ( true && module.exports) {
    try {
        if (typeof removeFieldFromDds !== 'undefined') {module.exports.removeFieldFromDds = removeFieldFromDds;}
        if (typeof processMultiLineContinuation !== 'undefined') {module.exports.processMultiLineContinuation = processMultiLineContinuation;}
        if (typeof _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex !== 'undefined') {module.exports.attributeContentRegex = _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.attributeContentRegex;}
        if (typeof _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.ATTRIBUTE_KEYWORDS_SET !== 'undefined') {module.exports.ATTRIBUTE_KEYWORDS_SET = _modules_core_ddsConstants_js__WEBPACK_IMPORTED_MODULE_7__.ATTRIBUTE_KEYWORDS_SET;}
        module.exports.setCurrentDocument = __setCurrentDocumentForTests;
        module.exports.getCurrentDocument = __getCurrentDocumentForTests;
    } catch (err) {
        // Ignore - test exports are best-effort
    }
}
})();

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorUtils: () => (/* binding */ ColorUtils)
/* harmony export */ });
const ColorUtils = {
    IBM_COLORS: {
        'WHT': '#FFFFFF',
        'BLU': '#3B78FF',
        'RED': '#FF3B3B',
        'TRQ': '#00FFFF',
        'YLW': '#FFFF00',
        'GRN': '#00FF00',
        'PNK': '#FF00FF'
    },

    getColor(field, defaultColor = '#00ff00') {
        if (field && field.color && this.IBM_COLORS[field.color]) {
            return this.IBM_COLORS[field.color];
        }

        if (field && field.colorIndicators) {
            const colorCodes = Object.keys(field.colorIndicators);
            if (colorCodes.length > 0) {
                const firstColorCode = colorCodes[0];
                if (this.IBM_COLORS[firstColorCode]) {
                    return this.IBM_COLORS[firstColorCode];
                }
            }
        }

        return defaultColor;
    },

    getColorStyle(field, defaultColor = '#00ff00') {
        const color = this.getColor(field, defaultColor);
        return `color: ${color};`;
    },

    getDefaultForFieldType(fieldType) {
        const defaults = {
            'constant': '#00ff00',
            'input': '#ffff00',
            'output': '#00ff00',
            'keyword': '#00ffff',
            'text': '#00ff00',
            'number': '#ffff00'
        };
        return defaults[fieldType] || '#00ff00';
    },

    isValidColorCode(colorCode) {
        return colorCode && this.IBM_COLORS.hasOwnProperty(colorCode);
    },

    getAllColorCodes() {
        return Object.keys(this.IBM_COLORS);
    },

    getColorName(colorCode) {
        const names = {
            'WHT': 'White',
            'BLU': 'Blue',
            'RED': 'Red',
            'TRQ': 'Turquoise',
            'YLW': 'Yellow',
            'GRN': 'Green',
            'PNK': 'Pink'
        };
        return names[colorCode] || colorCode;
    }
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenCoordinates: () => (/* binding */ ScreenCoordinates)
/* harmony export */ });
const ScreenCoordinates = {
    CHAR_HEIGHT: 20,
    CHAR_WIDTH: 8,

    SCREEN_SIZES: {
        'DS3': { rows: 24, cols: 80 },
        'DS4': { rows: 27, cols: 132 }
    },

    toPixels(row, col, offset = { row: 0, col: 0 }) {
        return {
            top: (row - 1 - offset.row) * this.CHAR_HEIGHT,
            left: (col - 1 - offset.col) * this.CHAR_WIDTH
        };
    },

    fromPixels(top, left, offset = { row: 0, col: 0 }) {
        return {
            row: Math.floor(top / this.CHAR_HEIGHT) + 1 + offset.row,
            col: Math.floor(left / this.CHAR_WIDTH) + 1 + offset.col
        };
    },

    fromClientPoint(clientX, clientY, rect, zoom = 1, offset = { row: 0, col: 0 }) {
        const left = (clientX - rect.left) / zoom;
        const top = (clientY - rect.top) / zoom;
        return this.fromPixels(top, left, offset);
    },

    sizeFromPixels(height, width, zoom = 1) {
        return {
            rows: Math.round((height / zoom) / this.CHAR_HEIGHT),
            cols: Math.round((width / zoom) / this.CHAR_WIDTH)
        };
    },

    getScreenDimensions(displaySize) {
        return this.SCREEN_SIZES[displaySize] || this.SCREEN_SIZES.DS3;
    },

    isValidPosition(row, col, displaySize) {
        const dims = this.getScreenDimensions(displaySize);
        return row >= 1 && row <= dims.rows &&
               col >= 1 && col <= dims.cols;
    },

    getWidthInPixels(length) {
        return length * this.CHAR_WIDTH;
    },

    getHeightInPixels(rows) {
        return rows * this.CHAR_HEIGHT;
    },

    createWindowOffset(windowDimensions) {
        if (!windowDimensions) {
            return { row: 0, col: 0 };
        }
        return {
            row: windowDimensions.row - 1,
            col: windowDimensions.col - 1
        };
    },

    calculateFieldWrapping(field, displaySize = 'DS3') {
        const dims = this.getScreenDimensions(displaySize);
        const maxCols = dims.cols;

        if (field.type === 'constant' || field.type === 'keyword' || field.isKeyword) {
            return [{ row: field.row, col: field.col, length: field.length }];
        }

        const isNumeric = ['numeric', 'zoned', 'packed', 'float', 'binary', 'double'].includes(field.dataType);
        if (isNumeric) {
            return [{ row: field.row, col: field.col, length: field.length }];
        }

        const startCol = field.col;
        const fieldLength = field.length || 10;
        const segments = [];

        let remainingLength = fieldLength;
        let currentRow = field.row;
        let currentCol = startCol;

        while (remainingLength > 0) {
            const availableSpace = maxCols - currentCol + 1;
            const segmentLength = Math.min(remainingLength, availableSpace);

            segments.push({
                row: currentRow,
                col: currentCol,
                length: segmentLength
            });

            remainingLength -= segmentLength;

            if (remainingLength > 0) {
                currentRow++;
                currentCol = 1;
            }
        }

        return segments;
    }
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndicatorUtils: () => (/* binding */ IndicatorUtils)
/* harmony export */ });
const IndicatorUtils = {
    _logParse(message, ...args) {
        const logger = globalThis.Logger;
        if (logger && typeof logger.parse === 'function') {
            logger.parse(message, ...args);
        }
    },

    parse(indicatorStr) {
        if (!indicatorStr || typeof indicatorStr !== 'string') {
            return [];
        }

        const tokens = indicatorStr.trim().split(/\s+/);
        const indicators = [];

        tokens.forEach(token => {
            const matches = token.match(/N?\d{1,2}/g);
            if (matches) {
                matches.forEach(ind => {
                    const isNegated = ind.startsWith('N');
                    const number = isNegated ? ind.substring(1) : ind;
                    indicators.push({
                        number: number.padStart(2, '0'),
                        not: isNegated
                    });
                });
            }
        });

        return indicators;
    },

    formatForDds(indicators) {
        if (!indicators || indicators.length === 0) {
            return '';
        }

        const tokens = indicators.map(ind => ind.not ? ('N' + String(ind.number).padStart(2, '0')) : String(ind.number).padStart(2, '0'));
        let result = '';
        tokens.forEach(token => {
            if (result === '') {
                result = token;
            } else {
                result += token.startsWith('N') ? token : ' ' + token;
            }
        });
        return result;
    },

    formatForDisplay(indicators) {
        if (!indicators || indicators.length === 0) {
            return '';
        }

        return indicators.map(ind =>
            ind.not ? `NOT ${ind.number}` : ind.number
        ).join(', ');
    },

    isValid(indicatorStr) {
        if (!indicatorStr) {
            return true;
        }
        return /^(N?\d{1,2}(\s+N?\d{1,2})*)$/.test(indicatorStr.trim());
    },

    create(number, not = false) {
        return {
            number: String(number).padStart(2, '0'),
            not: Boolean(not)
        };
    },

    extractFromDdsLine(fullLine, debugContext = '') {
        if (!fullLine || fullLine.length <= 6 || fullLine[5] !== 'A') {
            return [];
        }

        const indicatorArea = fullLine.substring(6, 44);
        const indicatorStr = indicatorArea.trim();

        if (debugContext && indicatorStr) {
            this._logParse(`${debugContext} indicator area: "${indicatorArea}" from line: "${fullLine}"`);
        }

        if (!indicatorStr) {
            return [];
        }

        const indicators = this.parse(indicatorStr);

        if (debugContext && indicators.length > 0) {
            this._logParse(`${debugContext} found indicators:`, indicators);
        }

        return indicators;
    },

    extractWithOrSupport(lines, startIndex, keyword, debugContext = '') {
        const result = {
            groups: [],
            isOr: false
        };

        let currentIndex = startIndex;
        let foundKeyword = false;

        while (currentIndex < lines.length && !foundKeyword) {
            const line = lines[currentIndex];

            if (!line || line.length <= 6 || line[5] !== 'A') {
                break;
            }

            const isOrLine = line[6] === 'O';
            const hasKeyword = keyword ? line.includes(keyword) : false;

            const indicators = this.extractFromDdsLine(line, debugContext);

            if (indicators.length > 0) {
                result.groups.push({ indicators: indicators });
                if (isOrLine) {
                    result.isOr = true;
                }

                if (debugContext) {
                    this._logParse(`${debugContext} line ${currentIndex + 1} (${isOrLine ? 'OR' : 'AND'}): found ${indicators.length} indicators`);
                }
            }

            if (hasKeyword) {
                foundKeyword = true;
            }

            currentIndex++;
        }

        if (result.groups.length === 1 && !result.isOr) {
            return { groups: result.groups, isOr: false };
        }

        return result;
    },

    formatGroupsForDds(groups) {
        if (!groups || groups.length === 0) {
            return [''];
        }

        const lines = [];
        groups.forEach((group, index) => {
            const formatted = this.formatForDds(group.indicators);
            const prefix = index === 0 ? '' : 'O';
            lines.push(prefix + formatted);
        });

        return lines;
    },

    flattenGroups(groups) {
        if (!groups || groups.length === 0) {
            return [];
        }

        const allIndicators = [];
        groups.forEach(group => {
            if (group.indicators) {
                allIndicators.push(...group.indicators);
            }
        });
        return allIndicators;
    }
};


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplaySizeUtils: () => (/* binding */ DisplaySizeUtils)
/* harmony export */ });
const DisplaySizeUtils = {
    getAvailableDisplaySizes(documentContent) {
        const lines = documentContent.split('\n');
        let hasDS3 = false;
        let hasDS4 = false;
        let inDspsizBlock = false;
        let currentBlock = '';

        const processDspsizBlock = (blockText) => {
            const normalizedBlock = (blockText || '').toUpperCase();
            const blockHasDS3 = normalizedBlock.includes('*DS3');
            const blockHasDS4 = normalizedBlock.includes('*DS4');

            if (blockHasDS3) {
                hasDS3 = true;
            }
            if (blockHasDS4) {
                hasDS4 = true;
            }

            if (!blockHasDS3 && !blockHasDS4) {
                hasDS3 = true;
            }
        };

        for (let line of lines) {
            const trimmed = line.trim();

            if (!inDspsizBlock && trimmed.includes('DSPSIZ(')) {
                inDspsizBlock = true;
                currentBlock = trimmed.substring(trimmed.indexOf('DSPSIZ('));

                if (trimmed.includes(')')) {
                    processDspsizBlock(currentBlock);
                    inDspsizBlock = false;
                    currentBlock = '';
                }

                continue;
            }

            if (inDspsizBlock) {
                currentBlock += ` ${trimmed}`;

                if (trimmed.includes(')')) {
                    processDspsizBlock(currentBlock);
                    inDspsizBlock = false;
                    currentBlock = '';
                }
            }
        }

        if (inDspsizBlock && currentBlock) {
            processDspsizBlock(currentBlock);
        }

        let singleSize = null;
        if (hasDS3 && !hasDS4) {
            singleSize = 'DS3';
        } else if (hasDS4 && !hasDS3) {
            singleSize = 'DS4';
        }

        return { hasDS3, hasDS4, singleSize };
    }
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdGenerator: () => (/* binding */ IdGenerator)
/* harmony export */ });
const IdGenerator = {
    _counters: {},

    generateFieldId() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        return `field_${timestamp}_${random}`;
    },

    generateUniqueName(prefix, existingNames = []) {
        if (!this._counters[prefix]) {
            this._counters[prefix] = 1;
        }

        let name;
        let attempts = 0;
        const maxAttempts = 1000;

        do {
            name = prefix + this._counters[prefix];
            this._counters[prefix]++;
            attempts++;

            if (attempts > maxAttempts) {
                name = prefix + Date.now();
                break;
            }
        } while (existingNames.includes(name));

        return name;
    },

    resetCounter(prefix) {
        if (this._counters[prefix]) {
            this._counters[prefix] = 1;
        }
    },

    resetAllCounters() {
        this._counters = {};
    },

    getCounter(prefix) {
        return this._counters[prefix] || 0;
    },

    generateUniqueRecordName(prefix = 'REC', existingNames = []) {
        return this.generateUniqueName(prefix, existingNames);
    },

    generateUniqueId(prefix = 'id') {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        return `${prefix}-${timestamp}-${random}`;
    }
};


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldNameValidator: () => (/* binding */ FieldNameValidator)
/* harmony export */ });
const FieldNameValidator = {
    MAX_LENGTH: 10,

    isValid(name, options = {}) {
        const {
            allowEmpty = false,
            mustStartWithLetter = true,
            maxLength = this.MAX_LENGTH
        } = options;

        if (!name || name.length === 0) {
            return allowEmpty;
        }

        if (name.length > maxLength) {
            return false;
        }

        if (mustStartWithLetter) {
            return /^[A-Z][A-Z0-9_]*$/i.test(name);
        } else {
            return /^[A-Z0-9_]+$/i.test(name);
        }
    },

    validate(name, options = {}) {
        if (!this.isValid(name, options)) {
            const { mustStartWithLetter = true, maxLength = this.MAX_LENGTH } = options;

            if (!name || name.length === 0) {
                throw new Error('Field name cannot be empty');
            }

            if (name.length > maxLength) {
                throw new Error(`Field name cannot exceed ${maxLength} characters`);
            }

            if (mustStartWithLetter) {
                throw new Error('Field name must start with a letter and contain only letters, numbers, and underscores');
            } else {
                throw new Error('Field name must contain only letters, numbers, and underscores');
            }
        }

        return name;
    },

    sanitize(name, fallback = 'FIELD') {
        if (!name || name.length === 0) {
            return fallback;
        }

        let sanitized = name.toUpperCase();
        sanitized = sanitized.replace(/[^A-Z0-9_]/g, '');

        if (!/^[A-Z]/.test(sanitized)) {
            sanitized = 'F' + sanitized;
        }

        if (sanitized.length > this.MAX_LENGTH) {
            sanitized = sanitized.substring(0, this.MAX_LENGTH);
        }

        if (!this.isValid(sanitized)) {
            return fallback;
        }

        return sanitized;
    },

    isReservedKeyword(name) {
        const reserved = ['DATE', 'TIME', 'SYSNAME', 'USER', 'PAGE'];
        return reserved.includes(name.toUpperCase());
    }
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
const Logger = {
    _enabled: true,

    parse(message, ...args) {
        if (this._enabled) {console.log('🔍', message, ...args);}
    },

    success(message, ...args) {
        if (this._enabled) {console.log('✅', message, ...args);}
    },

    error(message, ...args) {
        if (this._enabled) {console.error('❌', message, ...args);}
    },

    warn(message, ...args) {
        if (this._enabled) {console.warn('⚠️', message, ...args);}
    },

    stats(message, ...args) {
        if (this._enabled) {console.log('📊', message, ...args);}
    },

    ui(message, ...args) {
        if (this._enabled) {console.log('🎨', message, ...args);}
    },

    dds(message, ...args) {
        if (this._enabled) {console.log('📝', message, ...args);}
    },

    debug(message, ...args) {
        if (this._enabled) {console.log('🐛', message, ...args);}
    },

    key(message, ...args) {
        if (this._enabled) {console.log('🔑', message, ...args);}
    },

    window(message, ...args) {
        if (this._enabled) {console.log('🪟', message, ...args);}
    },

    enable() {
        this._enabled = true;
        console.log('✅ Logging enabled');
    },

    disable() {
        console.log('⛔ Logging disabled');
        this._enabled = false;
    },

    isEnabled() {
        return this._enabled;
    },

    group(title, callback) {
        if (this._enabled) {
            console.group('📦 ' + title);
            callback();
            console.groupEnd();
        }
    }
};

if (!globalThis.Logger) {
    globalThis.Logger = Logger;
}




/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ATTRIBUTE_KEYWORDS: () => (/* binding */ ATTRIBUTE_KEYWORDS),
/* harmony export */   ATTRIBUTE_KEYWORDS_SET: () => (/* binding */ ATTRIBUTE_KEYWORDS_SET),
/* harmony export */   CHECK_CHAR_CODES: () => (/* binding */ CHECK_CHAR_CODES),
/* harmony export */   CHECK_NUMERIC_CODES: () => (/* binding */ CHECK_NUMERIC_CODES),
/* harmony export */   attributeContentRegex: () => (/* binding */ attributeContentRegex)
/* harmony export */ });
const ATTRIBUTE_KEYWORDS = ['COLOR', 'DSPATR', 'VALUES', 'CHECK', 'PSHBTNCHC', 'PSHBTNFLD', 'DFTVAL', 'EDTCDE', 'EDTWRD', 'RANGE'];
const ATTRIBUTE_KEYWORDS_SET = new Set(ATTRIBUTE_KEYWORDS);
const attributeContentRegex = new RegExp(`\\b(?:${ATTRIBUTE_KEYWORDS.join('|')})\\(`);

const CHECK_CHAR_CODES = ['ME', 'ER', 'MF', 'FE', 'RB', 'RZ', 'RL', 'LC'];
const CHECK_NUMERIC_CODES = ['ME', 'ER', 'MF', 'FE', 'RB', 'RZ', 'RL'];


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calibrateCharMetrics: () => (/* binding */ calibrateCharMetrics)
/* harmony export */ });
async function calibrateCharMetrics(screenCoordinates, logger) {
    try {
        if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
        }
    } catch (err) {
        if (logger && typeof logger.warn === 'function') {
            logger.warn('Font readiness check failed, using immediate metrics', err);
        }
    }

    await new Promise(requestAnimationFrame);
    const probe = document.createElement('span');
    const sampleText = 'WWWWWWWWWW';
    probe.textContent = sampleText;
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.whiteSpace = 'pre';
    probe.style.fontFamily = "'3270', 'IBM Plex Mono', 'Consolas', 'Courier New', monospace";
    probe.style.fontSize = '15px';
    probe.style.lineHeight = '20px';
    document.body.appendChild(probe);
    const rect = probe.getBoundingClientRect();
    document.body.removeChild(probe);

    const width = rect.width / sampleText.length;
    const height = rect.height;
    if (width && height) {
        screenCoordinates.CHAR_WIDTH = width;
        screenCoordinates.CHAR_HEIGHT = height;
        if (logger && typeof logger.ui === 'function') {
            logger.ui(`Calibrated char metrics -> width: ${width.toFixed(2)}px, height: ${height.toFixed(2)}px`);
        }
        return { width, height };
    }

    if (logger && typeof logger.warn === 'function') {
        logger.warn('Could not calibrate char metrics, using defaults');
    }
    return null;
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupRulers: () => (/* binding */ setupRulers)
/* harmony export */ });
function setupRulers(currentDisplaySize, screenCoordinates, logger) {
    const horizontalRuler = document.getElementById('horizontal-ruler');
    const verticalRuler = document.getElementById('vertical-ruler');

    if (!horizontalRuler || !verticalRuler) {
        if (logger && typeof logger.warn === 'function') {
            logger.warn('Rulers not found, retrying in 100ms...');
        }
        setTimeout(() => setupRulers(currentDisplaySize, screenCoordinates, logger), 100);
        return;
    }

    if (logger && typeof logger.ui === 'function') {
        logger.ui(`Setting up rulers for ${currentDisplaySize}...`);
    }

    horizontalRuler.innerHTML = '';
    verticalRuler.innerHTML = '';

    const maxCols = currentDisplaySize === 'DS3' ? 80 : 132;
    const maxRows = currentDisplaySize === 'DS3' ? 24 : 27;

    for (let col = 1; col <= maxCols; col++) {
        const leftPos = screenCoordinates.toPixels(1, col).left;

        const tick = document.createElement('div');
        tick.className = 'ruler-tick';
        tick.style.left = leftPos + 'px';
        horizontalRuler.appendChild(tick);

        if (col % 5 === 0 || col === 1) {
            const marker = document.createElement('div');
            marker.className = 'ruler-marker';
            marker.textContent = col.toString();
            marker.style.left = leftPos + 'px';
            horizontalRuler.appendChild(marker);
        }
    }

    for (let row = 1; row <= maxRows; row++) {
        const { top: topPos } = screenCoordinates.toPixels(row, 1);

        const tick = document.createElement('div');
        tick.className = 'ruler-tick';
        tick.style.top = topPos + 'px';
        verticalRuler.appendChild(tick);

        if (row % 5 === 0 || row === 1) {
            const marker = document.createElement('div');
            marker.className = 'ruler-marker';
            marker.textContent = row.toString();
            marker.style.top = topPos + 'px';
            verticalRuler.appendChild(marker);
        }
    }

    if (logger && typeof logger.success === 'function') {
        logger.success(`Rulers setup complete for ${currentDisplaySize}!`);
    }
}


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupCanvasInteraction: () => (/* binding */ setupCanvasInteraction)
/* harmony export */ });
function setupCanvasInteraction(deselectAllFields, showScreenProperties) {
    const canvas = document.getElementById('fields-container');

    canvas.addEventListener('click', function(e) {
        if (e.target === this) {
            deselectAllFields();
            showScreenProperties();
        }
    });
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupToolbarButtons: () => (/* binding */ setupToolbarButtons)
/* harmony export */ });
function setupToolbarButtons({
    Logger,
    vscode,
    saveDocument,
    navigateToPreviousRecord,
    navigateToNextRecord,
    setViewZoom,
    getCurrentZoom,
    switchToView
}) {
    document.getElementById('saveBtn').addEventListener('click', function() {
        Logger.ui('Save button clicked!');
        saveDocument();
    });

    // Setup back button (if it exists, for multi-record files)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            Logger.ui('Back button clicked');
            vscode.postMessage({ type: 'backToRecordList' });
        });
    }

    // Setup navigation buttons
    const prevRecordBtn = document.getElementById('prevRecordBtn');
    const nextRecordBtn = document.getElementById('nextRecordBtn');

    if (prevRecordBtn) {
        prevRecordBtn.addEventListener('click', function() {
            Logger.ui('Previous Record button clicked');
            navigateToPreviousRecord();
        });
    }

    if (nextRecordBtn) {
        nextRecordBtn.addEventListener('click', function() {
            Logger.ui('Next Record button clicked');
            navigateToNextRecord();
        });
    }

    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            setViewZoom(getCurrentZoom() - 0.05);
        });
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
            setViewZoom(getCurrentZoom() + 0.05);
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', function() {
            setViewZoom(1);
        });
    }

    // Setup tab buttons
    const designerTab = document.getElementById('designerTab');
    const previewTab = document.getElementById('previewTab');
    const sourceTab = document.getElementById('sourceTab');

    if (designerTab) {
        designerTab.addEventListener('click', function(e) {
            e.preventDefault();
            Logger.ui('Designer tab clicked');
            switchToView('designer');
        });
    } else {
        Logger.error('Designer tab not found');
    }

    if (previewTab) {
        previewTab.addEventListener('click', function(e) {
            e.preventDefault();
            Logger.ui('Preview tab clicked');
            switchToView('preview');
        });
    } else {
        Logger.error('Preview tab not found');
    }

    if (sourceTab) {
        sourceTab.addEventListener('click', function(e) {
            e.preventDefault();
            Logger.ui('Source tab clicked');
            switchToView('source');
        });
    } else {
        Logger.error('Source tab not found');
    }

    Logger.success('Toolbar buttons setup complete');
}


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupDisplaySizeSelector: () => (/* binding */ setupDisplaySizeSelector)
/* harmony export */ });
function setupDisplaySizeSelector({
    Logger,
    getCurrentDisplaySize,
    setCurrentDisplaySize,
    updateCanvasSize,
    setupRulers,
    parseDspfFields,
    getCurrentDocument,
    applyDefaultZoomForDisplaySize,
    updatePreviewView
}) {
    const designerRadioButtons = document.querySelectorAll('input[name="displaySize"]');
    designerRadioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            setCurrentDisplaySize(this.value);
            const currentDisplaySize = getCurrentDisplaySize();
            Logger.ui(`Designer display size changed to: ${currentDisplaySize}`);

            if (applyDefaultZoomForDisplaySize) {
                applyDefaultZoomForDisplaySize(currentDisplaySize);
            }

            updateCanvasSize(currentDisplaySize);
            setupRulers();

            parseDspfFields(getCurrentDocument());

            const previewView = document.getElementById('preview-view');
            if (previewView && previewView.classList.contains('active')) {
                updatePreviewView();
            }
        });
    });
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateCanvasSize: () => (/* binding */ updateCanvasSize)
/* harmony export */ });
function updateCanvasSize(displaySize, ScreenCoordinates, Logger) {
    const canvas = document.getElementById('fields-container');
    const screenWithRulers = document.getElementById('screen-with-rulers');
    const horizontalRuler = document.getElementById('horizontal-ruler');
    const verticalRuler = document.getElementById('vertical-ruler');

    if (!canvas || !screenWithRulers) {return;}

    const dims = ScreenCoordinates.getScreenDimensions(displaySize);
    const widthPx = ScreenCoordinates.getWidthInPixels(dims.cols);
    const heightPx = ScreenCoordinates.getHeightInPixels(dims.rows);
    if (canvas) {
        canvas.style.width = `${widthPx}px`;
        canvas.style.height = `${heightPx}px`;
    }
    if (horizontalRuler) {
        horizontalRuler.style.width = `${widthPx + 4}px`;
        horizontalRuler.style.backgroundSize = `${ScreenCoordinates.CHAR_WIDTH}px 100%`;
    }
    if (verticalRuler) {
        verticalRuler.style.height = `${heightPx + 4}px`;
        verticalRuler.style.backgroundSize = `100% ${ScreenCoordinates.CHAR_HEIGHT}px`;
    }
    if (screenWithRulers) {
        screenWithRulers.style.width = `${widthPx + 42}px`;
        screenWithRulers.style.height = `${heightPx + 42}px`;
    }

    Logger.ui(`Canvas resized for ${displaySize}`);
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupDragAndDrop: () => (/* binding */ setupDragAndDrop)
/* harmony export */ });
function setupDragAndDrop({
    Logger,
    ScreenCoordinates,
    getCurrentRecord,
    getCurrentDisplaySize,
    getCurrentZoom,
    getWindowDimensions,
    moveField,
    createField
}) {
    const toolItems = document.querySelectorAll('.tool-item');
    const canvas = document.getElementById('fields-container');

    if (!canvas) {
        Logger.error('Fields container not found, skipping drag and drop setup');
        return;
    }

    Logger.ui('Setting up drag and drop for', toolItems.length, 'tool items');

    toolItems.forEach((item, index) => {
        Logger.debug(`Setting up drag for item ${index}:`, item.dataset.type);

        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.dataset.type);
            e.dataTransfer.effectAllowed = 'copy';
            this.classList.add('dragging');
            Logger.debug('Drag started for:', this.dataset.type);
        });

        item.addEventListener('dragend', function() {
            this.classList.remove('dragging');
            Logger.debug('Drag ended for:', this.dataset.type);
        });
    });

    canvas.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        this.classList.add('drop-zone');
    });

    canvas.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.classList.add('drop-zone');
    });

    canvas.addEventListener('dragleave', function(e) {
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('drop-zone');
        }
    });

    canvas.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drop-zone');

        const data = e.dataTransfer.getData('text/plain');
        Logger.debug('Drop event triggered with data:', data);

        if (!data) {
            Logger.error('No data received in drop event');
            return;
        }

        const rect = this.getBoundingClientRect();
        const currentZoom = getCurrentZoom ? getCurrentZoom() : 1;

        const gridPosition = ScreenCoordinates
            ? ScreenCoordinates.fromClientPoint(e.clientX, e.clientY, rect, currentZoom)
            : {
                row: Math.max(1, Math.floor(((e.clientY - rect.top) / currentZoom) / 20) + 1),
                col: Math.max(1, Math.floor(((e.clientX - rect.left) / currentZoom) / 8) + 1)
            };

        const x = (e.clientX - rect.left) / currentZoom;
        const y = (e.clientY - rect.top) / currentZoom;

        let row = Math.max(1, gridPosition.row);
        let col = Math.max(1, gridPosition.col);

        const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
        const windowDimensions = currentRecord ? getWindowDimensions(currentRecord) : null;
        if (windowDimensions && windowDimensions.hasWindow) {
            const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
            const windowDim = currentDisplaySize === 'DS3' ? windowDimensions.ds3 : windowDimensions.ds4;
            if (windowDim) {
                const relRow = row - (windowDim.row - 1);
                const relCol = col - windowDim.col;

                if (relRow > 0 && relCol > 0) {
                    row = relRow;
                    col = relCol;
                    Logger.window(`🪟 [WINDOW] Converted absolute screen (${row + (windowDim.row - 1)}, ${col + windowDim.col}) to WINDOW-relative (${row}, ${col})`);
                }
            }
        }

        Logger.debug('Drop at pixel:', { x, y, currentZoom }, 'grid:', { row, col });

        try {
            const dropData = JSON.parse(data);
            if (dropData.type === 'existing-field') {
                Logger.debug('Moving existing field:', dropData.fieldId);
                moveField(dropData.fieldId, row, col);
            } else {
                createField(data, row, col);
            }
        } catch (e) {
            Logger.debug('Creating new field type:', data);
            createField(data, row, col);
        }
    });

    Logger.success('Drag and drop setup complete');
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupGridLines: () => (/* binding */ setupGridLines)
/* harmony export */ });
function setupGridLines({ Logger, setupRulers }) {
    const screenGrid = document.getElementById('screen-grid');
    if (screenGrid) {
        Logger.success('Grid lines setup complete');
    }
    setupRulers();
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupPreviewDisplaySizeListeners: () => (/* binding */ setupPreviewDisplaySizeListeners)
/* harmony export */ });
function setupPreviewDisplaySizeListeners({
    Logger,
    getCurrentDisplaySize,
    setCurrentDisplaySize,
    updateCanvasSize,
    setupRulers,
    parseDspfFields,
    getCurrentDocument,
    applyDefaultZoomForDisplaySize,
    updatePreviewView
}) {
    const previewRadioButtons = document.querySelectorAll('input[name="preview-display-size"]');
    previewRadioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const nextDisplaySize = this.value;
            setCurrentDisplaySize(nextDisplaySize);
            Logger.debug(`Preview display size changed to: ${nextDisplaySize}`);

            if (applyDefaultZoomForDisplaySize) {
                applyDefaultZoomForDisplaySize(nextDisplaySize);
            }

            const designerRadios = document.querySelectorAll('input[name="displaySize"]');
            designerRadios.forEach(dr => {
                dr.checked = dr.value === nextDisplaySize;
            });

            updateCanvasSize(nextDisplaySize);
            setupRulers();

            parseDspfFields(getCurrentDocument());
            updatePreviewView();
        });
    });
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupSourceSearch: () => (/* binding */ setupSourceSearch)
/* harmony export */ });
let searchMatches = [];
let currentMatchIndex = -1;
let searchSetupDone = false;
let hotkeySetupDone = false;

function setupSourceSearchHotkey() {
    if (hotkeySetupDone) {
        return;
    }
    hotkeySetupDone = true;

    document.addEventListener('keydown', function(e) {
        const isFindKey = e.key && e.key.toLowerCase() === 'f';
        if ((e.ctrlKey || e.metaKey) && (isFindKey || e.code === 'KeyF')) {
            const sourceView = document.getElementById('source-view');
            const searchBox = document.getElementById('source-search-box');
            if (sourceView && searchBox && sourceView.classList.contains('active')) {
                e.preventDefault();
                e.stopPropagation();
                searchBox.classList.add('visible');
                const searchInput = document.getElementById('source-search-input');
                if (searchInput) {
                    searchInput.focus();
                    searchInput.select();
                }
            }
        }
    }, true);
}

function setupSourceSearch({ Logger }) {
    setupSourceSearchHotkey();

    if (searchSetupDone) {
        return;
    }
    searchSetupDone = true;

    const sourceEditor = document.getElementById('source-editor');
    const searchBox = document.getElementById('source-search-box');
    const searchInput = document.getElementById('source-search-input');
    const searchPrevBtn = document.getElementById('search-prev-btn');
    const searchNextBtn = document.getElementById('search-next-btn');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const searchInfo = document.getElementById('search-info');
    const highlightsContent = document.getElementById('search-highlights-content');

    if (!sourceEditor || !searchBox || !searchInput || !searchPrevBtn || !searchNextBtn || !searchCloseBtn || !searchInfo || !highlightsContent) {
        Logger.warn('Source search elements not found, skipping setup');
        return;
    }

    sourceEditor.addEventListener('scroll', function() {
        highlightsContent.style.transform = `translate(${-sourceEditor.scrollLeft}px, ${-sourceEditor.scrollTop}px)`;
    });

    function renderHighlights() {
        const query = searchInput.value;
        if (!query || searchMatches.length === 0) {
            highlightsContent.innerHTML = '';
            return;
        }

        const text = sourceEditor.value;
        let html = '';
        let lastIndex = 0;

        searchMatches.forEach((matchIndex, i) => {
            html += escapeHtml(text.substring(lastIndex, matchIndex));

            const isCurrent = i === currentMatchIndex;
            const className = isCurrent ? 'search-highlight-current' : 'search-highlight';
            html += `<span class="${className}">${escapeHtml(text.substr(matchIndex, query.length))}</span>`;

            lastIndex = matchIndex + query.length;
        });

        html += escapeHtml(text.substring(lastIndex));
        highlightsContent.innerHTML = html;
        highlightsContent.style.transform = `translate(${-sourceEditor.scrollLeft}px, ${-sourceEditor.scrollTop}px)`;
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function performSearch() {
        const query = searchInput.value;
        if (!query) {
            searchMatches = [];
            currentMatchIndex = -1;
            searchInfo.textContent = '';
            renderHighlights();
            return;
        }

        const text = sourceEditor.value;
        searchMatches = [];
        const lowerQuery = query.toLowerCase();
        const lowerText = text.toLowerCase();
        let index = lowerText.indexOf(lowerQuery);

        while (index !== -1) {
            searchMatches.push(index);
            index = lowerText.indexOf(lowerQuery, index + 1);
        }

        if (searchMatches.length > 0) {
            currentMatchIndex = 0;
            highlightMatch();
            searchInfo.textContent = `${currentMatchIndex + 1} of ${searchMatches.length}`;
        } else {
            searchInfo.textContent = 'No results';
            currentMatchIndex = -1;
        }

        renderHighlights();
    }

    function highlightMatch() {
        if (currentMatchIndex >= 0 && currentMatchIndex < searchMatches.length) {
            const matchPos = searchMatches[currentMatchIndex];
            sourceEditor.focus();
            sourceEditor.setSelectionRange(matchPos, matchPos + searchInput.value.length);
            sourceEditor.scrollTop = Math.max(0, (matchPos / sourceEditor.value.length) * sourceEditor.scrollHeight - 200);
            searchInfo.textContent = `${currentMatchIndex + 1} of ${searchMatches.length}`;
            renderHighlights();
            setTimeout(() => searchInput.focus(), 0);
        }
    }

    searchInput.addEventListener('input', performSearch);
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (e.shiftKey) {
                searchPrevBtn.click();
            } else {
                searchNextBtn.click();
            }
        } else if (e.key === 'Escape') {
            searchCloseBtn.click();
        }
    });

    searchPrevBtn.addEventListener('click', function() {
        if (searchMatches.length > 0) {
            currentMatchIndex = (currentMatchIndex - 1 + searchMatches.length) % searchMatches.length;
            highlightMatch();
        }
    });

    searchNextBtn.addEventListener('click', function() {
        if (searchMatches.length > 0) {
            currentMatchIndex = (currentMatchIndex + 1) % searchMatches.length;
            highlightMatch();
        }
    });

    searchCloseBtn.addEventListener('click', function() {
        searchBox.classList.remove('visible');
        searchInput.value = '';
        searchMatches = [];
        currentMatchIndex = -1;
        searchInfo.textContent = '';
        renderHighlights();
        sourceEditor.focus();
    });

    Logger.debug('Source search setup complete');
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateNavigationButtons: () => (/* binding */ updateNavigationButtons),
/* harmony export */   updateRecordTitle: () => (/* binding */ updateRecordTitle)
/* harmony export */ });
function updateRecordTitle({ Logger, getCurrentRecord }) {
    const titleElement = document.querySelector('.toolbar-left h2');
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    if (titleElement && currentRecord) {
        titleElement.textContent = `DSPF Designer - ${currentRecord}`;
        Logger.debug(`Updated title to: DSPF Designer - ${currentRecord}`);
    }
}

function updateNavigationButtons({ getCurrentRecord, getAllRecords }) {
    const prevBtn = document.getElementById('prevRecordBtn');
    const nextBtn = document.getElementById('nextRecordBtn');
    const allRecords = getAllRecords ? getAllRecords() : null;
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

    if (!prevBtn || !nextBtn || !allRecords || allRecords.length === 0) {
        return;
    }

    const currentIndex = allRecords.findIndex(r => r.name === currentRecord);
    prevBtn.disabled = (currentIndex <= 0);
    nextBtn.disabled = (currentIndex >= allRecords.length - 1);
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupWindowResize: () => (/* binding */ setupWindowResize)
/* harmony export */ });
function setupWindowResize({
    windowFrame,
    originalDimensions,
    Logger,
    ScreenCoordinates,
    getCurrentDisplaySize,
    getCurrentZoom,
    updateWindowDimensions
}) {
    const handles = windowFrame.querySelectorAll('.window-resize-handle');

    handles.forEach(handle => {
        handle.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const corner = this.className.split(' ')[1];
            const startX = e.clientX;
            const startY = e.clientY;
            const startWidth = windowFrame.offsetWidth;
            const startHeight = windowFrame.offsetHeight;
            const startLeft = windowFrame.offsetLeft;
            const startTop = windowFrame.offsetTop;

            function onMouseMove(e) {
                const currentZoom = getCurrentZoom ? getCurrentZoom() : 1;
                const deltaX = (e.clientX - startX) / currentZoom;
                const deltaY = (e.clientY - startY) / currentZoom;

                let newWidth = startWidth;
                let newHeight = startHeight;
                let newLeft = startLeft;
                let newTop = startTop;

                if (corner.includes('e')) {
                    newWidth = Math.max(80, startWidth + deltaX);
                }
                if (corner.includes('w')) {
                    const widthChange = -deltaX;
                    newWidth = Math.max(80, startWidth + widthChange);
                    newLeft = startLeft - (newWidth - startWidth);
                }
                if (corner.includes('s')) {
                    newHeight = Math.max(40, startHeight + deltaY);
                }
                if (corner.includes('n')) {
                    const heightChange = -deltaY;
                    newHeight = Math.max(40, startHeight + heightChange);
                    newTop = startTop - (newHeight - startHeight);
                }

                windowFrame.style.width = `${newWidth}px`;
                windowFrame.style.height = `${newHeight}px`;
                windowFrame.style.left = `${newLeft}px`;
                windowFrame.style.top = `${newTop}px`;
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                const currentZoom = getCurrentZoom ? getCurrentZoom() : 1;
                const gridPosition = ScreenCoordinates
                    ? ScreenCoordinates.fromPixels(windowFrame.offsetTop, windowFrame.offsetLeft)
                    : {
                        row: Math.round(windowFrame.offsetTop / 20) + 1,
                        col: Math.round(windowFrame.offsetLeft / 8) + 1
                    };
                const gridSize = ScreenCoordinates
                    ? ScreenCoordinates.sizeFromPixels(windowFrame.offsetHeight, windowFrame.offsetWidth, 1)
                    : {
                        rows: Math.round(windowFrame.offsetHeight / 20),
                        cols: Math.round(windowFrame.offsetWidth / 8)
                    };

                let newRow = gridPosition.row;
                let newCol = gridPosition.col;
                let newHeight = gridSize.rows;
                let newWidth = gridSize.cols - 4;

                const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : 'DS3';
                const maxRows = currentDisplaySize === 'DS3' ? 24 : 27;
                const maxCols = currentDisplaySize === 'DS3' ? 80 : 132;

                newRow = Math.max(1, Math.min(newRow, maxRows));
                newCol = Math.max(1, Math.min(newCol, maxCols));
                newHeight = Math.max(1, Math.min(newHeight, maxRows - newRow + 1));
                newWidth = Math.max(1, Math.min(newWidth, maxCols - newCol + 1));

                Logger.window(`Window resized to: row=${newRow}, col=${newCol}, height=${newHeight}, width=${newWidth}, zoom=${currentZoom}`);
                Logger.debug(`Validation check - Display: ${currentDisplaySize}, Max rows: ${maxRows}, Max cols: ${maxCols}`);

                updateWindowDimensions(originalDimensions, newRow, newCol, newHeight, newWidth);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    });
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateSourceView: () => (/* binding */ updateSourceView)
/* harmony export */ });
let currentDeps = null;

function generateColumnRuler() {
    const rulerMain = document.querySelector('.ruler-main');
    if (!rulerMain) {
        return;
    }
    const rulerText = '        .....AAN01N02N03..Name++++++RLen++TDpBLinPosFunctions+++++++++++++++++++++++++++Comments+++++++++++';
    rulerMain.textContent = rulerText;
}

function updateLineNumbers(sourceEditor) {
    const lineNumbers = document.getElementById('source-line-numbers');
    if (!sourceEditor || !lineNumbers) {
        return;
    }

    const lines = sourceEditor.value.split('\n');
    const lineCount = lines.length;

    let numbersHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        numbersHTML += i + '\n';
    }

    lineNumbers.textContent = numbersHTML;
}

function syncLineNumbersScroll(event) {
    const sourceEditor = event.target;
    const lineNumbers = document.getElementById('source-line-numbers');
    const rulerContent = document.querySelector('.ruler-content');

    if (!sourceEditor || !lineNumbers) {
        return;
    }

    lineNumbers.scrollTop = sourceEditor.scrollTop;

    if (rulerContent) {
        rulerContent.scrollLeft = sourceEditor.scrollLeft;
    }
}

function handleSourceChange(event) {
    if (!currentDeps) {
        return;
    }

    const { Logger, vscode, setCurrentDocument, getCurrentRecord, parseDspfFields } = currentDeps;
    const updatedDocument = event.target.value;
    setCurrentDocument(updatedDocument);

    updateLineNumbers(event.target);

    vscode.postMessage({
        type: 'update',
        content: updatedDocument,
        currentRecord: getCurrentRecord()
    });

    parseDspfFields(updatedDocument);
    Logger.debug('Source editor changed, designer view updated');
}

function updateSourceView({ Logger, vscode, getCurrentDocument, setCurrentDocument, getCurrentRecord, parseDspfFields }) {
    const sourceEditor = document.getElementById('source-editor');
    if (!sourceEditor) {
        return;
    }

    currentDeps = {
        Logger,
        vscode,
        setCurrentDocument,
        getCurrentRecord,
        parseDspfFields
    };

    const currentDocument = getCurrentDocument();
    if (sourceEditor.value !== currentDocument) {
        const cursorStart = sourceEditor.selectionStart;
        const cursorEnd = sourceEditor.selectionEnd;
        const scrollTop = sourceEditor.scrollTop;

        sourceEditor.value = currentDocument;

        sourceEditor.setSelectionRange(cursorStart, cursorEnd);
        sourceEditor.scrollTop = scrollTop;
    }

    updateLineNumbers(sourceEditor);
    generateColumnRuler();

    sourceEditor.removeEventListener('input', handleSourceChange);
    sourceEditor.addEventListener('input', handleSourceChange);

    sourceEditor.removeEventListener('scroll', syncLineNumbersScroll);
    sourceEditor.addEventListener('scroll', syncLineNumbersScroll);
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveField: () => (/* binding */ moveField)
/* harmony export */ });
function moveField(options) {
    const {
        fieldId,
        newRow,
        newCol,
        Logger,
        fields,
        getCurrentRecord,
        setCurrentRecord,
        getCurrentDisplaySize,
        getWindowDimensions,
        renderField,
        renderWindowField,
        getSubfileRelationship,
        getSflpagValue,
        selectField,
        updateFieldInDds
    } = options;

    const field = fields.find(f => f.id === fieldId);
    if (!field) {
        Logger.error('Field not found for moving:', fieldId);
        return;
    }

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const oldRow = field.row;
    const oldCol = field.col;

    Logger.debug(`Moving field ${field.name} from (${oldRow},${oldCol}) to (${newRow},${newCol}) in record: ${currentRecord || 'ALL'}`);

    field.row = newRow;
    field.col = newCol;

    const oldElement = document.querySelector(`[data-field-id="${fieldId}"]`);
    if (oldElement) {
        oldElement.remove();
    }

    const copyPattern = `${fieldId}_repeat`;
    const allElements = document.querySelectorAll('[data-field-id]');
    let removedCopies = 0;

    allElements.forEach(el => {
        const elFieldId = el.getAttribute('data-field-id');
        if (elFieldId && elFieldId.includes(copyPattern)) {
            el.remove();
            removedCopies++;
        }
    });

    if (removedCopies > 0) {
        Logger.dds(`Removed ${removedCopies} visual copies during move`);
    }

    const winDimsForMove = currentRecord ? getWindowDimensions(currentRecord) : null;
    if (winDimsForMove && winDimsForMove.hasWindow) {
        const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
        const winDim = currentDisplaySize === 'DS3' ? winDimsForMove.ds3 : winDimsForMove.ds4;
        if (winDim) {
            renderWindowField(field, winDim);
        } else {
            renderField(field);
        }
    } else {
        renderField(field);
    }

    const subfileRel = currentRecord ? getSubfileRelationship(currentRecord) : null;
    if (subfileRel && subfileRel.sflRecord === currentRecord) {
        const sflpagValue = getSflpagValue(subfileRel.sflctlRecord);
        if (sflpagValue > 1) {
            Logger.dds(`Regenerating ${sflpagValue - 1} visual copies for field ${field.name} after move in SFL record`);
            for (let repeat = 1; repeat < sflpagValue; repeat++) {
                const visualCopy = {
                    ...field,
                    row: field.row + repeat,
                    isVisualCopy: true,
                    id: `${fieldId}_repeat${repeat}`
                };

                if (winDimsForMove && winDimsForMove.hasWindow) {
                    const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
                    const winDim = currentDisplaySize === 'DS3' ? winDimsForMove.ds3 : winDimsForMove.ds4;
                    if (winDim) {
                        renderWindowField(visualCopy, winDim);
                    } else {
                        renderField(visualCopy);
                    }
                } else {
                    renderField(visualCopy);
                }
            }
        }
    }

    selectField(field);

    const preservedRecord = currentRecord;
    updateFieldInDds(field, { ...field, row: oldRow, col: oldCol });

    if (preservedRecord && setCurrentRecord) {
        const currentRecordAfter = getCurrentRecord ? getCurrentRecord() : null;
        if (currentRecordAfter && preservedRecord !== currentRecordAfter) {
            Logger.debug('Restoring record context after move:', preservedRecord);
            setCurrentRecord(preservedRecord);
        }
    }

    Logger.success('Field moved and DDS updated, maintaining record filter:', getCurrentRecord ? getCurrentRecord() : currentRecord);
}


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyWindowDimensions: () => (/* binding */ applyWindowDimensions)
/* harmony export */ });
function applyWindowDimensions(options) {
    const {
        Logger,
        isReadOnly,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        updateDocumentInEditor,
        parseDspfFields
    } = options;

    if (isReadOnly) {
        Logger.warn('Cannot apply window dimensions - document is read-only');
        return;
    }

    Logger.window('Applying window dimensions changes');

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    if (!currentRecord) {
        Logger.warn('No current record selected for window update');
        return;
    }

    const windowTypeRef = document.getElementById('window-type-ref');
    const isReference = windowTypeRef && windowTypeRef.checked;

    const currentDocument = getCurrentDocument ? getCurrentDocument() : '';
    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    let windowLineIndex = -1;
    let ds3LineIndex = -1;
    let ds4LineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            break;
        }

        if (inTargetRecord && line.includes('WINDOW(')) {
            if (line.includes('*DS3')) {
                ds3LineIndex = i;
            } else if (line.includes('*DS4')) {
                ds4LineIndex = i;
            } else {
                windowLineIndex = i;
            }
        }
    }

    if (isReference) {
        const refNameInput = document.getElementById('window-reference-name');
        if (!refNameInput) {
            Logger.error('Reference name input not found');
            return;
        }

        const refName = refNameInput.value.trim().toUpperCase();
        if (!refName) {
            Logger.error('Reference name is required');
            alert('Please enter a window reference name (e.g., WIND1)');
            return;
        }

        const newWindowLine = `     A                                      WINDOW(${refName})`;

        if (ds3LineIndex !== -1) {
            lines[ds3LineIndex] = newWindowLine;
            if (ds4LineIndex !== -1 && ds4LineIndex > ds3LineIndex) {
                lines.splice(ds4LineIndex, 1);
            } else if (ds4LineIndex !== -1 && ds4LineIndex < ds3LineIndex) {
                lines.splice(ds4LineIndex, 1);
            }
            Logger.success(`Updated WINDOW to reference: ${refName}`);
        } else if (windowLineIndex !== -1) {
            lines[windowLineIndex] = newWindowLine;
            Logger.success(`Updated WINDOW to reference: ${refName}`);
        }
    } else {
        const ds3Row = document.getElementById('window-ds3-row');
        const ds3Col = document.getElementById('window-ds3-col');
        const ds3Height = document.getElementById('window-ds3-height');
        const ds3Width = document.getElementById('window-ds3-width');

        if (ds3Row && ds3Col && ds3Height && ds3Width) {
            const row = parseInt(ds3Row.value);
            const col = parseInt(ds3Col.value);
            const height = parseInt(ds3Height.value);
            const width = parseInt(ds3Width.value);

            if (ds3LineIndex !== -1) {
                lines[ds3LineIndex] = lines[ds3LineIndex].replace(/WINDOW\([^)]+\)/, `WINDOW(${row} ${col} ${height} ${width})`);
                Logger.success(`Updated DS3 WINDOW dimensions: (${row},${col}) ${height}x${width}`);
            } else if (windowLineIndex !== -1) {
                lines[windowLineIndex] = lines[windowLineIndex].replace(/WINDOW\([^)]+\)/, `WINDOW(${row} ${col} ${height} ${width})`);
                Logger.success(`Converted WINDOW from reference to coordinates: (${row},${col}) ${height}x${width}`);
            }
        }

        const ds4Row = document.getElementById('window-ds4-row');
        const ds4Col = document.getElementById('window-ds4-col');
        const ds4Height = document.getElementById('window-ds4-height');
        const ds4Width = document.getElementById('window-ds4-width');

        if (ds4LineIndex !== -1 && ds4Row && ds4Col && ds4Height && ds4Width) {
            const row = parseInt(ds4Row.value);
            const col = parseInt(ds4Col.value);
            const height = parseInt(ds4Height.value);
            const width = parseInt(ds4Width.value);

            lines[ds4LineIndex] = lines[ds4LineIndex].replace(/WINDOW\([^)]+\)/, `WINDOW(${row} ${col} ${height} ${width})`);
            Logger.success(`Updated DS4 WINDOW dimensions: (${row},${col}) ${height}x${width}`);
        }
    }

    const updatedDocument = lines.join('\n');
    if (setCurrentDocument) {
        setCurrentDocument(updatedDocument);
    }
    updateDocumentInEditor();

    parseDspfFields(updatedDocument);

    Logger.window('Window dimensions applied successfully');
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showScreenProperties: () => (/* binding */ showScreenProperties)
/* harmony export */ });
function showScreenProperties(options) {
    const {
        Logger,
        vscode,
        isReadOnly,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        getRecordType,
        IdGenerator,
        getWindowDimensions,
        setupPropertiesTabs,
        loadSubfileControl,
        applySubfileControl,
        loadFunctionKeys,
        createFunctionKeyRow,
        saveFunctionKeys,
        updateDocumentInEditor,
        generateDdsLineWithIndicators,
        indicatorConfigurations,
        DisplaySizeUtils,
        IndicatorUtils,
        scanIndicatorsBackward,
        setIndicatorButtonState,
        openIBMiModal,
        applyWindowDimensions,
        showScreenProperties: refreshScreenProperties
    } = options;

    const propertiesPanel = document.getElementById('field-properties');
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

    if (!currentRecord) {
        propertiesPanel.innerHTML = '<p>No screen selected</p>';
        return;
    }

    const recordType = getRecordType(currentRecord);
    const windowDimensions = getWindowDimensions(currentRecord);

    let windowDimensionsHtml = '';
    if (windowDimensions.hasWindow) {
        const isReference = windowDimensions.isReference || false;
        const referenceName = windowDimensions.referenceName || '';

        windowDimensionsHtml = `
                <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                <h4 style="margin: 12px 0 8px 0; color: var(--text-color); font-size: 14px;">Window</h4>
                
                <div style="margin-bottom: 16px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: var(--text-color);">Type</label>
                    <div style="display: flex; gap: 16px; margin-bottom: 12px;">
                        <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                            <input type="radio" name="window-type" id="window-type-coords" value="coordinates" ${!isReference ? 'checked' : ''} />
                            <span>Coordinates</span>
                        </label>
                        <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;">
                            <input type="radio" name="window-type" id="window-type-ref" value="reference" ${isReference ? 'checked' : ''} />
                            <span>Reference</span>
                        </label>
                    </div>
                </div>
                
                <div id="window-reference-section" style="display: ${isReference ? 'block' : 'none'}; margin-bottom: 16px;">
                    <div class="property-group" style="margin: 0;">
                        <label>Window Reference</label>
                        <input type="text" id="window-reference-name" value="${referenceName}" placeholder="e.g. WIND1" maxlength="10" style="padding: 6px 8px; text-transform: uppercase;" />
                    </div>
                    ${isReference && windowDimensions.ds3 ? `
                        <div style="margin-top: 8px; padding: 8px; background-color: rgba(0, 122, 204, 0.1); border-left: 3px solid #007ACC; font-size: 11px; color: var(--text-muted);">
                            <strong>Note:</strong> Resolved coordinates from ${referenceName}:<br/>
                            Row: ${windowDimensions.ds3.row}, Col: ${windowDimensions.ds3.col}, Height: ${windowDimensions.ds3.height}, Width: ${windowDimensions.ds3.width}
                        </div>
                    ` : ''}
                </div>
                
                <div id="window-coordinates-section" style="display: ${!isReference ? 'block' : 'none'};">
                    ${windowDimensions.ds3 ? `
                    <div style="margin-bottom: 12px;">
                        <label style="display: block; margin-bottom: 4px; font-weight: 600; color: #888;">*DS3 (24 x 80)</label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Row</label>
                                <input type="number" id="window-ds3-row" value="${windowDimensions.ds3.row}" min="1" max="24" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Column</label>
                                <input type="number" id="window-ds3-col" value="${windowDimensions.ds3.col}" min="1" max="80" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Height</label>
                                <input type="number" id="window-ds3-height" value="${windowDimensions.ds3.height}" min="1" max="24" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Width</label>
                                <input type="number" id="window-ds3-width" value="${windowDimensions.ds3.width}" min="1" max="80" style="padding: 4px 8px;" />
                            </div>
                        </div>
                    </div>
                    ` : ''}
                    
                    ${windowDimensions.ds4 ? `
                    <div style="margin-bottom: 12px;">
                        <label style="display: block; margin-bottom: 4px; font-weight: 600; color: #888;">*DS4 (27 x 132)</label>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Row</label>
                                <input type="number" id="window-ds4-row" value="${windowDimensions.ds4.row}" min="1" max="27" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Column</label>
                                <input type="number" id="window-ds4-col" value="${windowDimensions.ds4.col}" min="1" max="132" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Height</label>
                                <input type="number" id="window-ds4-height" value="${windowDimensions.ds4.height}" min="1" max="27" style="padding: 4px 8px;" />
                            </div>
                            <div class="property-group" style="margin: 0;">
                                <label style="font-size: 11px;">Width</label>
                                <input type="number" id="window-ds4-width" value="${windowDimensions.ds4.width}" min="1" max="132" style="padding: 4px 8px;" />
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
                
                <button id="apply-window-dimensions-btn" style="width: 100%; padding: 8px; margin-top: 8px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                    Apply Changes
                </button>
            `;
    }

    propertiesPanel.innerHTML = `
            <div class="properties-tabs">
                <button class="properties-tab active" data-tab="basic">Basic</button>
                ${recordType === 'SFLCTL' ? '<button class="properties-tab" data-tab="subfile-control">Subfile Control</button>' : ''}
                ${recordType !== 'SFL' ? '<button class="properties-tab" data-tab="function-keys">Function Keys</button>' : ''}
            </div>
            
            <div class="properties-content">
                <div id="tab-basic" class="tab-panel active">
                    <div class="property-group">
                        <label>Name</label>
                        <input type="text" id="screen-name" value="${currentRecord}" readonly style="background-color: #2d2d2d; cursor: not-allowed;" />
                    </div>
                    <div class="property-group">
                        <label>Type</label>
                        <input type="text" id="screen-type" value="${recordType}" readonly style="background-color: #2d2d2d; cursor: not-allowed;" />
                    </div>
                    ${windowDimensionsHtml}
                </div>
                
                ${recordType === 'SFLCTL' ? `
                <div id="tab-subfile-control" class="tab-panel">
                    <div class="subfile-control-section">
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Size (SFLSIZ)</label>
                        
                        <div style="display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflsiz-ds3-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflsiz-ds3-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS3 (24x80):</label>
                            </div>
                            <input type="number" id="sflsiz-ds3" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                            
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflsiz-ds4-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflsiz-ds4-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS4 (27x132):</label>
                            </div>
                            <input type="number" id="sflsiz-ds4" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Page (SFLPAG)</label>
                        
                        <div style="display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflpag-ds3-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflpag-ds3-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS3 (24x80):</label>
                            </div>
                            <input type="number" id="sflpag-ds3" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                            
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sflpag-ds4-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sflpag-ds4-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS4 (27x132):</label>
                            </div>
                            <input type="number" id="sflpag-ds4" placeholder="0000" min="0" max="9999" style="padding: 6px 8px; width: 100px;" disabled />
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Lines (SFLLIN)</label>
                        <p style="font-size: 11px; color: var(--vscode-descriptionForeground); margin-bottom: 12px;">Number of lines displayed (without indicators)</p>
                        
                        <div style="display: grid; grid-template-columns: auto 1fr; gap: 12px; align-items: center; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sfllin-ds3-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sfllin-ds3-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS3 (24x80):</label>
                            </div>
                            <input type="number" id="sfllin-ds3" placeholder="0" min="0" max="99" style="padding: 6px 8px; width: 100px;" disabled />
                            
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="sfllin-ds4-enabled" style="width: 16px; height: 16px; cursor: pointer;">
                                <label for="sfllin-ds4-enabled" style="font-size: 12px; color: var(--vscode-descriptionForeground); margin: 0; cursor: pointer;">*DS4 (27x132):</label>
                            </div>
                            <input type="number" id="sfllin-ds4" placeholder="0" min="0" max="99" style="padding: 6px 8px; width: 100px;" disabled />
                            </div>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Display (SFLDSP)</label>
                        
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                            <input type="checkbox" id="sfldsp-enabled" style="width: 18px; height: 18px; cursor: pointer;">
                            <label for="sfldsp-enabled" style="margin: 0; cursor: pointer;">Include in code</label>
                            <button id="sfldsp-indicators-btn" class="indicator-config-btn" disabled>
                                <span class="indicator-icon">🔢</span>
                                <span class="indicator-text">No ind.</span>
                            </button>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid var(--border-color); margin: 16px 0;" />
                        
                        <label style="display: block; margin-bottom: 12px; font-weight: 600; color: var(--text-color);">Subfile Display Control (SFLDSPCTL)</label>
                        
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
                            <input type="checkbox" id="sfldspctl-enabled" style="width: 18px; height: 18px; cursor: pointer;">
                            <label for="sfldspctl-enabled" style="margin: 0; cursor: pointer;">Include in code</label>
                            <button id="sfldspctl-indicators-btn" class="indicator-config-btn" disabled>
                                <span class="indicator-icon">🔢</span>
                                <span class="indicator-text">No ind.</span>
                            </button>
                        </div>
                        
                        <button id="apply-subfile-control-btn" style="width: 100%; padding: 10px; margin-top: 20px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
                            Apply Changes
                        </button>
                    </div>
                </div>
                ` : ''}
                
                ${recordType !== 'SFL' ? `
                <div id="tab-function-keys" class="tab-panel">
                    <div class="function-keys-header" style="margin-bottom: 10px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Function Keys</label>
                        <!-- Column headers -->
                        <div style="display: grid; grid-template-columns: 70px 240px 70px 1fr; gap: 8px; padding: 4px 8px; font-size: 11px; font-weight: 600; color: var(--vscode-descriptionForeground); border-bottom: 1px solid var(--border-color); margin-bottom: 8px;">
                            <span>Key</span>
                            <span>Type</span>
                            <span>Indicator</span>
                            <span>Description</span>
                        </div>
                    </div>
                    
                    <div id="function-keys-list" style="max-height: 400px; overflow-y: auto; overflow-x: auto;">
                        <!-- Function keys will be populated here -->
                    </div>
                </div>
                ` : ''}
            </div>
        `;

    setupPropertiesTabs();

    if (recordType === 'SFLCTL') {
        const applySubfileControlHandler = () => applySubfileControl({
            Logger,
            vscode,
            getCurrentDocument,
            setCurrentDocument,
            getCurrentRecord,
            getCurrentView: options.getCurrentView,
            updateDocumentInEditor,
            generateDdsLineWithIndicators,
            indicatorConfigurations,
            showScreenProperties: refreshScreenProperties,
            parseDspfFields: options.parseDspfFields,
            updatePreviewView: options.updatePreviewView
        });
        loadSubfileControl({
            Logger,
            getCurrentDocument,
            getCurrentRecord,
            DisplaySizeUtils,
            IndicatorUtils,
            scanIndicatorsBackward,
            indicatorConfigurations,
            setIndicatorButtonState,
            openIBMiModal,
            applySubfileControl: applySubfileControlHandler
        });
    }

    if (recordType !== 'SFL') {
        const saveFunctionKeysHandler = () => saveFunctionKeys({
            Logger,
            isReadOnly,
            getCurrentDocument,
            setCurrentDocument,
            getCurrentRecord,
            updateDocumentInEditor
        });
        const createFunctionKeyRowHandler = (args) => createFunctionKeyRow({
            ...args,
            IdGenerator,
            saveFunctionKeys: saveFunctionKeysHandler
        });
        loadFunctionKeys({
            getCurrentDocument,
            getCurrentRecord,
            createFunctionKeyRow: createFunctionKeyRowHandler
        });
    }

    const applyWindowBtn = document.getElementById('apply-window-dimensions-btn');
    if (applyWindowBtn) {
        applyWindowBtn.addEventListener('click', function() {
            applyWindowDimensions();
        });
    }

    const windowTypeCoords = document.getElementById('window-type-coords');
    const windowTypeRef = document.getElementById('window-type-ref');
    const coordsSection = document.getElementById('window-coordinates-section');
    const refSection = document.getElementById('window-reference-section');

    if (windowTypeCoords && windowTypeRef && coordsSection && refSection) {
        windowTypeCoords.addEventListener('change', function() {
            if (this.checked) {
                coordsSection.style.display = 'block';
                refSection.style.display = 'none';
            }
        });

        windowTypeRef.addEventListener('change', function() {
            if (this.checked) {
                coordsSection.style.display = 'none';
                refSection.style.display = 'block';
            }
        });
    }
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveDocument: () => (/* binding */ saveDocument)
/* harmony export */ });
function saveDocument(options) {
    const {
        Logger,
        vscode,
        getCurrentDocument,
        getCurrentRecord,
        showNotification
    } = options;

    const currentDocument = getCurrentDocument ? getCurrentDocument() : '';
    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

    Logger.debug('Save function called, currentDocument:', currentDocument ? currentDocument.substring(0, 100) : 'null');

    vscode.postMessage({
        type: 'update',
        content: currentDocument,
        currentRecord: currentRecord
    });

    showNotification('✅ Document saved successfully', 'success');
    Logger.success('Document saved, preserving record context:', currentRecord);
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setViewZoom: () => (/* binding */ setViewZoom)
/* harmony export */ });
function setViewZoom(options) {
    const {
        zoomValue,
        setCurrentZoom
    } = options;

    const clampedZoom = Math.max(0.5, Math.min(2, zoomValue));
    if (setCurrentZoom) {
        setCurrentZoom(clampedZoom);
    }

    const viewsContainer = document.getElementById('views-container');
    if (viewsContainer) {
        viewsContainer.style.setProperty('--view-zoom', clampedZoom.toString());
    }

    const zoomLabel = document.getElementById('zoomLabel');
    if (zoomLabel) {
        zoomLabel.textContent = `${Math.round(clampedZoom * 100)}%`;
    }
}


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchToView: () => (/* binding */ switchToView)
/* harmony export */ });
function switchToView({
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
    setupSourceSearchUI,
    scrollToRecordInSource
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
                    parseDspfFields
                });
                setupSourceSearchUI({ Logger });
                scrollToRecordInSource();
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


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupIndicatorButtons: () => (/* binding */ setupIndicatorButtons)
/* harmony export */ });
function setupIndicatorButtons({ Logger, openIndicatorModal }) {
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


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showFieldProperties: () => (/* binding */ showFieldProperties)
/* harmony export */ });
function showFieldProperties({
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
}) {
    const propertiesPanel = document.getElementById('field-properties');

    if (!field) {
        propertiesPanel.innerHTML = '<p>Select a field to edit properties</p>';
        return;
    }

    if (field.type === 'keyword' || field.isKeyword) {
        const keywordAttrAllowList = Array.from(KEYWORD_ATTRIBUTE_ALLOW_LIST);
        propertiesPanel.innerHTML = `
                <div class="properties-tabs">
                    <button class="properties-tab active" data-tab="basic">Basic</button>
                    <button class="properties-tab" data-tab="attributes">Attributes</button>
                    <button class="properties-tab" data-tab="colors">Colors</button>
                </div>
                
                <div class="properties-content">
                    <div id="tab-basic" class="tab-panel active">
                        <div class="property-group">
                            <label>Field Name</label>
                            <input type="text" id="prop-name" value="${field.name}" readonly style="background-color: #2d2d2d; cursor: not-allowed;" />
                        </div>
                        <div class="property-group">
                            <label>Row</label>
                            <input type="number" id="prop-row" value="${field.row}" min="1" max="24" />
                        </div>
                        <div class="property-group">
                            <label>Column</label>
                            <input type="number" id="prop-col" value="${field.col}" min="1" max="80" />
                        </div>
                    </div>
                    
                    <div id="tab-attributes" class="tab-panel">
                        ${renderAttributeRows(keywordAttrAllowList, 'keyword')}
                    </div>

                    <div id="tab-colors" class="tab-panel">
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-green" value="green" />
                                <span class="color-indicator" style="background-color: #00FF00;"></span>
                                Green
                            </label>
                            <button class="indicator-config-btn" data-color="GRN" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-white" value="white" />
                                <span class="color-indicator" style="background-color: #FFFFFF;"></span>
                                White
                            </label>
                            <button class="indicator-config-btn" data-color="WHT" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-red" value="red" />
                                <span class="color-indicator" style="background-color: #FF0000;"></span>
                                Red
                            </label>
                            <button class="indicator-config-btn" data-color="RED" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-turquoise" value="turquoise" />
                                <span class="color-indicator" style="background-color: #00FFFF;"></span>
                                Turquoise
                            </label>
                            <button class="indicator-config-btn" data-color="TRQ" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-yellow" value="yellow" />
                                <span class="color-indicator" style="background-color: #FFFF00;"></span>
                                Yellow
                            </label>
                            <button class="indicator-config-btn" data-color="YLW" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-pink" value="pink" />
                                <span class="color-indicator" style="background-color: #FF00FF;"></span>
                                Pink
                            </label>
                            <button class="indicator-config-btn" data-color="PNK" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                        <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                            <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                                <input type="checkbox" id="color-blue" value="blue" />
                                <span class="color-indicator" style="background-color: #0000FF;"></span>
                                Blue
                            </label>
                            <button class="indicator-config-btn" data-color="BLU" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 16px; border-top: 1px solid var(--border-color); background-color: var(--panel-background);">
                    <div class="property-group" style="margin-bottom: 8px;">
                        <button id="apply-properties" style="width: 100%; padding: 8px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Apply Changes</button>
                    </div>
                    <div class="property-group" style="margin: 0;">
                        <button id="delete-field" style="width: 100%; padding: 8px; background-color: var(--error-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Delete Field</button>
                    </div>
                </div>
            `;

        document.querySelectorAll('.properties-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                const tabName = this.dataset.tab;

                document.querySelectorAll('.properties-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

                this.classList.add('active');
                document.getElementById(`tab-${tabName}`).classList.add('active');
            });
        });

        document.getElementById('apply-properties').addEventListener('click', function() {
            applyFieldProperties(field);
        });

        document.getElementById('delete-field').addEventListener('click', function() {
            deleteField(field);
        });

        const colors = field.colors || (field.color ? [field.color] : []);
        if (colors.length > 0) {
            const colorMap = {
                'GRN': 'color-green',
                'WHT': 'color-white',
                'RED': 'color-red',
                'TRQ': 'color-turquoise',
                'YLW': 'color-yellow',
                'PNK': 'color-pink',
                'BLU': 'color-blue'
            };

            colors.forEach(colorCode => {
                const checkboxId = colorMap[colorCode];
                if (checkboxId) {
                    const checkbox = document.getElementById(checkboxId);
                    if (checkbox) {
                        checkbox.checked = true;
                        Logger.debug(`Pre-selected color ${colorCode} (${checkboxId}) for keyword ${field.name}`);
                    }
                }
            });
        }

        if (field.attributes) {
            const attrMap = getAttributeCheckboxMap(keywordAttrAllowList);
            Object.entries(attrMap).forEach(([attrKey, checkboxId]) => {
                if (field.attributes[attrKey]) {
                    const cb = document.getElementById(checkboxId);
                    if (cb) {cb.checked = true;}
                }
            });
        }
        if (field.colorIndicators) {
            for (const [color, indicatorData] of Object.entries(field.colorIndicators)) {
                const configKey = `color:${color}`;
                const indicatorSet = new Set();

                if (Array.isArray(indicatorData)) {
                    indicatorData.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                } else if (indicatorData.groups) {
                    indicatorData.groups.forEach(group => {
                        group.indicators.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                    });
                }

                indicatorConfigurations.set(configKey, indicatorSet);
            }
        }

        if (field.attributeIndicators) {
            for (const [attrName, indicatorData] of Object.entries(field.attributeIndicators)) {
                if (!KEYWORD_ATTRIBUTE_ALLOW_LIST.has(attrName)) {continue;}
                const configKey = `attr:${attrName}`;
                const indicatorSet = new Set();

                if (Array.isArray(indicatorData)) {
                    indicatorData.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                } else if (indicatorData.groups) {
                    indicatorData.groups.forEach(group => {
                        group.indicators.forEach(ind => indicatorSet.add(JSON.stringify(ind)));
                    });
                }

                indicatorConfigurations.set(configKey, indicatorSet);
            }
        }

        setupIndicatorButtons();

        if (field.colorIndicators) {
            for (const [color, indicators] of Object.entries(field.colorIndicators)) {
                const btn = document.querySelector(`.indicator-config-btn[data-color="${color}"]`);
                setIndicatorButtonState(btn, indicators);
            }
        }

        if (field.attributeIndicators) {
            for (const [attrName, indicators] of Object.entries(field.attributeIndicators)) {
                if (!KEYWORD_ATTRIBUTE_ALLOW_LIST.has(attrName)) {continue;}
                const btn = document.querySelector(`.indicator-config-btn[data-attr="${attrName}"]`);
                setIndicatorButtonState(btn, indicators);
            }
        }

        if (field.indicators) {
            const configKey = `field-indicators:${field.name}`;

            if (field.indicators.groups) {
                const indicatorData = {
                    groups: field.indicators.groups.map(g => ({
                        indicators: g.indicators || []
                    })),
                    isOr: field.indicators.isOr || false
                };
                indicatorConfigurations.set(configKey, indicatorData);

                const btn = document.querySelector(`.indicator-config-btn[data-field-indicators="true"]`);
                if (btn) {
                    Logger.debug(`🔍 [KEYWORD-IND] About to call setIndicatorButtonState for keyword ${field.name}`);
                    Logger.debug(`🔍 [KEYWORD-IND] field.indicators:`, field.indicators);
                    Logger.debug(`🔍 [KEYWORD-IND] field.indicators.groups:`, field.indicators.groups);

                    setIndicatorButtonState(btn, field.indicators);
                    const count = field.indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                    Logger.debug(`Marked keyword field-level indicator button with ${count} indicators`);
                }
            }
        }

        return;
    }

    let currentUsage = field.usage || '';

    if (!currentUsage) {
        if (field.type === 'input') {currentUsage = 'O';}
        else if (field.type === 'output') {currentUsage = 'I';}
    }

    const usageOptions = `
            <option value="I" ${currentUsage === 'I' ? 'selected' : ''}>Input</option>
            <option value="O" ${currentUsage === 'O' ? 'selected' : ''}>Output</option>
            <option value="B" ${currentUsage === 'B' ? 'selected' : ''}>Both</option>
            <!--<option value="M" ${currentUsage === 'M' ? 'selected' : ''}>Message</option>--> 
            <!--<option value="P" ${currentUsage === 'P' ? 'selected' : ''}>Program-to-System</option>--> 
        `;

    propertiesPanel.innerHTML = `
            <div class="properties-tabs">
                <button class="properties-tab active" data-tab="basic">Basic</button>
                <button class="properties-tab" data-tab="attributes">Attributes</button>
                <button class="properties-tab" data-tab="colors">Colors</button>
                <button class="properties-tab" data-tab="keying-options">Keying options</button>
            </div>
            
            <div class="properties-content">
                <div id="tab-basic" class="tab-panel active">
                    ${field.type !== 'constant' ? `
                    <div class="property-group">
                        <label>Field Name</label>
                        <input type="text" id="prop-name" value="${field.name}" maxlength="10" />
                    </div>
                    ` : ''}
                    ${field.type !== 'constant' ? `
                    <div class="property-group">
                        <label>Usage</label>
                        <select id="prop-usage">
                            ${usageOptions}
                        </select>
                    </div>
                    <div class="property-group">
                        <label>Type</label>
                        <select id="prop-type">
                            <option value="character" ${field.dataType === 'character' ? 'selected' : ''}>Character</option>
                            <option value="date" ${field.dataType === 'date' ? 'selected' : ''}>Date (L)</option>
                            <option value="time" ${field.dataType === 'time' ? 'selected' : ''}>Time (T)</option>
                            <option value="timestamp" ${field.dataType === 'timestamp' ? 'selected' : ''}>Timestamp (Z)</option>
                            <option value="packed" ${field.dataType === 'packed' ? 'selected' : ''}>Packed (Empaquetado)</option>
                            <option value="zoned" ${field.dataType === 'zoned' ? 'selected' : ''}>Con Zona</option>
                            <option value="float" ${field.dataType === 'float' ? 'selected' : ''}>Coma flotante</option>
                            <option value="double" ${field.dataType === 'double' ? 'selected' : ''}>Double Byte</option>
                        </select>
                    </div>
                    <div class="property-group">
                        <label>Shift</label>
                        <select id="prop-shift">
                            <!-- Options will be populated dynamically based on Type -->
                        </select>
                    </div>
                    ` : ''}
                    <div class="property-group">
                        <label>Row</label>
                        <input type="number" id="prop-row" value="${field.row}" min="1" max="24" />
                    </div>
                    <div class="property-group">
                        <label>Column</label>
                        <input type="number" id="prop-col" value="${field.col}" min="1" max="80" />
                    </div>
                    <div class="property-group">
                        <label>Length</label>
                        <input type="number" id="prop-length" value="${field.length || ''}" min="1" max="9999" ${(field.type === 'constant' || field.dataType === 'date' || field.dataType === 'time' || field.dataType === 'timestamp') ? 'readonly style="background-color: #2d2d2d; cursor: not-allowed;"' : ''} />
                    </div>
                    ${field.type !== 'constant' ? `
                    <div class="property-group">
                        <label>Decimals</label>
                        <input type="number" id="prop-decimals" value="${field.decimals || 0}" min="0" ${(field.dataType === 'character' || field.dataType === 'double' || field.dataType === 'date' || field.dataType === 'time' || field.dataType === 'timestamp') ? 'readonly style="background-color: #2d2d2d; cursor: not-allowed;"' : ''} />
                    </div>
                    ` : ''}
                    ${field.type === 'constant' ? `
                    <div class="property-group">
                        <label>Value</label>
                        <input type="text" id="prop-value" value="${field.value || ''}" />
                    </div>
                    ` : ''}
                </div>
                
                <div id="tab-attributes" class="tab-panel">
                    ${renderAttributeRows(null, field.type)}
                </div>
                <div id="tab-colors" class="tab-panel">
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-green" value="green" />
                            <span class="color-indicator" style="background-color: #00FF00;"></span>
                            Green
                        </label>
                        <button class="indicator-config-btn" data-color="GRN" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-white" value="white" />
                            <span class="color-indicator" style="background-color: #FFFFFF;"></span>
                            White
                        </label>
                        <button class="indicator-config-btn" data-color="WHT" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-red" value="red" />
                            <span class="color-indicator" style="background-color: #FF0000;"></span>
                            Red
                        </label>
                        <button class="indicator-config-btn" data-color="RED" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-turquoise" value="turquoise" />
                            <span class="color-indicator" style="background-color: #00FFFF;"></span>
                            Turquoise
                        </label>
                        <button class="indicator-config-btn" data-color="TRQ" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-yellow" value="yellow" />
                            <span class="color-indicator" style="background-color: #FFFF00;"></span>
                            Yellow
                        </label>
                        <button class="indicator-config-btn" data-color="YLW" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-pink" value="pink" />
                            <span class="color-indicator" style="background-color: #FF00FF;"></span>
                            Pink
                        </label>
                        <button class="indicator-config-btn" data-color="PNK" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group color-option" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; gap: 8px;">
                            <input type="checkbox" id="color-blue" value="blue" />
                            <span class="color-indicator" style="background-color: #0000FF;"></span>
                            Blue
                        </label>
                        <button class="indicator-config-btn" data-color="BLU" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                </div>

                <div id="tab-keying-options" class="tab-panel">
                    <div class="property-group check-char-title" style="margin-bottom: 6px; color: var(--vscode-descriptionForeground); font-weight: 600;">Character (Input/Both)</div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-me" />
                            Mandatory entry (ME)
                        </label>
                        <button class="indicator-config-btn" data-check="ME" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-er" />
                            Automatic record advance (ER)
                        </label>
                        <button class="indicator-config-btn" data-check="ER" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-mf" />
                            Mandatory fill (MF)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-fe" />
                            Field exit key required (FE)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-rb" />
                            Right adjust blank fill (RB)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-rz" />
                            Right adjust zero fill (RZ)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-rl" />
                            Move cursor right to left (RL)
                        </label>
                    </div>
                    <div class="property-group check-char" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-lc" />
                            Lowercase entry allowed (LC)
                        </label>
                    </div>

                    <div class="property-group check-num-title" style="margin: 10px 0 6px 0; color: var(--vscode-descriptionForeground); font-weight: 600;">Numeric (Input/Both)</div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-me" />
                            Mandatory entry (ME)
                        </label>
                        <button class="indicator-config-btn" data-check="ME" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-er" />
                            Automatic record advance (ER)
                        </label>
                        <button class="indicator-config-btn" data-check="ER" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-mf" />
                            Mandatory fill (MF)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-fe" />
                            Field exit key required (FE)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-rb" />
                            Right adjust blank fill (RB)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-rz" />
                            Right adjust zero fill (RZ)
                        </label>
                    </div>
                    <div class="property-group check-num" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="check-num-rl" />
                            Move cursor right to left (RL)
                        </label>
                    </div>
                </div>

                <div id="tab-general-keywords" class="tab-panel">
                    <div class="property-group dftval-group" style="display: flex; align-items: center; gap: 8px;">
                        <label style="flex: 1;">
                            <input type="checkbox" id="prop-dftval-enabled" />
                            Default Value (DFTVAL)
                        </label>
                        <button class="indicator-config-btn" data-dftval="enabled" title="Configurar indicadores"><span class="indicator-icon">🔢</span><span class="indicator-text">No ind.</span></button>
                    </div>
                    <div class="property-group dftval-value-group" style="display: none;">
                        <label>Value</label>
                        <input type="text" id="prop-dftval-value" placeholder="Default value" />
                    </div>
                </div>
            </div>
            
            <div style="padding: 16px; border-top: 1px solid var(--border-color); background-color: var(--panel-background);">
                <div class="property-group" style="margin-bottom: 8px;">
                    <button id="apply-properties" style="width: 100%; padding: 8px; background-color: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Apply Changes</button>
                </div>
                <div class="property-group" style="margin: 0;">
                    <button id="delete-field" style="width: 100%; padding: 8px; background-color: var(--error-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Delete Field</button>
                </div>
            </div>
        `;

    const tabsContainer = propertiesPanel.querySelector('.properties-tabs');
    if (tabsContainer) {
        const generalKeywordsBtn = document.createElement('button');
        generalKeywordsBtn.className = 'properties-tab';
        generalKeywordsBtn.setAttribute('data-tab', 'general-keywords');
        generalKeywordsBtn.textContent = 'General keywords';
        tabsContainer.appendChild(generalKeywordsBtn);
    }

    const usageSelect = document.getElementById('prop-usage');
    const usageRestrictedGroups = Array.from(document.querySelectorAll('.usage-not-output-attr'));
    const keyingTabBtn = document.querySelector('.properties-tab[data-tab="keying-options"]');
    const keyingTabPanel = document.getElementById('tab-keying-options');
    const generalKeywordsTabBtn = document.querySelector('.properties-tab[data-tab="general-keywords"]');
    const generalKeywordsTabPanel = document.getElementById('tab-general-keywords');
    const checkCharGroups = Array.from(document.querySelectorAll('.check-char'));
    const checkNumGroups = Array.from(document.querySelectorAll('.check-num'));
    const checkCharTitles = Array.from(document.querySelectorAll('.check-char-title'));
    const checkNumTitles = Array.from(document.querySelectorAll('.check-num-title'));
    const dftvalGroup = document.querySelector('.dftval-group');
    const dftvalValueGroup = document.querySelector('.dftval-value-group');
    const updateUsageRestrictedAttrs = () => {
        const show = field.type !== 'constant' && usageSelect && usageSelect.value !== 'O';
        usageRestrictedGroups.forEach(group => {
            group.style.display = show ? 'flex' : 'none';
        });
        const showKeying = field.type !== 'constant' && usageSelect && usageSelect.value !== 'O';
        if (keyingTabBtn) {
            keyingTabBtn.style.display = showKeying ? 'inline-flex' : 'none';
        }
        if (keyingTabPanel) {
            keyingTabPanel.style.display = showKeying ? '' : 'none';
        }
        if (showKeying) {
            const typeSelect = document.getElementById('prop-type');
            const dataType = typeSelect ? typeSelect.value : field.dataType;
            const isChar = dataType === 'character' || dataType === 'double' || dataType === 'date' || dataType === 'time' || dataType === 'timestamp';
            const isNumeric = ['packed', 'zoned', 'float'].includes(dataType);
            checkCharGroups.forEach(g => {g.style.display = isChar ? 'flex' : 'none';});
            checkNumGroups.forEach(g => {g.style.display = isNumeric ? 'flex' : 'none';});
            checkCharTitles.forEach(t => {t.style.display = isChar ? '' : 'none';});
            checkNumTitles.forEach(t => {t.style.display = isNumeric ? '' : 'none';});
        }
        if (!showKeying && keyingTabBtn && keyingTabBtn.classList.contains('active')) {
            keyingTabBtn.classList.remove('active');
            keyingTabPanel?.classList.remove('active');
            const basicTab = document.querySelector('.properties-tab[data-tab="basic"]');
            const basicPanel = document.getElementById('tab-basic');
            basicTab?.classList.add('active');
            basicPanel?.classList.add('active');
        }
        const showDFTVAL = field.type !== 'constant' && usageSelect && (usageSelect.value === 'O' || usageSelect.value === 'B');
        if (dftvalGroup) {
            dftvalGroup.style.display = showDFTVAL ? 'flex' : 'none';
        }
        if (dftvalValueGroup) {
            dftvalValueGroup.style.display = showDFTVAL ? 'block' : 'none';
        }
        if (generalKeywordsTabBtn) {
            generalKeywordsTabBtn.style.display = showDFTVAL ? 'inline-flex' : 'none';
        }
        if (generalKeywordsTabPanel) {
            generalKeywordsTabPanel.style.display = showDFTVAL ? '' : 'none';
        }
    };
    updateUsageRestrictedAttrs();
    if (usageSelect) {
        usageSelect.addEventListener('change', updateUsageRestrictedAttrs);
    }
    const typeSelect = document.getElementById('prop-type');
    if (typeSelect) {
        typeSelect.addEventListener('change', updateUsageRestrictedAttrs);
    }

    document.querySelectorAll('.properties-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;

            document.querySelectorAll('.properties-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });

    function updateShiftOptions(type) {
        const shiftSelect = document.getElementById('prop-shift');
        if (!shiftSelect) {return;}

        let options = '';
        switch(type) {
            case 'character':
                options = `
                        <option value="A">A - Alphanumeric</option>
                        <option value="X">X - Alphabetic</option>
                        <option value="N">N - Numeric Character Shift</option>
                        <option value="I">I - Inhibit Keyboard</option>
                        <option value="D">D - Digits Only</option>
                        <option value="M">M - Numeric Character Only</option>
                        <option value="W">W - Katakana</option>
                    `;
                break;
            case 'zoned':
                options = `
                        <option value="Y">Y - Numeric Only</option>
                        <option value="S">S - Signed Numeric</option>
                        <option value="N">N - Numeric Character Shift</option>
                        <option value="I">I - Inhibit Keyboard</option>
                        <option value="D">D - Digits Only</option>
                    `;
                break;
            case 'float':
                options = `
                        <option value="SINGLE">Sencilla</option>
                        <option value="DOUBLE">Doble</option>
                    `;
                break;
            case 'double':
                options = `
                        <option value="J">J - DBCS Only</option>
                        <option value="E">E - DBCS Either</option>
                        <option value="O">O - DBCS Open</option>
                        <option value="G">G - Graphic DBCS</option>
                    `;
                break;
            case 'date':
            case 'time':
            case 'timestamp':
                options = '<option value="">None</option>';
                break;
            default:
                options = '<option value="">None</option>';
        }
        shiftSelect.innerHTML = options;
    }

    function updateLengthState(type) {
        const lengthInput = document.getElementById('prop-length');
        if (!lengthInput) {return;}

        const shouldLockLength = field.type === 'constant' || type === 'date' || type === 'time' || type === 'timestamp';
        lengthInput.readOnly = shouldLockLength;

        if (shouldLockLength) {
            lengthInput.style.backgroundColor = '#2d2d2d';
            lengthInput.style.cursor = 'not-allowed';
        } else {
            lengthInput.style.backgroundColor = '';
            lengthInput.style.cursor = '';
        }

        if (type === 'date') {
            lengthInput.value = '10';
        } else if (type === 'time') {
            lengthInput.value = '8';
        } else if (type === 'timestamp') {
            lengthInput.value = '26';
        }
    }

    if (field.type !== 'constant') {
        const typeSelect = document.getElementById('prop-type');
        const shiftSelect = document.getElementById('prop-shift');
        if (typeSelect && shiftSelect) {
            updateShiftOptions(typeSelect.value);
            updateLengthState(typeSelect.value);

            if (field.dataType === 'float' && field.precision) {
                shiftSelect.value = field.precision;
            } else if (field.shift) {
                shiftSelect.value = field.shift;
            }

            typeSelect.addEventListener('change', function() {
                updateShiftOptions(this.value);
                updateLengthState(this.value);
            });
        }
    } else {
        updateLengthState(field.dataType);
    }

    document.getElementById('apply-properties').addEventListener('click', function() {
        applyFieldProperties(field);
    });

    document.getElementById('delete-field').addEventListener('click', function() {
        Logger.ui('Delete button clicked for field:', field.name);
        deleteField(field);
    });

    if (field.type !== 'constant') {
        const nameInput = document.getElementById('prop-name');
        if (nameInput && field.name.startsWith(field.type.toUpperCase())) {
            setTimeout(() => {
                nameInput.focus();
                nameInput.select();
            }, 100);
        }
    }

    if (field.colors && field.colors.length > 0) {
        const colorMap = {
            'GRN': 'color-green',
            'WHT': 'color-white',
            'RED': 'color-red',
            'TRQ': 'color-turquoise',
            'YLW': 'color-yellow',
            'PNK': 'color-pink',
            'BLU': 'color-blue'
        };

        field.colors.forEach(color => {
            const checkboxId = colorMap[color];
            if (checkboxId) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = true;
                    Logger.debug(`Pre-selected color ${color} (${checkboxId}) for field ${field.name}`);
                }
            }
        });
    } else if (field.color) {
        const colorMap = {
            'GRN': 'color-green',
            'WHT': 'color-white',
            'RED': 'color-red',
            'TRQ': 'color-turquoise',
            'YLW': 'color-yellow',
            'PNK': 'color-pink',
            'BLU': 'color-blue'
        };

        const checkboxId = colorMap[field.color];
        if (checkboxId) {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = true;
                Logger.debug(`Pre-selected color ${field.color} (${checkboxId}) for field ${field.name}`);
            }
        }
    }

    const setCheckState = (id, value) => {
        const el = document.getElementById(id);
        if (el) {el.checked = Boolean(value);}
    };
    const dataTypeForChecks = field.dataType;
    const isCharCheck = dataTypeForChecks === 'character' || dataTypeForChecks === 'double' || dataTypeForChecks === 'date' || dataTypeForChecks === 'time' || dataTypeForChecks === 'timestamp';
    const isNumericCheck = ['packed', 'zoned', 'float'].includes(dataTypeForChecks);
    const checkOptions = field.checkOptions || {};
    if (isCharCheck) {
        setCheckState('check-me', checkOptions.ME);
        setCheckState('check-er', checkOptions.ER);
        setCheckState('check-mf', checkOptions.MF);
        setCheckState('check-fe', checkOptions.FE);
        setCheckState('check-rb', checkOptions.RB);
        setCheckState('check-rz', checkOptions.RZ);
        setCheckState('check-rl', checkOptions.RL);
        setCheckState('check-lc', checkOptions.LC);
    }
    if (isNumericCheck) {
        setCheckState('check-num-me', checkOptions.ME);
        setCheckState('check-num-er', checkOptions.ER);
        setCheckState('check-num-mf', checkOptions.MF);
        setCheckState('check-num-fe', checkOptions.FE);
        setCheckState('check-num-rb', checkOptions.RB);
        setCheckState('check-num-rz', checkOptions.RZ);
        setCheckState('check-num-rl', checkOptions.RL);
    }

    if (field.attributes) {
        Logger.parse('Field has attributes:', field.attributes);
        if (field.attributes.underline) {
            const underlineCheckbox = document.getElementById('attr-underline');
            if (underlineCheckbox) {
                underlineCheckbox.checked = true;
                Logger.debug('Checked underline checkbox');
            }
        }
        if (field.attributes.reverse) {
            const reverseCheckbox = document.getElementById('attr-reverse-image');
            if (reverseCheckbox) {
                reverseCheckbox.checked = true;
                Logger.debug('Checked reverse checkbox');
            }
        }
        if (field.attributes.blink) {
            const blinkCheckbox = document.getElementById('attr-blink');
            if (blinkCheckbox) {
                blinkCheckbox.checked = true;
                Logger.debug('Checked blink checkbox');
            }
        }
        if (field.attributes.highlight) {
            const highlightCheckbox = document.getElementById('attr-high-intensity');
            if (highlightCheckbox) {
                highlightCheckbox.checked = true;
                Logger.debug('Checked highlight checkbox');
            }
        }
        if (field.attributes.cursorPosition) {
            const cursorCheckbox = document.getElementById('attr-cursor-position');
            if (cursorCheckbox) {
                cursorCheckbox.checked = true;
                Logger.debug('Checked cursor position checkbox');
            }
        }
        if (field.attributes.columnSeparator) {
            const columnCheckbox = document.getElementById('attr-column-separator');
            if (columnCheckbox) {
                columnCheckbox.checked = true;
                Logger.debug('Checked column separator checkbox');
            }
        }
        if (field.attributes.nonDisplay) {
            const nonDisplayCheckbox = document.getElementById('attr-non-display');
            if (nonDisplayCheckbox) {
                nonDisplayCheckbox.checked = true;
                Logger.debug('Checked non-display checkbox');
            }
        }
        if (field.attributes.modifiedDataTag) {
            const mdtCheckbox = document.getElementById('attr-mdt');
            if (mdtCheckbox) {
                mdtCheckbox.checked = true;
                Logger.debug('Checked modified data tag checkbox');
            }
        }
        if (field.attributes.protect) {
            const protectCheckbox = document.getElementById('attr-protect');
            if (protectCheckbox) {
                protectCheckbox.checked = true;
                Logger.debug('Checked protect checkbox');
            }
        }
        if (field.attributes.operatorId) {
            const oidCheckbox = document.getElementById('attr-oid');
            if (oidCheckbox) {
                oidCheckbox.checked = true;
                Logger.debug('Checked operator ID checkbox');
            }
        }
        if (field.attributes.selectLightPen) {
            const spCheckbox = document.getElementById('attr-select-pen');
            if (spCheckbox) {
                spCheckbox.checked = true;
                Logger.debug('Checked select by light pen checkbox');
            }
        }
    } else {
        Logger.debug('Field has no attributes object');
    }

    if (field.colorIndicators) {
        Logger.debug('Loading colorIndicators:', field.colorIndicators);
        for (const [color, indicatorData] of Object.entries(field.colorIndicators)) {
            const configKey = `color:${color}`;

            Logger.debug(`Processing color ${color}, indicatorData type:`, typeof indicatorData, indicatorData);

            if (Array.isArray(indicatorData)) {
                Logger.debug(`Color ${color} has old array format with ${indicatorData.length} indicators`);
                const indicatorSet = new Set();
                indicatorData.forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
                Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for color ${color} into config`);
            } else if (indicatorData.groups) {
                Logger.debug(`Color ${color} has groups format with ${indicatorData.groups.length} groups`);
                const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;

                if (isOr) {
                    indicatorConfigurations.set(configKey, {
                        groups: indicatorData.groups,
                        isOr: true
                    });
                    Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for color ${color} into config`);
                } else {
                    const indicatorSet = new Set();
                    indicatorData.groups.forEach((group, idx) => {
                        Logger.debug(`  Group ${idx}: ${group.indicators.length} indicators`);
                        group.indicators.forEach(ind => {
                            Logger.debug(`    Adding indicator:`, ind);
                            indicatorSet.add(JSON.stringify(ind));
                        });
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for color ${color} into config`);
                }
            } else {
                Logger.warn(`Color ${color} has unexpected format:`, indicatorData);
            }
        }
    }

    if (field.attributeIndicators) {
        if (field.hasGroupedDspatr) {
            const firstAttr = Object.keys(field.attributeIndicators)[0];
            const sharedIndicatorData = field.attributeIndicators[firstAttr] || [];

            const isOrFormat = !Array.isArray(sharedIndicatorData) && 
                               sharedIndicatorData.groups && 
                               sharedIndicatorData.isOr === true && 
                               sharedIndicatorData.groups.length > 1;

            const attrNames = ['underline', 'reverse', 'blink', 'highlight', 'cursorPosition', 'columnSeparator', 'nonDisplay'];

            if (isOrFormat) {
                attrNames.forEach(attrName => {
                    if (field.attributes && field.attributes[attrName]) {
                        const configKey = `attr:${attrName}`;
                        indicatorConfigurations.set(configKey, {
                            groups: sharedIndicatorData.groups,
                            isOr: true
                        });
                    }
                });
                Logger.debug(`Loaded ${sharedIndicatorData.groups.length} groups (OR format) for grouped DSPATR`);
            } else {
                const flatIndicators = [];
                if (Array.isArray(sharedIndicatorData)) {
                    flatIndicators.push(...sharedIndicatorData);
                } else if (sharedIndicatorData.groups) {
                    sharedIndicatorData.groups.forEach(group => {
                        flatIndicators.push(...group.indicators);
                    });
                }

                attrNames.forEach(attrName => {
                    if (field.attributes && field.attributes[attrName]) {
                        const configKey = `attr:${attrName}`;
                        const indicatorSet = new Set();
                        flatIndicators.forEach(ind => {
                            indicatorSet.add(JSON.stringify(ind));
                        });
                        indicatorConfigurations.set(configKey, indicatorSet);
                    }
                });
                Logger.debug(`Loaded ${flatIndicators.length} shared indicators (AND format) for grouped DSPATR`);
            }
        } else {
            for (const [attrName, indicatorData] of Object.entries(field.attributeIndicators)) {
                const configKey = `attr:${attrName}`;

                if (Array.isArray(indicatorData)) {
                    const indicatorSet = new Set();
                    indicatorData.forEach(ind => {
                        indicatorSet.add(JSON.stringify(ind));
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for attribute ${attrName} into config`);
                } else if (indicatorData.groups) {
                    Logger.debug(`    Checking OR format for ${attrName}: isOr=${indicatorData.isOr}, groups.length=${indicatorData.groups.length}`);
                    const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;
                    Logger.debug(`    Result: isOr=${isOr}`);

                    if (isOr) {
                        indicatorConfigurations.set(configKey, {
                            groups: indicatorData.groups,
                            isOr: true
                        });
                        Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for attribute ${attrName} into config`);
                    } else {
                        const indicatorSet = new Set();
                        indicatorData.groups.forEach(group => {
                            group.indicators.forEach(ind => {
                                indicatorSet.add(JSON.stringify(ind));
                            });
                        });
                        indicatorConfigurations.set(configKey, indicatorSet);
                        Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for attribute ${attrName} into config`);
                    }
                }
            }
        }
    }

    if (field.checkIndicators) {
        Logger.debug('Loading checkIndicators:', field.checkIndicators);
        for (const [code, indicatorData] of Object.entries(field.checkIndicators)) {
            const configKey = `check:${code}`;

            Logger.debug(`Processing CHECK ${code}, indicatorData type:`, typeof indicatorData, indicatorData);

            if (Array.isArray(indicatorData)) {
                Logger.debug(`CHECK ${code} has old array format with ${indicatorData.length} indicators`);
                const indicatorSet = new Set();
                indicatorData.forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
                Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for CHECK ${code} into config`);
            } else if (indicatorData.groups) {
                Logger.debug(`CHECK ${code} has groups format with ${indicatorData.groups.length} groups`);
                const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;

                if (isOr) {
                    indicatorConfigurations.set(configKey, {
                        groups: indicatorData.groups,
                        isOr: true
                    });
                    Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for CHECK ${code} into config`);
                } else {
                    const indicatorSet = new Set();
                    indicatorData.groups.forEach(group => {
                        group.indicators.forEach(ind => {
                            indicatorSet.add(JSON.stringify(ind));
                        });
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for CHECK ${code} into config`);
                }
            }
        }
    }

    const dftvalEnabledCheckbox = document.getElementById('prop-dftval-enabled');
    const dftvalValueInput = document.getElementById('prop-dftval-value');
    if (field.dftval) {
        if (dftvalEnabledCheckbox) {
            dftvalEnabledCheckbox.checked = true;
        }
        if (dftvalValueInput && field.dftval.value) {
            dftvalValueInput.value = field.dftval.value;
            dftvalValueInput.parentElement.style.display = 'block';
        }

        if (field.dftvalIndicators) {
            const configKey = 'dftval:enabled';
            const indicatorData = field.dftvalIndicators;

            Logger.debug('Processing DFTVAL indicatorData type:', typeof indicatorData, indicatorData);

            if (Array.isArray(indicatorData)) {
                Logger.debug(`DFTVAL has old array format with ${indicatorData.length} indicators`);
                const indicatorSet = new Set();
                indicatorData.forEach(ind => {
                    indicatorSet.add(JSON.stringify(ind));
                });
                indicatorConfigurations.set(configKey, indicatorSet);
                Logger.debug(`Loaded ${indicatorSet.size} indicators (array format) for DFTVAL into config`);
            } else if (indicatorData.groups) {
                Logger.debug(`DFTVAL has groups format with ${indicatorData.groups.length} groups`);
                const isOr = indicatorData.isOr === true && indicatorData.groups.length > 1;

                if (isOr) {
                    indicatorConfigurations.set(configKey, {
                        groups: indicatorData.groups,
                        isOr: true
                    });
                    Logger.debug(`Loaded ${indicatorData.groups.length} groups (OR format) for DFTVAL into config`);
                } else {
                    const indicatorSet = new Set();
                    indicatorData.groups.forEach((group, idx) => {
                        Logger.debug(`  DFTVAL Group ${idx}: ${group.indicators.length} indicators`);
                        group.indicators.forEach(ind => {
                            Logger.debug('    Adding DFTVAL indicator:', ind);
                            indicatorSet.add(JSON.stringify(ind));
                        });
                    });
                    indicatorConfigurations.set(configKey, indicatorSet);
                    Logger.debug(`Loaded ${indicatorSet.size} indicators (AND format) for DFTVAL into config`);
                }
            } else {
                Logger.warn('DFTVAL has unexpected format:', indicatorData);
            }
        }
    }

    if (dftvalEnabledCheckbox) {
        dftvalEnabledCheckbox.addEventListener('change', function() {
            if (dftvalValueGroup) {
                dftvalValueGroup.style.display = this.checked ? 'block' : 'none';
                if (this.checked && dftvalValueInput) {
                    dftvalValueInput.focus();
                }
            }
        });
    }

    setupIndicatorButtons();

    if (field.colorIndicators) {
        for (const [color, indicators] of Object.entries(field.colorIndicators)) {
            const hasIndicators = (Array.isArray(indicators) && indicators.length > 0) || 
                                 (indicators && indicators.groups && indicators.groups.length > 0);
            if (hasIndicators) {
                const btn = document.querySelector(`.indicator-config-btn[data-color="${color}"]`);
                setIndicatorButtonState(btn, indicators);
                const count = Array.isArray(indicators) ? indicators.length : 
                             indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                Logger.debug(`Marked color button for ${color} with ${count} indicators`);
            }
        }
    }

    if (field.attributeIndicators) {
        const attrToDataAttr = {
            'underline': 'underline',
            'reverse': 'reverse',
            'blink': 'blink',
            'highlight': 'highlight',
            'cursorPosition': 'cursorPosition',
            'columnSeparator': 'columnSeparator',
            'nonDisplay': 'nonDisplay',
            'modifiedDataTag': 'modifiedDataTag',
            'protect': 'protect',
            'operatorId': 'operatorId',
            'selectLightPen': 'selectLightPen'
        };

        for (const [attrName, indicators] of Object.entries(field.attributeIndicators)) {
            const hasIndicators = (Array.isArray(indicators) && indicators.length > 0) || 
                                 (indicators && indicators.groups && indicators.groups.length > 0);
            if (hasIndicators) {
                const dataAttr = attrToDataAttr[attrName];
                if (dataAttr) {
                    const btn = document.querySelector(`.indicator-config-btn[data-attr="${dataAttr}"]`);
                    setIndicatorButtonState(btn, indicators);
                    const count = Array.isArray(indicators) ? indicators.length : 
                                 indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                    Logger.debug(`Marked attribute button for ${attrName} with ${count} indicators`);
                }
            }
        }
    }

    if (field.checkIndicators) {
        ['ME', 'ER'].forEach(code => {
            const indicators = field.checkIndicators[code];
            if (indicators && indicators.groups && indicators.groups.length > 0) {
                const btn = document.querySelector(`.indicator-config-btn[data-check="${code}"]`);
                setIndicatorButtonState(btn, indicators);
                const count = indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                Logger.debug(`Marked CHECK(${code}) button with ${count} indicators`);
            }
        });
    }

    if (field.dftvalIndicators) {
        const hasIndicators = (Array.isArray(field.dftvalIndicators) && field.dftvalIndicators.length > 0) || 
                             (field.dftvalIndicators && field.dftvalIndicators.groups && field.dftvalIndicators.groups.length > 0);
        if (hasIndicators) {
            const btn = document.querySelector(`.indicator-config-btn[data-dftval="enabled"]`);
            setIndicatorButtonState(btn, field.dftvalIndicators);
            const count = Array.isArray(field.dftvalIndicators) ? field.dftvalIndicators.length : 
                         field.dftvalIndicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
            Logger.debug(`Marked DFTVAL button with ${count} indicators`);
        }
    }

    if (field.indicators) {
        const configKey = `field-indicators:${field.name}`;

        Logger.debug(`🔍 [${field.type.toUpperCase()}-IND-LOAD] Loading field indicators for ${field.name}`);
        Logger.debug(`🔍 [${field.type.toUpperCase()}-IND-LOAD] field.indicators:`, field.indicators);

        if (field.indicators.groups) {
            const indicatorData = {
                groups: field.indicators.groups.map(g => ({
                    indicators: g.indicators || []
                })),
                isOr: field.indicators.isOr || false
            };
            indicatorConfigurations.set(configKey, indicatorData);

            const btn = document.querySelector(`.indicator-config-btn[data-field-indicators="true"]`);
            if (btn) {
                Logger.debug('🔍 [FIELD-IND] About to call setIndicatorButtonState');
                Logger.debug('🔍 [FIELD-IND] field.indicators:', field.indicators);
                Logger.debug('🔍 [FIELD-IND] field.indicators.groups:', field.indicators.groups);

                if (field.indicators.groups.length > 0 && field.indicators.groups[0].indicators.length > 0) {
                    const firstInd = field.indicators.groups[0].indicators[0];
                    Logger.debug('🔍 [FIELD-IND] First indicator:', firstInd);
                    Logger.debug(`🔍 [FIELD-IND] First indicator.number type: ${typeof firstInd.number}`);
                    Logger.debug(`🔍 [FIELD-IND] First indicator.number value: "${firstInd.number}"`);
                }

                setIndicatorButtonState(btn, field.indicators);
                const count = field.indicators.groups.reduce((sum, g) => sum + g.indicators.length, 0);
                Logger.debug(`Marked field-level indicator button with ${count} indicators`);
            }
        }
    }
}


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFieldProperties: () => (/* binding */ applyFieldProperties)
/* harmony export */ });
function applyFieldProperties({
    field,
    Logger,
    getSelectedField,
    setSelectedField,
    getFields,
    getCurrentRecord,
    getCurrentDocument,
    setCurrentDocument,
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
}) {
    try {
        const selectedField = getSelectedField ? getSelectedField() : null;
        const fields = getFields ? getFields() : [];
        const currentRecord = getCurrentRecord ? getCurrentRecord() : null;

        if (selectedField && selectedField.id === field.id) {
            if (selectedField.indicators) {
                field.indicators = selectedField.indicators;
            }
            if (selectedField.fieldIndicatorsModified) {
                field.fieldIndicatorsModified = selectedField.fieldIndicatorsModified;
            }
            if (selectedField.colorIndicatorsModified) {
                field.colorIndicatorsModified = selectedField.colorIndicatorsModified;
            }
            if (selectedField.attributeIndicatorsModified) {
                field.attributeIndicatorsModified = selectedField.attributeIndicatorsModified;
            }
            if (selectedField.dftvalIndicatorsModified) {
                field.dftvalIndicatorsModified = selectedField.dftvalIndicatorsModified;
            }
        }

        const oldField = {
            ...field,
            attributes: field.attributes ? { ...field.attributes } : undefined,
            colorIndicators: field.colorIndicators ? JSON.parse(JSON.stringify(field.colorIndicators)) : undefined,
            attributeIndicators: field.attributeIndicators ? JSON.parse(JSON.stringify(field.attributeIndicators)) : undefined,
            checkOptions: field.checkOptions ? { ...field.checkOptions } : undefined,
            checkIndicators: field.checkIndicators ? JSON.parse(JSON.stringify(field.checkIndicators)) : undefined,
            keywordIndicators: field.keywordIndicators ? JSON.parse(JSON.stringify(field.keywordIndicators)) : undefined,
            dftval: field.dftval ? { ...field.dftval } : undefined,
            dftvalIndicators: field.dftvalIndicators ? JSON.parse(JSON.stringify(field.dftvalIndicators)) : undefined
        };

        Logger.debug('Applying properties to field:', oldField.name);

        if (field.type === 'keyword' || field.isKeyword) {
            field.row = parseInt(document.getElementById('prop-row').value);
            field.col = parseInt(document.getElementById('prop-col').value);

            applyColorChanges(field);

            const attributeMap = getAttributeCheckboxMap(KEYWORD_ATTRIBUTE_ALLOW_LIST);

            if (!field.attributes) {
                field.attributes = {};
            }

            const selectedKeywordAttrs = [];
            for (const [attrName, checkboxId] of Object.entries(attributeMap)) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox && checkbox.checked) {
                    field.attributes[attrName] = true;
                    selectedKeywordAttrs.push(attrName);
                } else {
                    delete field.attributes[attrName];
                    Logger.debug(`Attribute ${attrName} removed from keyword ${field.name}`);
                }
            }

            transferIndicators({
                kind: 'attr',
                keys: selectedKeywordAttrs,
                field: field,
                fieldType: 'keyword',
                attrFormat: 'individual'
            });

            if (Object.keys(field.attributes).length === 0) {
                delete field.attributes;
            }

            transferIndicators({
                kind: 'keyword',
                keys: [field.name],
                field: field,
                fieldType: 'keyword'
            });

            Logger.debug('Old keyword:', oldField);
            Logger.debug('New keyword:', field);

            updateFieldInDds(field, oldField);

            const latestDocument = getCurrentDocument ? getCurrentDocument() : '';
            parseDspfFields(latestDocument);

            const updatedField = fields.find(f => f.name === field.name && f.record === currentRecord);
            if (updatedField) {
                if (setSelectedField) {
                    setSelectedField(updatedField);
                }
                selectField(updatedField);
                showFieldProperties(updatedField);
                Logger.debug('Re-selected keyword after re-parse:', updatedField.name);
            }

            updateSourceViewUI({
                Logger,
                vscode,
                getCurrentDocument,
                setCurrentDocument,
                getCurrentRecord,
                parseDspfFields
            });
            Logger.debug('Source view synchronized after keyword update');

            vscode.postMessage({
                type: 'applyChangesSuccess',
                message: `Keyword "${field.name}" updated successfully`
            });

            showFieldProperties(field);

            Logger.success('Keyword properties applied and DDS updated');
            return;
        }

        if (field.type !== 'constant') {
            const nameInput = document.getElementById('prop-name');
            if (nameInput) {
                const newName = nameInput.value.trim().toUpperCase();

                Logger.debug('Name validation - Field ID:', field.id, 'Old name:', oldField.name, 'New name:', newName, 'Current record:', currentRecord);

                if (!newName) {
                    alert('Field name cannot be empty.');
                    return;
                }

                if (newName !== oldField.name) {
                    Logger.debug('Name changed, checking for duplicates...');
                    Logger.debug('Current record:', currentRecord);
                    Logger.debug('All fields:', fields.map(f => `${f.name} (record: ${f.record || 'undefined'})`));

                    const fieldsInCurrentRecord = fields.filter(f => {
                        return f.record === currentRecord || (!f.record && currentRecord);
                    });

                    const duplicateField = fieldsInCurrentRecord.find(f =>
                        f.id !== field.id &&
                        f.name === newName
                    );

                    Logger.debug('Duplicate field found:', duplicateField);

                    if (duplicateField) {
                        vscode.postMessage({
                            type: 'error',
                            message: `A field with the name "${newName}" already exists in record "${currentRecord}".`
                        });

                        nameInput.value = oldField.name;
                        return;
                    }
                }

                field.name = newName;
            }
        }

        field.row = parseInt(document.getElementById('prop-row').value);
        field.col = parseInt(document.getElementById('prop-col').value);
        field.length = parseInt(document.getElementById('prop-length').value) || null;

        if (field.type !== 'constant') {
            const decimalsInput = document.getElementById('prop-decimals');
            if (decimalsInput) {
                field.decimals = (field.dataType === 'double') ? 0 : (parseInt(decimalsInput.value) || 0);
            }
        }

        if (field.type !== 'constant') {
            const usageSelect = document.getElementById('prop-usage');
            if (usageSelect) {
                field.usage = usageSelect.value;
                Logger.debug('Usage updated to:', field.usage);
            }

            const typeSelect = document.getElementById('prop-type');
            if (typeSelect) {
                field.dataType = typeSelect.value;
                Logger.debug('Data type updated to:', field.dataType);
                if (field.dataType === 'date') {
                    field.length = 10;
                    field.decimals = 0;
                    delete field.shift;
                    delete field.precision;
                } else if (field.dataType === 'time') {
                    field.length = 8;
                    field.decimals = 0;
                    delete field.shift;
                    delete field.precision;
                } else if (field.dataType === 'timestamp') {
                    field.length = 26;
                    field.decimals = 0;
                    delete field.shift;
                    delete field.precision;
                }
            }

            const shiftSelect = document.getElementById('prop-shift');
            if (shiftSelect) {
                if (field.dataType === 'float') {
                    field.precision = shiftSelect.value;
                    Logger.debug('Precision updated to:', field.precision);
                } else if (field.dataType === 'zoned' || field.dataType === 'double') {
                    field.shift = shiftSelect.value;
                    Logger.debug('Shift updated to:', field.shift);
                }
            }
        }

        if (field.type === 'constant') {
            field.value = document.getElementById('prop-value').value;
        }

        applyColorChanges(field);

        if (field.type === 'constant' || field.type !== 'keyword') {
            const attributeMap = getAttributeCheckboxMap();

            if (!field.attributes) {
                field.attributes = {};
            }

            const selectedAttrs = [];
            for (const [attrName, checkboxId] of Object.entries(attributeMap)) {
                const checkbox = document.getElementById(checkboxId);
                if (checkbox && checkbox.checked) {
                    field.attributes[attrName] = true;
                    selectedAttrs.push(attrName);
                } else {
                    delete field.attributes[attrName];
                    Logger.debug(`Attribute ${attrName} removed from field ${field.name}`);
                }
            }

            const attrFormat = field.hasGroupedDspatr ? 'grouped' : 'individual';
            const attrIndicatorsModified = transferIndicators({
                kind: 'attr',
                keys: selectedAttrs,
                field: field,
                fieldType: 'field',
                attrFormat: attrFormat
            });

            if (Object.keys(field.attributes).length === 0) {
                delete field.attributes;
            }

            if (field.hasGroupedDspatr && !attrIndicatorsModified) {
                const oldAttrSet = new Set(Object.keys(oldField.attributes || {}).filter(k => oldField.attributes[k]));
                const newAttrSet = new Set(Object.keys(field.attributes || {}).filter(k => field.attributes[k]));

                const setsAreDifferent = oldAttrSet.size !== newAttrSet.size ||
                    [...oldAttrSet].some(attr => !newAttrSet.has(attr));

                if (setsAreDifferent) {
                    field.attributeIndicatorsModified = true;
                    Logger.debug('Grouped DSPATR format detected attribute changes, will regenerate line');
                }
            }
        }

        if (field.type !== 'constant' && field.usage !== 'O') {
            const dataTypeForChecks = field.dataType;
            const isCharCheck = dataTypeForChecks === 'character' || dataTypeForChecks === 'double';
            const isNumericCheck = ['packed', 'zoned', 'float'].includes(dataTypeForChecks);
            const newCheckOptions = {};
            const applyCheckValue = (id, code) => {
                const el = document.getElementById(id);
                if (el && el.checked) {newCheckOptions[code] = true;}
            };
            if (isCharCheck) {
                applyCheckValue('check-me', 'ME');
                applyCheckValue('check-er', 'ER');
                applyCheckValue('check-mf', 'MF');
                applyCheckValue('check-fe', 'FE');
                applyCheckValue('check-rb', 'RB');
                applyCheckValue('check-rz', 'RZ');
                applyCheckValue('check-rl', 'RL');
                applyCheckValue('check-lc', 'LC');
            }
            if (isNumericCheck) {
                applyCheckValue('check-num-me', 'ME');
                applyCheckValue('check-num-er', 'ER');
                applyCheckValue('check-num-mf', 'MF');
                applyCheckValue('check-num-fe', 'FE');
                applyCheckValue('check-num-rb', 'RB');
                applyCheckValue('check-num-rz', 'RZ');
                applyCheckValue('check-num-rl', 'RL');
            }

            if (Object.keys(newCheckOptions).length > 0) {
                field.checkOptions = newCheckOptions;
            } else {
                delete field.checkOptions;
            }

            const allowedIndicatorCodes = ['ME', 'ER'];
            let checkIndicatorsModified = false;
            if (!field.checkIndicators) {field.checkIndicators = {};}
            allowedIndicatorCodes.forEach(code => {
                if (selectedField && selectedField.checkIndicators && selectedField.checkIndicators[code]) {
                    field.checkIndicators[code] = selectedField.checkIndicators[code];
                    checkIndicatorsModified = true;
                    Logger.debug(`Transferred CHECK(${code}) indicators from selectedField:`, field.checkIndicators[code]);
                } else if (field.checkIndicators[code] && !(newCheckOptions && newCheckOptions[code])) {
                    delete field.checkIndicators[code];
                    checkIndicatorsModified = true;
                }
            });
            Object.keys(field.checkIndicators).forEach(code => {
                if (!newCheckOptions[code]) {delete field.checkIndicators[code];}
            });
            if (Object.keys(field.checkIndicators).length === 0) {
                delete field.checkIndicators;
            }
            if (checkIndicatorsModified) {
                field.checkIndicatorsModified = true;
            }
        } else {
            delete field.checkOptions;
            delete field.checkIndicators;
        }

        if (field.type !== 'constant' && (field.usage === 'O' || field.usage === 'B')) {
            const dftvalCheckbox = document.getElementById('prop-dftval-enabled');
            const dftvalValueInput = document.getElementById('prop-dftval-value');

            if (dftvalCheckbox && dftvalCheckbox.checked && dftvalValueInput) {
                const dftvalValue = dftvalValueInput.value.trim();
                if (dftvalValue) {
                    field.dftval = { value: dftvalValue };
                    Logger.debug(`DFTVAL set to '${dftvalValue}' for field ${field.name}`);

                    if (selectedField && selectedField.dftvalIndicators) {
                        field.dftvalIndicators = selectedField.dftvalIndicators;
                        Logger.debug('Transferred DFTVAL indicators from selectedField:', field.dftvalIndicators);
                    }
                } else {
                    delete field.dftval;
                    delete field.dftvalIndicators;
                }
            } else {
                delete field.dftval;
                delete field.dftvalIndicators;
            }
        } else {
            delete field.dftval;
            delete field.dftvalIndicators;
        }

        Logger.debug('Old field:', oldField);
        Logger.debug('New field:', field);

        const positionChanged = oldField.row !== field.row || oldField.col !== field.col;
        const nameChanged = oldField.name !== field.name;
        const indicatorsModified = Boolean(
            field.colorIndicatorsModified ||
            field.attributeIndicatorsModified ||
            field.keywordIndicatorsModified ||
            field.fieldIndicatorsModified ||
            field.dftvalIndicatorsModified
        );

        const oldColors = JSON.stringify(oldField.colors || [oldField.color].filter(Boolean));
        const newColors = JSON.stringify(field.colors || [field.color].filter(Boolean));
        const colorChanged = oldColors !== newColors;

        const oldAttrs = JSON.stringify(oldField.attributes || {});
        const newAttrs = JSON.stringify(field.attributes || {});
        const attributesChanged = oldAttrs !== newAttrs;

        const usageChanged = oldField.usage !== field.usage;

        const dataTypeChanged = oldField.dataType !== field.dataType;
        const lengthChanged = oldField.length !== field.length;
        const decimalsChanged = oldField.decimals !== field.decimals;
        const shiftChanged = (field.dataType === 'zoned' || field.dataType === 'double') && oldField.shift !== field.shift;
        const precisionChanged = field.dataType === 'float' && oldField.precision !== field.precision;
        const checkOptionsChanged = JSON.stringify(oldField.checkOptions || {}) !== JSON.stringify(field.checkOptions || {});
        const checkIndicatorsModified = Boolean(field.checkIndicatorsModified);
        const dftvalChanged = JSON.stringify(oldField.dftval || null) !== JSON.stringify(field.dftval || null);
        const dftvalIndicatorsChanged = JSON.stringify(oldField.dftvalIndicators || null) !== JSON.stringify(field.dftvalIndicators || null);

        const valueChanged = field.type === 'constant' && oldField.value !== field.value;

        const shouldUpdateDds = Boolean(
            indicatorsModified ||
            positionChanged ||
            nameChanged ||
            colorChanged ||
            attributesChanged ||
            usageChanged ||
            dataTypeChanged ||
            lengthChanged ||
            decimalsChanged ||
            shiftChanged ||
            precisionChanged ||
            valueChanged ||
            checkOptionsChanged ||
            checkIndicatorsModified ||
            dftvalChanged ||
            dftvalIndicatorsChanged
        );

        if (shouldUpdateDds) {
            Logger.dds(`Updating DDS (colorIndicators: ${field.colorIndicatorsModified}, attributeIndicators: ${field.attributeIndicatorsModified}, checkIndicators: ${checkIndicatorsModified}, dftval: ${dftvalChanged}, dftvalIndicators: ${dftvalIndicatorsChanged}, position: ${positionChanged}, name: ${nameChanged}, color: ${colorChanged}, attributes: ${attributesChanged}, checks: ${checkOptionsChanged}, usage: ${usageChanged}, dataType: ${dataTypeChanged}, length: ${lengthChanged}, decimals: ${decimalsChanged}, shift: ${shiftChanged}, precision: ${precisionChanged}, value: ${valueChanged})`);
            updateFieldInDds(field, oldField);
            delete field.colorIndicatorsModified;
            delete field.attributeIndicatorsModified;
            delete field.checkIndicatorsModified;
            delete field.keywordIndicatorsModified;
            delete field.dftvalIndicatorsModified;

            const latestDocument = getCurrentDocument ? getCurrentDocument() : '';
            parseDspfFields(latestDocument);

            const updatedField = fields.find(f => f.name === field.name && f.record === currentRecord);
            if (updatedField) {
                if (setSelectedField) {
                    setSelectedField(updatedField);
                }
                selectField(updatedField);
                showFieldProperties(updatedField);
                Logger.debug('Re-selected field after re-parse:', updatedField.name);
            }

            updateSourceViewUI({
                Logger,
                vscode,
                getCurrentDocument,
                setCurrentDocument,
                getCurrentRecord,
                parseDspfFields
            });
            Logger.debug('Source view synchronized after field update');

            vscode.postMessage({
                type: 'applyChangesSuccess',
                message: `Changes applied to field "${field.name}"`
            });
        } else {
            Logger.debug('Skipping DDS update - no relevant changes detected');

            vscode.postMessage({
                type: 'applyChangesSuccess',
                message: `No changes detected for field "${field.name}"`
            });
        }

        showFieldProperties(field);

        Logger.success('Field properties applied');
    } catch (error) {
        Logger.error('Error applying field properties:', error);
        vscode.postMessage({
            type: 'applyChangesError',
            message: `Error applying changes: ${error.message}`
        });
    }
}


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupPropertiesTabs: () => (/* binding */ setupPropertiesTabs)
/* harmony export */ });
function setupPropertiesTabs() {
    const tabs = document.querySelectorAll('.properties-tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked tab and corresponding panel
            this.classList.add('active');
            const panel = document.getElementById(`tab-${tabName}`);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applySflpagRepetition: () => (/* binding */ applySflpagRepetition),
/* harmony export */   applySubfileControl: () => (/* binding */ applySubfileControl),
/* harmony export */   getSflpagValue: () => (/* binding */ getSflpagValue),
/* harmony export */   getSubfileRelationship: () => (/* binding */ getSubfileRelationship),
/* harmony export */   loadSubfileControl: () => (/* binding */ loadSubfileControl)
/* harmony export */ });
// Funciones para cargar y aplicar cambios en los subfile
function loadSubfileControl(options) {
    const {
        Logger,
        getCurrentDocument,
        getCurrentRecord,
        DisplaySizeUtils,
        IndicatorUtils,
        scanIndicatorsBackward,
        indicatorConfigurations,
        setIndicatorButtonState,
        openIBMiModal,
        applySubfileControl
    } = options;

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();

    Logger.stats('Loading subfile control keywords for record:', currentRecord);

    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    const subfileControl = {
        sflsiz: { ds3: '', ds4: '' },
        sflpag: { ds3: '', ds4: '' },
        sfllin: { ds3: '', ds4: '' },
        sfldsp: { indicators: null },
        sfldspctl: { indicators: null }
    };

    const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);

    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            break;
        }

        if (inTargetRecord) {
            const trimmed = line.trim();

            if (trimmed.includes('SFLSIZ(')) {
                const match = trimmed.match(/SFLSIZ\((\d{1,4})\)/);
                if (match) {
                    const value = match[1];
                    if (trimmed.includes('*DS3')) {
                        subfileControl.sflsiz.ds3 = value;
                        Logger.stats(`Found SFLSIZ DS3: ${value}`);
                    } else if (trimmed.includes('*DS4')) {
                        subfileControl.sflsiz.ds4 = value;
                        Logger.stats(`Found SFLSIZ DS4: ${value}`);
                    } else if (displayConfig.singleSize) {
                        if (displayConfig.singleSize === 'DS3') {
                            subfileControl.sflsiz.ds3 = value;
                            Logger.stats(`Found SFLSIZ (single size DS3): ${value}`);
                        } else if (displayConfig.singleSize === 'DS4') {
                            subfileControl.sflsiz.ds4 = value;
                            Logger.stats(`Found SFLSIZ (single size DS4): ${value}`);
                        }
                    }
                }
            }

            if (trimmed.includes('SFLPAG(')) {
                const match = trimmed.match(/SFLPAG\((\d{1,4})\)/);
                if (match) {
                    const value = match[1];
                    if (trimmed.includes('*DS3')) {
                        subfileControl.sflpag.ds3 = value;
                        Logger.stats(`Found SFLPAG DS3: ${value}`);
                    } else if (trimmed.includes('*DS4')) {
                        subfileControl.sflpag.ds4 = value;
                        Logger.stats(`Found SFLPAG DS4: ${value}`);
                    } else if (displayConfig.singleSize) {
                        if (displayConfig.singleSize === 'DS3') {
                            subfileControl.sflpag.ds3 = value;
                            Logger.stats(`Found SFLPAG (single size DS3): ${value}`);
                        } else if (displayConfig.singleSize === 'DS4') {
                            subfileControl.sflpag.ds4 = value;
                            Logger.stats(`Found SFLPAG (single size DS4): ${value}`);
                        }
                    }
                }
            }

            if (trimmed.includes('SFLLIN(')) {
                const match = trimmed.match(/SFLLIN\((\d+)\)/);
                if (match) {
                    const value = match[1];
                    if (trimmed.includes('*DS3')) {
                        subfileControl.sfllin.ds3 = value;
                        Logger.stats(`Found SFLLIN DS3: ${value}`);
                    } else if (trimmed.includes('*DS4')) {
                        subfileControl.sfllin.ds4 = value;
                        Logger.stats(`Found SFLLIN DS4: ${value}`);
                    }
                }
            }

            if (trimmed.includes('SFLDSP') && !trimmed.includes('SFLDSPCTL')) {
                Logger.debug(`[SFLDSP PARSE] Found SFLDSP at line ${index}`);

                const currentLineIndicators = IndicatorUtils.extractFromDdsLine(line, 'SFLDSP-PARSE');
                const isOrLine = line.length > 6 && line[6] === 'O';

                let backwardScan = { scannedLines: [], hasOrLines: false };
                if (index > 0) {
                    backwardScan = scanIndicatorsBackward(lines, 0, index, 'SFLDSP-BACKWARD');
                }
                const scannedLines = backwardScan.scannedLines;
                let hasOrLines = backwardScan.hasOrLines;

                if (currentLineIndicators && currentLineIndicators.length > 0) {
                    if (isOrLine) {
                        scannedLines.push({ indicators: currentLineIndicators, isOr: true });
                        hasOrLines = true;
                    } else {
                        if (scannedLines.length > 0) {
                            scannedLines[scannedLines.length - 1].indicators.push(...currentLineIndicators);
                        } else {
                            scannedLines.push({ indicators: currentLineIndicators, isOr: false });
                        }
                    }
                }

                if (scannedLines.length > 0) {
                    if (hasOrLines) {
                        const groups = [];
                        scannedLines.forEach(lineItem => {
                            if (lineItem.isOr) {
                                groups.push({ indicators: [...lineItem.indicators] });
                            } else {
                                if (groups.length > 0) {
                                    groups[groups.length - 1].indicators.push(...lineItem.indicators);
                                } else {
                                    groups.push({ indicators: [...lineItem.indicators] });
                                }
                            }
                        });
                        subfileControl.sfldsp.indicators = { groups: groups, isOr: true };
                    } else {
                        const allIndicators = [];
                        scannedLines.forEach(lineItem => {
                            allIndicators.push(...lineItem.indicators);
                        });
                        subfileControl.sfldsp.indicators = { groups: [{ indicators: allIndicators }], isOr: false };
                    }
                    Logger.stats(`Found SFLDSP with ${subfileControl.sfldsp.indicators.groups.length} group(s), isOr=${subfileControl.sfldsp.indicators.isOr}`);
                }
            }

            if (trimmed.includes('SFLDSPCTL')) {
                Logger.debug(`[SFLDSPCTL PARSE] Found SFLDSPCTL at line ${index}`);

                const currentLineIndicators = IndicatorUtils.extractFromDdsLine(line, 'SFLDSPCTL-PARSE');
                const isOrLine = line.length > 6 && line[6] === 'O';

                let backwardScan = { scannedLines: [], hasOrLines: false };
                if (index > 0) {
                    backwardScan = scanIndicatorsBackward(lines, 0, index, 'SFLDSPCTL-BACKWARD');
                }
                const scannedLines = backwardScan.scannedLines;
                let hasOrLines = backwardScan.hasOrLines;

                if (currentLineIndicators && currentLineIndicators.length > 0) {
                    if (isOrLine) {
                        scannedLines.push({ indicators: currentLineIndicators, isOr: true });
                        hasOrLines = true;
                    } else {
                        if (scannedLines.length > 0) {
                            scannedLines[scannedLines.length - 1].indicators.push(...currentLineIndicators);
                        } else {
                            scannedLines.push({ indicators: currentLineIndicators, isOr: false });
                        }
                    }
                }

                if (scannedLines.length > 0) {
                    if (hasOrLines) {
                        const groups = [];
                        scannedLines.forEach(lineItem => {
                            if (lineItem.isOr) {
                                groups.push({ indicators: [...lineItem.indicators] });
                            } else {
                                if (groups.length > 0) {
                                    groups[groups.length - 1].indicators.push(...lineItem.indicators);
                                } else {
                                    groups.push({ indicators: [...lineItem.indicators] });
                                }
                            }
                        });
                        subfileControl.sfldspctl.indicators = { groups: groups, isOr: true };
                    } else {
                        const allIndicators = [];
                        scannedLines.forEach(lineItem => {
                            allIndicators.push(...lineItem.indicators);
                        });
                        subfileControl.sfldspctl.indicators = { groups: [{ indicators: allIndicators }], isOr: false };
                    }
                    Logger.stats(`Found SFLDSPCTL with ${subfileControl.sfldspctl.indicators.groups.length} group(s), isOr=${subfileControl.sfldspctl.indicators.isOr}`);
                }
            }
        }
    }

    const sflsizDs3Input = document.getElementById('sflsiz-ds3');
    const sflsizDs4Input = document.getElementById('sflsiz-ds4');
    const sflpagDs3Input = document.getElementById('sflpag-ds3');
    const sflpagDs4Input = document.getElementById('sflpag-ds4');
    const sfllinDs3Input = document.getElementById('sfllin-ds3');
    const sfllinDs4Input = document.getElementById('sfllin-ds4');

    const sflsizDs3Enabled = document.getElementById('sflsiz-ds3-enabled');
    const sflsizDs4Enabled = document.getElementById('sflsiz-ds4-enabled');
    const sflpagDs3Enabled = document.getElementById('sflpag-ds3-enabled');
    const sflpagDs4Enabled = document.getElementById('sflpag-ds4-enabled');
    const sfllinDs3Enabled = document.getElementById('sfllin-ds3-enabled');
    const sfllinDs4Enabled = document.getElementById('sfllin-ds4-enabled');

    if (sflsizDs3Input && sflsizDs3Enabled) {
        sflsizDs3Input.value = subfileControl.sflsiz.ds3;
        sflsizDs3Enabled.checked = subfileControl.sflsiz.ds3 !== '';
        sflsizDs3Input.disabled = !sflsizDs3Enabled.checked;
    }
    if (sflsizDs4Input && sflsizDs4Enabled) {
        sflsizDs4Input.value = subfileControl.sflsiz.ds4;
        sflsizDs4Enabled.checked = subfileControl.sflsiz.ds4 !== '';
        sflsizDs4Input.disabled = !sflsizDs4Enabled.checked;
    }
    if (sflpagDs3Input && sflpagDs3Enabled) {
        sflpagDs3Input.value = subfileControl.sflpag.ds3;
        sflpagDs3Enabled.checked = subfileControl.sflpag.ds3 !== '';
        sflpagDs3Input.disabled = !sflpagDs3Enabled.checked;
    }
    if (sflpagDs4Input && sflpagDs4Enabled) {
        sflpagDs4Input.value = subfileControl.sflpag.ds4;
        sflpagDs4Enabled.checked = subfileControl.sflpag.ds4 !== '';
        sflpagDs4Input.disabled = !sflpagDs4Enabled.checked;
    }
    if (sfllinDs3Input && sfllinDs3Enabled) {
        sfllinDs3Input.value = subfileControl.sfllin.ds3;
        sfllinDs3Enabled.checked = subfileControl.sfllin.ds3 !== '';
        sfllinDs3Input.disabled = !sfllinDs3Enabled.checked;
    }
    if (sfllinDs4Input && sfllinDs4Enabled) {
        sfllinDs4Input.value = subfileControl.sfllin.ds4;
        sfllinDs4Enabled.checked = subfileControl.sfllin.ds4 !== '';
        sfllinDs4Input.disabled = !sfllinDs4Enabled.checked;
    }

    if (sflsizDs3Enabled && sflsizDs3Input) {
        sflsizDs3Enabled.addEventListener('change', function() {
            sflsizDs3Input.disabled = !this.checked;
            if (!this.checked) {sflsizDs3Input.value = '';}
        });
    }
    if (sflsizDs4Enabled && sflsizDs4Input) {
        sflsizDs4Enabled.addEventListener('change', function() {
            sflsizDs4Input.disabled = !this.checked;
            if (!this.checked) {sflsizDs4Input.value = '';}
        });
    }
    if (sflpagDs3Enabled && sflpagDs3Input) {
        sflpagDs3Enabled.addEventListener('change', function() {
            sflpagDs3Input.disabled = !this.checked;
            if (!this.checked) {sflpagDs3Input.value = '';}
        });
    }
    if (sflpagDs4Enabled && sflpagDs4Input) {
        sflpagDs4Enabled.addEventListener('change', function() {
            sflpagDs4Input.disabled = !this.checked;
            if (!this.checked) {sflpagDs4Input.value = '';}
        });
    }
    if (sfllinDs3Enabled && sfllinDs3Input) {
        sfllinDs3Enabled.addEventListener('change', function() {
            sfllinDs3Input.disabled = !this.checked;
            if (!this.checked) {sfllinDs3Input.value = '';}
        });
    }
    if (sfllinDs4Enabled && sfllinDs4Input) {
        sfllinDs4Enabled.addEventListener('change', function() {
            sfllinDs4Input.disabled = !this.checked;
            if (!this.checked) {sfllinDs4Input.value = '';}
        });
    }

    const sfldspEnabled = document.getElementById('sfldsp-enabled');
    const sfldspBtn = document.getElementById('sfldsp-indicators-btn');

    if (sfldspEnabled && sfldspBtn) {
        const hasIndicators = subfileControl.sfldsp.indicators &&
                             subfileControl.sfldsp.indicators.groups &&
                             subfileControl.sfldsp.indicators.groups.length > 0;

        sfldspEnabled.checked = hasIndicators;
        sfldspBtn.disabled = !sfldspEnabled.checked;

        if (hasIndicators) {
            const key = 'sfldsp:enabled';
            indicatorConfigurations.set(key, subfileControl.sfldsp.indicators);
            setIndicatorButtonState(sfldspBtn, subfileControl.sfldsp.indicators);
        }

        sfldspEnabled.addEventListener('change', function() {
            sfldspBtn.disabled = !this.checked;
            if (!this.checked) {
                indicatorConfigurations.delete('sfldsp:enabled');
                setIndicatorButtonState(sfldspBtn, null);
            }
        });

        sfldspBtn.addEventListener('click', function() {
            openIBMiModal('sfldsp', 'enabled', 'SFLDSP indicators');
        });
    }

    const sfldspctlEnabled = document.getElementById('sfldspctl-enabled');
    const sfldspctlBtn = document.getElementById('sfldspctl-indicators-btn');

    if (sfldspctlEnabled && sfldspctlBtn) {
        const hasIndicators = subfileControl.sfldspctl.indicators &&
                             subfileControl.sfldspctl.indicators.groups &&
                             subfileControl.sfldspctl.indicators.groups.length > 0;

        sfldspctlEnabled.checked = hasIndicators;
        sfldspctlBtn.disabled = !sfldspctlEnabled.checked;

        if (hasIndicators) {
            const key = 'sfldspctl:enabled';
            indicatorConfigurations.set(key, subfileControl.sfldspctl.indicators);
            setIndicatorButtonState(sfldspctlBtn, subfileControl.sfldspctl.indicators);
        }

        sfldspctlEnabled.addEventListener('change', function() {
            sfldspctlBtn.disabled = !this.checked;
            if (!this.checked) {
                indicatorConfigurations.delete('sfldspctl:enabled');
                setIndicatorButtonState(sfldspctlBtn, null);
            }
        });

        sfldspctlBtn.addEventListener('click', function() {
            openIBMiModal('sfldspctl', 'enabled', 'SFLDSPCTL indicators');
        });
    }

    const applyBtn = document.getElementById('apply-subfile-control-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', applySubfileControl);
    }

    Logger.success('Subfile control keywords loaded');
}

function applySubfileControl(options) {
    const {
        Logger,
        vscode,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        getCurrentView,
        updateDocumentInEditor,
        generateDdsLineWithIndicators,
        indicatorConfigurations,
        showScreenProperties,
        parseDspfFields,
        updatePreviewView
    } = options;

    Logger.dds('Applying subfile control changes...');

    try {
        const currentDocument = getCurrentDocument();
        const currentRecord = getCurrentRecord();

        const sflsizDs3Enabled = document.getElementById('sflsiz-ds3-enabled')?.checked || false;
        const sflsizDs4Enabled = document.getElementById('sflsiz-ds4-enabled')?.checked || false;
        const sflpagDs3Enabled = document.getElementById('sflpag-ds3-enabled')?.checked || false;
        const sflpagDs4Enabled = document.getElementById('sflpag-ds4-enabled')?.checked || false;
        const sfllinDs3Enabled = document.getElementById('sfllin-ds3-enabled')?.checked || false;
        const sfllinDs4Enabled = document.getElementById('sfllin-ds4-enabled')?.checked || false;

        const sflsizDs3Value = sflsizDs3Enabled ? document.getElementById('sflsiz-ds3').value : '';
        const sflsizDs4Value = sflsizDs4Enabled ? document.getElementById('sflsiz-ds4').value : '';
        const sflpagDs3Value = sflpagDs3Enabled ? document.getElementById('sflpag-ds3').value : '';
        const sflpagDs4Value = sflpagDs4Enabled ? document.getElementById('sflpag-ds4').value : '';
        const sfllinDs3Value = sfllinDs3Enabled ? document.getElementById('sfllin-ds3').value : '';
        const sfllinDs4Value = sfllinDs4Enabled ? document.getElementById('sfllin-ds4').value : '';

        const sfldspEnabled = document.getElementById('sfldsp-enabled').checked;
        const sfldspctlEnabled = document.getElementById('sfldspctl-enabled').checked;

        const lines = currentDocument.split('\n');
        let inTargetRecord = false;
        let recordStartIndex = -1;
        let recordEndIndex = -1;

        for (let i = 0; i < lines.length; i++) {
            const trimmed = lines[i].trim();

            if (trimmed.includes(`R ${currentRecord}`) || trimmed.includes(`R  ${currentRecord}`)) {
                recordStartIndex = i;
                inTargetRecord = true;
                continue;
            }

            if (inTargetRecord && trimmed.match(/^A\s+R\s+\w+/)) {
                recordEndIndex = i;
                break;
            }
        }

        if (recordStartIndex === -1) {
            Logger.error('Could not find record start');
            vscode.postMessage({
                type: 'applyChangesError',
                message: 'Error: Could not find record definition'
            });
            return;
        }

        if (recordEndIndex === -1) {
            recordEndIndex = lines.length;
        }

        const keywordPositions = {
            sflsizDs3: -1,
            sflsizDs4: -1,
            sflpagDs3: -1,
            sflpagDs4: -1,
            sfllinDs3: -1,
            sfllinDs4: -1,
            sfldsp: -1,
            sfldspctl: -1
        };

        for (let i = recordStartIndex + 1; i < recordEndIndex; i++) {
            const trimmed = lines[i].trim();

            if (trimmed.includes('SFLSIZ(') && trimmed.includes('*DS3')) {
                keywordPositions.sflsizDs3 = i;
            } else if (trimmed.includes('SFLSIZ(') && trimmed.includes('*DS4')) {
                keywordPositions.sflsizDs4 = i;
            } else if (trimmed.includes('SFLPAG(') && trimmed.includes('*DS3')) {
                keywordPositions.sflpagDs3 = i;
            } else if (trimmed.includes('SFLPAG(') && trimmed.includes('*DS4')) {
                keywordPositions.sflpagDs4 = i;
            } else if (trimmed.includes('SFLLIN(') && trimmed.includes('*DS3')) {
                keywordPositions.sfllinDs3 = i;
            } else if (trimmed.includes('SFLLIN(') && trimmed.includes('*DS4')) {
                keywordPositions.sfllinDs4 = i;
            } else if (trimmed.includes('SFLDSPCTL')) {
                keywordPositions.sfldspctl = i;
            } else if (trimmed.includes('SFLDSP')) {
                keywordPositions.sfldsp = i;
            }
        }

        let changesCount = 0;
        let lastInsertPosition = recordStartIndex;

        if (sflsizDs3Value) {
            const padded = sflsizDs3Value.padStart(4, '0');
            const newLine = `     A  *DS3                                SFLSIZ(${padded})`;
            if (keywordPositions.sflsizDs3 !== -1) {
                lines[keywordPositions.sflsizDs3] = newLine;
                Logger.dds(`Updated SFLSIZ DS3 at line ${keywordPositions.sflsizDs3}`);
                lastInsertPosition = keywordPositions.sflsizDs3;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLSIZ DS3 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflsizDs3 !== -1) {
            lines.splice(keywordPositions.sflsizDs3, 1);
            Logger.dds('Removed SFLSIZ DS3');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflsizDs3) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sflsizDs4Value) {
            const padded = sflsizDs4Value.padStart(4, '0');
            const newLine = `     A  *DS4                                SFLSIZ(${padded})`;
            if (keywordPositions.sflsizDs4 !== -1) {
                lines[keywordPositions.sflsizDs4] = newLine;
                Logger.dds(`Updated SFLSIZ DS4 at line ${keywordPositions.sflsizDs4}`);
                lastInsertPosition = keywordPositions.sflsizDs4;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLSIZ DS4 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflsizDs4 !== -1) {
            lines.splice(keywordPositions.sflsizDs4, 1);
            Logger.dds('Removed SFLSIZ DS4');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflsizDs4) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sflpagDs3Value) {
            const padded = sflpagDs3Value.padStart(4, '0');
            const newLine = `     A  *DS3                                SFLPAG(${padded})`;
            if (keywordPositions.sflpagDs3 !== -1) {
                lines[keywordPositions.sflpagDs3] = newLine;
                Logger.dds(`Updated SFLPAG DS3 at line ${keywordPositions.sflpagDs3}`);
                lastInsertPosition = keywordPositions.sflpagDs3;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLPAG DS3 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflpagDs3 !== -1) {
            lines.splice(keywordPositions.sflpagDs3, 1);
            Logger.dds('Removed SFLPAG DS3');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflpagDs3) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sflpagDs4Value) {
            const padded = sflpagDs4Value.padStart(4, '0');
            const newLine = `     A  *DS4                                SFLPAG(${padded})`;
            if (keywordPositions.sflpagDs4 !== -1) {
                lines[keywordPositions.sflpagDs4] = newLine;
                Logger.dds(`Updated SFLPAG DS4 at line ${keywordPositions.sflpagDs4}`);
                lastInsertPosition = keywordPositions.sflpagDs4;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLPAG DS4 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sflpagDs4 !== -1) {
            lines.splice(keywordPositions.sflpagDs4, 1);
            Logger.dds('Removed SFLPAG DS4');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sflpagDs4) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sfllinDs3Value) {
            const newLine = `     A  *DS3                                SFLLIN(${sfllinDs3Value})`;
            if (keywordPositions.sfllinDs3 !== -1) {
                lines[keywordPositions.sfllinDs3] = newLine;
                Logger.dds(`Updated SFLLIN DS3 at line ${keywordPositions.sfllinDs3}`);
                lastInsertPosition = keywordPositions.sfllinDs3;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLLIN DS3 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sfllinDs3 !== -1) {
            lines.splice(keywordPositions.sfllinDs3, 1);
            Logger.dds('Removed SFLLIN DS3');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfllinDs3) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sfllinDs4Value) {
            const newLine = `     A  *DS4                                SFLLIN(${sfllinDs4Value})`;
            if (keywordPositions.sfllinDs4 !== -1) {
                lines[keywordPositions.sfllinDs4] = newLine;
                Logger.dds(`Updated SFLLIN DS4 at line ${keywordPositions.sfllinDs4}`);
                lastInsertPosition = keywordPositions.sfllinDs4;
                changesCount++;
            } else {
                lastInsertPosition++;
                lines.splice(lastInsertPosition, 0, newLine);
                Logger.dds(`Inserted SFLLIN DS4 at line ${lastInsertPosition}`);
                Object.keys(keywordPositions).forEach(key => {
                    if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key]++;}
                });
                recordEndIndex++;
                changesCount++;
            }
        } else if (keywordPositions.sfllinDs4 !== -1) {
            lines.splice(keywordPositions.sfllinDs4, 1);
            Logger.dds('Removed SFLLIN DS4');
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfllinDs4) {keywordPositions[key]--;}
            });
            recordEndIndex--;
            changesCount++;
        }

        if (sfldspEnabled) {
            const indicatorData = indicatorConfigurations.get('sfldsp:enabled');

            if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                const generated = generateDdsLineWithIndicators('SFLDSP', indicatorData);
                const newLines = generated.split('\n');

                if (keywordPositions.sfldsp !== -1) {
                    let linesToRemove = 1;
                    let j = keywordPositions.sfldsp - 1;
                    while (j >= recordStartIndex) {
                        const prevLine = lines[j];
                        const prevTrimmed = prevLine.trim();
                        const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                        if (!isIndicatorOnly) { break; }
                        linesToRemove++;
                        j--;
                    }

                    lines.splice(keywordPositions.sfldsp - (linesToRemove - 1), linesToRemove, ...newLines);
                    Logger.dds(`Updated SFLDSP: removed ${linesToRemove} lines, inserted ${newLines.length} lines`);
                    lastInsertPosition = keywordPositions.sfldsp;

                    const delta = newLines.length - linesToRemove;
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] > keywordPositions.sfldsp) {keywordPositions[key] += delta;}
                    });
                    recordEndIndex += delta;
                    changesCount++;
                } else {
                    lastInsertPosition++;
                    lines.splice(lastInsertPosition, 0, ...newLines);
                    Logger.dds(`Inserted SFLDSP: ${newLines.length} line(s)`);
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] >= lastInsertPosition) {keywordPositions[key] += newLines.length;}
                    });
                    recordEndIndex += newLines.length;
                    changesCount++;
                }
            }
        } else if (keywordPositions.sfldsp !== -1) {
            let linesToRemove = 1;
            let j = keywordPositions.sfldsp - 1;
            while (j >= recordStartIndex) {
                const prevLine = lines[j];
                const prevTrimmed = prevLine.trim();
                const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                if (!isIndicatorOnly) { break; }
                linesToRemove++;
                j--;
            }

            lines.splice(keywordPositions.sfldsp - (linesToRemove - 1), linesToRemove);
            Logger.dds(`Removed SFLDSP (${linesToRemove} line(s))`);
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfldsp) {keywordPositions[key] -= linesToRemove;}
            });
            recordEndIndex -= linesToRemove;
            changesCount++;
        }

        if (sfldspctlEnabled) {
            const indicatorData = indicatorConfigurations.get('sfldspctl:enabled');

            if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                const generated = generateDdsLineWithIndicators('SFLDSPCTL', indicatorData);
                const newLines = generated.split('\n');

                if (keywordPositions.sfldspctl !== -1) {
                    let linesToRemove = 1;
                    let j = keywordPositions.sfldspctl - 1;
                    while (j >= recordStartIndex) {
                        const prevLine = lines[j];
                        const prevTrimmed = prevLine.trim();
                        const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                        if (!isIndicatorOnly) { break; }
                        linesToRemove++;
                        j--;
                    }

                    lines.splice(keywordPositions.sfldspctl - (linesToRemove - 1), linesToRemove, ...newLines);
                    Logger.dds(`Updated SFLDSPCTL: removed ${linesToRemove} lines, inserted ${newLines.length} lines`);

                    const delta = newLines.length - linesToRemove;
                    Object.keys(keywordPositions).forEach(key => {
                        if (keywordPositions[key] > keywordPositions.sfldspctl) {keywordPositions[key] += delta;}
                    });
                    recordEndIndex += delta;
                    changesCount++;
                } else {
                    lastInsertPosition++;
                    lines.splice(lastInsertPosition, 0, ...newLines);
                    Logger.dds(`Inserted SFLDSPCTL: ${newLines.length} line(s)`);
                    recordEndIndex += newLines.length;
                    changesCount++;
                }
            }
        } else if (keywordPositions.sfldspctl !== -1) {
            let linesToRemove = 1;
            let j = keywordPositions.sfldspctl - 1;
            while (j >= recordStartIndex) {
                const prevLine = lines[j];
                const prevTrimmed = prevLine.trim();
                const isIndicatorOnly = /^A[O\s]\s*[N\d\s]+$/.test(prevTrimmed) && prevLine.substring(18).trim() === '';
                if (!isIndicatorOnly) { break; }
                linesToRemove++;
                j--;
            }

            lines.splice(keywordPositions.sfldspctl - (linesToRemove - 1), linesToRemove);
            Logger.dds(`Removed SFLDSPCTL (${linesToRemove} line(s))`);
            Object.keys(keywordPositions).forEach(key => {
                if (keywordPositions[key] > keywordPositions.sfldspctl) {keywordPositions[key] -= linesToRemove;}
            });
            recordEndIndex -= linesToRemove;
            changesCount++;
        }

        const nextDocument = lines.join('\n');
        setCurrentDocument(nextDocument);
        updateDocumentInEditor();

        Logger.success('Subfile control keywords applied successfully');

        const message = changesCount === 0
            ? 'No changes were made'
            : `Successfully updated ${changesCount} subfile control keyword${changesCount > 1 ? 's' : ''}`;
        vscode.postMessage({
            type: 'applyChangesSuccess',
            message: message
        });

        showScreenProperties();
        requestAnimationFrame(() => {
            const subfileTab = document.querySelector('.properties-tab[data-tab="subfile-control"]');
            if (subfileTab) {
                subfileTab.click();
            }
        });

        const activeView = getCurrentView ? getCurrentView() : 'designer';
        if (activeView === 'preview' && updatePreviewView) {
            updatePreviewView();
        } else if (activeView === 'designer' && parseDspfFields) {
            parseDspfFields(nextDocument);
        }
    } catch (error) {
        Logger.error('Error applying subfile control:', error);
        vscode.postMessage({
            type: 'applyChangesError',
            message: 'Error updating subfile control: ' + error.message
        });
    }
}

function applySflpagRepetition(options) {
    const {
        fields,
        targetRecord,
        subfileRelationship,
        getSflpagValue,
        Logger
    } = options;

    if (!subfileRelationship) {
        return fields;
    }

    const sflctlRecord = subfileRelationship.sflctlRecord;
    const sflpagValue = getSflpagValue(sflctlRecord);

    if (sflpagValue <= 1) {
        return fields;
    }

    Logger.debug(`Applying SFLPAG repetition: ${sflpagValue} times for ${targetRecord} (from ${sflctlRecord})`);

    const originalFields = [...fields];
    const resultFields = [...fields];

    for (let repeat = 1; repeat < sflpagValue; repeat++) {
        originalFields.forEach(field => {
            const shouldRepeat = (
                (targetRecord === subfileRelationship.sflRecord && !field.isBackgroundRecord) ||
                (targetRecord === subfileRelationship.sflctlRecord && field.isBackgroundRecord)
            );

            if (shouldRepeat) {
                const visualCopy = {
                    ...field,
                    row: field.row + repeat,
                    isVisualCopy: true
                };
                resultFields.push(visualCopy);
            }
        });
    }

    return resultFields;
}

function getSflpagValue(options) {
    const {
        sflctlRecordName,
        currentDocument,
        currentDisplaySize,
        DisplaySizeUtils,
        Logger
    } = options;

    if (!sflctlRecordName) {
        return 0;
    }

    const lines = currentDocument.split('\n');
    let inSflctlRecord = false;
    let sflpagValue = 0;
    const displayMarker = currentDisplaySize === 'DS3' ? '*DS3' : '*DS4';

    const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);

    for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trim();

        if (trimmed.includes(`R ${sflctlRecordName}`) || trimmed.includes(`R  ${sflctlRecordName}`)) {
            if (trimmed.includes('SFLCTL(')) {
                inSflctlRecord = true;
                continue;
            }

            for (let j = i + 1; j < lines.length; j++) {
                const nextLine = lines[j].trim();
                if (nextLine.match(/^A\s+R\s+\w+/)) {
                    break;
                }
                if (nextLine.includes('SFLCTL(')) {
                    inSflctlRecord = true;
                    break;
                }
            }
            continue;
        }

        if (inSflctlRecord && trimmed.match(/^A\s+R\s+\w+/)) {
            break;
        }

        if (inSflctlRecord && trimmed.includes('SFLPAG(')) {
            const match = trimmed.match(/SFLPAG\((\d+)\)/);
            if (match) {
                if (trimmed.includes(displayMarker)) {
                    sflpagValue = parseInt(match[1], 10);
                    Logger.stats(`Found SFLPAG for ${displayMarker}: ${sflpagValue}`);
                    break;
                } else if (displayConfig.singleSize) {
                    if (displayConfig.singleSize === currentDisplaySize) {
                        sflpagValue = parseInt(match[1], 10);
                        Logger.stats(`Found SFLPAG (single size ${displayConfig.singleSize}): ${sflpagValue}`);
                        break;
                    }
                }
            }
        }
    }

    return sflpagValue;
}

function getSubfileRelationship(options) {
    const {
        recordName,
        currentDocument,
        getRecordType,
        Logger
    } = options;

    const lines = currentDocument.split('\n');
    const recordType = getRecordType(recordName);

    if (recordType === 'SFLCTL') {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes(`R ${recordName}`) || line.includes(`R  ${recordName}`)) {
                if (line.includes('SFLCTL(')) {
                    const match = line.match(/SFLCTL\((\w+)\)/);
                    if (match) {
                        const sflRecord = match[1];
                        Logger.debug(`Found SFLCTL relationship (same line): ${recordName} controls ${sflRecord}`);
                        return {
                            sflRecord: sflRecord,
                            sflctlRecord: recordName,
                            companionRecord: sflRecord
                        };
                    }
                }

                for (let j = i + 1; j < lines.length; j++) {
                    const nextLine = lines[j];
                    if (nextLine.match(/^\s{5}A\s+R\s+\w+/)) {
                        break;
                    }
                    if (nextLine.includes('SFLCTL(')) {
                        const match = nextLine.match(/SFLCTL\((\w+)\)/);
                        if (match) {
                            const sflRecord = match[1];
                            Logger.debug(`Found SFLCTL relationship (next line): ${recordName} controls ${sflRecord}`);
                            return {
                                sflRecord: sflRecord,
                                sflctlRecord: recordName,
                                companionRecord: sflRecord
                            };
                        }
                    }
                }
                break;
            }
        }
    }

    if (recordType === 'SFL') {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const recordMatch = line.match(/^\s{5}A\s+R\s+(\w+)/);
            if (recordMatch) {
                const ctlRecordName = recordMatch[1];

                const sflctlMatch = line.match(/SFLCTL\((\w+)\)/);
                if (sflctlMatch && sflctlMatch[1] === recordName) {
                    Logger.debug(`Found SFL relationship (same line): ${recordName} is controlled by ${ctlRecordName}`);
                    return {
                        sflRecord: recordName,
                        sflctlRecord: ctlRecordName,
                        companionRecord: ctlRecordName
                    };
                }

                for (let j = i + 1; j < lines.length; j++) {
                    const nextLine = lines[j];
                    if (nextLine.match(/^\s{5}A\s+R\s+\w+/)) {
                        break;
                    }
                    const nextMatch = nextLine.match(/SFLCTL\((\w+)\)/);
                    if (nextMatch && nextMatch[1] === recordName) {
                        Logger.debug(`Found SFL relationship (next line): ${recordName} is controlled by ${ctlRecordName}`);
                        return {
                            sflRecord: recordName,
                            sflctlRecord: ctlRecordName,
                            companionRecord: ctlRecordName
                        };
                    }
                }
            }
        }
    }

    return null;
}


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFunctionKeyRow: () => (/* binding */ createFunctionKeyRow),
/* harmony export */   loadFunctionKeys: () => (/* binding */ loadFunctionKeys),
/* harmony export */   saveFunctionKeys: () => (/* binding */ saveFunctionKeys)
/* harmony export */ });
function loadFunctionKeys(options) {
    const { getCurrentDocument, getCurrentRecord, createFunctionKeyRow } = options;
    const container = document.getElementById('function-keys-list');
    if (!container) {return;}

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();

    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    const functionKeysMap = {};

    for (let line of lines) {
        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            break;
        }

        if (inTargetRecord) {
            const cfMatch = line.match(/CF(\d+)\((\d+)(?:\s+'([^']*)')?\)/i);
            const caMatch = line.match(/CA(\d+)\((\d+)(?:\s+'([^']*)')?\)/i);

            if (cfMatch) {
                functionKeysMap[`F${parseInt(cfMatch[1])}`] = {
                    type: 'CF',
                    indicator: cfMatch[2],
                    description: cfMatch[3] || ''
                };
            } else if (caMatch) {
                functionKeysMap[`F${parseInt(caMatch[1])}`] = {
                    type: 'CA',
                    indicator: caMatch[2],
                    description: caMatch[3] || ''
                };
            }
        }
    }

    container.innerHTML = '';

    for (let i = 1; i <= 24; i++) {
        const key = `F${i}`;
        const fkData = functionKeysMap[key] || { type: '', indicator: '', description: '' };
        container.appendChild(createFunctionKeyRow({ fk: { key, ...fkData } }));
    }
}

function createFunctionKeyRow(options) {
    const { fk = null, key, type, indicator, description, index = null, IdGenerator, saveFunctionKeys } = options;
    const row = document.createElement('div');
    row.className = 'function-key-row';
    const rowId = IdGenerator.generateUniqueId('fk-row');
    row.dataset.rowId = rowId;
    row.style.cssText = 'display: grid; grid-template-columns: 70px 240px 70px 1fr; gap: 8px; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; margin-bottom: 8px; align-items: center; min-width: 600px;';

    const resolvedFk = fk || { key, type, indicator, description };
    const resolvedKey = resolvedFk && resolvedFk.key ? resolvedFk.key : 'F1';
    const resolvedType = resolvedFk && resolvedFk.type ? resolvedFk.type : '';
    const resolvedIndicator = resolvedFk && resolvedFk.indicator ? resolvedFk.indicator : '';
    const resolvedDescription = resolvedFk && resolvedFk.description ? resolvedFk.description : '';

    row.innerHTML = `
        <select class="fk-key" style="width: 100%; padding: 4px;">
            ${generateFunctionKeyOptions(resolvedKey)}
        </select>
        <div style="display: flex; gap: 10px; align-items: center;">
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
                <input type="radio" name="type-${rowId}" value="" ${resolvedType === '' ? 'checked' : ''} />
                <span style="font-size: 12px;">Unspecified</span>
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
                <input type="radio" name="type-${rowId}" value="CA" ${resolvedType === 'CA' ? 'checked' : ''} />
                <span style="font-size: 12px;">Attention</span>
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer; white-space: nowrap;">
                <input type="radio" name="type-${rowId}" value="CF" ${resolvedType === 'CF' ? 'checked' : ''} />
                <span style="font-size: 12px;">Function</span>
            </label>
        </div>
        <input type="number" class="fk-indicator" value="${resolvedIndicator}" placeholder="Ind" min="1" max="99" style="width: 100%; padding: 4px; text-align: center;" />
        <input type="text" class="fk-description" value="${resolvedDescription}" placeholder="Description" style="width: 100%; padding: 4px; min-width: 150px;" />
    `;

    row.querySelectorAll('select, input').forEach(el => {
        el.addEventListener('change', saveFunctionKeys);
        el.addEventListener('blur', saveFunctionKeys);
    });

    return row;
}

function saveFunctionKeys(options) {
    const {
        Logger,
        isReadOnly,
        getCurrentDocument,
        setCurrentDocument,
        getCurrentRecord,
        updateDocumentInEditor
    } = options;

    if (isReadOnly) {
        Logger.warn('Cannot save function keys in read-only mode');
        return;
    }

    Logger.ui('Saving function keys...');

    const container = document.getElementById('function-keys-list');
    if (!container) {return;}

    const configuredKeys = [];
    const rows = container.querySelectorAll('.function-key-row');

    rows.forEach(row => {
        const keySelect = row.querySelector('.fk-key');
        const typeRadios = row.querySelectorAll('input[type="radio"]');
        const indicatorInput = row.querySelector('.fk-indicator');
        const descriptionInput = row.querySelector('.fk-description');

        const key = keySelect.value;
        let type = '';
        typeRadios.forEach(radio => {
            if (radio.checked) {
                type = radio.value;
            }
        });
        const indicator = indicatorInput.value.trim();
        const description = descriptionInput.value.trim();

        if (type && indicator) {
            configuredKeys.push({ key, type, indicator, description });
        }
    });

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();
    const lines = currentDocument.split('\n');
    let inTargetRecord = false;
    let recordLineIndex = -1;
    let insertIndex = -1;
    let recordStartIndex = -1;
    const linesToRemove = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes(`R ${currentRecord}`) || line.includes(`R  ${currentRecord}`)) {
            inTargetRecord = true;
            recordStartIndex = i;
            recordLineIndex = i;
            continue;
        }

        if (inTargetRecord && line.match(/^\s*A\s+R\s+\w+/)) {
            insertIndex = i;
            break;
        }

        if (inTargetRecord) {
            if (line.match(/CF\d+\(/) || line.match(/CA\d+\(/) ||
                line.includes('PAGEDOWN(') || line.includes('PAGEUP(')) {
                linesToRemove.push(i);
            }
        }
    }

    if (recordLineIndex !== -1) {
        insertIndex = recordLineIndex + 1;
    } else if (insertIndex === -1) {
        insertIndex = lines.length;
    }

    for (let i = linesToRemove.length - 1; i >= 0; i--) {
        const removedIndex = linesToRemove[i];
        lines.splice(removedIndex, 1);

        if (removedIndex < insertIndex) {
            insertIndex--;
        }
    }

    const newLines = [];
    configuredKeys.forEach(fk => {
        let keyword = '';

        if (fk.key === 'PAGEDOWN' || fk.key === 'PAGEUP') {
            keyword = fk.key;
        } else {
            const fNum = fk.key.substring(1).padStart(2, '0');
            keyword = `${fk.type}${fNum}`;
        }

        const indicator = fk.indicator.padStart(2, '0');
        const desc = fk.description ? ` '${fk.description}'` : '';
        const line = `     A                                      ${keyword}(${indicator}${desc})`;
        newLines.push(line);
    });

    lines.splice(insertIndex, 0, ...newLines);

    const nextDocument = lines.join('\n');
    setCurrentDocument(nextDocument);
    updateDocumentInEditor();

    Logger.success(`Saved ${configuredKeys.length} function keys to DDS`);
}

function generateFunctionKeyOptions(selectedKey) {
    const keys = [];
    for (let i = 1; i <= 24; i++) {
        keys.push(`F${i}`);
    }

    return keys.map(k => `<option value="${k}" ${k === selectedKey ? 'selected' : ''}>${k}</option>`).join('');
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeDeleteField: () => (/* binding */ executeDeleteField),
/* harmony export */   showDeleteConfirmation: () => (/* binding */ showDeleteConfirmation)
/* harmony export */ });
function showDeleteConfirmation(options) {
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

function executeDeleteField(options) {
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


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updatePreviewView: () => (/* binding */ updatePreviewView)
/* harmony export */ });
function updatePreviewView(options) {
    const {
        Logger,
        ScreenCoordinates,
        parseDspfForPreview,
        generateWindowFieldHtml,
        generateFieldHtml,
        setupPreviewDisplaySizeListeners,
        updateCanvasSize,
        setupRulers,
        parseDspfFields,
        getCurrentDocument,
        getCurrentRecord,
        getCurrentDisplaySize,
        setCurrentDisplaySize,
        applyDefaultZoomForDisplaySize,
        updatePreviewView: updatePreviewViewHandler
    } = options;

    const previewContainer = document.getElementById('preview-container');
    if (!previewContainer) {return;}

    const currentDocument = getCurrentDocument();
    const currentRecord = getCurrentRecord();
    const currentDisplaySize = getCurrentDisplaySize();

    const parsedScreen = parseDspfForPreview(currentDocument, currentRecord);

    const rows = currentDisplaySize === 'DS3' ? 24 : 27;
    const cols = currentDisplaySize === 'DS3' ? 80 : 132;

    let html = `
        <div class="header">
            <h2>DSPF Preview - ${currentRecord || parsedScreen.recordName || 'DISPLAY'} (${currentDisplaySize})</h2>
            <!-- Display Size Selection for Preview -->
            <div style="display: flex; align-items: center; gap: 15px; border: 1px solid #555; padding: 5px 10px; border-radius: 3px; margin: 10px auto; width: fit-content; background-color: #1e1e1e;">
                <label style="margin: 0; color: #cccccc; cursor: pointer;">
                    <input type="radio" name="preview-display-size" value="DS3" ${currentDisplaySize === 'DS3' ? 'checked' : ''}>
                    <span style="margin-left: 5px;">24 x 80 (*DS3)</span>
                </label>
                <label style="margin: 0; color: #cccccc; cursor: pointer;">
                    <input type="radio" name="preview-display-size" value="DS4" ${currentDisplaySize === 'DS4' ? 'checked' : ''}>
                    <span style="margin-left: 5px;">27 x 132 (*DS4)</span>
                </label>
            </div>
        </div>
        <div class="screen" style="width: ${ScreenCoordinates.getWidthInPixels(cols)}px; height: ${ScreenCoordinates.getHeightInPixels(rows)}px;">
    `;

    for (let line = 1; line <= rows; line++) {
        const lineContent = ''.padEnd(cols, ' ');
        const lineTop = ScreenCoordinates.toPixels(line, 1).top;
        html += `<div class="screen-line" style="top: ${lineTop}px; width: ${ScreenCoordinates.getWidthInPixels(cols)}px;">${lineContent}</div>\n`;
    }

    if (parsedScreen.windowDimensions) {
        const win = parsedScreen.windowDimensions;
        const winPos = ScreenCoordinates.toPixels(win.row, win.col);
        const winTop = winPos.top;
        const winLeft = winPos.left;
        const winHeight = ScreenCoordinates.getHeightInPixels(win.height);
        const winWidth = ScreenCoordinates.getWidthInPixels(win.width + 4);

        html += `<div class="window-frame" style="
            position: absolute;
            top: ${winTop}px;
            left: ${winLeft}px;
            width: ${winWidth}px;
            height: ${winHeight}px;
            border: 2px dotted #00FF00;
            pointer-events: none;
            z-index: 5;
        "></div>`;

        Logger.window(`Adding window frame at ${win.row},${win.col} size ${win.height}x${win.width}`);
    }

    parsedScreen.fields.forEach(field => {
        if (parsedScreen.windowDimensions) {
            html += generateWindowFieldHtml(field, parsedScreen.windowDimensions);
        } else {
            html += generateFieldHtml(field);
        }
    });

    html += `</div>`;

    previewContainer.innerHTML = html;

    setupPreviewDisplaySizeListeners({
        Logger,
        getCurrentDisplaySize,
        setCurrentDisplaySize,
        updateCanvasSize,
        setupRulers,
        parseDspfFields,
        getCurrentDocument,
        applyDefaultZoomForDisplaySize,
        updatePreviewView: updatePreviewViewHandler
    });

    previewContainer.querySelectorAll('.input-field').forEach(field => {
        field.addEventListener('click', function() {
            this.contentEditable = true;
            this.focus();
        });

        field.addEventListener('blur', function() {
            this.contentEditable = false;
        });
    });
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateReadOnlyMode: () => (/* binding */ updateReadOnlyMode)
/* harmony export */ });
function updateReadOnlyMode({
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


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFreshFieldFromDds: () => (/* binding */ getFreshFieldFromDds),
/* harmony export */   selectField: () => (/* binding */ selectField)
/* harmony export */ });
function getFreshFieldFromDds({
    field,
    Logger,
    getCurrentDocument,
    getCurrentRecord,
    parseDspfForPreview,
    getFields,
    updateFieldAtIndex
}) {
    if (!field || !getCurrentDocument) {
        return field;
    }

    const currentDocument = getCurrentDocument();
    if (!currentDocument) {
        return field;
    }

    Logger.debug(`Re-parsing field ${field.name} from DDS to get fresh indicator data`);

    const parsedData = parseDspfForPreview(currentDocument, getCurrentRecord ? getCurrentRecord() : null);

    const freshField = parsedData.fields.find(f =>
        f.name === field.name &&
        f.row === field.row &&
        f.col === field.col &&
        f.type === field.type
    );

    if (freshField) {
        freshField.id = field.id;
        const fields = getFields ? getFields() : [];
        const fieldIndex = fields.findIndex(f => f.id === field.id);
        if (fieldIndex >= 0 && updateFieldAtIndex) {
            updateFieldAtIndex(fieldIndex, freshField);
        }
        Logger.debug(`Fresh field data obtained with ${Object.keys(freshField.colorIndicators || {}).length} color indicators, ${Object.keys(freshField.attributeIndicators || {}).length} attribute indicators`);
        return freshField;
    }

    Logger.warn(`Could not find fresh data for field ${field.name}, using cached data`);
    return field;
}

function selectField({
    field,
    Logger,
    deselectAllFields,
    getSelectedField,
    setSelectedField,
    indicatorConfigurations,
    getFreshFieldFromDds,
    showFieldProperties
}) {
    Logger.ui(`[SELECT] Attempting to select field: ${field.name} (id: ${field.id})`);
    Logger.ui(`[SELECT] Field isVisualCopy: ${field.isVisualCopy || false}`);

    if (deselectAllFields) {
        deselectAllFields();
    }

    const previousSelectedField = getSelectedField ? getSelectedField() : null;
    if (previousSelectedField && previousSelectedField.id !== field.id) {
        Logger.debug('Clearing indicatorConfigurations when switching fields');
        indicatorConfigurations.clear();
    }

    if (setSelectedField) {
        setSelectedField(field);
    }
    Logger.ui(`[SELECT] selectedField set to: ${field.name}`);

    const fieldElement = document.querySelector(`[data-field-id="${field.id}"]`);
    Logger.ui(`[SELECT] Found element with selector [data-field-id="${field.id}"]: ${fieldElement ? 'YES' : 'NO'}`);

    if (fieldElement) {
        Logger.ui(`[SELECT] Element classes before: ${fieldElement.className}`);
        fieldElement.classList.add('selected');
        Logger.ui(`[SELECT] Element classes after: ${fieldElement.className}`);
        Logger.ui(`[SELECT] Element display: ${window.getComputedStyle(fieldElement).display}`);
        Logger.ui(`[SELECT] Element visibility: ${window.getComputedStyle(fieldElement).visibility}`);
    } else {
        Logger.error(`[SELECT] Could not find element with data-field-id="${field.id}"`);
        const allFields = document.querySelectorAll('[data-field-id]');
        Logger.ui(`[SELECT] Total fields in DOM: ${allFields.length}`);
        allFields.forEach((el, idx) => {
            if (idx < 5) {
                Logger.ui(`[SELECT]   - ${el.dataset.fieldId} (${el.className})`);
            }
        });
    }

    const freshField = getFreshFieldFromDds ? getFreshFieldFromDds(field) : null;
    if (showFieldProperties) {
        showFieldProperties(freshField || field);
    }
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deselectAllFields: () => (/* binding */ deselectAllFields)
/* harmony export */ });
function deselectAllFields({
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


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editField: () => (/* binding */ editField)
/* harmony export */ });
function editField({
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


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollToRecordInSource: () => (/* binding */ scrollToRecordInSource)
/* harmony export */ });
function scrollToRecordInSource(options) {
    const {
        currentRecord,
        currentDocument,
        Logger
    } = options;

    if (!currentRecord) {
        if (Logger) {
            Logger.warn('No current record to scroll to');
        }
        return;
    }

    const sourceEditor = document.getElementById('source-editor');
    if (!sourceEditor) {
        if (Logger) {
            Logger.error('Source editor not found');
        }
        return;
    }

    const lines = currentDocument.split('\n');
    let recordLineIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const recordMatch = line.match(/^\s*A\*?\s+R\s+(\w+)/i);
        if (recordMatch && recordMatch[1].toUpperCase() === currentRecord.toUpperCase()) {
            recordLineIndex = i;
            break;
        }
    }

    if (recordLineIndex === -1) {
        if (Logger) {
            Logger.warn(`Record ${currentRecord} not found in source`);
        }
        return;
    }

    if (Logger) {
        Logger.debug(`Scrolling to record ${currentRecord} at line ${recordLineIndex + 1}`);
    }

    const lineHeight = 21;
    const scrollPosition = recordLineIndex * lineHeight;
    const offset = 100;
    sourceEditor.scrollTop = Math.max(0, scrollPosition - offset);
}


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigateToNextRecord: () => (/* binding */ navigateToNextRecord),
/* harmony export */   navigateToPreviousRecord: () => (/* binding */ navigateToPreviousRecord)
/* harmony export */ });
function navigateToPreviousRecord({
    Logger,
    vscode,
    getAllRecords,
    getCurrentRecord,
    getCurrentView
}) {
    const allRecords = getAllRecords ? getAllRecords() : [];
    if (!allRecords || allRecords.length === 0) {
        Logger.warn('No records available for navigation');
        return;
    }

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const currentIndex = allRecords.findIndex(r => r.name === currentRecord);
    if (currentIndex > 0) {
        const prevRecord = allRecords[currentIndex - 1];
        Logger.ui('Navigating to previous record:', prevRecord.name, 'preserving view:', getCurrentView ? getCurrentView() : undefined);
        vscode.postMessage({
            type: 'navigateToRecord',
            recordName: prevRecord.name,
            preserveView: getCurrentView ? getCurrentView() : undefined
        });
    } else {
        Logger.info('Already at first record');
    }
}

function navigateToNextRecord({
    Logger,
    vscode,
    getAllRecords,
    getCurrentRecord,
    getCurrentView
}) {
    const allRecords = getAllRecords ? getAllRecords() : [];
    if (!allRecords || allRecords.length === 0) {
        Logger.warn('No records available for navigation');
        return;
    }

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const currentIndex = allRecords.findIndex(r => r.name === currentRecord);
    if (currentIndex < allRecords.length - 1) {
        const nextRecord = allRecords[currentIndex + 1];
        Logger.ui('Navigating to next record:', nextRecord.name, 'preserving view:', getCurrentView ? getCurrentView() : undefined);
        vscode.postMessage({
            type: 'navigateToRecord',
            recordName: nextRecord.name,
            preserveView: getCurrentView ? getCurrentView() : undefined
        });
    } else {
        Logger.info('Already at last record');
    }
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createField: () => (/* binding */ createField)
/* harmony export */ });
// Función para crear los campos desde el toolbox
function createField({
    type,
    row,
    col,
    Logger,
    fields,
    generateUniqueFieldName,
    generateId,
    getDefaultLength,
    getWindowDimensions,
    getCurrentRecord,
    getCurrentDisplaySize,
    renderField,
    renderWindowField,
    getSubfileRelationship,
    getSflpagValue,
    selectField,
    addFieldToDds,
    showFieldProperties
}) {
    let fieldName;
    let ddsType;
    let usage;
    let dataType;
    let decimals;
    let shift;
    let isKeyword = false;

    if (type === 'text') {
        fieldName = generateUniqueFieldName('TXT_');
        ddsType = 'A';
        usage = 'O';
        dataType = 'character';
        decimals = 0;
    } else if (type === 'number') {
        fieldName = generateUniqueFieldName('NUM_');
        ddsType = 'Y';
        usage = 'I';
        dataType = 'zoned';
        decimals = 0;
        shift = 'Y';
    } else if (type === 'keyword-date') {
        fieldName = 'DATE';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'keyword-time') {
        fieldName = 'TIME';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'keyword-sysname') {
        fieldName = 'SYSNAME';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'keyword-user') {
        fieldName = 'USER';
        ddsType = '';
        usage = '';
        dataType = 'keyword';
        decimals = 0;
        isKeyword = true;
    } else if (type === 'field-date') {
        fieldName = generateUniqueFieldName('DATE_');
        ddsType = 'L';
        usage = 'O';
        dataType = 'date';
        decimals = 0;
    } else if (type === 'field-time') {
        fieldName = generateUniqueFieldName('TIME_');
        ddsType = 'T';
        usage = 'O';
        dataType = 'time';
        decimals = 0;
    } else if (type === 'field-timestamp') {
        fieldName = generateUniqueFieldName('TS_');
        ddsType = 'Z';
        usage = 'O';
        dataType = 'timestamp';
        decimals = 0;
    } else {
        fieldName = generateUniqueFieldName(type === 'constant' ? 'CONST_' : `${type.toUpperCase()}_`);
        ddsType = type === 'constant' ? '' : 'A';
        usage = 'O';
        dataType = type === 'constant' ? 'constant' : 'character';
        decimals = 0;
    }

    const field = {
        id: generateId(),
        name: fieldName,
        type: type === 'number' ? 'input' : (isKeyword ? 'keyword' : (type === 'field-date' || type === 'field-time' || type === 'field-timestamp' ? 'output' : type)),
        ddsType: ddsType,
        usage: usage,
        dataType: dataType,
        row: row,
        col: col,
        length: isKeyword ? null : getDefaultLength(type),
        decimals: decimals,
        value: type === 'constant' ? 'TEXT' : '',
        isKeyword: isKeyword
    };

    if (shift) {
        field.shift = shift;
    }

    fields.push(field);

    const currentRecord = getCurrentRecord ? getCurrentRecord() : null;
    const winDimsForCreate = getWindowDimensions ? getWindowDimensions(currentRecord) : null;
    const currentDisplaySize = getCurrentDisplaySize ? getCurrentDisplaySize() : null;
    if (winDimsForCreate && winDimsForCreate.hasWindow) {
        const winDim = currentDisplaySize === 'DS3' ? winDimsForCreate.ds3 : winDimsForCreate.ds4;
        if (winDim) {
            renderWindowField(field, winDim);
        } else {
            renderField(field);
        }
    } else {
        renderField(field);
    }

    Logger.ui(`[CREATE] Field created: ${field.name} (id: ${field.id}) at row ${field.row}, col ${field.col}`);
    Logger.ui(`[CREATE] Field pushed to array, total fields: ${fields.length}`);

    const subfileRelationship = getSubfileRelationship ? getSubfileRelationship(currentRecord) : null;
    const sflpagRepeat = subfileRelationship ? getSflpagValue(subfileRelationship.sflctlRecord) : 1;

    Logger.ui(`[CREATE] Checking SFLPAG: subfileRelationship=${!!subfileRelationship}, sflpagRepeat=${sflpagRepeat}`);

    if (sflpagRepeat > 1) {
        const shouldRepeat = (
            (currentRecord === subfileRelationship.sflRecord && !field.isBackgroundRecord) ||
            (currentRecord === subfileRelationship.sflctlRecord && field.isBackgroundRecord)
        );

        if (shouldRepeat) {
            Logger.debug(`Creating ${sflpagRepeat - 1} visual copies for new field in SFL`);
            for (let repeat = 1; repeat < sflpagRepeat; repeat++) {
                const visualCopy = {
                    ...field,
                    id: field.id + '_repeat' + repeat,
                    row: field.row + repeat,
                    isVisualCopy: true
                };
                if (winDimsForCreate && winDimsForCreate.hasWindow) {
                    const winDim = currentDisplaySize === 'DS3' ? winDimsForCreate.ds3 : winDimsForCreate.ds4;
                    if (winDim) {
                        renderWindowField(visualCopy, winDim);
                    } else {
                        renderField(visualCopy);
                    }
                } else {
                    renderField(visualCopy);
                }
            }
        }
    }

    if (selectField) {
        selectField(field);
    }

    if (addFieldToDds) {
        addFieldToDds(field);
    }

    Logger.success('New field created:', fieldName, 'at', { row, col });

    if (showFieldProperties) {
        showFieldProperties(field);
    }
}


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueFieldName: () => (/* binding */ generateUniqueFieldName)
/* harmony export */ });
function generateUniqueFieldName(options) {
    const { prefix, fields, IdGenerator } = options;

    const existingNames = fields.map(field => field.name);
    return IdGenerator.generateUniqueName(prefix, existingNames);
}


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAttributeClasses: () => (/* binding */ applyAttributeClasses)
/* harmony export */ });
function applyAttributeClasses(options) {
    const { fieldElement, attributes } = options;

    if (!attributes) {
        return;
    }

    if (attributes.underline) {
        fieldElement.classList.add('underline');
    }
    if (attributes.blink) {
        fieldElement.classList.add('blink');
    }
    if (attributes.reverse) {
        fieldElement.classList.add('reverse');
    }
}


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeFieldDisplay: () => (/* binding */ computeFieldDisplay)
/* harmony export */ });
function computeFieldDisplay(options) {
    const {
        field,
        mode = 'designer',
        ColorUtils,
        ScreenCoordinates,
        getKeywordDisplay,
        getFieldDisplayText
    } = options;

    const isPreview = mode === 'preview';
    let text = '';
    let color = '';
    let classes = [];

    // Constants
    if (field.type === 'constant') {
        text = field.value || '';
        classes.push('constant');
        let effectiveColorCode = field.color;
        if (!effectiveColorCode && field.colors && field.colors.length > 0) {
            effectiveColorCode = field.colors[0];
        }
        if (effectiveColorCode && ColorUtils.isValidColorCode(effectiveColorCode)) {
            color = ColorUtils.IBM_COLORS[effectiveColorCode];
        }
    }
    // Keywords shown like constants
    else if (field.type === 'keyword' || field.isKeyword) {
        text = getKeywordDisplay(field.name);
        classes.push('constant');
        let effectiveColorCode = field.color;
        if (!effectiveColorCode && field.colors && field.colors.length > 0) {
            effectiveColorCode = field.colors[0];
        }
        // If a color code exists, use it; otherwise let CSS default (green) apply
        if (effectiveColorCode && ColorUtils.isValidColorCode(effectiveColorCode)) {
            color = ColorUtils.IBM_COLORS[effectiveColorCode];
        }
    }
    // Variables
    else {
        const fieldLength = field.length || 1;
        text = getFieldDisplayText(field, fieldLength);

        // Type class
        if (field.type === 'input') {classes.push('input-field');}
        else if (field.type === 'output') {classes.push('output-field');}
        else {classes.push(`${field.type}-field`);} // fallback

        // Color
        color = ColorUtils.getColorStyle(field, '#00ffff').replace('color: ', '').replace(';', '') || '#00ffff';
    }

    // Attributes -> classes
    if (field.attributes) {
        if (field.attributes.underline) {classes.push('underline');}
        if (field.attributes.reverse) {classes.push('reverse');}
        if (isPreview && field.attributes.blink) {classes.push('blink');}
        if (isPreview && field.attributes.nonDisplay) {classes.push('non-display');}
    }

    // Also check attributeIndicators (when attributes have indicators with OR groups)
    if (field.attributeIndicators) {
        if (field.attributeIndicators.underline) {classes.push('underline');}
        if (field.attributeIndicators.reverse) {classes.push('reverse');}
        if (isPreview && field.attributeIndicators.blink) {classes.push('blink');}
        if (isPreview && field.attributeIndicators.nonDisplay) {classes.push('non-display');}
        if (field.attributeIndicators.highlight) {classes.push('highlight');}
    }

    // Width in pixels
    const widthPx = ScreenCoordinates.getWidthInPixels(text.length || field.length || 1);

    return { text, widthPx, color, classes };
}


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFieldContent: () => (/* binding */ setFieldContent)
/* harmony export */ });
function setFieldContent(options) {
    const { fieldElement, field, computeFieldDisplay } = options;

    const { text, widthPx, color, classes } = computeFieldDisplay(field, 'designer');
    fieldElement.textContent = text || '';
    fieldElement.style.padding = '0';
    fieldElement.style.minWidth = 'auto';
    fieldElement.style.backgroundColor = 'transparent';
    fieldElement.style.border = 'none';
    fieldElement.style.whiteSpace = 'pre';
    if (widthPx) { fieldElement.style.width = `${widthPx}px`; }
    if (color) { fieldElement.style.color = color; }
    classes.forEach(cls => fieldElement.classList.add(cls));
}


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupFieldElement: () => (/* binding */ setupFieldElement)
/* harmony export */ });
function setupFieldElement(options) {
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


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderField: () => (/* binding */ renderField)
/* harmony export */ });
function renderField(options) {
    const {
        field,
        Logger,
        ScreenCoordinates,
        getCurrentDisplaySize,
        setupFieldElement,
        getFieldDisplayText
    } = options;

    const canvas = document.getElementById('fields-container');
    if (!canvas) {
        Logger.error('Fields container not found');
        return;
    }

    // Calculate line wrapping for character fields that exceed screen width
    const segments = ScreenCoordinates.calculateFieldWrapping(field, getCurrentDisplaySize());

    if (segments.length === 1) {
        // Single line field - render normally
        const fieldElement = document.createElement('div');
        setupFieldElement(fieldElement, field);

        // Position fields to match ruler marks exactly
        const { left, top } = ScreenCoordinates.toPixels(field.row, field.col);
        fieldElement.style.left = `${left}px`;
        fieldElement.style.top = `${top}px`;

        canvas.appendChild(fieldElement);
        Logger.success(`Rendered field: ${field.name} at (${field.row}, ${field.col}) -> (${top}px, ${left}px)`);
    } else {
        // Multi-line field - render each segment
        segments.forEach((segment, index) => {
            const fieldElement = document.createElement('div');
            setupFieldElement(fieldElement, field);

            // Mark as segment and store segment info
            fieldElement.dataset.fieldSegment = index;
            fieldElement.dataset.segmentLength = segment.length;

            const { left, top } = ScreenCoordinates.toPixels(segment.row, segment.col);
            fieldElement.style.left = `${left}px`;
            fieldElement.style.top = `${top}px`;

            // Override width for this segment
            fieldElement.style.width = `${segment.length * 8}px`;

            // Update content to show only this segment
            const fieldLength = field.length || 10;
            const fullDisplayValue = getFieldDisplayText(field, fieldLength);
            const startOffset = segments.slice(0, index).reduce((sum, seg) => sum + seg.length, 0);
            const segmentValue = fullDisplayValue.substring(startOffset, startOffset + segment.length);
            fieldElement.textContent = segmentValue;

            canvas.appendChild(fieldElement);
            Logger.success(`Rendered field segment ${index + 1}/${segments.length}: ${field.name} at (${segment.row}, ${segment.col})`);
        });
    }
}


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderWindowField: () => (/* binding */ renderWindowField)
/* harmony export */ });
function renderWindowField(options) {
    const {
        field,
        windowDimensions,
        Logger,
        ScreenCoordinates,
        getCurrentDisplaySize,
        setupFieldElement,
        getFieldDisplayText
    } = options;

    const canvas = document.getElementById('fields-container');
    if (!canvas) {
        Logger.error('Fields container not found');
        return;
    }

    Logger.window(`RENDER START: ${field.name} has field.length=${field.length}`);

    // Calculate line wrapping for character fields that exceed screen width
    const segments = ScreenCoordinates.calculateFieldWrapping(field, getCurrentDisplaySize());

    if (segments.length === 1) {
        // Single line field - render normally
        const fieldElement = document.createElement('div');
        setupFieldElement(fieldElement, field);

        // Calculate absolute screen position from WINDOW + field coordinates
        const absoluteRow = windowDimensions.row + field.row - 1;
        const absoluteCol = windowDimensions.col + field.col + 1;
        const { top: relativeTop, left: relativeLeft } = ScreenCoordinates.toPixels(absoluteRow, absoluteCol);

        // Ensure fields don't go outside reasonable bounds
        const maxTop = relativeTop + 500;
        const maxLeft = relativeLeft + 800;

        fieldElement.style.left = `${Math.min(relativeLeft, maxLeft)}px`;
        fieldElement.style.top = `${Math.min(relativeTop, maxTop)}px`;

        canvas.appendChild(fieldElement);
        Logger.window(`Rendered window field: ${field.name} at window-relative (${field.row},${field.col}) -> absolute (${relativeTop},${relativeLeft});`);
    } else {
        // Multi-line field - render each segment with window offset
        segments.forEach((segment, index) => {
            const fieldElement = document.createElement('div');
            setupFieldElement(fieldElement, field);

            // Mark as segment
            fieldElement.dataset.fieldSegment = index;
            fieldElement.dataset.segmentLength = segment.length;

            const absoluteRow = windowDimensions.row + segment.row - 1;
            const absoluteCol = windowDimensions.col + segment.col + 1;
            const { top: relativeTop, left: relativeLeft } = ScreenCoordinates.toPixels(absoluteRow, absoluteCol);

            fieldElement.style.left = `${relativeLeft}px`;
            fieldElement.style.top = `${relativeTop}px`;
            fieldElement.style.width = `${segment.length * 8}px`;

            // Update content to show only this segment
            const fieldLength = field.length || 10;
            const fullDisplayValue = getFieldDisplayText(field, fieldLength);
            const startOffset = segments.slice(0, index).reduce((sum, seg) => sum + seg.length, 0);
            const segmentValue = fullDisplayValue.substring(startOffset, startOffset + segment.length);
            fieldElement.textContent = segmentValue;

            canvas.appendChild(fieldElement);
            Logger.window(`Rendered window field segment ${index + 1}/${segments.length}: ${field.name} at (${segment.row}, ${segment.col})`);
        });
    }
}


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFieldCharForDisplay: () => (/* binding */ getFieldCharForDisplay)
/* harmony export */ });
// Function to get display character for a field
function getFieldCharForDisplay(options) {
    const { field } = options;

    let fieldChar = '_';

    if (field.dataType === 'numeric' || field.dataType === 'zoned' || field.dataType === 'packed' || field.dataType === 'float' || field.dataType === 'binary') {
        if (field.usage === 'O') {
            fieldChar = '6';
        } else if (field.usage === 'I') {
            fieldChar = '3';
        } else if (field.usage === 'B') {
            fieldChar = '9';
        } else {
            fieldChar = '6';
        }
    } else {
        if (field.usage === 'I') {
            fieldChar = 'I';
        } else if (field.usage === 'B') {
            fieldChar = 'B';
        } else if (field.usage === 'O') {
            fieldChar = 'O';
        } else {
            fieldChar = 'O';
        }
    }

    return fieldChar;
}


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFieldDisplayText: () => (/* binding */ getFieldDisplayText)
/* harmony export */ });
// Muestra como se debe mostrar un campo en la interfaz de usuario, dependiendo de su tipo y longitud. 
// Para campos numéricos, se muestra una representación con caracteres específicos para indicar la longitud 
// y el formato del número. Para otros tipos de campos, se muestra una repetición del carácter correspondiente 
// a la longitud del campo.
function getFieldDisplayText(options) {
    const { field, fieldLength, getFieldCharForDisplay } = options;

    if (field.dataType === 'date') {
        return 'yyyy-mm-dd';
    }

    if (field.dataType === 'time') {
        return 'hh.mm.ss';
    }

    if (field.dataType === 'timestamp') {
        return 'yyyy-mm-dd-hh.mm.ss.mmmmmm';
    }

    const length = fieldLength || field.length || 1;
    const isNumeric = field.dataType === 'numeric' || field.dataType === 'zoned' || field.dataType === 'packed' || field.dataType === 'float' || field.dataType === 'binary';
    if (isNumeric) {
        const digitChar = getFieldCharForDisplay(field);

        if (field.dataType === 'float') {
            const decimals = Number.isInteger(field.decimals) ? field.decimals : 0;
            const integerDigits = Math.max(1, length - decimals);
            const mantissa = decimals > 0
                ? `${digitChar.repeat(integerDigits)},${digitChar.repeat(decimals)}`
                : digitChar.repeat(length);
            const precisionChar = field.precision === 'DOUBLE' ? 'D' : 'E';
            return `-${mantissa}${precisionChar}-${digitChar.repeat(3)}`;
        }

        if (field.usage === 'I' && field.shift === 'S' || field.usage === 'B' && field.shift === 'S') {
            return length >= 1 ? digitChar.repeat(length) + '-' : digitChar;
        }

        return digitChar.repeat(length);
    }
    const fieldChar = getFieldCharForDisplay(field);
    return fieldChar.repeat(length);
}


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateWindowFieldHtml: () => (/* binding */ generateWindowFieldHtml)
/* harmony export */ });
function generateWindowFieldHtml(options) {
    const { field, windowDimensions, generateFieldHtml } = options;

    return generateFieldHtml(field, { row: windowDimensions.row, col: windowDimensions.col });
}


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateId: () => (/* binding */ generateId)
/* harmony export */ });
function generateId(IdGenerator) {
    return IdGenerator.generateFieldId();
}


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultLength: () => (/* binding */ getDefaultLength)
/* harmony export */ });
function getDefaultLength(type) {
    switch (type) {
        case 'text':
            return 10;
        case 'number':
            return 6;
        case 'constant':
            return null;
        case 'field-date':
            return 10;
        case 'field-time':
            return 8;
        case 'field-timestamp':
            return 26;
        default:
            return 10;
    }
}


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getKeywordDisplay: () => (/* binding */ getKeywordDisplay)
/* harmony export */ });
function getKeywordDisplay(options) {
    const { keywordName } = options;

    const displays = {
        'DATE': 'MM/DD/YYYY',
        'TIME': 'HH:MM:SS',
        'SYSNAME': 'SSSSSSSS',
        'USER': 'UUUUUUUUUU'
    };
    return displays[keywordName] || keywordName;
}


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractAttributes: () => (/* binding */ extractAttributes)
/* harmony export */ });
// Extract display attributes with indicators
// Returns: { attrs: {...}, indicators: [], isGroupedFormat: boolean }
function extractAttributes({ content, fullLine = null, IndicatorUtils, Logger }) {
    const attrs = {};
    const result = { attrs: attrs, indicators: [], isGroupedFormat: false };

    // Extract ALL indicators from DDS line
    // Format: "A  41 43                                  DSPATR(BL)"
    if (fullLine) {
        result.indicators = IndicatorUtils.extractFromDdsLine(fullLine, 'extractAttributes');
    }

    // Check for grouped format: DSPATR(HI RI UL)
    const groupedMatch = content.match(/DSPATR\(([A-Z]{2}(?:\s+[A-Z]{2})+)\)/);
    if (groupedMatch) {
        result.isGroupedFormat = true;
        // Split the grouped attributes by spaces
        const attrCodes = groupedMatch[1].split(/\s+/);
        Logger.parse(`Found grouped DSPATR format with codes:`, attrCodes);

        attrCodes.forEach(code => {
            switch (code) {
                case 'UL': attrs.underline = true; break;
                case 'BL': attrs.blink = true; break;
                case 'HI': attrs.highlight = true; break;
                case 'RI': attrs.reverse = true; break;
                case 'PC': attrs.cursorPosition = true; break;
                case 'CS': attrs.columnSeparator = true; break;
                case 'ND': attrs.nonDisplay = true; break;
                case 'MDT': attrs.modifiedDataTag = true; break;
                case 'PR': attrs.protect = true; break;
                case 'OID': attrs.operatorId = true; break;
                case 'SP': attrs.selectLightPen = true; break;
            }
        });
    } else {
        // Individual format: DSPATR(UL) or DSPATR(BL) etc.
        if (content.includes('DSPATR(UL)')) {attrs.underline = true;}
        if (content.includes('DSPATR(BL)')) {attrs.blink = true;}
        if (content.includes('DSPATR(HI)')) {attrs.highlight = true;}
        if (content.includes('DSPATR(RI)')) {attrs.reverse = true;}
        if (content.includes('DSPATR(PC)')) {attrs.cursorPosition = true;}
        if (content.includes('DSPATR(CS)')) {attrs.columnSeparator = true;}
        if (content.includes('DSPATR(ND)')) {attrs.nonDisplay = true;}
        if (content.includes('DSPATR(MDT)')) {attrs.modifiedDataTag = true;}
        if (content.includes('DSPATR(PR)')) {attrs.protect = true;}
        if (content.includes('DSPATR(OID)')) {attrs.operatorId = true;}
        if (content.includes('DSPATR(SP)')) {attrs.selectLightPen = true;}
    }

    return result;
}


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAttributeRows: () => (/* binding */ renderAttributeRows)
/* harmony export */ });
// Arma el HTML de las filas de atributos en el panel de propiedades.
function renderAttributeRows(options) {
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


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAttributeCheckboxMap: () => (/* binding */ getAttributeCheckboxMap)
/* harmony export */ });
// construye un objeto que mapea cada atributo (por ejemplo underline, blink, etc.) 
// al id del checkbox correspondiente en el panel de propiedades.
// Si se pasa allowedKeys, filtra el mapa para incluir solo esos atributos permitidos.
function getAttributeCheckboxMap(options) {
    const { allowedKeys = null, attributeUiDefs } = options;
    const allowSet = allowedKeys ? new Set(allowedKeys) : null;
    const map = {};

    attributeUiDefs.forEach(def => {
        if (!allowSet || allowSet.has(def.key)) {
            map[def.key] = def.checkboxId;
        }
    });

    return map;
}


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatIndicatorLabel: () => (/* binding */ formatIndicatorLabel)
/* harmony export */ });
// Convierte un array de indicadores en texto como "02 43 11" o "N03 51"
function formatIndicatorLabel(list) {
    if (!Array.isArray(list) || list.length === 0) {
        return 'No ind.';
    }

    return list
        .map(ind => (ind.not ? `N${ind.number.padStart(2, '0')}` : ind.number.padStart(2, '0')))
        .join(' ');
}


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setIndicatorButtonState: () => (/* binding */ setIndicatorButtonState)
/* harmony export */ });
// Actualiza el botón con el texto generado por formatIndicatorLabel
function setIndicatorButtonState({ btn, indicators, formatIndicatorLabel }) {
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


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyColorChanges: () => (/* binding */ applyColorChanges)
/* harmony export */ });
// Shared function to apply color changes from checkboxes to field object
function applyColorChanges({ field, Logger, transferIndicators }) {
    const colorMap = {
        'color-green': 'GRN',
        'color-white': 'WHT',
        'color-red': 'RED',
        'color-turquoise': 'TRQ',
        'color-yellow': 'YLW',
        'color-pink': 'PNK',
        'color-blue': 'BLU'
    };

    // Collect all selected colors
    const selectedColors = [];
    for (const [checkboxId, colorCode] of Object.entries(colorMap)) {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            selectedColors.push(colorCode);
        }
    }

    // Update field colors
    if (selectedColors.length > 0) {
        // Set the first color as the primary color (for backward compatibility)
        field.color = selectedColors[0];
        // Store all colors in the colors array
        field.colors = selectedColors;
        Logger.debug(`Colors set to [${selectedColors.join(', ')}] for field ${field.name}`);

        // Initialize colorIndicators if needed
        if (!field.colorIndicators) {
            field.colorIndicators = {};
        }

        // Use unified indicator transfer helper
        transferIndicators({
            kind: 'color',
            keys: selectedColors,
            field: field,
            fieldType: 'field'
        });
    } else {
        // Remove colors if no checkbox is selected
        delete field.color;
        delete field.colors;
        delete field.colorIndicators;
        Logger.debug(`Colors removed for field ${field.name}`);
    }
}


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRecordType: () => (/* binding */ getRecordType)
/* harmony export */ });
// Get the type of the current record (SFLCTL, SFL, or SCREEN)
function getRecordType({ recordName, currentDocument }) {
    const lines = currentDocument.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes(`R ${recordName}`) || line.includes(`R  ${recordName}`)) {
            // Check keywords on the same line first
            if (line.includes('SFLCTL')) {return 'SFLCTL';}
            if (line.includes('SFL')) {return 'SFL';}
            if (line.includes('WINDOW(')) {return 'WINDOW';}

            // If not found on same line, check following lines within this record
            for (let j = i + 1; j < lines.length; j++) {
                const nextLine = lines[j];
                // Stop if we hit another record declaration
                if (nextLine.match(/^\s{5}A\s+R\s+\w+/)) {
                    break;
                }
                // Check for keywords in continuation lines (any keyword that determines record type)
                if (nextLine.includes('SFLCTL')) {return 'SFLCTL';}
                if (nextLine.includes('SFL') && !nextLine.includes('SFLCTL')) {return 'SFL';}
                if (nextLine.includes('WINDOW(')) {return 'WINDOW';}
            }

            return 'SCREEN';
        }
    }
    return 'SCREEN';
}


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractRowColFromParts: () => (/* binding */ extractRowColFromParts)
/* harmony export */ });
// Extract row and column from parts array
// Returns: { row, col, nextIndex } or null if invalid
function extractRowColFromParts({ parts, startIndex }) {
    if (startIndex >= parts.length) {
        return null;
    }

    const rowStr = parts[startIndex];
    const row = parseInt(rowStr);

    if (isNaN(row)) {
        return null;
    }

    // Check for col
    if (startIndex + 1 < parts.length) {
        const colStr = parts[startIndex + 1];
        const col = parseInt(colStr);

        if (!isNaN(col)) {
            return {
                row: row,
                col: col,
                nextIndex: startIndex + 2
            };
        }
    }

    // Compact fixed format support when col has 3 digits and no separator exists,
    // e.g. "6118" => row=6, col=118 or "20118" => row=20, col=118
    const compactMatch = rowStr.match(/^(\d{1,2})(\d{3})$/);
    if (!compactMatch) {
        return null;
    }

    const compactRow = parseInt(compactMatch[1], 10);
    const compactCol = parseInt(compactMatch[2], 10);
    if (isNaN(compactRow) || isNaN(compactCol)) {
        return null;
    }

    return {
        row: compactRow,
        col: compactCol,
        nextIndex: startIndex + 1
    };
}


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDdsTypeSpecification: () => (/* binding */ parseDdsTypeSpecification)
/* harmony export */ });
// Parse DDS type specification (e.g., "10A", "15S", "7P", "3Y", "2F")
// Returns: { length, typeChar, dataType } or null if invalid
function parseDdsTypeSpecification({ typeSpec, hasDecimals = false }) {
    const normalized = (typeSpec || '').trim().toUpperCase();
    if (normalized === 'L') {
        return {
            length: 10,
            typeChar: 'L',
            dataType: 'date'
        };
    }
    if (normalized === 'T') {
        return {
            length: 8,
            typeChar: 'T',
            dataType: 'time'
        };
    }
    if (normalized === 'Z') {
        return {
            length: 26,
            typeChar: 'Z',
            dataType: 'timestamp'
        };
    }

    const typeMatch = normalized.match(/(\d+)([A-Z])?/);
    if (!typeMatch) {
        return null;
    }

    const length = parseInt(typeMatch[1]);
    const typeChar = typeMatch[2]; // May be undefined
    let dataType = 'character'; // Default

    // Map DDS type to internal type
    if (!typeChar) {
        // No type letter specified
        if (hasDecimals) {
            dataType = 'packed';
        } else {
            dataType = 'character';
        }
    } else if (typeChar === 'A') {
        dataType = 'character';
    } else if (typeChar === 'F') {
        dataType = 'float';
    } else if (typeChar === 'P') {
        dataType = 'packed';
    } else if (typeChar === 'S' || typeChar === 'Y' || typeChar === 'N' || typeChar === 'D' || typeChar === 'I') {
        // These are shift codes for Zoned type
        dataType = 'zoned';
    } else if (typeChar === 'J' || typeChar === 'E' || typeChar === 'O' || typeChar === 'G') {
        // These are shift codes for Double Byte type
        dataType = 'double';
    }

    return {
        length: length,
        typeChar: typeChar,
        dataType: dataType
    };
}


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseUsageAndDecimals: () => (/* binding */ parseUsageAndDecimals)
/* harmony export */ });
// Parse usage and decimals from parts
// Returns: { decimals, usage, hasDecimals, nextIndex }
function parseUsageAndDecimals({ parts, startIndex }) {
    let decimals = 0;
    let usage = 'O';
    let hasDecimals = false;
    let currentIndex = startIndex;

    if (currentIndex >= parts.length) {
        return { decimals, usage, hasDecimals, nextIndex: currentIndex };
    }

    const nextPart = parts[currentIndex];

    // Check for decimals (and possibly usage attached to decimals)
    const decimalMatch = nextPart.match(/^(\d+)([OIBHMP]?)$/);
    if (decimalMatch) {
        hasDecimals = true;
        decimals = parseInt(decimalMatch[1]);
        // Check if usage is attached to decimals (e.g., "2I", "0O")
        if (decimalMatch[2]) {
            usage = decimalMatch[2];
            currentIndex++; // Move to next part (should be row)
        } else {
            // Decimals alone, check next part for usage or row
            currentIndex++;
            if (currentIndex < parts.length) {
                const afterDecimal = parts[currentIndex];
                // Check if it's a single letter usage
                if (afterDecimal.length === 1 && /[OIBHMP]/.test(afterDecimal)) {
                    usage = afterDecimal;
                    currentIndex++;
                }
                // Otherwise it's the row number
            }
        }
    } else if (nextPart.length === 1 && /[OIBHMP]/.test(nextPart)) {
        // It's just a usage letter (no decimals)
        usage = nextPart;
        currentIndex++;
    }
    // Otherwise it's the row number (no decimals, no usage)

    return {
        decimals: decimals,
        usage: usage,
        hasDecimals: hasDecimals,
        nextIndex: currentIndex
    };
}


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractFloatPrecision: () => (/* binding */ extractFloatPrecision)
/* harmony export */ });
// Extract FLTPCN precision from line
// Returns: 'SINGLE', 'DOUBLE', or null
function extractFloatPrecision({ line, dataType }) {
    if (dataType !== 'float') {
        return null;
    }

    if (line.includes('FLTPCN')) {
        if (line.includes('*SINGLE')) {
            return 'SINGLE';
        } else if (line.includes('*DOUBLE')) {
            return 'DOUBLE';
        }
    }

    return null;
}


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractShiftCode: () => (/* binding */ extractShiftCode)
/* harmony export */ });
// Extract shift code from type spec for zoned/double types
// Returns: shift code (S/Y/N/D/I for zoned, J/E/O/G for double) or null
function extractShiftCode({ typeSpec, dataType }) {
    if (dataType === 'zoned') {
        // Extract shift from typeChar (S/Y/N/D/I)
        const typeMatch = typeSpec.match(/\d+([SYNDI])/);
        if (typeMatch) {
            return typeMatch[1];
        }
        return 'Y';
    } else if (dataType === 'double') {
        // Extract shift from typeChar (J/E/O/G)
        const typeMatch = typeSpec.match(/\d+([JEOG])/);
        if (typeMatch) {
            return typeMatch[1];
        }
        return 'J';
    }

    return null;
}


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseWindowDimensionsFromLine: () => (/* binding */ parseWindowDimensionsFromLine)
/* harmony export */ });
function parseWindowDimensionsFromLine(options) {
    const {
        trimmedLine,
        currentRecordName,
        currentWindowDimensions,
        currentDisplaySize,
        DisplaySizeUtils,
        currentDocument,
        getWindowDimensions,
        Logger
    } = options;

    if (currentWindowDimensions) {
        return currentWindowDimensions;
    }

    if (!trimmedLine.includes('WINDOW(')) {
        return null;
    }

    const displayMarker = currentDisplaySize === 'DS3' ? '*DS3' : '*DS4';

    const windowRefMatch = trimmedLine.match(/WINDOW\(([A-Z0-9_]+)\)/);
    if (windowRefMatch && !/\d+\s+\d+/.test(windowRefMatch[0])) {
        const referencedRecord = windowRefMatch[1];
        Logger.parse(`Found WINDOW reference to ${referencedRecord} in record ${currentRecordName}`);
        const refDimensions = getWindowDimensions(referencedRecord);
        if (refDimensions.hasWindow) {
            const dimensions = currentDisplaySize === 'DS3' ? refDimensions.ds3 : refDimensions.ds4;
            if (dimensions) {
                Logger.parse(`Resolved window dimensions from ${referencedRecord}:`, dimensions);
                return dimensions;
            }
        }
        return null;
    }

    const windowMatch = trimmedLine.match(/WINDOW\((\d+)\s+(\d+)\s+(\d+)\s+(\d+)\)/);
    if (windowMatch) {
        const displayConfig = DisplaySizeUtils.getAvailableDisplaySizes(currentDocument);

        let appliesTo = false;
        if (trimmedLine.includes(displayMarker)) {
            appliesTo = true;
        } else if (displayConfig.singleSize) {
            appliesTo = true;
        }

        if (appliesTo) {
            const dimensions = {
                row: parseInt(windowMatch[1], 10),
                col: parseInt(windowMatch[2], 10),
                height: parseInt(windowMatch[3], 10),
                width: parseInt(windowMatch[4], 10)
            };
            const marker = trimmedLine.includes(displayMarker) ? displayMarker : '(single size)';
            Logger.parse(`Found ${marker} window dimensions for ${currentRecordName}:`, dimensions);
            return dimensions;
        }
    }

    return null;
}


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processMultiLineContinuation: () => (/* binding */ processMultiLineContinuation)
/* harmony export */ });
/**
 * Process multi-line DDS constant continuation lines.
 * Handles continuation indicators (trailing dashes) and properly concatenates lines.
 * 
 * @param {Object} options - Configuration object
 * @param {string} options.initialLine - The first line containing opening quote and dash
 * @param {Function} options.getNextLine - Function(index) that returns next line or null
 * @param {number} options.startIndex - Starting index for continuation lines
 * @param {string} options.context - Context for logging ('PREVIEW' or 'DESIGNER')
 * @param {Object} options.Logger - Logger instance
 * @returns {Object} Result object: { fullLine: string, linesConsumed: number }
 */
function processMultiLineContinuation({ initialLine, getNextLine, startIndex, context, Logger }) {
    let fullLine = initialLine;
    let linesConsumed = 0;
    let currentIndex = startIndex;
    const isStringContinuation = initialLine.includes("'");

    // Process continuation lines
    while (true) {
        const nextLine = getNextLine(currentIndex);
        if (!nextLine) {break;}

        // Check if next line is a continuation
        // A continuation line starts with 'A' at position 5, has spaces/empty where row/col would be,
        // and the trimmed content starts with content (not another row/col position)
        const fullAfterA = nextLine.length > 6 ? nextLine.substring(6) : '';
        const afterA = fullAfterA.trim();
        const contentAfter18 = nextLine.length > 18 ? nextLine.substring(18).trim() : '';
        const indicatorAreaContent = nextLine.length > 6 ? nextLine.substring(6, 18).trim() : '';
        const isIndicatorOnlyLine = indicatorAreaContent.length > 0 &&
                                    /^O?\s*[N\d\s]+$/.test(indicatorAreaContent) &&
                                    contentAfter18 === '';
        const isContinuation = nextLine.length > 6 &&
                             nextLine[5] === 'A' &&
                             !isIndicatorOnlyLine &&
                             !/^\d+\s+\d+/.test(afterA) &&
                             (afterA.length > 0 || (isStringContinuation && fullAfterA.length > 0)); // Allow blank continuation lines in string constants

        if (!isContinuation) {break;}

        Logger.parse(`Continuation found at index ${currentIndex}: ${nextLine}`);

        // For continuation lines, skip position 0-5 (DDS format)
        // In DDS, string constant continuations start at a fixed column (typically 45)
        // We must preserve ALL characters including leading spaces in the constant
        // For string constants, content typically starts at column 45 (index 38 after substring(6))
        // But we need to handle cases where it might be at different positions
        // The key is: if this is a continuation of a string constant, preserve ALL spaces

        // Check if this looks like a string constant continuation
        // (has a quote somewhere in the line)
        const hasQuote = fullAfterA.includes("'");

        let continuationContent;
        let contentStart;

        if (isStringContinuation || hasQuote) {
            // This is a string constant continuation
            // Take content from column 45 (index 38 after substring(6)) to preserve spacing
            // This is the standard DDS position for constant continuation
            const ddsConstantColumn = 38; // Column 45 in original line

            // If the line is long enough, take from the standard column
            // Otherwise take from the beginning (in case of non-standard formatting)
            if (fullAfterA.length > ddsConstantColumn) {
                continuationContent = fullAfterA.substring(ddsConstantColumn);
                contentStart = ddsConstantColumn;
            } else {
                // Line is shorter, take everything
                continuationContent = fullAfterA;
                contentStart = 0;
            }
        } else {
            // Not a string constant, skip leading spaces as before
            contentStart = fullAfterA.search(/\S/);
            continuationContent = contentStart >= 0 ? fullAfterA.substring(contentStart) : '';
        }

        // Determine if continuation line has leading spaces (indentation)
        // substring(6) removes columns 1-6, so remaining index maps to: contentStart + 7 = real column
        // Column 45 → contentStart 38, Column 46 → contentStart 39
        // If contentStart > 38, content is beyond column 45, so needs space
        const hasLeadingSpaces = contentStart > 38;
        Logger.parse(`[${context}] contentStart: ${contentStart}, column: ${contentStart + 7}, hasLeadingSpaces: ${hasLeadingSpaces}`);

        // Check if this is the last line (has closing quote)
        const isLastLine = continuationContent.includes("'");

        // If it's the last line, also remove the trailing continuation char ('-' or '+') from continuationContent
        // before the closing quote (it's also a continuation indicator). Allow spaces after '-'/'+'.
        if (isLastLine && continuationContent.length > 1) {
            const beforeQuote = continuationContent.substring(0, continuationContent.length - 1);
            const lastContMatch = beforeQuote.match(/[-+]\s*$/);
            if (lastContMatch) {
                const trimmedBefore = beforeQuote.substring(0, beforeQuote.length - lastContMatch[0].length);
                continuationContent = trimmedBefore + "'";
                Logger.parse(`[${context}] Removed trailing continuation sequence from last continuation line: "${continuationContent}"`);
            }
        }

        // Before concatenating, check if fullLine's constant value ends with a continuation char ('-' or '+')
        // Extract the content between quotes from fullLine to check
        const constantMatch = fullLine.match(/'([^']*)$/);
        if (constantMatch) {
            const currentConstantValue = constantMatch[1];
            const contMatch = currentConstantValue.match(/[-+]\s*$/);
            const hasContinuation = !!contMatch;
            Logger.parse(`[${context}] Before concat: constant value ends with: "${currentConstantValue.slice(-10)}", hasContinuation: ${hasContinuation}, isLastLine: ${isLastLine}`);

            // Always remove trailing continuation sequence (including trailing spaces) from current line
            if (hasContinuation) {
                const removeLen = contMatch[0].length;
                if (hasLeadingSpaces) {
                    Logger.parse(`[${context}] Removing trailing continuation sequence and replacing with space (has indentation)`);
                    fullLine = fullLine.substring(0, fullLine.length - removeLen) + ' ';
                } else {
                    Logger.parse(`[${context}] Removing trailing continuation sequence without space (no indentation)`);
                    fullLine = fullLine.substring(0, fullLine.length - removeLen);
                }
            }
        }

        fullLine = fullLine + continuationContent;
        Logger.parse(`[${context}] After concat: fullLine length: ${fullLine.length}, last 10 chars: "${fullLine.slice(-10)}"`);

        currentIndex++;
        linesConsumed++;

        // If this continuation line has the closing quote, we're done
        if (isLastLine) {
            break;
        }
    }

    Logger.parse(`Completed multi-line constant, full line length: ${fullLine.length}`);
    Logger.parse(`Complete constant last 40 chars: "${fullLine.slice(-40)}"`);

    return {
        fullLine: fullLine,
        linesConsumed: linesConsumed
    };
}


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scanIndicatorsBackward: () => (/* binding */ scanIndicatorsBackward)
/* harmony export */ });
// Helper: Scan backwards from keyword line to collect all indicator-only lines
// Returns: { scannedLines: [{indicators: [...], isOr: boolean}], hasOrLines: boolean }
function scanIndicatorsBackward({ lines, startIndex, lineOffset, contextLabel = '', IndicatorUtils, Logger }) {
    const scannedLines = [];
    let hasOrLines = false;
    let backOffset = lineOffset - 1;
    let currentGroup = null; // Track current group being built (scanning backwards)

    while (backOffset > 0) {
        const prevLine = lines[startIndex + backOffset];

        // Check if previous line has only indicators
        // A line has ONLY indicators if:
        // 1. Starts with 'A' or 'AO' at position 5-6
        // 2. Has indicators in columns 7-18 (positions after 'A'/'AO')
        // 3. Does NOT have a field name after position 18

        // Check if line starts with 'A' at position 5 (column 6)
        if (prevLine.length < 6 || prevLine[5] !== 'A') {
            break; // Not a DDS line starting with A
        }

        // Check for field name pattern after position 18 (field names start around column 19)
        // Field names are typically followed by type spec like "10A" or "2F 0"
        const prevContentAfter18 = prevLine.substring(18).trim();
        const hasFieldName = /^[A-Z][A-Z0-9_]{2,}\s+\d+/i.test(prevContentAfter18);

        // Check if line has a keyword (from column 44 onwards) - if so, stop scanning
        // These indicators belong to a different attribute
        const prevContentAfter44 = prevLine.length > 43 ? prevLine.substring(43).trim() : '';
        const hasKeyword = prevContentAfter44.length > 0 && /^[A-Z]+\s*\(/.test(prevContentAfter44);
        if (hasKeyword) {
            Logger.debug(`[${contextLabel}] scanIndicatorsBackward stopping - found keyword at backOffset ${backOffset}`);
            break;
        }

        // A line has ONLY indicators if:
        // - No field name after position 18
        // - Has indicator pattern (numbers with optional N prefix) in positions 6-18
        const indicatorAreaContent = prevLine.substring(6, 18).trim();
        const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);

        const prevHasOnlyIndicators = !hasFieldName && hasIndicatorPattern && indicatorAreaContent.length > 0;

        if (!prevHasOnlyIndicators) {
            break; // Stop if not an indicator-only line
        }

        // Check if this line starts a new OR group (has 'O' at position 6)
        const startsOrGroup = prevLine.length > 6 && prevLine[6] === 'O';

        // Extract indicators from this line
        const prevIndicators = IndicatorUtils.extractFromDdsLine(prevLine, contextLabel);

        if (prevIndicators && prevIndicators.length > 0) {
            if (startsOrGroup) {
                // When scanning BACKWARDS, finding 'AO' means:
                // - Everything AFTER this (currentGroup) is a continuation of this OR group
                // - Everything BEFORE this is a DIFFERENT group
                hasOrLines = true;

                if (currentGroup) {
                    // currentGroup has indicators from lines AFTER this AO line
                    // Those are continuations (A lines after AO), so they're part of this OR group
                    // Prepend current line's indicators to currentGroup
                    currentGroup.indicators.unshift(...prevIndicators);
                    currentGroup.isOr = true; // Mark as OR group
                } else {
                    // No currentGroup yet - this AO line starts the group we'll build
                    currentGroup = { indicators: [...prevIndicators], isOr: true };
                }

                // Save this complete OR group and reset for next group (scanning further back)
                scannedLines.unshift({ indicators: currentGroup.indicators, isOr: currentGroup.isOr });
                currentGroup = null;
            } else {
                // Line without 'O' - continuation of current group OR new AND group
                if (currentGroup === null) {
                    // Start new group (will be AND unless we find AO later)
                    currentGroup = { indicators: [...prevIndicators], isOr: false };
                } else {
                    // Add to current group (prepend because scanning backwards)
                    currentGroup.indicators.unshift(...prevIndicators);
                }
            }
        }

        backOffset--;
    }

    // Add remaining group if any (this is the first/topmost group)
    if (currentGroup && currentGroup.indicators.length > 0) {
        scannedLines.unshift({ indicators: currentGroup.indicators, isOr: currentGroup.isOr });
    }

    return { scannedLines, hasOrLines };
}


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scanAttributeLinesAfterField: () => (/* binding */ scanAttributeLinesAfterField)
/* harmony export */ });
// Shared attribute/color scanner to unify Designer and Preview parsing
function scanAttributeLinesAfterField({
    options,
    Logger,
    IndicatorUtils,
    scanIndicatorsBackward,
    extractAttributes,
    attributeContentRegex
}) {
    const {
        lines,
        startIndex,
        field,
        contextLabel = 'PARSER',
        includeChecks = false,
        preserveOriginalSpacing = false,
        stopOnFieldKeywordsRegex = null,
        attributeRegex = attributeContentRegex || /COLOR\(|DSPATR\(|EDTCDE\(|DFTVAL\(/,
    } = options;

    let lineOffset = 1;

    while (startIndex + lineOffset < lines.length) {
        const nextLine = lines[startIndex + lineOffset];
        const nextTrimmed = nextLine.trim();

        // IMPROVED: Better comment detection - check for A* at position 6-7 (DDS format)
        // or at the start of trimmed line (could have leading spaces)
        const isComment = (nextLine.length > 6 && nextLine[5] === 'A' && nextLine[6] === '*') ||
                         nextTrimmed.startsWith('A*') ||
                         nextTrimmed.startsWith('*') ||
                         nextTrimmed.startsWith('-');

        if (isComment) {
            Logger.debug(`[${contextLabel}] Skipping comment line at offset ${lineOffset}: "${nextTrimmed}"`);
            lineOffset++;
            continue;
        }

        // Check if this is an indicator-only line (belongs to next field)
        // Format: "A  11 42 54" or "AO 50" with NO field name after column 18
        const contentAfterColumn18 = nextLine.length > 18 ? nextLine.substring(18).trim() : '';
        const hasFieldNameAfter18 = /^[A-Z][A-Z0-9_]{2,}\s+\d+/i.test(contentAfterColumn18);
        const indicatorAreaContent = nextLine.length > 6 ? nextLine.substring(6, 18).trim() : '';
        const hasIndicatorPattern = /^O?\s*[N\d\s]+$/.test(indicatorAreaContent);
        const isIndicatorOnlyLine = nextLine.length > 6 &&
                                    nextLine[5] === 'A' &&
                                   !hasFieldNameAfter18 &&
                                    hasIndicatorPattern &&
                                    indicatorAreaContent.length > 0 &&
                                    contentAfterColumn18 === '';

        const hasFieldName = /\b[A-Z][A-Z0-9_]{2,}\s+\d+[A-Z]/i.test(nextTrimmed);
        const hasConstant = nextTrimmed.match(/\d+\s+\d+'/);
        const isRecordDef = nextTrimmed.match(/^A\s+R\s+\w+/);
        const isBlank = nextTrimmed === '' || nextTrimmed === 'A';
        // Check for keywords (DATE, TIME, SYSNAME, USER) - must stop before processing another field's keyword
        const hasKeyword = /\d{1,2}\s+\d{1,2}(DATE|TIME|SYSNAME|USER)/.test(nextTrimmed);
        // Check if this is a const continuation line (value with quotes but no row/col)
        // BUT: exclude lines with known keywords (COLOR, DSPATR, DFTVAL, etc.)
        const isConstContinuation = nextTrimmed.startsWith('A') &&
                                   nextTrimmed.includes("'") &&
                                   !nextTrimmed.match(/\d+\s+\d+'/) &&
                                   !attributeRegex.test(nextTrimmed);
        const hasFieldKeyword = stopOnFieldKeywordsRegex ? stopOnFieldKeywordsRegex.test(nextTrimmed) : false;

        // Stop scanning if we hit a field, constant, record, blank line, or field keyword
        if (hasFieldName || hasConstant || isRecordDef || isBlank || hasKeyword || hasFieldKeyword) {
            Logger.debug(`[${contextLabel}] Stopping scan - found ${hasFieldName ? 'field' : hasConstant ? 'constant' : isRecordDef ? 'record' : hasKeyword ? 'keyword' : hasFieldKeyword ? 'field keyword' : 'blank'}`);
            break;
        }

        // If this is an indicator-only line, skip it and continue (indicators will be picked up by backward scan)
        if (isIndicatorOnlyLine) {
            Logger.debug(`[${contextLabel}] Skipping indicator-only line at offset ${lineOffset}, continuing...`);
            lineOffset++;
            continue;
        }

        if (isConstContinuation) {
            lineOffset++;
            continue;
        }

        const hasAttribute = attributeRegex.test(nextTrimmed);

        // DEBUG: Log attribute detection
        Logger.debug(`[${contextLabel}] Line ${startIndex + lineOffset + 1}: hasAttribute=${hasAttribute}, nextTrimmed="${nextTrimmed}"`);

        // Check if this line has only indicators (no keyword yet)
        // Format: "A  01 02 03" or "AO 50" or "A N10 12"
        // If columns 19-80 (indices 18-79) are empty, it's only indicators
        const contentAfter18 = nextLine.substring(18).trim();
        Logger.debug(`[${contextLabel}] Line ${startIndex + lineOffset + 1}: contentAfter18="${contentAfter18}"`);
        const hasOnlyIndicators = !hasAttribute &&
                                 nextTrimmed.match(/^A[O\s]\s*[N\d\s]+$/) &&
                                 contentAfter18 === '' &&
                                 !hasFieldName;
        Logger.debug(`[${contextLabel}] Line ${startIndex + lineOffset + 1}: hasOnlyIndicators=${hasOnlyIndicators}`);

        if (!hasAttribute && !hasOnlyIndicators) {
            // IMPROVED: Check if this looks like an unknown keyword starting at column 44 (index 43)
            // Unknown keywords can have or not have parentheses: OVERLAY, KEEP, FLTPCN(...), etc.
            // If content starts at column 44+ and doesn't match known attributes, ignore it
            const contentAfter43 = nextLine.length > 43 ? nextLine.substring(43).trim() : '';
            const looksLikeUnknownKeyword = nextTrimmed.startsWith('A') && contentAfter43.length > 0 && !hasFieldName;

            if (looksLikeUnknownKeyword) {
                Logger.debug(`[${contextLabel}] Skipping unknown keyword at column 44+: "${contentAfter43}"`);
                lineOffset++;
                continue;
            }
            Logger.debug(`[${contextLabel}] Stopping - unknown line type at offset ${lineOffset}`);
            break;
        }

        // If line has only indicators, skip it and continue to find the keyword line
        if (hasOnlyIndicators) {
            Logger.debug(`[${contextLabel}] Found indicator-only line at offset ${lineOffset}, continuing...`);
            lineOffset++;
            continue;
        }

        // ============================================================================
        // UNIFIED INDICATOR PROCESSING FOR ALL KEYWORDS
        // Process COLOR, DSPATR, EDTCDE, CHECK, DFTVAL, etc. with same logic
        // ============================================================================

        // Check if this is an OR line (position 6 = 'O')
        const isOrLine = nextLine.length > 6 && nextLine[6] === 'O';

        // Extract indicators from current line
        const currentLineIndicators = IndicatorUtils.extractFromDdsLine(nextLine, `${contextLabel}-CURRENT`);

        // Scan backwards to find all indicator-only lines
        const backwardScan = scanIndicatorsBackward(lines, startIndex, lineOffset, `${contextLabel}-BACKWARD`);
        const scannedLines = backwardScan.scannedLines;
        let hasOrLines = backwardScan.hasOrLines;

        // Add current line indicators if any
        // The current line with keyword (COLOR/DSPATR) can also have indicators
        if (currentLineIndicators && currentLineIndicators.length > 0) {
            if (isOrLine) {
                // This line starts a NEW OR group
                scannedLines.push({ indicators: currentLineIndicators, isOr: true });
                hasOrLines = true;
            } else {
                // This line is not OR, so add to last group (continuation)
                if (scannedLines.length > 0) {
                    // Add to the last group
                    scannedLines[scannedLines.length - 1].indicators.push(...currentLineIndicators);
                } else {
                    // First group (no previous groups from backward scan)
                    scannedLines.push({ indicators: currentLineIndicators, isOr: false });
                }
            }
        }

        // Build indicator groups structure
        const buildIndicatorGroups = () => {
            if (scannedLines.length === 0) {return null;}

            if (hasOrLines) {
                // OR format: scannedLines already contains properly grouped data
                // Each element with isOr:true starts a new group
                // Lines with isOr:false after isOr:true are continuations (AND within OR)
                const groups = [];

                scannedLines.forEach(line => {
                    if (line.isOr) {
                        // Start new OR group
                        groups.push({ indicators: [...line.indicators] });
                    } else {
                        // Continuation of previous group (AND within OR)
                        if (groups.length > 0) {
                            groups[groups.length - 1].indicators.push(...line.indicators);
                        } else {
                            // First group is not OR (should not happen, but handle it)
                            groups.push({ indicators: [...line.indicators] });
                        }
                    }
                });

                return {
                    groups: groups,
                    isOr: true
                };
            }

            // AND format: combine all indicators into single group
            const allIndicators = [];
            scannedLines.forEach(line => {
                allIndicators.push(...line.indicators);
            });
            return {
                groups: [{ indicators: allIndicators }],
                isOr: false
            };
        };

        // Extract COLOR with indicators (with OR support)
        const colorMatch = nextLine.match(/COLOR\((\w+)\)/);
        if (colorMatch) {
            const color = colorMatch[1];

            if (!field.color) {
                field.color = color;
                Logger.parse(`Found color ${field.color} for ${contextLabel} field ${field.name} at offset ${lineOffset}`);
            }

            if (!field.colors) {
                field.colors = [];
            }
            if (!field.colors.includes(color)) {
                field.colors.push(color);
            }

            if (preserveOriginalSpacing) {
                field.originalColorLines = field.originalColorLines || {};
                // Store all lines for this color (for regeneration)
                if (!field.originalColorLines[color]) {
                    field.originalColorLines[color] = [];
                }
                field.originalColorLines[color].push(nextLine);
            }

            // Store indicators using unified structure
            const indicatorData = buildIndicatorGroups();
            if (indicatorData) {
                if (!field.colorIndicators) {
                    field.colorIndicators = {};
                }

                // If color already exists AND we're not in a modification state, accumulate groups
                // Otherwise replace (to avoid duplicating lines after user modifications)
                const shouldAccumulate = field.colorIndicators[color] && !field.colorIndicatorsModified;

                if (shouldAccumulate) {
                    field.colorIndicators[color].groups.push(...indicatorData.groups);
                    // Update isOr flag if any group is OR
                    field.colorIndicators[color].isOr = field.colorIndicators[color].isOr || indicatorData.isOr;
                    Logger.debug(`[${contextLabel}] COLOR ${color}: Accumulated ${indicatorData.groups.length} more group(s), total=${field.colorIndicators[color].groups.length}`);
                } else {
                    field.colorIndicators[color] = indicatorData;
                    Logger.debug(`[${contextLabel}] COLOR ${color}: Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                }

                indicatorData.groups.forEach((g, i) => {
                    Logger.debug(`[${contextLabel}]   Group ${i}: ${g.indicators.length} indicators:`, g.indicators.map(ind => ind.number + (ind.not ? 'N' : '')).join(', '));
                });
            }
        }

        // Extract DSPATR attributes with indicators (with OR support)
        const attrResult = extractAttributes(nextLine, nextLine);
        if (attrResult.attrs && Object.keys(attrResult.attrs).length > 0) {
            field.attributes = { ...field.attributes, ...attrResult.attrs };

            if (preserveOriginalSpacing) {
                field.originalAttrLines = field.originalAttrLines || {};
            }

            if (attrResult.isGroupedFormat) {
                field.hasGroupedDspatr = true;
                if (preserveOriginalSpacing) {
                    field.groupedDspatrLine = nextLine;
                }
            }

            for (const [attrName, attrValue] of Object.entries(attrResult.attrs)) {
                if (attrValue && preserveOriginalSpacing) {
                    // Store all lines for this attribute
                    if (!field.originalAttrLines[attrName]) {
                        field.originalAttrLines[attrName] = [];
                    }
                    field.originalAttrLines[attrName].push(nextLine);
                }
            }

            // Store indicators using unified structure
            const indicatorData = buildIndicatorGroups();
            if (indicatorData) {
                for (const [attrName, attrValue] of Object.entries(attrResult.attrs)) {
                    if (attrValue) {
                        if (!field.attributeIndicators) {
                            field.attributeIndicators = {};
                        }

                        // If attribute already exists AND we're not in a modification state, accumulate groups
                        // Otherwise replace (to avoid duplicating lines after user modifications)
                        const shouldAccumulate = field.attributeIndicators[attrName] && !field.attributeIndicatorsModified;

                        if (shouldAccumulate) {
                            field.attributeIndicators[attrName].groups.push(...indicatorData.groups);
                            // Update isOr flag if any group is OR
                            field.attributeIndicators[attrName].isOr = field.attributeIndicators[attrName].isOr || indicatorData.isOr;
                            Logger.debug(`[${contextLabel}] DSPATR ${attrName}: Accumulated ${indicatorData.groups.length} more group(s), total=${field.attributeIndicators[attrName].groups.length}`);
                        } else {
                            field.attributeIndicators[attrName] = indicatorData;
                            Logger.debug(`[${contextLabel}] DSPATR ${attrName}: Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                        }
                    }
                }
            }
        }

        // Extract DFTVAL with indicators (same pattern as COLOR/DSPATR)
        const dftvalMatch = nextLine.match(/DFTVAL\('([^']*)'\)/);
        Logger.debug(`[${contextLabel}] Checking line ${startIndex + lineOffset + 1} for DFTVAL: ${nextTrimmed.substring(0, 50)}`);
        Logger.debug(`[${contextLabel}] DFTVAL match result:`, dftvalMatch ? `YES (value='${dftvalMatch[1]}')` : 'NO');
        if (dftvalMatch) {
            const value = dftvalMatch[1];
            field.dftval = { value: value };

            Logger.parse(`Found DFTVAL='${value}' for ${contextLabel} field ${field.name} at offset ${lineOffset}`);

            Logger.debug(`[${contextLabel}] DFTVAL processing - scannedLines count: ${scannedLines.length}`);
            Logger.debug(`[${contextLabel}] DFTVAL processing - currentLineIndicators:`, currentLineIndicators);
            scannedLines.forEach((sl, idx) => {
                Logger.debug(`[${contextLabel}]   DFTVAL scannedLine ${idx}: ${sl.indicators.length} indicators, isOr=${sl.isOr}`, sl.indicators.map(i => i.number).join(','));
            });

            // Store indicators using unified structure (same as COLOR/DSPATR)
            const indicatorData = buildIndicatorGroups();
            if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                field.dftvalIndicators = indicatorData;
                Logger.debug(`[${contextLabel}] DFTVAL: Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                indicatorData.groups.forEach((g, i) => {
                    Logger.debug(`[${contextLabel}]   DFTVAL Group ${i}: ${g.indicators.length} indicators:`, g.indicators.map(ind => ind.number + (ind.not ? 'N' : '')).join(', '));
                });
            } else {
                Logger.debug(`[${contextLabel}] DFTVAL: No indicator groups built (no indicators present)`);
            }
        }

        if (includeChecks) {
            const checkMatch = nextLine.match(/CHECK\(([^)]+)\)/);
            if (checkMatch) {
                Logger.debug(`[${contextLabel}] ===== FOUND CHECK LINE =====`);
                Logger.debug(`[${contextLabel}] nextLine: "${nextLine}"`);
                Logger.debug(`[${contextLabel}] lineOffset: ${lineOffset}`);
                Logger.debug(`[${contextLabel}] scannedLines.length: ${scannedLines.length}`);
                Logger.debug(`[${contextLabel}] hasOrLines: ${hasOrLines}`);
                Logger.debug(`[${contextLabel}] scannedLines:`, JSON.stringify(scannedLines));

                const codes = checkMatch[1].trim().split(/\s+/);
                Logger.debug(`[${contextLabel}] CHECK codes found: ${codes.join(', ')}`);

                // Store enabled check options
                if (!field.checkOptions) { field.checkOptions = {}; }
                codes.forEach(code => {
                    field.checkOptions[code] = true;
                });

                if (preserveOriginalSpacing) {
                    field.originalCheckLines = field.originalCheckLines || {};
                    codes.forEach(code => {
                        field.originalCheckLines[code] = nextLine;
                    });
                }

                // For ME and ER codes, store indicators using unified structure (same as COLOR)
                codes.forEach(code => {
                    if (['ME', 'ER'].includes(code)) {
                        Logger.debug(`[${contextLabel}] Processing CHECK(${code}) - calling buildIndicatorGroups()`);
                        const indicatorData = buildIndicatorGroups();
                        Logger.debug(`[${contextLabel}] CHECK(${code}): buildIndicatorGroups returned:`, JSON.stringify(indicatorData));
                        if (indicatorData && indicatorData.groups && indicatorData.groups.length > 0) {
                            if (!field.checkIndicators) { field.checkIndicators = {}; }
                            field.checkIndicators[code] = indicatorData;
                            Logger.debug(`[${contextLabel}] CHECK(${code}): Stored ${indicatorData.groups.length} group(s), isOr=${indicatorData.isOr}`);
                            indicatorData.groups.forEach((g, idx) => {
                                Logger.debug(`[${contextLabel}]   CHECK(${code}) Group ${idx}: ${g.indicators.length} indicators: ${g.indicators.map(i => (i.not ? 'N' : '') + i.number).join(', ')}`);
                            });
                        } else {
                            Logger.debug(`[${contextLabel}] CHECK(${code}): No indicators stored (indicatorData is null or empty)`);
                        }
                    } else {
                        Logger.debug(`[${contextLabel}] Skipping indicators for CHECK(${code}) - not ME/ER`);
                    }
                });

                Logger.debug(`[${contextLabel}] Stored CHECK options for field ${field.name}`);
                Logger.debug(`[${contextLabel}] field.checkIndicators:`, JSON.stringify(field.checkIndicators));
            }
        }

        lineOffset++;
    }
}


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
function showNotification(options) {
    const { message, type = 'info' } = options;

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    const styles = {
        success: { background: '#4caf50', color: 'white' },
        error: { background: '#f44336', color: 'white' },
        info: { background: '#2196F3', color: 'white' }
    };

    const style = styles[type] || styles.info;
    Object.assign(notification.style, {
        position: 'fixed',
        top: '70px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '4px',
        backgroundColor: style.background,
        color: style.color,
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        zIndex: '10001',
        animation: 'slideIn 0.3s ease-out'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateDocumentInEditor: () => (/* binding */ updateDocumentInEditor)
/* harmony export */ });
function updateDocumentInEditor(options) {
    const {
        currentRecord,
        currentDocument,
        Logger
    } = options;

    const preservedRecord = currentRecord;

    const sourceTextarea = document.getElementById('source-content');
    if (sourceTextarea) {
        sourceTextarea.value = currentDocument;
    }

    if (Logger) {
        Logger.dds('Document updated internally, waiting for Save. Record context:', preservedRecord);
    }
}


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildVariableTypeAndUsageUI: () => (/* binding */ buildVariableTypeAndUsageUI)
/* harmony export */ });
function buildVariableTypeAndUsageUI({
    field
}) {
    const isDate = field.dataType === 'date';
    const isTime = field.dataType === 'time';
    const isTimestamp = field.dataType === 'timestamp';
    const length = isDate ? 10 : (isTime ? 8 : (isTimestamp ? 26 : (field.length || 10)));
    const decimals = field.decimals || 0;

    // Map dataType to DDS type character
    let typeChar = 'A';
    if (field.dataType === 'character') {
        typeChar = 'A';
    } else if (field.dataType === 'zoned') {
        typeChar = field.shift || 'Y';
    } else if (field.dataType === 'float') {
        typeChar = 'F';
    } else if (field.dataType === 'double') {
        typeChar = field.shift || 'J';
    } else if (field.dataType === 'date') {
        typeChar = 'L';
    } else if (field.dataType === 'time') {
        typeChar = 'T';
    } else if (field.dataType === 'timestamp') {
        typeChar = 'Z';
    }

    const typeSpec = isDate ? 'L' : (isTime ? 'T' : (isTimestamp ? 'Z' : `${length}${typeChar}`));
    const isNumeric = ['zoned', 'float', 'double'].includes(field.dataType);

    // Determine usage character
    let usageChar = 'O';
    if (field.usage === 'I') {
        usageChar = 'I';
    } else if (field.usage === 'O') {
        usageChar = 'O';
    } else if (field.usage === 'B') {
        usageChar = 'B';
    } else {
        // Fallback to old field.type
        if (field.type === 'input') {
            usageChar = 'I';
        } else if (field.type === 'output') {
            usageChar = 'O';
        } else {
            usageChar = 'O';
        }
    }

    // Build type and usage string
    let typeAndUsage = '';
    if (field.dataType === 'double') {
        typeAndUsage = `${typeSpec}  ${usageChar}`;
    } else if (isNumeric && decimals > 0) {
        typeAndUsage = `${typeSpec} ${decimals}${usageChar}`;
    } else if (isNumeric) {
        typeAndUsage = `${typeSpec} 0${usageChar}`;
    } else {
        typeAndUsage = `${typeSpec}  ${usageChar}`;
    }

    return typeAndUsage;
}


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateConstantFieldLinesUI: () => (/* binding */ generateConstantFieldLinesUI)
/* harmony export */ });
// Generate constant field lines with continuation support AND indicators
function generateConstantFieldLinesUI({
    field,
    IndicatorUtils
}) {
    const rowStr = field.row.toString().padStart(2, ' ');
    const colStr = field.col.toString().padStart(2, ' ');
    const constantValue = field.value || 'TEXT';

    // DDS format: text starts at column 45
    // Dash for continuation goes at column 79
    // Closing quote goes at column 80
    // So we have 34 characters (columns 45-78) for actual text per line
    const maxCharsPerLine = 34;
    const lines = [];

    // Build indicator prefix for the main line and prepended indicator lines
    let indicatorPrefix = '            '; // 12 spaces (default, no indicators)
    const fieldIndicatorLines = []; // For lines BEFORE the constant line

    if (field.indicators && field.indicators.groups && field.indicators.groups.length > 0) {
        const groups = field.indicators.groups;
        const isOr = field.indicators.isOr || false;

        if (isOr && groups.length > 1) {
            // OR FORMAT: Multiple groups
            let allLinesBeforeConst = [];

            groups.forEach((group, groupIndex) => {
                const groupIndicators = group.indicators || [];
                if (groupIndicators.length === 0) {return;}

                const numChunks = Math.ceil(groupIndicators.length / 3);
                for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                    const startIdx = chunkIndex * 3;
                    const chunk = groupIndicators.slice(startIdx, startIdx + 3);
                    const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                    const firstIsNegative = chunk[0]?.not;

                    let prefix, prefixSpaces;
                    if (chunkIndex === 0) {
                        prefix = groupIndex === 0 ? 'A' : 'AO';
                        prefixSpaces = firstIsNegative ? ' ' : '  ';
                        if (prefix === 'AO') {
                            prefixSpaces = firstIsNegative ? '' : ' ';
                        }
                    } else {
                        prefix = 'A';
                        prefixSpaces = firstIsNegative ? ' ' : '  ';
                    }

                    allLinesBeforeConst.push(`     ${prefix}${prefixSpaces}${chunkIndPart}`);
                }
            });

            // Last line goes to constant line, rest go before
            if (allLinesBeforeConst.length > 1) {
                fieldIndicatorLines.push(...allLinesBeforeConst.slice(0, -1));
                const lastLine = allLinesBeforeConst[allLinesBeforeConst.length - 1];
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
            } else if (allLinesBeforeConst.length === 1) {
                const lastLine = allLinesBeforeConst[0];
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
            // AND FORMAT: Single group
            const allIndicators = groups.length > 0 ? groups[0].indicators : [];

            if (allIndicators.length > 3) {
                const numChunks = Math.ceil(allIndicators.length / 3);

                for (let chunkIndex = 0; chunkIndex < numChunks - 1; chunkIndex++) {
                    const startIdx = chunkIndex * 3;
                    const chunk = allIndicators.slice(startIdx, startIdx + 3);
                    const chunkIndPart = IndicatorUtils.formatForDds(chunk);
                    const chunkFirstIsNegative = chunk[0]?.not;
                    const chunkPrefixSpaces = chunkFirstIsNegative ? ' ' : '  ';
                    fieldIndicatorLines.push(`     A${chunkPrefixSpaces}${chunkIndPart}`);
                }

                const lastChunkStart = (numChunks - 1) * 3;
                const lastChunk = allIndicators.slice(lastChunkStart);
                const indPart = IndicatorUtils.formatForDds(lastChunk);
                const firstIsNegative = lastChunk[0]?.not;
                const prefixSpaces = firstIsNegative ? ' ' : '  ';
                const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
            } else if (allIndicators.length > 0) {
                const indPart = IndicatorUtils.formatForDds(allIndicators);
                const firstIsNegative = allIndicators[0]?.not;
                const prefixSpaces = firstIsNegative ? ' ' : '  ';
                const spacesNeeded = 12 - prefixSpaces.length - indPart.length;
                indicatorPrefix = prefixSpaces + indPart + ' '.repeat(Math.max(0, spacesNeeded));
            }
        }
    }

    // Add field indicator lines BEFORE constant line
    if (fieldIndicatorLines.length > 0) {
        lines.push(...fieldIndicatorLines);
    }

    // Build constant line(s) with indicator prefix
    // Format: "     A  03                           19 11'TEXT'"
    const spacingAfterIndicators = ' '.repeat(21); // 21 spaces to reach column 38 (coordinates start at column 39)

    if (constantValue.length <= maxCharsPerLine) {
        // Short constant - single line with indicators
        lines.push(`     A${indicatorPrefix}${spacingAfterIndicators}${rowStr} ${colStr}'${constantValue}'`);
    } else {
        // Long constant - split into multiple lines with dash continuation
        let remainingText = constantValue;
        let isFirstLine = true;

        while (remainingText.length > 0) {
            const chunk = remainingText.substring(0, maxCharsPerLine);
            remainingText = remainingText.substring(maxCharsPerLine);
            const hasContinuation = remainingText.length > 0;

            if (isFirstLine) {
                // First line: includes indicators, row, column, text from column 45
                lines.push(`     A${indicatorPrefix}${spacingAfterIndicators}${rowStr} ${colStr}'${chunk}${hasContinuation ? '-' : '\''}`);
                isFirstLine = false;
            } else {
                // Continuation lines: NO indicators, text starts at column 45, NO opening quote
                lines.push(`     A                                      ${chunk}${hasContinuation ? '-' : '\''}`);
            }
        }
    }

    return lines;
}


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFieldDspatrLinesUI: () => (/* binding */ generateFieldDspatrLinesUI)
/* harmony export */ });
//Generate DSPATR lines for a field
function generateFieldDspatrLinesUI({
    field,
    DSPATR_ATTRIBUTE_MAP,
    applyIndicatorChangesToField,
    generateDdsLineWithIndicators,
    Logger
}) {
    // Apply any pending indicator changes from the Map before generating DDS
    applyIndicatorChangesToField(field);

    const lines = [];

    if (!field.attributes || Object.keys(field.attributes).length === 0) {
        return lines;
    }

    // Check if this field originally had a grouped DSPATR format
    if (field.hasGroupedDspatr) {
        // Preserve grouped format: regenerate DSPATR(XX YY ZZ) with active attributes
        const activeCodes = [];
        for (const [attrName, ddsCode] of Object.entries(DSPATR_ATTRIBUTE_MAP)) {
            if (field.attributes[attrName]) {
                activeCodes.push(ddsCode);
            }
        }

        if (activeCodes.length > 0) {
            // Get indicators from the first attribute (all share same indicators in grouped format)
            const firstAttr = Object.keys(field.attributes).find(k => field.attributes[k]);
            const indicatorData = field.attributeIndicators && firstAttr ?
                (field.attributeIndicators[firstAttr] || []) : [];

            const groupedDspatr = `DSPATR(${activeCodes.join(' ')})`;
            const generated = generateDdsLineWithIndicators(groupedDspatr, indicatorData);
            // Split by newline in case generateDdsLineWithIndicators returns multiple lines (OR groups)
            const generatedLines = generated.split('\n');
            lines.push(...generatedLines);
            Logger.dds('Generated grouped DSPATR line with indicators');
        }
    } else {
        // Individual format: one DSPATR per line
        for (const [attrName, ddsCode] of Object.entries(DSPATR_ATTRIBUTE_MAP)) {
            if (field.attributes[attrName]) {
                // Preserve original line(s) if indicators haven't changed (now an array)
                if (field.originalAttrLines && field.originalAttrLines[attrName] && !field.attributeIndicatorsModified && Array.isArray(field.originalAttrLines[attrName])) {
                    Logger.dds(`Preserving ${field.originalAttrLines[attrName].length} original DSPATR line(s) for ${attrName}`);
                    lines.push(...field.originalAttrLines[attrName]);
                } else {
                    Logger.dds(`Generating new DSPATR line(s) for ${attrName}`);
                    const indicatorData = field.attributeIndicators && field.attributeIndicators[attrName] ? field.attributeIndicators[attrName] : [];
                    const generated = generateDdsLineWithIndicators(`DSPATR(${ddsCode})`, indicatorData);
                    // Split by newline in case generateDdsLineWithIndicators returns multiple lines (OR groups)
                    const generatedLines = generated.split('\n');
                    lines.push(...generatedLines);
                }
            }
        }
    }

    return lines;
}


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFieldColorLinesUI: () => (/* binding */ generateFieldColorLinesUI)
/* harmony export */ });
// Generate COLOR lines for a field
function generateFieldColorLinesUI({
    field,
    applyIndicatorChangesToField,
    generateDdsLineWithIndicators,
    Logger
}) {
    // Apply any pending indicator changes from the Map before generating DDS
    applyIndicatorChangesToField(field);

    const lines = [];

    if (field.colors && field.colors.length > 1) {
        // Multiple colors - each on separate line with indicators
        field.colors.forEach(color => {
            const indicatorData = field.colorIndicators && field.colorIndicators[color] ? field.colorIndicators[color] : [];

            // Check if we should preserve original lines (originalColorLines is now an array)
            if (field.originalColorLines && field.originalColorLines[color] && !field.colorIndicatorsModified && Array.isArray(field.originalColorLines[color])) {
                Logger.dds(`Preserving ${field.originalColorLines[color].length} original COLOR line(s) for ${color}`);
                lines.push(...field.originalColorLines[color]);
            } else {
                // Generate new line(s) - may be multiple if OR groups exist
                const generated = generateDdsLineWithIndicators(`COLOR(${color})`, indicatorData);
                lines.push(generated);
            }
        });
    } else if (field.color) {
        // Single color - check if it has indicators
        const indicatorData = field.colorIndicators && field.colorIndicators[field.color] ? field.colorIndicators[field.color] : [];

        // Check if indicatorData has any groups with indicators
        const hasIndicators = Array.isArray(indicatorData) ? indicatorData.length > 0 :
                             (indicatorData.groups && indicatorData.groups.length > 0);

        if (hasIndicators) {
            // Has indicators - must be on separate line
            if (field.originalColorLines && field.originalColorLines[field.color] && !field.colorIndicatorsModified && Array.isArray(field.originalColorLines[field.color])) {
                lines.push(...field.originalColorLines[field.color]);
            } else {
                const generated = generateDdsLineWithIndicators(`COLOR(${field.color})`, indicatorData);
                lines.push(generated);
            }
        }
        // If no indicators, return empty array (will be added inline)
    }

    return lines;
}


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFieldCheckLinesUI: () => (/* binding */ generateFieldCheckLinesUI)
/* harmony export */ });
// Generate CHECK keyword lines for a field
function generateFieldCheckLinesUI({
    field,
    CHECK_CHAR_CODES,
    CHECK_NUMERIC_CODES,
    generateDdsLineWithIndicators,
    Logger
}) {
    const lines = [];
    if (!field.checkOptions) {return lines;}
    const orderedCodes = [...CHECK_CHAR_CODES, ...CHECK_NUMERIC_CODES];
    const seen = new Set();
    orderedCodes.forEach(code => {
        if (seen.has(code)) {return;}
        seen.add(code);
        if (!field.checkOptions[code]) {return;}
        const keyword = `CHECK(${code})`;
        if (['ME', 'ER'].includes(code)) {
            // ME and ER support indicators with OR groups
            const indicatorData = field.checkIndicators && field.checkIndicators[code] ? field.checkIndicators[code] : null;

            Logger.debug(`[CHECK GEN ${code}] field.checkIndicators[${code}]:`, indicatorData);

            const hasIndicators = indicatorData && indicatorData.groups && indicatorData.groups.length > 0;

            Logger.debug(`[CHECK GEN ${code}] hasIndicators=${hasIndicators}`);

            if (hasIndicators) {
                Logger.debug(`[CHECK GEN ${code}] Calling generateDdsLineWithIndicators with keyword="${keyword}"`);
                const generated = generateDdsLineWithIndicators(keyword, indicatorData);
                Logger.debug(`[CHECK GEN ${code}] Generated result (type=${typeof generated}):`, generated);
                Logger.debug(`[CHECK GEN ${code}] Generated length: ${generated.length} chars`);
                lines.push(generated); // Push complete string (may contain \n for OR groups)
            } else {
                Logger.debug(`[CHECK GEN ${code}] No indicators, using default line`);
                lines.push(`     A                                      ${keyword}`);
            }

            Logger.debug(`[CHECK GEN ${code}] Returning ${lines.length} line(s) for this code`);
        } else {
            lines.push(`     A                                      ${keyword}`);
        }
    });
    return lines;
}


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFieldDftvalLinesUI: () => (/* binding */ generateFieldDftvalLinesUI)
/* harmony export */ });
// Generate DFTVAL keyword lines for a field
function generateFieldDftvalLinesUI({
    field,
    generateDdsLineWithIndicators,
    Logger
}) {
    const lines = [];
    if (!field.dftval || !field.dftval.value) {return lines;}
    const dftvalValue = field.dftval.value;
    const keyword = `DFTVAL('${dftvalValue}')`;

    // Support both old format (array) and new format (groups structure)
    const indicatorData = field.dftvalIndicators;

    Logger.debug(`[DFTVAL GEN] field.dftvalIndicators:`, indicatorData);

    // Check if indicatorData has any groups with indicators
    const hasIndicators = Array.isArray(indicatorData) ? indicatorData.length > 0 :
                         (indicatorData && indicatorData.groups && indicatorData.groups.length > 0);

    Logger.debug(`[DFTVAL GEN] hasIndicators=${hasIndicators}`);

    if (hasIndicators) {
        // Has indicators - must be on separate line(s)
        // Generate line(s) - may be multiple if OR groups exist (SAME AS COLOR)
        Logger.debug(`[DFTVAL GEN] Calling generateDdsLineWithIndicators with keyword="${keyword}"`);
        const generated = generateDdsLineWithIndicators(keyword, indicatorData);
        Logger.debug(`[DFTVAL GEN] Generated result (type=${typeof generated}):`, generated);
        Logger.debug(`[DFTVAL GEN] Generated length: ${generated.length} chars`);
        lines.push(generated); // Push the complete string (may contain \n for OR groups)
    } else {
        // No indicators - return empty array (will be added inline if needed)
        // For DFTVAL, we always generate a separate line even without indicators
        Logger.debug(`[DFTVAL GEN] No indicators, using default line`);
        lines.push(`     A                                      ${keyword}`);
    }

    Logger.debug(`[DFTVAL GEN] Returning ${lines.length} line(s):`, lines);
    return lines;
}


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateDdsLineWithIndicatorsUI: () => (/* binding */ generateDdsLineWithIndicatorsUI)
/* harmony export */ });
// Generate a DDS line with optional indicators
function generateDdsLineWithIndicatorsUI({
    keyword,
    indicatorsOrGroups,
    IndicatorUtils
}) {
    // Support both old format (array) and new format (groups structure)
    let indicators = [];
    let groups = [];
    let isOr = false;

    if (Array.isArray(indicatorsOrGroups)) {
        // Old format - backward compatibility
        indicators = indicatorsOrGroups;
    } else if (indicatorsOrGroups && indicatorsOrGroups.groups) {
        // New format with OR support
        groups = indicatorsOrGroups.groups;
        isOr = indicatorsOrGroups.isOr;
    }

    // If we have groups with OR, generate multiple lines with AO prefix
    if (groups.length > 1 && isOr) {
        const lines = [];
        groups.forEach((group, groupIndex) => {
            // Check if this group has more than 3 indicators
            if (group.indicators.length > 3) {
                // Split this OR group into multiple lines (3 indicators per line)
                const numChunks = Math.ceil(group.indicators.length / 3);

                for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                    const startIdx = chunkIndex * 3;
                    const chunk = group.indicators.slice(startIdx, startIdx + 3);
                    const indPart = IndicatorUtils.formatForDds(chunk);

                    // Determine prefix:
                    // - First group, any chunk: 'A' (no O)
                    // - Other groups, first chunk: 'AO' (marca inicio del grupo OR)
                    // - Other groups, other chunks: 'A' (continuación AND dentro del grupo)
                    const isFirstChunk = chunkIndex === 0;
                    const isFirstGroup = groupIndex === 0;
                    const prefix = (isFirstGroup || !isFirstChunk) ? 'A' : 'AO';

                    const firstIsNegative = chunk[0]?.not;
                    let prefixSpaces = firstIsNegative ? ' ' : '  ';

                    // Adjust spaces for AO prefix
                    if (prefix === 'AO') {
                        prefixSpaces = firstIsNegative ? '' : ' ';
                    }

                    // targetWidth must be 36 for AO to compensate for the extra character
                    const targetWidth = prefix === 'AO' ? 36 : 37;
                    const spacesNeeded = Math.max(1, targetWidth - indPart.length);

                    // Only add keyword on the LAST line of the LAST group
                    const isLastChunkOfLastGroup = groupIndex === groups.length - 1 && chunkIndex === numChunks - 1;
                    if (isLastChunkOfLastGroup) {
                        lines.push(`     ${prefix}${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`);
                    } else {
                        lines.push(`     ${prefix}${prefixSpaces}${indPart}`);
                    }
                }
            } else {
                // This group has 3 or fewer indicators - single line
                const indPart = IndicatorUtils.formatForDds(group.indicators);
                const prefix = groupIndex === 0 ? 'A' : 'AO';
                const firstIsNegative = group.indicators.length > 0 && group.indicators[0].not;
                let prefixSpaces = firstIsNegative ? ' ' : '  ';

                // Adjust spaces for AO prefix
                if (prefix === 'AO') {
                    prefixSpaces = firstIsNegative ? '' : ' ';
                }

                // targetWidth must be 36 for AO to compensate for the extra character
                const targetWidth = prefix === 'AO' ? 36 : 37;
                const spacesNeeded = Math.max(1, targetWidth - indPart.length);

                // Only add keyword on the LAST group
                if (groupIndex === groups.length - 1) {
                    lines.push(`     ${prefix}${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`);
                } else {
                    lines.push(`     ${prefix}${prefixSpaces}${indPart}`);
                }
            }
        });
        return lines.join('\n');
    }

    // Single group or old format - get all indicators
    const finalIndicators = groups.length > 0 ? groups[0].indicators : indicators;

    if (finalIndicators && finalIndicators.length > 0) {
        // If more than 3 indicators (AND format), split into multiple lines (3 per line max)
        if (finalIndicators.length > 3 && !isOr) {
            const lines = [];
            // Split indicators into chunks of 3, process from end to start
            const numChunks = Math.ceil(finalIndicators.length / 3);

            for (let chunkIndex = 0; chunkIndex < numChunks; chunkIndex++) {
                const startIdx = chunkIndex * 3;
                const chunk = finalIndicators.slice(startIdx, startIdx + 3);
                const indPart = IndicatorUtils.formatForDds(chunk);
                const firstIsNegative = chunk[0]?.not;
                const prefixSpaces = firstIsNegative ? ' ' : '  ';

                // Check if this is the last chunk (will have the keyword)
                const isLastChunk = chunkIndex === numChunks - 1;

                if (isLastChunk) {
                    // Last chunk - add keyword
                    const targetWidth = firstIsNegative ? 37 : 36;
                    const spacesNeeded = Math.max(1, targetWidth - indPart.length);
                    lines.push(`     A${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`);
                } else {
                    // Not last chunk - just indicators
                    lines.push(`     A${prefixSpaces}${indPart}`);
                }
            }
            return lines.join('\n');
        }

        // 3 or fewer indicators - single line
        const indPart = IndicatorUtils.formatForDds(finalIndicators);
        const firstIsNegative = finalIndicators[0]?.not;
        const prefixSpaces = firstIsNegative ? ' ' : '  ';
        const targetWidth = firstIsNegative ? 37 : 36;
        const spacesNeeded = Math.max(1, targetWidth - indPart.length);
        return `     A${prefixSpaces}${indPart}${' '.repeat(spacesNeeded)}${keyword}`;
    }

    return `     A                                      ${keyword}`;
}


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyIndicatorChangesToFieldUI: () => (/* binding */ applyIndicatorChangesToFieldUI)
/* harmony export */ });
function applyIndicatorChangesToFieldUI({
    field,
    indicatorConfigurations,
    Logger
}) {
    if (!field) {return;}

    Logger.dds(`Applying indicator changes from Map to field: ${field.name}`);

    // Iterate through color indicators
    if (field.colors && Array.isArray(field.colors)) {
        field.colors.forEach(color => {
            const key = `color:${color}`;
            if (indicatorConfigurations.has(key)) {
                const indicatorData = indicatorConfigurations.get(key);

                if (!field.colorIndicators) {
                    field.colorIndicators = {};
                }

                // Convert from Map format to field format
                if (indicatorData.isOr && indicatorData.groups) {
                    // OR format - preserve groups structure
                    field.colorIndicators[color] = indicatorData;
                    Logger.dds(`Applied OR indicators for color ${color}:`, indicatorData);
                } else if (indicatorData instanceof Set) {
                    // AND format - convert Set to array for DDS generation
                    // The Set contains JSON strings, so we need to parse them back to objects
                    const indicatorArray = Array.from(indicatorData).map(jsonStr => JSON.parse(jsonStr));
                    field.colorIndicators[color] = indicatorArray;
                    Logger.dds(`Applied AND indicators for color ${color}:`, indicatorArray);
                }
            }
        });
    }

    // Iterate through attribute indicators
    if (field.attributes) {
        Object.keys(field.attributes).forEach(attrName => {
            if (!field.attributes[attrName]) {return;} // Skip inactive attributes

            const key = `attr:${attrName}`;
            if (indicatorConfigurations.has(key)) {
                const indicatorData = indicatorConfigurations.get(key);

                if (!field.attributeIndicators) {
                    field.attributeIndicators = {};
                }

                // Convert from Map format to field format
                if (indicatorData.isOr && indicatorData.groups) {
                    // OR format - preserve groups structure
                    field.attributeIndicators[attrName] = indicatorData;
                    Logger.dds(`Applied OR indicators for attribute ${attrName}:`, indicatorData);
                } else if (indicatorData instanceof Set) {
                    // AND format - convert Set to array for DDS generation
                    // The Set contains JSON strings, so we need to parse them back to objects
                    const indicatorArray = Array.from(indicatorData).map(jsonStr => JSON.parse(jsonStr));
                    field.attributeIndicators[attrName] = indicatorArray;
                    Logger.dds(`Applied AND indicators for attribute ${attrName}:`, indicatorArray);
                }
            }
        });
    }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dspfDesigner.bundle.js.map