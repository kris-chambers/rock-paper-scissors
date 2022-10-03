let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0
let roundNumber = 1
let numberOfTies = 0

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
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    declarePlayer(playerSelection, computerSelection)
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    declarePlayer(playerSelection, computerSelection)
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    declarePlayer(playerSelection, computerSelection)   
  } else {
    computerScore += 1;
    declareComputer(playerSelection, computerSelection)
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

function playRound() {
  round.textContent = `Round ${roundNumber}`;
  getComputerChoice();
  compareSelections();
  roundNumber++;
}

function game() {
  for (let i = 0; i; i++) {
    round.textContent = `Round ${i+1}`
    playRound()
  } if (playerScore === 5) {
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
displayplayerscore = document.querySelector('#displayplayerscore');
displaycomputerscore = document.querySelector('#displaycomputerscore');
round = document.querySelector('#round');
winner = document.querySelector('winner');
displayTies = document.querySelector('#displayTies')

