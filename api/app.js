const cookie_parser = require('cookie-parser');
const create_error = require('http-errors');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const db = require('../api/models/index')

const app = express();
dotenv.config();
// const port = process.env.PORT

app.use(express.json());

// router
app.use('/user', require('./routes/user.js'));

db.sequelize.sync({
  alter: process.env.SEQUELIZE_ROLE === 'master',
  // force: process.env.SEQUELIZE_ROLE === 'master',
});

module.exports = {
    path:'/api',
    handler: app,
}
