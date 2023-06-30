"use strict";
function calculateValidPasswords() {
    const lowerLimitInput = document.getElementById("lowerLimit");
    const upperLimitInput = document.getElementById("upperLimit");
    const resultDiv = document.getElementById("result");
    const lowerLimit = parseInt(lowerLimitInput.value);
    const upperLimit = parseInt(upperLimitInput.value);
    let validPasswords = 0;
    for (let password = lowerLimit; password <= upperLimit; password++) {
        const passwordStr = String(password);
        let hasAdjacentDigits = false;
        let hasIncreasingDigits = true;
        let hasExactDoubleGroup = false;
        for (let i = 0; i < passwordStr.length - 1; i++) {
            hasAdjacentDigits = passwordStr[i] === passwordStr[i + 1]
                ? true
                : hasAdjacentDigits;
            hasExactDoubleGroup = passwordStr[i] === passwordStr[i + 1]
                ? (i === 0 || passwordStr[i] !== passwordStr[i - 1]) && (i === passwordStr.length - 2 || passwordStr[i + 1] !== passwordStr[i + 2])
                    ? true
                    : hasExactDoubleGroup
                : hasExactDoubleGroup;
            hasIncreasingDigits = Number(passwordStr[i]) > Number(passwordStr[i + 1])
                ? false
                : hasIncreasingDigits;
            if (!hasIncreasingDigits) {
                break;
            }
        }
        validPasswords = hasAdjacentDigits && hasIncreasingDigits && hasExactDoubleGroup
            ? validPasswords + 1
            : validPasswords;
    }
    resultDiv.textContent = "Número de senhas válidas: " + validPasswords;
}
