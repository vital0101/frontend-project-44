import { runGame, getRandomInteger } from '../index.js';

const gameCondition = 'What number is missing in the progression?';

// Функция - возвращает массив с арифметической прогрессией
const getProgression = () => {
  const lengthProgression = 10;
  const startProgression = getRandomInteger(1, 20);
  const stepProgression = getRandomInteger(1, 20);
  const progression = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    const currentItem = startProgression + i * stepProgression;
    progression.push(currentItem);
  }
  return progression;
};

// Функция - возвращает массив состоящий из выражения в виде строки
// и результата вычесленного выражения
const getRoundData = () => {
  const progression = getProgression();
  const correctAnswer = progression[getRandomInteger(0, progression.length - 1)];
  const indexEl = progression.indexOf(correctAnswer);
  progression[indexEl] = '..';
  const randomExpression = progression.join(' ');
  return [randomExpression, correctAnswer];
};

// Функция запуска игры
const runProgression = () => {
  runGame(gameCondition, getRoundData);
};

export default runProgression;
