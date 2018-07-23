// es5 old code
var expense = {
    type: 'Business',
    amount: '$45 USD'
};

var type = expense.type
var mount = expense.amount

// ES6 refactor
const { type, amount } = expense;
// -------------------------------------------------------------------------------

// es5 old stuff
var savedFile = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};
function fileSummary(file) {
    return `The file ${file.name}.{${file.extension} is the size of ${file.size}`;
}
fileSummary(savedFile);

// ES6 - destructe to not use file.
function fileSummary({ name, extension, size }) {
    return `The file ${name}.{${extension} is the size of ${size}`;
}

// ---------------------------------------------------------------------------------------------------------------
// destructuring Arrays
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

// to destructure a property i.e length we use {} braces, to destructure an element we use [] brackets
const [name, name2, name3] = companies
name; // returns google
name2 // fb
name3 // uber
typeof name4 // undefined 

// ------------------------------------------------------------------------------------------------------------------
// destructuring arrays and objects at the same time
const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco' }
];

// old
var loaction = companies[0].location;
location;

// es6
const [{ location }] = companies;
location;

// more destructuring
const Goole = {
    locations: ['Mountain View', 'New York', 'London']
}
const { locations: [location] } = Google; // mountain view

// ------------------------------------------------------------------------------------------------------------------
// when to use destructuring 
function signup({ username, password, email, dob, city }) { // don't have to be in order if we destructure
    // create new user
}
const user = {
    username: 'myname',
    passwrod: 'mypass',
    email: 'test@gmail.com',
    dob: '1/1/1994',
    city: 'New York'
}

// let's say this signup is in a different part of our codebase
// we would need to needlesly remember all the arguements we're inputing 
signup(user); // we add more options/information to input

// -------------------------------------------------------------------------------------------------------------------
// more on when to use destructuring (arrays)
const points = [ // co-ordinates
    [4, 5],
    [10, 1],
    [0, 40]
]

points.map(([x, y]) => {
    return { x, y};
})