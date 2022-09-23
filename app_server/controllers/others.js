/* GET home page. */
// router.get('/', function(req, res) {
//     res.render('index', { title: 'Tourism Website' });
//   });

// 'index' is index.jade
module.exports.index = function(req, res){
    res.render('index', { title: 'Tourism Website' });
};