var express = require('express');
var router = express.Router();

// Require controllers file
// var ctrlHome = require('.../controllers/home')
var ctrlParks = require('../controllers/parks')
var ctrlOthers = require('../controllers/others')

// Router looks for home page URL 
router.get('/', ctrlOthers.index);
router.get('/nationalPark', ctrlParks.nationalpark);
router.get('/statepark', ctrlParks.statepark);

module.exports = router;