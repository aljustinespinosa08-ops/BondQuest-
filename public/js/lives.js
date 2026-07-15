let lives = 3;

function loseLife() {
    lives--;

    console.log("❤️ Lives Left:", lives);

    if (lives <= 0) {
        console.log("Game Over");
    }
}

function resetLives() {
    lives = 3;
}