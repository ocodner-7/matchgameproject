const cards = document.querySelectorAll('.match-card');

let cardHasTurned = false;
let firstCard, secondCard;

function turnCardOver() {
    console.log("Card has been clicked");
    this.classList.toggle('flip');
}

cards.forEach(card => addEventListener('click', turnCardOver));