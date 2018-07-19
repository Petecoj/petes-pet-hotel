const pg = require('pg');
const Pool = pg.Pool

const pool = new Pool(config);


pool.on('connect', () => {
    console.log('PG connected to postgresql');

})
pool.on('error', (error) => {
    console.log('pg error', error);

})

module.exports = pool