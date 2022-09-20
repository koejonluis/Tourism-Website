var express = require('express');
var router = express.Router();

// Require controllers file
var ctrlNationalPark = require('../controllers/nationalpark')
var ctrlOthers = require('../controllers/others')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travel Blog' });
});

module.exports = router;

// // Router looks for home page URL 
// router.get('/', ctrlOthers.index);
// module.exports = router;