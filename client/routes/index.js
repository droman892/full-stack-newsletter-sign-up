const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('You have reached the Index route!');
  res.redirect('/home');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = router;