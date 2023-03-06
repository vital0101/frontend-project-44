import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  const randomExpression = getRandomInteger(1, 10);
  const correctAnswer = randomExpression % 2 === 0 ? 'yes' : 'no';
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runEven = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(gameCondition, getRandomExpression);
};

export default runEven;
