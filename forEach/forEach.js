// es5 code 'aka' the old stuff
var colors = ['red', 'blue' , 'green'];

for ( var i = 0; i < colors.length; i++ ) {
    console.log(colors[i]);
}

// es6 - still using the colors array we made before
colors.forEach(function(color) { // pass in an anonymus function, this function gets called 1 time for every element in the array
    console.log(color);
})

// ---------------------------------------------------------------------
// create an array of numbers
var numbers = [1,2,3,4,5];
// create a variable to hold the sum
var sum = 0;
// loop over the array, incrementing the sum variable
numbers.forEach(function(number){
    sum += number; // take sum var and add the current number, i.e first iteration, we add 1 to sum
})
// print the sum variable 
sum; // should equal 15 (sum of the array)


// same thing as above but with a helper function
function adder(number) {
    sum += number;
}
numbers.forEach(adder);
