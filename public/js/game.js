let currentQuestion = 0;
let score = 0;

function startGame() {
    currentQuestion = 0;
    score = 0;

    loadQuestion();
}

function loadQuestion() {

    const q = questions[currentQuestion];

    console.log("Question:", q.question);

    console.log("Choices:");

    q.choices.forEach((choice, index) => {
        console.log((index + 1) + ". " + choice);
    });

    startTimer();

}

function checkAnswer(answer) {

    stopTimer();

    const q = questions[currentQuestion];

    if (answer === q.answer) {

        score++;

        addXP(q.xp);

        addCoins(q.coins);

        unlockBadge(1);

        console.log("✅ Correct!");

    } else {

        loseLife();

        console.log("❌ Wrong!");

    }

    nextQuestion();

}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        console.log("🎉 Game Finished!");

        console.log("Final Score:", score);

        return;

    }

    loadQuestion();

}