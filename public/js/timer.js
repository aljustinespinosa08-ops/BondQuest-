let timeLeft = 60;
let timer;

function startTimer() {
    timeLeft = 60;

    timer = setInterval(() => {

        timeLeft--;

        console.log("Time Left:", timeLeft);

        if (timeLeft <= 0) {

            clearInterval(timer);

            console.log("Time's Up!");

        }

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}