// DISTANCE TRAVELLED
// use the 'reduce' helper to find the sum of all distances travelled
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
// solution 
var totalDistance = trips.reduce(function (sum, trip) {
    return sum += trip.distance;
}, 0);

// --------------------------------------------------------------------------------------------
// REDUCING PROPERTIES
// create an object that tallies the number of sitting and standing desks.
// the object returned should have the form '{sitting:3, standing:2}'

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];
// solution 
var deskTypes = desks.reduce(({ sitting, standing }, { type }) => {
    if (type === 'standing') standing++;
    if (type === 'sitting') sitting++;
    return { sitting, standing };
}, { sitting: 0, standing: 0 });

// --------------------------------------------------------------------------------------
// CUSTOM 'UNIQUE' HELPER
// write a function called 'unique' that will remove all the duplicate values from an array

// e.g
var numbers = [1, 2, 3, 4, 4]; // the function should return [1, 2, 3, 4]

// solution
function unique(array) {
    return array.reduce((acc, number) => {
        if(!acc.find(item => item === number)){ acc.push(number); } 
        return acc;
    }, []); 
}