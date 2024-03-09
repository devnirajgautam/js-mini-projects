const rockImage = document.getElementById("rock-img");
const paperImage = document.getElementById("paper-img");
const scissorImage = document.getElementById("scissor-img");

const choicesList = document.querySelectorAll(".choice");

const userChoice = document.getElementById("user-choice");
const compChoice = document.getElementById("comp-choice");

const resultDisplay = document.getElementById("result");

const userScoreDisp = document.getElementById("user-score");
const compScoreDisp = document.getElementById("comp-score");

const choices = ["Rock", "Paper", "Scissor"];

let userScore = 0;
let compScore = 0;

// choicesList.forEach((choice) => {
//     choice.addEventListener("click", (event) => {});
// });

function playGame(choice) {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
    resultDisplay.classList.remove("red", "green");

    if (choice === randomChoice) {
        resultDisplay.textContent = "It's a Tie!";
    } else {
        switch (choice) {
            case "Rock":
                result = randomChoice === "Paper" ? "You Lost!" : "You Won!";
                break;
            case "Paper":
                result = randomChoice === "Scissor" ? "You Lost!" : "You Won!";
                break;
            case "Scissor":
                result = randomChoice === "Rock" ? "You Lost!" : "You Won!";
                break;
        }
        if (result === "You Lost!") {
            resultDisplay.classList.add("red");
            compScore++;
            compScoreDisp.textContent = compScore;
        } else if (result === "You Won!") {
            resultDisplay.classList.add("green");
            userScore++;
            userScoreDisp.textContent = userScore;
        }

        resultDisplay.textContent = result;
    }
    userChoice.textContent = `You: ${choice}`;
    compChoice.textContent = `Computer: ${randomChoice}`;
}
