function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers([1, 2, 3, 4, 5]) // 15

// ----------------------------------------------------------------------------------------------------------

// what if I wanted to pass mmultiple arguements e.g numbers
function addNumbers(...numbers) { // ... is the rest operator - some unknown number of arguements - we capture them and put them in a single array 
    const number = [a, b, c, d, e]
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7)

// ------------------------------------------------------------------------------------------------------------------------------------
// spread

const defaultColors = ['red', 'green'];
const userFavouriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

['blue', ...fallColors, ...defaultColors, ...userFavouriteColors]; // same as using concat
// however this appraoch more easily allows us to see what we are doing with our code

// ----------------------------------------------------------------------------------------------------------------------------
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

validateShoppingList('oranges', 'bread')

// -------------------------------------------------------------------------------------------------------
// benefit is we do not have to duplicate logic
const MathLibrary = {
    calculateProduct(...rest) { // don't care how many arguements we pass into the function 
        console.log('Please use the multiply method instead')
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b;
    }
}