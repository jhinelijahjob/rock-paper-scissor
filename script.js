// script.js
document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const playerChoiceDisplay = document.getElementById("player-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    const resultText = document.getElementById("result-text");

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const playerChoice = choice.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
            const winner = getWinner(playerChoice, computerChoice);

            playerChoiceDisplay.src = `${playerChoice}.png`;
            computerChoiceDisplay.src = `${computerChoice}.png`;
            resultText.textContent = winner;
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getWinner(player, computer) {
        if (player === computer) {
            return "Draw";
        }
        if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper") 
        ) {
            return "You win. Success!";
        }
        return "You lose. Try Again!";
    }
});