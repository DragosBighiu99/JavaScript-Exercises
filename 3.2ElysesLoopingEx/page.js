function cardTypeCheck(deck, cardType) {
    let count = 0;

    deck.forEach(card => {
        if (card === cardType) {
            count++;
        }
    });

    return count;
}

function determineOddEvenCards(deck, isEven) {
    let count = 0;

    for(const card of deck) {
        if ((card % 2 === 0 && isEven) || (card % 2 !== 0 && !isEven)) {
            count++
        }
    }

    return count;
}