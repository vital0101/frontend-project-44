import { runGame, getRandomInteger } from '../index.js';

// Функция - возвращает массив в виде двух чисел (начало арифметической прогрессии)
const getStartProgression = () => {
  const startProgressionNum = [];
  const randomNumOne = getRandomInteger(1, 20);
  const randomNumTwo = getRandomInteger(1, 20);
  if (randomNumOne >= randomNumTwo) {
    startProgressionNum.push(randomNumTwo, randomNumOne)
  } else {
    startProgressionNum.push(randomNumOne, randomNumTwo);
  }
  return startProgressionNum;
}

// Функция - возвращает массив с арифметической прогрессией 
const getProgression = () => {
  let count = getRandomInteger(5, 10);
  const arr = getStartProgression();
  for (let i = 0; i < count; i += 1) {
    let progNum = (arr[i + 1] - arr[i]) + arr[i + 1];
    arr.push(progNum);
  }
  return arr;
};

// Функция - возвращает массив состоящий из выражения и результата вычесленного выражения
const getRandomExpression = () => {
  const newArr = getProgression();
  let randomArrEl = newArr[Math.floor(Math.random() * newArr.length)];
  const correctAnswer = randomArrEl;
  const indexEl = newArr.indexOf(randomArrEl);
  newArr[indexEl] = '..';
  const strNewArr = newArr.join(' ');
  return [strNewArr, correctAnswer];
}

// Функция запуска игры
const runProgression = () => {
  const nameGame = 'brain-progression';
  runGame(nameGame, getRandomExpression);
  return;
}

export { runProgression };