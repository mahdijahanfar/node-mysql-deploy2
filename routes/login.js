var express = require('express');
var router = express.Router();
var db = require("../dbconnection")

router.post('/', function ({ body: { password, name } }, res) {
  const query = `select * from users where password="${password}" and name="${name}"`
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
      res.json({ message: "کاربری به این عنوان پیدا نشد" })
    }
  });

  // user.login({ password, name }, function (err, results) {
  //   // console.log(results);
  //   if (err) {
  //     res.status(400).json({
  //       message: err
  //     });
  //     return;
  //   }
  //   if (results.length) {
  //     res.json(results)
  //   } else {
  //     res.json({})
  //   }
  // });
});
module.exports = router;











//var database = require('../dbconnection');
//
//router.get('/login', function (request, res, next) {
//
//  var user_email_address = request.body.email;
//
//  var user_password = request.body.password;
//
//  if (user_email_address && user_password) {
//    query = `
//        SELECT * FROM user 
//        WHERE email = "${user_email_address}"
//        `;
//
//    database.query(query, function (error, data) {
//
//      if (data.length > 0) {
//        for (var count = 0; count < data.length; count++) {
//          if (data[count].user_password == user_password) {
//            request.session.user_id = data[count].user_id;
//
//            res.redirect("/");
//          }
//          else {
//            res.send('Incorrect Password');
//          }
//        }
//      }
//      else {
//        res.send('Incorrect Email Address');
//      }
//      res.end();
//    });
//  }
//  else {
//    res.send('Please Enter Email Address and Password Details');
//    res.end();
//  }
//
//});
//
//router.get('/logout', function (request, res, next) {
//
//  request.session.destroy();
//
//  res.redirect("/");
//
//});
//
//module.exports = router;