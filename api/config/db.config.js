module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  timezone: '+09:00',
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
  // logging: process.env.NODE_ENV === 'development' ? function (str){
  //   if(!/ALTER TABLE|CREATE TABLE|INFORMATION_SCHEMA|SHOW/.test(str)) {
  //     console.info(str);
  //   }
  // } : false,
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
