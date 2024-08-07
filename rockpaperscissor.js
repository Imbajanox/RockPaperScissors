
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
    if(humanScore == 5 || computerScore == 5)
    {
        return;
    }
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    labelWinner.textContent = "Draw";
                    return "Draw! Rock against Rock!";
                    break;
                
                case "paper":
                    computerScore++;
                    labelWinner.textContent = "You loose";
                    return "You loose! Paper beats Rock!";
                    break;
                    
                case "scissors":
                    humanScore++;
                    labelWinner.textContent = "You win";
                    return "You win! Rock beats Scissors!";
                    
                    break;
                default:
                    return "default";
        
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    labelWinner.textContent = "You win";
                    humanScore++;
                    return "You win! Paper beats Rock!";
                    break;
                case "paper":
                    labelWinner.textContent = "Draw";
                    return "Draw! Paper against Paper!";
                    break;
                case "scissors":
                    labelWinner.textContent = "You loose";
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
                    labelWinner.textContent = "You loose";
                    computerScore++;
                    return "You loose! Rock beats Scissors!";     
                    break;
                case "paper":
                    labelWinner.textContent = "You win";
                    humanScore++;
                    return "You win! Paper beats Scissors!";

                    break;
                case "scissors":
                    labelWinner.textContent = "Draw";
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

function afterRound(){
    labelPoints.textContent = humanScore + " / " + computerScore;
    if(humanScore == 5)
    {
        labelWinner.textContent = "You won the game!";
    }
    if(computerScore == 5)
    {
        labelWinner.textContent = "You lost the game!";
    }
}

const rockButton = document.querySelector("#rockBtn").addEventListener("click", function() {playRound("rock", getComputerChoice());afterRound();});
const paperButton = document.querySelector("#paperBtn").addEventListener("click", function() {playRound("paper", getComputerChoice());afterRound();});
const scissorsButton = document.querySelector("#scissorsBtn").addEventListener("click", function() {playRound("scissors", getComputerChoice());afterRound();});

const labelWinner = document.querySelector("#winner");
const labelPoints = document.querySelector("#points")
