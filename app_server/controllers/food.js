module.exports.famousrestaurants = function(req, res){
    res.render('famousrestaurants', { title: 'Famous Restsurants' });
};

module.exports.detailspage = function(req, res){
    res.render('detailspage', { title: 'Details of Famous Restaurant' });
};