let activeTab = null;

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // If there is an active tab, remove the 'selected-tab' class and hide its content
        if (activeTab) {
            activeTab.classList.remove('selected-tab');
            document.getElementById(activeTab.dataset.tab).style.display = 'none';
        }

        // If the clicked tab was already active, set activeTab to null and return
        if (activeTab === tab) {
            activeTab = null;
            return;
        }

        // Add the 'selected-tab' class to the clicked tab and show its content
        tab.classList.add('selected-tab');
        const contentDiv = document.getElementById(tab.dataset.tab);
        contentDiv.style.display = 'block';

        // Set the clicked tab as the active tab
        activeTab = tab;
    });
});
