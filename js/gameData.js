export const gameData = {
    "page1": {
        "text": "Welcome to the game! Please enter your name.",
        "input": {
            "type": "text",
            "id": "user-name-input",
            "placeholder": "Enter your name here",
            "required": true,
            "minlength": 1,
            "maxlength": 20,
            "pattern": "^[a-zA-Z' \\-]*$",
            "title": "Your input should only contain letters (A-Z, a-z), hyphens (-), and apostrophes ('). The maximum length allowed is 20 characters."
        }, 
        "options": [
            { "text": "Continue", "nextPage": "page2" }
        ]
    },
    "page2": {
        "text": (gameState) => `Hi, ${gameState.userName}. You enter the tunnel. <span class='highlight'>You find yourself</span> in a <span class='changeable-word' data-replacements='[\"bright, sunny meadow\", \"a bustling city\", \"a quiet forest\"]'>dark, damp dungeon</span>. Two paths: a  tunnel and  door. You see <span class='invisible-word'>secret passage</span>.`,
        "options": [
            { "text": "2 to 3", "nextPage": "page3" },
            { "text": "2 to 4", "nextPage": "page4" }
        ]
    },
    "page3": {
        "text": "<span class='highlight'>You enter the tunnel.</span> The air grows <span class='changeable-word' data-replacements='[\"hot\", \"warm\", \"cool\"]'>colder</span>.  two objects: a <span class='invisible-word'>sword</span> glowing.",
        "options": [
            { "text": "3 to 2", "nextPage": "page2" },
            { "text": "3 to 5", "nextPage": "page5" }
        ]
    },
    "page4": {
        "text": "<span class='invisible-word'>hidden1</span> <span class='changeable-word' data-replacements='[\"Me\"]'>You.</span> <span class='changeable-word' data-replacements='[\"Without\"]'>With.</span> <span class='invisible-word'>hidden2</span>" ,
        "options": [
            { "text": "4 to 2", "nextPage": "page2" },
            { "text": "4 to 6", "nextPage": "page6" }
        ]
    },
    "page5": {
        "text": "You find a bag of gold coins. Do you want to take it or leave it?",
        "options": [
            { 
                "text": "Take the gold (5 to 2)", 
                "nextPage": "page2",
                "money": +100
            },
            { 
                "text": "Leave the gold (5 to 7)", 
                "nextPage": "page7",
                "money": -50
            }
        ]
    },
    "page6": {
        "text": "You see a shiny sword and a sturdy shield. Which one do you pick up?",
        "options": [
            { 
                "text": "Pick up the sword (6 to 2)", 
                "nextPage": "page2",
                "item": "sword"
            },
            { 
                "text": "Pick up the shield (6 to 8)", 
                "nextPage": "page8",
                "item": "shield"
            }
        ]
    },
    "page7": {
        "text": "You encounter a wild beast. Do you fight it or run away?",
        "options": [
            { 
                "text": "Fight the beast (7 to 2)", 
                "nextPage": "page2",
                "health": -20
            },
            {
                "text": "Run away (7 to 9)", 
                "nextPage": "page9",
                "health": +10
            }
        ]
    },
    "page8": {
        "text": "You find a mysterious potion. Do you drink it or pour it out?",
        "options": [
            { 
                "text": "Drink the potion (8 to 2)", 
                "nextPage": "page2",
                "health": +50,
                "money": -30,
                "item": "empty potion bottle"
            },
            { 
                "text": "Pour out the potion (8 to 2)", 
                "nextPage": "page2",
                "item": "full potion bottle"
            }
        ]
    },
    "page9": {
        "text": "Please enter the password.",
        "input": {
            "type": "text",
            "id": "password-input",
            "placeholder": "Enter the password here",
            "required": true,
            "minlength": 1,
            "maxlength": 15,
            "pattern": ".+",
            "title": "The password field cannot be empty.",
            "password": "Password1",  // The correct password
            "correctPasswordNextPage": "page10",  // The next page if the password is correct
            "wrongPasswordNextPage": "page11",  // The next page if the password is wrong   
        },
        "options": [
            { "text": "Submit", "nextPage": "" }
        ]
    },
    "page10": {
        "text": "The first password is correct. Please enter the second password.",
        "input": {
            "type": "text",
            "id": "password-input",
            "placeholder": "Enter the password here",
            "required": true,
            "minlength": 1,
            "maxlength": 15,
            "pattern": ".+",
            "title": "The password field cannot be empty.",
            "password": "Password2" ,  // The correct password
            "correctPasswordNextPage": "page2",  // The next page if the password is correct
            "wrongPasswordNextPage": "page11",  // The next page if the password is wrong   
        },
        "options": [
            { "text": "Submit", "nextPage": "" }
        ]
    },
    "page11": {
        "text": "The password is incorrect. Please try again.",
        "options": [
            { "text": "Try again", "nextPage": "page9" },
            { "text": "Go back to page 2", "nextPage": "page2" }
        ]
    }    
};
