// function rollDice() {
//   var button1 = document.getElementById("playerOneButton");
//   var button2 = document.getElementById("playerTwoButton");
//   // document.getElementById("playerOneButton").innerHTML;
//  var displayRandom= document.getElementById("result").innerHTML =
//     "<img src='dice_images/gift.gif'/>";
//   setTimeout(function () {
//     var rand = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("result").innerHTML =
//       "<img src='dice_images/" + rand + ".png' />";
//   }, 2000);
//   document.getElementById("playerOneButton").disabled = false;
// button1.addEventListener('click', function(){
//   did
// })
// }
// function rollDice() {
var button1 = document.getElementById("playerOneButton");
var button2 = document.getElementById("playerTwoButton");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// randomNumber1 = Number(randomNumber1);
// randomNumber2 = Number(randomNumber2);
var displayRandomNumber1 = (document.getElementById("result").innerHTML =
  "<img src='dice_images/" + randomNumber1 + ".png' />");
var displayRandomNumber2 = (document.getElementById("result").innerHTML =
  "<img src='dice_images/" + randomNumber2 + ".png' />");
var winner = document.getElementById("displayWinner");
var dice1 = document.getElementById("die1");
var dice2 = document.getElementById("die2");

button1.addEventListener("click", function () {
  console.log("clicked");
  displayRandomNumber1.innerHTML = randomNumber1;
  if (displayRandomNumber2.innerHTML == 6) {
    winner.innerHTML = "its Playertwo's turn!";
  } else if (displayRandomNumber2.innerHTML > displayRandomNumber1.innerHTML) {
    winner.innerHTML = "Player two wins!";
  } else {
    winner.innerHTML = "its a tie!";
  }
});
button2.addEventListener("click", function () {
  console.log("clicked");

  displayRandomNumber2.innerHTML = randomNumber2;
  if (displayRandomNumber1.innerHTML > displayRandomNumber2.innerHTML) {
    winner.innerHTML = "Player one wins!";
  } else if (displayRandomNumber1.innerHTML == 6) {
    winner.innerHTML = "its player one's turn";
  } else if (displayRandomNumber2.innerHTML > displayRandomNumber1.innerHTML) {
    winner.innerHTML = "player two wins!";
  } else {
    winner.innerHTML = "its a tiee!";
  }
});
// }

// function turn(txtPassportNumber) {
//   //Reference the Button.
//   var btnSubmit = document.getElementById("playerOneButton");

//   //Verify the TextBox value.
//   if (txtPassportNumber.value.trim() != "") {
//     //Enable the TextBox when TextBox has value.
//     btnSubmit.disabled = false;
//   } else {
//     //Disable the TextBox when TextBox is empty.
//     btnSubmit.disabled = true;
//   }
// }
// function who_win(rand) {
//   let player_points = rand;
//   let win = winner(player_points);
// }
// function winner(player1, player2) {
//   if (player1 < player2) {
//     return console.log("Loser");
//   } else if (player2 < player1) {
//     return console.log("winner");
//   } else player1 == player2;
//   return console.log("Equal");
// }

// var button1 = document.getElementById("playerOneButton");
// var button2 = document.getElementById("playerTwoButton");
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
