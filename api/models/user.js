const mysql = require('./index.js');

// const User = function (users) {
//     this.user_id = users.user_id;
//     this.user_pw = users.user_pw;
//     this.user_name = users.name;
//     this.user_nick_name = users.nick_name;
// };

// const User = {};
// User.find_all = function (result) {
//     mysql(function(connection) {
//         connection.query("SELECT * FROM users", function(err, res) {
//             result(res);
//         })
//     })
// }

// const User = {};
// User.find_all = function (result) {
//     const connection = await mysql();
//     connection.query("SELECT * FROM users", function(err, res) {
//         result(res);
//     })
// }

const User = {};

User.find_all = async function() {
    return new Promise(async function(resolve, reject) {
        const pool = new mysql();
        await pool.getConnection();
        let result = await pool.query("SELECT * FROM users");
        return resolve(result);
    })
}

module.exports = User;