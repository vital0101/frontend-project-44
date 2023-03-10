import { getRandomInteger, runGame } from '../index.js';

// Функция - получает случайный арифметический оператор в виде строки
const getRandomOperator = () => {
  const arr = ['-', '+', '*'];
  const randomArrEl = arr[getRandomInteger(0, 2)];
  return randomArrEl;
};

// Функция - возвращает разультат выражения
const getResultExpression = (operandOne, operandTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '-':
      result = operandOne - operandTwo;
      break;
    case '+':
      result = operandOne + operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
      break;
    default:
      return result;
  }
  return result;
};

// Функция - возвращает выражение в виде строки
const getRandomExpression = (operandOne, operandTwo, operator) => {
  let expression = 'This is an empty string';
  switch (operator) {
    case '-':
      expression = `${operandOne} - ${operandTwo}`;
      break;
    case '+':
      expression = `${operandOne} + ${operandTwo}`;
      break;
    case '*':
      expression = `${operandOne} * ${operandTwo}`;
      break;
    default:
      return expression;
  }
  return expression;
};

// Функция - возвращает массив состоящий из выражения в виде строки
// и результата вычисленного выражения
const getRoundData = () => {
  const operator = getRandomOperator();
  const operandOne = getRandomInteger(1, 10);
  const operandTwo = getRandomInteger(1, 10);
  const correctAnswer = getResultExpression(operandOne, operandTwo, operator);
  const randomExpression = getRandomExpression(operandOne, operandTwo, operator);
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runCalc = () => {
  const gameCondition = 'What is the result of the expression?';
  runGame(gameCondition, getRoundData);
};

export default runCalc;
