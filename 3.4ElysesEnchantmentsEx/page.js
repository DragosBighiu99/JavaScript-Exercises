function getItem(stack, position) {
    return stack[position]
}

function exchangeCards(stack, position, replacementCard) {
    stack[position] = replacementCard
    return stack;
}

function insertCardAtTop(stack, newCard) {
    stack.unshift(newCard);
    return stack;
}

function removeCard(stack, position) {
    stack.splice(position, 1);
    return stack;
}

function removeCardAtTop(stack) {
    stack.shift()
    return stack;
}

function addFirstPositionCard(stack, newCard) {
    stack.push(newCard)
    return stack;
}

function removeFirstPositionCard(stack) {
    stack.pop();
    return stack;
}

function checkSizeOfStack(stack, stackSize) {
    return stack.length === stackSize;
}