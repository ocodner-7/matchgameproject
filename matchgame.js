const cards = document.querySelectorAll(".match-card")

let cardHasTurned = false;
let firstCard, secondCard;

function turnCardOver() {
    console.log("Card has been clicked");
    this.classList.toggle('match');

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
         setTimeout( () => {
         firstCard.classList.remove('match');
         secondCard.classList.remove('match');
         }, 1800);
     }
    }
}


cards.forEach(card => card.addEventListener('click', turnCardOver));