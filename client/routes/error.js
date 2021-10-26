const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('You have reached the Error route!');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
  // res.redirect('/error');
});

module.exports = router;