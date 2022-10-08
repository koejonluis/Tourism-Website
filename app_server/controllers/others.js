// 'index' is index.jade
module.exports.home = function(req, res){
    res.render('home', { title: 'Tourism Website' });
};

module.exports.aboutus = function(req, res){
    res.render('aboutus', { title: 'About Us' });
};

module.exports.contact = function(req, res){
    res.render('contact', { title: 'Contact Form' });
};

