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
  return userInputValidation(inputMessage);
}

function userInputValidation(input) {
  if (input === "rock" || input === "paper" || input === "scissor") {
    return input;
  } else {
    return "Invalid";
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
  if (humanChoise === computerChoise) {
    return "It's a Draw!";
  } else {
    if (
      (humanChoise === "paper" && computerChoise === "rock") ||
      (humanChoise === "rock" && computerChoise === "scissor") ||
      (humanChoise === "scissor" && computerChoise === "paper")
    ) {
      humanScore++;
      return "Humanity Wins!";
    } else if (
      (computerChoise === "paper" && humanChoise === "rock") ||
      (computerChoise === "rock" && humanChoise === "scissor") ||
      (computerChoise === "scissor" && humanChoise === "paper")
    ) {
      computerScore++;
      return "Computer Wins!";
    } else {
      return "Invalid input";
    }
  }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = toInsensitive(getHumanChoise());
const computerSelection = toInsensitive(getComputerChoise());

console.log(playRound(humanSelection, computerSelection));
