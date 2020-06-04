// const { Pool } = require('pg'),
//     pool = new Pool(
//         {
//             user: 'lcwzeiyamnfwup',
//             host: 'ec2-52-7-39-178.compute-1.amazonaws.com',
//             password: '39d3a89ac647de577d84f75ef9ea9a94e02e9447c8ce59f239c043bfa562a41b',
//             database: 'd172toiumabb6t',
//             post: '5432'
//         }
//     );

const { pool } = require('../config');

    module.exports = {
        query: (text, params, callback) => {
          const start = Date.now()
          return pool.query(text, params, (err, res) => {
            const duration = Date.now() - start
            console.log('executed query', { text, duration, rows: res.rowCount })
            callback(err, res)
          })
        },
        getClient: (callback) => {
          pool.connect((err, client, done) => {
            const query = client.query
            // monkey patch the query method to keep track of the last query executed
            client.query = (...args) => {
              client.lastQuery = args
              return query.apply(client, args)
            }
            // set a timeout of 5 seconds, after which we will log this client's last query
            const timeout = setTimeout(() => {
              console.error('A client has been checked out for more than 5 seconds!')
              console.error(`The last executed query on this client was: ${client.lastQuery}`)
            }, 5000)
            const release = (err) => {
              // call the actual 'done' method, returning this client to the pool
              done(err)
              // clear our timeout
              clearTimeout(timeout)
              // set the query method back to its old un-monkey-patched version
              client.query = query
            }
            callback(err, client, release)
          })
        }
    }