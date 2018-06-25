// Refractoring keyword functions 
const fibonacci = function (n) {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// solution
const fibonacci = n => (n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

// ------------------------------------------------------------------
// Arrow function Aren't always a solution
const profile = {
    name: 'Alex'
};

// solution 
const profile = {
    name: 'Alex',
    getName: function () {
        return this.name;
    }
};