let gameState = JSON.parse(localStorage.getItem('gameState')) || {
    currentPage: 'page1',
    userName: '',
    characterClass: '',
    characterHealth: 100,
    pageStates: {},
    inventory: [],
    money: 0
};


export function getGameState() {
    return gameState;
}

export function setGameState(newGameState) {
    gameState = newGameState;
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

export function updateCharacterHealth() {
    document.getElementById('character-health').textContent = gameState.characterHealth;
}

export function updateCharacterName() {
    document.getElementById('character-name').textContent = gameState.userName;
}

export function updateInventory() {
    const inventoryElement = document.getElementById('character-inventory');
    inventoryElement.innerHTML = '';
    for (let item of gameState.inventory) {
        let li = document.createElement('li');
        li.textContent = item;
        inventoryElement.appendChild(li);
    }
}

export function updateMoney() {
    document.getElementById('character-money').textContent = gameState.money;
}

export function saveGame(slot) {
    localStorage.setItem('savedGameState' + slot, JSON.stringify(getGameState()));
}

export function loadGame(slot) {
    const savedGameState = JSON.parse(localStorage.getItem('savedGameState' + slot));
    if (savedGameState) {
        setGameState(savedGameState);
        updateCharacterHealth();
        updateCharacterName();
        updateInventory();
        updateMoney();
    }
}

export function resetGameState() {
    gameState = {
        currentPage: 'page1',
        userName: '',
        characterClass: '',
        characterHealth: 100,
        pageStates: {},
        inventory: [],
        money: 0
    };
    setGameState(gameState);
}
