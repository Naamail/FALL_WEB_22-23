const mysql = require('mysql2');
const dbConfig = require('./db.config');

// create connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
//open the connection

connection.connect( error =>{
    if (error) throw error;
    console.log("successfuly conected to DB");
});

module.exports = connection;