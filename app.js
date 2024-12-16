let score = 0;

const doge = document.getElementById('doge');
const scoreDisplay = document.getElementById('score');

// Function to increase score when TrumpDoge is clicked
doge.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = score;
    
    // Move the TrumpDoge image to a random position
    moveDogeRandomly();
});

// Function to move the TrumpDoge image randomly within the container
function moveDogeRandomly() {
    const dogeContainer = document.getElementById('doge-container');
    const containerWidth = dogeContainer.offsetWidth;
    const containerHeight = dogeContainer.offsetHeight;
    
    const maxX = containerWidth - doge.offsetWidth;
    const maxY = containerHeight - doge.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    doge.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
