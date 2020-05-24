const express = require('express'),
    bodyParser = require('body-parser'),
    server = express(),
    port = 3000,
    host = 'https://www.colorsapi.com';

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

server.listen(port, () => console.log(`Server started on port: ${port}.`))