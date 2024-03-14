# Interactive Story Game

This is a text-based, single-page application game similar to Dungeons and Dragons. The game is built with HTML, CSS, and JavaScript.

## Folder Structure

├── index.html 
├── css 
│   └── style.css 
└── js 
    ├── themeSwitcher.js 
    ├── gameData.js 
    ├── gameState.js 
    ├── interactiveElements.js 
    ├── navigation.js 
    └── main.js

## How to Use

To play the game, simply open the `index.html` file in your web browser.

### Creating Your Own Game Data

You can create your own game by modifying the `gameData.js` file. The `gameData` object in this file contains the data for each page of your game. Each page is an object with the following properties:

- `text`: This can be a string or a function that returns a string. The function takes the game state as an argument.
- `input`: This is an optional property that can be an object with `type`, `id`, and `placeholder` properties. This is used for pages where the user needs to input something, like their name.
- `options`: This is an array of objects. Each object represents an option that the user can choose on that page. Each option has a `text` property which is the text of the option, and a `nextPage` property which is the name of the page that the user will go to if they choose that option.

### Interactive Elements

The game includes interactive elements that allow the user to change the text of the game. These are implemented using HTML `span` elements with special classes and data attributes. Here are the types of interactive elements:

- `changeable-word`: This is a word or phrase that the user can click to change. It has a `data-replacements` attribute which is a JSON-encoded array of strings. When the user clicks the word, it cycles through the replacements.
- `invisible-word`: This is a word that is initially invisible (transparent). When the user clicks the word, it becomes visible.