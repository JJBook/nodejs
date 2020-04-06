var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.use(multer({ dest: '/tmp/'}).array('image'));

// app.get('/index.htm', function(req, res){
// 	res.sendFile(__dirname + '/' + 'index.htm');
// })

// app.post('/process_post', urlencodedParser, function (req, res) {

//    // 输出 JSON 格式
//    response = {
//        first_name:req.body.first_name,


//        last_name:req.body.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

// var server = app.listen(8081, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("应用实例，访问地址为 http://%s:%s", host, port)

// })

app.get('/index.htm', function(req, res){
	res.appendFile(__dirname + '/' + 'index.htm');
});

app.post('/file_uoload', function(req, res){
	console.log(req.files[0]);

	var des_file = __dirname + '/' + req.fileNames[0].originalname;

	fs.readFile(req.file[0].path, function(err, data){
		if (err) {
			console.log(err);
		}else{
			response = {
				message : 'file uploaded successfully',
				filename:req.files[0].originalname
			};
			console.log(response);
			res.end(JSON.stringify(response));
		}
	});
});

var server = app.listen(8081, function(){
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
});



















































































































