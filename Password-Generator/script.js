const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecialChars = document.getElementById("includeSpecialChars");

const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyPassword");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "1234567890";
const specialChars = "!@#$%&*_?";

const passwordLength = 12;

function generatePassword() {
    let password = "";
    let allowedChars = "";

    allowedChars += includeLowercase.checked ? lowercaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked ? Numbers : "";
    allowedChars += includeSpecialChars.checked ? specialChars : "";

    if (allowedChars.length !== 0) {
        for (let i = 0; i < passwordLength; i++) {
            password +=
                allowedChars[Math.floor(Math.random() * allowedChars.length)];
        }
        passwordField.value = password;
        copyBtn.style.display = "inline";
    } else {
        passwordField.value = "Choose Characters!";
    }
}

function copyPassword() {
    passwordField.select();
    navigator.clipboard.writeText(passwordField.value);
    window.alert("Password Copied Successfully!");
}
