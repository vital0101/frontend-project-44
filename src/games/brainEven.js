import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  const randomExpression = getRandomInteger(1, 10);
  const correctAnswer = randomExpression % 2 === 0 ? 'yes' : 'no';
  return [randomExpression, correctAnswer];
}

// Функция запуска игры
const runEven = () => {
  const nameGame = 'brain-even';
  runGame(nameGame, getRandomExpression);
  return;
};

export { runEven };