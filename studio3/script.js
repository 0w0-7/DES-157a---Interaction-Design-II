(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // console.log(gameData.players[gameData.index]);

    startGame.addEventListener('click', function(){
        // random set of game index here...

        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The game has started</h2>';
        gameControl.innerHTML += '<button id="quit">Quit?</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>'; 
        document.getElementById('roll').addEventListener('click', function(){
            console.log('dice rolled');
        });
        throwDice();
    }

    function throwDice() {
        // Empties out the button, don't need it anymore
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1; // Rolling the Die
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // checks for adding both dies
        // console.log(gameData.rollSum);
        // console.log(gameData.roll1);
        // console.log(gameData.roll2);

        // if two 1's are rolled...
        if(gameData.rollSum === 2){
            // console.log("snake eyes were rolled");

            // Setting user score back to 0
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            // Telling whether you're on player one or two and setting back to 0
            gameData.score[gameData.index] = 0;
            // If the gameData is 1 set it to 0, else set to 1 set as 1
            gameData.index ? (gameData.index = 0) : (gameData.index =1);

            showCurrentScore();
            //Show the current score
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            // console.log("one of the two dice was a 1");
            // end the turn, switch to other player
            gameData.index ? (gameData.index = 0) : (gameData.index =1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one. Switching to ${gameData.players[gameData.index]}</p>`;
            
            //Show the current score
            setTimeout(setUpTurn, 2000);
        }
        // if neither die is a ...
        else {
            // console.log("the game proceeds");

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            // rolls die again
            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            // swaps player
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index =1);
                setUpTurn();
            });

            // Check winning condition!
            checkWinningCondition();
        }

    }

    function checkWinningCondition(){
        // if current score is greater than needed winning score, set heading with which player has won, with how many points
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            // sets action area to empty
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else {
            // show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score for ${gameData.players[0]} is <strong>${gameData.score[0]}</strong> and the score for ${gameData.players[1]} is currently <strong>${gameData.score[1]}</strong></p>`
    }

})();



// //This gets the current player: 
// gameData.players[gameData.index]

// //This gets the first die and the second die: 
// gameData.dice[gameData.roll1-1]
// gameData.dice[gameData.roll2-1]

// //This gets the score of the current player: 
// gameData.score[gameData.index]

// //This gets the index, or turn
// gameData.index

// //This gets the individual dice values and the added dice value
// gameData.roll1
// gameData.roll2
// gameData.rollSum

// //This gets the winning threshold
// gameData.rollSum