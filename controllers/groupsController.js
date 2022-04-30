// import library or dependencies
const express = require('express');
// import files
const groupData = require('../models/study-group');
//'express.Router' creates a new controller that handles a sub-route, in this case it will handle everything 
//that starts with groups.
const groups = express.Router();

// Routes

groups.get('/', (_, response) => {
    console.log('get request to /group');
    response.json(groupData);
});

groups.get('/:index', (request, response) => {
    const index = request.params;
    if(groupData[index]){
        response.json(groupData[index]);
    } else {
        response.status(404).json({error: "Group not found"});
    }
});

groups.post('/', (request, response) => {
    console.log('hit the post route ;)')
    groups.push(request.body);
    response.status(201).json(groupData);
})








//exporting the groups/router so that app can
//delegate the /groups route to it.
module.exports = groups;