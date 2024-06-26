require('dotenv').config();
const mysql = require('mysql2/promise');//test conection to database
const connection =  mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // default = 3306
  user: process.env.DB_USER, // default password: empty
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASENAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

});
  module.exports = connection