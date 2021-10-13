const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

let pool

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_95',
    password: '0000',
    port: '5432',
  });
}

// pool.query('SELECT * from category', (err, res) => {
//     console.log(JSON.stringify(res.rows));
//     pool.end();
// });

module.exports = pool;

// postgres://khfzlhxoepbske:99555b7187c1d7a1c8786afc1a258c2ff316c98751601af6021535ae0aaa1615@ec2-54-204-148-110.compute-1.amazonaws.com:5432/d9qfhqgum1484d