// Game Classes
// create a class called 'Monster' 
// initialize the Monster's health to 100
// the constructor will be called with an 'options' object that has a 'name' prop. 
class Monster {
    // solution
    constructor(options) {
        this.name = options.name
        this.health = 100
    }
}

const monster = new Monster({ name: 'Godzilla '})

// ------------------------------------------------------------------------------------------
// SubClassing Monsters
// create a sublass of the Monster called Snake
// the snake should have a 'bite' method. only arguement to this method is another instance of a snake
// the instance of Snake that is passed in should their health deducted by 10

class Snake extends Monster {
    constructor(options){
        super(options);
    }
    
    bite(options){
        return options.health -= 10;
    }
}