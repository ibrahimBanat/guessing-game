'use strict';


let score = 0;

function wlecomingUser() {
  let gussetName = prompt('Please enter your name');
  console.log('asking the user about his name ==>', 'Welcome ' + gussetName);
  alert('Welcome ' + gussetName);
}

function askingForInput() {

  let answerAfterCheck = '';

  let favPet = prompt('Do you think i am a metal music fan? answer with yes/no - y/n');
  answerAfterCheck = checkInput(favPet, 'Do you think i am a metal music fan? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are right, specially Doom/Death Metal 🎸'),score++) : alert('Nope! In metal we belive 🤘');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'why do you think that i\'m not caty person!');

  let gusseMyAge = prompt('Do you think i hold a dual Citizenship? answer with yes/no - y/n');
  answerAfterCheck = checkInput(gusseMyAge, 'Do you think i hold a dual Citizenship? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are right, I hold both indian/jordanian citizenships 🇮🇳 🇯🇴'), score++) : alert('Nope! I hold both indian/jordanian citizenships 🇮🇳 🇯🇴');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'am i really look smaller than 25?');


  let gusseMyJob = prompt('Do you think i love debating? answer with yes/no - y/n');
  answerAfterCheck = checkInput(gusseMyJob, 'Do you think i love debating? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? (alert('you are right, i am ENTP(search for mbti) which is called (Devil\'s Advocate)'), score++) : alert('hold my beer! we have to go back');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'who do you think built this website!');

  let guessMyNationallaty = prompt('Do you think i am a feeler person ? answer with yes/no - y/n');
  answerAfterCheck = checkInput(guessMyNationallaty, 'Do you think i am a feeler person ? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? alert('nope! i am a rational person who love debating in philosophical way') : (alert('you are right, i am a rational person who love debating in philosophical way'), score++);
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'no i have a dual citzenship');

  let guessMyTall = prompt('Do you think i am an athiest ? answer with yes/no - y/n');
  answerAfterCheck = checkInput(guessMyTall, 'Do you think i am an athiest ? answer with yes/no - y/n');
  (answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? alert('why would you think of this?') : (alert('you are right i am even reading in doctrine'), score++);
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'am i look short in my pics?');

}

function checkInput(userAnswer, promptQuestion) {

  // console.log('first one ', userAnswer);
  while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n' && userAnswer.toLowerCase() !== 'no') {
    // ...
    // console.log('i\'m in the while');
    userAnswer = prompt(promptQuestion);
  }
  // console.log('second one ', userAnswer);
  return userAnswer.toLowerCase();
}

function guessingNumber() {
  let guess = Number(prompt('Try to guess the number'));
  // console.log(guess);
  let myNum = Math.floor(Math.random() * 10 + 1); // 0.0 - 1
  // strict (4 attempts)
  for (let index = 0; index < 4; index++) {
    let attempts;
    if (guess > myNum) {
      alert('you guess was higher!');
      attempts = 3 - index;
      guess = Number(prompt('Try to guess the number, left attempts: ' + attempts));
      // console.log(guess);
    } else if (guess < myNum) {
      alert('you guess was lower!');
      attempts = 3 - index;
      guess = Number(prompt('Try to guess the number, left attempts: ' + attempts));
      // console.log(guess);
    } else if (guess === myNum) {
      attempts = index + 1;
      alert('you guess it right with: ' + attempts + ' attempts');
      score++;
      // console.log(score);
      break;
    }

  }
  if (guess !== myNum) {
    alert('Game Over! the correct guess is ' + myNum);
  }
}

function guessingArray() {
  let myFavArr = ['The Shawshank Redemption', 'The Godfather', 'Schindler\'s List', 'Inception'];

  let guess = prompt('Try to guess my favorite Movies');
  // console.log(guess);

  // strict (6 attempts)
  for (let index = 0; index < 6; index++) {
    // let attempts;
    // attempts = 3 - index;
    //   guess = prompt('Try to guess my favorite Movies, left attempts: ' + attempts);
    let condition = false;
    // alert(1);
    for (let item = 0; item < myFavArr.length; item++) {
      // element = myFavArr[item];
      //prompt
      // if checking
      // alert
      // alert(2);
      if (guess === myFavArr[item]) {
        // alert(3);
        console.log(guess === myFavArr[item]);
        condition = true;
        break;
      }

    }

    if (condition) {
      // alert(4);
      alert('you guessed it right!');
      score++;
      break;
    }
    alert('You are wrong! try again');
    guess = prompt('Try to guess my favorite Movies');

    // alert(5);

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

// Lab 3 instructions
// add more question takes a numiric input use propmt
// use too high too low hints for the number
// give the user 4 oppurtonities
// use loop and tell the user the correct answer

// add more question that have many possibalites stored in array
// give user 6 attempts to guess the correct answer
// the game will end once the user gueesed it right or he ran out of attempts
// use loop for this feature
// console.log through the code to track the q