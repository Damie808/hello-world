'use strict';

console.log('Hello World!');

let usersLocation = prompt('where are you from?');

let message;

if (usersLocation == 'Hawaii'){
    message = 'Lucky we live HI';
} else if (usersLocation == 'California'){
    message = '=( I am sorry';
} else {
    message = 'Awesome enjoy your visit!'
}
document.write(message)

function 