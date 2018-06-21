// requiring express
const express = require('express');
// body parser takes json and converts it into an object
const body_parser = require('body-parser');


// ES6 object destructuring
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// creating express application
var app = express();

// configurating middleware
// now able to send json to express application
app.use(body_parser.json())

// setting up a route
app.post('/todos' , (req,res) =>{
    var todo = new Todo({
        text : req.body.text
    });

    // saving the todo
    todo.save().then((saved) =>{
        res.send(saved);
    }, (notsaved) =>{
        res.status(400).send(notsaved);
    })
})


app.listen(3000, () => {
    console.log("Started on port 3000")
})


module.exports = {
    app
}


