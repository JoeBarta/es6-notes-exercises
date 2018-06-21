// only containting es6 without es5 comparisons

// like filter but instead of finding a particular computer .. 
// in this example  we find whether we have any computers that can install a 16 ram program
var computer = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaw', ram: 4 },
    { name: 'Acer', ram: 32 },
];

computers.every(function (computer) {
    return computer.ram > 16 // returns false since not every computer has over 16gb of ram
    // computers array  = 'true && false && true' = false
})
computers.some(function (computer) {
    return computer.ram > 16 // do any records in this array have more than 16gb of ram, return true as 2/3 have
    // computers array = 'true || false || true' = true
})

// ---------------------------------------------------------------------------------------------

var names = [
    'Alexandra',
    'Matthew',
    'Joe'
];

names.every(function (name) {
    return name.length > 4; // returns false
});

names.some(function (name) {
    return name.length > 4; // true
});

// ------------------------------------------------------------------------------------------------
// WHERE IT COULD BE USED IN PRACTICE
// e.g a form / a comment or signup form, before we sent that form to the server
// we want to validate that input whether the user actually put something in
// so we could throw up an error, and just make sure that they've put in some information

function Field(value) { // class 
    this.value = value;
}

Field.prototype.validate = function () { // creating a method
    return this.value.length > 0; // a field is valid if it has a length greater than 0
}

var username = new Field('2cool');
var password = new Field('password');
var birthdate = new Field('10/10/2010');

var fields = [username, password, birthdate];

var formIsValid = fields.every(function (field) {
    return field.validate(); // returns true unless we remove characters from one of the variables it checks
});

if(formIsValid) {
    // allow user to submit!
} else {
    // error message
}

