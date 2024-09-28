function returnObject (inputObject, propsToBeRemoved) {
    const newObj = { ...inputObject};
    propsToBeRemoved.forEach(prop => delete newObj [prop]);
    return newObj;
}

const inputObject = { a:1, b:2}
const propsToBeRemoved = ['b'];

const newObject = returnObject(inputObject, propsToBeRemoved);
console.log(newObject)