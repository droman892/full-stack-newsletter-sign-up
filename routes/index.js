const express = require('express');
const router = express.Router();
const path = require('path');
const Submission = require('../models/formModel');

router.get('/', (req, res) => {
  console.log('You have reached the Index route!');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

router.post('/', (req, res) => {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNum = req.body.phoneNum;
  const email = req.body.email;
  const checkbox1 = req.body.checkbox1;
  const checkbox2 = req.body.checkbox2;
  const checkbox3 = req.body.checkbox3;
  const checkbox4 = req.body.checkbox4;
  const checkbox5 = req.body.checkbox5;
  const radioMarked = req.body.radioMarked;
  const comments = req.body.comments;

  console.log('***************BELOW IS THE SUBMITTED FORM DATA ON THE / ROUTE***************')
  console.log('First Name: ' + firstName);
  console.log('Last Name: ' + lastName);
  console.log('Phone Number: ' + phoneNum);
  console.log('Email: ' + email);
  console.log('Checkbox 1: ' + checkbox1);
  console.log('Checkbox 2: ' + checkbox2);
  console.log('Checkbox 3: ' + checkbox3);
  console.log('Checkbox 4: ' + checkbox4);
  console.log('Checkbox 5: ' + checkbox5);
  console.log('Radio Marked: ' + radioMarked);
  console.log('Comments (Optional): ' + comments);

  const newSubmission = new Submission({
    firstName,
    lastName,
    phoneNum,
    email,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    checkbox5,
    radioMarked,
    comments
  });

  newSubmission.save();

  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = router;