const express = require('express');
let router = express.Router();

router.get('/privacy', function(req, res) {
    console.log('Welcome to the application');
    // res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

module.exports = router;