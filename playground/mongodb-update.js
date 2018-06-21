// object destucturing
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
    if(err){
       return console.log("Could not connect to the database server")
    }
        console.log("successful connection to mongodb server")
        const db = client.db('TodoApp');

        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5b2916fc5967e40a1efa7ed2')
        }, {
                $set:{
                    name: 'Ahmed'
                } , 
                $inc: {
                    age: 1
                }
            } , {
                returnOriginal: false
            }).then((result) => {
                console.log(result);
        });

        // closes connection to mongodb server
        //client.close();
});