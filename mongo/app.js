var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var MongoClient = require('mongodb').MongoClient;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8888);

// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db){
// 	if (err) throw err;
	// console.log("数据库已创建");

	// var dbase = db.db("runoob");
	// dbase.createCollection('site', function(err, res){
	// 	if (err) throw err;
	// 	console.log("创建集合！", err);
	// 	db.close();
	// });

	// var dbo = db.db("runoob");
	// var myobj = { name: "菜鸟教程", url: "www.runoob" };
	// dbo.collection("site").insertOne(myobj, function(err, res){
	// 	if (err) throw err;
	// 	console.log("文档从插入成功");
	// 	db.close()
	// });

	// var myobj = [
	// 	{name:'菜鸟工具', url:'https://c.runoob.com', type:'cn'},
	// 	{name:'Google', url:'https://www.google.com', type:'en'},
	// 	{name:'Facebook', url:'https://www.google.com', type:'en'}
	// ];

	// dbo.collection("site").insertMany(myobj, function(err, res){
	// 	if (err) throw err;
	// 	console.log("插入的文档数量为:"+res.insertedCount);
	// 	db.close();
	// });

	// dbo.collection("site").find({}).toArray(function(err, result){
	// 	if (err) throw err;
	// 	console.log(result);
	// 	db.close();
	// });
	// var whereStr = {"name":'菜鸟工具'};
	// dbo.collection("site").find(whereStr).toArray(function(err, result){
	// 	if (err) throw err;
	// 	console.log(result[0].name);
	// 	db.close();
	// });

	// var whereStr = {"name":'菜鸟教程'};
	// var updateStr = {$set : {"url":'https://www.runoob.com'}};
	// dbo.collection("site").updateOne(whereStr, updateStr, function(err, res){
	// 	if (err) throw err;
	// 	console.log("文档更新成功");
	// 	db.close();
	// });

	// var whereStr = {"type":'en'};
	// var updateStr = {$set: {"url":"https://www.runoob.com"}};
	// dbo.collection("site").updateMany(whereStr, updateStr, function(err, res){
	// 	if (err) throw err;
	// 	console.log(res.result.nModified + "条文档被更新");
	// 	db.close();
	// });

	// 删除数据
	// var whereStr = {"name":'菜鸟教程'};
	// dbo.collection("site").deleteOne(whereStr, function(err, obj){
	// 	if (err) throw err;
	// 	console.log("文档删除成功");
	// 	db.close();
	// });

	// 删除多条数据
	// var whereStr = {type:"en"};
	// dbo.collection("site").deleteMany(whereStr, function(err, obj){
	// 	if (err) throw err;
	// 	console.log(obj.result.n + "条文档被删除");
	// 	db.close();
	// });



	// var mysort = {type: 1 };
	// dbo.collection("site").find().sort(mysort).toArray(function(err, result){
	// 	if (err) throw err;
	// 	console.log(result);
	// 	db.close();
	// });

	// dbo.collection("site").find().limit(2).toArray(function(err, result){
	// 	if (err) throw err;
	// 	console.log(result);
	// 	db.close();
	// });

	// dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result){
	// 	if (err) throw err;
	// 	console.log(result);
	// 	db.close();
	// });

	//lookup实现左连接

	// dbo.collection("site").drop(function(err, delOK){
	// 	if (err) throw err;
	// 	if (delOK) console.log("集合已删除");
	// 	db.close();
	// });











// });

module.exports = app;
