// player's choice
const rock = document.querySelector('.rock');
rock.addEventListener('click', ()=> {
    singleRound(computerSelection(), "rock");
})
const paper = document.querySelector('.paper');
paper.addEventListener('click', ()=> {
    singleRound(computerSelection(), "paper");
})
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', ()=> {
    singleRound(computerSelection(), "scissors");
})
// removeEventListener 'click' from buttons

// computer's choice
function computerSelection() {
    const rock_paper_scissors = ['rock', 'paper', 'scissors'];
    const computersChoice = rock_paper_scissors[Math.floor(Math.random()*(rock_paper_scissors.length))];
    
    return computersChoice;
}
// function that plays a single round taking 2 parameters - computerChoice and playerChoice
let gameNumber = document.querySelector('.gameNumber');
let playerTurn = document.querySelector('.playerChoice');
let computerTurn = document.querySelector('.computerChoice');
let winner_headline = document.querySelector('.winner_headline');
let score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function singleRound(computerChoice, playerChoice) {
    
    if(computerChoice == playerChoice) {
        gameCount += 1;
        gameNumber.textContent = "GAME: " + gameCount;
        playerTurn.textContent = "PLAYER chose " + playerChoice + "!";
        computerTurn.textContent = "COMPUTER chose " + computerChoice + "!";
        winner_headline.textContent = "Tied!";
        score.textContent = "PLAYER: " + playerScore + " " + "COMPUTER: " + computerScore;

    } else if((computerChoice == "rock" && playerChoice == "scissors")
           || (computerChoice == "paper" && playerChoice == "rock")
           || (computerChoice == "scissors" && playerChoice == "paper")) {
        gameCount += 1;
        computerScore += 1;
        if(computerScore > 2) {
            gameNumber.textContent = "GAME: " + gameCount;
            playerTurn.textContent = "PLAYER chose " + playerChoice + "!";
            computerTurn.textContent = "COMPUTER chose " + computerChoice + "!";
            winner_headline.textContent = "-----COMPUTER WON BO5-----"
            score.textContent = "PLAYER: " + playerScore + " " + "COMPUTER: " + computerScore;
            //
            return;
            //
        } else {
            gameNumber.textContent = "GAME: " + gameCount;
            playerTurn.textContent = "PLAYER chose " + playerChoice + "!";
            computerTurn.textContent = "COMPUTER chose " + computerChoice + "!";
            winner_headline.textContent = "COMPUTER Won!"
            score.textContent = "PLAYER: " + playerScore + " " + "COMPUTER: " + computerScore;
        }
        
    } else {
        gameCount += 1;
        playerScore += 1;
        if(playerScore > 2) {
            gameNumber.textContent = "GAME: " + gameCount;
            playerTurn.textContent = "PLAYER chose " + playerChoice + "!";
            computerTurn.textContent = "COMPUTER chose " + computerChoice + "!";
            winner_headline.textContent = "-----PLAYER WON BO5-----"
            score.textContent = "PLAYER: " + playerScore + " " + "COMPUTER: " + computerScore;
            //
            return;
            //
        } else {
        gameNumber.textContent = "GAME: " + gameCount;
        playerTurn.textContent = "PLAYER chose " + playerChoice + "!";
        computerTurn.textContent = "COMPUTER chose " + computerChoice + "!";
        winner_headline.textContent = "PLAYER Won!"
        score.textContent = "PLAYER: " + playerScore + " " + "COMPUTER: " + computerScore;
        }
    }
}


