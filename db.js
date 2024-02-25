const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_db_password',
  database: 'ecommerce-api',
});

module.exports = db;
