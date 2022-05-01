const db = require('../db/dbConfig');

const getAllGroups = async () => {
    try {
       const groups = await db.any('SELECT * FROM groups');
        return groups 
    } catch(err) {
        return err;
    }
};






module.exports = {
    getAllGroups,

}