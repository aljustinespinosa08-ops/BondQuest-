let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1);

    document.getElementById("questionText").textContent =
        q.question;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.choices.forEach(choice => {

        const button = document.createElement("button");
        button.textContent = choice;

        button.onclick = function () {
            checkAnswer(choice);
        };

        choicesDiv.appendChild(button);
        choicesDiv.appendChild(document.createElement("br"));
        choicesDiv.appendChild(document.createElement("br"));

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
        updateProgress(true);

        console.log("✅ Correct!");

    } else {

        loseLife();
        updateProgress(false);

        console.log("❌ Wrong!");

    }

    nextQuestion();
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        console.log("🎉 Game Finished!");
        console.log("Final Score:", score);

        saveScore("Player", score);

        return;
    }

    loadQuestion();
}

function startGame() {

    currentQuestion = 0;
    score = 0;

    loadQuestion();
}

startGame();