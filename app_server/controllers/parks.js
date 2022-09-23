module.exports.nationalpark = function(req, res){
    res.render('nationalpark', { title: 'National Parks' });
};

module.exports.statepark = function(req, res){
    res.render('statepark', { title: 'State Park' });
};