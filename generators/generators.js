// forOf loop - iterating through arrays of data
const colors = ['red', 'green', 'blue']

for (let color of colors) { // loops through colors array
    console.log(color);
}

// e.g 2
const number = [1, 2, 3, 4];
let total = 0;

for (let number of numbers) {
    total += number;
} // = 10

// -------------------------------------------------------------------------------------------------------------
// a generator is a function that can be entered or exited several times
// we can run some code, generate a value and then go back into the function at the same place that we left it
function* numbers() { // * or function *numbers() to declare a generator
    yield;
}
const gen = nubmers();
gen.next() // 'done': false - if 'yield' keyword is removed this also becomes true
gen.next() // 'done': true - the 2nd time it's run 

// ------------------------------------------------------
function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';
    // walking to laundry
    const cleanClothes = yield 'laundry';
    // walking back home
    return [stuffFromStore, cleanClothes]
}

// stuff in the store
const gen = shopping();
gen.next(); // leaving our house
// walked into the store
// walking around the store
// purchase our stuff
gen.next('groceries'); // leaving the store with groceries
// 'groceries' get thrown back into yield 
// groceries get assigned to stuffFromStore and we return with groceries 
gen.next('clean Clothes');

// ----------------------------------------------------------------------------------------------------------------------
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}
// example of output, however the forOf below is what we want to use
const gen = colors();
gen.next(); // red
gen.next(); // blue
gen.next(); // green
gen.next(); // done: true (meaning no more yield statements therefore 'true')

// the reason for the forOf loop instead of using .next()
const myColors = [];
for ( let color of colors()) {
    myColors.push(color);
}
myColors;

// ----------------------------------------------------------------------------------------------------------------
// PRACTICAL USE OF ES6 GENERATORS
const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Mike',
    manager: 'Alex',
    engineer: 'Dave'
};

// only want to iterate throguh the employees and no the size or department
function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}
const names = [];

for ( let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
names;

// -------------------------------------------------------------------------------------------------------------------
// delegation of genrerators