import { getRandomInteger, runGame } from '../index.js';

// функция - вычисляет выражение и преобразует его в строку
// const getCalcExp = (randomExpression) => new Function(`return  ${randomExpression}`)();

// Функция - получает случайный арифметический оператор в виде строки
const getRandomOperator = () => {
  const arr = ['-', '+', '*'];
  const randomArrEl = arr[getRandomInteger(0, 2)];
  return randomArrEl;
};

// Функция - возвращает случайные операнды,оператор и разультат выражения
const getResultExpression = () => {
  const randomOperator = getRandomOperator();
  const randomNumOne = getRandomInteger(1, 10);
  const randomNumTwo = getRandomInteger(1, 10);
  let resultExpression;
  switch (randomOperator) {
    case '-':
      resultExpression = randomNumOne - randomNumTwo;
      break;
    case '+':
      resultExpression = randomNumOne + randomNumTwo;
      break;
    case '*':
      resultExpression = randomNumOne * randomNumTwo;
      break;
    default:
      resultExpression = 0;
  }
  return [randomNumOne, randomOperator, randomNumTwo, resultExpression];
};

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  const [randomNumOne, randomOperator, randomNumTwo, resultExpression] = getResultExpression();
  let expression;
  let correctAnswer;
  switch (randomOperator) {
    case '-':
      expression = `${randomNumOne} - ${randomNumTwo}`;
      correctAnswer = resultExpression;
      return [expression, correctAnswer];
    case '+':
      expression = `${randomNumOne} + ${randomNumTwo}`;
      correctAnswer = resultExpression;
      return [expression, correctAnswer];
    case '*':
      expression = `${randomNumOne} * ${randomNumTwo}`;
      correctAnswer = resultExpression;
      return [expression, correctAnswer];
    default:
      return 'This is an empty string';
  }
};

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getArr = () => getRandomExpression();

// Функция запуска игры
const runCalc = () => {
  const gameCondition = 'What is the result of the expression?';
  runGame(gameCondition, getArr);
};

export default runCalc;
