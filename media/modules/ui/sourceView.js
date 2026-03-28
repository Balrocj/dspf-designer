let currentDeps = null;
let sourceEditorView = null;
let suppressDocSync = false;
let codeMirrorLoaded = false;

let basicSetup;
let Compartment;
let EditorSelection;
let EditorState;
let EditorView;
let keymap;
let indentWithTab;
let openSearchPanel;
let Decoration;
let ViewPlugin;
let RangeSetBuilder;
let editableCompartment;
let readOnlyCompartment;
let ddsHighlightExtension;

const DDS_KEYWORDS_REGEX = /'(?:''|[^'])*'|\*(?:DS3|DS4|JOB|SYS|YY|YMD|MDY|DMY|JUL|ISO|USA|EUR|JIS)|\b\d+\b|\b[A-Z][A-Z0-9]{1,}\b/gi;

function isCommentLine(lineText) {
    const trimmed = lineText.trim();
    return (lineText.length > 6 && lineText[5] === 'A' && lineText[6] === '*')
        || trimmed.startsWith('A*')
        || trimmed.startsWith('*')
        || trimmed.startsWith('-');
}

function addMark(builder, from, to, className) {
    if (!Decoration || !builder || from >= to) {
        return;
    }

    builder.add(from, to, Decoration.mark({ class: className }));
}

function addTokenMarks(builder, text, basePos) {
    if (!text) {
        return;
    }

    DDS_KEYWORDS_REGEX.lastIndex = 0;
    let match;
    while ((match = DDS_KEYWORDS_REGEX.exec(text)) !== null) {
        const token = match[0];
        const from = basePos + match.index;
        const to = from + token.length;

        let className = 'cm-dds-keyword';
        if (token.startsWith('\'')) {
            className = 'cm-dds-string';
        } else if (token.startsWith('*')) {
            className = 'cm-dds-system';
        } else if (/^\d+$/.test(token)) {
            className = 'cm-dds-number';
        }

        addMark(builder, from, to, className);
    }
}

function decorateLine(builder, lineFrom, lineText) {
    if (!lineText) {
        return;
    }

    if (isCommentLine(lineText)) {
        addMark(builder, lineFrom, lineFrom + lineText.length, 'cm-dds-comment');
        return;
    }

    const specStart = lineFrom + 5;
    const specEnd = Math.min(lineFrom + 6, lineFrom + lineText.length);
    const indicatorStart = lineFrom + 6;
    const indicatorEnd = Math.min(lineFrom + 18, lineFrom + lineText.length);
    const nameStart = lineFrom + 18;
    const nameEnd = Math.min(lineFrom + 28, lineFrom + lineText.length);
    const middleStart = lineFrom + 28;
    const middleEnd = Math.min(lineFrom + 38, lineFrom + lineText.length);
    const tailStart = lineFrom + 38;

    const indicatorText = lineText.slice(6, 18);
    const nameText = lineText.slice(18, 28);
    const middleText = lineText.slice(28, 38);
    const tailText = lineText.slice(38);
    const hasFieldName = /^[A-Z_][A-Z0-9_]{0,9}$/i.test(nameText.trim());

    addMark(builder, specStart, specEnd, 'cm-dds-spec');

    if (indicatorText.trim()) {
        addMark(builder, indicatorStart, indicatorEnd, 'cm-dds-indicators');
    }

    if (hasFieldName && nameText.trim()) {
        addMark(builder, nameStart, nameEnd, 'cm-dds-name');
    }

    addTokenMarks(builder, middleText, middleStart);

    addTokenMarks(builder, tailText, tailStart);
}

function buildVisibleDecorations(editorView) {
    const builder = new RangeSetBuilder();

    for (const range of editorView.visibleRanges) {
        let line = editorView.state.doc.lineAt(range.from);
        while (line.from <= range.to) {
            decorateLine(builder, line.from, line.text);

            if (line.to >= range.to || line.number >= editorView.state.doc.lines) {
                break;
            }

            line = editorView.state.doc.line(line.number + 1);
        }
    }

    return builder.finish();
}

function createDdsHighlightExtension() {
    if (!ViewPlugin) {
        return [];
    }

    return ViewPlugin.fromClass(class {
        constructor(editorView) {
            this.decorations = buildVisibleDecorations(editorView);
        }

        update(update) {
            if (update.docChanged || update.viewportChanged || update.selectionSet) {
                this.decorations = buildVisibleDecorations(update.view);
            }
        }
    }, {
        decorations: value => value.decorations
    });
}

function ensureCodeMirrorLoaded() {
    if (codeMirrorLoaded) {
        return true;
    }

    // The regression harness executes the bundle in a VM with a minimal DOM.
    // Skip loading CodeMirror there and keep Source APIs as no-ops.
    if (typeof document === 'undefined' || !document.documentElement) {
        return false;
    }

    const codemirror = require('codemirror');
    const state = require('@codemirror/state');
    const view = require('@codemirror/view');
    const commands = require('@codemirror/commands');
    const search = require('@codemirror/search');

    basicSetup = codemirror.basicSetup;
    Compartment = state.Compartment;
    EditorSelection = state.EditorSelection;
    EditorState = state.EditorState;
    EditorView = view.EditorView;
    Decoration = view.Decoration;
    ViewPlugin = view.ViewPlugin;
    keymap = view.keymap;
    indentWithTab = commands.indentWithTab;
    openSearchPanel = search.openSearchPanel;
    RangeSetBuilder = state.RangeSetBuilder;

    editableCompartment = new Compartment();
    readOnlyCompartment = new Compartment();
    ddsHighlightExtension = createDdsHighlightExtension();
    codeMirrorLoaded = true;
    return true;
}

function syncRulerSpacerWidth() {
    const gutters = document.querySelector('#source-editor .cm-gutters');
    const spacer = document.querySelector('.ruler-line-number-space');
    if (gutters && spacer) {
        spacer.style.minWidth = gutters.offsetWidth + 'px';
        spacer.style.width = gutters.offsetWidth + 'px';
    }
}

function generateColumnRuler() {
    const rulerMain = document.querySelector('.ruler-main');
    if (!rulerMain) {
        return;
    }
    const rulerText = '....AAN01N02N03..Name++++++RLen++TDpBLinPosFunctions+++++++++++++++++++++++++++Comments+++++++++++';
    rulerMain.textContent = rulerText;
    syncRulerSpacerWidth();
}

function buildSourceExtensions(readOnly = false) {
    if (!ensureCodeMirrorLoaded()) {
        return [];
    }

    return [
        basicSetup,
        ddsHighlightExtension,
        keymap.of([indentWithTab]),
        editableCompartment.of(EditorView.editable.of(!readOnly)),
        readOnlyCompartment.of(EditorState.readOnly.of(readOnly)),
        EditorView.theme({
            '&': {
                height: '100%'
            },
            '.cm-scroller': {
                fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
                fontSize: '14px',
                lineHeight: '1.5'
            },
            '.cm-content': {
                minHeight: '100%',
                tabSize: '4'
            },
            '.cm-gutters': {
                backgroundColor: 'var(--surface-color)',
                color: 'var(--text-muted)',
                borderRight: '1px solid var(--border-color)'
            },
            '.cm-activeLineGutter': {
                backgroundColor: 'var(--surface-color)'
            },
            '.cm-activeLine': {
                backgroundColor: 'rgba(127, 127, 127, 0.12)'
            },
            '.cm-selectionBackground, ::selection': {
                backgroundColor: 'rgba(38, 79, 120, 0.55)'
            }
        }),
        EditorView.updateListener.of(update => {
            if (!update.docChanged || suppressDocSync || !currentDeps) {
                return;
            }

            const { Logger, vscode, setCurrentDocument, getCurrentRecord, parseDspfFields } = currentDeps;
            const updatedDocument = update.state.doc.toString();
            setCurrentDocument(updatedDocument);

            vscode.postMessage({
                type: 'update',
                content: updatedDocument,
                currentRecord: getCurrentRecord()
            });

            parseDspfFields(updatedDocument);
            Logger.debug('CodeMirror source changed, designer view updated');
        })
    ];
}

function getSourceEditorHost() {
    return document.getElementById('source-editor');
}

function ensureSourceEditor(readOnly = false) {
    if (!ensureCodeMirrorLoaded()) {
        return null;
    }

    const sourceEditorHost = getSourceEditorHost();
    if (!sourceEditorHost) {
        return null;
    }

    if (!sourceEditorView) {
        sourceEditorView = new EditorView({
            state: EditorState.create({
                doc: '',
                extensions: buildSourceExtensions(readOnly)
            }),
            parent: sourceEditorHost
        });

        sourceEditorView.scrollDOM.addEventListener('scroll', () => {
            const rulerContent = document.querySelector('.ruler-content');
            if (rulerContent) {
                rulerContent.scrollLeft = sourceEditorView.scrollDOM.scrollLeft;
            }
        });

        // Keep ruler spacer aligned with the gutter as line count changes
        const gutterObserver = new ResizeObserver(() => syncRulerSpacerWidth());
        const waitForGutters = setInterval(() => {
            const gutters = document.querySelector('#source-editor .cm-gutters');
            if (gutters) {
                clearInterval(waitForGutters);
                gutterObserver.observe(gutters);
                syncRulerSpacerWidth();
            }
        }, 50);
    }

    return sourceEditorView;
}

export function getSourceEditorValue() {
    return sourceEditorView ? sourceEditorView.state.doc.toString() : '';
}

export function focusSourceEditor() {
    if (sourceEditorView) {
        sourceEditorView.focus();
    }
}

export function openSourceSearchPanel() {
    if (sourceEditorView && openSearchPanel) {
        openSearchPanel(sourceEditorView);
    }
}

export function setSourceEditorReadOnly(readOnly) {
    const editor = ensureSourceEditor(readOnly);
    if (!editor) {
        return;
    }

    editor.dispatch({
        effects: [
            editableCompartment.reconfigure(EditorView.editable.of(!readOnly)),
            readOnlyCompartment.reconfigure(EditorState.readOnly.of(readOnly))
        ]
    });

    if (editor.dom) {
        editor.dom.style.cursor = readOnly ? 'not-allowed' : 'text';
    }
}

export function setSourceEditorSelection(from, to = from, shouldFocus = true) {
    if (!sourceEditorView || !EditorSelection) {
        return;
    }

    const maxPos = sourceEditorView.state.doc.length;
    const safeFrom = Math.max(0, Math.min(from, maxPos));
    const safeTo = Math.max(0, Math.min(to, maxPos));

    sourceEditorView.dispatch({
        selection: EditorSelection.single(safeFrom, safeTo),
        scrollIntoView: true
    });

    if (shouldFocus) {
        sourceEditorView.focus();
    }
}

export function scrollSourceEditorToLine(lineNumber, offset = 100) {
    if (!sourceEditorView || lineNumber < 1) {
        return;
    }

    const totalLines = sourceEditorView.state.doc.lines;
    const safeLine = Math.max(1, Math.min(lineNumber, totalLines));
    const line = sourceEditorView.state.doc.line(safeLine);
    const coords = sourceEditorView.coordsAtPos(line.from);

    if (!coords) {
        return;
    }

    const scrollerRect = sourceEditorView.scrollDOM.getBoundingClientRect();
    const topInScroller = coords.top - scrollerRect.top + sourceEditorView.scrollDOM.scrollTop;
    sourceEditorView.scrollDOM.scrollTop = Math.max(0, topInScroller - offset);
}

export function updateSourceView({ Logger, vscode, getCurrentDocument, setCurrentDocument, getCurrentRecord, parseDspfFields }) {
    currentDeps = {
        Logger,
        vscode,
        setCurrentDocument,
        getCurrentRecord,
        parseDspfFields
    };

    const sourceEditor = ensureSourceEditor(false);
    if (!sourceEditor) {
        return;
    }

    const currentDocument = getCurrentDocument();
    const currentText = sourceEditor.state.doc.toString();

    if (currentText !== currentDocument) {
        const currentSelection = sourceEditor.state.selection.main;
        const previousScrollTop = sourceEditor.scrollDOM.scrollTop;

        suppressDocSync = true;
        sourceEditor.dispatch({
            changes: { from: 0, to: currentText.length, insert: currentDocument }
        });
        suppressDocSync = false;

        const maxPos = sourceEditor.state.doc.length;
        const restoredFrom = Math.min(currentSelection.from, maxPos);
        const restoredTo = Math.min(currentSelection.to, maxPos);
        sourceEditor.dispatch({
            selection: EditorSelection.single(restoredFrom, restoredTo)
        });

        sourceEditor.scrollDOM.scrollTop = previousScrollTop;
    }

    generateColumnRuler();
}
