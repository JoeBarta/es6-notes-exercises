var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'celery', type: 'vegetable' },
    { name: 'orange', type: 'fruit' },
];
var filteredProducts = [];

for ( var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
filteredProducts;

// es6 version using fitler helper
products.filter(function(product) {
    return product.type === 'fruit'; // comparing the type of the product we're receiving, either a truthy or falsy value
})

// ------------------------------------------------------------------------------------------------

// more complex filter
// type is 'vegetable', quantity is greater than 0, price is less than 10
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0 , price: 1},
    { name: 'banana', type: 'fruit', quantity: 10 , price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30 , price: 9 },
    { name: 'orange', type: 'fruit', quantity: 3 , price: 5 },
];

products.filter(function(product){
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10; // bool 
})

// ------------------------------------------------------------------------------------------------
// where filter can be used, a blog app with posts and comments
// a given post and finding the correct comments matching that post's id
var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' }
]

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id // second 'post.id' is equal to the 'post' passed into the function as a parameter
    })
}
commentsForPost(post, comments); // will return 2 comments with postId: 4