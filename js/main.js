import { loadStoryPage } from './navigation.js';
import { getGameState, updateCharacterHealth, updateCharacterName, updateInventory, updateMoney, saveGame, loadGame, resetGameState } from './gameState.js';

document.addEventListener('DOMContentLoaded', () => {
    loadStoryPage(getGameState().currentPage);
    updateCharacterHealth();
    updateCharacterName();
    updateInventory();
    updateMoney();

    // Hide all tab content divs on page load
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    for (let i = 1; i <= 5; i++) {
        document.querySelector(`button.save-button[data-slot="${i}"]`).addEventListener('click', () => {
            saveGame(i);
            alert(`Game saved in slot ${i}.`);  // New confirmation message
        });
        document.querySelector(`button.load-button[data-slot="${i}"]`).addEventListener('click', () => {
            const savedGameState = JSON.parse(localStorage.getItem('savedGameState' + i));
            if (savedGameState) {
                if (window.confirm(`Are you sure you want to load the game from slot ${i}?`)) {  // New confirmation prompt
                    loadGame(i);
                    loadStoryPage(getGameState().currentPage);
                    updateCharacterHealth();
                    updateCharacterName();
                    updateInventory();
                    updateMoney();
                }
            } else {
                alert(`There is no saved game in slot ${i}.`);
            }
        });
    }

    document.getElementById('reset-button').addEventListener('click', function() {
        if (window.confirm('Are you sure you want to reset the game?')) {
            resetGameState();
            location.reload();
        }
    });
});