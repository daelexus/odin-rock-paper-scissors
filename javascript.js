function getRandomInt(min, max) { //Random number function
    min = Math.ceil(1);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}
function getComputerChoice() {  //Assignes choosen random number to possible value 
    let value = getRandomInt();
    if (value >= 1 && value < 33) {
        return "rock";
    } else if (value >= 33 && value < 66) {
        return "paper";
    } else {
        return "scissors";
    }

}



const playerSelection = "paper";
const newSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(newSelection);

function playGame(newSelection,computerSelection) {
    if (newSelection === computerSelection) {
        return "TIE";
    } else if (newSelection === "rock" && computerSelection === "scissors") {
        return "You Win!";
    } else if (newSelection === "paper" && computerSelection === "rock") {
        return "You Win!";
    } else if (newSelection === "scissors" && computerSelection === "paper") {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}
console.log(playGame(newSelection, computerSelection));



