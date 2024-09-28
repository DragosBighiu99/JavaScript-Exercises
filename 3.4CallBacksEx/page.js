function isServiceOnline() {
    grocerAPI.checkStatus(() =>{
        return status === 'ONLINE';
    })
}

function pickFruit(variety, quantity, callback) {
    const query = {
        variety: string,
        quantity: number,
    };

    grocerAPI.checkInventory(query, callback)
}

function action(err, data) {
    if (err) {
        console.error("Oops, something went wrong:", err)
    } else {
        console.log("Yay! We got some data:", data)
    }
}

function purchaseInventoryIfAvailable(err, isAvailable) {
    if (err !== null) {
        throw new Error(err);
    } else {
        return isAvailable ? 'PURCHASE' : 'NOOP';
    }
}

function pickAndPurchaseFruit(variety,quantity) {
    const query = {
        variety: string,
        quantity: number,
    };

    grocerAPI.checkInventory(query, (err, isAvailable) =>{
         try {
         const purchaseResult = purchaseInventoryIfAvailable(err, isAvailable);
             console.log(purchaseResult)
        } catch (error) {
             console.error(error.message)
        }
    })
}
