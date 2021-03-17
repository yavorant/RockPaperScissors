
//function computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    const computerChoiceList = ["Rock", "Paper", "Scissors"];
    return computerChoiceList[Math.floor(Math.random() * Math.floor(3))]    
  }

  console.log(computerPlay())  