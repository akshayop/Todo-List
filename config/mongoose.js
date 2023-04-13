// required library
const mongoose = require('mongoose');

// Connecting to the data base

mongoose.connect('mongodb://0.0.0.0:27017/todo_list')
    .then( () => {
        console.log("successfully connected to mongodb");
    }).catch( (err) => {
        console.log("error", err);
    });