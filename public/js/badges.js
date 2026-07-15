const badges = [
    {
        id: 1,
        name: "First Win",
        description: "Answer your first question correctly.",
        earned: false
    },
    {
        id: 2,
        name: "Chemistry Master",
        description: "Score 100 points.",
        earned: false
    },
    {
        id: 3,
        name: "Speed Solver",
        description: "Answer within 10 seconds.",
        earned: false
    }
];

function unlockBadge(id) {
    const badge = badges.find(b => b.id === id);

    if (badge && !badge.earned) {
        badge.earned = true;
        console.log("🏅 Badge Unlocked:", badge.name);
    }
}