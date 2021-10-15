const express = require('express');
router = express.Router();
testRoute = require('../controllers/testController');

// router gets home page --> whats in () is the proxy address
router.get('/', testRoute.testController);

module.exports = router;