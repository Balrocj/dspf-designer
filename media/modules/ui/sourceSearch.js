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

export function setupSourceSearch({ Logger }) {
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
