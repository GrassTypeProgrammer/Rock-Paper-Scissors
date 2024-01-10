
const Choices = ['scissors', 'paper', 'rock' ];

var _result = "No result yet";
var _playerScore = 0;
var _computerScore = 0;
var _gameOver = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getResults(playerChoice, computerChoice){
    if(this._gameOver){
        reset();
    }
    
    var str = '';
    
    if(playerChoice == computerChoice){
        str = 'Draw! Play again.';
    }
    else if(((playerChoice +1) % 3) == computerChoice){
        this._playerScore++;
        str = `Player Wins! ${Choices[playerChoice]} beats ${Choices[computerChoice]}`;
        addScoreBlock(true);
    }
    else{
        this._computerScore++;
        str = `Computer Wins! ${Choices[computerChoice]} beats ${Choices[playerChoice]}`;
        addScoreBlock(false);
    }

    if(this._playerScore == 5){
        str = "Congratulations! You've won the game! Select another choice to play again.";
        this._gameOver = true;
        deleteAllScoreBlocks();
    }
    else if(this._computerScore == 5){
        str = "Bad Luck! You've lost the game...";
        this._gameOver = true;
        deleteAllScoreBlocks();
    }

    // displayScores();
    
    return str;
}

function getPlayerInput(){
    var playerInput = document.getElementById('inputField').value;
    return Choices.indexOf(playerInput.toLowerCase());
}

function onSelect(){
    playRound(getPlayerInput(), getComputerChoice());
}

function getComputerChoice(){
    return getRandomInt(3);
}

function onClickImg(index){
    playRound(index, getComputerChoice());
}

function playRound(playerChoice, computerChoice){
    this._result = getResults(playerChoice, computerChoice);
    document.getElementById('result').innerHTML = this._result;
    // document.getElementById('inputField').value = "";
}

// function displayScores(){
//     document.getElementById('playerScore').innerHTML = this._playerScore;
//     document.getElementById('computerScore').innerHTML = this._computerScore;
// }

function reset(){
    this._gameOver = false;
    this._playerScore = 0;
    this._computerScore = 0;
}

function addScoreBlock(isPlayerScore){
    const ID = isPlayerScore? 'playerScore' : 'computerScore';

    const scoreBlock = document.createElement('div');
    scoreBlock.classList.add('RPS_scoreBlock');
    scoreBlock.classList.add(ID);

    document.getElementById(ID).appendChild(scoreBlock);
}

function deleteAllScoreBlocks(){
    const scoreBlocks = document.getElementsByClassName('RPS_scoreBlock');
    const scoreBlocksLength = scoreBlocks.length;

    for (let i = 0; i < scoreBlocksLength; i++) {
        const element = scoreBlocks[0];
        element.parentElement.removeChild(element);
    }
}