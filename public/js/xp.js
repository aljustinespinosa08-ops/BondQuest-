let xp = 0;
let level = 1;

function addXP(points) {
    xp += points;

    document.getElementById("xp").textContent =
        "⭐ XP: " + xp;

    if (xp >= 100) {
        level++;
        xp = 0;

        document.getElementById("level").textContent =
            "🥇 Level: " + level;

        console.log("🎉 Level Up!");
    }
}