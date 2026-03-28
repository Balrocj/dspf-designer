import { openSourceSearchPanel } from './sourceView.js';

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
            if (sourceView && sourceView.classList.contains('active')) {
                e.preventDefault();
                e.stopPropagation();
                openSourceSearchPanel();
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

    Logger.debug('CodeMirror source search setup complete');
}
