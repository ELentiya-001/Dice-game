var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
// Use the random number you created in the last
// step to pick out a random dice image between
// dice1.png to dice 6.png then place this image inside the left <img> element.

if (randomNumber1 === 1) {
  document.getElementById('myImg1').setAttribute('src', 'images/dice1.png');
} else if (randomNumber1 === 2) {
  document.getElementById('myImg1').setAttribute('src', 'images/dice2.png');
} else if (randomNumber1 === 3) {
  document.getElementById('myImg1').setAttribute('src', 'images/dice3.png');
} else if (randomNumber1 === 4) {
  document.getElementById('myImg1').setAttribute('src', 'images/dice4.png');
} else if (randomNumber1 === 5) {
  document.getElementById('myImg1').setAttribute('src', 'images/dice5.png');
}

if (randomNumber2 === 1) {
  document.getElementById('myImg2').setAttribute('src', 'images/dice1.png');
} else if (randomNumber2 === 2) {
  document.getElementById('myImg2').setAttribute('src', 'images/dice2.png');
} else if (randomNumber2 === 3) {
  document.getElementById('myImg2').setAttribute('src', 'images/dice3.png');
} else if (randomNumber2 === 4) {
  document.getElementById('myImg2').setAttribute('src', 'images/dice4.png');
} else if (randomNumber2 === 5) {
  document.getElementById('myImg2').setAttribute('src', 'images/dice5.png');
}

// Change the text in the h1, (which currently says Refresh Me) to show which user won or
//  if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

if(randomNumber1 > randomNumber2)
{
  document.getElementById('heading').innerHTML = "🚩Play 1 Wins!";
}else if(randomNumber2 >randomNumber1)
{
  document.getElementById('heading').innerHTML = "Player 2 Wins!🚩" ;
}else
{
    document.getElementById('heading').innerHTML ="Draw!";
}
