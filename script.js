function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  let computerChoice
  if (randomNumber === 0)
    computerChoice = "ROCK"
  else if (randomNumber === 1)
    computerChoice = "PAPER"
  else if (randomNumber === 2)
    computerChoice = "SCISSORS"
  return computerChoice
}

function getPlayerSelection () {
  playerChoice = prompt("Please choose either rock, paper, or scissors: ")
  let playerSelection = playerChoice.toUpperCase()
  return playerSelection
}

function playRound(playerSelection, computerSelection) {

}
