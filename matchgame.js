const cards = document.querySelectorAll('.match-card');

function turnCardOver() {
    console.log("Card has been clicked");
}

cards.forEach(card => addEventListener('click', turnCardOver));