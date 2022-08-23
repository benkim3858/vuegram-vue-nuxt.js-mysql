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

    sign_up() {
        // const {user_info} = req.body
        // try {
        //     console.log('user controller@@@');
        // } catch (e) {
        //     console.error(e);
        // }
        console.log('user controller@@@@@');
    },

}