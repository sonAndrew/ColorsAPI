const express = require('express'),
    db = require('../database/query');

// GET ALL COLORS in colors TABLE
const getAllPalettes = (request, response, next) => {
    db.query('SELECT * FROM palettes ORDER BY id ASC', (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).json(results.rows);
    })
}

module.exports = getAllPalettes;