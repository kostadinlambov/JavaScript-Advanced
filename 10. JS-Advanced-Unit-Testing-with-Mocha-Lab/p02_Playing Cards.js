function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuit = ['S', 'H', 'D', 'C'];
    if (!validFaces.includes(face)) {
        throw new Error('Invalid face');
    }
    if (!validSuit.includes(suit)) {
        throw new Error('Invalid suit');
    }
    let card = {
        face: face,
        suit: suit,
        toString: ()=> {
            let suitToChar = {
                'S': "\u2660", // ♠
                'H': "\u2665", // ♥
                'D': "\u2666", // ♦
                'C': "\u2663", // ♣
            };
            return `${card.face}${suitToChar[card.suit]}`
        }
    };

    return card;
}

try {
    let card = makeCard('A', '8');
}catch(err){
    console.log(err.message);
    console.error(err.message);
}finally {
    console.log('Entered finally')
}
// let card = makeCard('A', 'S');
// console.log(card.toString());
// console.log(''+card);
// //makeCard('1', 'S');
//
// let anotherCard = makeCard('K', 'H');
// console.log(anotherCard.toString());
