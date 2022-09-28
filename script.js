let playerSelection
let computerSelection

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
  if (playerSelection === computerSelection)
    declareTie(playerSelection); 
  else if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
    declarePlayer(playerSelection, computerSelection); 
  else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    declarePlayer(playerSelection, computerSelection);
  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    declarePlayer(playerSelection, computerSelection); 
  else
    declareComputer(playerSelection, computerSelection); 
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
  getPlayerSelection();
  getComputerChoice();
  compareSelections();
}
