// import library or dependencies
const express = require('express');
//'express.Router' creates a new controller that handles a sub-route, in this case it will handle everything 
//that starts with groups.

// Routes
const groups = express.Router();
const { getAllGroups, getGroup, createGroup, deleteGroup, updateGroup } = require('../queries/groups');


groups.get('/', async (require, response) => {
    const group = await getAllGroups();
    console.log(group)
    response.status(200).json(group);
});

groups.get('/:id', async (request, response) => {
    const group = await getGroup(request.params.id);
    response.status(200).json(group);
});

groups.post('/', async (request, response) => {
    const group = await createGroup(request.body);
    response.status(200).json(group);
});

groups.delete('/:id', async (request, response) => {
    const { id } = request.params;
    const deletedGroup = await deleteGroup(id);
    response.status(200).json(deletedGroup);
});

groups.put("/:id", async (request, response) => {
    const { id } = request.params;
    const updatedGroup = await updateGroup(id, request.body);
    response.status(200).json(updatedGroup);
});









//exporting the groups/router so that app can
//delegate the /groups route to it.
module.exports = groups;