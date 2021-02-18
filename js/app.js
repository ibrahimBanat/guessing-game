'use strict';
let score = 0;

let promptTexts = {
  consoleMessage : {
    message: 'asking user ',
    restMessage : ' ==> '
  },
  question1: {
    questionText: 'Do you think i am a metal music fan? answer with yes/no - y/n',
    textForTrue: 'you are right, specially Doom/Death Metal 🎸',
    textForFalse: 'Nope! In metal we belive 🤘'
  },
  question2: {
    questionText: 'Do you think i hold a dual Citizenship? answer with yes/no - y/n',
    textForTrue: 'you are right, I hold both indian/jordanian citizenships 🇮🇳 🇯🇴',
    textForFalse: 'Nope! I hold both indian/jordanian citizenships 🇮🇳 🇯🇴'
  },
  question3: {
    questionText: 'Do you think i love debating? answer with yes/no - y/n',
    textForTrue: 'you are right, but I don\'t call it debating, I love it because it\'s fun, and I tend to be good at things I enjoy',
    textForFalse: 'hold my beer! we have to go back'
  },
  question4: {
    questionText: 'Do you think i am a feeler person ? answer with yes/no - y/n',
    textForTrue: 'nope! I am kind of personality which tend to be mentally active, constanly questioning and pondering.',
    textForFalse: 'you are right, I\'m a thinker with an innate to drive to decipher life\'s mysteries'
  },
  question5: {
    questionText: 'Do you think i am an athiest ? answer with yes/no - y/n',
    textForTrue: 'why would you think of this?',
    textForFalse: 'you are right, even i don\'t mind thinking or arguing in doctrine things with atheists but I\'m not athiest'
  },
  guessingGame: {
    questionText: 'Try to guess my favorite Movies',
    rightGuess: 'you guessed it right!',
    wrongGuess : 'You are wrong! try again'
  },
  guessingNumber: {
    questionText: 'Try to guess the number',
    tooHighNumber: 'you guess was higher!',
    tooLowNumber: 'you guess was lower!',
    rightGuess: 'you guess it right ',
    gameOverMessage: 'Game Over! the correct guess is '
  }


};

function wlecomingUser() {
  let gussetName = prompt('Please enter your name');
  console.log('asking the user about his name ==>', 'Welcome ' + gussetName);
  alert('Welcome ' + gussetName);
}

function askingForInput() {
  let answerAfterCheck = '';

  let favPet = prompt(promptTexts.question1.questionText);
  answerAfterCheck = checkInput(favPet, promptTexts.question1.questionText);
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert(promptTexts.question1.textForTrue),score++) : alert(promptTexts.question1.textForFalse);
  console.log(`${promptTexts.consoleMessage.message}${promptTexts.question1.questionText}${promptTexts.consoleMessage.restMessage}`
    ,(answerAfterCheck === 'yes' || answerAfterCheck === 'y')? promptTexts.question1.textForTrue : promptTexts.question1.textForFalse);

  let gusseMyAge = prompt(promptTexts.question2.questionText);
  answerAfterCheck = checkInput(gusseMyAge, promptTexts.question2.questionText);
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert(promptTexts.question2.textForTrue), score++) : alert(promptTexts.question2.textForFalse);
  console.log(`${promptTexts.consoleMessage.message}${promptTexts.question2.questionText}${promptTexts.consoleMessage.restMessage}`
    ,(answerAfterCheck === 'yes' || answerAfterCheck === 'y')? promptTexts.question2.textForTrue : promptTexts.question2.textForFalse);

  let gusseMyJob = prompt(promptTexts.question3.questionText);
  answerAfterCheck = checkInput(gusseMyJob, promptTexts.question3.questionText);
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert(promptTexts.question3.textForTrue), score++) : alert(promptTexts.question3.textForFalse);
  console.log(`${promptTexts.consoleMessage.message}${promptTexts.question3.questionText}${promptTexts.consoleMessage.restMessage}`
    ,(answerAfterCheck === 'yes' || answerAfterCheck === 'y')? promptTexts.question3.textForTrue : promptTexts.question3.textForFalse);

  let guessMyNationallaty = prompt(promptTexts.question4.questionText);
  answerAfterCheck = checkInput(guessMyNationallaty, promptTexts.question4.questionText);
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? alert(promptTexts.question4.textForTrue) : (alert(promptTexts.question4.textForFalse), score++);
  console.log(`${promptTexts.consoleMessage.message}${promptTexts.question4.questionText}${promptTexts.consoleMessage.restMessage}`
    ,(answerAfterCheck === 'yes' || answerAfterCheck === 'y')? promptTexts.question4.textForTrue : promptTexts.question4.textForFalse);

  let guessMyTall = prompt(promptTexts.question5.questionText);
  answerAfterCheck = checkInput(guessMyTall, promptTexts.question5.questionText);
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? alert(promptTexts.question5.textForTrue) : (alert(promptTexts.question5.textForFalse), score++);
  console.log(`${promptTexts.consoleMessage.message}${promptTexts.question5.questionText}${promptTexts.consoleMessage.restMessage}`
    ,(answerAfterCheck === 'yes' || answerAfterCheck === 'y')? promptTexts.question5.textForTrue : promptTexts.question5.textForFalse);
}


function checkInput(userAnswer, promptQuestion) {
  while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n' && userAnswer.toLowerCase() !== 'no') {
    userAnswer = prompt(promptQuestion);
  }
  return userAnswer.toLowerCase();
}

function guessingNumber() {
  let guess = Number(prompt(promptTexts.guessingNumber.questionText));
  let myNum = Math.floor(Math.random() * 10 + 1);

  for (let index = 0; index < 4; index++) {
    let attempts;
    if (guess > myNum) {
      alert(promptTexts.guessingNumber.tooHighNumber);
      attempts = 3 - index;
      guess = Number(prompt(`${promptTexts.guessingNumber.questionText}, left attempts: ${attempts}`));

    } else if (guess < myNum) {
      alert(promptTexts.guessingNumber.tooLowNumber);
      attempts = 3 - index;
      guess = Number(prompt(`${promptTexts.guessingNumber.questionText}, left attempts: ${attempts}`));

    } else if (guess === myNum) {
      attempts = index + 1;
      alert(`${promptTexts.guessingNumber.rightGuess} with: ${attempts} attempts`);
      score++;
      break;
    }

  }
  if (guess !== myNum) {
    alert(`${promptTexts.guessingGame.rightGuess} ${myNum}`);
  }
}

function guessingArray() {
  let myFavArr = ['The Shawshank Redemption', 'The Godfather', 'Schindler\'s List', 'Inception'];
  let guess = prompt(promptTexts.guessingGame.questionText);

  for (let index = 0; index < 6; index++) {
    let condition = false;
    for (let item = 0; item < myFavArr.length; item++) {
      if (guess === myFavArr[item]) {
        condition = true;
        break;
      }
    }
    if (condition) {
      alert(promptTexts.guessingGame.rightGuess);
      score++;
      break;
    }
    alert(promptTexts.guessingGame.wrongGuess);
    guess = prompt(promptTexts.guessingGame.questionText);
  }
}




function aboutView() {
  document.getElementById('about').style.display = 'flex';
  document.getElementById('card').style.display = 'none';
  document.getElementById('questions').style.display = 'none';
  document.getElementById('top__10').style.display = 'none';
}
function questionView() {
  document.getElementById('about').style.display = 'none';
  document.getElementById('card').style.display = 'none';
  document.getElementById('questions').style.display = 'flex';
  document.getElementById('top__10').style.display = 'none';
}


function top10View() {
  document.getElementById('top__10').style.display = 'flex';
  document.getElementById('about').style.display = 'none';
  document.getElementById('card').style.display = 'none';
  document.getElementById('questions').style.display = 'none';
}

function headerChanger(name) {
  document.getElementById('head__desc').textContent = name;

}

wlecomingUser();
askingForInput();
guessingNumber();
guessingArray();
alert('Your score is: ' + score + '/7');


