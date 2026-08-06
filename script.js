//console.log("Hello world!");


function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}
console.log(getComputerChoice());

function getHumanChoice () {
  let decision = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * decision.length);
  return decision[randomChoice];
}
console.log(getHumanChoice());

//let userInput = prompt(`User input`).toUpperCase();
//while (userInput !== userInput.toUpperCase() || userInput === "");

const computerScore = 0;
const humanScore = 0;

function playRound (humanChoice, computerChoice) {

let userInput = prompt(`User input`).toUpperCase() {
  while (userInput !== userInput.toUpperCase() || userInput === "");
}



if (humanChoice === "ROCK" && computerChoice === "PAPER") {
  computerScore++
console.log(`You lose paper beats rock`);
} 
else if(humanChoice === "PAPER" && computerChoice === "ROCK") {
  humanScore++
  console.log(`You win paper beats rock`);
} 
else if (humanChoice === "PAPER" && computerChoice === "SCISSORS") {
  computerScore++
console.log(`You lose scissors beats paper`);
} else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
  humanScore++
console.log(`You win scissors beats paper`);
}
else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
  humanScore++
  console.log(`You win rock beats scissors`);
}
else if (humanChoice === "SCISSORS" && computerChoice === "ROCK") {
  computerScore++
console.log(`You lose rock beats scissors`);
}
else {
  return "It's a draw";
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
}

console.log(playRound(humanSelection, computerSelection));