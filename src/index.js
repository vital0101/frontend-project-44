import readlineSync from 'readline-sync';

// Функция - получение случайного числа в заданном диапозоне
const getRandomInteger = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

// Функция - описывает логику игры
const runGame = (gameCondition, roundData) => {
  const counterOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);
  for (let i = 1; i <= counterOfRounds; i += 1) {
    const [expression, correctAnswer] = roundData();
    const response = readlineSync.question(`Question: ${expression} / `);
    console.log(`Your answer: ${response}`);
    if (response !== `${correctAnswer}`) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export { runGame, getRandomInteger };
