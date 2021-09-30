const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
// const DIST_DIR = path.join(__dirname, '../public');


app.use(express.json());
app.use(express.urlencoded()); //To parse URL-encoded bodies!!
// app.use(express.static(DIST_DIR));

app.get('/home', (req, res) => {
  console.log('Got a get request home');
  res.send('Hello from the express server');
})


app.listen(port, function() {
  console.log('App listening on port: ' + port);
})
