const express = require('express');
const app = express();
const lesson1Controllers = require('./controllers/lesson1')

app.get('/', lesson1Controllers.tatyRoute);
app.get('/sergio', lesson1Controllers.sergioRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server listenning at port ' + (process.env.port || port));