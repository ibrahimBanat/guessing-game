'use strict';


function wlecomingUser() {
    let gussetName = prompt('Please enter your name', 'Your Name');
    console.log('asking the user about his name ==>', 'Welcome ' + gussetName);
    alert('Welcome ' + gussetName);
}

function askingForInput() {

    let answerAfterCheck = '';

    let favoriateAnimal = prompt('Do you think that my fav animal is cat? answer with yes/no - y/n');
    answerAfterCheck = checkInput(favoriateAnimal, 'Do you think that my fav animal is cat? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'why do you think that i\'m not caty person!');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'why do you think that i\'m not caty person!');

    let gusseMyAge = prompt('Do you think i\'m bigger than 25? answer with yes/no - y/n');
    answerAfterCheck = checkInput(gusseMyAge, 'Do you think i\'m bigger than 25? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'am i really look smaller than 25?');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'am i really look smaller than 25?');


    let gusseMyJob = prompt('Do you think i am software developer? answer with yes/no - y/n');
    answerAfterCheck = checkInput(gusseMyJob, 'Do you think i am software developer? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'who do you think built this website!');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'who do you think built this website!');

    let guessMyNationallaty = prompt('Do you i think have a dual citizenship ? answer with yes/no - y/n');
    answerAfterCheck = checkInput(guessMyNationallaty, 'Do you i think have a dual citizenship ? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'no i have a dual citzenship');
    // console.log((answerAfterCheck === 'yes' || answerAfterCheck === 'y')? 'you are correct': 'no i have a dual citzenship');

    let guessMyTall = prompt('Do you think im taller than 160 ? answer with yes/no - y/n');
    answerAfterCheck = checkInput(guessMyTall, 'Do you think im taller than 160 ? answer with yes/no - y/n');
    alert((answerAfterCheck === 'yes' || answerAfterCheck === 'y') ? 'you are correct' : 'am i look short in my pics?');
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

wlecomingUser();

askingForInput();




