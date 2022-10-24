exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        name: 'Home',
        userName: req.user ? req.user.username : ''
    });
};
exports.about = function(req, res, next) {
    res.render('index', { 
        title: 'About Me',
        name: 'Fatimah',
        userName: req.user ? req.user.username : ''
     });
}

exports.projects = function(req, res, next) {
    res.render('projectservices', { 
      title: 'Projects',
      userName: req.user ? req.user.username : '' 
    });
}
exports.services = function(req, res, next) {
    res.render('projectservices', { 
      title: 'Services',
      userName: req.user ? req.user.username : '' 
    });
}
exports.contact = function (req, res, next) {
    res.render('contact', {
        title: 'Contact',
        userName: req.user ? req.user.username : '',
    });
 }
