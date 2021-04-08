

//function getRandomInt(int) { return Math.floor(Math.random() * Math.floor(int)); } // Return random int from 0 to int
//function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

function computerPlay() {
    const computerChoiceList = ["rock", "paper", "scissors"];
    return computerChoiceList[Math.floor(Math.random() * 3)]    
  }

//function humanPlay that will takes a case-insensitive input from an user's prompt  

function humanPlay() {
  //The toLowerCase() method returns the calling string value converted to lower case
  let usersInput = "";
  while (true) {
    usersInput =  prompt('Please choose one by typing: "rock", "paper", "scissors"').toLowerCase();
    if (usersInput == "rock" || usersInput == "paper" || usersInput == "scissors") {
      break;
    }
    alert("Please try again!");
  } 
  return usersInput    
}

/*
"Both players choose the same shape, the game is tied" //if { playerSelection == computerSelection }

  "You Win! Rock crushes scissors"  //playerSelection = "rock" &  computerSelection = "scissors"
  "You Lose! Rock crushes scissors" //playerSelection = "scissors" &  computerSelection = "rock"
  "You Win! Paper covers rock"      //playerSelection = "paper" &  computerSelection = "rock"
  "You Lose! Paper covers rock"     //playerSelection = "rock" &  computerSelection = "paper"
  "You Win! Scissors cuts paper"    //playerSelection = "scissors" &  computerSelection = "paper"
  "You Lose! Scissors cuts paper"   //playerSelection = "paper" &  computerSelection = "scissors"
  */

// a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
// playerSelection and computerSelection - and then return a string that declares the winner of the round
// using ternary operator and 9 cases, first 3 equals cases, and than you could win or loose by choosing every 
// one of 3 cases (6 more) 


function playRound(playerSelection, computerSelection) {
  return playerSelection == computerSelection ? "Both players choose the same shape, the game is tied"
         : playerSelection == "rock" &&  computerSelection == "scissors" ? "You Win! Rock crushes scissors"
         : playerSelection == "scissors" &&  computerSelection == "rock" ? "You Lose! Rock crushes scissors"
         : playerSelection == "paper" &&  computerSelection == "rock" ? "You Win! Paper covers rock"
         : playerSelection == "rock" &&  computerSelection == "paper" ? "You Lose! Paper covers rock" 
         : playerSelection == "scissors" &&  computerSelection == "paper" ? "You Win! Scissors cuts paper" 
         : "You Lose! Scissors cuts paper";  
}

let playerSelection;
let computerSelection;

//console.log("human", playerSelection); 
//console.log("AI:", computerSelection); 
//console.log(playRound(playerSelection, computerSelection));


// a function game(). 
// use the playRound() function inside of this one to play a 5 round game 
// that keeps score and reports a winner or loser at the end.
//you should be using console.log() to display the results of each round 
//and the winner at the end.
//a function game() 

function game() {
  for (let round = 1; round <= 5 ; round++) {
    playerSelection = humanPlay();
    computerSelection = computerPlay();
    let oneRoundGame = playRound(playerSelection, computerSelection);
    console.log(`round # ${round}: Human = ${playerSelection} & AI = ${computerSelection} | ${oneRoundGame} |`);   
  }
}

game();