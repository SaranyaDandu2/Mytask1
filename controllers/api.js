var mine1 = require('../models/Model1');
var bodyparser = require('body-parser');

module.exports=function(app){
	
	app.use(bodyparser.json());
	app.use(bodyparser.urlencoded({extended:true}));
	
	app.get('/api/todos/:uname',function(req,res){
		
		mine1.find({  username:req.params.uname },function(err,todos){
			if(err) throw err;
			res.send(todos);
		});
		
	});
	app.get('/api/todo/:id',function(req,res){
		
		mine1.findById({_id:req.params.id },function(err,todo){
			if(err) throw err;
			res.send(todo);
	});
	});
	
	app.post('/api/todo', function(req,res){
		if(req.body.id){
			mine1.findByIdAndUpdate(req.body.id,{
				password:req.body.password, number:
			req.body.number, address:req.body.address},function(err,todo){
				if(err)throw err;
				res.send('Success')
			})
		}
		else
		{
			var newTodo = mine1({
				username:'test',
				password:req.body.password,
				number:req.body.number,
				address:req.body.address
				
		});
		newTodo.save(function(err){
			if(err) throw err;
			res.send('Success');
		});
		}
	});
	
	app.delete('/api/todo', function(req,res){
		mine1.findByIdAndRemove(req.body.id,function(err){
			if(err) throw err;
			res.send('Success');
		})
	});
}
	
	
	
	
	
	
		
		
