let randomNumber: number = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses") as HTMLParagraphElement;
const lastResult = document.querySelector(".lastResult") as HTMLParagraphElement;
const lowOrHi = document.querySelector(".lowOrHi") as HTMLParagraphElement;

const guessSubmit = document.querySelector(".guessSubmit") as HTMLInputElement;
const guessField = document.querySelector(".guessField") as HTMLInputElement;

let guessCount: number = 1;
let resetButton: HTMLButtonElement | null;

guessField.focus();

function checkGuess(): void {
  const userGuess: number = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Intentos anteriores: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "¡¡¡Fin del juego!!!";
    setGameOver();
  } else {
    lastResult.textContent = "¡Incorrecto!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "¡El número es muy bajo!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "¡El número es muy grande!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(): void {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame(): void {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p") as NodeListOf<HTMLParagraphElement>;
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  if (resetButton && resetButton.parentNode) {
    resetButton.parentNode.removeChild(resetButton);
  }

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
