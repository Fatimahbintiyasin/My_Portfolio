// File Name: index.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022


var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);


module.exports = router;