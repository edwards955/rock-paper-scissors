// Initialize results display
const results = document.querySelector('#results');
results.textContent = 'Welcome!';

// Assign Rock, Paper, or Scissors to appropriate button clicks
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.getAttribute('id'), getComputerChoice())
    });
});

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
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Rock') {
                results.textContent = `It's a tie!`;
                return 0;
            } else if (computerSelection === 'Paper') {
                results.textContent = `You Lose! Paper beats Rock`;
                return -1;
            } else {
                results.textContent = `You Win! Rock beats Scissors!`;
                return 1;
            }
            break;
        case 'paper':
            if (computerSelection === 'Paper') {
                results.textContent = `It's a tie!`;
                return 0;
            } else if (computerSelection === 'Scissors') {
                results.textContent = `You Lose! Scissors beats Paper`;
                return -1;
            } else {
                results.textContent = `You Win! Paper beats Rock!`;
                return 1;
            }
            break;
        case 'scissors':
            if (computerSelection === 'Scissors') {
                results.textContent = `It's a tie!`;
                return 0;
            } else if (computerSelection === 'Rock') {
                results.textContent = `You Lose! Rock beats Scissors`;
                return -1;
            } else {
                results.textContent = `You Win! Scissors beats Paper!`;
                return 1;
            }
            break;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = prompt('Select your weapon! Choose rock, paper or scissors!');
        if (playerChoice === null || playerChoice === '') {
            console.log('No weapon chosen!');
            continue;
        }
        let score = playRound(playerChoice, getComputerChoice());
        if (score === 1) {
            playerScore++;
        } else if (score === -1) {
            computerScore++;
        } else if (score === -2) {
            continue;
        }
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log('Congratulations, human! You are victorious!');
    } else {
        console.log('Unfortunately, the algorithm wins this time.');
    }
}