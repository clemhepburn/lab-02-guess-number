

export function compareNumbers(guess, correctNumber) {
    if (guess > correctNumber) return 'less than';
    else if (guess < correctNumber) return 'greater than';
    else return 'equal';
}


