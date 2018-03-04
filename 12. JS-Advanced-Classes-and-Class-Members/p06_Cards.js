let result = (function () {
    const Suits = {
        CLUBS: "\u2663",    // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665",   // ♥
        SPADES: "\u2660"    // ♠
    };

    const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }
        set face(f){
            if (!Faces.includes(f)){
                throw new TypeError('Invalid card face: ' + f)
            }
            this._face = f;
        }
        get face(){return this._face;}

        set suit(s){
            if (!Object.keys(Suits).map(k => Suits[k]).includes(s)){
                throw new TypeError('Invalid card suit: ' + s)
            }
            this._suit = s;
        }

        get suit(){return this._suit;}

        toString(){
            return this._face + this._suit;
        }
    }

    return {Suits, Card}

}());

let Card = result.Card;
let Suits = result.Suits;

let c1 = new Card('2', Suits.SPADES);

console.log(c1.toString());

// let c2 = new Card('5', 'Pesho');
// // c2._suit = 'Stamat';
// console.log(c2.toString());