const express = require('express');
router = express.Router();
testRoute = require('../controllers/testController');

// router gets home page --> whats in () is the proxy address
// this routes the testRoute to the testController
router.get('/test/', testRoute.testController);

module.exports = router;