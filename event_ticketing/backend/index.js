const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '304rootpw',
    database: 'test',
});

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;

    // Check if any required field is missing
    if (!email || !name || !password) {
        res.status(400).send({ message: 'All fields are required.' });
        return;
    }

    // Hash the password before storing it in the database
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            res.status(500).send({ message: 'Internal server error.' });
            return;
        }

        con.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Error creating account:', err);
                res.status(500).send({ message: 'Error creating account.' });
            } else {
                res.status(200).send({ message: 'Account created successfully.' });
            }
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Check if email or password is empty
    if (!email || !password) {
        res.status(400).send({ message: 'Email and password are required.' });
        return;
    }
    con.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).send({ message: 'Internal server error.' });
            return;
        }
        if (rows.length === 0) {
            res.status(401).send({ message: 'Invalid email or password.' });
            return;
        }
        const user = rows[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                res.status(500).send({ message: 'Internal server error.' });
            } else if (result) {
                // Return user's name along with the response
                res.status(200).send({ message: 'Login successful.', name: user.name });
            } else {
                res.status(401).send({ message: 'Invalid email or password.' });
            }
        });
    });
});

app.post('/events', (req, res) => {
    const { name, description, date } = req.body;

    // Check if any required field is missing
    if (!name || !description || !date) {
        res.status(400).send({ message: 'All fields are required.' });
        return;
    }

    // Insert the event into the database
    con.query('INSERT INTO events (name, description, date) VALUES (?, ?, ?)', [name, description, date], (err, result) => {
        if (err) {
            console.error('Error creating event:', err);
            // More specific error message based on error code
            let message = "Error creating event.";
            if (err.code === 'ER_DUP_ENTRY') {
                message = "Event name already exists.";
            }
            res.status(500).send({ message });
        } else {
            res.status(200).send({ message: 'Event created successfully.' });
        }
    });
});



app.listen(3002, () => {
    console.log('Running backend server on port 3002');
});