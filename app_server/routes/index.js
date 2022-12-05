var express = require('express');
var router = express.Router();

// Require controllers file
var ctrlTravel = require('../controllers/travel')
var ctrlOthers = require('../controllers/others')
var ctrlFood = require('../controllers/food')
var ctrlAttractions = require('../controllers/attractions')


// Router looks for home page URL 
// Controller - Others
router.get('/', ctrlOthers.home);
router.get('/aboutus', ctrlOthers.aboutus);
router.get('/contactus', ctrlOthers.contactus);

// Controller - Travel
router.get('/statepark', ctrlTravel.statepark);

// Controller - Food
router.get('/famousrestaurants', ctrlFood.famousrestaurants);
router.get('/famousrestaurants/detailspage', ctrlFood.detailspage);

// Controller - Attractions 
router.get('/topthingstodo', ctrlAttractions.topthingstodo);

module.exports = router;
