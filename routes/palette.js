const db = require('../database/query');

const getPaletteById = (request, response) => {
    let id = parseInt(request.params.id)

    db.query('SELECT * FROM palettes WHERE id = $1', [id], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).json(results.rows)
    })
}

// CREATE A Palette in Palettes TABLE
const createPalette = (request, response, next) => {
    let { name, hex, rgb, web_safe, hsl, cmyk } = request.body;

    pool.query('INSERT INTO palettes (name, hex, rgb, web_safe, hsl, cmyk) VALUES ($1, $2, $3, $4, $5, $6)', [name, hex, rgb, web_safe, hsl, cmyk], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).send(`Palette added with ID: ${results.insertId}`)
    })
}

// UPDATE A Palette in Palettes TABLE
const updatePalette = (request, response, next) => {
    let id  = parseInt(request.params.id);
    let { name, hex, rgb, web_safe, hsl, cmyk } = request.body;

    pool.query('UPDATE palettes SET name = $1, hex = $2, rgb = $3, web_safe = $4, hsl = $5, cmyk = $6 WHERE id = $7 VALUES ($1, $2, $3, $4, $5, $6, $7)', [name, hex, rgb, web_safe, hsl, cmyk, id], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).send(`Palette modified with ID: ${id}`)
    })
}

// DELETE A Palette in Palettes TABLE
const deletePalette = (request, response, next) => {
    let id  = parseInt(request.params.id);

    pool.query('DELETE FROM palettes WHERE id = $1', [id], (error, results) => {
        if(error) {
            return next(error)
        }
        response.status(200).send(`Palette deleted with ID: ${id}`)
    })
}

module.exports = {
    getPaletteById,
    createPalette,
    updatePalette,
    deletePalette
}