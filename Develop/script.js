// Assignment code
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specCharacters = [" ", '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var options = [];
var passwordLength = document.getElementById("length");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword = function() {
    event.preventDefault();
    var realPassword = "";
    var lowerCheck = document.getElementById("lower-option");
    var upperCheck = document.getElementById("upper-option");
    var specCheck = document.getElementById("spec-option");
    var numCheck = document.getElementById("num-option");
    var passwordText = document.querySelector("#password");
    if (lowerCheck.checked === true) {
      for (i = 0; i < letters.length; i++) {
        options.push(letters[i])
      };
    };

    if (upperCheck.checked === true) {
      for (i = 0; i < bigLetters.length; i++) {
        options.push(bigLetters[i])
      };
    };

    if (specCheck.checked === true) {
      for (i = 0; i < specCharacters.length; i++) {
        options.push(specCharacters[i])
      };
    };

    if (numCheck.checked === true) {
      for (i = 0; i < numbers.length; i++) {
        options.push(numbers[i])
      };
    };

    if (lowerCheck.checked === false && upperCheck.checked === false && specCheck.checked === false && numCheck.checked === false) {
      alert("You must check a box first.");
    };
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be more than 8 characters and less than 128 characters.")
      return;
    }
    else {
      for (i = 0; i < passwordLength.value; i++) {
        realPassword += options[Math.floor((Math.random() * options.length))]
      };
      passwordText.textContent = realPassword;
    };
  };

  var password = generatePassword();
  /*var passwordText = document.querySelector("#password");
  passwordText.textContent = password;*/

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


