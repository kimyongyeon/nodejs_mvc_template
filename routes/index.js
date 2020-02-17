var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sample', function (req, res, next) {
  res.redirect('sample.html');    //main page로 redirect
});
router.get('/', function (req, res, next) {
  res.redirect('index.html');    //index page로 redirect
});
router.get('/login', function (req, res, next) {
  res.redirect('login.html');    //login page로 redirect
});
router.get('/movie/list', function (req, res, next) {
  res.render('movList.html', { title: 'movie list' });
});

router.get('/*.html', function (req, res, next) {
  var url = req.url.substring(1, req.url.indexOf('.html'));
  res.render(url, { title: '프로젝트', bodyId: url, js: url + '.js' });
});

// 오버라이트 된다. 
// router.get('/users', function (req, res, next) {
//   res.send('/ => /users');
// });

module.exports = router;
