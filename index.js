var randomNum1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImg = "dice" + randomNum1 + ".png";

var randomImgSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc);

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins! 🚩";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
