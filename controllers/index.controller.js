exports.home = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Home',
        name: 'Home'
      }
    );
};

exports.projects = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Projects'
      }
      );
  };

exports.services = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Services'
      }
      );
  };

exports.about = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'About Me',
        name: 'Fatimah'
      }
      );
  };

exports.contact = function(req, res, next) {
    res.render(
      'contact', 
      { 
        title: 'Contact',
        name: 'Fatimah'
      }
      );
  };