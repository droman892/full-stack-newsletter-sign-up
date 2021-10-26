const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const name = req.body.firstName;
  if (name) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  } else {
    res.redirect('/home')
  }
});

module.exports = router;