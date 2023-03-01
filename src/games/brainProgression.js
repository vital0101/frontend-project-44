import { runGame, getRandomInteger } from '../index.js';

// 1 получить случайное число
// 2 создать счетчик определяющий длину прогрессии
// 3 описать формулу создающую прогрессию
// 4 случайным образом заменить в прогресси одно число на ..
// 5 вывести выражение в виде строки и убранное число

// получаем случайное число, начало прогрессии
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

// счетчик длины прогрессии
let count = getRandomInteger(5, 10);

// возвращает массив с прогрессией 
const getProgression = () => {
  const arr = getStartProgression();
  for (let i = 0; i < count; i += 1) {
    let progNum = (arr[i + 1] - arr[i]) + arr[i + 1];
    arr.push(progNum);
  }
  return arr;
};

// Функция - получает случайный элемент массива
const getRandomExpression = (arr) => {
  const newArr = arr;
  let randomArrEl = newArr[Math.floor(Math.random() * newArr.length)];
  const correctAnswer = randomArrEl;
  const indexEl = newArr.indexOf(randomArrEl);
  newArr[indexEl] = '..';
  const strNewArr = newArr.join(' ');
  return [strNewArr, correctAnswer];
}

const runProgression = () => {
  const nameGame = 'brain-progression';
  runGame(nameGame, getRandomExpression(getProgression()));
  return;
}

export { runProgression };