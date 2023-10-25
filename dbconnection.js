const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
    // port: 3306,
    // host: 'localhost',
    // database: 'node',
    // user: 'root',
    // password: ''
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    else {
        console.log('MySQL Database is connected Successfully');
    }
});

module.exports = connection;