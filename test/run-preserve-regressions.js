const { spawnSync } = require('child_process');
const path = require('path');

const tests = [
    'run-update-preserve-unknown.js',
    'run-delete-preserve-block.js',
    'run-move-preserve-indicator-unknown.js',
    'run-sfldspctl-indicator-isolation.js',
    'run-sfldspctl-reinsert-on-enable.js',
    'run-cntfld-regression.js',
    'run-relative-plus-normalization.js',
    'run-window-comment-ignore.js'
];

function runOne(scriptName) {
    const fullPath = path.join(__dirname, scriptName);
    console.log(`\n=== Running ${scriptName} ===`);

    const result = spawnSync(process.execPath, [fullPath], {
        stdio: 'inherit',
        shell: false
    });

    if (result.error) {
        throw result.error;
    }

    return result.status === 0;
}

function main() {
    let passed = 0;

    for (const scriptName of tests) {
        const ok = runOne(scriptName);
        if (!ok) {
            console.error(`\nFailed: ${scriptName}`);
            process.exit(1);
        }
        passed++;
    }

    console.log(`\nAll preserve regressions passed (${passed}/${tests.length}).`);
}

main();
