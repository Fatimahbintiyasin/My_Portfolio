// File Name: users.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 8, 2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/Fatimah', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Fatimah', 
      name: 'Fatimah' 
    }
    );
});
router.get('/john', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'John Smith', 
      name: 'John Smith' 
    }
    );
});

module.exports = router;
