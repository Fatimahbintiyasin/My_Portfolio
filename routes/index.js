
// File Name: index.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 8, 2022

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Home',
      name: 'Home'
    }
    );
});
router.get('/about', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'About Me',
      name: 'Fatimah'
    }
    );
});

router.get('/projects', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Projects'
    }
    );
});
router.get('/services', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Services'
    }
    );
});

router.get('/contact', function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact',
      name: 'Fatimah'
    }
    );
});

module.exports = router;
