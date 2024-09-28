function createVisitor(name, age, ticketId) {

    if(typeof age !== 'number' || age <=0 || !Number.isInteger(age)) {
        throw new Error('Age must be a positive number')
    }

    if(typeof ticketId !== 'string' || ticketId.trim() === '') {
        throw new Error('Ticket ID must be a non-empty string')
    }

    return {
        name: name,
        age: age,
        ticketId: ticketId
    }
}


function revokeTicket(visitor) {
    if (
        typeof visitor !== 'object' ||
        !visitor.hasOwnProperty('name') ||
        !visitor.hasOwnProperty('age') ||
        !visitor.hasOwnProperty('ticketId')
    ) {
        throw new Error('Invalid visitor object.')
    }

    return {
        ...visitor,
        ticketId: null
    }
}

function ticketStatus(trackingObject, ticketId) {
    if (typeof trackingObject !== 'object') {
        throw new Error('Invalid tracking object.');
    }

    if (trackingObject.hasOwnProperty(ticketId)) {
        return 'unknown ticket Id';
    }

    if (trackingObject[ticketId] === null) {
        return 'not sold';
    } else {
        return `sold to ${trackingObject[ticketId]}`
    }
}

function simpleTicketStatus(trackingObject, ticketId) {
    if (typeof trackingObject !== 'object') {
        throw new Error('Invalid tracking object.');
    }

    if (trackingObject.hasOwnProperty(ticketId)) {
        return 'invalid ticket !!!';
    }

    if (trackingObject[ticketId] === null) {
        return 'invalid ticket !!!';
    } else {
        return trackingObject[ticketId]
    }
}

function gtcVersion(visitor) {
    if (
        typeof visitor !== 'object' ||
        !visitor.hasOwnProperty('gtc') ||
        !visitor.gtc.hasOwnProperty('version')
    ) {
        return undefined;
    }

    return visitor.gtcVersion;
}