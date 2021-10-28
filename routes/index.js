const express = require('express');
const router = express.Router();
const path = require('path');
const Submission = require('../models/formModel');

router.get('/', (req, res) => {
  console.log('You have reached the Index route!');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

router.post('/', (req, res) => {
  console.log('********************BELOW IS THE SUBMITTED FORM DATA********************')
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

  // console.log(req.path + 'error');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

router.get('/submissions').get((req, res) => {
  Submission.find().then(postedSubmissions => res.json(postedSubmissions))
})

module.exports = router;