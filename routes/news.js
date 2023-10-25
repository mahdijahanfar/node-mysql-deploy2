var express = require('express');
var router = express.Router();
const db = require("../dbconnection")

router.get('/', function (req, res) {
    const query = `select * from news`
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
module.exports = router;