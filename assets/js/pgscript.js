// Assignment code here
//Directions
alert("Welcome to your Password Generator! Select lenght and check your password parameters.")

// List of charcters
const character = {
  empty: "",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
}

// Get references to the #generate element
//Grabbing elemets by their ids
const passwordLength = document.getElementById("passwordrange");
const upperCase = document.getElementById("password-uppercase");
const lowerCase = document.getElementById("password-lowercase");
const passwordNumbers = document.getElementById("password-numbers");
const passwordSymbols = document.getElementById("password-symbols");
const generate = document.getElementById("generate");
const password = document.getElementById("password");


//Event listener for when a character type is selected by the user on the page
generate.addEventListener("click", () => {
   let defaultPassword = character.empty;
   (upperCase.checked) ? defaultPassword += character.upper : "";
   (lowerCase.checked) ? defaultPassword += character.lower : "";
   (passwordNumbers.checked) ? defaultPassword += character.numbers : "";
   (passwordSymbols.checked) ? defaultPassword += character.symbols : "";

   password.value = generatePassword(passwordLength.value, defaultPassword)
});

// pl stands for the password's lenght
//Function to generate the random password
function generatePassword(pl, defaultPassword) {
  let pass = "";
  for (let i = 0; i < pl; i++) {
    pass += defaultPassword.charAt(Math.floor(Math.random() * defaultPassword.length));
  }
  return pass;
}

//Copy password to clipboard
const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  if (password.value =="") {
    alert("Generate your password first!")
  }else {
    password.select();
    document.execCommand("copy");
    alert("Generated password copied to clipboard!")
  }
});