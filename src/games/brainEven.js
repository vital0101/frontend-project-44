import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив из выражения и результат вычесленного выражения
const getArr = () => {
  const randomExpression = getRandomInteger(1, 10);
  const correctAnswer = randomExpression % 2 === 0 ? 'yes' : 'no';
  return [randomExpression, correctAnswer];
}

export const runEven = () => {
  const nameGame = 'brain-even';
  runGame(nameGame, getArr());
  return;
};
