// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// declaring variables into Global memory
// var password;
var userLength;

var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var charSpecial = ["#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^"];

// arrays of characters by type 
var userLower;
var userUpper;
var userNumeric;
var userSpecial;

// array of characters the user wants 
var userChoice = [];
var allChars = [];

function writePassword() {
  // determines password length 1
  var userLength = parseInt(prompt("Choose password length (between 8-128 characters)."));
  if (userLength >= '8' && userLength <= '128') {
    alert("Your password will be " + userLength + " characters long.");
    var userLower = confirm("Do you want your password to contain lower case letters? ('okay' for yes; 'cancel' for no)");
    var userUpper = confirm("Do you want your password to contain upper case letters? ('okay' for yes; 'cancel' for no)");
    var userNumeric = confirm("Do you want your password to contain numbers? ('okay' for yes; 'cancel' for no)");
    var userSpecial = confirm("Do you want your password to contain special characters? ('okay' for yes; 'cancel' for no)");
    if (userLower === true) {
      userChoice.push(charLower)
    }
    if (userUpper === true) {
      userChoice.push(charUpper)
    }
    if (userNumeric === true) {
      userChoice.push(charNumber)
    }
    if (userSpecial === true) {
      userChoice.push(charSpecial)
    } else if (userLower === false && userUpper === false && userNumeric === false && userSpecial === false) {
      alert("You must pick at least one character type to generate a password. Press 'Generate Password' to try again.")
    }
  } else {
    alert("You must select a password between 8-128 characters. Press 'Generate Password' to try again.");
  }

  passChars = [].concat(...userChoice);
  console.log(passChars);

  function generatePassword(randomArr) {
    var passString = ""
    for (var i = 0; i < userLength; i++) {
      var pass = randomArr[Math.floor(Math.random() * randomArr.length)];
      passString += pass;
    }
    console.log(passString);
    return passString;
  }
  var password = generatePassword(passChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
