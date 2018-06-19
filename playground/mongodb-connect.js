//const MongoClient = require('mongodb').MongoClient;


/* 
ES6 object destructing - lets you pull out properties from an object
 creating variables
 This is an example of object destructing
 var user = {name: 'mohamed ali' , age: 23}
 var {name} = user;
 console.log(name);
*/

// object destructing
// lets us make new objectId on the fly
const {MongoClient, ObjectID} = require('mongodb');
// create a new instance of ObjectId
// var obj = new ObjectID();
// console.log(obj);



// connecting to database
// two arguments, where your database lives and callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
    if(err){
       return console.log("Could not connect to the database server")
    }
        console.log("successful connection to mongodb server")
        const db = client.db('TodoApp')
        // creating a collecion
        // then we are adding to it using insertOne
        // first argument - object to store key value pairs
        // second argument - call back when function is done running
        // db.collection('Todos').insertOne({
        //     text: "Some text",
        //     completed: false
        // } , (err , result) => {
        //     if(err){
        //         return console.log("unable to insert todo" , err);
        //     }
        //         console.log(JSON.stringify(result.ops , undefined , 2))

        // });


        // Challlenge to create a collection on my own

        // db.collection('Users').insertOne({
        //     name: 'Mohamed Ali',
        //     age: 23,
        //     location: 'Atlanta , GA',
        //     // you can add your own id
        //     //_id: 1234
        // } , (err ,result) =>{
        //     if(err){
        //         return console.log("Could not insert into the collection")
        //     }
        //         // getting timestamp which is the time it was created
        //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
        // })





        // closes connection to mongodb server
        client.close();
});