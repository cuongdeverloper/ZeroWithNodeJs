const express = require('express');
const path = require('path');
const configViewEngine = require('./config/ViewEngine');
const webRoutes = require('./routes/web');
require('dotenv').config();
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

// Configure req.body parsing
app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); // for form data

// Set up views directory and view engine
configViewEngine(app);

// Declare routes
app.use('/', webRoutes);

// A simple SELECT query using the promise-based interface
(async () => {
  try {
    const [rows, fields] = await connection.query('SELECT * FROM `Users`');
    // console.log('Result: ', rows);
    // console.log('Fields: ', fields);
  } catch (err) {
    console.error('Error executing query: ', err);
  }
})();

// Declare route
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
