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

document.addEventListener('DOMContentLoaded', () => {
    const tabIds = ['project', 'github', 'publications', 'news', 'team'];
    const hash = window.location.hash.replace('#', '');
    const savedTab = tabIds.includes(hash) ? hash : localStorage.getItem('activeTab') || 'project';

    showTab(savedTab);

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('fade-ready');
    });
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('nav.tabs button');
    const tabIds = ['project', 'github', 'publications', 'news', 'team'];

    tabs.forEach(tab => {
        tab.classList.add('hidden');
        tab.classList.remove('fade-in');
    });
    buttons.forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) {
        target.classList.remove('hidden');
        void target.offsetWidth;
        target.classList.add('fade-in');
    }

    const index = tabIds.indexOf(tabId);
    if (index !== -1) {
        buttons[index].classList.add('active');
    }

    localStorage.setItem('activeTab', tabId);
    window.location.hash = tabId;
}
