const express = require('express');

const app = express();

const server = app.listen(3000, ()=> {
    console.log('web server started!');
});

module.exports = server;