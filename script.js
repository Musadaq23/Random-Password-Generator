// Variables for Uppercase, Lowercase, Numbers and Special Symbols assigned here
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialSymbols = '[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/'
var securedPassword = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
if (correctPrompts){
  var password = generatePassword();
  passwordText.value = password;  
}
else {
  passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generates the password using inputs entered
function generatePassword(){ 
  var passwordInput = "";
  for (var i = 0; i < passwordLength; i++){
     var passwordCharacter = Math.floor(Math.random() * securedPassword.length);
     passwordInput = passwordInput + securedPassword[passwordCharacter];
  }
     return passwordInput;
}

// Prompts the User to confirm question asked  
function getPrompts(){
  securedPassword = [];
    
  passwordLength = window.prompt("How many characters would you like your password to have?");
    
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be at least 8 and no more than 128 characters");
    prompt("Your password must be at least 8 and no more than 128 characters");
  }
  
  if (window.confirm("Click OK to confirm including lowercase characters")){
    securedPassword = securedPassword.concat(lowerCaseCharacters);
  }

  if (window.confirm("Click OK to confirm including uppercase characters")){
    securedPassword = securedPassword.concat(upperCaseCharacters);
  }
        
  if (window.confirm("Click OK to confirm including numeric characters")){
    securedPassword = securedPassword.concat(numericCharacters);
  }
      
  if (window.confirm("Click OK to confirm including special characters")){
    securedPassword = securedPassword.concat(specialSymbols.split(''));
  }
  return true;
  }