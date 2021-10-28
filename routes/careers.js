const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('You have reached the Careers route!');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = router;