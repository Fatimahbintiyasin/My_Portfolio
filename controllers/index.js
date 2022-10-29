// File Name: index.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 24, 2022


exports.home = function(req, res, next) {

    res.json(
        {
            success: true,
            message: "This is the home endpoint."
        }
    )
};
