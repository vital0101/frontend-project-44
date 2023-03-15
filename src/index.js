import readlineSync from 'readline-sync';
import { getRandomInteger } from './utils.js';

// Функция - описывает логику игры
const runGame = (gameCondition, getRoundData) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [expression, correctAnswer] = getRoundData();
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
