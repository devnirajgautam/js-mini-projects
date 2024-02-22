const input = document.getElementById("temperature");
const radioToCelsius = document.getElementById("radioToCelsius");
const radioToFahrenheit = document.getElementById("radioToFahrenheit");
const submit = document.getElementById("submit");
const outputResult = document.getElementById("result");

function convertTemp(event) {
    event.preventDefault();

    let result;
    let inputTemp = Number(input.value);

    if (radioToCelsius.checked) {
        result = ((inputTemp - 32) * 5) / 9;
        outputResult.textContent = result.toFixed(1) + "°C";
    } else if (radioToFahrenheit.checked) {
        result = (inputTemp * 9) / 5 + 32;
        outputResult.textContent = result.toFixed(1) + "°F";
    } else {
        outputResult.textContent = "Please choose a conversion!";
    }
}

submit.onclick = function (event) {
    convertTemp(event);
};
