//Start all box hover
var cards = document.querySelectorAll('.card');

function cardChange() {
  for (i = 0; i < cards.length; i++){
    cards[i].classList.toggle('selectedcolor');
  }
}
for (i = 0; i < cards.length; i++){
  cards[i].addEventListener('mouseenter', cardChange);
}
//mouseleave fuctions
function cardChangeBack() {
  for (i = 0; i < cards.length; i++){
    cards[i].classList.toggle('card');
  }
}
for (i = 0; i < cards.length; i++){
  cards[i].addEventListener('mouseleave', cardChange);
}
//End all box hover

//Oooh - so close, but no cigar
var card1 = document.querySelector('.yellow');

function noCigar() {
  var heading = document.createElement("h2");
  var heading_text = document.createTextNode("Oooh - so close, but no cigar");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
  }

card1.addEventListener('click', noCigar);

//DING DING DING - We have a winner!
var card2 = document.querySelector('.teal');

function winner() {
  var heading = document.createElement("h2");
  var heading_text = document.createTextNode("DING DING DING - We have a winner!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
  }

card2.addEventListener('click', winner);

//Oops, butter luck next time
var card3 = document.querySelector('.green');

function nextTime() {
  var heading = document.createElement("h2");
  var heading_text = document.createTextNode("Oops, butter luck next time");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
  }

card3.addEventListener('click', nextTime);

//Start Over button
var button = document.querySelector('.btn');

function startOver() {
  for (i = 0; i < cards.length; i++){
    button.classList.add('show-button');
  }
}
for (i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', startOver);
}
