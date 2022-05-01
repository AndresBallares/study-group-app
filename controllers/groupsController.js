// import library or dependencies
const express = require('express');
// import files
const groupData = require('../models/study-group');
//'express.Router' creates a new controller that handles a sub-route, in this case it will handle everything 
//that starts with groups.
const groups = express.Router();
const { getAllGroups } = require('../queries/groups');

// Routes

groups.get('/', async (require, response) => {
    const groups = await getAllGroups();
    response.status(200).json(groups);
});

groups.get('/:index', (request, response) => {
    const index = request.params.index;
    if(groupData[index]){
        response.json(groupData[index]);
    } else {
        response.status(404).json({error: "Group not found"});
    }
});

groups.post('/', (request, response) => {
    console.log('hit the post route ;)')
    groupData.push(request.body);
    response.status(201).json(groupData);
});

groups.delete('/:id', (request, response) => {
    const deletedGroup = groupData.splice(request.params.id, 1);
    response.json(deletedGroup);
});










//exporting the groups/router so that app can
//delegate the /groups route to it.
module.exports = groups;