var mine1 = require('../models/Model1');

module.exports = function(app){
	
	app.get('/', function(req,res){
		
		var mine = [
	{
		username :'test',
		password:'itsme',
		number:'9491421325',
		address:'ravulapalem'
	},
	{
		username :'test',
		password:'chaitu',
		email:'7842577186',
		address:'vizag'
		
	},
	{
		username :'test',
		password:'naveen',
		email:'9505807911',
		address:'srikakulam'
	}
	];
	mine1.create(mine,function(err,result){
		res.send(result);
});

	});
	
}