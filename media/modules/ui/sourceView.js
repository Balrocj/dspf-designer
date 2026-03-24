let currentDeps = null;

const DDS_KEYWORDS_REGEX = /'(?:''|[^'])*'|\b(?:WINDOW|DSPSIZ|INDARA|CSRINPONLY|VALUES|RANGE|CHECK|COLOR|DSPATR|EDTCDE|EDTWRD|EDTMSK|DFTVAL|DFT|FLTPCN|OVERLAY|RTNCSRLOC|CSRLOC|COMP|TEXT|COLHDG|REFFLD|SFL|SFLCTL|SFLSIZ|SFLPAG|SFLLIN|CA\d+|CF\d+)\b|\*(?:DS3|DS4|JOB|SYS|YY|YMD|MDY|DMY|JUL|ISO|USA|EUR|JIS)|\b\d+\b/gi;

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function wrapToken(text, className) {
    if (!text) {
        return '';
    }
    return `<span class="${className}">${escapeHtml(text)}</span>`;
}

function highlightFreeTextSegment(text) {
    if (!text) {
        return '';
    }

    let html = '';
    let lastIndex = 0;
    let match;

    DDS_KEYWORDS_REGEX.lastIndex = 0;
    while ((match = DDS_KEYWORDS_REGEX.exec(text)) !== null) {
        html += escapeHtml(text.slice(lastIndex, match.index));

        const token = match[0];
        let className = 'source-token-keyword';

        if (token.startsWith('\'')) {
            className = 'source-token-string';
        } else if (token.startsWith('*')) {
            className = 'source-token-system';
        } else if (/^\d+$/.test(token)) {
            className = 'source-token-number';
        }

        html += wrapToken(token, className);
        lastIndex = match.index + token.length;
    }

    html += escapeHtml(text.slice(lastIndex));
    return html;
}

function renderHighlightedSourceLine(line) {
    const trimmed = line.trim();
    const isComment = (line.length > 6 && line[5] === 'A' && line[6] === '*')
        || trimmed.startsWith('A*')
        || trimmed.startsWith('*')
        || trimmed.startsWith('-');

    if (isComment) {
        return wrapToken(line, 'source-token-comment');
    }

    const prefix = line.slice(0, 5);
    const spec = line.slice(5, 6);
    const indicatorArea = line.slice(6, 18);
    const nameArea = line.slice(18, 28);
    const middleArea = line.slice(28, 38);
    const tailArea = line.slice(38);
    const hasFieldName = /^[A-Z_][A-Z0-9_]{0,9}$/i.test(nameArea.trim());

    let html = '';
    html += escapeHtml(prefix);
    html += spec ? wrapToken(spec, 'source-token-spec') : '';
    html += indicatorArea.trim() ? wrapToken(indicatorArea, 'source-token-indicators') : escapeHtml(indicatorArea);
    html += hasFieldName ? wrapToken(nameArea, 'source-token-name') : escapeHtml(nameArea);
    html += hasFieldName && middleArea.trim()
        ? wrapToken(middleArea, 'source-token-type')
        : highlightFreeTextSegment(middleArea);
    html += highlightFreeTextSegment(tailArea);

    return html;
}

function renderSourceSyntaxHighlight(sourceEditor) {
    const syntaxHighlightsContent = document.getElementById('source-syntax-highlights-content');
    if (!sourceEditor || !syntaxHighlightsContent) {
        return;
    }

    const lines = sourceEditor.value.split('\n');
    syntaxHighlightsContent.innerHTML = lines.map(renderHighlightedSourceLine).join('\n');
}

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
    const syntaxHighlightsContent = document.getElementById('source-syntax-highlights-content');
    const searchHighlightsContent = document.getElementById('search-highlights-content');

    if (!sourceEditor || !lineNumbers) {
        return;
    }

    lineNumbers.scrollTop = sourceEditor.scrollTop;

    if (syntaxHighlightsContent) {
        syntaxHighlightsContent.style.transform = `translate(${-sourceEditor.scrollLeft}px, ${-sourceEditor.scrollTop}px)`;
    }

    if (searchHighlightsContent) {
        searchHighlightsContent.style.transform = `translate(${-sourceEditor.scrollLeft}px, ${-sourceEditor.scrollTop}px)`;
    }

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
    renderSourceSyntaxHighlight(event.target);

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
    renderSourceSyntaxHighlight(sourceEditor);

    sourceEditor.removeEventListener('input', handleSourceChange);
    sourceEditor.addEventListener('input', handleSourceChange);

    sourceEditor.removeEventListener('scroll', syncLineNumbersScroll);
    sourceEditor.addEventListener('scroll', syncLineNumbersScroll);
}
