const mongoose = require('mongoose');

// Defines a database connection string and 
// uses it to open a Mongoose connection
// const dbURI = 'mongodb://localhost/TourismWebsite';
// mongoose.connect(dbURI, {useNewUrlParser: true});

// Atlas DB
const dbURI = 'mongodb+srv://admin:admin123@cluster0.xwmlbgz.mongodb.net/?retryWrites=true&w=majorityn'
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
    
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


require('./locations');

require('./hotels');
require('./reservations');
require('./users')