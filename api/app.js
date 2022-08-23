const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();
// const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user', require('./routes/user.js'));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = {
    path:'/api',
    handler: app,
}