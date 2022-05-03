
// the way we import a library on the server side.
const express = require("express");
const cors = require("cors");
//'express' is actually a function that returns an object with which we can manage a server.
// create the express app.
const app = express()
const PORT = process.env.PORT;

// adding JSON-parsing middleware.  
// For every request parse incoming information as JSON.
app.use(express.json());

// importing files
const groupsController = require('./controllers/groupsController');
const eventsController = require('./controllers/eventsController');
const usersController = require('./controllers/usersController');
// checks if the request includes endpoint /groups, if so.
// delegates everything that starts with endpoint /groups to the groupsController
// takes in two arguments a sub-route and the controller
app.use('/groups', groupsController);
app.use('/events', eventsController);
app.use('/user', usersController);

// const groups = require('./models/study-group')
// const events = require('./models/events');
// const users = require('./models/users');
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



// Star (*) matches anything we haven't yet.
app.get('*', (request, response) => {
    response.status(404).json({ error: "Page not found"});
});










// export our app to server.js
module.exports = app;