let timeLeft = 60;
let timer;

function startTimer() {
    timeLeft = 60;

    document.getElementById("timer").textContent =
        "⏱️ Time: " + timeLeft + " seconds";

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").textContent =
            "⏱️ Time: " + timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timer);

            console.log("⏰ Time's Up!");

            nextQuestion();
        }

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}