const { Pool } = require('pg'),
    pool = new Pool({
        user: 'postgres',
        post: '5432',
        host: 'localhost',
        database: 'test',
        password: 'password',
    });

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now();
        return pool.query(text, params, (error, response) => {
            const duration = Date.now() - start;
            console.log('executed query', { text, duration, rows: response, rowCount });
            callback(error, response);
        })
    }
}