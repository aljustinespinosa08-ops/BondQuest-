let leaderboard = [];

function updateLeaderboard(playerName, score) {

    leaderboard.push({
        name: playerName,
        score: score
    });

    leaderboard.sort((a, b) => b.score - a.score);

    const topFive = leaderboard.slice(0, 5);

    console.log("🏆 Top 5 Leaderboard");

    topFive.forEach((player, index) => {
        console.log(
            `${index + 1}. ${player.name} - ${player.score}`
        );
    });

}