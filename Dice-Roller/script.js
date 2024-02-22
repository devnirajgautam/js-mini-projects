const numOfDice = document.getElementById("numOfDice");
const resultText = document.getElementById("resultText");
const diceImages = document.getElementById("imageContainer");

function rollDice() {
    const rolledDices = [];
    const images = [];

    if (numOfDice.value < 1) {
        resultText.textContent = "Please choose a valid number!";
        diceImages.textContent = "Roll to see your Dice!";
    } else {
        for (let roll = 0; roll < numOfDice.value; roll++) {
            let rolledDice = Math.floor(Math.random() * 6 + 1);
            rolledDices.push(rolledDice);

            images.push(
                `<img src = 'images/${rolledDice}.png' alt = 'Dice ${
                    roll + 1
                }'>`
            );
        }

        resultText.textContent = "Dice: " + rolledDices.join(", ");
        diceImages.innerHTML = images.join("");
    }
}
