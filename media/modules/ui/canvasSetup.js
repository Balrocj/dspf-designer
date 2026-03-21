export function setupCanvasInteraction(deselectAllFields, showScreenProperties) {
    const canvas = document.getElementById('fields-container');

    canvas.addEventListener('click', function(e) {
        if (e.target === this) {
            deselectAllFields();
            showScreenProperties();
        }
    });
}
