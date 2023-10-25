var express = require('express');
var db = require("../dbconnection")
var router = express.Router();

router.post("/", ({ body: { smart_irrigation_method, central_hardware_serial, product_label_password } }, res) => {
    const query = `insert into setting_form(smart_irrigation_method,central_hardware_serial,product_label_password) values('${smart_irrigation_method}','${central_hardware_serial}','${product_label_password}') `
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