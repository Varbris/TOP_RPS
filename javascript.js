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

function getHumanChoise(buttonValue) {
  inputValue = toInsensitive(buttonValue);
  return userInputValidation(inputValue);
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
    return 0;
  } else if (winner === 1) {
    return humanScore++;
  } else if (winner === 2) {
    return computerScore++;
  }
}

function checkWinner(humanChoise, computerChoise) {
  if (humanChoise === computerChoise) {
    console.log("its a tie");
  } else if (
    (humanChoise === "paper" && computerChoise === "rock") ||
    (humanChoise === "rock" && computerChoise === "scissor") ||
    (humanChoise === "scissor" && computerChoise === "paper")
  ) {
    return 1;
  } else if (
    (computerChoise === "paper" && humanChoise === "rock") ||
    (computerChoise === "rock" && humanChoise === "scissor") ||
    (computerChoise === "scissor" && humanChoise === "paper")
  ) {
    return 2;
  }
}

function clearDivContent() {
  const div = document.querySelector("div");
  div.innerHTML = "";
}

function createRPSButton() {
  const buttonName = ["rock", "paper", "scissor"];
  const div = document.querySelector("div");
  for (let i = 0; i < buttonName.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("value", buttonName[i]);
    button.setAttribute("id", buttonName[i]);
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
  const buttonList = document.querySelectorAll("button");
  let humanSelection;
  const div = document.querySelector(".div");
  const human = document.createElement("h2");
  const computer = document.createElement("h2");

  for (const button of buttonList) {
    button.addEventListener("click", function (e) {
      const computerSelection = toInsensitive(getComputerChoise());
      humanSelection = getHumanChoise(e.target.value);
      if (humanSelection === 0) {
        console.log("Input Invalid");
      } else {
        playRound(humanSelection, computerSelection);
        console.log(humanSelection);
        console.log("computer:", computerSelection);
      }
      human.innerText = "Human Score: " + humanScore;
      computer.innerText = "Computer Score: " + computerScore;
      div.appendChild(human);
      div.appendChild(computer);

      checkFinalScore(humanScore, computerScore);
    });
  }
}

function displayFinalWinner(winner, score) {
  const div = document.querySelector(".div");
  div.innerHTML = "";
  const announcement = document.createElement("h1");
  announcement.innerText = `${winner} Win! final score: ${score}`;
  div.appendChild(announcement);

  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.addEventListener("click", function () {
    window.location.reload(true);
  });
  div.appendChild(backButton);
}

function checkFinalScore(human, computer) {
  if (human === 5) {
    console.log("Humanity Win! final score: " + human);
    displayFinalWinner("Human", human);
  } else if (computer === 5) {
    console.log("Computer Win! final score: " + computer);
    displayFinalWinner("Computer", computer);
  }
}

let humanScore = 0;
let computerScore = 0;

const playButton = document.querySelector("#play");
playButton.addEventListener("click", () => playGame());
