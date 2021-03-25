// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const button = document.getElementById('submit-button');
const winLose = document.getElementById('win-lose');
const guessInput = document.getElementById('guess-input');

// initialize state
let guesses = 5;
let correctNumber = Math.ceil(Math.random() * 10);
// set event listeners to update state and DOM
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
//- generate a random number

//- compare that random number to the inputted number 
//- remove one guess
//- if they are the same, it should display that i won
//- if the number inputted is less, it should say higher
//- if the number inputted is more, it should say lower
//- when there are no more guesses left, it should say that i lose */  



