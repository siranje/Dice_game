var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var randomDiceImage1 = "dice" + randomnumber1 + ".png";

var randaomImgaeSource1 = "../Diceimg/" + randomDiceImage1 ;

 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src",randaomImgaeSource1);

 var randomNumber2 = Math.floor(Math.random() * 6 + 1);

 var randaoDiceImage2 = "../Diceimg/dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src",randaoDiceImage2);