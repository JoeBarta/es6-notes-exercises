// FINDING SBMITTED USERS
// given an array of users, return 'true' if every user has submitted a request form.

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];
// solution 1
var hasSubmitted = users.every(function (user) {
    return user.hasSubmitted === true;
});
//solution 2
var hasSubmitted = users.every(user => (user === true));

// -------------------------------------------------------------------------------------------
// IN PROGRESS NETWROK REQUESTS
// given an array of network objects representing network requests
// assign the blloean 'true' to the variable 'inPorgress' if any network request has a 'status' of pending
var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];
// solution 1
var inProgress = requests.some(function (request) {
    return request.status === 'pending';
});
// solution 2
var inProgress = requests.some(request => (request.status === 'pending'));