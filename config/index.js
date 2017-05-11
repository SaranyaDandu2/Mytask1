var credentials = require('./config');

module.exports = {
	
	getDbConnection: function(){
		return 'mongodb://'+ credentials.uname + ':'+ credentials.pwd + '@ds137141.mlab.com:37141/saranya';
	}
}