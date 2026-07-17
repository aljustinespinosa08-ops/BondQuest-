let coins = 0;

function addCoins(amount) {
    coins += amount;

    document.getElementById("coins").textContent =
        "🪙 Coins: " + coins;
}

function spendCoins(amount) {

    if (coins >= amount) {

        coins -= amount;

        document.getElementById("coins").textContent =
            "🪙 Coins: " + coins;

    } else {

        console.log("Not enough coins.");

    }

}