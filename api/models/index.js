const mysql = require('mysql');
const db_config = require('../configs/db.config.js');

const pool = mysql.createPool({
    connectionLimit : 10,
    database : process.env.DB_NAME,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
});

// const get_connection = function(resolve, reject) {
//     pool.getConnection(function(err, connection) {
//         if(err) return reject(err);
//         console.log("DB Connected!");
//         return resolve(connection);
//     })
// }

// function get_connection() {
//     return new Promise(function(resolve, reject) {
//         pool.getConnection(function(err, connection) {
//             if(err) return reject(err);
//             console.log("DB Connected!");
//             return resolve(connection);
//         })
//     })
// }

class Pool {
    constructor () {
        this.connection = null;
    }
    getConnection() {
        const t = this;
        return new Promise(function(resolve, reject) {
            pool.getConnection(function(err, connection) {
                if(err) return reject(err);
                console.log("DB Connected!");
                t.connection = connection;
                return resolve();
            });
        });
    }
    query(sql) {
        const t = this;
        return new Promise(function(resolve, reject){
            t.connection.query(sql, function(err, res) {
                resolve(res);
            });
        });
    }
}


module.exports = Pool;