// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// declaring variables for arrays of possible characters into Global memory
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = ["#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^"];

// declaring variables of user responses into Global memory
var userLower;
var userUpper;
var userNumeric;
var userSpecial;

//function that will write the password based on user responses
function writePassword() {

  // determines password length based on user input from prompt
  var userLength = parseInt(prompt("Choose password length (between 8-128 characters)."));
  // if/else statement: if user selects appropriate length for password, the following code block is executed; else, it alerts to try again
  if (userLength >= '8' && userLength <= '128') {

    //clears text if user enters invalid response
    var clearText = document.querySelector("#password");
    clearText.value = " ";
    generateBtn.addEventListener("click", clearText);

    //main code block for if statement; executed when condition for password length is truthy
    //inserts user's input for userLength variable in alert
    alert("Your password will be " + userLength + " characters long.");
    //these 4 confirms store boolean values regarding user's preference for character types; one must be selected 
    var userLower = confirm("Do you want your password to contain lower case letters? ('okay' for yes; 'cancel' for no)");
    var userUpper = confirm("Do you want your password to contain upper case letters? ('okay' for yes; 'cancel' for no)");
    var userNumeric = confirm("Do you want your password to contain numbers? ('okay' for yes; 'cancel' for no)");
    var userSpecial = confirm("Do you want your password to contain special characters? ('okay' for yes; 'cancel' for no)");

    //declares variable 'userChoice' in function memory and sets it value to equal an array
    var userChoice = [];

    // 4 if statements: when condition is true, the corresponding character array is pushed on to the end of the userChoice array (both declared outside of function)
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
      // else if statement: if no character types are selected, the user is alerted to try again and select at least one character type
    } else if (userLower === false && userUpper === false && userNumeric === false && userSpecial === false) {
      return alert("You must pick at least one character type to generate a password. Press 'Generate Password' to try again.")
    }
    // if password length did not meet the condition for 'if', the following code block is executed
  } else {
    return alert("You must select a password between 8-128 characters. Press 'Generate Password' to try again.");
  }

  //declares variable in function memory and stores value as the userChoice array's elements concatenated
  var passChars = [].concat(...userChoice);
  //logs the possible characters for the user's password to the console
  console.log(passChars);

  //function declared in function memory that will generate a password with the parameter of randomArr
  function generatePassword(randomArr) {
    //declares variable in function memory whose value is a string
    var passString = ""
    //a FOR loop that will run the length of the variable userLength's value (selected via prompt by user)
    for (var i = 0; i < userLength; i++) {
      // declares variable in function memory that equals the random character selected
      //Math.random randomly generates a value between 0-1 which is multiplied by the length of the argument that will be passed in (in this case, passChars)
      //Math.floor rounds that value down to the nearest whole number which indicates the index of the argument (in this case, passChars) 
      //'pass' will have the value of the element at the selected index
      var pass = randomArr[Math.floor(Math.random() * randomArr.length)];
      // this concatenates the value to the string 'passString' at the end of the loop, and continues until i < userLength
      passString += pass;
    }
    //logs the characters stored as a string in variable passString to the console
    console.log(passString);
    //the value of the function is returned
    return passString;
  }
  // declares the variable 'password' in function memory and calls the function 'generatePassword' with the argument 'passChars'; the value of the function is its value
  var password = generatePassword(passChars);
  // declares the variable 'passwordText' in function memory and sets its value to id of password from the HTML document
  var passwordText = document.querySelector("#password");

  //writes the password in the tag 'textarea' with the id of 'password'
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
