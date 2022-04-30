const express = require('express');
const eventsData = require('../models/events');
const events = express.Router();

events.get('/', (request, response) => {
    console.log('hit the events route ;)');
    response.json(eventsData);
});

events.get('/:index', (request, response) => {
    const i = request.params.index
    response.json(eventsData[i])
});









module.exports = events;