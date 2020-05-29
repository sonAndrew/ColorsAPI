const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://www.colorsapi.com';

const allColors = require('./routes/colors');
const color = require('./routes/color');

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

server.get('/colors/all', allColors);
server.get('/colors/:id', color.getColorById);
server.get('/colors/:id', color.createColor);
server.get('/colors/:id', color.updateColor);
server.get('/colors/:id', color.deleteColor);

server.listen(port, () => console.log(`Server started on port: ${port}.`))