const boxes = document.querySelectorAll(".box");

const turn = document.getElementById("turn");

const resetButton = document.getElementById("reset");

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if (e.target.textContent == "" && !checkWinner() && !checkDraw()) {
            count++;
            if (count % 2 === 0) {
                e.target.textContent = "O";
                e.target.classList.add("blue");
                turn.textContent = "turn: X";
            } else {
                e.target.textContent = "X";
                turn.textContent = "turn: O";
            }
            let winner = checkWinner();
            if (winner) {
                turn.textContent = `'${winner}' Won!`;
                resetButton.style.display = "block";
            }
            if (checkDraw()) {
                turn.textContent = `draw`;
                resetButton.style.display = "block";
            }
        }
    });
});

function checkWinner() {
    const winningCombos = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let combo of winningCombos) {
        [a, b, c] = combo;
        if (
            boxes[a].textContent &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[b].textContent === boxes[c].textContent
        ) {
            return boxes[a].textContent;
        }
    }
}

function checkDraw() {
    if (count === 9 && !checkWinner()) {
        return true;
    }
}

function resetGame() {
    count = 0;
    resetButton.style.display = "none";
    turn.textContent = "Turn: X";
    boxes.forEach((box) => {
        box.textContent = "";
        box.classList.remove("blue");
    });
}
