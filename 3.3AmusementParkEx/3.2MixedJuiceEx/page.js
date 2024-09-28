/*function timeToMixJuice(juice) {
    switch(juice) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}*/




/*function limesToCut(numWedgesNeeded, limeSupply) {
    let totalWedges = 0;
    let limesCount = 0;

    for (const lime of limeSupply) {
        switch (lime) {
            case 'small':
                totalWedges += 6;
                break;
            case 'medium':
                totalWedges += 8;
                break;
            case 'large':
                totalWedges += 10;
                break;
            default:
                break;
        }

        limesCount ++;

        if (totalWedges >= numWedgesNeeded) {
            break;
        }
    }
    return limesCount;
}*/



/*function remainingOrders(timeleft, orders) {
    const timeToMix = {
        'Pure Strawberry Joy': 0.5,
        'Energizer': 1.5,
        'Green Garden': 1.5,
        'Tropical Island': 3,
        'All or Nothing': 5,
        'Special Mix': 2.5,
    };

    let remainingTime = timeLeft;
    const remainingOrders = [];

    for (const order of orders) {
        if(timeToMix[order] <= remainingTime) {
            remainingTime -= timeToMix[order];
        } else {
            remainingOrders.push(order)
        }
    }

    return remainingOrders;
}*/
