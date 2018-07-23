function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce((total, book) => total + book.price, 0)
        },
        priceForTitle: function (title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inverntory = [
    { title: 'harry potter', price: 10 },
    { title: 'eloquent js', price: 15 }
]

const bookShop = createBookShop(inverntory);

bookShop.inventoryValue(); // 25
bookShop.priceForTitle('Harry Potter') // 10

// -------------------------------------------------------------------------------------------------------------------
// above function refractored

function createBookShop(inventory) {
    return {
        inventory, // never have a key and a value with the identical name, we can just write it once
        inventoryValue() { // if we have a key value pair and a function we can ommit the function keyword
            return this.inventory.reduce((total, book) => total + book.price, 0)
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

// -----------------------------------------------------------------------------------------------------------------

function saveFile() {
    $.ajax({ url, data, method: 'POST' })
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);