
function getRandomChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}



const gameRules = {
    "rock": "paper",
    "paper": "scissors",
    "scissors" : "rock"
  };

function playRound(playerSelection, computerSelection) {

  let computer = computerSelection();

  if(playerSelection === computer) {
    return {
      computerChoice: computer,
      roundResult: "It's a tie!"
    }
  }


  let result = gameRules[playerSelection] === computer ? "Computer wins!" : "Player wins!";

return {
  computerChoice: computer,
  roundResult: result
}

}


let playerScore = 0;
let computerScore = 0;

function roundResult(result) {
  if(result === "Player wins!") {
    playerScore++;
  } else if(result === "Computer wins!") {
    computerScore++;
  }  

return {
  playerScore: playerScore,
  computerScore: computerScore
}
}


let roundScore = playRound("rock", getRandomChoice);
console.log(roundScore);
console.log(roundResult(roundScore.roundResult));

