// import mysql
const mysql = require('mysql');

// create DB info variable
const dbCreds = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    pass: '',
    database: 'burgers_db'
};

if (process.env.JAWSDB_URL) {
    let connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    let connection = mysql.createConnection(dbCreds);
}

connection.connect((err) => {
    if (err) { return console.log(err); }

    console.log(`Connected to DB on thread ${connection.threadId}`);
});

// export the connection
// this object is and active connection
module.exports = connection;