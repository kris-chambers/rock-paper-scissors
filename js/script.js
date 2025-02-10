let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

const score = document.createElement("div");
const results = document.querySelector(".results");
const content = document.createElement("div");
const winnerDeclaration = document.createElement("div");

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
  const scoreMessage = `Your score: ${humanScore}\nComputer score: ${computerScore}`
  score.textContent = scoreMessage;
  content.appendChild(score);
}

function checkIfWinner() {
  if (humanScore === 5) {
    content.textContent = "";
    score.textContent = "";
    winnerDeclaration.textContent = "You win!";
    results.appendChild(winnerDeclaration);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore === 5) {
    content.textContent = "";
    score.textContent = "";
    winnerDeclaration.textContent = "Computer wins!"
    results.appendChild(winnerDeclaration);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

function playRound(humanChoice, computerChoice) {
  const tieMessage = `It's a tie. You both chose ${humanChoice}.`;
  const loseMessage = `You lose. ${computerChoice} beats ${humanChoice}.`
  const winMessage = `You win. ${humanChoice} beats ${computerChoice}.`
  
  if (humanChoice === computerChoice) {
    content.classList.add("content");
    content.textContent = tieMessage;
    results.appendChild(content);
  } else if ((humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")) {
    humanScore += 1;
    content.classList.add("content");
    content.textContent = winMessage;
    results.appendChild(content);
  } else if ((humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice == "Scissors" && computerChoice === "Rock")) {
    computerScore += 1;
    content.classList.add("content");
    content.textContent = loseMessage;
    results.appendChild(content);
  }
  displayScore();
  checkIfWinner();
}

function playGame(humanChoice) {
  const humanSelection = humanChoice;
  const computerSelection = getComputerChoice();
  console.log(`Computer Score: ${computerScore}\nPLayer Score: ${humanScore}`)
  playRound(humanSelection, computerSelection)
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  results.removeChild(content);
  results.removeChild(winnerDeclaration);
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resetBtn = document.querySelector(".reset");

rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));
resetBtn.addEventListener("click", () => resetGame());