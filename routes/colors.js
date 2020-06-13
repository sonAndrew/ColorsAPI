const express = require('express');
const db = require('../database/query');

// GET ALL COLORS in colors TABLE
const getAllColors = (request, response, next) => {
    db.query('SELECT * FROM colors', (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).json(results.rows);
    })
}

module.exports = getAllColors;