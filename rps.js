console.log("Hello World");

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