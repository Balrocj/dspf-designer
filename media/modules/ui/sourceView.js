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

export function updateSourceView({ Logger, vscode, getCurrentDocument, setCurrentDocument, getCurrentRecord, parseDspfFields }) {
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
