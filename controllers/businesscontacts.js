// File Name: businesscontacts.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022

// create a reference to the model
let businessContactsModel = require('../models/user');

function getErrorMessage(err) {
    if (err.errors) {
    for (let errName in err.errors) {
    if (err.errors[errName].message) return err.errors[errName].message;
    }
    }
    if (err.message) {
    return err.message;
    } else {
    return 'Unknown server error';
    }
    };

module.exports.businessContactsList = function(req, res, next) {  
    businessContactsModel.find((err, businessContactsList) => {
        if(err)
        {
             console.error(err);

             res.status(400).json(
                {
                    success: true,
                    message: getErrorMessage(err)
                })
        }
        else
        {
            res.status(200).json( businessContactsList);        
        }
    }).sort({firstName:1});
}



module.exports.processEdit = (req, res, next) => {

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
            res.status(400).json(
                {
                    success: false,
                    message: getErrorMessage(err)
                })
        }
        else
        {
            res.status(200).json(
                {
                    success: true,
                    message: "Item updated successfully"
                })
        }
    });
}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    businessContactsModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.status(400).json(
                {
                    success: true,
                    message: getErrorMessage(err)
                })
        }
        else
        {
            res.status(200).json(
                {
                    success: true,
                    message: "Item deleted successfully"
                })
        }
    });
}


module.exports.processAdd = (req, res, next) => {

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
            res.status(400).json(
                {
                    success: true,
                    message: getErrorMessage(err)
                })
        }
        else
        {
            console.log(newUser);
            res.status(200).json( item);
        }
    });
    
}