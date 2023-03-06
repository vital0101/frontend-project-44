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

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  const array = getProgression();
  const randomarrayEl = array[Math.floor(Math.random() * array.length)];
  const correctAnswer = randomarrayEl;
  const indexEl = array.indexOf(randomarrayEl);
  array[indexEl] = '..';
  const strFromArray = array.join(' ');
  return [strFromArray, correctAnswer];
};

// Функция запуска игры
const runProgression = () => {
  const gameCondition = 'What number is missing in the progression?';
  runGame(gameCondition, getRandomExpression);
};

export default runProgression;
