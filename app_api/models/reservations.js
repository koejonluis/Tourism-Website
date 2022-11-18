const { default: mongoose } = require("mongoose");

const reservations = new mongoose.Schema({
    reservationID: Number,
    customerName: String,
    noOfCustomers: Number,
    bookingTime: Date,
    bookingDate: Date
})
