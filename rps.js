console.log("Hello World");

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {

    const randomNum = Math.random();

    if (randomNum <= .33) {
      return "rock";
    } else if (randomNum <= .66) {
      return "paper";
    } else {
      return "scissors";
      }
    }

  function getHumanChoice() {
    let choice = window.prompt("rock paper or scissors?", "shoot");
    let humanChoice = choice.toLowerCase();
    return humanChoice;
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You Win!");
        humanScore++;
    } else {
      console.log("You Lose!");
      computerScore++;
      }
    }

  for (let round = 1; round <= 5; round++) {
    console.log("Round ${round}");

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore === computerScore) {
    console.log("Tie Game!");
    } else if (humanScore > computerScore) {
      console.log("You Win!");
    } else {
      console.log("You Lose!");
    }
  }
