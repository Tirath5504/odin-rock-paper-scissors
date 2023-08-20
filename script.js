console.log("Tirath");

function getComputerChoice() {
    const randInt = Math.floor(Math.random() * 3) + 0;
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[randInt];
}