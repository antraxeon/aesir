for (let i = 10; i > 0; i--) {
   console.log(i);
}
for (let i = 0; i < 10; i++) {
      console.log(i);
   }
for (let i = 10; i > 0; i-1) {
    console.log(i);
}
for (let i = 0; i < 10; i+1) {
    console.log(i);
}
var game = prompt("rock, paper, scissors");
if (game === 'rock') {
   console.log("you win.")

}else if (game === 'paper') {
   console.log("you lose.")

}else if (game === 'scissors') {
   console.log("you tie.")
}
else {
   console.log("you restart the game.")
}

let age = prompt("enter your age");
if (age < 18) {
   console.log("they should not vote.")

}else if (age > 18 && age < 30) {
   console.log("they should vote.")
}else if (age > 45) {
   console.log("they should use senior citizen vote.")
}
else {
   console.log("they eshould not vote.")
}

var answer = prompt("enter addition, subtraction, multiplication, or division sign");
var a = prompt("enter first number");
var b = prompt("enter second number");
if (answer === 'addition') {
   console.log(a + b);
}
else if (answer === 'subtraction') {
   console.log(a - b);
}
else if (answer === 'multiplication') {
   console.log(a * b);
}
else {
   console.log(a / b);
}

var weather = prompt("enter the weather condition");
if (weather === sunny) {
   console.log("they should wear a coat.")
}else if (weather === rainy) {
   console.log("they should wear a jacket.")
}else if (weather === cloudy) {
   console.log("they should wear a sweater.")
}
else {
   console.log("they should go out with normal clothes.")
}

// Prompt user for a password
var password = prompt("Enter your password");

// Define validation criteria
var minLength = 8;
var maxNumbers = 3;
var specialCharRegex = /[!@#$%^&*()?":{}|<>]/;
var numberRegex = /\d/g;
var lowerRegex = /[a-z]/;
var upperRegex = /[A-Z]/;

// Validate the password
if (password.length >= minLength) {
    console.log("Your password meets the length criteria.");
} else {
    console.log("Your password must be at least 8 characters long.");
}

if (specialCharRegex.test(password)) {
    console.log("Your password includes special characters.");
} else {
    console.log("Your password must include at least one special character.");
}

if (lowerRegex.test(password)) {
    console.log("Your password includes lowercase letters.");
} else {
    console.log("Your password must include at least one lowercase letter.");
}

if (upperRegex.test(password)) {
    console.log("Your password includes uppercase letters.");
} else {
    console.log("Your password must include at least one uppercase letter.");
}

if (password.match(numberRegex) && password.match(numberRegex).length <= maxNumbers) {
    console.log("Your password has an acceptable number of digits.");
} else {
    console.log("Your password should not have more than 3 numbers.");
}

// Final validation
if (password.length >= minLength && specialCharRegex.test(password) &&
    lowerRegex.test(password) && upperRegex.test(password) &&
    password.match(numberRegex) && password.match(numberRegex).length <= maxNumbers) {
    console.log("Your password is strong!");
} else {
    console.log("Your password is weak. Please try again.");
}
var human = parseInt( prompt("enter your age"));
switch (human) {
   case 0:
      console.log("you are a baby.");
      break;
   case 1:
      console.log("you are a toddler.");
      break;
   case 5:
      console.log("you are a child.");
      break;
   case 10:
      console.log("you are a preteen.");
      break;
   case 15:
      console.log("you are a teenager.");
      break;
   case 18:
      console.log("you are a young adult.");
      break;
   case 25:
      console.log("you are an adult.");
      break;
   case 30:
      console.log("you are a middle-aged adult.");
      break;
   case 55:
      console.log("you are a senior citizen.");
      break;
   case 70:
      console.log("you are a elderly person.");
      break;
   default:
      console.log("you are not a human.");
}

// Simulate dialing *312#
var number = prompt("Welcome to the *312# menu. Please select a number:\n" +
   "1. Data Plans\n" +
   "2. Special Offers\n" +
   "3. Social Bundles\n" +
   "4. Business Plans\n" +
   "6. Roaming/International\n" +
   "7. Borrow Credit/Recharge\n" +
   "8. Gift Data\n" +
   "99. Next");

// Convert input to an integer for comparison
// Simulate dialing *312#
var number = parseInt(prompt("Dialing *312#...\n" + menu), 10); // Display menu and get user input

// Check if the input matches one of the valid options
if (isNaN(number) || ![1, 2, 3, 4, 6, 7, 8, 99].includes(number)) {
    console.log("Invalid selection. Please enter a number from the menu.");
} else {
    // Process the selected option
    switch (number) {
        case 1:
            console.log("Data Plans.");
            break;
        case 2:
            console.log("Special Offers.");
            break;
        case 3:
            console.log("Social Bundles.");
            break;
        case 4:
            console.log("Business Plans.");
            break;
        case 6:
            console.log("Roaming/International.");
            break;
        case 7:
            console.log("Borrow Credit/Recharge.");
            break;
        case 8:
            console.log("Gift Data.");
            break;
        case 99:
            console.log("Next - More options coming soon!");
            break;
    }
}