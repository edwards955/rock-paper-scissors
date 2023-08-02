
let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let roundResult = playRound(button.getAttribute('id'), getComputerChoice());
        updateScore(roundResult);
        checkForWinner();
    });
});
const scores = document.querySelector('#scores');
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', restartGame);

restartGame();

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    results.textContent = 'Select your weapon! Choose rock, paper or scissors!';
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`
}

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

function updateScore(roundResult) {
    if (roundResult === 1) {
        playerScore++;
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    } else if (roundResult === -1) {
        computerScore++;
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    }
}

function checkForWinner() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            results.textContent = 'Congratulations, human! You are victorious!';
        } else {
            results.textContent = 'Unfortunately, the algorithm wins this time.';
        }
    }
}