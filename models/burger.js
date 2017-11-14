const orm = require('../config/orm.js');


const Burger = {
    // get all burgers
    getAll: function (pCallback) {
        orm.selectAll('burgers', pCallback);
    },
    // add new burger
    insert: function (pName, pCallback) {
        orm.insertOne('burgers', pName, false, pCallback);
    },
    // update based on ID
    // probably can only be devoured updated
    update: function (pColumn, pNewVal, pID, pCallback) {
        orm.updateOne('burgers', pColumn, pNewVal, 'id', pID, pCallback);
        orm.updateOne('burgers', 'last_updated', new Date(), 'id', pID, null);
    },

    LOG: function (pThing) {
        console.log('----------');
        console.log(pThing)
    }
};


module.exports = Burger;