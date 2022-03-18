//Data Pools that'll be necessary to generate the Very Strong Password for the assignment!

var choicePool = [];
var passPool = [];
var stringPool = "nemesis"

//Data that are needed for the pools

var uCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q','R','S','T','U','V','W','X','Y','Z'];
var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['#','*','+','/','@','?','!','~'];

//User input variables from dialogue boxes. These should change depending on what the user dictates.

var characterResult = 0;
var uCaseResult = 0;
var lCaseResult = 0;

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//User input prompts w/ alert about password length

function sizeSelect() {
    for (i = 0; i > -1; i++) {
    if (characterResult <= 128 && characterResult >=8) {
      console.log("End user chose an appropriate value" + characterResult);
      window.alert("Thanks. You will have " + characterResult + " characters in this password.");
      return;
    } else if (i == 0) {
      characterResult = window.prompt("How long would you like your password to be? Please choose between 8 and 128 characters.");
    } else {
      characterResult = window.prompt("That's an invalid answer. Please try something more appropriate.");
      console.log("End User entered an invalid value and is prompted to try again");
    }
  }
}
//Prompts about uppercase
function uCaseSelect() {
    for (i = 0; i > -1; i++) {
      if (uCaseResult === "yes" || uCaseResult === "Yes") {
            console.log("End user chose uppercase characters");
            window.alert("Alright. Uppercase will be included!");
            stringPool = stringPool.concat(uCase);
          return;
      } else if (uCaseResult === "no" || uCaseResult === "No") {
          console.log("End user chose no uppercase letters");
          window.alert("Fair enough. No uppercase will be included then.");
          return;
      } else if (i == 0) {
          uCaseResult = window.prompt("Would you like uppercase letters in this password?")
      } else {
          uCaseResult = window.prompt("Looks like you used an invalid answer. Lets try again..please type yes or no.");
        console.log("End User typed an invalid entry and will be prompted again");
     }
  }
}

function lCaseSelect() {
  for (i = 0; i > -1; i++) {
    if (lCaseResult === "yes" || lCaseResult === "Yes") {
      console.log ("End user chose to include lowercase");
      window.alert("Okie Dokie Smokie, I'll put some lowercase in to jazz it up.");
      stringpool = stringpool.concat(lCase);
      return;
    } else if (lCaseSelect === "no" || lCaseResult === "No") {
        console.log("End User chose to not include lowercase letters.");
        window.alert("Roger that, Boss. No lower case will be in here.")
        return;
    } else if (i == 0) {
        lCaseSelect = window.prompt ("Do you need lowercase letters in this password?");
    } else {
        lCaseResult = window.prompt ("Looks like you used an invalid answer. Lets try again..please type yes or no.");
        console.log ("End User typed an invalid entry and will be prompted again");
    }
  }
}

//Function to congregate choices and prepare password & remove commas


function makePasswordString() {
  stringPool = stringPool.toString();
  stringPool = stringPool.replaceAll(',', '');
}

function generatePassword() {
  sizeSelect();
  uCaseSelect();
  lCaseSelect();
  passwordCreator();
  makePasswordString();
  return(stringPool);
}