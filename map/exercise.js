// PLUCKING VALUES
// using map create a new array that contains the 'height' property of each object.
// assign this new array to the variable 'heights'
// don't forget to use the 'return' keyword in the fucntion

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];
// solution
var heights = images.map(function (image) {
    return image.height
})
heights;

// --------------------------------------------------------------------------------
// CALCULATING VALUES WITH MAP
// create a new array that contains the distance / time value from each trip

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];
// solution
var speeds = trips.map(function(trip){
    return trip.distance / trip.time
})
speeds;

// ---------------------------------------------------------------------------------
// IMPLEMENTING PLUCK
// implement a 'pluck' function.
// Pluck should accept an array and a string representing a property name
// and return an array contating that property from each object

// solution
function pluck(array, property) {
    return array.map(arr => {
        return arr[property]
    })
}
