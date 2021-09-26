require('dotenv').config();
import express, { json } from 'express';
import apiKeyAuth from 'api-key-auth';

const app = express()
import routes from './routes.js';
import Web3, { providers } from 'web3';
import { MongoClient as mongodb } from 'mongodb';
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb%3A%2F%2FAnTopik%3A%3CDred8819576%3E%40cluster777-shard-00-00.njkay.mongodb.net%3A27017%2Ccluster777-shard-00-01.njkay.mongodb.net%3A27017%2Ccluster777-shard-00-02.njkay.mongodb.net%3A27017%2FAPI%20DB%3Fssl%3Dtrue%26replicaSet%3Datlas-69l246-shard-0%26authSource%3Dadmin%26retryWrites%3Dtrue%26w%3Dmajority";
MongoClient.connect(uri, function (err, client) {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
import contract from '@truffle/contract';
import artifacts from './build/Inbox.json';
app.use(json())
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
} else {
    var web3 = new Web3(new providers.HttpProvider('cluster777-shard-00-00.njkay.mongodb.net:27017'))
}
const LMS = contract(artifacts)
LMS.setProvider(web3.currentProvider)
mongodb.connect(process.env.DB, { useUnifiedTopology: true }, async (err, client) => {
    const db = client.db('cluster777')
    const accounts = await web3.eth.getAccounts();
    const lms = await LMS.deployed();
    //const lms = LMS.at(contract_address) for remote nodes deployed on ropsten or rinkeby
    routes(app, db, lms, accounts)
    app.listen(process.env.PORT || 27017, () => {
        console.log('listening on port ' + (process.env.PORT || 27017));
    })
})