var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Express' });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: PSH });
  
});

module.exports = router;
