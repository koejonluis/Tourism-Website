// 'index' is index.jade
const home = function(req, res){
    res.render('home', { title: 'Tourism Website' });
};

const aboutus = function(req, res){
    res.render('aboutus', { title: 'About Us' });
};

const contact = function(req, res){
    res.render('contact', { title: 'Contact Form' });
};

module.exports = {
    home,
    aboutus,
    contact
};
