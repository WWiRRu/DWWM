const CHOICES = ['pierre', 'feuille', 'ciseaux'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function getHumanChoice() {
    let choice = prompt('Pierre, feuille ou ciseaux ?').toLowerCase();
    if (!CHOICES.includes(choice)) {
        console.error('Le choix doit être pierre, feuille ou ciseaux.');
        return null;
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Égalité! Vous avez tous les deux choisi ${humanChoice}.`;
    }
    const winConditions = {
        pierre: 'ciseaux',
        feuille: 'pierre',
        ciseaux: 'feuille'
    };
    if (computerChoice === winConditions[humanChoice]) {
        humanScore++;
        return `Gagné! ${humanChoice} bat ${computerChoice}.`;
    } else {
        computerScore++;
        return `Perdu! ${computerChoice} bat ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        if (!humanChoice) return;
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - Humain: ${humanScore}, Ordinateur: ${computerScore}`);
    }
    console.log(humanScore > computerScore ? 'Félicitations! Vous avez gagné la partie.' : humanScore < computerScore ? 'Dommage! L\'ordinateur a gagné la partie.' : 'La partie se termine par une égalité.');
}

playGame();