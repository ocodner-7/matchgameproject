class Card {
    constructor (teamName) {
        this.teamName = teamName
        this.cardRear = "mega-ball" +".svg"
        this.cardFront = teamName +".png"
        this.isCardFaceUp = false
        this.isMatched = false
    }
    flip() {
        this.isCardFaceUp = !this.isCardFaceUp
    }
}

class Game {
    constructor() {
        this.cards = [
            new Card('Arsenal'),
            new Card('RealMadrid'),
            new Card('Juventus'),
            new Card('Arsenal'),
            new Card('ManCity'),
            new Card('Liverpool'),
            new Card('Dortmund'),
            new Card('Dortmund'),
            new Card('PSG'),
            new Card('Barcelona'),
            new Card('PSG'),
            new Card('InterMilan'),
            new Card('ManCity'),
            new Card('BayernMunich'),
            new Card('Liverpool'),
            new Card('InterMilan'),
            new Card('RealMadrid'),
            new Card('Juventus'),
            new Card('Barcelona'),
            new Card('BayernMunich')
        ]
        this.turns = [] 
    }
    selectedCard(index) {
        this.cards[index].flip()
        this.turns.push(this.cards[index])
        if (this.turns.length === 2) {
            console.log("isMatch()", this.isMatch())
            if (this.isMatch()) {
                this.turns[0].isMatched = true
                this.turns[1].isMatched = true
            } else {
                this.turns[0].flip()
                this.turns[1].flip()
            }
            this.turns.pop()
            this.turns.pop()
        }
    }
    isMatch() {
        return this.turns[0].teamName === this.turns[1].teamName;
    }
}

