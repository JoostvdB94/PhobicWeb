var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var phobia = new Schema({
    name    : String,
});

mongoose.model( 'phobia', phobia );
mongoose.connect( 'mongodb://localhost/phobicpush' );