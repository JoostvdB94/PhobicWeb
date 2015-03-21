var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var phobia = new Schema({
    name    : String,
    relaxationmethods : [{ type: Schema.Types.ObjectId, ref: 'relaxationmethod' }]
});

var relaxationmethod = new Schema({
    name    	   : String,
    phobia		   : { type: Schema.Types.ObjectId, ref: 'phobia' },
    activities     : [String],
    effectiveness  : Number,
    times_used     : Number
});

mongoose.model( 'phobia', phobia );
mongoose.model( 'relaxationmethod', relaxationmethod );
mongoose.connect( 'mongodb://localhost/phobicpush' );