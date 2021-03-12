function computerPlay() {
    let word = "";
    let pcchoice = Math.floor(Math.random() * 3);
    if (pcchoice === 0) {
      return word = "rock";
    } else if (pcchoice === 1) {
      return word = "scissors";
    } else {
      return word = "paper";
    }
  }
  let drawScore= 0;
  let pcScore = 0;
  let userScore = 0;
  let result = "";
  
  function game(score) {
  
    for (let x = 0; x < 5; x++) {
      
      function playRound(playerSelection, computerSelection) {
        playerSelection = prompt("Your Choice");
        playerSelection = playerSelection.toLowerCase();
        computerSelection= computerPlay();
       console.log(computerSelection);
        if (playerSelection === computerSelection) {
          drawScore++;
          return drawScore;
  
        } else if (playerSelection === "rock" && computerSelection === "paper") {
          pcScore++;
          return  pcScore; //You lose! Paper beats Rock
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
          userScore++;
          return userScore; //You win! Rock beats Scissors
  
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
          pcScore++;
          return pcScore; //You lose! Scissors beats Paper
  
        } else if (playerSelection === "paper" && computerSelection === "rock") {
          userScore++;
          return userScore; //You win! Paper beats Rock
  
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
          userScore++;
          return userScore; //You win! Scissors beats Paper
  
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
          pcScore++;
          return pcScore; //You lose! Scissors beats Rock
  
        }
  
      }
  
      playRound()
  
    }
  
    if (pcScore === userScore) {
      score = "its a draw!";
      return score;
  
    } else if (pcScore > userScore) {
      score = "cpu wins";
      return score;
  
    } else if (pcScore < userScore) {
      score = "user wins";
      return score;
  
    }
  }
  console.log(game());
  console.log(pcScore.valueOf());
  console.log(userScore.valueOf());
  console.log(drawScore.valueOf());