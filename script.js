// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  var passwordLength = parseInt(prompt("Enter your desired password length"));
  console.log (passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === null || isNaN(passwordLength)) {
    alert("Please enter a length between 8 and 128");
    return "Please Try Again";
  }
  var acceptLower = confirm("Would you like lower case letters?");
  console.log(acceptLower);
  var totalString = ""
  if (acceptLower) {
    //add lower characters to total
totalString += "abcdefghijklmnopqrstuvwxyz"
  }
  if (confirm("Would you like uppercase letters?")) {
    //add upper characters to toal
    totalString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (confirm("Would you like numbers?")) {
    //add numbers to toal
    totalString += "0123456789"
  }
  if (confirm("Would you like special characters?")) {
    //add specials characters to toal
    totalString += "!@#$%^&*"
  }
  console.log(totalString);
  if (totalString === "") {
    alert("Must select at least 1 character type")
    return "Please Try Again";
  }
  var totalArray = totalString.split("") 
  var passwordString = ""
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random()*totalArray.length);
    var digit = totalArray[index];
    passwordString += digit
  }
  return passwordString
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");
passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
