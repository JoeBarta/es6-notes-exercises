// only containting es6 without es5 comparisons

// map is probably the most common used helper
var numbers = [1,2,3];

var doubled = numbers.map(function(number) { // each number in the numbers array is being passed into the anonymous function
    return number * 2; // this part is placed into a new array
    // after each element has been processed that new array is returned
    // make sure the 'return' keyword is inside the mapping function otherwise we get 'null'
})
doubled; 

// ----------------------------------------------------------------------------------

var cars = [
    { model: 'Buick', price: 'CHEAP' },
    { model: 'Camaro', price: 'expensive' }
];

// map helper
var prices = cars.map(function(car) { // called each time for 1 car
    return car.price; // plucking a particular property from each object in the array
})
prices; // returns ['CHEAP','expensive'];

// -------------------------------------------------------------------------------------

// primarily used to render a list of data
// think facebook where there is a sequence of posts
// each post has a 'name' of the person, an 'image' and the 'post'
// each post can be an individual object containing all 3
// e.g friend.name, friend.post etc .. 