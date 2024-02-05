let computerScore = 0
let userScore = 0

function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3) + 0;
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[randInt];
}

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
    else if (
        (playerSelection.toLowerCase() != "rock") && 
        (playerSelection.toLowerCase() != "paper") &&
        (playerSelection.toLowerCase() != "scissor")
    ) {
        return "Incorrect input: Enter 'rock', 'paper' or 'scissor'!";
    }
    else {
        return "Draw!";
    }
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"))
paper = document.querySelector("#paper").addEventListener("click", () => playRound("paper"))
scissor = document.querySelector("#scissor").addEventListener("click", () => playRound("scissor"))

const result = document.querySelector("#result")
const score = document.querySelector("#score")
const winner = document.querySelector("#winner")

function playRound(player)
{
    if (!winner.textContent)
    {
        const computerChoice = getComputerChoice()
        const res = game(player, computerChoice)

        if (res == "You Win!")
        {
            userScore += 1
            result.textContent = "You win this round!"
        }
        else if (res == "You Lose!")
        {
            computerScore += 1
            result.textContent = "You lose this round!"
        }
        else
            result.textContent = "Draw!"

        score.textContent = `User Score: ${userScore}, Computer Score: ${computerScore}`

        if (userScore == 5)
            winner.textContent = "User Wins! :)"
        else if (computerScore == 5)
            winner.textContent = "Computer Wins! :("
    }   
}