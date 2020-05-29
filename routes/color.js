const db = require('../database/query');

const getColorById = (request, response) => {
    let id = parseInt(request.params.id)

    db.query('SELECT * FROM colors WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = getColorById;