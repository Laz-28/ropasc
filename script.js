


function getRandomChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getPlayerChoice() {
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
  let player = playerSelection();

  if (player !== "rock" && player !== "paper" && player !== "scissors") {
    return {
      playerChoice: player,
      computerChoice: null,
      roundResult: "Invalid player selection!"
    }
  }

  let computer = computerSelection();

  if (player === computer) {
    return {
      playerChoice: player,
      computerChoice: computer,
      roundResult: "It's a tie!"
    }
  }

  let result = gameRules[player] === computer ? "Computer wins!" : "Player wins!";
  return {
    playerChoice: player,
    computerChoice: computer,
    roundResult: result
  }
}

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
  if(result === "Player wins!") {
    playerScore++;
  } else if(result === "Computer wins!") {
    computerScore++;
  }

  return {
    playerScore: playerScore,
    computerScore: computerScore
  };
}

for (let round = 1; round <= 5; round++) {
  let result = playRound(getPlayerChoice, getRandomChoice);
  let scores = updateScore(result.roundResult);

  console.log(`Round ${round}: Player chose ${result.playerChoice}, computer chose ${result.computerChoice}. ${result.roundResult}`);
  console.log(`Score — Player: ${scores.playerScore}, Computer: ${scores.computerScore}`);
}
