import { getGameState, setGameState, updateCharacterHealth, updateCharacterName, updateInventory, updateMoney } from './gameState.js';
import { gameData } from './gameData.js';
import { handleInteractiveElements } from './interactiveElements.js';

export function loadStoryPage(pageName) {
    let gameState = getGameState();
    gameState.currentPage = pageName;
    setGameState(gameState);

    const pageData = gameData[pageName];

    let html;
    if (typeof pageData.text === 'function') {
        html = `<p>${pageData.text(gameState)}</p>`;
    } else {
        html = `<p>${pageData.text}</p>`;
    }

    if (pageData.input) {
        html += `<input type="${pageData.input.type}" 
        id="${pageData.input.id}" 
        placeholder="${pageData.input.placeholder}" 
        required="${pageData.input.required}" 
        minlength="${pageData.input.minlength}" 
        maxlength="${pageData.input.maxlength}" 
        pattern="${pageData.input.pattern}" 
        title="${pageData.input.title}">`;
    }

    html += '<div class="game-container-options">';  // Start of .game-container-options div

    for (let option of pageData.options) {
        let button = document.createElement('button');
        button.classList.add('story-nav-btn');
        button.dataset.nextPage = option.nextPage;
        button.textContent = option.text;

        // Check if the item, money, or health properties exist and add them to the button's dataset
        if (option.item) {
            button.dataset.item = option.item;
        }
        if (option.money) {
            button.dataset.money = option.money;
        }
        if (option.health) {
            button.dataset.health = option.health;
        }

        html += button.outerHTML;
    }

    html += '</div>';  // End of .game-container-options div

    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = html;

    gameContainer.querySelectorAll('.story-nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (pageData.input) {
                let inputElement = document.getElementById(pageData.input.id);
                let pattern = new RegExp(pageData.input.pattern);
                if (!pattern.test(inputElement.value)) {
                    // Update the input report
                    inputElement.reportValidity();
                    return;
                } else {
                    // Reset the custom validity
                    inputElement.setCustomValidity('');
                }
        
                if (inputElement.id === 'user-name-input') {
                    gameState.userName = inputElement.value;
                    updateCharacterName();  // Update the character's name
                    setGameState(gameState);
                } else if (inputElement.id === 'password-input') {
                    if (inputElement.value === pageData.input.password) {
                        // Password is correct
                        loadStoryPage(pageData.input.correctPasswordNextPage);
                    } else {
                        // Password is incorrect
                        loadStoryPage(pageData.input.wrongPasswordNextPage);
                    }
                    return;
                }
            }
            if (button.dataset.item) {
                gameState.inventory.push(button.dataset.item);
                updateInventory();  // Update the inventory
            }
            if (button.dataset.money) {
                gameState.money += Number(button.dataset.money);
                updateMoney();  // Update the money
            }
            if (button.dataset.health) {
                gameState.characterHealth += Number(button.dataset.health);
                updateCharacterHealth();  // Update the character's health
            }
            setGameState(gameState);
            loadStoryPage(button.dataset.nextPage);
        });

    });

    handleInteractiveElements(pageName);
}
