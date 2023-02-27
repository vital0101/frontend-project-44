#!/usr/bin/env node

import readlineSync from 'readline-sync';

const arrNumbers = [15, 7, 6];

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// const isRightAnswer = () => {
//   console.log(`Your answer: ${response}`);
//   console.log('Correct!');
// };

const isWrongAnswer = () => {
  console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
  console.log(`Let's try again, ${userName}!`)
};

const isNotCorrectAnswer = () => {
  console.log(`Answer 'yes' if the number is even, otherwise answer 'no'.`);
  console.log(`Let's try again, ${userName}!`);
};

const getResult = () => {
  for (let num of arrNumbers) {
    const response = readlineSync.question(`Question: ${num} / `);
    if ((response === 'no' && num % 2 !== 0) || (response === 'yes' && num % 2 === 0)) {
      console.log(`Your answer: ${response}`);
    } else if ((response === 'yes' && num % 2 !== 0) || (response === 'no' && num % 2 === 0)) {
      isWrongAnswer();
      return;
    } else {
      isNotCorrectAnswer();
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

getResult();

