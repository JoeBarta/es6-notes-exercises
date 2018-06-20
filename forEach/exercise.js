// exercise 1 
// Refractor the function to use ForEach
function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];
    // es5
    for (var i = 0; i < posts.length; i++) {
        savePost(posts[i]);
    }
}

// refractor
function handlerPosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];
    // solution
    posts.forEach(function(post) {
        savePost(posts[i])
    })
}

//-------------------------------------------------------------------------

// exercise 2 
// use a forEach helper to calc height and width of an image
// and store the result in the 'areas' variable
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  // solution
  images.forEach(image => areas.push(image.height * image.width))