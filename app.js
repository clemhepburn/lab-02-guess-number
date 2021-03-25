import { compareNumbers } from './utils.js';
const button = document.getElementById('submit-button');
const winLose = document.getElementById('win-lose');
const guessInput = document.getElementById('guess-input');

let guesses = 5;
let correctNumber = Math.ceil(Math.random() * 10);