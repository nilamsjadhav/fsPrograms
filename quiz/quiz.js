const fs = require('fs');
const {questions} = require('./quizData.js');

const randomNumber = () => Math.floor(Math.random() * 10);

const storeData = function (records) {
  fs.writeFileSync('./result.json', JSON.stringify(records), 'utf8');
};

const readData = () => fs.readFileSync('./result.json', 'utf8');

const verifyAnswer = function(userAnswer){
  const questionDetails = JSON.parse(readData());
  if (questionDetails.answer === questionDetails.options[userAnswer]) {
    console.log('Congratulations..!! You won', questionDetails.reward,'\n');
    return;
  }
  console.log('Oops! wrong answer\n');
};

const arrangeOption = option => option[0] + ') ' + option[1];

const displayQuestion = function (question) {
  console.log('Q.', question.question);
  const options = Object.entries(question.options);
  console.log('options :', ...options.map(arrangeOption));
  storeData(question);
};

const startQuiz = function (questions, instruction, answer) {
  const questionNum = randomNumber();
  if (instruction === 'q') {
    return displayQuestion(questions[questionNum], questionNum);
  }
  return verifyAnswer(answer);
};

startQuiz(questions, ...process.argv.slice(2));