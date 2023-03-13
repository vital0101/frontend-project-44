import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив с арифметической прогрессией
const getProgression = () => {
  const lengthProgression = 10;
  const startProgression = getRandomInteger(1, 20);
  const stepProgression = getRandomInteger(1, 20);
  const array = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    const progNum = startProgression + i * stepProgression;
    array.push(progNum);
  }
  return array;
};

// Функция - возвращает массив состоящий из выражения в виде строки
// и результата вычесленного выражения
const getRoundData = () => {
  const array = getProgression();
  const correctAnswer = array[getRandomInteger(0, array.length - 1)];
  const indexEl = array.indexOf(correctAnswer);
  array[indexEl] = '..';
  const randomExpression = array.join(' ');
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runProgression = () => {
  const gameCondition = 'What number is missing in the progression?';
  runGame(gameCondition, getRoundData);
};

export default runProgression;
