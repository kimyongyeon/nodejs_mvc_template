var express = require('express');
var router = express.Router();

/* GET users listing. */
// index.js에도 /users가 있으면 해당 API는 인식하지 않는다.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
