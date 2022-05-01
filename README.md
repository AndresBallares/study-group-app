to Create a basic Express app that will have a Postgres database I'll need to ensure that I am at root level on terminal

I will start by creating a local repository on terminal.  run mkdir [name] to create a folder and run git init command to make it a repository.

Then I will create a README.md file -- git add . and git commit -m "".

Go to gitHub and create a remote repository that will connect to my local repository.

Invite collaborators, Colin, Angie and Jose.

Back on terminal and at root level of the repository.  Create a .gitignore file and an app.js file.

run npm init -y to create a package jason without the need to answer set of questions on terminal.

run npm install express to add it as a dependencies on package jason

Open the app.js file and import (const express = require("express") the express library, since this is a function I will call it (const app = express())

Export the app at the bottom of the file (module.exports = app;)

Declare a PORT variable and assign a port number (3000)

create a .env file

npm install dotenv

open .env file and create an environmental variable (PORT = 3000), this will package the port into an object {PORT: 3000} when we do process.env on the server.js file.

Create a server.js file and import the app file (const app = require("./app")  The purpose of this file (server.js) is to do a separation of concerns.

Import dotenv library (require('dotenv').config()) into server.js

At root level mkdir a models folder and within that folder create 'touch' study-group.js, events.js and users.js.  This is a description of the data that will be linked to the schema file on the Postgres database.

Create the objects with it's corresponding key value pairs and (module.exports = users;) to ensure we can import this data into the app.js file.

On the app.js file import study-group.js, events.js and users.js

Create controller folder and eventsControllers.js, groupsController.js and usersController.js

Exported express.Router to app.js in order to designate /[Router]

Added middleware 'use.app(express.json())' in the app.js file to handle incoming request as JSON information. 




