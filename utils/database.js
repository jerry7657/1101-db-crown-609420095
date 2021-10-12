const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : `postgresql://postgres:0000@localhost:5432/crown_95`
})

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'crown_95',
//     password: '0000',
//     port: 5432,
// })

pool.query('SELECT * from category', (err, res) => {
    console.log(JSON.stringify(res.rows));
    pool.end();
});

module.exports = pool;