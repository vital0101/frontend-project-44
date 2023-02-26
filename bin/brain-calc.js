#!/usr/bin/env node

import readlineSync from 'readline-sync';

// переменная которой присвоен вычисленный случайный оператор
const randomOperator = getRandomOperator();

// функция - преобразует строку в выражение и вычисляет его
function getCalcExp(randomExpression) {
  return (new Function('return ' + randomExpression))();
}

// Функция получение случайного числа в заданном диапозоне
function getRandomInteger(min, max) {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
}

// Функция получение случайного арифметического оператора в виде строки
function getRandomOperator() {
  const arr = ['-', '+', '*'];
  const randomArrEl = arr[Math.floor(Math.random() * arr.length)];
  return randomArrEl;
}


// Функция - возвращает случайное выражение в виде строки
function getRandomExpression() {
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

// ############################################################################

// тело программы

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const runGame = () => {
  for (let i = 1; i <= 3; i += 1) {
    const randomExpression = getRandomExpression();
    const result = getCalcExp(randomExpression);
    const response = readlineSync.question(`Question: ${randomExpression} / `);
    if (response === `${result}`) {
      console.log(`Your answer: ${result}`);
      console.log('Correct!');
    } else if (response === '') {
      console.log('You must enter a number!');
      console.log(`Let\'s try again, ${userName}!`);
      return;
    } else if (response !== `${result}`) {
      console.log(`Your answer: ${response}`);
      console.log(`${response} is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let\'s try again, ${userName}!`);
      return;
    } 
  }
  console.log(`Congratulations, ${userName}!`);
}

runGame();