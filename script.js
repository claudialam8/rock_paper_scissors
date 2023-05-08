//create div to display result on page 
const container = document.querySelector('.container');
const resultDisplay = document.createElement('div');
resultDisplay.classList.add('resultDisplay')
container.appendChild(resultDisplay);

//display scores
const scores = document.createElement('div');
scores.classList.add('scores');
container.appendChild(scores);

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
//console.log(getComputerChoice());

let playerScore = 0, computerScore = 0;

function playRound (playerSelection, computerSelection){
    //playerSelection = playerSelection.toLowerCase();
    //computerSelection = computerSelection.toLowerCase();

    let result = "";

    if (playerSelection === computerSelection) {
        result = `It's a tie! Both played ${capitalize(computerSelection)}`;
        return result;
    } 
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
                (playerSelection === "paper" && computerSelection === "rock")) {
        result = `You won! ${capitalize(playerSelection)} beat ${capitalize(computerSelection)}`;
        return result;
    } 
    else {
        result = `You lost! ${capitalize(computerSelection)} beat ${capitalize(playerSelection)}`;
        return result;
    }
}

function capitalize(word){
    let first_capitalized = word.toUpperCase();
    let first = first_capitalized[0];
    return first + word.substr(1);
}
/*METHOD 1 - TEDIOUS
const rock = document.querySelector('rock');
rock.addEventListener('click',function() {
    console.log(`${button.rock}`);

    //console.log(playRound(`${rock}`,getComputerChoice()));
});

const paper = document.querySelector('paper');
paper.addEventListener('click',function() {
    console.log(playRound("paper",getComputerChoice()));
});

const scissors = document.querySelector('scissors');
scissors.addEventListener('click',function() {
    console.log(playRound("scissors",getComputerChoice()));
});*/

//METHOD 2 - FASTER and more compact
const buttons = document.querySelectorAll('button');
//for each button

function pressButton(){
    buttons.forEach( (button) => {
        //add an event listener
        button.addEventListener('click', () =>{
            //call playRound function
            let play = resultDisplay.textContent = playRound(`${button.id}`,getComputerChoice());
            if (play.includes("lost")){
                computerScore += 1;
            } else if (play.includes("won")){
                playerScore += 1;
            }
            scores.textContent = `Computer score: ${computerScore} & Player score: ${playerScore}`;
            if (playerScore === 5 || computerScore === 5){
                document.getElementById("rock").disabled = true;
                document.getElementById("paper").disabled = true;
                document.getElementById("scissors").disabled = true;
            }
        });
    });
}

pressButton();