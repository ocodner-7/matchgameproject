const cards = document.querySelectorAll('.match-card');

let cardHasTurned = false;
let firstCard, secondCard;

function turnCardOver() {
    console.log("Card has been clicked");
    this.classList.add('flip');
    
if (!cardHasTurned) {
    cardHasTurned = true;
    firstCard = this;
} else {
    cardHasTurned = false;
    secondCard = this;
}

}

cards.forEach(card => addEventListener('click', turnCardOver));