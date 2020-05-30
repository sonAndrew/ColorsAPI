const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://pure-chamber-88568.herokuapp.com/';

const allColors = require('./routes/colors'),
    color = require('./routes/color'),
    web_safe = require('./routes/web_safe'),
    allPalettes = require('./routes/palettes'),
    palette = require('./routes/palette');

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

server.get('/palettes/all', allPalettes);                  // GET ALL PALETTES

server.get('/palettes/:id', palette.getPaletteById);      // GET Palette BY ID
server.post('/palettes', palette.createPalette);          // CREATE Palette
server.put('/palettes/:id', palette.updatePalette);       // UPDATE Palette BY ID
server.delete('/palettes/:id', palette.deletePalette);    // DELETE Palette BY ID

server.listen(host, () => console.log(`Server started on host: ${host}.`))