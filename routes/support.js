var express = require('express');
var db = require("../dbconnection")
var router = express.Router();

router.post("/", ({ body: { title, text, subject } }, res) => {
    const query = `insert into tickets(title,text,subject) values('${title}','${text}','${subject}') `
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