// function getComputerChoice() {
//     let choiceArray = ["rock", "paper", "scissors"];
//     // console.log(choiceArray);
    
//     let randomGeneratedNumber = Math.floor(Math.random()* 3);
//     // console.log(randomGeneratedNumber);
    
//     let computerChoice = choiceArray[randomGeneratedNumber];
//     // console.log(computerChoice);

//     return computerChoice;
    
// }

// // console.log(getComputerChoice());

// function getHumanChoice() {
//     let humanChoice = prompt("Choose your Wepon?", "rock, paper or scissors");

//     // console.log(humanChoice);

//     return humanChoice.toLowerCase();
    
// }

// // console.log(getHumanChoice ());

// let humanScore = 0; 
// let computerScore = 0;





    
// // playRound(humanSelection, computerSelection);



 
// function playGame() {

//     function playRound(humanChoice, computerChoice) {

//     // console.log(humanChoice);
//     // console.log(computerChoice);
    
    
       
//     if (humanChoice === computerChoice) {
//         console.log("It is a Tie, Try again.");
        
//     } else if ((humanChoice === "rock")&&(computerChoice === "paper")) {
//         console.log("Computer Wins!");
//         computerScore++;
//         console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
        
//     } else if ((humanChoice === "paper")&&(computerChoice === "scissors")) {
//         console.log("Computer Wins!");
//         computerScore++;
//         console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
        
//     }else if ((humanChoice === "scissors")&&(computerChoice === "rock")) {
//         console.log("Computer Wins!");
//         computerScore++;
//         console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
        
//     } else {
//         console.log("You Win!");
//         humanScore++;
//         console.log(`Your Score is ${humanScore} : Computer Score is ${computerScore}`);
//     }

// }
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

//     playRound(humanSelection, computerSelection);
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

//     playRound(humanSelection, computerSelection);
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

//     playRound(humanSelection, computerSelection);
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

//     playRound(humanSelection, computerSelection);
//     humanSelection = getHumanChoice();
//     computerSelection = getComputerChoice();
//     console.log(`You Selected: ${humanSelection}\nComputer Selected: ${computerSelection}`);

//     playRound(humanSelection, computerSelection);

// }

// playGame();

// (humanScore > computerScore) ? console.log("Horray!! You Win!") : console.log("Game Over Computer Wins!");

let humanScore = document.querySelector(".scoreDynamic");
let computerScore = document.querySelector(".scoreDynamicSkynet");
let currentRouns = document.querySelector(".rnd");
let humanChoiceIcon = document.querySelector(".humanWeapon");
let computerChoiceIcon = document.querySelector(".skynetWeapon");
let bannerMessage = document.querySelector(".bannerContainer .text");
let weapons = document.querySelector(".weapons");
let humanChoice = "";
let computerChoice = "";

function playGame(humanChoice, computerChoice) {


    weapons.addEventListener('click', (e) => {
        let className = e.target.className
        // console.log(clickedButton);
        // console.log(e.target.className);
        switch (className) {
            case "rockIcon":
                humanChoice = "rock";
                // console.log(humanChoice);
                bannerMessage.textContent = "You Rock!!"
                
                break;
            case "paperIcon":
                humanChoice = "paper";
                // console.log(humanChoice);
                bannerMessage.textContent = "You Paper!!"


                break;
            case "scissorsIcon":
                humanChoice = "scissors"
                bannerMessage.textContent = "You Scissors!!"
                

                break
            default:
                bannerMessage.textContent = "Please click on the weapon image to select a weapon!"
                break;
        }
        let computerArray = ['rock', 'paper', 'scissors'];
        let i =  Math.floor(Math.random()*computerArray.length);
        computerChoice = computerArray[i];

        if (humanChoice === computerChoice){
            bannerMessage.textContent = "It's a tie."
        } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
            bannerMessage.textContent = "Humans Win!"
            humanScore.textContent = parseInt(humanScore.textContent) + 1;

        } else {
            bannerMessage.textContent = "Skynet Wins!"
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    })
}

playGame();
