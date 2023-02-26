import readlineSync from 'readline-sync';


// ОБЩИЕ ФРАЗЫ

// Welcome to the Brain Games!
// May I have your name? Sam
// Hello, Sam!
// Congratulations, Sam!

// НЕВЕРНЫЙ ОТВЕТ

// Your answer: 145
// '145' is wrong answer ;(. Correct answer was '175'.
// Let's try again, Sam!

// БЛОК ФРАЗ ПОВТОРЯЮЩИХСЯ 3 РАЗА - ВЕРНЫЙ ОТВЕТ

// console.log(`Question: ${выражение}
// `Your` answer: ${ответ}
// Correct!`)

// НЕТ ОТВЕТА

// console.log()



// ФРАЗЫ ЛОКАЛЬНЫЕ

// What is the result of the expression?


// const gameGreeting = 'Welcome to the Brain Games!';
// const userName = readlineSync.question('May I have your name? ');
// const greetingUser = `Hello, ${userName}!`;
// const gameDescription = 'What is the result of the expression?';
const nameGame = 'brain-calc';

// Функция получение случайного числа в заданном диапозоне
function getRandomInteger(min, max) {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
}

// возвращаемое условие задачи
const isDescriptionGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 'brain-calc':
      return 'What is the result of the expression?';
  }
};

// возаращаемое выражение при неверном ответе
const isInputExpression = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      return `You must enter "yes" or "no" !);
      Let\'s try again, ${userName}!`;
    case 'brain-calc':
      return `You must enter a number!);
      Let\'s try again, ${userName}!`;
  }
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(isDescriptionGame('brain-calc'));
  for (let i = 1; i <= 3; i += 1) {
    const response = readlineSync.question(`Question: / `);
    if (response === noAnswer) {
      console.log(isInputExpression('brain-calc'));
      console.log(`Let\'s try again, ${userName}!`);
      return;
    } else if (response === correctAnswer) {
      console.log(`Your answer: ${response}`);
      console.log('Correct!');
    } else if (response !== `${result}`) {
      console.log(`Your answer: ${response}`);
      console.log(`${response} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let\'s try again, ${userName}!`);
      return;
    }

  }
  console.log(`Congratulations, ${userName}!`);
};

export {runGame, isInputExpression, isDescriptionGame, getRandomInteger};
