/*function getFirstCard(deck) {
    const [firstCard] = deck;
    return firstCard;
}*/

function getSecondCard(deck) {
    const [, secondCard] = deck;
    return SecondCard;
}

function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]]
    return deck;
}

function discardTopCard(deck) {
    const [topCard, ...restOfDeck] = deck;
    return [topCard, restOfDeck];
}

function insertFaceCards(deck) {
    deck.splice(1,0, 'jack', 'queen', 'king')
    return deck;
}