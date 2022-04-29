// the way we import a library on the server side.
const express = require("express");
//'express' is actually a function that returns an object with which we can manage a server.
const app = express()
//const PORT = 3000;
const groups = require('./models/study-group')
const events = require('./models/events');
const users = require('./models/users');
//console.log(users);


//the server object 'app' has several methods. '.get' handles requests.
// it takes 2 arguments a string for the route '/' and a function to call a callback '()'
// when the express server gets a request it calls your callback and gives it 2 values:
//the request and the response.
// the response object has a bunch of methods for sending a response back to the client.

app.get('/', (request, response) => {
    console.log("this is the request that came in from the client get to /")
    response.send('Welcome to Group Events.')
});

app.get('/group', (request, response) => {
    console.log('get request received to route /groups');
    response.send(groups)

})










// export our app to server.js
module.exports = app;