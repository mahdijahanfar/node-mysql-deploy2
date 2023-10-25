var express = require('express');
var router = express.Router();
const db = require("./../dbconnection")

router.post('/', function ({ body, body: { email, password, name } }, res) {
  console.log(body);
  // const query = `INSERT INTO users(password,email,name) values('${password}','${email}','${name}') `
  const query = `INSERT into users(password,email,name) values('${password}','${email}','${name}')`
  db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        message: err
      })
      return;
    }
    if (results) {
      console.log(results);
    }
    if (results.insertId) {
      res.json({ id: results.insertId })
    } else {
      console.log("aaaaa");
      res.json({})
    }
  })
});
module.exports = router;
