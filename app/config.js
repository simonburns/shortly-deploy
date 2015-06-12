var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost/mongoSB')

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongo connection is open!")
});

module.exports = db;


