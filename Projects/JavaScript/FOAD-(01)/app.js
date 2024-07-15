const CHOICES  = ['pierre', 'feuille', 'ciseaux'];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}
function getHumanChoice() {
    let choice = prompt('Pierre, feuille ou ciseaux ?');
    if (typeof choice !== 'string') {
        console.error('Le choix de l\'humain doit être une chaîne de caractères.');
        return;
    }
    choice = choice.toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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
        return `Gagné! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} bat ${computerChoice}.`;
    } else {
        computerScore++;
        return `Perdu! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} bat ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if (typeof humanChoice !== 'string' || humanChoice === "" || !CHOICES.includes(humanChoice)){
            console.error('Le choix doit être ' + CHOICES.join(', ') + ' ou ne doit pas être vide.');
            return;
        }
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - Humain: ${humanScore}, Ordinateur: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log('Félicitations! Vous avez gagné la partie.');
    } else if (humanScore < computerScore) {
        console.log('Dommage! L\'ordinateur a gagné la partie.');
    } else {
        console.log('La partie se termine par une égalité.');
    }
}

playGame();