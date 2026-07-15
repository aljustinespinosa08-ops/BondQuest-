let xp = 0;
let level = 1;

function addXP(points) {
    xp += points;

    if (xp >= 100) {
        level++;
        xp = 0;

        console.log("🎉 Level Up!");
        console.log("Current Level:", level);
    }

    console.log("Current XP:", xp);
}