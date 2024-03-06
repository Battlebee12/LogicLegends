const express = require('express');
const router = express.Router();
const { pool } = require('./database'); // Import database connection pool

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error occurred while logging in.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

        // User found, send success response
        res.status(200).json({ success: true, message: 'User logged in successfully.', user: results[0] });
    });
});

module.exports = router;
