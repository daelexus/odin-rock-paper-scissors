function getComputerChoice() {                                             
  const selectedComputer = Math.floor(Math.random() * option.length);    
  return option[selectedComputer];
}

const option = ["paper", "rock", "scissors"];
const playerSelection = "paper";
const newSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let rounds = 0;


function playGame(newSelection,computerSelection) {
  if (newSelection === computerSelection) {
      return "This round you tied!";
  } else if (newSelection === "rock" && computerSelection === "scissors") {
      ++playerScore && ++rounds;
      return "Congratulations, Rock Beats Scissors!"
  } else if (newSelection === "paper" && computerSelection === "rock") {
      ++playerScore && ++rounds;
      return "Congratulations, Paper Beats Rock!"
  } else if (newSelection === "scissors" && computerSelection === "paper") {
      ++playerScore && ++rounds;
      return "Congratulations, Scissors Beats Paper!"
  } else {
      ++computerScore && ++rounds;
      return "Computer beat you this round!"
  }
  
}



function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper or Scissors!");
    const newSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playGame(newSelection,computerSelection);
   console.log(result + "" + "Computer Choose:" + computerSelection);
   console.log("Player Score: " + playerScore);
   console.log("Computer Score: " + computerScore);
   
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("Game ends in a tie!");
  }

  

}
game();
