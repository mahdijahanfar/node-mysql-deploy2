var express = require('express');
var db = require("../dbconnection")
var router = express.Router();

router.get('/', function (req, res) {
    const query = `select * from farm_state`
    db.query(query, (err, results,) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        }
        if (results.length) {
            res.json(results)
        } else {
            res.json({})
        }
    });
});
router.post("/", ({ body: { date, time, air_temperature, air_humidity, soil_humidity, soil_temperature, rainfall } }, res) => {
    const query = `insert into farm_state(date, time, air_temperature, air_humidity, soil_humidity,soil_temperature,rainfall) values(${date}, ${time}, ${air_temperature}, ${air_humidity}, ${soil_humidity},${soil_temperature},${rainfall}) `
    db.query(query, (err, results) => {
        if (err) {
            res.status(400).json({
                message: err
            })
            return;
        }
        if (results.insertId) {
            res.json({ id: results.insertId })
        } else {
            res.json({})
        }
    })
})
module.exports = router;