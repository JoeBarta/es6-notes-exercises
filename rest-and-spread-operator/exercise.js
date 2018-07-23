function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

// solution
const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);

// -------------------------------------------------------------------------------------------
function join(array1, array2) {
    return array1.concat(array2);
}

// solution
const join = (array1, array2) => [...array1, ...array2];

// -------------------------------------------------------------------------------------------
function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}

// solution
const unshift = ( array, ...rest ) => [...rest, ...array];