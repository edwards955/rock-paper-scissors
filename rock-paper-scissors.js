function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    switch (playerChoice) {
        case 'rock':
            if (computerSelection === 'Rock') {
                return `It's a tie!`;
            } else if (computerSelection === 'Paper') {
                return `You Lose! Paper beats Rock`;
            } else {
                return `You Win! Rock beats Scissors!`;
            }
            break;
        case 'paper':
            if (computerSelection === 'Paper') {
                return `It's a tie!`;
            } else if (computerSelection === 'Scissors') {
                return `You Lose! Scissors beats Paper`;
            } else {
                return `You Win! Paper beats Rock!`;
            }
            break;
        case 'scissors':
            if (computerSelection === 'Scissors') {
                return `It's a tie!`;
            } else if (computerSelection === 'Rock') {
                return `You Lose! Rock beats Scissors`;
            } else {
                return `You Win! Scissors beats Paper!`;
            }
            break;
    }
}