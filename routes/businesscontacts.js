// File Name: businesscontacts.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022



var express = require('express');
var router = express.Router();

let businessController = require('../controllers/businesscontacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET list of items */
router.get('/list', businessController.businessContactsList);

// Routers for edit
router.post('/edit/:id',  businessController.processEdit);

// Delete
router.get('/delete/:id',  businessController.performDelete);


/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',  businessController.processAdd);

module.exports = router;