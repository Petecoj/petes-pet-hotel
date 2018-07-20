const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    pool.query('SELECT * FROM "hotelowners"')

        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })

});

router.post('/', (req, res) => {
    pool.query('INSERT INTO "hotelowners" ("owner_name") VALUES($1)',[req.body.name])
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});


module.exports = router;