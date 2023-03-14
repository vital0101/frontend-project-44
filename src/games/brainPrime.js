import { runGame, getRandomInteger } from '../index.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no"';

// Функция - возвращает true если число простое
const isPrime = (number) => {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      prime = false;
    }
  }
  return prime;
};

// Функция - возвращает массив состоящий из выражения в виде строки
// и результата вычесленного выражения
const getRoundData = () => {
  const randomExpression = getRandomInteger(2, 50);
  const correctAnswer = isPrime(randomExpression) ? 'yes' : 'no';
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runPrime = () => {
  runGame(gameCondition, getRoundData);
};

export default runPrime;
