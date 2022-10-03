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
  playerscore.textContent = `Your Score = ${playerScore}`
  computerscore.textContent = `Computer Score = ${computerScore}`
}

function declarePlayer(playerSelection, computerSelection) {
  playerSelection = capitalized(playerSelection);
  results.textContent = `You win! ${playerSelection} beats 
  ${computerSelection}.`
  playerscore.textContent = `Your Score = ${playerScore}`
  computerscore.textContent = `Computer Score = ${computerScore}`
}

function declareComputer(playerSelection, computerSelection) {
  computerSelection = capitalized(computerSelection);
  results.textContent = `You lose! ${computerSelection} beats 
  ${playerSelection}.`
  playerscore.textContent = `Your Score = ${playerScore}`
  computerscore.textContent = `Computer Score = ${computerScore}`
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
playerscore = document.querySelector('#playerscore');
computerscore = document.querySelector('#computerscore');

