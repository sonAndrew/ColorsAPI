const express = require('express'),
    db = require('../database/query');

// GET ALL COLORS in colors TABLE
const getAllColors = (request, response, next) => {
    db.query('SELECT * FROM colors ORDER BY id ASC', (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).json(results.rows);
    })
}

// CREATE A COLOR in colors TABLE
const createColor = (request, response, next) => {
    let { name, hex, rgb, web_safe, hsl, cmyk } = request.body;

    pool.query('INSERT INTO colors (name, hex, rgb, web_safe, hsl, cmyk) VALUES ($1, $2, $3, $4, $5, $6)', [name, hex, rgb, web_safe, hsl, cmyk], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).send(`Color added with ID: ${results.insertId}`)
    })
}

// UPDATE A COLOR in colors TABLE
const updateColor = (request, response, next) => {
    let id  = parseInt(request.params.id);
    let { name, hex, rgb, web_safe, hsl, cmyk } = request.body;

    pool.query('UPDATE colors SET name = $1, hex = $2, rgb = $3, web_safe = $4, hsl = $5, cmyk = $6 WHERE id = $7 VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, hex, rgb, web_safe, hsl, cmyk, id], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).send(`Color modified with ID: ${id}`)
    })
}

// DELETE A COLOR in colors TABLE
const deleteColor = (request, response, next) => {
    let id  = parseInt(request.params.id);

    pool.query('DELETE FROM colors WHERE id = $1', [id], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).send(`Color deleted with ID: ${id}`)
    })
}

module.exports = getAllColors;