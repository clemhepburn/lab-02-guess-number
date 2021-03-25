// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from './utils.js';

const test = QUnit.test;

test('compareNumbers function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guessTooLow = compareNumbers(7, 9);
    const guessTooHigh = compareNumbers(6, 3);
    const rightGuess = compareNumbers(4, 4);
    
  
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(guessTooLow, 'less than', 'that guess is too low');
    expect.equal(guessTooHigh, 'greater than', 'that guess is too high');
    expect.equal(rightGuess, 'equal', 'you got it right');

});
