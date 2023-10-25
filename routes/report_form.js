var express = require('express');
var db = require("../dbconnection")
var router = express.Router();

router.post("/", ({ body, body: { start_date, finish_date, report_type } }, res) => {
    const query = `insert into report_form(start_date,finish_date,report_type) values('${start_date}','${finish_date}','${report_type}') `
    db.query(query, (err, results) => {
        console.log(body);
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