function translated2d(dx, dy) {
    return function(x,y) {
        return [x + dx, y + dy];
    }
}

function scale2d(sx,sy) {
    return function(x,y) {
        return [x * sx, y * sy]
    }
}

function composeTransformation(func1, func2) {
    return function(x,y) {
        const intermediateResult = func1(x,y);
        return func2(...intermediateResult);
    }
}

function memorizeTransform(func) {
    const memo = new Map();

    return function(x,y) {
        const key = `${x}-${y}`;

        if(memo.has(key)) {
            return memo.get(key);
        } else {
            const result = func(x,y);
            memo.set(key, result);
            return result;        
        }
    }
}