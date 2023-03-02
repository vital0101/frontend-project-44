import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  let prime = true;
  const randomExpression = getRandomInteger(2, 50);
  for (let i = 2; i < randomExpression - 1; i += 1) {
    if (randomExpression % i === 0) {
      prime = false;
    }
  }
  const correctAnswer = prime ? 'yes' : 'no';
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runPrime = () => {
  const nameGame = 'brain-prime';
  runGame(nameGame, getRandomExpression);
};

export default runPrime;
