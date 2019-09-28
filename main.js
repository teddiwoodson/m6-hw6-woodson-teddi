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
