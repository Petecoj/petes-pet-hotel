const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');



router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "hotelpets" JOIN "hotelowners" ON "hotelpets".owner_id = "hotelowners".id;`)
	

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
    pool.query(`INSERT INTO "hotelpets" ("name", "breed","color", "owner_id") VALUES ($1,$2,$3,$4);`, [pet.name, pet.breed,pet.color,pet.owner_id] )
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })

});


















router.get('/', (req, res) => {

    pool.query('SELECT * FROM "hotelowners"')
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })

});


module.exports = router;