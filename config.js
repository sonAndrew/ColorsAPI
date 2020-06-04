require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = "postgres://lcwzeiyamnfwup:39d3a89ac647de577d84f75ef9ea9a94e02e9447c8ce59f239c043bfa562a41b@ec2-52-7-39-178.compute-1.amazonaws.com:5432/d172toiumabb6t"

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    isProduction
  }
});

pool.connect();

module.exports = { pool }
