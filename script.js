// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
const specialCharactersCase = "!@#$%^&*()_<>=/,'"
const numbersCase = "1234567890"
var possibleCharacters = ""

function generatePassword() {
  var passwordLength = prompt("Enter the length of the password");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be atleast 8 characters and no more than 128 characters");
    return generatePassword();
  } else {
    alert("Your password will be" + passwordLength + "charcters long!")
  }
  var upperCase = confirm("Do you want upper case letters?")
  var lowerCase = confirm("Do you want lower case letters?")
  var numbers = confirm("Do you want numbers?")
  var specialCharacters = confirm("Do you want special characters?")
  console.log(passwordLength, upperCase, lowerCase, numbers, specialCharacters);
  if (upperCase == true) {
    possibleCharacters = possibleCharacters + upperCaseCharacters;
  }
  if (lowerCase == true) {
    possibleCharacters = possibleCharacters + lowerCaseCharacters;
  }
  if (numbers == true) {
    possibleCharacters = possibleCharacters + numbersCase;
  }
  if (specialCharacters == true) {
    possibleCharacters = possibleCharacters + specialCharactersCase;
  }
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

