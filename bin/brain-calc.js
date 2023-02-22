#!/usr/bin/env node

import readlineSync from 'readline-sync';

// получение случайного числа в заданнос диапозоне
const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// массив с повторяющемися арифметическими операторами
const arr = ['-', '+', '*'];

// получение рандомного индекса элемента массива
let rand = arr[Math.floor(Math.random() * arr.length)];

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const response = readlineSync.question(`Question: ${randomInteger(0, 100)} ${rand} ${randomInteger(0, 100)} / `);

// console.log(randomInteger(0, 100) rand randomInteger(0, 100));

// Question: 4 + 10
// Your answer: 14
// Correct!
// Question: 25 - 11
// Your answer: 14
// Correct!
// Question: 25 * 7
// Your answer: 175
// Correct!
// Congratulations, Sam!

// Question: 25 * 7
// Your answer: 145
// '145' is wrong answer ;(. Correct answer was '175'.
// Let's try again, Sam!