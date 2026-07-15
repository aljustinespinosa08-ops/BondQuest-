let coins = 0;

function addCoins(amount) {
    coins += amount;

    console.log("Coins:", coins);
}

function spendCoins(amount) {

    if (coins >= amount) {

        coins -= amount;

        console.log("Coins Left:", coins);

    } else {

        console.log("Not enough coins.");

    }

}