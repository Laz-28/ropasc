
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

console.log(playRound("rock", getRandomChoice));