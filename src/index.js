import readlineSync from 'readline-sync';

// получение случайного числа в заданном диапозоне
const getRandomInteger =(min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
}

// возвращает условие задачи в виде строки
const isDescriptionGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 'brain-calc':
      return 'What is the result of the expression?';
  }
};

// возвращает строку при не верном ответе
const isWrongAnswer = (correctAnswer, response, userName) => {
  console.log(`Your answer: ${response}`);
  console.log(`'${response}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let\'s try again, ${userName}!`);
}

// возвращает строку при верном ответе
const isRightAnswer = (correctAnswer) => {
  console.log(`Your answer: ${correctAnswer}`);
  console.log(`Correct!`);

}

const runGame = (nameGame, getArr) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(isDescriptionGame(nameGame));
  for (let i = 1; i <= 3; i += 1) {
    const [expression, correctAnswer] = getArr;
    const response = readlineSync.question(`Question: ${expression} / `);
    if (response === `${correctAnswer}`) {
      isRightAnswer(correctAnswer);
    } else if (response !== `${correctAnswer}`) {
      isWrongAnswer(correctAnswer, response, userName);
      return;
    }

  }
  console.log(`Congratulations, ${userName}!`);
};

export { runGame, getRandomInteger};
