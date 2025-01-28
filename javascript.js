function getComputerChoise() {
  const compChoise = Math.floor(Math.random() * 3 + 1);
  if (compChoise === 1) {
    return "rock";
  } else if (compChoise === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoise() {
  let inputMessage = prompt("What's yours choise? {Rock,Paper, or Scissor}");
  inputMessage = toInsensitive(inputMessage);
  return userInputValidation(inputMessage);
}

function userInputValidation(input) {
  if (input === "rock" || input === "paper" || input === "scissor") {
    return input;
  } else {
    return 0;
  }
}

function toInsensitive(text) {
  if (text === text.toUpperCase() || text === text.toLowerCase()) {
    return text.toLowerCase();
  } else {
    return text.toLowerCase();
  }
}

function playRound(humanChoise, computerChoise) {
  const winner = checkWinner(humanChoise, computerChoise);
  if (winner === 0) {
    console.log("Its a Draw");
  } else if (winner === 1) {
    console.log("Humanity wins!");
    return humanScore++;
  } else if (winner === 2) {
    console.log("Computer wins!");
    return computerScore++;
  }
}

function checkWinner(humanChoise, computerChoise) {
  if (humanChoise === computerChoise) {
    console.log(
      "Human: " + humanChoise + " vs " + "Computer: " + computerChoise
    );
    return 0;
  } else if (
    (humanChoise === "paper" && computerChoise === "rock") ||
    (humanChoise === "rock" && computerChoise === "scissor") ||
    (humanChoise === "scissor" && computerChoise === "paper")
  ) {
    console.log(
      "Human: " + humanChoise + " vs " + "Computer: " + computerChoise
    );
    return 1;
  } else if (
    (computerChoise === "paper" && humanChoise === "rock") ||
    (computerChoise === "rock" && humanChoise === "scissor") ||
    (computerChoise === "scissor" && humanChoise === "paper")
  ) {
    console.log(
      "Human: " + humanChoise + " vs " + "Computer: " + computerChoise
    );
    return 2;
  }
}

function clearDivContent() {
  const div = document.querySelector("div");
  div.innerHTML = "";
}

function createRPSButton() {
  const buttonName = ["rock", "paper", "scissors"];
  const div = document.querySelector("div");
  for (let i = 0; i < buttonName.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("value", buttonName[i]);
    button.innerText = buttonName[i];
    div.appendChild(button);
  }
}

function showGame() {
  const textChoose = function () {
    const div = document.querySelector("div");
    div.innerHTML = "<h1>Choose your selection!</h1>";
  };
  clearDivContent();
  textChoose();
  createRPSButton();
}

function playGame() {
  showGame();
  const humanSelection = getHumanChoise();
  const computerSelection = toInsensitive(getComputerChoise());
  if (humanSelection === 0) {
    console.log("Input Invalid");
  } else {
    playRound(humanSelection, computerSelection);
  }
}

function checkFinalScore(human, computer) {
  if (human > computer) {
    console.log("Humanity Win! final score: " + human);
  } else if (human < computer) {
    console.log("Computer Win! final score: " + computer);
  } else {
    console.log("Its a Tie!");
  }
}

let humanScore = 0;
let computerScore = 0;

checkFinalScore(humanScore, computerScore);

const playButton = document.querySelector("#play");
playButton.addEventListener("click", () => playGame());
