function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function () {
    return 'vroom';
}

const car = new Car({ title: 'Focus' })
car.drive(); // vroom;
car; // Focus

// ---------------------------------------------------------------------------------

// inheritance
function Toyota(options) {
    Car.call(this, options),
        this.color = options.color
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
    return 'beep'
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' })
toyota;
toyota.drive();
toyota.honk();

// ---------------------------------------------------------------------------------------------------
// THE USEFUL STUFF
// Refractoring prototype with es6 class
class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

const car = new Car({ title: 'Toyota' });
car.drive()

// extending behaviour of classes
class Toyota extends Car { // extends Car allows us to access car function like OOP essentially
    constructor(options) {
        super(options); // super calls 'Car' constructor method  === Car.constructor()
        this.color = options.color;
    }

    honk() {
        return 'beep'
    }
}

const toyota = new Toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
'----'
toyota.honk();
toyota.drive();
toyota; // color: red

// ---------------------------------------------------------------------------------------------------------
// when to use classes
