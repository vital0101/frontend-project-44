import { runGame, getRandomInteger } from '../index.js';

// Функция - определяет четность числа
const isEven = (randomNum) => (randomNum % 2 === 0 ? true : false);

// Функция - возвращает массив состоящий из выражения в виде строки
// и результата вычисленного выражения
const getRoundData = () => {
  const randomExpression = getRandomInteger(1, 10);
  const correctAnswer = isEven(randomExpression) === true ? 'yes' : 'no';
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runEven = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(gameCondition, getRoundData);
};

export default runEven;
