function seeingDouble(deck) {
    const doubleDeck = deck.map(card => card * 2)

    return doubleDeck;
}

function threeOfEachThree(deck) {
    const resultDeck = [];
    for (const card of deck) {
        resultDeck.push(card)

        if(card === 3) {
            resultDeck.push(3,3);
        }
    }

    return resultDeck;
}

function middleTwo(deck) {
    const middleIndex = Math.floor(deck.length / 2);

    const middleCard = deck.slice(middleIndex, middleIndex + 2);

    return middleCard;
}

function sandwichTrick(deck) {
    const middleIndex = Math.floor(deck.length / 2);

    const topCard = deck.shift()
    const bottomCard = deck.pop()

    deck.splice(middleIndex, 0, bottomCard, topCard)

    return deck;
}

function twoIsSpecial(deck) {
    const twoDeck = deck.filter(card => card === 2)

    return twoDeck;
}

function perfectlyOrdered(deck) {
    const orderedDeck = deck.sort((a,b) => a-b);

    return orderedDeck;
}

function reorder(deck) {
    const reversedDeck = deck.reverse()

   return reversedDeck;
}