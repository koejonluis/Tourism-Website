const express = require('express');
const router = express.Router();

// Require controllers file
const ctrlTravel = require('../controllers/travel')
const ctrlOthers = require('../controllers/others')
const ctrlFood = require('../controllers/food')
const ctrlAttractions = require('../controllers/attractions')

const ctrlLocations = require('../controllers/locations')
const ctrlLogIn = require('../controllers/login')


/* 
Post - create new review
Get - read a specific review
Put - update a specific review
Delete - delete a specific review
*/

// Cpntroller - Locations
router 
    .route('/locations')
    // .get(ctrlLocations.listofLocations)
    // .post(ctrlLocations.locationsCreate);

router
    .route('/login')
    // .get(ctrlLogIn.getDetails)
    // .post(ctrlLogIn.createNewAccount)
    // .delete(ctrlLogIn.deleteAccount)

// Ratings
router 
    .route('/locations/ratings')
    // .get(ctrlLocations.locationRatings)
    // .post(ctrlLocations.createNewRating)
    // .put(ctrlLocations.updateRating)
    // .delete(ctrlLocations.deleteRating)

// Controller - Travel
router
    .route('/travel')
    .get(ctrlTravel.statepark);


// Controller - Others
router.
    route('/')
    .get(ctrlOthers.home);

module.exports = router;