var mongoose = require('mongoose');

var myUsers = mongoose.model('Users', {
    email:{
        type: String,
        required : true,
        trim: true , 
        minlength: 1
    } 
});

var newuser = new myUsers({
    email : "mali30@student.gsu.edu"
});

newuser.save().then((saved) =>{
    console.log("email succesfully saved" , saved)
} , (nosave) =>{
    console.log("could not save email" , nosave)
})

module.exports ={
    myUsers
}
