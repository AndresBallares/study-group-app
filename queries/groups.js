const db = require('../db/dbConfig');

const getAllGroups = async () => {
    try {
       const group = await db.any('SELECT * FROM groups');
        return group 
    } catch(err) {
        return err;
    }
};

const getGroup = async (id) => {
    try {
        const group = await db.one("SELECT * FROM groups WHERE id= $1", id);
        return group;
    } catch (err) {
        return err;
    }
};

const createGroup = async (group) => {
    const { name, main_focus, date_formed, contact_email } = group;
    const newGroup = await db.one ("INSERT INTO groups (name, main_focus, date_formed, contact_email) VALUES ($1, $2, $3, $4) RETURNING * ", 
    [name, main_focus, date_formed, contact_email]
    );
    return newGroup;
};

const deleteGroup = async (id) => {
    try {
        const deletedGroup = await db.one("DELETE FROM groups WHERE id = $1 RETURNING * ", id);
        return deletedGroup;
    } catch (err) {
        return err;
    }
};

const updateGroup = async (id, group) => {
    const { name, main_focus, date_formed, contact_email } = group;
    try {
        const updatedGroup = await db.one("UPDATE groups SET name=$1, main_focus=$2, date_formed=$3, contact_email=$4 WHERE id=$5 RETURNING *",
        [name, main_focus, date_formed, contact_email, id]
        );
        return updatedGroup;
    } catch (err) {
        return err;
    };
}






module.exports = {
    getAllGroups,
    getGroup,
    createGroup,
    deleteGroup,
    updateGroup
}