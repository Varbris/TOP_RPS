function getComputerChoise() {
  const compChoise = Math.floor(Math.random() * 3 + 1);
  return compChoise;
}

function getHumanChoise() {
  let inputMessage = prompt("What's yours choise?");
  return inputMessage;
}

let humanScore = 0;
let computerScore = 0;

console.log(getHumanChoise());
