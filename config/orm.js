// pull in the MYSQL connection
const connection = require('./connection.js');

let orm = {
    // SELECT all
    // pTableName is the table to select
    selectAll: (pTableName, pCallback) => {
        let qString = 'SELECT * FROM ??;';

        // run the query string
        connection.query(qString, [pTableName], (err, data) => {
            if (err) { return console.log(err); }
            pCallback(data);
        });
    },
    // INSERT one
    // pTableName is the table to insert into
    // pBurgerVal is the value of the burger name
    // pDevouredBool is the value of the burger devoured status
    insertOne: (pTableName, pBurgerVal, pDevouredBool, pCallback) => {
        let qString = 'INSERT INTO ?? (burger_name, devoured) VALUES (?, ?);';

        // run the query string
        connection.query(qString, [pTableName, pBurgerVal, pDevouredBool], (err, data) => {
            if (err) { return console.log(err); }

            pCallback(data);
        });
    },
    // UPDATE one
    // pTableName is the table to look at
    // pColumnName and pNewValue are the are the attribute and value to update to
    // pTargetColumn and pTargetValue are the filter / targeting parameters
    // Callback can be null so we can handle timestamp updates
    updateOne: (pTableName, pColumnName, pNewValue, pTargetColumn, pTargetValue, pCallback) => {
        let qString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?;';

        // run the query string
        connection.query(qString, [pTableName, pColumnName, pNewValue, pTargetColumn, pTargetValue], (err, data) => {
            if (err) { return console.log(err); }

            if (pCallback) { pCallback(data); }
        });
    }
};

module.exports = orm;