const mongoose = require('mongoose');
const config = require('../config.json');

// Use native promises
mongoose.Promise = global.Promise;

const connectionURL = `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connectionURL, {useMongoClient: true})
.catch((e) => console.log(e));
const db = mongoose.connection;

// Check connection
db.on('connected', () => {
    console.log(`Mongoose connection open  on ${connectionURL}`)
});

// Check for Db errors
db.on('error', (err) => console.log(err));

// Check for disconected
db.on('disconnected', () => {
    console.log('mongoose connection disconnected')
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('mongoose connection closed throw app terminatatnio');
        process.exit(0);
    });
});
