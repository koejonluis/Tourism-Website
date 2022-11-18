const { default: mongoose } = require("mongoose");

const locations = new mongoose.Schema({
    locationID: String,
    locationTitle: String,
    locationType: String,
    city: String,
    street: String,
    State: String,
    zip: Number,

    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
});

mongoose.model('Locations', locations);