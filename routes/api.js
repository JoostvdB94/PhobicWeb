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


});
router.get('/data', function(req, res, next) {
        res.status(200).set('Content-Type', 'application/json');
        res.json([{
            "duration": 1000,
            "value": 65
        }, {
            "duration": 4000,
            "value": 65
        }, {
            "duration": 7000,
            "value": 65
        }, {
            "duration": 10000,
            "value": 65
        }, {
            "duration": 13000,
            "value": 65
        }, {
            "duration": 16000,
            "value": 66
        }, {
            "duration": 18000,
            "value": 67
        }, {
            "duration": 21000,
            "value": 67
        }, {
            "duration": 22000,
            "value": 68
        }, {
            "duration": 23000,
            "value": 69
        }, {
            "duration": 25000,
            "value": 70
        }, {
            "duration": 26000,
            "value": 71
        }, {
            "duration": 27000,
            "value": 72
        }, {
            "duration": 30000,
            "value": 72
        }, {
            "duration": 32000,
            "value": 73
        }, {
            "duration": 35000,
            "value": 73
        }, {
            "duration": 38000,
            "value": 73
        }, {
            "duration": 39000,
            "value": 74
        }, {
            "duration": 40000,
            "value": 74
        }, {
            "duration": 43000,
            "value": 74
        }, {
            "duration": 45000,
            "value": 75
        }, {
            "duration": 48000,
            "value": 75
        }, {
            "duration": 49000,
            "value": 76
        }, {
            "duration": 50000,
            "value": 77
        }, {
            "duration": 51000,
            "value": 82
        }, {
            "duration": 52000,
            "value": 82
        }, {
            "duration": 55000,
            "value": 82
        }, {
            "duration": 56000,
            "value": 82
        }, {
            "duration": 57000,
            "value": 81
        }, {
            "duration": 60000,
            "value": 81
        }, {
            "duration": 63000,
            "value": 81
        }, {
            "duration": 66000,
            "value": 80
        }, {
            "duration": 68000,
            "value": 79
        }, {
            "duration": 71000,
            "value": 79
        }, {
            "duration": 74000,
            "value": 79
        }, {
            "duration": 76000,
            "value": 78
        }, {
            "duration": 78000,
            "value": 77
        }, {
            "duration": 79000,
            "value": 76
        }, {
            "duration": 81000,
            "value": 75
        }, {
            "duration": 84000,
            "value": 75
        }, {
            "duration": 87000,
            "value": 75
        }, {
            "duration": 89000,
            "value": 76
        }, {
            "duration": 91000,
            "value": 77
        }, {
            "duration": 92000,
            "value": 78
        }, {
            "duration": 94000,
            "value": 78
        }, {
            "duration": 97000,
            "value": 79
        }, {
            "duration": 98000,
            "value": 80
        }, {
            "duration": 99000,
            "value": 82
        }, {
            "duration": 102000,
            "value": 82
        }, {
            "duration": 105000,
            "value": 83
        }, {
            "duration": 106000,
            "value": 84
        }, {
            "duration": 107000,
            "value": 85
        }, {
            "duration": 108000,
            "value": 87
        }, {
            "duration": 109000,
            "value": 89
        }, {
            "duration": 110000,
            "value": 90
        }, {
            "duration": 111000,
            "value": 92
        }, {
            "duration": 114000,
            "value": 92
        }, {
            "duration": 116000,
            "value": 93
        }, {
            "duration": 117000,
            "value": 94
        }, {
            "duration": 118000,
            "value": 95
        }, {
            "duration": 119000,
            "value": 96
        }, {
            "duration": 121000,
            "value": 97
        }, {
            "duration": 124000,
            "value": 97
        }, {
            "duration": 126000,
            "value": 98
        }, {
            "duration": 127000,
            "value": 99
        }, {
            "duration": 128000,
            "value": 98
        }, {
            "duration": 129000,
            "value": 97
        }, {
            "duration": 130000,
            "value": 96
        }, {
            "duration": 133000,
            "value": 97
        }, {
            "duration": 135000,
            "value": 98
        }, {
            "duration": 138000,
            "value": 98
        }, {
            "duration": 139000,
            "value": 99
        }, {
            "duration": 140000,
            "value": 98
        }, {
            "duration": 143000,
            "value": 98
        }, {
            "duration": 146000,
            "value": 98
        }, {
            "duration": 149000,
            "value": 98
        }, {
            "duration": 150000,
            "value": 100
        }, {
            "duration": 153000,
            "value": 100
        }, {
            "duration": 155000,
            "value": 101
        }, {
            "duration": 156000,
            "value": 102
        }, {
            "duration": 157000,
            "value": 103
        }, {
            "duration": 158000,
            "value": 104
        }, {
            "duration": 159000,
            "value": 103
        }, {
            "duration": 161000,
            "value": 102
        }, {
            "duration": 162000,
            "value": 101
        }, {
            "duration": 165000,
            "value": 101
        }, {
            "duration": 168000,
            "value": 100
        }, {
            "duration": 171000,
            "value": 100
        }, {
            "duration": 172000,
            "value": 99
        }, {
            "duration": 175000,
            "value": 99
        }, {
            "duration": 178000,
            "value": 99
        }, {
            "duration": 181000,
            "value": 99
        }, {
            "duration": 184000,
            "value": 99
        }, {
            "duration": 187000,
            "value": 99
        }, {
            "duration": 190000,
            "value": 98
        }, {
            "duration": 192000,
            "value": 97
        }, {
            "duration": 195000,
            "value": 97
        }, {
            "duration": 198000,
            "value": 97
        }, {
            "duration": 199000,
            "value": 95
        }, {
            "duration": 200000,
            "value": 94
        }, {
            "duration": 201000,
            "value": 93
        }, {
            "duration": 202000,
            "value": 92
        }, {
            "duration": 205000,
            "value": 93
        }, {
            "duration": 207000,
            "value": 94
        }, {
            "duration": 208000,
            "value": 93
        }, {
            "duration": 211000,
            "value": 93
        }, {
            "duration": 213000,
            "value": 94
        }, {
            "duration": 215000,
            "value": 95
        }, {
            "duration": 216000,
            "value": 96
        }, {
            "duration": 219000,
            "value": 97
        }, {
            "duration": 221000,
            "value": 98
        }, {
            "duration": 224000,
            "value": 97
        }, {
            "duration": 227000,
            "value": 97
        }, {
            "duration": 228000,
            "value": 96
        }, {
            "duration": 231000,
            "value": 96
        }, {
            "duration": 233000,
            "value": 95
        }, {
            "duration": 236000,
            "value": 95
        }, {
            "duration": 239000,
            "value": 95
        }, {
            "duration": 242000,
            "value": 95
        }, {
            "duration": 245000,
            "value": 94
        }, {
            "duration": 246000,
            "value": 93
        }, {
            "duration": 247000,
            "value": 92
        }, {
            "duration": 250000,
            "value": 92
        }, {
            "duration": 253000,
            "value": 92
        }, {
            "duration": 262000,
            "value": 87
        }, {
            "duration": 265000,
            "value": 87
        }, {
            "duration": 268000,
            "value": 88
        }, {
            "duration": 278000,
            "value": 88
        }, {
            "duration": 279000,
            "value": 87
        }, {
            "duration": 280000,
            "value": 85
        }, {
            "duration": 281000,
            "value": 84
        }, {
            "duration": 282000,
            "value": 83
        }, {
            "duration": 285000,
            "value": 83
        }, {
            "duration": 288000,
            "value": 83
        }, {
            "duration": 289000,
            "value": 82
        }, {
            "duration": 291000,
            "value": 81
        }, {
            "duration": 293000,
            "value": 82
        }, {
            "duration": 296000,
            "value": 82
        }, {
            "duration": 297000,
            "value": 81
        }, {
            "duration": 299000,
            "value": 82
        }, {
            "duration": 302000,
            "value": 83
        }, {
            "duration": 305000,
            "value": 83
        }, {
            "duration": 306000,
            "value": 82
        }, {
            "duration": 307000,
            "value": 81
        }, {
            "duration": 308000,
            "value": 80
        }, {
            "duration": 311000,
            "value": 81
        }, {
            "duration": 314000,
            "value": 82
        }, {
            "duration": 315000,
            "value": 83
        }, {
            "duration": 318000,
            "value": 82
        }, {
            "duration": 319000,
            "value": 80
        }, {
            "duration": 320000,
            "value": 79
        }, {
            "duration": 321000,
            "value": 78
        }, {
            "duration": 322000,
            "value": 77
        }, {
            "duration": 323000,
            "value": 77
        }, {
            "duration": 326000,
            "value": 78
        }, {
            "duration": 327000,
            "value": 79
        }, {
            "duration": 328000,
            "value": 80
        }, {
            "duration": 329000,
            "value": 81
        }, {
            "duration": 330000,
            "value": 80
        }, {
            "duration": 331000,
            "value": 79
        }, {
            "duration": 332000,
            "value": 78
        }, {
            "duration": 333000,
            "value": 77
        }, {
            "duration": 336000,
            "value": 77
        }, {
            "duration": 338000,
            "value": 77
        }, {
            "duration": 339000,
            "value": 76
        }, {
            "duration": 341000,
            "value": 75
        }, {
            "duration": 344000,
            "value": 76
        }, {
            "duration": 346000,
            "value": 75
        }, {
            "duration": 348000,
            "value": 74
        }, {
            "duration": 351000,
            "value": 74
        }, {
            "duration": 354000,
            "value": 75
        }, {
            "duration": 357000,
            "value": 75
        }, {
            "duration": 359000,
            "value": 76
        }, {
            "duration": 361000,
            "value": 77
        }, {
            "duration": 362000,
            "value": 78
        }, {
            "duration": 363000,
            "value": 79
        }, {
            "duration": 364000,
            "value": 80
        }, {
            "duration": 366000,
            "value": 81
        }, {
            "duration": 367000,
            "value": 82
        }, {
            "duration": 369000,
            "value": 83
        }, {
            "duration": 370000,
            "value": 83
        }, {
            "duration": 371000,
            "value": 84
        }, {
            "duration": 374000,
            "value": 84
        }, {
            "duration": 377000,
            "value": 85
        }, {
            "duration": 378000,
            "value": 86
        }, {
            "duration": 381000,
            "value": 86
        }, {
            "duration": 384000,
            "value": 87
        }, {
            "duration": 387000,
            "value": 87
        }, {
            "duration": 389000,
            "value": 88
        }, {
            "duration": 392000,
            "value": 88
        }, {
            "duration": 395000,
            "value": 88
        }, {
            "duration": 396000,
            "value": 89
        }, {
            "duration": 398000,
            "value": 88
        }, {
            "duration": 399000,
            "value": 87
        }, {
            "duration": 402000,
            "value": 87
        }, {
            "duration": 404000,
            "value": 86
        }, {
            "duration": 407000,
            "value": 86
        }, {
            "duration": 410000,
            "value": 86
        }, {
            "duration": 413000,
            "value": 86
        }, {
            "duration": 414000,
            "value": 87
        }, {
            "duration": 417000,
            "value": 87
        }, {
            "duration": 418000,
            "value": 88
        }, {
            "duration": 421000,
            "value": 88
        }, {
            "duration": 422000,
            "value": 87
        }, {
            "duration": 423000,
            "value": 85
        }, {
            "duration": 424000,
            "value": 84
        }, {
            "duration": 425000,
            "value": 83
        }, {
            "duration": 426000,
            "value": 83
        }, {
            "duration": 427000,
            "value": 84
        }, {
            "duration": 429000,
            "value": 85
        }, {
            "duration": 430000,
            "value": 86
        }, {
            "duration": 431000,
            "value": 87
        }, {
            "duration": 432000,
            "value": 130
        }
        ]);
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
