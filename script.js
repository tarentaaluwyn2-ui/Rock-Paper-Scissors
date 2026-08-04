//console.log("Hello world!");


function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}
console.log(getComputerChoice());

function getHumanChoice () {
  let decision = ["Rock", "Paper", "Scissor"];
  const randomChoice = Math.floor(Math.random() * decision.length);
  return decision[randomChoice];
}
console.log(getHumanChoice());

let userInput = prompt(`User input`);

const computerScore = 0;
const humanScore = 0;

function playRound (humanChoice, computerChoice) {
computerScore += computerChoice;
humanScore += humanChoice;

const computerSelection = getComputerChoice();
const humanSelection = getHumnanChoice();
}
console.log(playRound(computerSelection, humanSelection));