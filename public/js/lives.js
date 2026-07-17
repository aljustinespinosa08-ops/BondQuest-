let lives = 3;

function loseLife() {

    lives--;

    document.getElementById("lives").textContent =
        "❤️ Lives: " + lives;

    if (lives <= 0) {

        console.log("Game Over");

    }

}

function resetLives() {

    lives = 3;

    document.getElementById("lives").textContent =
        "❤️ Lives: " + lives;

}