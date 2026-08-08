//console.log("Hello world!");


function getComputerChoice(computer) {
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}
console.log(getComputerChoice("computer:"));

function gethumanChoice () {
  let decision = ["ROCK", "PAPER", "SCISSORS"];
const randomDecision = Math.floor(Math.random() * decision.length);
return decision[randomDecision];
}
console.log(gethumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
if (humanChoice === "ROCK" && computerChoice === "PAPER") {
  computerScore++;
  console.log(`YOU lose! ${computerChoice} beats ${humanChoice}`);
  
}
}
const humanSelection = prompt(`ENTER: ROCK PAPER OR SCISSORS`);
  const computerSelection = getComputerChoice();

console.log(playRound("ROCK", "PAPER"));
