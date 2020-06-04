const cards = document.querySelectorAll('.match-card');

let cardHasTurned = false;
let firstCard, secondCard;

function turnCardOver() {
    console.log("Card has been clicked");
}

cards.forEach(card => addEventListener('click', turnCardOver));