import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает наибольший общий делитель для двух чисел
const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (y === 0) return x;
  return gcd(y, x % y);
};

// Функция - возвращает массив состоящий из случайного выражения в виде строки и правильного ответа
const getRandomExpression = () => {
  const randomNumOne = getRandomInteger(1, 30);
  const randomNumTwo = getRandomInteger(1, 30);
  const correctAnswer = gcd(randomNumOne, randomNumTwo);
  const randomExpression = `${randomNumOne} ${randomNumTwo}`;
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runGcd = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  runGame(gameCondition, getRandomExpression);
};

export default runGcd;
