const User = require("../models/user.js");
// const mysql = require('./index.js');
// const Mysql = require('mysql');

export default {
    // find_all(req, res, next) {
    //     User.find_all(function(result) {
    //         return res.send(result);
    //     })
    // },

    async find_all(req, res, next) {
        const result = await User.find_all();
        return res.send(result);
    },

    async sign_up(req, res, next) {
        // console.log(req.body);
        const result = await User.sign_up(req.body);
        return res.send(result);
    },

}