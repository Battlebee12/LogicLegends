const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
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
    const { email, firstName, lastName, password, country, zipCode } = req.body;

    // Check if any required field is missing
    if (!email || !firstName || !lastName || !password || !country || !zipCode) {
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

        con.query('INSERT INTO users (firstName, lastName, email, password, country, zipCode) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, email, hashedPassword, country, zipCode], (err, result) => {
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
                return;
            }
            if (result) {
                // Return user's name and email along with the response
                res.status(200).send({
                    message: 'Login successful.',
                    name: user.firstName,
                    email: user.email // Include email in the response
                });
            } else {
                res.status(401).send({ message: 'Invalid email or password.' });
            }
        });
    });
});


app.post('/events', (req, res) => {
    const { name, description, date, ticketPrice, ticketsAvailable } = req.body;

    // Check if any required field is missing
    if (!name || !description || !date || !ticketPrice || !ticketsAvailable) {
        res.status(400).send({ message: 'All fields are required.' });
        return;
    }

    // Insert the event into the database
    const eventInsertQuery = 'INSERT INTO events (name, description, date, ticket_price, tickets_available) VALUES (?, ?, ?, ?, ?)';

    con.query(eventInsertQuery, [name, description, date, ticketPrice, ticketsAvailable], (err, result) => {
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
app.get('/events/:id', (req, res) => {
    const eventId = req.params.id;

    con.query('SELECT * FROM events WHERE id = ?', [eventId], (err, results) => {
        if (err) {
            console.error('Error fetching event details:', err);
            res.status(500).send('Internal server error');
        } else {
            if (results.length > 0) {
                const eventDetails = results[0];
                res.status(200).json(eventDetails);
            } else {
                res.status(404).send('Event not found');
            }
        }
    });
});
app.get('/events', (req, res) => {
    con.query('SELECT * FROM events', (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            res.status(500).send('Internal server error');
        } else {
            res.status(200).json(results);
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
  });



app.listen(3002, () => {
    console.log('Running backend server on port 3002');
});
