// object destucturing
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
    if(err){
       return console.log("Could not connect to the database server")
    }
        console.log("successful connection to mongodb server")
        const db = client.db('TodoApp');

        // then returns a promise
        // db.collection('Todos').find({
        //     // querying todo collection that has an id as below
        //     // we must call ObjectId since this is not a string 
        //     _id: new ObjectID ('5b291e1b02e2664b6a1e5298')}
        //     // we are only querying values that have a completed status of true
        //     //{completed : false}
        // ).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2))
        // }, (err) => { 
        //     console.log('unable to fetch todos', err);
        // });
     

        // This will return a count of everything in the collection
        db.collection('Todos').find({name:"Mohamed Ali"}).count().then((count) => {
            console.log(`We have ${count} Mohamed Ali` );
        }, (err) => { 
            // print the error
            console.log('unable to fetch todos', err);
        });

        // closes connection to mongodb server
        //client.close();
});