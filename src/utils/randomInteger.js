// Функция - получение случайного числа в заданном диапозоне
const getRandomInteger = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

export default getRandomInteger;
