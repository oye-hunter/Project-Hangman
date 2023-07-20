String.prototype.replaceAt = function(index, replacement) {
  index = Number.parseInt(index);
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
const fruits = [
  "raspberry",
  "pumpkin",
  "plum",
  "kiwi",
  "guava",
  "coconut",
  "apple",
  "watermelon",
  "orange",
  "pear",
  "cherry",
  "strawberry",
  "grape",
  "mango",
  "blueberry",
  "pomegranate",
  "plum",
  "banana",
  "papaya",
  "kiwi",
  "pineapple",
  "apricot",
  "grapefruit",
  "melon",
  "avocado",
  "peach",
  "blackberry",
  "mulberry",
  "kumquat",
  "date",
];

let randNum = Math.floor(Math.random() * 30);
let randFruit = fruits[randNum];
// console.log(randFruit);


let mysteryWord = randFruit;
let mw = "";
for (let index = 0; index < randFruit.length; index++) {
  mw += '*';
}
mysteryWord = mw;
// console.log(mysteryWord);



let tries = 5;
let n = 0;
let guess;

let guessedChar = [];
let firstGuess = false;
let tempStr = "";

while (tries > 0) {
//   guess = document.getElementById("guess").addEventListener("keypress", (e)=>{
//   if(e.key == "Enter")
//   {
//     console.log(e);
//   }
// });
  console.log("Fruit To Guess: \n",mysteryWord);
  console.log("Tries Left: " + tries);
  let correctGuess = false;
  let guessRepeated = false;
  console.log("Total Number Of Letters To Guess : ", (randFruit.length) - n);
  // guess = prompt("Enter Your Guess : ", "");
  // console.log(guess);
  if (firstGuess == true) {
    for (let i = 0; i < guessedChar.length; i++) {
      if (guessedChar[i] == guess) {
        console.log("You Already Guessed This Character! Please Guess Another");
        guessRepeated = true;
      }
    }
  }
  if (guessRepeated == true) {
    continue;
  }
  guessedChar.push(guess);
  firstGuess = true;
  console.log("Guessed Characters: ",guessedChar);

  for (let i = 0; i < randFruit.length; i++) {
    if (randFruit[i] == guess) {
      mysteryWord=mysteryWord.replaceAt(i, guess);
      correctGuess=true;
      n++;
    }

  }
  if (correctGuess == true) {
    console.log("\nYou Guessed Correctly! Nicely Done <3");

  }
  if (mysteryWord == randFruit) {
    console.log("You win!");
    console.log("The Word Was " + randFruit + "\nYou saved the man from being hanged");
    break;
  }

  if (correctGuess == false) {
    console.log("\nWrong Guess! Don't Do It Again :(");
    tries--;
  }

}
if (tries == 0) {
  console.log("The Word Was ", randFruit);
  console.log("The man is hanged and will be dead soon!    :(");
  console.log("Game Over");
}