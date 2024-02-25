const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(express.json())
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'process.ENV.password',
  database: 'ecommerce_db',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(express.urlencoded({ extended: true }))

const router = require('./routes/productRouter.js')
app.use('/api/products', router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})