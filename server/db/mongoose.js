const mongoose = require('mongoose');


// using the promise from node and not third party promise
mongoose.Promise = global.Promise;
// connecting to database using mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose 
}