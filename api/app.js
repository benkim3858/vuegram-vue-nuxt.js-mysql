const cookie_parser = require('cookie-parser');
const create_error = require('http-errors');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');


/**
 * Import env
 */
dotenv.config({path: path.resolve('.env')});

/**
 * Import custom modules
 */
require('./config/global.config');
const morgan = require('./config/morgan.config');
const db = require('./models/index');

/**
 * User Router
 */
const user_router = require('./routes/user.js');

/**
 * express app
 */
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookie_parser());
// app.use(morgan);

/**
 * Inject routers
 */
app.use('/user', user_router);

/**
 * Load Application
 */

db.sequelize.sync({alter: process.env.SEQUELIZE_ROLE === 'master'}).then(() => console.log(" DB SYNC SUCCESS"))
  .catch(err => console.log("DB SYNC FAIL:",err));

module.exports = {
    path:'/api',
    handler: app,
}
