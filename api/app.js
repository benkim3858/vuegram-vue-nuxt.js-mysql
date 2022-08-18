const express = require('express');
var mysql = require('mysql');

const app = express();

app.use(express.json({ limit: '300mb'}));

var pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'root1234',
    database : 'vuegram'
});


// connection 은 리소스를 많이 요구한다. 서버가 시작될때 커넥션을 미리 만들어 놓고, 이미 만들어져 있는 커넥션을 사용한다.
function get_connection() {
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            if(err) return reject(err);
            return resolve(connection);
        })
    })
}

function query(connection, q) {
    return new Promise(function(resolve, reject) {
        connection.query(q, function(err, results) {
            if(err) return reject(err);
            return resolve(results);
        })
    })
}

function transaction(connection) {
    return new Promise(function(resolve, reject) {
        connection.beginTransaction(function(err) {
            if(err) {
                return reject(err);
            }
            return resolve();
        })
    })
}

function sleep(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log(`Delayed for ${num} second`);
            return resolve(num);
        }, num*1000);
    })
}

// (async function (){
//     let a = await Promise.all([1,2,3,4,5].map(item => sleep(item)));
//     console.log(a);
// })()

app.get("/sign_up", async function(req, res, next) {
    try {
        // console.log(Date.now(), '1'); // 1
        let connection = await get_connection(); // 2
        let results = await query(connection, "INSERT INTO vuegram.users (id, user_id, name, nick_name, user_pw, sort_key) VALUES ('2', 'test2', 'ben', 'superman', '1234', '1234')"); // 3
        // console.log(Date.now(), '4'); // 4
        res.send(results);
    } catch (e) {
        return res.end()
    }
})

// 트랜젝션 수행되는 일의 단위, 중복되는 동작 수행을 방지하기 위해
module.exports = {
    path:'/api',
    handler: app,
}