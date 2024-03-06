const express = require('express');
const router = express.Router();
const { pool } = require('./database'); // Import database connection pool

router.post('/signup', (req, res) => {
    const { name, email, password, age } = req.body;

    pool.query('INSERT INTO users (name, email, password, age) VALUES (?, ?, ?, ?)', [name, email, password, age], (error, results, fields) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error occurred while signing up.' });
        }

        res.status(200).json({ success: true, message: 'User signed up successfully.' });
    });
});

module.exports = router;
