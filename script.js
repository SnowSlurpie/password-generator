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

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//User input prompts w/ alert

function characterSelect() {
  for (i=0, i >- 1; i++) {
    if (characterSelect <= 128 && characterResult >=8) {
      console.log("User used an appropriate value here" + characterResult);
      window.alert("Thanks. You will have" + characterResult + "characters in this password.");
      return;
    } else if (i == 0) {
      characterResult = window.prompt("How long would you like your password to be? Please choose between 8 and 128.");
    } else {
      characterResult = window.prompt("That's an invalid answer. Please try something more appropriate.");
      console.log("user used invalid value and will get an error message telling them to try again");
    }
  }
}