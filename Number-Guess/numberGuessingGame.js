const minNum = 1;
const maxNum = 100;

let num;
let guess;
let attempt = 0;
let gameRunning = true;

num = Math.floor(Math.random() * maxNum - minNum + 1 + minNum);

while (gameRunning) {
    guess = window.prompt(`Guess a number between ${minNum} & ${maxNum}:`);
    console.log(guess);

    if (guess === null) {
        gameRunning = false;
    } else {
        guess = Number(guess);
        if (guess < minNum || guess > maxNum || isNaN(guess)) {
            window.alert("Please enter a valid number!");
        } else {
            attempt++;
            if (guess > num) {
                window.alert("Guess a little lower!");
            } else if (guess < num) {
                window.alert("Guess a little higher!");
            } else {
                window.alert(
                    `Congrats! You guessed the correct number '${num}' in ${attempt} tries.`
                );
                gameRunning = false;
            }
        }
    }
}
