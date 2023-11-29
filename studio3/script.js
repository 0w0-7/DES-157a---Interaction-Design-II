(function(){
    'use strict'
    console.log('reading JS');

    const startGame = document.querySelector('#startGame');
    let startScreen = document.querySelector('#startScreen');
    let game = document.querySelector('#game');
    let score = document.querySelector('#score');
    let actionArea = document.querySelector('#actions');
    let colorChange = document.querySelector('#player1 h3');
    let colorChange2 = document.querySelector('#player2 h3');

    const gongSound = new Audio('sounds/gongLong.wav');
    const wrongSound = new Audio('sounds/wrong.mp3');

    const gameData = {
        dice: ['images/die1.png', 'images/die2.png', 'images/die3.png', 'images/die4.png', 'images/die5.png', 'images/die6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        gongSound.play();
        // random set of game index here...
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        // startScreen.innerHTML = '<h2>The game has started</h2>'; // '=' replaces the whole smart screen area, where '+=' adds to the area
        startScreen.innerHTML = '';
        
        startScreen.innerHTML += '<div id="score"></div>';
        score = document.querySelector('#score');
        score.innerHTML += `
            <div id="player1">
                <div class="scoreBoard">
                    <p>${gameData.score[0]}</p>
                </div>
                <h3>Player 1</h3>
            </div>

            <div id="player2">
                <div class="scoreBoard">
                    <p>${gameData.score[1]}</p>
                </div>
                <h3>Player 2</h3>
            </div>`;
            console.log(`${gameData.score[0]}`);
        // colorChange = document.querySelector('#player1 h3');

        startScreen.innerHTML += '<div id="game"></div>';
        game = document.querySelector('#game');
        // game.innerHTML += `
        //     <img src="#" alt="rollCard1">
        //     <img src="#" alt="rollCard2">`;

        startScreen.innerHTML += '<div id="actions"></div>';
        // actionArea = document.querySelector('#actions');
        // actionArea.innerHTML += `
        //     <div>
        //         <button id="btnRoll1" class="actionBtn">Roll 1</button>
        //         <button class="actionBtn">Roll 2</button>
        //     </div>
        //     <button id="pass" class="actionBtn">Pass</button>`;

        // <button id="quit" class="actionBtn">Quit</button>
        startScreen.innerHTML += '<button id="quit">Quit</button>';

        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });
        setUpTurn();
    });

    function setUpTurn(){
        game = document.querySelector('#game');
        // game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        colorChange = document.querySelector('#player1 h3');
        colorChange2 = document.querySelector('#player2 h3');
        if (gameData.index == 0) {
            colorChange.style.color = "green";
            colorChange2.style.color = "";
            console.log(colorChange);
        } else if (gameData.index == 1) {
            console.log(colorChange);
            colorChange.style.color = "";
            colorChange2.style.color = "green";
            console.log(colorChange2);
        }

        actionArea = document.querySelector('#actions');
        actionArea.innerHTML += `
            <div>
                <button id="btnRoll1" class="actionBtn">Roll</button>
            </div>
            <button id="pass" class="actionBtn">Pass</button>`;

        // actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        // document.getElementById('roll').addEventListener('click', function(){
        //     console.log('dice rolled');
        // });

        // actionArea.innerHTML += `
        // <div>
        //     <button id="btnRoll1" class="actionBtn">Roll</button>
        //     <button id="pass" class="actionBtn">Pass</button>
        // </div>
        // <button id="quit" class="actionBtn">Quit</button>`;
        
        throwDice();
    }

    function throwDice() {
        // Empties out the button, don't need it anymore
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1; // Rolling the Die
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        // game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`; // narration
        game.innerHTML = '';
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`; // images

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // checks for adding both dies
        // console.log(gameData.rollSum);
        // console.log(gameData.roll1);
        // console.log(gameData.roll2);

        // if two 1's are rolled...
        if(gameData.rollSum === 2){
            // console.log("snake eyes were rolled");

            // Setting user score back to 0
            // game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            actionArea.innerHTML += `<p>Snake Eyes</p>`; // narration
            wrongSound.play();
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
            actionArea.innerHTML += `<p>You rolled a one. Switching to ${gameData.players[gameData.index]}</p>`; // narration
            
            //Show the current score
            setTimeout(setUpTurn, 2000);
        }
        // if neither die is a ...
        else {
            // console.log("rolled neither snake eyes or a die of 1");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            // actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
            actionArea.innerHTML = `<div> <button id="btnRoll1" class="actionBtn">Roll</button> </div> <button id="pass" class="actionBtn">Pass</button>`;

            // rolls die again
            document.getElementById('btnRoll1').addEventListener('click', function(){
                setUpTurn();
            });
            // swaps player
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index =1);
                setUpTurn();
            });

            // Check winning condition!
            checkWinningCondition();
            // console.log("win check");
        }

    }

    function checkWinningCondition(){
        // if current score is greater than needed winning score, set heading with which player has won, with how many points
        if(gameData.score[gameData.index] > gameData.gameEnd){
            // Win
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            // sets action area to empty
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start New Game";
        }
        else {
            // show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score = document.querySelector('#score');
        score.innerHTML = '';
        score.innerHTML += `
            <div id="player1">
                <div class="scoreBoard">
                    <p>${gameData.score[0]}</p>
                </div>
                <h3>Player 1</h3>
            </div>

            <div id="player2">
                <div class="scoreBoard">
                    <p>${gameData.score[1]}</p>
                </div>
                <h3>Player 2</h3>
            </div>`;

        // console.log(`score check ${gameData.score[0]}`);
        // console.log("score shown");
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