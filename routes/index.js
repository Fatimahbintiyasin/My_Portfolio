// File Name: index.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022


var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

/* GET About page. */
router.get('/about', controlerIndex.about);

/* GET Projects page. */
router.get('/projects', controlerIndex.projects);

/* GET Services page. */
router.get('/services', controlerIndex.services);

/* GET Contact page. */
router.get('/contact', controlerIndex.contact);

module.exports = router;