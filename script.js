
let userChoice = prompt ("Heads or Tails?");

let randomNumber = Math.floor(Math.random() * 2);

console.log(randomNumber);

let computerChoice;

if(randomNumber === 0) {
    computerChoice = "heads"
} else if(randomNumber === 1) {
    computerChoice = "tails"
}

if(userChoice === computerChoice) {
    alert("You guessed it right! The coin flip landed on " + userChoice )
} else if( userChoice !== computerChoice) {
    alert("Sorry, the coin flip landed on " +  computerChoice )
}

let birthYear = prompt ("What is your birth year?");

if ((2023 - birthYear) > 21) {
alert("You are old enough to drink in the US");
} else if ((2023 - birthYear) === 21) {
    alert("You are old enough to drink in the US...barely");
} else if((2023 - birthYear) < 21) {
    alert("Sorry, you are not old enough to drink in the US");
}