const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    pool.query(`SELECT "p".id as "pet_id",
                       "p".name, "p".breed, "p".color,
                       "p".owner_id, "p".date, "p".checked_in,
                       "o".owner_name
                        FROM "hotelpets" AS "p" 
                        JOIN "hotelowners" AS "o" ON "o".id = "p".owner_id  ;`)
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
    let pet = req.body;
    pool.query(`INSERT INTO "hotelpets" ("name", "breed","color", "owner_id") VALUES ($1,$2,$3,$4);`, [pet.name, pet.breed, pet.color, pet.owner_id])
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

router.delete('/:id', (req, res) => {
    console.log('delete from hotelpets', req.params);
    const petId = req.params.id;
    pool.query('DELETE FROM "hotelpets" WHERE "id" = $1;', [petId])
        .then((result) => {
            console.log('made it to delete');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('', error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);

    pool.query(`UPDATE "hotelpets" SET "checked_in" = NOT "checked_in" WHERE "id"=$1;`, [req.params.id])
        .then((result) => {
            console.log('made it to put');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error on put', error);
            res.sendStatus(500);
        })
});

module.exports = router;