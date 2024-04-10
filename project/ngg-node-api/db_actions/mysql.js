require('dotenv').config();
const util = require('util');
const mysql = require('mysql');
let queryFunc;

async function connectToDb() {
  const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
  });
  console.log('query conversion done');
  queryFunc = async (sql) => {
    const result = await new Promise((resolve, reject) => {
      pool.query(sql, (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      })
    });
    return result;
  }
}

async function query(sql) {
  const result = await queryFunc(sql);
  return result;
}

module.exports = {
  connectToDb,
  query,
};
