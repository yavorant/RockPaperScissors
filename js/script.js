

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

console.log("AI:", computerPlay())  
console.log("human", humanPlay()) 

/*
function playRound(playerSelection, computerSelection) {
  // your code here!
  "You Lose! Paper beats Rock"
  "You Lose! Scissors beats Paper"
  "You Lose! Rock beats Scissors"
  
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
*/