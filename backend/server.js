const express = require('express');
const app = express();
const path = require('path');

// tells express where to serve static files from
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000);
