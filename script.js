//Data Pools that'll be necessary to generate the Very Strong Password for the assignment!

var choicePool = [];
const passPool = [];
var stringPool = "nemesis"

//Data that are needed for the pools

var uCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q','R','S','T','U','V','W','X','Y','Z'];
var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q','r','s','t','u','v','w','x','y','z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['#','*','+','/','@','?','!','~'];

//User input variables from dialogue boxes. These should change depending on what the user dictates.

var sizeResult = 0;
var uCaseResult = 0;
var lCaseResult = 0;
var numResult = 0;
var specialResult = 0;


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
    if (sizeResult <= 128 && sizeResult >= 8) {
      console.log("End user chose an appropriate value" + sizeResult);
      window.alert("Thanks. You will have " + sizeResult + " characters in this password.");
      return;
    } else if (i == 0) {
      sizeResult = window.prompt("How long would you like your password to be? Please choose between 8 and 128 characters.");
    } else {
      sizeResult = window.prompt("That's an invalid answer. Please try something more appropriate.");
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
// Prompts for lowercase
function lCaseSelect() {
  for (i = 0; i > -1; i++) {
    if (lCaseResult === "yes" || lCaseResult === "Yes") {
      console.log ("End user chose to include lowercase");
      window.alert("Okie Dokie Smokie, I'll put some lowercase in to jazz it up.");
      stringPool = stringPool.concat(lCase);
      return;
    } else if (lCaseResult === "no" || lCaseResult === "No") {
        console.log("End User chose to not include lowercase letters.");
        window.alert("Roger that, Boss. No lower case will be in here.");
        return;
    } else if (i == 0) {
        lCaseResult = window.prompt ("Do you need lowercase letters in this password?");
    } else {
        lCaseResult = window.prompt ("Looks like you used an invalid answer. Lets try again..please type yes or no.");
        console.log ("End User typed an invalid entry and will be prompted again");
    }
  }
}

//prompts for numbers

function numSelect() {
  for (i = 0; i > -1; i++) {
    if (numResult === "yes" || numResult === "Yes") {
      console.log("End User wants numbers");
      window.alert("Thank you. Your password will contain numbers");
      stringPool = stringPool.concat(num)
      return;
    } else if (numResult === "no" || numResult === "No") {
      console.log("End User didnt choose to add numbers");
      window.alert("Alright. If you want your password to be easier to guess..I suppose thats ok. No numbers for you.");
      return;
    } else if (i == 0) {
      numResult = window.prompt("Do you want to use numbers in your password? type yes or no")
    } else {
      numResult = window.prompt ("Looks like you used an invalid answer. Lets try again..please type yes or no.");
      console.log ("End User typed an invalid entry and will be prompted again");
    }
  }
}

//prompts for special characters

function specialSelect() {
  for (i = 0; i > -1; i++) {
    if (specialResult === "yes" || specialResult === "Yes") {
        console.log("End user chose to include special characters");
        window.alert ("Thank you. Your password will contain special characters");
        stringPool = stringPool.concat(special);
        return;
    } else if (specialResult === "no" || specialResult === "No") {
        console.log ("End user chose to not add special characters");
        window.alert ("You must really hate security, huh? Your password now won't contain special characters");
        return;
    } else if (i == 0) {
        specialResult = window.prompt ("Do you want to use special characters? type yes or no")
    } else {
        specialResult = window.prompt ("Looks like you used an invalid answer. Lets try again..please type yes or no.");
        console.log ("End User typed an invalid entry and will be prompted again");
    }
  }
}

function passGenerator() {
  i = 0
  while (i < sizeResult) {
    if (uCaseResult === "yes" || uCaseResult === "Yes") {
      addUcase = uCase[Math.floor(Math.random() * uCase.length)];
      passPool.push(addUcase);
      console.log(addUcase + "This is the value selected for uppercase");
      i = i + 1;
    }
    if (i >= sizeResult) {
      break;
    }
    if (lCaseResult === "yes" || lCaseResult === "Yes") {
      addlCase = lCase[Math.floor(Math.random() * lCase.length)];
      passPool.push(addlCase);
      console.log(addlCase + "This is the value selected for lowercase");
      i = i + 1;
    }
    if (i >= sizeResult) {
      break;
  }
  if (numResult === "yes" || numResult === "Yes") {
      addNum = num[Math.floor(Math.random() * num.length)];
      passPool.push(addNum);
      console.log(addNum + " This is the value for numbers in the password");
      i = i + 1;
  }
  if (i >= sizeResult) {
      break;
  }
  if (specialResult === "yes" || specialResult === "Yes") {
      addSpecial = special[Math.floor(Math.random() * special.length)];
      passPool.push(addSpecial);
      console.log(addSpecial + " Random special value is chosen for the password");
      i = i + 1;
    }
  }
}
//Function to congregate choices and prepare password & remove commas


function makePasswordString() {
  stringPool = passPool.toString();
  stringPool = stringPool.replaceAll(',', '');
}

function generatePassword() {
  sizeSelect();
  uCaseSelect();
  lCaseSelect();
  numSelect();
  specialSelect();
  passGenerator();
  makePasswordString();
  return(stringPool);
}