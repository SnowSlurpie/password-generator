//Data Pools that'll be necessary to generate the Very Strong Password for the assignment!

var choicePool = [];
var passPool = [];
var stringPool = "nemesis"

//Data that are needed for the pools

var uCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q','R','S','T','U','V','W','X','Y','Z'];
var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '$', '?', '@', '%', '&'];

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

function characterSelect() {
    for (i = 0; i > -1; i++) {
    if (characterResult <= 128 && characterResult >=8) {
      console.log("User used an appropriate value here" + characterResult);
      window.alert("Thanks. You will have " + characterResult + " characters in this password.");
      return;
    } else if (i == 0) {
      characterResult = window.prompt("How long would you like your password to be? Please choose between 8 and 128.");
    } else {
      characterResult = window.prompt("That's an invalid answer. Please try something more appropriate.");
      console.log("user used invalid value and will get an error message telling them to try again");
    }
  }
}
//Prompts about uppercase
function uCaseSelect() {
  for (i = 0; i > -1; i++) {
    if (uCaseResult === yes || uCaseResult === "Yes") {
      console.log("User chose to add uppercase letters");
      window.alert("Alright. I'll make sure you've got some capital letters in there.");
      stringPool = stringPool.concat(uCase);
      return;
    } else if (uCaseResult === "no" || uCaseResult === "No") {
      console.log("User did not want uppercase letters");
      window.alert("Thanks for letting me know. Your password will not have any uppercase letters.");
      return;
    } else if (i == 0) {
      uCaseResult = window.prompt ("Do you want to use any uppercase letters? Let me know by typing in yes or no ")
    } else {
      uCaseResult = window.prompt("Thats an invalid value. Lets try that again. Please type 'yes' or 'no' ");
    console.log("End User entered an invalid value and is prompted to try again");
    }
  }
}

//Function to congregate choices and prepare password
function passwordCreator() {
  i = 0
  while (i < characterResult) {
      if (upperCaseResult === "yes" || upperCaseResult === "Yes") {
          adduCase = uCase[Math.floor(Math.random() * uCase.length)];
          passPool.push(adduCase);
          console.log(adduCase + " is the uppercase letter chosen for the password") ;
          i = i + 1;
      }
      if (i >= characterResult) {
          break;
      }
    }
  }
function makePasswordString() {
  stringPool = stringPool.toString();
  stringPool = stringPool.replaceAll(',', '');
}

function generatePassword(){
  characterSelect();
  uCaseSelect();
  passwordCreator();
  return(stringPool);
}