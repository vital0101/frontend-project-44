/* eslint-disable import/prefer-default-export */
// Функция - получение случайного числа в заданном диапозоне
export const getRandomInteger = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};
