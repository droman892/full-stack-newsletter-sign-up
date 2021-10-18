const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

// tells express where to serve static files from
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  console.log('Welcome to the application');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(PORT, () => console.log(`The application is being served on localhost:${PORT}`));
