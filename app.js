let score = 0;
let timeLeft = 10; // Reduced time to 10 seconds
let gameInterval;
let timerInterval;

// Function to update the scoreboard
function updateScore() {
    document.getElementById("score").textContent = score;
}

// Function to update the time left
function updateTime() {
    document.getElementById("time").textContent = timeLeft;
}

// Function to start the game
function startGame() {
    score = 0;
    timeLeft = 10; // Reduced time
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("game-over").classList.add("hidden");
    document.getElementById("doge").style.pointerEvents = "auto";

    // Start the countdown timer
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTime();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);

    // Start the game loop (gameplay)
    gameInterval = setInterval(() => {
        // Game logic (e.g., TrumpDoge click event)
        // You can add more logic here if needed
    }, 100);
}

// Function to end the game
function endGame() {
    document.getElementById("game-over").classList.remove("hidden");
    document.getElementById("final-score").textContent = score;
    document.getElementById("doge").style.pointerEvents = "none";
}

// Add click event listener to the TrumpDoge image
document.getElementById("doge").addEventListener("click", () => {
    score++;
    updateScore();
});

// Restart the game when the "Play Again" button is clicked
document.getElementById("restart-btn").addEventListener("click", startGame);

// Start the game on page load
window.onload = startGame;
