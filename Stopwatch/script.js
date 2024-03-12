const timerDisplay = document.getElementById("timer");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timer;

let timerRunning = false;

function showTimer() {
    timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${(
        minutes % 60
    )
        .toString()
        .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(() => {
            seconds++;
            minutes = Math.floor(seconds / 60);
            hours = Math.floor(minutes / 60);

            showTimer();
        }, 1000);
    }
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    timerRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    showTimer();
}
