function dayRate(a) {
    return a * 8
}

console.log(dayRate(89))


function daysInBudget(budget,rateperhour) {
    return Math.floor(budget / dayRate(rateperhour))
}

console.log(daysInBudget(20000,89))


function priceWithMonthlyDiscount(rateperhour,numberOfDays,discount) {
    const fullMonths = Math.floor(numberOfDays / 22)
    console.log(fullMonths)
    const remainingDays = numberOfDays % 22
    console.log(remainingDays)
    const fullPricePerMonth = fullMonths * 22 * dayRate(rateperhour)
    console.log(fullPricePerMonth)
    return Math.ceil(fullPricePerMonth - discount * fullPricePerMonth + remainingDays * dayRate(rateperhour))
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))

