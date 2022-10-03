// Base variables
let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let roundNumber = 1
let numberOfTies = 0

// JS Query Selector Variables
results = document.querySelector('#results');
displayplayerscore = document.querySelector('#displayplayerscore');
displaycomputerscore = document.querySelector('#displaycomputerscore');
round = document.querySelector('#round');
winner = document.querySelector('#winner');
displayTies = document.querySelector('#displayTies');
buttons = document.querySelector('.buttons');

// Button Event Listeners
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerSelection = "rock";
  playRound();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerSelection = "paper";
  playRound();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerSelection = "scissors";
  playRound();
});

// Functions
function playRound() {
  round.textContent = `Round ${roundNumber}`;
  getComputerChoice();
  compareSelections();
  roundNumber++;
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0)
    computerSelection = "rock"
  else if (randomNumber === 1)
    computerSelection = "paper"
  else if (randomNumber === 2)
    computerSelection = "scissors"
  return computerSelection
}

function compareSelections() {
  if (playerSelection === computerSelection) {
    numberOfTies += 1; 
    declareTie(playerSelection);
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
  (playerSelection === "paper" && computerSelection === "rock") || 
  (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore += 1;
    declarePlayer(playerSelection, computerSelection)
    if ( isGameOver() ) {
      return declareWinner(playerScore, computerScore);
    }
    return console.log('game is still on');   
  } else {
    computerScore += 1;
    declareComputer(playerSelection, computerSelection)
    if ( isGameOver() ) {
      return declareWinner(playerScore, computerScore);
    }
    return console.log('game is still on');
  }
}

function declareTie(playerSelection) {
  results.textContent =`It's a tie! We both chose ${playerSelection}.`
  displayplayerscore.textContent = `Your Score: ${playerScore}`
  displaycomputerscore.textContent = `Computer Score: ${computerScore}`
  displayTies.textContent = `Ties: ${numberOfTies}`
}

function declarePlayer(playerSelection, computerSelection) {
  playerSelection = capitalized(playerSelection);
  results.textContent = `You win! ${playerSelection} beats 
  ${computerSelection}.`
  displayplayerscore.textContent = `Your Score: ${playerScore}`
  displaycomputerscore.textContent = `Computer Score: ${computerScore}`
  displayTies.textContent = `Ties: ${numberOfTies}`
}

function declareComputer(playerSelection, computerSelection) {
  computerSelection = capitalized(computerSelection);
  results.textContent = `You lose! ${computerSelection} beats 
  ${playerSelection}.`
  displayplayerscore.textContent = `Your Score: ${playerScore}`
  displaycomputerscore.textContent = `Computer Score: ${computerScore}`
  displayTies.textContent = `Ties: ${numberOfTies}`
}

function isGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    disableButton();
    playAgain();
    return true;
  }
  return false;
}

function declareWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    winner.textContent = `You win the game!`
  } else {
    winner.textContent = `The computer wins the game!`
  }
}

function capitalized(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1)
  return word;
}

function disableButton() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function disableButton() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function playAgain() {
  const playAgain = document.createElement('button')
  playAgain.textContent = 'Play Again?'
  buttons.appendChild(playAgain)
}

function resetGame() {
  buttons.removeChild(playAgain)

}