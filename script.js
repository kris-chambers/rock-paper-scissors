function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  let computerSelection
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
  let playerSelection = playerChoice.toUpperCase()
  return playerSelection
}

function compareSelections(playerSelection, computerSelection) {
  let winner
  if (playerSelection === computerSelection)
    winner = tie 
  else if (playerSelection === "ROCK" && computerSelection === "SCISSORS")
    winner = player 
  else if (playerSelection === "PAPER" && computerSelection === "ROCK")
    winner = player
  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    winner = player 
  else
    winner = computer 
}

function declareWinner(winner, playerSelection, computerSelection) {
  if (winner = player)
      

}

function playRound(playerSelection, computerSelection) {

}
