const { default: mongoose } = require("mongoose");

const users = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    
})