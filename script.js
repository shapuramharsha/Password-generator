// Function to generate a random password
alert("welcome to password generator.");
function generatePassword() {
    var length = parseInt(document.getElementById("length").value);
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeSpecialChars = document.getElementById("includeSpecialChars").checked;
  
    var charset = "";
    
    if (includeUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includenumbers) {
        charset +="0123456789";
      }
    if (includeLowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeSpecialChars) {
      charset += "!@#$%^&*()_+{}:<>?";
    }
  
    if (charset === "") {
      alert("Please select at least one option.");
      return;
    }
  
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById("password").innerText = password;
  }
  