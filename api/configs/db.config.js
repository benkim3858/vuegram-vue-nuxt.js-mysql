module.exports = {
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
    dateStrings: true,
    typeCast: true,
    supportBigNumbers: true
  },
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  },
  pool: {
    max: 200,
    min: 0,
  },
};


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
