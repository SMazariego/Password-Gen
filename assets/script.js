// Variables
var numberString = "1234567890"
var ABCDEFGHIJKLMNOPQRSTUVWXYZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var abcdefghijklmnopqrstuvwxyz = "abcdefghijklmnopqrstuvwxyz"
var specialCharacter = "!@#$%^&*()?"
var met = "";
var requisite = "";
var password = "";
var ideal = "";


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var requisites =  prompt("Your password much be between 8-128 characters");
  if (isNaN(requisites) || requisites < 8 || requisites > 129){
      alert("Your password must be between 8-128 characters");
      return generatePassword();
    }
          var numbers = confirm ("Would you like your password to include numbers?")
          var uppercase = confirm ("Would you like your password to include uppercase chararcters?");
          var lowercase = confirm ("Would you like your password to include lowercase chararcters?");
          var specialchars = confirm ( "Would you like your password to include special characters?");
  
    if(numbers) { met += numberString
    requisite += numberString.charAt(Math.floor(Math.random() * numberString.length))
}
    if(uppercase) { met += ABCDEFGHIJKLMNOPQRSTUVWXYZ
    requisite += ABCDEFGHIJKLMNOPQRSTUVWXYZ.charAt(Math.floor(Math.random() * ABCDEFGHIJKLMNOPQRSTUVWXYZ.length))
}
    if(lowercase) { met += abcdefghijklmnopqrstuvwxyz
    requisite += abcdefghijklmnopqrstuvwxyz.charAt(Math.floor(Math.random() * abcdefghijklmnopqrstuvwxyz.length));
}

    if(specialchars) { met += specialCharacter;
    requisite += specialCharacter.charAt(Math.floor(Math.random() * specialCharacter.length));
  }
  
      for (var i = 0; i < requisites; ++i) { 
        var randomNumber = Math.floor(Math.random() 
        * met.length) 
        password += met.charAt(randomNumber)
  
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
