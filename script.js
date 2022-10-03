let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0

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
    declareTie(playerSelection); 
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    declarePlayer(playerSelection, computerSelection)
    playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    declarePlayer(playerSelection, computerSelection)
    playerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    declarePlayer(playerSelection, computerSelection)
    playerScore += 1; 
  } else {
    declareComputer(playerSelection, computerSelection)
    computerScore += 1; 
  }
}
function declareTie(playerSelection) {
  results.textContent =`It's a tie! We both chose ${playerSelection}.`
}

function declarePlayer(playerSelection, computerSelection) {
  playerSelection = capitalized(playerSelection);
  results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
}

function declareComputer(playerSelection, computerSelection) {
  computerSelection = capitalized(computerSelection);
  results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`
}

function playRound() {
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

function capitalized(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1)
  return word;
}

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

results = document.querySelector('#results');

