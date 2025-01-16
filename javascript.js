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
  let inputMessage = prompt("What's yours choise? (Rock,Paper, or Scissor");
  return inputMessage;
}

function toInsensitive(text) {
  if (text === text.toUpperCase() || text === text.toLowerCase()) {
    return text.toLowerCase();
  } else {
    return text.toLowerCase();
  }
}

function playRound(humanChoise, computerChoise) {}

let humanScore = 0;
let computerScore = 0;

const humanSelection = toInsensitive(getHumanChoise());
const computerSelection = toInsensitive(getComputerChoise());

console.log(computerSelection);
