let currentQuestion = 0;
let score = 0;
let xp = 0;
let coins = 0;
let lives = 3;
let timer = 60;

function startGame() {
    currentQuestion = 0;
    score = 0;
    xp = 0;
    coins = 0;
    lives = 3;

    console.log("🎮 BondQuest Started!");
}

function addXP(points) {
    xp += points;
    console.log("XP:", xp);
}

function addCoins(amount) {
    coins += amount;
    console.log("Coins:", coins);
}

function loseLife() {
    lives--;

    if (lives <= 0) {
        console.log("Game Over!");
    }
}

startGame();