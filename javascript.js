function getComputerChoise() {
  const compChoise = Math.floor(Math.random() * 3 + 1);
  return compChoise;
}

console.log(getComputerChoise());
