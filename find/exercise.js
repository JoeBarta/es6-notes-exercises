// FINDING ADMIN USERS
// find the user who is an admin
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];
// solution
var admin = users.find(function (user) {
    return user.admin === true;
});
// solution 2
var admin = users.find(user => (user.admin === true));

// ------------------------------------------------------------------------------------------------
// WHAT'S YOUR BALANCE
// find the caccount with the balance of 12 and assign it to the var account
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];
// solution
var account = accounts.find(function (account) {
    return account.balance === 12;
});
// solution 2 
var account = accounts.find(account => (account.balance === 12));

// ----------------------------------------------------------------------------------------
// Custom findWhere helper
// the most common find operation is to an object that has a given property
// the object { ladders: '20 feet' } should be used as the search criteria
// we would want to find a ladder whose 'height' property was 20 feet.
findWhere(ladders, { height: '20 feet' });

// solution 
function findWhere(array, criteria) { // criteria is an object as shown above with ladders
    return array.find(item => { // go through every element and store in item
        return Object.keys(criteria).every(key => { // get every attribute of the object
            return item[key] === criteria[key] // if item has same 'key' (attributes) as our search criteria
        });
    })
}