function buildSign(occasion, name) {
    return `${occasion}, ${name}`;
}

function buildBirthdaySign(age) {
    let ageMessage = (age > 50) ? 'mature' : 'young';
    return `"Happy Birthday! What a ${ageMessage} young fellow you are."`
}

function graduationFor(name, year) {
    return `Congratulations ${name}!\nClass of ${year}`
}

function costOf(sign, currency) {
    let letterCost = sign.replace(/\s/g, '').length * 2;

    let totalCost = 20 + letterCost;

    let formattedCost = totalCost.toFixed(2);

    return `Your sign costs ${formattedCost} ${currency}`;


    // => "Your sign costs 58.00 dollars."
}