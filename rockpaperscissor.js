

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



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        return "Draw! Rock against Rock!";
                        break;
                    case "paper":
                        computerScore++;
                        return "You loose! Paper beats Rock!";
                        break;
                    case "scissors":
                        humanScore++;
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


    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(playRound(humanChoice, computerChoice));
    }
    console.log("Your Score is: " + humanScore);
    console.log("The Computer's score is: " + computerScore);
    if(humanScore > computerScore){
        console.log("You Win!!!");
    } else if(computerScore > humanScore){
        console.log("You Loose!!!")
    } else {
        console.log("Draw!!!")
    }
}

playGame();