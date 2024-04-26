const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8888; // Removed extra semicolon
const hostname = process.env.HOST_NAME || 'HostName';

console.log(process.env);

// Set up views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/nodejs', (req, res) => {
  res.render('view.ejs');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
