
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


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    label.textContent = "Draw";
                    return "Draw! Rock against Rock!";
                    break;
                
                case "paper":
                    computerScore++;
                    label.textContent = "You loose";
                    return "You loose! Paper beats Rock!";
                    break;
                    
                case "scissors":
                    humanScore++;
                    label.textContent = "You win";
                    return "You win! Rock beats Scissors!";
                    
                    break;
                default:
                    return "default";
        
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    return "You win! Paper beats Rock!";
                    break;
                case "paper":
                    return "Draw! Paper against Paper!";
                    break;
                case "scissors":
                    computerScore++;
                    return "You loose! Scissors beat Paper!";
                    break;
                default:
                    return "default";
        
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    return "You loose! Rock beats Scissors!";     
                    break;
                case "paper":
                    humanScore++;
                    return "You win! Paper beats Scissors!";

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


const rockButton = document.querySelector("#rockBtn").addEventListener("click", function() {playRound("rock", getComputerChoice);});
const paperButton = document.querySelector("#paperBtn").addEventListener("click", function() {playRound("paper", getComputerChoice);});
const scissorsButton = document.querySelector("#scissorsBtn").addEventListener("click", function() {playRound("scissors", getComputerChoice);});

const label = document.querySelector("label");
