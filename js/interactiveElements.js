import { getGameState, setGameState } from './gameState.js';

export function handleInteractiveElements(pageName) {
    let gameState = getGameState();

    let changeableWords = document.querySelectorAll('.changeable-word');
    changeableWords.forEach((changeableWord, index) => {
        changeableWord.onclick = function () {
            let replacements = JSON.parse(this.dataset.replacements);
            let currentIndex = gameState.pageStates[pageName]?.changeableWord?.[index] || 0;

            // If we've reached the end of the replacements, disable the click event and return
            if (currentIndex >= replacements.length) {
                this.classList.add('changeable-word-clicked');
                this.onclick = null;  // Disable the click event
                return;
            }

            let nextIndex = currentIndex + 1;
            this.textContent = replacements[currentIndex % replacements.length];
            gameState.pageStates[pageName] = { 
                ...gameState.pageStates[pageName], 
                'changeableWord': { 
                    ...gameState.pageStates[pageName]?.changeableWord, 
                    [index]: nextIndex 
                },
                'changeableWordText': {
                    ...gameState.pageStates[pageName]?.changeableWordText,
                    [index]: this.textContent
                }
            };
            setGameState(gameState);

            // If we've reached the end of the replacements after updating, add the 'changeable-word-clicked' class
            if (nextIndex >= replacements.length) {
                this.classList.add('changeable-word-clicked');
                this.onclick = null;  // Disable the click event
            }
        };
        if (gameState.pageStates[pageName] && gameState.pageStates[pageName].changeableWord?.[index]) {
            let replacements = JSON.parse(changeableWord.dataset.replacements);
            let currentIndex = gameState.pageStates[pageName].changeableWord[index];
            changeableWord.textContent = replacements[currentIndex % replacements.length] || gameState.pageStates[pageName].changeableWordText[index];
            if (currentIndex >= replacements.length) {
                changeableWord.classList.add('changeable-word-clicked');
                changeableWord.onclick = null;  // Disable the click event
            }
        }
    });

    let invisibleWords = document.querySelectorAll('.invisible-word');
    invisibleWords.forEach((invisibleWord, index) => {
        invisibleWord.onclick = function () {
            this.classList.replace('invisible-word', 'invisible-word-clicked');
            gameState.pageStates[pageName] = {
                ...gameState.pageStates[pageName],
                'invisibleWord': {
                    ...gameState.pageStates[pageName]?.invisibleWord,
                    [index]: true
                }
            };
            setGameState(gameState);
        };
        if (gameState.pageStates[pageName] && gameState.pageStates[pageName].invisibleWord?.[index]) {
            invisibleWord.classList.replace('invisible-word', 'invisible-word-clicked');
        }
    });
}
