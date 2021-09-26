import express, { json } from 'express';
const app = express()
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb%3A%2F%2FAnTopik%3A%3CDred8819576%3E%40cluster777-shard-00-00.njkay.mongodb.net%3A27017%2Ccluster777-shard-00-01.njkay.mongodb.net%3A27017%2Ccluster777-shard-00-02.njkay.mongodb.net%3A27017%2FAPI%20DB%3Fssl%3Dtrue%26replicaSet%3Datlas-69l246-shard-0%26authSource%3Dadmin%26retryWrites%3Dtrue%26w%3Dmajority";
MongoClient.connect(uri, function (err, db) {
    const collection = db("test").collection("devices");
    // perform actions on the collection object
    db.close();
});
app.use(json());

mongodb.connect(process.env.DB, { useUnifiedTopology: true }, function (err, db) {
    const db = db ('cluster777-shard-00-00.njkay.mongodb.net');
    //home
    routes(app, db);
    app.listen(process.env.PORT || 27017, () => {
        console.log('listening on port 27017');
    });
})
