const express = require('express');
const router = express.Router();
const app = express();

// backend data will be rendered at /test
router.get('/test', (req, res) => {
    console.log('You made it to the form page!!!')
    res.send('Express is working for me!!!');
});

module.exports = router;