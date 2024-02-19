// Back-End (Node.js with Express)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 4000;

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'nailtherapy_user',
  password: 'nailtherapy_dev_password1',
  database: 'jdbc:mysql://localhost:3306/db_nailtherapy',
});

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

app.use(cors());
app.use(bodyParser.json());

// Route to handle form data submission
app.post('/ContactForm', (req, res) => {
  const { name, email, phone, message } = req.body;
  const insertQuery = 'INSERT INTO users (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(insertQuery, [name, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

