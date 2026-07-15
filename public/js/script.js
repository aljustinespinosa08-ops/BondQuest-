const questions = [
    {
        id: 1,
        level: "Beginner",
        question: "What type of bond is formed between Sodium (Na) and Chlorine (Cl)?",
        choices: [
            "Ionic Bond",
            "Covalent Bond",
            "Metallic Bond",
            "Hydrogen Bond"
        ],
        answer: "Ionic Bond",
        xp: 10,
        coins: 5
    }
];

let currentQuestion = 0;
let score = 0;
let xp = 0;
let coins = 0;

function startGame() {
    console.log("BondQuest Started!");
    console.log(questions[currentQuestion]);
}

startGame();
