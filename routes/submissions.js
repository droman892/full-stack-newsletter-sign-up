const express = require('express');
const router = express.Router();
const path = require('path');
const Submission = require('../models/formModel');

router.get('/', (req, res) => {
  console.log('You have reached the Submissions route!');
  
  Submission.find().then(postedSubmissions => res.json(postedSubmissions)).then(postedSubmissions => console.log(postedSubmissions));

  // res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

router.get('/', (req, res) => {
  console.log('You have reached the Submissions route!');
  
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

module.exports = router;