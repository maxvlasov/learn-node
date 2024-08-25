const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Загадано число от 0 до 100.");
const number = Math.floor(Math.random() * 100);

function guessNumber() {
  rl.question('Какое число я загадал? ', (answer) => {
    const userGuess = parseInt(answer);
    if (userGuess === number) {
      console.log(`Поздравляю! Ты угадал число ${number}!`);
      rl.close();
    } else if (userGuess < number) {
      console.log("Больше");
      guessNumber();
    } else if (userGuess > number) {
      console.log("Меньше");
      guessNumber();
    }
  });
}

guessNumber();
