// FILTERING VALUES
// filter an array of numbers, creating a new array that contains only numbers greater than 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 86, 95];
// solution
var filteredNumbers = numbers.filter(function (number) {
    return number > 50;
})
// another way
var filteredNumbers = numbers.filter(number => (number > 50));

// ------------------------------------------------------------------------------------------------
// HANDLING PERMISSION WITH FILTER
// filter the array of users, only returning users who have admin access.
var users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];
// solution
var filteredUsers = users.filter(function (user) {
    return user.admin === true
})
// solution 2
var filteredUsers = users.filter(user => (user.admin === true));

// --------------------------------------------------------------------------------------------------
// IMPLEMENTING 'REJECT'
// create a function called 'reject'
// reject should work in the opposite way of 'filter'
// so if a function returns 'true', the item should "not" be included in the new array

//example
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function (number) {
    return number > 15;
})
lessThanFifteen // returns [10];

// solution 1 using the numbers array
function reject(numbers, iteratorFunction) {
    return numbers.filter(number => {
        return !iteratorFunction(number);
    });
}

// solution 2 
function reject(numbers, iteratorFunction) {
    return numbers.filter(number => !iteratorFunction(number))
}