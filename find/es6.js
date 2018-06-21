// only containting es6 without es5 comparisons

// search through an array and look for a particular element in the array
// maybe in a social media app/website using it to find a particular post by a user based on 'id'

var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' }
];

// es6 using find helper , very similar to the filter function
// we walk through the elements in the array - 
// pass each element into a iteration function which returns a truthy or falsy value
var user = users.find(function (user) {
    return user.name === 'Alex'; // find runs until it finds the first element that returns true
    // therefore if we have two elements of 'Alex' only the first one will be returned
});

// -----------------------------------------------------------------------------------

function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus'),
];

cars.find(function (car) {
    return car.model === 'Focus';
});

// -------------------------------------------------------------------------------------
// take a list of posts and a single comment with a 'postID' to find a post with a particular 'id'
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' },
];

var comment = { postID: 1, content: 'Great Post' };

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}
postForComment(posts, comment) // returns 'id:1' 'title:New post'
