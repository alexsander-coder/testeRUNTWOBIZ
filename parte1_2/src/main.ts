function calculateValidPasswords(): void {
    const lowerLimitInput: HTMLInputElement = document.getElementById("lowerLimit") as HTMLInputElement;
    const upperLimitInput: HTMLInputElement = document.getElementById("upperLimit") as HTMLInputElement;
    const resultDiv: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
  
    const lowerLimit: number = parseInt(lowerLimitInput.value);
    const upperLimit: number = parseInt(upperLimitInput.value);
  
    let validPasswords: number = 0;
  
    for (let password: number = lowerLimit; password <= upperLimit; password++) {
      const passwordStr: string = String(password);
  
      let hasAdjacentDigits: boolean = false;
      let hasIncreasingDigits: boolean = true;
      let hasExactDoubleGroup: boolean = false;
  
      for (let i: number = 0; i < passwordStr.length - 1; i++) {
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