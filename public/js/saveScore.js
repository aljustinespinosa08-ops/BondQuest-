function saveScore(playerName, score) {

    const result = {
        player: playerName,
        score: score,
        date: new Date().toLocaleString()
    };

    console.log("Saved Score:", result);
}