// refractor and destrucure
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer(profile) {
    var title = profile.title;
    var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
}

// solution
const isEngineer = ({ title, department } = profile) => title === 'Engineer' && department === 'Engineering'

// -------------------------------------------------------------------------------------------------------
// convert this array into an array of objects where object has the keys 'subject', 'time' , 'teacher'
// assign the ressult to classesAsObjects
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

// solution 
const classesAsObject = classes.map(([ subject, time, teacher ]) => ({subject, time, teacher }))

// --------------------------------------------------------------------------------------------------------
// recursion with destructuring
const numbers = [1, 2, 3];
//solution
const double = ([number, ...rest]) => number !== undefined ? [ number * 2, ...double(rest) ] : [];