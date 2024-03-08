const clock = document.getElementById("clock");
const meridiem = document.getElementById("meridiem");

function displayTime() {
    const date = new Date();

    const hours = date.getHours();
    const hoursIn12 = (hours % 12 || 12).toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    const meridiemValue = hours >= 12 ? "P.M." : "A.M.";

    clock.textContent = `${hoursIn12}:${minutes}:${seconds}`;
    meridiem.textContent = meridiemValue;
}

setInterval(displayTime, 1000);
