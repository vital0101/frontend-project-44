import { runGame, getRandomInteger } from '../index.js';

// возвращае массив простых делителей
const getLargestDivisor = (num) => {
  const arr = [];
  for (let i = num; i > 0; i -= 1) {
    if (Number.isInteger(num / i)) {
      let a = num / i;
      arr.push(a);
    }
  }
  return arr;
};

// сравнивает два массива и возвращает наибольшее общее число
const compareArrays = (arrOne, arrTwo) => {
  const arr = [];
  for (let i = 0; i < arrOne.length; i += 1) {
    for (let j = 0; j < arrTwo.length; j += 1) {
      if (arrOne[i] === arrTwo[j]) {
        arr.push(arrOne[i]);
      }
    }
  }
  return Math.max(...arr);
};

// возвращает массив состоящий из случайного выражения в виде строки и правильного ответа
const getRandomExpression = () => {
  const randomNumOne = getRandomInteger(1, 30);
  const randomNumTwo = getRandomInteger(1, 30);
  const arrLargestDivisorOne = getLargestDivisor(randomNumOne);
  const arrLargestDivisorTwo = getLargestDivisor(randomNumTwo);
  const correctAnswer = compareArrays(arrLargestDivisorOne, arrLargestDivisorTwo);
  const randomExpression =  `${randomNumOne} ${randomNumTwo}`;
  return [randomExpression, correctAnswer];
}

const runGcd = () => {
  const nameGame = 'brain-gcd';
  runGame(nameGame, getRandomExpression());
  return;
}

export { runGcd };