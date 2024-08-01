let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "default";

    }

}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?")

    switch (humanChoice.toLowerCase()) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            return "default";

    }
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "Draw! Rock against Rock!";
                    break;
                case "paper":
                    return "You loose! Paper beats Rock!";
                    computerScore++;
                    break;
                case "scissors":
                    return "You win! Rock beats Scissors!";
                    humanScore++;
                    break;
                default:
                    return "default";
        
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    return "You win! Paper beats Rock!";
                    humanScore++;
                    break;
                case "paper":
                    return "Draw! Paper against Paper!";
                    break;
                case "scissors":
                    return "You loose! Scissors beat Paper!";
                    computerScore++;
                    break;
                default:
                    return "default";
        
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    return "You loose! Rock beats Scissors!";
                    computerScore++;
                    break;
                case "paper":
                    return "You win! Paper beats Scissors!";
                    humanScore++;
                    break;
                case "scissors":
                    return "Draw! Scissors agains Scissors!";
                    break;
                default:
                    return "default";
        
            }
            break;
        default:
            return "default";

    }
}
let hC = getHumanChoice();
let cC = getComputerChoice();

console.log(playRound(hC, cC))