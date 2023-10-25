var express = require('express');
var { readFile, writeFile } = require("fs")
var router = express.Router();

router.get('/', function (req, res,) {
    readFile("public/texts/notif.txt", (err, data) => {
        if (err) {
            res.status(400).json({ message: err })
        } else {
            const packet = data.toString()
            if (packet.length) {
                res.json({ packet })

            } else {
                res.json({})
            }
        }
    })

});
router.post("/", ({ body: { notif } }, res) => {
    console.log(notif);
    writeFile("public/texts/notif.txt", notif, (err) => {
        err ? res.status(400).json({ message: err }) :
            res.json("data recived successfully")
    })




    // db.query(query, (err, results) => {
    //     if (err) {
    //         res.status(400).json({
    //             message: err
    //         })
    //         return;
    //     }
    //     if (results.insertId) {
    //         res.json({ id: results.insertId })
    //     } else {
    //         res.json({})
    //     }
    // })
})
module.exports = router;