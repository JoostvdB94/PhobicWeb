var express = require('express');
var router = express.Router();
var app = express();

var mongoose = require('mongoose');
var Phobia = mongoose.model('phobia');

////////////////////////////////////phobia/////////////////////////////////////////////////////
router.get("/phobia", function (req, res, next) {
      Phobia.find( function ( err, phobia, count ){
    	res.json(phobia
	     		  );
  });
});

router.get("/phobia/:id", function (req, res, next) {
    Phobia.findById( req.params.id, function ( err, phobia ){
    	res.json({ _id: phobia._id,
	     			name: phobia.name,
	     			errors: err
	     		  });
  	});
});

router.post("/phobia", function (req, res, next) {
	new Phobia({
	    name    : req.body.name
	  }).save( function( err, phobia, count ){
	     res.json({ _id: phobia._id,
	     			name: phobia.name,
	     			errors: err
	     		  });
	  });
});

router.put("/phobia/:id", function (req, res, next) {
    Phobia.findById( req.params.id, function ( err, phobia ){
	    phobia.name    = req.body.name;
	    phobia.save( function ( err, phobia, count ){
	        res.json({ _id: phobia._id,
	     			name: phobia.name,
	     			errors: err
	     		  });
	    });
	});
});

router.delete("/phobia/:id", function (req, res, next) {
      Phobia.findById( req.params.id, function ( err, phobia ){
    phobia.remove( function ( err, phobia ){
      res.json({ _id: phobia._id,
	     			name: phobia.name
	     		  });
    });
  });
});
//////////////////////////////////////endphobia/////////////////////////////////////////////////

//////////////////////////////////////relaxationmethod//////////////////////////////////////////
router.get("/phobia/:id/relaxationmethod", function (req, res, next) {
      res.render('index', { title: 'overview relaxation', body: req.body });
});

router.post("/phobia/:id/relaxationmethod", function (req, res, next) {
      res.render('index', { title: req.params.name, body: "post"});
});

router.post("/phobia/:id/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});

router.get("/phobia/:id/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});

router.put("/phobia/:id/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});

router.delete("/phobia/:id/relaxationmethod/:id", function (req, res, next) {
      res.render('index', { title: req.params.name + " " + req.params.id, body: req.params.id });
});
//////////////////////////////////////endrelaxationmethod///////////////////////////////////////
module.exports = router;
