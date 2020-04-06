// var mongodb = require('./db');
var MongoClient = require('mongodb').MongoClient;

function User(user){
	this.name 		= user.name;
	this.password 	= user.password;
};

module.exports = User;

User.prototype.save = function save(callback) {
	var user = {
		name 		: this.name,
		password 	: this.password,
	}

	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, function(err, db){
		if (err) throw err;
		console.log("数据库连接成功");
		var dbo = db.db("blog");

		dbo.collection("users").insertOne(user, function(err, res){
			if (err) {
				console.log("数据表连接失败");
				return callback(err);
			}

			console.log("数据插入成功");

			callback(err, user);
			db.close();
		});
		
	});

}

User.get = function get(username, callback){

	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, function(err, db){
		if (err) return callback(err);

		console.log("数据库连接成功")

		var dbo = db.db("blog");

		var whereStr = { name : username };

		console.log("数据库查询语句");
		console.log(whereStr);

		dbo.collection("users").find(whereStr).toArray(function(err, result){
			if (err) {
				console.log("数据连接失败");
				return callback(err);
			}

			console.log("用户查找成功");
			console.log(result);

			var user = null;
			if (result.length > 0) {
				user = new User(result[0]);	
			}
			callback(err, user);

			db.close();
		});

	});

}