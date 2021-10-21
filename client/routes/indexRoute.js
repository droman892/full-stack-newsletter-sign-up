const express = require('express');
let router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    console.log('Welcome to the application');
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

module.exports = router;