const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('You made it to the form page!!!')
    res.send('Nice!!!');
});

module.exports = router;