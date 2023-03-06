import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  let prime = true;
  const randomNumber = getRandomInteger(2, 50);
  for (let i = 2; i < Math.sqrt(randomNumber); i += 1) {
    if (randomNumber % i === 0) {
      prime = false;
    }
  }
  const correctAnswer = prime ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

// Функция запуска игры
const runPrime = () => {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runGame(gameCondition, getRandomExpression);
};

export default runPrime;
