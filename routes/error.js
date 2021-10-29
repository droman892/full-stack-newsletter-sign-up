const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/*', (req, res) => {
  console.log('You have reached the Error route!');
  res.status(404);
  if (req.baseUrl != '/error') {
    res.redirect('/error')
  } else {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  }
});

module.exports = router;