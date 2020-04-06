// var mongodb 		= require("./db");
var MongoClient = require('mongodb').MongoClient;

function Post(username, post, time){
	this.user 	= username;
	this.post 	= post;
	if (time) {
		this.time = time;
	} else {
		this.time = new Date();
	}
}

module.exports 	= Post;

Post.prototype.save = function save(callback){
	var post = {
		user : this.user,
		post : this.post,
		time : this.time
	}

	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, function(err, db){
		if (err) return callback(err);

		var dbo = db.db("blog");

		dbo.collection("posts").insertOne(post, function(err, res){
			if (err) return callback(err);
			callback(err, post);
			db.close();
		});
	});

}

Post.get = function get(username, callback){

	var url = "mongodb://localhost:27017/";
	MongoClient.connect(url, function(err, db){
		if (err) return callback(err);

		var dbo = db.db("blog");

		dbo.collection("posts").find({user : username}).sort({time : -1}).toArray(function(err, result){
			if (err) return callback(err);

			var posts = [];
			console.log(result);
			result.forEach(function(doc, index){
				var post = new Post(doc.user, doc.post, doc.time);
				posts.push(post);
			});

			console.log('用户：');
			console.log(username);
			console.log('发表的内容');
			console.log(posts);

			callback(null, posts);

			db.close();
		});
	});
}