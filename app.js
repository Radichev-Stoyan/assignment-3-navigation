const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const homeRoute = require('./routes/home');
const usersRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoute);
app.use(homeRoute);

app.listen(3030);