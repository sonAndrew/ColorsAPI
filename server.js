const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://www.colorsapi.com';

const allColors = require('./routes/colors'),
    color = require('./routes/color'),
    web_safe = require('./routes/web_safe');

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

server.get('/colors/all', allColors);
server.get('/colors/:id', color.getColorById);
server.get('/colors', color.createColor);
server.get('/colors/:id', color.updateColor);
server.get('/colors/:id', color.deleteColor);
server.get('/web-safe', web_safe);

server.listen(port, () => console.log(`Server started on port: ${port}.`))