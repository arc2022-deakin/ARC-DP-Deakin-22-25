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

const tabButtons = document.querySelectorAll('nav.tabs button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    // Hide all tab contents
    tabContents.forEach(c => c.classList.add('hidden'));

    // Activate the clicked tab and its content
    btn.classList.add('active');
    tabContents[index].classList.remove('hidden');
  });
});
