import { getRandomInteger, runGame } from '../index.js';

// функция - преобразует строку в выражение и вычисляет его
const getCalcExp = (randomExpression) => {
  return (new Function('return ' + randomExpression))();
}

// Функция - получает случайный арифметический оператор в виде строки
const getRandomOperator = () => {
  const arr = ['-', '+', '*'];
  const randomArrEl = arr[Math.floor(Math.random() * arr.length)];
  return randomArrEl;
}

// Функция - возвращает случайное выражение в виде строки
const getRandomExpression = (randomOperator) => {
  let expression;
  switch (randomOperator) {
    case '-':
      expression = `${getRandomInteger(1, 10)} - ${getRandomInteger(1, 10)}`;
      break;
    case '+':
      expression = `${getRandomInteger(1, 10)} + ${getRandomInteger(1, 10)}`;
      break;
    case '*':
      expression = `${getRandomInteger(1, 10)} * ${getRandomInteger(1, 10)}`;
      break;
    default:
      break;
  }
  return expression;
}

// Функция - возвращает массив из выражения и результат вычесленного выражения
const getArr = () => {
  const randomOperator = getRandomOperator();
  const randomExpression = getRandomExpression(randomOperator);
  const correctAnswer = getCalcExp(randomExpression);
  return [randomExpression, correctAnswer];
}

// ############################################################################

const runCalc = () => {
  const nameGame = 'brain-calc';
  runGame(nameGame, getArr());
  return;
}

export { runCalc };