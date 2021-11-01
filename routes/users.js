var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('哈哈哈');
});

router.get('/xxx', function(req, res, next) {
  res.send('xxx');
});


module.exports = router;
