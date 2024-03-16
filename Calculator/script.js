const display = document.getElementById("display");
const topDisplay = document.getElementById("top-display");

const container = document.querySelector(".container");

const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");

const buttons = document.querySelectorAll(".number");

let toCalculate;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (display.value.startsWith("0")) {
            display.value = toCalculate = e.target.textContent;
        } else {
            toCalculate += e.target.textContent;
            display.value += e.target.textContent;
        }

        topDisplay.value = "";
    });
});

function divideMultiply(operator) {
    if (!display.value.startsWith("0")) {
        if (!(display.value[display.value.length - 1] == operator[0])) {
            display.value += operator[0];
            toCalculate += operator[0];
        }

        toCalculate = toCalculate.replace(operator[0], operator[1]);
    }
    topDisplay.value = "";
}

function plusMinus(operator) {
    if (!display.value.startsWith("0")) {
        if (!(display.value[display.value.length - 1] == operator[0])) {
            display.value += operator[0];
            toCalculate += operator[0];
        }
    } else {
        display.value = toCalculate = operator[0];
    }

    toCalculate = toCalculate.replace(operator[0], operator[1]);
    topDisplay.value = "";
}

function parenthesis(type) {
    bracket = type == "left" ? "(" : ")";
    if (display.value.startsWith("0")) {
        display.value = toCalculate = bracket;
    } else {
        display.value += bracket;
        toCalculate += bracket;
    }
    topDisplay.value = "";
}

function showResult() {
    if (!(display.value === "0")) {
        if (
            !(
                display.value.includes("+") ||
                display.value.includes("−") ||
                display.value.includes("×") ||
                display.value.includes("÷")
            )
        ) {
            display.value = display.value;
        } else {
            if (
                !(
                    display.value === "+" ||
                    display.value === "−" ||
                    display.value === "×" ||
                    display.value === "÷"
                )
            ) {
                topDisplay.value = display.value;
                display.value = eval(toCalculate);
                toCalculate = display.value;
            }
        }
    }
}

function clearDisplay() {
    topDisplay.value = "";
    display.value = "0";
    toCalculate = "0";
}

function toggleTheme(mode) {
    const list = container.classList;
    if (mode === "light") {
        list.add("lightTheme");
        lightMode.classList.add("active");
        darkMode.classList.remove("active");
    } else {
        list.remove("lightTheme");
        lightMode.classList.remove("active");
        darkMode.classList.add("active");
    }
}
