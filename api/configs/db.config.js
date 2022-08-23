module.exports = {
    connectionLimit : 10,
    database : process.env.DB_NAME,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
}


// module.exports = {
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: 'root1234',
//     DB: 'vuegram',
//     dialect: 'mysql',
//     pool: {
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     }
// }

// var pool = mysql.createPool({
//     connectionLimit : 10,
//     host     : 'localhost',
//     user     : 'root',
//     password : 'root1234',
//     database : 'vuegram'
// });
