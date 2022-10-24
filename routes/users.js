// File Name: users.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022


let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

/* GET users listing. */
router.get('/users', usersController.user);

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signout', usersController.signout);

module.exports = router;
