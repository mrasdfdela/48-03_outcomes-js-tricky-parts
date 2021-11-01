function guessingGame() {
  const secretNum = Math.floor(Math.random() * 100);
  let gameOver = false;
  let guessCount = 0;

  return function evalGuess(guessNum=undefined) {
    if (!guessNum) return;
    if (gameOver) return "The game is over, you already won!";
    guessCount++;
    
    if (secretNum < guessNum) {
      return `${guessNum} is too high!`;
    } else if (secretNum > guessNum) {
      return `${guessNum} is too low!`;
    } else if (secretNum === guessNum) {
      gameOver = true;
      return `You win! You found ${secretNum} in ${guessCount} guesses.`;
    }
  };
}

module.exports = { guessingGame };
