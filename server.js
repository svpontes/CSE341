const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
    res.send("hello, world!");
});

const port = 3000;
//const lhost = 
app.listen(process.env.port || port);
console.log('Web server listenning at port ' + (process.env.port || port));