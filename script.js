function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    showTab('project');
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('nav.tabs button');

    // Hide all sections
    tabs.forEach(tab => tab.classList.add('hidden'));

    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab
    document.getElementById(tabId).classList.remove('hidden');

    // Add 'active' class to the clicked button
    const index = ['project', 'github', 'publications', 'news', 'team'].indexOf(tabId);
    if (index !== -1) buttons[index].classList.add('active');
}
