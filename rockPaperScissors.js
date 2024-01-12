
const Choices = ['scissors', 'paper', 'rock' ];

var _playerScore = 0;
var _computerScore = 0;
var _gameOver = false;
var _icons;
var _interactiveElements;
var _restartBtn;
var _resultBox;


function setup(){
    console.log('setup');
    this._icons = document.getElementById('icons');
    this._interactiveElements = document.getElementById('interactiveElements');
    this._resultBox = document.getElementById('result');

    this._restartBtn = document.createElement('button');
    this._restartBtn.id = 'restartBtn';
    this._restartBtn.textContent = 'Play Again';
    this._restartBtn.addEventListener('click', this.reset);
}

function gameOver(){
    this._interactiveElements.removeChild(this._icons);
    this._interactiveElements.appendChild(this._restartBtn);
}

function reset(){
    _gameOver = false;
    _playerScore = 0;
    _computerScore = 0;
    _interactiveElements.removeChild(_restartBtn);
    _interactiveElements.appendChild(_icons);
    deleteAllScoreBlocks();
    _resultBox.innerHTML = 'Select a weapon!';
}

function onClickImg(index){
    playRound(index, getComputerChoice());
}

function playRound(playerChoice, computerChoice){
    _resultBox.innerHTML = getResults(playerChoice, computerChoice);
}

function getResults(playerChoice, computerChoice){
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
        gameOver();
    }
    else if(this._computerScore == 5){
        str = "Bad Luck! You've lost the game...";
        this._gameOver = true;
        gameOver();
    }

    return str;
}

function getComputerChoice(){
    return getRandomInt(3);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

