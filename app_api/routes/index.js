const express = require('express');
const router = express.Router();

// Require controllers file
const ctrlTravel = require('../controllers/travel')
const ctrlOthers = require('../controllers/others')
const ctrlFood = require('../controllers/food')
const ctrlAttractions = require('../controllers/attractions')
const ctrlLocations = require('../controllers/locations')



/* 
Post - create new review
Get - read a specific review
Put - update a specific review
Delete - delete a specific review
*/

// Controller - Locations
router 
    .route('/locations')
        .get(ctrlLocations.listofLocations)
        .post(ctrlLocations.locationsCreate);

// Ratings
router 
    .route('/locations/ratings')
        .get(ctrlLocations.locationRatings)
        .post(ctrlLocations.createNewRating)
        .put(ctrlLocations.updateRating)
        .delete(ctrlLocations.deleteRating)




// Controller - Others
router.
    route('/')
        .get(ctrlOthers.home);

router.
    route('/aboutus')
        .get(ctrlOthers.aboutus);

router.
    route('contact')
        .get(ctrlOthers.contact)

router
    .route('/login')
        .get(ctrlOthers.getDetails)
        .post(ctrlOthers.createNewAccount)
        .delete(ctrlOthers.deleteAccount)


// Controller - Travel
router
    .route('/travel')
        .get(ctrlTravel.statepark);


module.exports = router;