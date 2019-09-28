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

function cardChangeBack() {
  for (i = 0; i < cards.length; i++){
    cards[i].classList.toggle('card');
  }
}
for (i = 0; i < cards.length; i++){
  cards[i].addEventListener('mouseleave', cardChange);
}
//End all box hover
