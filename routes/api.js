var express = require('express');
var router = express.Router();
var app = express();


////////////////////////////////////phobia/////////////////////////////////////////////////////
router.get("/phobia", function (req, res, next) {
      res.render('index', { title: 'overview list', body: req.body });
});

router.get("/phobia/:name", function (req, res, next) {
      res.render('index', { title: req.params.name, body: req.params.name });
});

router.post("/phobia/:name", function (req, res, next) {
      res.render('index', { title: req.params.name, body: req.params.name });
});

router.put("/phobia/:name", function (req, res, next) {
      res.render('index', { title: req.params.name, body: req.params.name });
});

router.delete("/phobia/:name", function (req, res, next) {
      res.render('index', { title: req.params.name, body: req.params.name });
});
//////////////////////////////////////endphobia/////////////////////////////////////////////////

//////////////////////////////////////relaxationmethod//////////////////////////////////////////
router.get("/phobia/:name/relaxationmethod", function (req, res, next) {
      res.render('index', { title: 'overview relaxation', body: req.body });
});

router.post("/phobia/:name/relaxationmethod", function (req, res, next) {
      res.render('index', { title: req.params.name, body: "post"});
});

router.post("/phobia/:name/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});

router.get("/phobia/:name/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});

router.put("/phobia/:name/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});

router.delete("/phobia/:name/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});
//////////////////////////////////////endrelaxationmethod///////////////////////////////////////
module.exports = router;
