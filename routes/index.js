
// File Name: index.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 8, 2022

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller')

/* GET home page. */
router.get('/', indexController.home);

router.get('/about', indexController.about);

router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/contact', indexController.contact);

module.exports = router;
