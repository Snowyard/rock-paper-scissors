// computers turn of choosing R, P, or S - returns computersChocie
function computerSelection() {
    const rock_paper_scissors = ['rock', 'paper', 'scissors'];
    const computersChoice = rock_paper_scissors[Math.floor(Math.random()*(rock_paper_scissors.length))];
    
    return computersChoice;
}

// players input of choosing R, P, or S - returns userChoice
function playerSelection() {
    let playersChoice;
    reattempt = true;
    while(reattempt) {
        playersChoice = prompt('Choose rock, paper, or scissors: ').toLowerCase();
        if(playersChoice=='rock') {
            reattempt = false;
        }
        else if(playersChoice=='paper') {
            reattempt = false;
        }
        else if(playersChoice=='scissors') {
            reattempt = false;
        }
        else continue;
    }
    return playersChoice;
}
// declaring playerScore and computerScore
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
// this function will play a single round of RPS using 2 parameters: 
// computerSelection and playerSelection
function singleRound(computer, player) {
    let playerChoice = document.querySelector('.playerChoice');
    let computerChoice = document.querySelector('.computerChoice');
    let winner = document.querySelector('.winner');
    let score = document.querySelector('.score');
    let gameNumber = document.querySelector('.gameNumber');

    playerChoice.textContent = "You chose " + player + "!";
    computerChoice.textContent = "Your computer chose " + computer + "!";
    // if its a draw
    if(computer==player) {
        gameCount += 1;
        gameNumber.textContent = 'Game: ' + gameCount;
        winner.textContent = "It's a tie!";
        score.textContent = "Your score: " + playerScore + "\n" + "Computer score: " + computerScore;
    }
    // if computer has a win condition, will +1 to its score
    else if((computer=='rock' && player=='scissors')
            || (computer=='paper' && player=='rock')
            || (computer=='scissors' && player=='paper')) {
        gameCount += 1;
        gameNumber.textContent = 'Game: ' + gameCount;
        winner.textContent = 'The Computer Won! '
        computerScore += 1;
        score.textContent = "Your score: " + playerScore + "\n" + "Computer score: " + computerScore; 
    }
    else {
        gameCount += 1;
        gameNumber.textContent = 'Game: ' + gameCount;
        winner.textContent = 'You have won!';
        playerScore += 1;
        score.textContent = "Your score: " + playerScore + "\n" + "Computer score: " + computerScore; 
    }
}

function game() {
    while(gameCount!=5) {
        singleRound(computerSelection(), playerSelection());
    }
}

game();