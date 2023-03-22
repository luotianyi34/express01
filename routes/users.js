var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/ul",function (req, res) {
  res.render("user-list");
})

module.exports = router;
