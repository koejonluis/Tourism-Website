const { default: mongoose } = require("mongoose");

const hotels = new mongoose.Schema({
    hotelID: Number,
    hotelTitle: String,
    locationID: Number, 
    daysOpen: Date,
    openingHours: Date,
    ClosingHours: Date, 
    phoneNumber: Number,
    city: String,
    street: String, 
    state: String,  
    zip: Number 
})
