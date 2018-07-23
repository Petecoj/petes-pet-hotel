const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    pool.query(`SELECT "owner_name", "hotelowners".id, count("owner_id") AS "petcount" 
                FROM "hotelowners" 
                LEFT OUTER JOIN "hotelpets" 
                ON "hotelowners".id = "hotelpets".owner_id 
                GROUP BY "hotelowners".owner_name, "hotelowners".id;`)

        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.sendStatus(500);
        })

});

router.post('/', (req, res) => {
    pool.query('INSERT INTO "hotelowners" ("owner_name") VALUES($1)',[req.body.name])
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

router.delete('/:id', (req, res) => {
    const ownerId = req.params.id;
    pool.query(`DELETE FROM "hotelowners" WHERE "id" = $1;`, [ownerId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
});


module.exports = router;