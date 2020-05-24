const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://www.colorsapi.com';

const allColors = require('./routes/colors');

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

server.get('/colors/all', allColors)

server.listen(port, () => console.log(`Server started on port: ${port}.`))