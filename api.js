const env = require('dotenv');
const express = require("express");
const app = express();
const routes = require('./routes/Router')
const Sequelize = require('sequelize')
const Environment = process.env.NODE_ENV || 'development'

env.config()
//Load the configuration from the config.js
const config = require(`${__dirname}/config/config.js`)[Environment];

//Create an empty object which can store our databases
const db = {};

//Extract the database information into an array
const databases = Object.keys(config.databases);

//Loop over the array and create a new Sequelize instance for every database from config.js
for (let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.databases[database];
    //Store the database connection in our db object
    db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', (req, res) => {
    res.redirect('https://yxphstudios.tech')
})


app.listen(process.env.PORT, () => {
    console.log(`Server API Running in ${process.env.PORT}`);
})
