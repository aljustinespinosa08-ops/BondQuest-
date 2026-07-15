let progress = {
    completedQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0
};

function updateProgress(isCorrect) {

    progress.completedQuestions++;

    if (isCorrect) {
        progress.correctAnswers++;
    } else {
        progress.wrongAnswers++;
    }

    console.log("Progress:", progress);
}