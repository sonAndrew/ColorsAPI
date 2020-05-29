const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://www.colorsapi.com';

const allColors = require('./routes/colors'),
    color = require('./routes/color'),
    web_safe = require('./routes/web_safe'),
    allPalettes = require('./routes/palettes');

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


server.get('/colors/all', allColors);               // GET ALL COLORS

server.get('/colors/:id', color.getColorById);      // GET COLOR BY ID
server.post('/colors', color.createColor);          // CREATE COLOR
server.put('/colors/:id', color.updateColor);       // UPDATE COLOR BY ID
server.delete('/colors/:id', color.deleteColor);    // DELETE COLOR BY ID

server.get('/web-safe', web_safe);                  // GET WEB SAFE COLORS

server.get('/palettes', allPalettes);                  // GET ALL PALETTES

server.listen(port, () => console.log(`Server started on port: ${port}.`))