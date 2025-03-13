const arrayOfProducts = (inputArray) => {
    let newArray = [];    
    let newArrayOfProducts = [];

    for (let i = 0; i < inputArray.length; i++) {
        newArray = inputArray.slice(0, i).concat(inputArray.slice(i + 1, inputArray.length + 1));
        newArrayOfProducts.push(newArray.reduce((acc, currVal) => acc * currVal));
    };

    return newArrayOfProducts;
}

console.log(arrayOfProducts([1, 2, 3, 4, 5]));
console.log(arrayOfProducts([7, 2, 16, 28, 5]));