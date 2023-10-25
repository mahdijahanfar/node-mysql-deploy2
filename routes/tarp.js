var express = require('express');
var db = require("../dbconnection")
var router = express.Router();

router.get('/', function (req, res) {
    const query = `select * from tarp`
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
router.post("/", ({ body: { Status, rainfall, Air_humidity, Temperature, Soil_Moisture } }, res) => {
    const query = `insert into tarp(Status,rainfall,Air_humidity,Temperature,Soil_Moisture) values('${Status}','${rainfall}','${Air_humidity}','${Temperature}','${Soil_Moisture}') `
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