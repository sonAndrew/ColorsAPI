const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')
const { body, check } = require('express-validator')


const server = express();
const PORT = process.env.PORT || 8080;

const isProduction = process.env.NODE_ENV === 'production'
const origin = {
  origin: isProduction ? 'ec2-52-7-39-178.compute-1.amazonaws.com' : '*',
}

// REQUEST LIMIT
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // 5 requests,
  })
const postLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 1,
  })

const allColors = require('./routes/colors'),
    color = require('./routes/color'),
    web_safe = require('./routes/web_safe'),
    allPalettes = require('./routes/palettes'),
    palette = require('./routes/palette');

// MIDDLEWARE
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true, }));
server.use(cors(origin));
server.use(compression())
server.use(helmet())
server.use(limiter)

server.use(express.static("public"));

// ROUTES
server.get('/', (request, response) => {
    response.send('Home Page')
})

server.get('/colors/all', allColors);               // GET ALL COLORS

server.get('/colors/:id', color.getColorById);      // GET COLOR BY ID
server.post('/colors', postLimiter, color.createColor);          // CREATE COLOR
server.put('/colors/:id', color.updateColor);       // UPDATE COLOR BY ID
server.delete('/colors/:id', color.deleteColor);    // DELETE COLOR BY ID

server.get('/web-safe', web_safe);                  // GET WEB SAFE COLORS

server.get('/palettes/all', allPalettes);                  // GET ALL PALETTES

server.get('/palettes/:id', palette.getPaletteById);      // GET Palette BY ID
server.post('/palettes', postLimiter, palette.createPalette);          // CREATE Palette
server.put('/palettes/:id', palette.updatePalette);       // UPDATE Palette BY ID
server.delete('/palettes/:id', palette.deletePalette);    // DELETE Palette BY ID

server.listen(PORT, () => console.log(`Server started on: ${PORT}.`))