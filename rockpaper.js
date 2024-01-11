const playerChoiceElement = document.querySelector("#playerChoise");
const computerChoiceElement = document.querySelector("#computerChoise");
const buttonArray = document.querySelectorAll(".move")

console.log(buttonArray)

let playerScore = 0;
let computerScore = 0;

let winnerScore = 3;

const choices = ["rock", "paper", "scissors"];

function playgame(move) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  playerChoiceElement.innerText = move;
  computerChoiceElement.innerText = computerChoice;

  if (move === computerChoice) {
    console.log("draw");
    return;
  }


  if (
    ("rock" === move && "scissors" === computerChoice) ||
    ("paper" === move && "rock" === computerChoice) ||
    ("scissors" === move && "paper" === computerChoice)
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
  document.querySelector("#score").innerText = "";
  document.querySelector("#score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;

  checkEnd(playerScore);
  console.log("current player score is ",playerScore)
  checkEnd(computerScore);
  console.log("current computer score is ",computerScore)
}

function disable(button) {
  button.disabled = true;
}

function enable(button) {
  button.disabled = false;
}


function reset() {
  document.querySelector("#score").innerHTML = "";
  document.querySelector("#score").innerHTML = `Player: 0 | Computer: 0`;
  playerScore = 0;
  computerScore = 0;
  buttonArray.forEach(enable)
}

function checkEnd (input) {
  if (input === 3) {
    buttonArray.forEach(disable)
  }
}