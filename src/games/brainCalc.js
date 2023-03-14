import { getRandomInteger, runGame } from '../index.js';

const gameCondition = 'What is the result of the expression?';

// Функция - получает случайный арифметический оператор в виде строки
const getRandomOperator = () => {
  const operations = ['-', '+', '*'];
  const randomArrayElement = operations[getRandomInteger(0, 2)];
  return randomArrayElement;
};

// Функция - возвращает разультат выражения
const getResultExpression = (operandOne, operandTwo, operator) => {
  const result = 0;
  switch (operator) {
    case '-':
      return operandOne - operandTwo;
    case '+':
      return operandOne + operandTwo;
    case '*':
      return operandOne * operandTwo;
    default:
      return result;
  }
};

// Функция - возвращает массив состоящий из выражения в виде строки
// и результата вычисленного выражения
const getRoundData = () => {
  const operator = getRandomOperator();
  const operandOne = getRandomInteger(1, 10);
  const operandTwo = getRandomInteger(1, 10);
  const correctAnswer = getResultExpression(operandOne, operandTwo, operator);
  const randomExpression = `${operandOne} ${operator} ${operandTwo}`;
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runCalc = () => {
  runGame(gameCondition, getRoundData);
};

export default runCalc;
