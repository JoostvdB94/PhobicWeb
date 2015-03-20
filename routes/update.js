var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'updates hier', body: req.body });
});

module.exports = router;