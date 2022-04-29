// import library or dependencies
const express = require('express');
// import files
const groupData = require('../models/study-group');
//'.Router' creates a new controller that handles a sub-route, in this case it will handle everything 
//that starts with groups.
const groups = express.Router();








//exporting the groups/router so that app can
//delegate the /groups route to it.
module.exports = groups;