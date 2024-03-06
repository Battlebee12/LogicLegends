const express = require('express');
const bodyParser = require('body-parser');
const signup = require('./signup');
const login = require('./login');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/signup', signup);
app.use('/login', login);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
