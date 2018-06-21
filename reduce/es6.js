// one of the most flexible helpers
var numbers = [10, 20, 30];
var sum = 0;

// es6 with reduce

// run through of how it works
// 2 arguements
// the sum is coming from the initial value (first arg)
// the second arguement is the element from out array, in this case the number
// 0 + 10 = 10 => 10 + 20 = 30 => 30 + 30 = 60
// each step sum increases as it takes the number from it's previous iteration

numbers.reduce(function (sum, number) {
    return sum + number; // returns 60
}, 0); // with reduce we pass in an initial value after the function
// the initial value is sent to our iterator function for every single run through it

// ---------------------------------------------------------------------------------------------------------
// take all the string from these objects and put them in a new array
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

primaryColors.reduce(function (previous, primaryColor) { // first arg can sometimes be called accumulator 'acc'
    previous.push(primaryColor.color);
    return previous; // return ['red' , 'yellow', 'blue']
}, []);

// ----------------------------------------------------------------------------------------------------------
// coding challenge
function balancedParens(string) {
    return !string.split('').reduce(function (previous, char) { // adding a ! to make it truthy/falsy
        if (previous < 0) { return previous; } // if we have correct number of parens but in wrong order )(
        if (char === '(') { return ++previous; }
        if (char === ')') { return --previous; }
        return previous;
    }, 0);
}
balancedParens('((('); // false
balancedParens('()()') // should return true