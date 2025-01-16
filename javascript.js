function getComputerChoise() {
  const compChoise = Math.floor(Math.random() * 3 + 1);
  return compChoise;
}

function getHumanChoise() {
  let inputMessage = prompt("What's yours choise?");
  return inputMessage;
}

console.log(getHumanChoise());
