//Welcome message
console.log('Hello, Welcome to the guessing game.');

//New line
console.log("\n");

console.log("I'm thinking of a 7 letter word.");
//
let answer = "comcast";
//Takes user input and assigns it to guess variable
const input = require('readline-sync');
let guess = input.question("Please guess a letter: ");

//The user enters a guess
console.log("You guessed:", guess );

/*
If statement that checks answer for the letter that was guessed
Checks to make sure the guess is only 1 letter.
*/
if (answer.includes(guess) & guess.length < 2 ) {
   console.log("Yes. The word contains that letter.");
} else if (guess.length > 1) {
   console.log("You can only guess one letter at a time.")
}
  else {
   console.log("The word does not contain the letter", (guess) );
} 

//New line
console.log("\n");

///Would you like to solve?
console.log("Would you like to solve the word?")
const solve = require('readline-sync');
let final = input.question("What is the secret word?:");

if (final.includes (answer)){
  console.log ("Congrats! that's the word!");
} else {
  console.log ("No. That is not the word.")
}
