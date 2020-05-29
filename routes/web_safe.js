const express = require('express'),
    db = require('../database/query');

// GET ALL COLORS in colors TABLE
const getWebSafeColors = (request, response, next) => {
    db.query('SELECT * FROM web_safe ORDER BY color_id ASC', (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).json(results.rows);
    })
}

module.exports = getWebSafeColors;