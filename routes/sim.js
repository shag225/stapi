var express = require('express');
var router = express.Router();
var os = require("os");

/* GET users listing. */
router.get('/quota', function(req, res, next) {
  var message = process.env.MESSAGE || "Have a blast learning Docker!";
  res.send({ message: message, quota: "3001"});
});

module.exports = router;
