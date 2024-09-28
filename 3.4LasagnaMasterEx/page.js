function cookingStatus(time) {
    if (timer === 0) {
        return 'Lasagna is done.';
    } else if (timer === undefined) {
        return 'You forgot to set the timer.'
    } else {
        return ' Not done, please wait.'
    }
}

function preparationTime(layers, averageTime = 2) {
    const totalLayers = layers.length;
    const totalTime = totalLayers * averageTime;
    return totalTime
}

function quantities(layers) {
    const noodleWeightPerLayer = 50
    const sauceVolumePerLayer = 0.2

    let = totalNoodles = 0;
    let totalSauce = 0;

    for (const layer in layers) {
        if( layer === 'noodles') {
            totalNoodles += noodleWeightPerLayer;
        } else if (layer ==='sauce') {
            totalSauce += sauceVolumePerLayer;
        }
    }

    return { noddles: totalNoodles, sauce: totalSauce}
}

function addSecretIngredient(friendList, myList) {
    if(friendList.length > 0 && myList.length > 0) {
        const secretIngredient = friendList[friendList.length-1];

        myList.push(secretIngredient);
    }
}

function scaleRecipe(recipe,portions) {
    const scaledRecipe = {}

    for(const ingredient in recipe) {
        scaledRecipe[ingredient] = recipe[ingredient] * (portions/2);
    }

    return scaledRecipe;
}