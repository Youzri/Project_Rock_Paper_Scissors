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


