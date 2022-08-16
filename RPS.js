function getComputerChoice() {
    let randInt = Math.floor(Math.random()*3);
    let comp = randInt == 0 ? 'rock' : randInt == 1 ? 'paper': 'scissors';
    return "You lose! Paper beats Rock!";
}


function playRound(playerSelection, computerSelection) {
    
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(playround) {

}