console.log("Select your choice: rock, paper, or scissors");
function selectChoice(player1, player2){

      if(player1 === "rock" && player2 === "scissors"){
        return "Player 1 wins!";
      }else if(player1 === "rock" && player2 === "paper"){
        return "Player 2 wins!";
      }else if(player1 === "rock" && player2 === "rock"){
        return "It's a tie!";
      }else if(player1 === "paper" && player2 === "scissors"){
        return "Player 2 wins!";
      }else if(player1 === "paper" && player2 === "rock"){
        return "Player 1 wins!";
      }else if(player1 === "paper" && player2 === "paper"){
        return "It's a tie!";
      }else if(player1 === "scissors" && player2 === "scissors"){
        return "It's a tie!";
      }else if(player1 === "scissors" && player2 === "paper"){
        return "Player 1 wins!";
      }else if(player1 === "scissors" && player2 === "rock"){
        return "Player 2 wins!";
      }else{
        return "Invalid Inputs"
      }
}

console.log(selectChoice("rock", "scissors"));