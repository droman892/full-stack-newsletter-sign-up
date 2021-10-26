const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/*', (req, res) => {
  console.log('You have reached the Error route!');
  if (req.baseUrl != '/error') {
    res.redirect('/error')
  } else {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  }
});

module.exports = router;