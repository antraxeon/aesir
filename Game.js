let input=document.getElementById('fred')
let choices = ['Rock', 'Paper', 'Scissors'];
let attempt = 0;
let maxAttempts = 5;

PlayButton.addEventListener("click", playGame);
function playGame() {
   let inputdisplay = document.getElementById('display')
   let userinput = inputdisplay.value.tolowercase().trim();

   let Play = choices[Math.floor(Math.random()* choices.length)];

   if (userinput === Play) {
      alert('You Win! The Correct answer was "${play}"');
      attempt = 0; 
} else {
   attempt ++;
   if (attempt >= maxAttempts) {
      alert('Game Over. The Correct answer was "${play}"');
         attempt = 0;
   } else {
      alert('Wrong guess! Attempts left: ${maxAttempts - attempt}');
   }

}

inputdisplay.value = "";
}

let SubmitButton=document.getElementById('play')