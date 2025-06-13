function getComputerChoice () {
   let randomNumber = Math.floor(Math.random()*3);
   const gameVariants = ['Rock', 'Paper', 'Scissors'];  
   return (gameVariants[randomNumber])
     
}

function getHumanChoice() {
    let humanVariant = prompt('Rock, Paper, Scissors');
    return humanVariant;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
        console.log('You win!'); 
        return 'human'; 
       }
       else {
        console.log('Computer wins!');
        return 'computer';
       }
    }
 
    function playgame () {
        let humanScore = 0;
        let computerScore = 0;

        for ( let i = 1; i <=5; i++ ) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            
            const result = playRound (humanSelection, computerSelection);

            if (result === 'human') {
                humanScore++;
            }
            else if  (result === 'computer'){
                computerScore++;
            }
        }
        console.log(`Results: Human ${humanScore} Computer ${computerScore}`);
    }
playgame();