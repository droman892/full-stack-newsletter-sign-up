const express = require('express');
const path = require('path');
let router = express.Router();

router.get('/about', function(req, res) {
    console.log('You have reached the About route');
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

module.exports = router;