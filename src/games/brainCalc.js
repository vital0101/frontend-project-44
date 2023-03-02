import { getRandomInteger, runGame } from '../index.js';

// функция - вычисляет выражение и преобразует его в строку
// const getCalcExp = (randomExpression) => new Function(`return  ${randomExpression}`)();

// Функция - получает случайный арифметический оператор в виде строки
const getRandomOperator = () => {
  const arr = ['-', '+', '*'];
  const randomArrEl = arr[Math.floor(Math.random() * arr.length)];
  return randomArrEl;
};

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  const randomOperator = getRandomOperator();
  const randomNumOne = getRandomInteger(1, 10);
  const randomNumTwo = getRandomInteger(1, 10);
  let expression;
  let correctAnswer;
  switch (randomOperator) {
    case '-':
      expression = `${randomNumOne} - ${randomNumTwo}`;
      correctAnswer = randomNumOne - randomNumTwo;
      return [expression, correctAnswer];
    case '+':
      expression = `${randomNumOne} + ${randomNumTwo}`;
      correctAnswer = randomNumOne + randomNumTwo;
      return [expression, correctAnswer];
    case '*':
      expression = `${randomNumOne} * ${randomNumTwo}`;
      correctAnswer = randomNumOne * randomNumTwo;
      return [expression, correctAnswer];
    default:
      return 'This is an empty string';
  }
};

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getArr = () => getRandomExpression();

// Функция запуска игры
const runCalc = () => {
  const nameGame = 'brain-calc';
  runGame(nameGame, getArr);
};

export default runCalc;
