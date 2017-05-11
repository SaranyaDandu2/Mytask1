var mongoose= require('mongoose');

var Schema= mongoose.Schema;
 
 var mySchema = new Schema({
 
 username:String,
 password:String,
 number:String,
 address:String
 });
 
 var mine1 = mongoose.model('mine1', mySchema);
 
 module.exports = mine1;