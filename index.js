var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomnumber1 +".png";
var randomDiceImage2 = "images/dice" + randomnumber2 +".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage1);
document.querySelector(".img2").setAttribute("src",randomDiceImage2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "♛Player 1 WINS!";
}
else if(randomnumber1==randomnumber2){

    document.querySelector("h1").innerHTML = "DRAW!";
}
else {

  document.querySelector("h1").innerHTML = " Player 2 WINS!♛";
}
