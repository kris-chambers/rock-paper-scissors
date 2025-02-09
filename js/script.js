let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  getRandomNumber = Math.floor(Math.random() * 3) + 1
  switch (getRandomNumber) {
    case 1:
      computerChoice = "Paper"
      break;
    case 2:
      computerChoice = "Rock"
      break;
    case 3:
      computerChoice = "Scissors"
      break;  
  }
  return computerChoice;
}
  
function displayScore() {
  console.log(`Your score: ${humanScore}`)
  console.log(`Computer score: ${computerScore}`)
}

function playRound(humanChoice, computerChoice) {
  let tieMessage = `It's a tie. You both chose ${humanChoice}.`;
  let loseMessage = `You lose. ${computerChoice} beats ${humanChoice}.`
  let winMessage = `You win. ${humanChoice} beats ${computerChoice}.`
  
  if (humanChoice === computerChoice) {
    console.log(tieMessage)
  } else if ((humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")) {
    humanScore += 1;
    console.log(winMessage);
  } else if ((humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice == "Scissors" && computerChoice === "Rock")) {
    computerScore += 1;
    console.log(loseMessage);
  }
  displayScore();
}

function playGame(humanChoice) {
  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection)
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click",() => playGame("Scissors"));