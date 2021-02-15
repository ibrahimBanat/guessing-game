'use strict';


function wlecomingUser() {
  let gussetName = prompt('Please enter your name');
  console.log('asking the user about his name ==>', 'Welcome ' + gussetName);
  alert('Welcome ' + gussetName);
}

function askingForInput() {

  let answerAfterCheck = '';

  let favPet = prompt('Do you think i am a metal music fan? answer with yes/no - y/n');
  answerAfterCheck = checkInput(favPet, 'Do you think i am a metal music fan? answer with yes/no - y/n');
  alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are right, specially Doom/Death Metal 🎸' : 'Nope! In metal we belive 🤘');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'why do you think that i\'m not caty person!');

  let gusseMyAge = prompt('Do you think i hold a dual Citizenship? answer with yes/no - y/n');
  answerAfterCheck = checkInput(gusseMyAge, 'Do you think i hold a dual Citizenship? answer with yes/no - y/n');
  alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are right, I hold both indian/jordanian citizenships 🇮🇳 🇯🇴' : 'Nope! I hold both indian/jordanian citizenships 🇮🇳 🇯🇴');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'am i really look smaller than 25?');


  let gusseMyJob = prompt('Do you think i love debating? answer with yes/no - y/n');
  answerAfterCheck = checkInput(gusseMyJob, 'Do you think i love debating? answer with yes/no - y/n');
  alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are right, i am ENTP(search for mbti) which is called (Devil\'s Advocate)' : 'hold my beer! we have to go back');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'who do you think built this website!');

  let guessMyNationallaty = prompt('Do you think i am a feeler person ? answer with yes/no - y/n');
  answerAfterCheck = checkInput(guessMyNationallaty, 'Do you think i am a feeler person ? answer with yes/no - y/n');
  alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'nope! i am a rational person who love debating in philosophical way' : 'you are right, i am a rational person who love debating in philosophical way');
  // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'no i have a dual citzenship');

  let guessMyTall = prompt('Do you think i am an athiest ? answer with yes/no - y/n');
  answerAfterCheck = checkInput(guessMyTall, 'Do you think i am an athiest ? answer with yes/no - y/n');
  alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'why would you think of this?' : 'you are right i am even reading in doctrine');
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



function aboutView() {
  document.getElementById('about').style.display = 'flex';
  document.getElementById('card').style.display = 'none';
  document.getElementById('questions').style.display = 'none';
}
function questionView() {
  document.getElementById('about').style.display = 'none';
  document.getElementById('card').style.display = 'none';
  document.getElementById('questions').style.display = 'flex';
}


wlecomingUser();

askingForInput();




