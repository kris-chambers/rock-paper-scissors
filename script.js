let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0)
    computerSelection = "ROCK"
  else if (randomNumber === 1)
    computerSelection = "PAPER"
  else if (randomNumber === 2)
    computerSelection = "SCISSORS"
  return computerSelection
}

function getPlayerSelection() {
  playerChoice = prompt("Please choose either rock, paper, or scissors: ")
  playerSelection = playerChoice.toUpperCase()
  return playerSelection
}

function compareSelections() {
  if (playerSelection === computerSelection) {
    declareTie(playerSelection); 
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    declarePlayer(playerSelection, computerSelection)
    playerScore += 1;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    declarePlayer(playerSelection, computerSelection)
    playerScore += 1;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    declarePlayer(playerSelection, computerSelection)
    playerScore += 1; 
  } else {
    declareComputer(playerSelection, computerSelection)
    computerScore += 1; 
  }
}
function declareTie(playerSelection) {
  console.log(`It's a tie! We both chose ${playerSelection}`)
}

function declarePlayer(playerSelection, computerSelection) {
  console.log(`You win! ${playerSelection} beats ${computerSelection}`)
}

function declareComputer(playerSelection, computerSelection) {
  console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
}

function playRound() {
  // getPlayerSelection();
  getComputerChoice();
  compareSelections();
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i+1}`)
    playRound()
    console.log(`Your score: ${playerScore}\nComputer Score: ${computerScore}`)
  } if (playerScore === computerScore) {
    console.log(`We tied!`);
  } else if (playerScore > computerScore) {
    console.log(`You win!`)
  } else if (playerScore < computerScore) {
    console.log(`Computer wins!`);  
  }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playerSelection = "ROCK";
  playRound();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playerSelection = "PAPER";
  playRound();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playerSelection = "SCISSORS";
  playRound();
});

results = document.createElement('div');
