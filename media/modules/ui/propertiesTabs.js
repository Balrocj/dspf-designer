export function setupPropertiesTabs() {
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
