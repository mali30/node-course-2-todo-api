var mongoose = require('mongoose');

// creating a new model
// two properties: 1st is the string name 
// second is object with various properties in the model
var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        // with required, you have to have text or it will fail
        required : true,
        // the minlength is the minimum num of chars you have to pass
        minlength: 1,
        // trim gets rid of leading and trailing white spaces
        trim: true
    },
    completed: {
        type: Boolean,
        // giving a default value
        default: false
    },
    completedAt: {
        type: Number,
        default : null
    }
});



// creating a new instance of the model
var newTodo = new Todo({
    text: "     This is second upload to PostMan           "
});



//saves to mongodb database
newTodo.save().then((saved)=>{
    console.log('Saved Todo' , saved)
} , (e) =>{
    console.log('unable to save Todo')
});



 var secondTodo = new Todo({
      text: "   Third upload to postman",
      completed: false,
      completedAt : 9
 })

 secondTodo.save().then((saved) =>{
     console.log("Save successful" , saved)
 } , (e) =>{
     console.log("save not successfull" , e)
 })

 module.exports = {
     Todo
 }