const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://www.colorsapi.com';

const allColors = require('./routes/colors');
const colorId = require('./routes/color');

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

server.get('/colors/all', allColors);
server.get('/colors/:id', colorId);

server.listen(port, () => console.log(`Server started on port: ${port}.`))