// File Name: businesscontacts.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022

// create a reference to the model
let businessContactsModel = require('../models/user');

module.exports.businessContactsList = function(req, res, next) {  
    businessContactsModel.find((err, businessContactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/list', {
                title: 'Business Contacts',
                BusinessContactsList : businessContactsList,
                userName: req.user ? req.user.username : ''
            })            
        }
    }).sort({firstName:1});
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    businessContactsModel.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit Contact', 
                user: userToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedUser = businessContactsModel({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNum: req.body.phoneNum,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirmPass: req.body.confirmPass
    });

    businessContactsModel.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the contact list
            res.redirect('/business/list');
        }
    });
}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    businessContactsModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {

    let newUser = businessContactsModel();

    res.render('business/add_edit', {
        title: 'Add a new Contact',
        user: newUser,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newUser = businessContactsModel({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNum: req.body.phoneNum,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        confirmPass: req.body.confirmPass
    });

    businessContactsModel.create(newUser, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.log(newUser);
            res.redirect('/business/list');
        }
    });
    
}