function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    // console.log(choiceArray);
    
    let randomGeneratedNumber = Math.floor(Math.random()* 3);
    // console.log(randomGeneratedNumber);
    
    let computerChoice = choiceArray[randomGeneratedNumber];
    // console.log(computerChoice);

    return computerChoice;
    
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Choose your Wepon?", "rock, paper or scissors");

    // console.log(humanChoice);

    return humanChoice.toLowerCase();
    
}

// console.log(getHumanChoice ());

let humanScore = 0; 
let computerScore = 0;





    
// playRound(humanSelection, computerSelection);



 
function playGame() {

    function playRound(humanChoice, computerChoice) {

    // console.log(humanChoice);
    // console.log(computerChoice);
    
    
       
    if (humanChoice === computerChoice) {
        console.log("It is a Tie, Try again.");
        
    } else if ((humanChoice === "rock")&&(computerChoice === "paper")) {
        console.log("Computer Wins!");
        computerScore++;
        console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
        
    } else if ((humanChoice === "paper")&&(computerChoice === "scissors")) {
        console.log("Computer Wins!");
        computerScore++;
        console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
        
    }else if ((humanChoice === "scissors")&&(computerChoice === "rock")) {
        console.log("Computer Wins!");
        computerScore++;
        console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
        
    } else {
        console.log("You Win!");
        humanScore++;
        console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
    }

}
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

    playRound(humanSelection, computerSelection);

}

playGame();

(humanScore > computerScore) ? console.log("Horray!! You Win!") : console.log("Game Over Computer Wins!");
