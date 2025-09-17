let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  let message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "⚠️ Please enter a number between 1 and 10!";
    return;
  }

  if (guess === secretNumber) {
    score++;
    message.textContent = "🎉 Correct! You guessed the number!";
    document.getElementById("score").textContent = "Score: " + score;
    secretNumber = Math.floor(Math.random() * 10) + 1; // new number
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  score = 0;
  document.getElementById("message").textContent = "Game restarted! Guess again.";
  document.getElementById("score").textContent = "Score: 0";
  document.getElementById("guess").value = "";
}
