const playerChoiceElement = document.querySelector("#playerChoise");
const computerChoiceElement = document.querySelector("#computerChoise");

let playerScore = 0;
let computerScore = 0;

let winnerScore = 3;

const choices = ["rock", "paper", "scissors"];

function playgame(move) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  playerChoiceElement.innerText = move;
  computerChoiceElement.innerText = computerChoice;

  if (
    ("rock" == move && "scissors" == computerChoice) ||
    ("paper" == move && "rock" == computerChoice) ||
    ("scissors" == move && "paper" == computerChoice)
  ) {
    playerScore++;
  }
  else if (move == computerChoice) {
    console.log("draw");
  } else {
    computerScore++;
  }
  document.querySelector("#score").innerHTML = "";
  document.querySelector("#score").innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function reset() {
  document.querySelector("#score").innerHTML = "";
  document.querySelector("#score").innerHTML = `Player: 0 | Computer: 0`;
  playerScore = 0;
  computerScore = 0;
}
