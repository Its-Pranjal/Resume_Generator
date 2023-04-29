const express = require("express");
const cors = require("cors");
const pdf = require('html-pdf');
const pdfSample = require('./pdf-sample/index.js');
const mysql = require('mysql2');

const app = express();
const port = 4000;

// Create a connection to the database server
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Raftaar_baby1',
    database: 'resume' // Change this to the username of your database
});

// Connect to the database server
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database server: ' + err.stack);
        return;
    }
    console.log('Connected to database server');
});

// Create a new database
db.query('CREATE DATABASE IF NOT EXISTS resume', (err, result) => {
    if (err) {
        console.error('Error creating database: ' + err.stack);
        return;
    }
    console.log('Database created');
});

// Create a new table in the database
db.query('CREATE TABLE IF NOT EXISTS students (username VARCHAR(900000), phone VARCHAR(900000), SchoolName VARCHAR(90000), studentClass VARCHAR(90000), rollNo VARCHAR(90000), adress VARCHAR(900000))', (err, result) => {
    if (err) {
        console.error('Error creating table: ' + err.stack);
        return;
    }
    console.log('Table created');
});        

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/create-pdf", (req, res) => {
    // Insert the user data into the database
    const { username, phone, SchoolName, studentClass, rollNo, adress} = req.body;
    db.query('INSERT INTO students (username, phone, SchoolName, studentClass, rollNo, adress) VALUES (?, ?, ?, ?, ?, ?)', [username, phone, SchoolName, studentClass, rollNo, adress], (err, result) => {
        if (err) {
            console.error('Error inserting data into database: ' + err.stack);
            res.send(Promise.reject());
            return;
        }
        console.log('Data inserted into database');
        
        // Generate the PDF and send it as a response
        pdf.create(pdfSample(req.body), {}).toFile("admit_card.pdf", (err) => {
            if (err) {
                console.error('Error generating PDF: ' + err.stack);
                res.send(Promise.reject());
                return;
            }
            console.log('PDF generated');
            res.send(Promise.resolve());
        });
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/admit_card.pdf`);
});

app.use(express.static('../client/build'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
