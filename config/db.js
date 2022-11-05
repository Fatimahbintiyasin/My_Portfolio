// File Name: db.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022


//In real project, never expose your credential in your code

let config = require('./config');

let mongoose = require('mongoose');

module.exports = function(){

    //Connect to the database
    mongoose.connect(config.ATLASDB);

    let mongodb = mongoose.connection;
    
    mongodb.on('error', console.error.bind(console, 'Connection Error:'));

    mongodb.once('open', ()=>{
        console.log('Connected to MongoDB ====');
    });

    return mongodb;
}