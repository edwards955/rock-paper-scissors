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
                console.log(`It's a tie!`);
                return 0;
            } else if (computerSelection === 'Paper') {
                console.log(`You Lose! Paper beats Rock`);
                return -1;
            } else {
                console.log(`You Win! Rock beats Scissors!`);
                return 1;
            }
            break;
        case 'paper':
            if (computerSelection === 'Paper') {
                console.log(`It's a tie!`);
                return 0;
            } else if (computerSelection === 'Scissors') {
                console.log(`You Lose! Scissors beats Paper`);
                return -1;
            } else {
                console.log(`You Win! Paper beats Rock!`);
                return 1;
            }
            break;
        case 'scissors':
            if (computerSelection === 'Scissors') {
                console.log(`It's a tie!`);
                return 0;
            } else if (computerSelection === 'Rock') {
                console.log(`You Lose! Rock beats Scissors`);
                return -1;
            } else {
                console.log(`You Win! Scissors beats Paper!`);
                return 1;
            }
            break;
        default:
            console.log('Incorrect weapon entered.');
            return -2;
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