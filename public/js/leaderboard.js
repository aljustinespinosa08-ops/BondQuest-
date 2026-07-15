let leaderboard = [];

function updateLeaderboard(playerName, score) {

    leaderboard.push({
        name: playerName,
        score: score
    });

    leaderboard.sort((a, b) => b.score - a.score);

    console.log("🏆 Leaderboard");
    console.table(leaderboard);
}