// object destucturing
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
    if(err){
       return console.log("Could not connect to the database server")
    }
        console.log("successful connection to mongodb server")
        const db = client.db('TodoApp');

     // deleteMany
     // delete many documents

    //  db.collection('Todos').deleteMany({ text : 'eat lunch'}).then((result)=>{
    //     console.log(result)
    //  })

     // deleteOne
     // delete one document

    //  db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //      console.log(result)
    //  })

     // findOneandDelete
     // remove indivual item and returns their values

     db.collection('Todos').findOneAndDelete({completed: true}).then((result) =>{
         console.log(result)
     })

        // closes connection to mongodb server
        //client.close();
});