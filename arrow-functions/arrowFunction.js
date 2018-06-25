const add = function(a, b) {
    return a + b;
}
add(1, 2);

// using arrow funcs 'aka' the fat arrow
const add = (a, b) => a + b; // 1 expression, no curly braces and return keyword need

//-----------------------------------------------------------------------------------
// Advanced use/features
const double = function(number) {
    return 2 * number;
}
const double = number => 2 * number; //if we have a single arguement we can also ommit the parens
double(8)

// --------------
const numbers = [1, 2, 3];
numbers.map(number => 2 * number); // single arguement again

// -----------------------------------------------------------------------------------------
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Corleone',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName}`;
        });
    }
}
team.teamSummary(); // won't run 

// refractored problem with arrow funcs
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Corleone',
    teamSummary: function() {
        return this.members.map((member) =>  { // making use of lexical 'this'
            return `${member} is on team ${this.teamName}`; // alternative to using bind
        }); // makes 'this' behave how we want and expect it to
    }
}
