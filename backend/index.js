// const express = require('express');
// const mysql = require('mysql');
// const bcrypt = require('bcryptjs');
// const cors = require('cors');
// const app = express();
// const jwt = require('jsonwebtoken');


// app.use(express.json());
// app.use(cors());

// const con = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: '121103sarab',
//     database: 'test',
// });

// app.post('/register', (req, res) => {
//     const { email, firstName, lastName, password, country, zipCode } = req.body;

//     // Check if any required field is missing
//     if (!email || !firstName || !lastName || !password || !country || !zipCode) {
//         res.status(400).send({ message: 'All fields are required.' });
//         return;
//     }

//     // Hash the password before storing it in the database
//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//         if (err) {
//             console.error('Error hashing password:', err);
//             res.status(500).send({ message: 'Internal server error.' });
//             return;
//         }

//         con.query('INSERT INTO users (firstName, lastName, email, password, country, zipCode) VALUES (?, ?, ?, ?, ?, ?)', [firstName, lastName, email, hashedPassword, country, zipCode], (err, result) => {
//             if (err) {
//                 console.error('Error creating account:', err);
//                 res.status(500).send({ message: 'Error creating account.' });
//             } else {
//                 res.status(200).send({ message: 'Account created successfully.' });
//             }
//         });
//     });
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // Check if email or password is empty
//     if (!email || !password) {
//         res.status(400).send({ message: 'Email and password are required.' });
//         return;
//     }
//     con.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
//         if (err) {
//             console.error('Error querying database:', err);
//             res.status(500).send({ message: 'Internal server error.' });
//             return;
//         }
//         if (rows.length === 0) {
//             res.status(401).send({ message: 'Invalid email or password.' });
//             return;
//         }
//         const user = rows[0];
//         bcrypt.compare(password, user.password, (err, result) => {
//             if (err) {
//                 console.error('Error comparing passwords:', err);
//                 res.status(500).send({ message: 'Internal server error.' });
//                 return;
//             }
//             if (result) {
//                 // Return user's name and email along with the response
//                 res.status(200).send({
//                     message: 'Login successful.',
//                     name: user.firstName,
//                     email: user.email // Include email in the response
//                 });
//             } else {
//                 res.status(401).send({ message: 'Invalid email or password.' });
//             }
//         });
//     });
// });




// app.post('/events', (req, res) => {
//     const { name, description, date, ticketPrice, ticketsAvailable,venue } = req.body;

//     // Check if any required field is missing
//     if (!name || !description || !date || !ticketPrice || !ticketsAvailable ||!venue) {
//         res.status(400).send({ message: 'All fields are required.' });
//         return;
//     }

//     // Insert the event into the database
//     const eventInsertQuery = 'INSERT INTO events (name, description, date, ticket_price,venue) VALUES (?, ?, ?, ?,?)'; // ticketsAvailable removed

//     con.query(eventInsertQuery, [name, description, date, ticketPrice, venue], (err, result) => { // ticketsAvailable removed
//         if (err) {
//             console.error('Error creating event:', err);
//             // More specific error message based on error code
//             let message = "Error creating event.";
//             if (err.code === 'ER_DUP_ENTRY') {
//                 message = "Event name already exists.";
//             }
//             res.status(500).send({ message });
//         } else {
//             res.status(200).send({ message: 'Event created successfully.' });
//         }
//     });
// });
// app.get('/events/:id', (req, res) => {
//     const eventId = req.params.id;

//     con.query('SELECT * FROM events WHERE id = ?', [eventId], (err, results) => {
//         if (err) {
//             console.error('Error fetching event details:', err);
//             res.status(500).send('Internal server error');
//         } else {
//             if (results.length > 0) {
//                 const eventDetails = results[0];
//                 res.status(200).json(eventDetails);
//             } else {
//                 res.status(404).send('Event not found');
//             }
//         }
//     });
// });
// app.get('/events', (req, res) => {
//     con.query('SELECT * FROM events', (err, results) => {
//         if (err) {
//             console.error('Error fetching events:', err);
//             res.status(500).send('Internal server error');
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// app.post('/checkout/:eventId', (req, res) => {
//     const eventId = req.params.eventId;
//     const { user_id, ticketsBought, totalAmount, paymentMethod } = req.body;

//     // Validate request body
//     if (!user_id || !ticketsBought || !totalAmount || !paymentMethod) {
//         res.status(400).send({ message: 'Missing required fields.' });
//         return;
//     }

//     // Fetch event details from the database
//     con.query('SELECT * FROM events WHERE id = ?', [eventId], (err, results) => {
//         if (err) {
//             console.error('Error fetching event details:', err);
//             res.status(500).send({ message: 'Internal server error' });
//             return;
//         }
//         if (results.length === 0) {
//             res.status(404).send({ message: 'Event not found' });
//             return;
//         }

//         const event = results[0];

//         // Insert transaction data into the transactions table
//         const transactionInsertQuery = 'INSERT INTO transactions (user_id, event_name, tickets_bought, total_amount, payment_method) VALUES (?, ?, ?, ?, ?)';
//         con.query(transactionInsertQuery, [user_id, event.name, ticketsBought, totalAmount, paymentMethod], (err, result) => {
//             if (err) {
//                 console.error('Error creating transaction:', err);
//                 res.status(500).send({ message: 'Error processing payment.' });
//             } else {
//                 res.status(200).send({ message: 'Payment processed successfully.' });
//             }
//         });
//     });
// });

// // Middleware function to authenticate admin users
// const authenticateAdmin = (req, res, next) => {
//     // Extract JWT from request headers
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ message: 'No token provided. Unauthorized.' });
//     }

//     // Verify JWT token
//     jwt.verify(token, 'secretkey', (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Failed to authenticate token.' });
//         }
//         // Check if the decoded token contains admin role
//         if (decoded.role !== 'admin') {
//             return res.status(403).json({ message: 'Unauthorized access.' });
//         }
//         // If token is valid and user is admin, proceed to the next middleware
//         req.adminId = decoded.adminId;
//         next();
//     });
// };

// // Route for admin login
// app.post('/admin/login', (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required.' });
//     }
//     con.query('SELECT * FROM admins WHERE email = ?', [email], (err, rows) => {
//         if (err) {
//             console.error('Error querying database:', err);
//             return res.status(500).json({ message: 'Internal server error.' });
//         }
//         if (rows.length === 0) {
//             return res.status(401).json({ message: 'Invalid email or password.' });
//         }
//         const admin = rows[0];
//         bcrypt.compare(password, admin.password, (err, result) => {
//             if (err) {
//                 console.error('Error comparing passwords:', err);
//                 return res.status(500).json({ message: 'Internal server error.' });
//             }
//             if (result) {
//                 // Passwords match, login successful
//                 // Generate JWT token
//                 const token = jwt.sign({ adminId: admin.admin_id, role: 'admin' }, 'secretkey', { expiresIn: '0.01h' });
//                 return res.status(200).json({ message: 'Login successful.', token });
//             } else {
//                 return res.status(401).json({ message: 'Invalid email or password.' });
//             }
//         });
//     });
// });

// // Route for fetching events for admin dashboard
// app.get('/admin/events', authenticateAdmin, (req, res) => {
//     con.query('SELECT * FROM events', (err, results) => {
//         if (err) {
//             console.error('Error fetching events:', err);
//             res.status(500).json({ message: 'Internal server error' });
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// // Route for updating event status (approval/rejection)
// app.put('/admin/events/:id', authenticateAdmin, (req, res) => {
//     const eventId = req.params.id;
//     const { status } = req.body;

//     // Check if status is valid
//     if (status !== 'approved' && status !== 'rejected') {
//         return res.status(400).json({ message: 'Invalid status.' });
//     }

//     // Update the status of the event in the database
//     con.query('UPDATE events SET status = ? WHERE id = ?', [status, eventId], (err, result) => {
//         if (err) {
//             console.error('Error updating event status:', err);
//             res.status(500).json({ message: 'Internal server error.' });
//         } else {
//             res.status(200).json({ message: 'Event status updated successfully.' });
//         }
//     });
// });
  



// app.listen(3002, () => {
//     console.log('Running backend server on port 3002');
// });


const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
// Your middleware and routes setup



app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'test',
    port: 3306
});

app.post('/register', (req, res) => {
    const { email, firstName, lastName, password, country, zipCode, isOrganizer } = req.body;

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

        // Determine which table to insert the data based on the value of isOrganizer
        const tableName = isOrganizer ? 'event_organizers' : 'users';

        // Insert the data into the appropriate table
        con.query(`INSERT INTO ${tableName} (firstName, lastName, email, password, country, zipCode) VALUES (?, ?, ?, ?, ?, ?)`, 
            [firstName, lastName, email, hashedPassword, country, zipCode], (err, result) => {
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
        return res.status(400).send({ message: 'Email and password are required.' });
    }
    
    // Query the users table
    con.query('SELECT * FROM users WHERE email = ?', [email], (err, userRows) => {
        if (err) {
            console.error('Error querying users table:', err);
            return res.status(500).send({ message: 'Internal server error.' });
        }
        
        // If user is found in the users table
        if (userRows.length > 0) {
            const user = userRows[0];
            
            // Compare passwords
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return res.status(500).send({ message: 'Internal server error.' });
                }
                
                // If passwords match, return success response
                if (result) {
                    return res.status(200).send({
                        message: 'Login successful.',
                        name: user.firstName,
                        email: user.email,
                        zipCode: user.zipCode,
                        isOrganizer: false // Indicate that the user is not an organizer
                    });
                } else {
                    // If passwords do not match, return unauthorized response
                    return res.status(401).send({ message: 'Invalid email or password.' });
                }
            });
        } else {
            // Query the event_organizers table if user is not found in the users table
            con.query('SELECT * FROM event_organizers WHERE email = ?', [email], (err, organizerRows) => {
                if (err) {
                    console.error('Error querying event organizers table:', err);
                    return res.status(500).send({ message: 'Internal server error.' });
                }
                
                // If organizer is found in the event_organizers table
                if (organizerRows.length > 0) {
                    const organizer = organizerRows[0];
                    
                    // Compare passwords
                    bcrypt.compare(password, organizer.password, (err, result) => {
                        if (err) {
                            console.error('Error comparing passwords:', err);
                            return res.status(500).send({ message: 'Internal server error.' });
                        }
                        
                        // If passwords match, return success response
                        if (result) {
                            return res.status(200).send({
                                message: 'Login successful.',
                                name: organizer.firstName,
                                email: organizer.email,
                                zipCode: organizer.zipCode,
                                isOrganizer: true // Indicate that the user is an organizer
                            });
                        } else {
                            // If passwords do not match, return unauthorized response
                            return res.status(401).send({ message: 'Invalid email or password.' });
                        }
                    });
                } else {
                    // If user is not found in either tables, return unauthorized response
                    return res.status(401).send({ message: 'Invalid email or password.' });
                }
            });
        }
    });
});






app.post('/events', (req, res) => {
    const { name, description, date, ticketPrice, ticketsAvailable,venue } = req.body;

    // Check if any required field is missing
    if (!name || !description || !date || !ticketPrice || !ticketsAvailable ||!venue) {
        res.status(400).send({ message: 'All fields are required.' });
        return;
    }

    // Insert the event into the database
    const eventInsertQuery = 'INSERT INTO events (name, description, date, ticket_price,venue) VALUES (?, ?, ?, ?,?)'; // ticketsAvailable removed

    con.query(eventInsertQuery, [name, description, date, ticketPrice, venue], (err, result) => { // ticketsAvailable removed
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

app.post('/checkout/:eventId', (req, res) => {
    const eventId = req.params.eventId;
    const { user_id, ticketsBought, totalAmount, paymentMethod } = req.body;

    // Validate request body
    if (!user_id || !ticketsBought || !totalAmount || !paymentMethod) {
        res.status(400).send({ message: 'Missing required fields.' });
        return;
    }

    // Fetch event details from the database
    con.query('SELECT * FROM events WHERE id = ?', [eventId], (err, results) => {
        if (err) {
            console.error('Error fetching event details:', err);
            res.status(500).send({ message: 'Internal server error' });
            return;
        }
        if (results.length === 0) {
            res.status(404).send({ message: 'Event not found' });
            return;
        }

        const event = results[0];

        // Insert transaction data into the transactions table
        const transactionInsertQuery = 'INSERT INTO transactions (user_id, event_name, tickets_bought, total_amount, payment_method) VALUES (?, ?, ?, ?, ?)';
        con.query(transactionInsertQuery, [user_id, event.name, ticketsBought, totalAmount, paymentMethod], (err, result) => {
            if (err) {
                console.error('Error creating transaction:', err);
                res.status(500).send({ message: 'Error processing payment.' });
            } else {
                res.status(200).send({ message: 'Payment processed successfully.' });
            }
        });
    });
});

// Middleware function to authenticate admin users
const authenticateAdmin = (req, res, next) => {
    // Extract JWT from request headers
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided. Unauthorized.' });
    }

    // Verify JWT token
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token.' });
        }
        // Check if the decoded token contains admin role
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized access.' });
        }
        // If token is valid and user is admin, proceed to the next middleware
        req.adminId = decoded.adminId;
        next();
    });
};

// Route for admin login
app.post('/admin/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    con.query('SELECT * FROM admins WHERE email = ?', [email], (err, rows) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Internal server error.' });
        }
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }
        const admin = rows[0];
        bcrypt.compare(password, admin.password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ message: 'Internal server error.' });
            }
            if (result) {
                // Passwords match, login successful
                // Generate JWT token
                const token = jwt.sign({ adminId: admin.admin_id, role: 'admin' }, 'secretkey', { expiresIn: '0.01h' });
                return res.status(200).json({ message: 'Login successful.', token });
            } else {
                return res.status(401).json({ message: 'Invalid email or password.' });
            }
        });
    });
});

// Route for fetching events for admin dashboard
app.get('/admin/events', authenticateAdmin, (req, res) => {
    con.query('SELECT * FROM events', (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Route for updating event status (approval/rejection)
app.put('/admin/events/:id', authenticateAdmin, (req, res) => {
    const eventId = req.params.id;
    const { status } = req.body;

    // Check if status is valid
    if (status !== 'approved' && status !== 'rejected') {
        return res.status(400).json({ message: 'Invalid status.' });
    }

    // Update the status of the event in the database
    con.query('UPDATE events SET status = ? WHERE id = ?', [status, eventId], (err, result) => {
        if (err) {
            console.error('Error updating event status:', err);
            res.status(500).json({ message: 'Internal server error.' });
        } else {
            res.status(200).json({ message: 'Event status updated successfully.' });
        }
    });
});





app.listen(3002, () => {
    console.log('Running backend server on port 3002');
});