'use strict';

console.log('Hello World!');



function usersLocation(){
    let message
    let usersLocation = prompt('where are you from?');
    if (usersLocation == 'Hawaii'){
        message = 'Lucky we live HI';
    } else if (usersLocation == 'California'){
        message = '=( I am sorry';
    } else {
        message = 'Awesome enjoy your visit!'
    }
    document.write(message)  
}

usersLocation(); 

function quizQuestion() {
    let quizans = prompt('What time zone is Hawaii in?')
    while (quizans != 'HST') {
        quizans = prompt('wrong')
    } if (quizans === 'PST') {
        alert('Great Job!');

    }
}