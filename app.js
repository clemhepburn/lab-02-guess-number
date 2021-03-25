import { compareNumbers } from './utils.js';
const button = document.getElementById('submit-button');
const winLose = document.getElementById('win-lose');
const guessInput = document.getElementById('guess-input');

let guesses = 5;
let correctNumber = Math.ceil(Math.random() * 10);

button.addEventListener('click', () => {
    guesses--;
    console.log(compareNumbers(guessInput.value, correctNumber));

    if (compareNumbers(guessInput.value, correctNumber) === 'less than') {
        winLose.textContent = 'That guess is too high! You have ' + guesses + ' guesses left!';
        
    }
    else if (compareNumbers(guessInput.value, correctNumber) === 'greater than') {
        winLose.textContent = 'That guess is too low! You have ' + guesses + ' guesses left!'; 
    } 
    else if (compareNumbers(guessInput.value, correctNumber) === 'equal') {
        winLose.textContent = 'You got it!';
    }
    else if (guesses <= 0) {
        button.removeEventListener;
        winLose.textContent = 'You ran out of guesses.';
    }
});