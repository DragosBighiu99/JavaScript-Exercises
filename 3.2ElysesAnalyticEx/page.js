function getCardPosition(stack, card) {
    const position = stack.indexOf(card)
    return position;
}

function doesStackIncludeCard(stack, card) {
    const cardIsPresent = stack.includes(card)
    return cardIsPresent;
}

function isEachCardEven(stack) {
    const stackIsEven = stack.every(card => card % 2 === 0)
    return stackIsEven;
}

function doesStackIncludeOddCard(stack) {
    const oneCardOdd = stack.some(card => card % 2 !== 0)
    return oneCardOdd;
}

function getFirstOddCard(stack) {
    const firstOddCard = stack.find(card => card % 2 !== 0)
    return firstOddCard;
}

function getFirstEvenCardPosition(stack) {
    const evenCardIndex = stack.findIndex(card => card % 2 === 0)
    return evenCardIndex;
}