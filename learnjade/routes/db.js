var db      = require('./settings'),
MongoClient = require('mongodb').MongoClient;

/*
* dbname 数据库名称
* tableName 列表名称
* queryJson 查询条件
* callback 回调
*/
module.exports.findOne = function findOne(dbname, tableName, queryJson, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		// 查询一条数据
		dbo.collection(tableName).findOne(queryJson, function(err, result){
			if (err) {
				callback(err);
				db.close();
				return
			}

			callback(null, result);
			db.close();
		});
	});
}

/*
* 查找多条数据
* dbname 数据库名称
* tableName 列表名称
* queryJson 查询条件 （排序，分页等）
* callback 回调
*/
module.exports.find = function find(dbname, tableName, queryJson, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		// 查询一条数据

		var query = queryJson.queryJson || {},
			limit = Number(queryJson.limit) || 0,
			count = Number(queryJson.page), 
			sort = queryJson.sort || {};
			
		dbo.collection(tableName).find(queryJson).limit(limit).skip(count*limit).sort(sort).toArray(function(err, result){
			if (err) {
				callback(err);
				db.close();
				return
			}

			callback(null, results);
			db.close();
		});
	});
}

/*
* 插入数据
* dbname 数据库名称
* tableName 列表名称
* data 要添加的数据
* callback 回调
*/
module.exports.insertOne = function insertOne(dbname, tableName, data, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		dbo.collection(tableName).insertOne(data, function(err, res){
			if (err) {
				callback(err);
				db.close();
				return
			}
			callback(null);
			db.close();
		});
	});
}

/*
* 插入数据
* dbname 数据库名称
* tableName 列表名称
* data 要添加的列表
* callback 回调
*/
module.exports.insertMany = function insertMany(dbname, tableName, list, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		dbo.collection(tableName).insertMany(list, function(err, res){
			if (err) {
				callback(err);
				db.close();
				return
			}
			callback(null);
			db.close();
		});
	});
}

/*
* 更新单条数据
* dbname 数据库名称
* queryJson 更新查询语句
* updateData 要更新的数据
* callback 回调
*/
module.exports.updateOne = function updateOne(dbname, tableName, queryJson, updateData, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		dbo.collection(tableName).updateOne(queryJson, updateData, function(err, res){
			if (err) {
				callback(err);
				db.close();
				return
			}
			callback(null);
			db.close();
		});
	});
}

/*
* 更新多条数据
* dbname 数据库名称
* queryJson 更新查询语句
* updatelist 要更新的数据
* callback 回调
*/
module.exports.updateMany = function updateMany(dbname, tableName, queryJson, updatelist, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		dbo.collection(tableName).updateMany(queryJson, updatelist, function(err, res){
			if (err) {
				callback(err);
				db.close();
				return
			}
			callback(null);
			db.close();
		});
	});
}

/*
* 删除单条数据
* dbname 数据库名称
* queryJson 删除查询语句
* callback 回调
*/
module.exports.deleteOne = function deleteOne(dbname, tableName, queryJson, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		dbo.collection(tableName).deleteOne(queryJson, function(err, res){
			if (err) {
				callback(err);
				db.close();
				return
			}
			callback(null);
			db.close();
		});
	});
}

/*
* 删除多条数据
* dbname 数据库名称
* queryJson 删除查询语句
* callback 回调
*/
module.exports.deleteMany = function deleteMany(dbname, tableName, queryJson, callback){
	// 链接数据库
	MongoClient.connect(db.url, function(err, db){
		// 链接数据库失败
		if (err) return callback(err);
		
		var dbo = db.db(dbname);
		dbo.collection(tableName).deleteMany(queryJson, function(err, res){
			if (err) {
				callback(err);
				db.close();
				return
			}
			callback(null);
			db.close();
		});
	});
}
