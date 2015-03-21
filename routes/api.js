var express = require('express');
var router = express.Router();
var app = express();

var mongoose = require('mongoose');
var Phobia = mongoose.model('phobia');
var Relaxationmethod = mongoose.model('relaxationmethod');

////////////////////////////////////phobia/////////////////////////////////////////////////////
router.get("/phobia", function (req, res, next) {
      Phobia.find( function ( err, phobia, count ){
    	res.json(phobia);
  }).populate('relaxationmethods');
});

router.get("/phobia/:id", function (req, res, next) {
    Phobia.findById( req.params.id, function ( err, phobia ){
    	res.json(phobia);
  	});
});

router.post("/phobia", function (req, res, next) {
	new Phobia({
	    name    : req.body.name
	  }).save( function( err, phobia, count ){
	     res.json(phobia);
	  });
});

router.put("/phobia/:id", function (req, res, next) {
    Phobia.findById( req.params.id, function ( err, phobia ){
	    phobia.name    = req.body.name;
	    phobia.save( function ( err, phobia, count ){
	        res.json(phobia);
	    });
	});
});

router.delete("/phobia/:id", function (req, res, next) {
      Phobia.findById( req.params.id, function ( err, phobia ){
	    phobia.remove( function ( err, phobia ){
	      res.json(phobia);
	    });
  });
});
//////////////////////////////////////endphobia/////////////////////////////////////////////////

//////////////////////////////////////relaxationmethod//////////////////////////////////////////
router.get("/phobia/:id/relaxationmethod", function (req, res, next) {
      Relaxationmethod.find( function ( err, relaxationmethod, count ){
    	res.json(relaxationmethod);
  }).populate('relaxationmethod');
});

router.post("/phobia/:id/relaxationmethod", function (req, res, next) {
      var relax = new Relaxationmethod({
	    name    		: req.body.name,
	    activities 		: req.body.activities,
	    phobia 			: req.params.id,
	    effectiveness 	: req.body.effectiveness,
	    times_used 		: req.body.times_used
	  });

	  relax.save( function( err, phobia, count ){
	  	console.log(err);
	     res.json(phobia);
	  });

	  Phobia.findById( req.params.id, function ( err, phobia ){
	    phobia.relaxationmethods.push(relax);
	    phobia.save( function ( err, phobia, count ){
	    });
	});
});

router.get("/phobia/:id/relaxationmethod/:relaxid", function (req, res, next) {
      Relaxationmethod.findById( req.params.relaxid, function ( err, relaxationmethod ){
    	res.json(relaxationmethod);
  	});
});

router.put("/phobia/:id/relaxationmethod/:relaxid", function (req, res, next) {
      Relaxationmethod.findById( req.params.relaxid, function ( err, relaxationmethod ){
	    relaxationmethod.name    		= req.body.name;
	    relaxationmethod.activities 		= req.body.activities;
	    relaxationmethod.phobia 			= req.params.id;
	    relaxationmethod.effectiveness 	= req.body.effectiveness;
	    relaxationmethod.times_used 		= req.body.times_used;
	    relaxationmethod.save( function ( err, relaxationmethod, count ){
	        res.json(relaxationmethod);
	    });
	});
});

router.delete("/phobia/:id/relaxationmethod/:relaxid", function (req, res, next) {
      Relaxationmethod.findById( req.params.relaxid, function ( err, relaxationmethod ){
	    relaxationmethod.remove( function ( err, relaxationmethod ){
	      res.json(relaxationmethod);
	    });
  });
});
//////////////////////////////////////endrelaxationmethod///////////////////////////////////////
module.exports = router;
