function saveScore(playerName, score) {

    const result = {
        player: playerName,
        score: score,
        date: new Date().toLocaleString()
    };

    console.log("💾 Score Saved");
    console.log(result);

    updateLeaderboard(playerName, score);

}