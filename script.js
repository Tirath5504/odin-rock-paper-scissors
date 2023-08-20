console.log("Tirath");

function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3) + 0;
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[randInt];
}

/* Testing getComputerChoice() function
    console.log(getComputerChoice());
*/

function game(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissor") ||
        (playerSelection == "scissor" && computerSelection == "rock")
    ) {
        return "You Lose!";
    }
    else if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissor")
    ) {
        return "You Win!";
    }
    else {
        return "Draw!";
    }
}

/* Testing game() function
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(game(playerSelection, computerSelection));
*/




