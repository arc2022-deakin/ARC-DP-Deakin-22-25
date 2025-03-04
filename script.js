function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    showTab('project');  // Default to first tab
});
