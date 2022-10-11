const famousrestaurants = function(req, res){
    res.render('famousrestaurants', { title: 'Famous Restsurants' });
};

const detailspage = function(req, res){
    res.render('detailspage', { title: 'Details of Famous Restaurant' });
};

module.exports = {
    famousrestaurants,
    detailspage
};