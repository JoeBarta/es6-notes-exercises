// imagine we are writing a function that should make an AJAX request ( url & method )
function makeAjaxRequest(url, method) {
    if(!method) {
        method = 'GET' // if user hasn't passed in a method, we make this the default
    }
    // logic to make the request
}

// defaultFucntionArguements solution
function makeAjaxRequest(url, method = 'GET') { // doesn't reassign it - it just gives it a default if none is entered
    // logic to make the request
}

makeAjaxRequest('google.com') // get
makeAjaxRequest('google.com', 'POST') // post

// ----------------------------------------------------------------------------------------------------------------------

function User(id) {
    this.id = id
}

function generateId() {
    return Math.random() * 99999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

createAdminUser()