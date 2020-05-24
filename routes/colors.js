const express = require('express'),
    db = require('../database/query');

const getAllColors = (request, response) => {
    db.query('SELECT * FROM colors ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error 
        }
        response.status(200).json(results.rows);
    })
}

module.exports = getAllColors;