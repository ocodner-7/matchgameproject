const cards = document.querySelectorAll('.match-card');

let cardHasTurned = false;
let firstCard, secondCard;

function turnCardOver() {
    console.log("Card has been clicked");
    document.getElementsByClassName("match-card").classList.add('match');

    //First  card clicked
if (!cardHasTurned) {
    cardHasTurned = true;
    firstCard = this;
} else {
    //Second card clicked
    cardHasTurned = false;
    secondCard = this;
    
    //Check for matches
    if(firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener('click', turnCardOver);
        secondCard.removeEventListener('click', turnCardOver);
        console.log("match found")
     } else {
         firstCard.classList.remove('match')
     }
    }
}


cards.forEach(card => addEventListener('click', turnCardOver));