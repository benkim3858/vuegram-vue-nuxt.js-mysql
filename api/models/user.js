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

User.sign_up = async function(req, res, next) {
    // console.log(req, res);
    console.log(req.user_info);
    const r = req.user_info;
    return new Promise(async function(resolve, reject) {
        const pool = new mysql();
        await pool.getConnection();
        console.log(r.user_id,'안에서 참조가 안됨???');
        console.log(`INSERT INTO users (user_id, user_pw, user_name, nick_name, solt_key) VALUES ('${r.user_id}', '${r.user_pw}', '${r.name}', '${r.nick_name}', ${null})`);
        let result = await pool.query(`INSERT INTO users (user_id, user_pw, user_name, nick_name) VALUES ('${r.user_id}', '${r.user_pw}', '${r.name}', '${r.nick_name}')`);
        return resolve(result);
    })
}

module.exports = User;