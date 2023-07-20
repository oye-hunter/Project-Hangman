String.prototype.replaceAt = function (index, replacement) {
    index = Number.parseInt(index);
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
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
  console.log(randFruit);
  
  let mysteryWord = randFruit;
  let mw = "";
  for (let index = 0; index < randFruit.length; index++) {
    mw += "*";
  }
  mysteryWord = mw;
  console.log(mysteryWord);
  
  let tries = 5;
  let n = 0;
  let guess;
  
  let guessedChar = [];
  let firstGuess = false;
  let tempStr = "";
  let str1 = "Guess This Fruit";
  let str2 = "The Fruit Was";
  let alertMsgOnCorrect = "Correct Guess! Nicely Done.";
  let alertMsgOnWrong = "Wrong Guess! Try Again.";
  let alertMsgOnGuessed =
    "You Already Guessed This Character! Please Guess Another.";
  let displayTries = "Tries Left: " + tries;
  let colorRed = "red";
  let colorGreen = "green";
  let colorblue = "blue";
  let fontSize8 = "8px";
  
  console.log("Fruit To Guess: \n", mysteryWord);
  console.log("Tries Left: " + tries);
  
  function sentMessage(message, className) {
    let DivEle = document.getElementById("myDiv");
    let para = document.createElement("p");
    para.innerHTML = message;
    para.classList.add(className);
    DivEle.appendChild(para);
    document.querySelector("#myDiv > form").classList.add("d-none");
  }
  
  function displayVariable(message, id) {
    let myVariable = message;
    let variableDisplayElement = document.getElementById(id);
    variableDisplayElement.textContent = myVariable;
  }
  function displayVariableWithColor(message, id, colorName, fontSize) {
    let myVariable = message;
    let variableDisplayElement = document.getElementById(id);
    variableDisplayElement.textContent = myVariable;
    variableDisplayElement.style.color = colorName;
    variableDisplayElement.style.fontSize = fontSize;
  }
  let label1 = "label1";
  let label2 = "label2";
  let label3 = "tries";
  let label4 = "alertMessage";
  displayVariable(str1, label1);
  displayVariable(mysteryWord, label2);
  displayVariable(displayTries, label3);
  function checkKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      guess = document.getElementById("guess").value;
      let correctGuess = false;
      let guessRepeated = false;
      if (firstGuess == true) {
        for (let i = 0; i < guessedChar.length; i++) {
          if (guessedChar[i] == guess) {
            console.log(
              "You Already Guessed This Character! Please Guess Another"
            );
            displayVariableWithColor(
              alertMsgOnGuessed,
              label4,
              colorblue,
              fontSize8
            );
            guessRepeated = true;
          }
        }
      }
      if (guessRepeated == true) {
        document.getElementById("guess").value = "";
        guess = "";
        return null;
      }
      guessedChar.push(guess);
      firstGuess = true;
      console.log("Guessed Characters: ", guessedChar);
  
      for (let i = 0; i < randFruit.length; i++) {
        if (randFruit[i] == guess) {
          mysteryWord = mysteryWord.replaceAt(i, guess);
          correctGuess = true;
          n++;
        }
      }
      if (correctGuess == true) {
        console.log("\nYou Guessed Correctly! Nicely Done <3");
        if (mysteryWord == randFruit) {
          console.log("You win!");
          console.log(
            "The Word Was " + randFruit + "\nYou saved the man from being hanged"
          );
          displayVariable(str2, label1);
          sentMessage("You Win!", "text-success");
          // document.querySelector('#myDiv > p').classList.remove('d-none');
        }
        displayVariable(mysteryWord, label2);
        displayVariable(displayTries, label3);
        displayVariableWithColor(
          alertMsgOnCorrect,
          label4,
          colorGreen,
          fontSize8
        );
        document.getElementById("guess").value = "";
        guess = "";
        return null;
      }
  
      if (correctGuess == false) {
        displayVariable(str1, label1);
        displayVariable(mysteryWord, label2);
        displayVariableWithColor(alertMsgOnWrong, label4, colorRed, fontSize8);
  
        console.log("\nWrong Guess! Don't Do It Again :(");
        tries--;
        displayTries = "Tries Left: " + tries;
        displayVariable(displayTries, label3);
        document.getElementById("guess").value = "";
        guess = "";
      }
      if (tries == 0) {
        console.log("The Word Was ", randFruit);
        console.log("The man is hanged and will be dead soon!    :(");
        console.log("Game Over");
        displayVariable(str2, label1);
        displayVariable(randFruit, label2);
        sentMessage("You Lose!", "text-danger");
      }
  
      console.log("Fruit To Guess: \n", mysteryWord);
      console.log("Tries Left: " + tries);
      console.log("Total Number Of Letters To Guess : ", randFruit.length - n);
    }
  }
  