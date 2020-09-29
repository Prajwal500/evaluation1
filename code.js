"use strict";
class Deck {
    constructor() {
        this.deck = [];

        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

        for (let suit in suits) {
            for (let rank in ranks) {
                this.deck.push(`${ranks[rank]} of ${suits[suit]}`);
            }
        }
    }
    shuffle() {
        const deck = this.deck;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this.deck;
    }
    deal() {
        return this.deck.pop();
    }
}

const deck1 = new Deck();
//console.log(deck1.deck);
//deck1.shuffle();
//console.log(deck1.deck);
//console.log(deck1.deal());
//console.log(deck1.deck);
class Eights extends Deck {
    constructor() {
        super();
        

    }
    playGame() {

        let deck = new Deck();
        deck.shuffle();
        let handSize = 5;
        this.cardA = [];
        this.cardB = [];
        this.discardPile = [];
        this.drawPile = [];
        this.score = 0;
        for (let i = 0; i < handSize; i++) {
            this.cardA.push(deck.deal());
            this.cardB.push(deck.deal());
        }
        this.discardPile.push(deck.deal());
        this.drawPile = deck.deck;
        console.log(this.cardA);
        console.log(this.cardB);
        console.log(this.cardA.length);
        console.log(this.cardB.length);
        while (this.cardA.length !== 0 || this.cardB.length !== 0) {
            for (let j = 0; j < this.cardA.length; j++) {
                let word1 = this.discardPile[0].split(" ");
                let card1 = this.cardA[j].split(" ");
                if (card1[2] === word1[2] || card1[0] === word1[0]) {
                    this.discardPile.unshift(this.cardA[j]);
                    this.cardA.pop();
                }
                else if (card1[0] === "8") {
                    break;
                }
                else {
                    this.cardA.push(this.drawPile.shift());
                }

            }
            for (let k = 0; k < this.cardB.length; k++) {
                let word2 = this.discardPile[0].split(" ");
                let card2 = this.cardB[k].split(" ");
                if (card2[2] === word2[2] || card2[0] === word2[0]) {
                    this.discardPile.unshift(this.cardA[k]);
                    this.cardB.pop();
                }
                else if (card2[0] === "8") {
                    break;
                }
                else {
                    this.cardB.push(this.drawPile.shift());
                }

            }
            if (this.cardA.length === 0) {

                console.log("Player A wins");
                for (let i = 0; i < this.cardB.length; i++) {
                    let scoreCard = this.cardA[i].split(" ");
                    this.score += Number(scoreCard[0]);
                }
                console.log(`Score of player B is ${this.score}`);


            }
            else {
                console.log("Player B wins");
                for (let i = 0; i < this.cardA.length; i++) {
                    let scoreCard = this.cardA[i].split(" ");
                    this.score += Number(scoreCard[0]);
                }
                console.log(`Score of player A is ${this.score}`);
            }
        }

        //console.log(this.cardA);
        //console.log(this.cardB);
        // console.log(this.discardPile);
        console.log(this.drawPile.length);
        // console.log(deck.deck.length);
        //console.log(this.drawPile.length);
        //console.log(this.cardA.length);
        //console.log(this.cardB.length);

    }


}
let e = new Eights();
e.playGame();
