const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('You have reached the Home route!');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

router.post('/', (req, res) => {
  console.log('First Name: ' + req.body.firstName);
  console.log('Last Name: ' + req.body.lastName);
  console.log('Phone Number: ' + req.body.phoneNum);
  console.log('Email: ' + req.body.email);
  console.log('Checkbox 1: ' + req.body.checkbox1);
  console.log('Checkbox 2: ' + req.body.checkbox2);
  console.log('Checkbox 3: ' + req.body.checkbox3);
  console.log('Checkbox 4: ' + req.body.checkbox4);
  console.log('Checkbox 5: ' + req.body.checkbox5);
  console.log('Radio Marked: ' + req.body.radioMarked);
  console.log('Comments (Optional): ' + req.body.comments);
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = router;