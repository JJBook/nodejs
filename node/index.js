var http = require('http');
var url  = require('url');
var util = require('util');
var querystring = require('querystring');
var os = require("os");
var path = require('path');
var net = require('net');
var dns = require('dns');
var fs = require('fs');
var child_process = require('child_process');
// var server = require('./server');
// var router = require('./router');

// console.log(__filename);
// console.log(__dirname);

// server.start(router.route);

// var t = setTimeout(function(){
// 	console.log('111111111');
// }, 5000);

// clearTimeout(t);

// var t2 = setInterval(function() {
// 	console.log('222222222222');
// }, 2000);

// clearInterval(t2);

// console.log('hello world');
// console.log('by void %d io yb');
// console.log('by void %d io vyb', 1991);
// console.trace();

// console.log('程序开始执行');

// var counter = 10;
// console.log('计数：%d', counter);

// console.time('获取数据');

// console.timeEnd('获取数据');

// console.info('程序执行完毕');

// process.on('exit', function(code) {
// 	setTimeout(function() {
// 		console.log('该代码不会执行');
// 	}, 0);

// 	console.log('退出码为：', code);
// }, 0);

// console.log('程序执行结束');

// // 输出到终端
// process.stdout.write("Hello World!" + "\n");

// // 通过参数读取
// process.argv.forEach(function(val, index, array) {
//    console.log(index + ': ' + val);
// });

// // 获取执行路径
// console.log(process.execPath);


// // 平台信息
// console.log(process.platform);

// // 输出当前目录
// console.log('当前目录: ' + process.cwd());

// // 输出当前版本
// console.log('当前版本: ' + process.version);

// // 输出内存使用情况
// console.log(process.memoryUsage());

// var util = require('util');

// function Base() {
// 	this.name = 'base';
// 	this.base = 1991;
// 	this.sayHello = function() {
// 		console.log('hello ' + this.name);
// 	};
// }

// Base.prototype.showName = function() {
// 	console.log(this.name);
// }

// function Sub() {
// 	this.name = 'sub';
// }

// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);

// var objSub = new Sub();
// objSub.showName();
// console.log(objSub);


// function Person() {
// 	this.name = 'by boid';
// 	this.toString = function() {
// 		return this.name;
// 	};
// }

// var obj = new Person();
// console.log(util.inspect(obj)); 
// console.log(util.inspect(obj, true)); 

// var fs = require('fs');

// fs.readFile('/Users/warrior/Desktop/update_ios.sh', function(err, data){
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log('异步读取：' + data.toString());
// });

// // 同步读取
// var data = fs.readFileSync('/Users/warrior/Desktop/update_ios.sh');
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");

// 异步打开文件
// console.log('准备打开文件');
// fs.open('/Users/warrior/Desktop/update_ios.sh', 'r+', function(err, fd) {
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log('文件打开成功');
// });

// console.log('准备打开文件');
// fs.stat('/Users/warrior/Desktop/update_ios.sh', function(err, stats) {
// 	if (err) {
// 		return console.error(err);
// 	}

// 	console.log(stats);
// 	console.log('读取文件信息成功');

// 	console.log('是否为文件', + stats.isFile());
// 	console.log("是否为目录(isDirectory) ? " + stats.isDirectory());  
// });

// console.log('准备写入文件');
// fs.writeFile('/Users/warrior/Desktop/input.txt', '我是通 过fs.writeFile 写入文件的内容', function(err){
// 	if (err) {
// 		return console.error(err);
// 	}

// 	console.log('数据写入成功');
// 	console.log("--------我是分割线-------------")
// 	console.log("读取写入的数据！");
// 	fs.readFile('/Users/warrior/Desktop/input.txt', function(err, data){
// 		if (err) {
// 			console.error(err);
// 		}
// 		console.log('异步读取文件数据：' + data.toString());
// 	});
// });

// var buf = new Buffer(1024);

// console.log("准备打开已存在的文件");
// fs.open('/Users/warrior/Desktop/input.txt', 'r+', function(err, fd){
// 	if (err) {
// 		return console.error(err);
// 	}

// 	console.log('文件打开成功');
// 	console.log('准备读取文件');

// 	fs.ftruncate(fd, 10, function(err){
// 		if (err) {
// 			console.error(err);
// 		}

// 		console.log('文件截取成功');
// 		console.log('截取了10个字节后的文件内容');

// 		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
// 		if (err) {
// 			console.error(err);
// 		}
// 		console.log(bytes + ' 字节被读取');

// 		if (bytes > 0) {
// 			console.log(buf.slice(0, bytes).toString());
// 		}

// 		// 关闭文件
// 		fs.close(fd, function(err){
// 			if (err) {
// 				console.error(err);
// 			}
// 			console.log('文件关闭成功');
// 		});
// 	});
// 	});
// });

// console.log('准备删除文件');
// fs.unlink('/Users/warrior/Desktop/input.txt', function(err){
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log('文件删除成功');
// });

// console.log("创建目录 /Users/warrior/Desktop/test");
// fs.mkdir('/Users/warrior/Desktop/test', function(err){
// 	if (err) {
// 		return console.error(err);
// 	}
// 	console.log('目录创建成功');
// });

// console.log('查看 /Users/warrior/Desktop/test 目录');
// fs.readdir('/Users/warrior/Desktop/test', function(err, files){
// 	if (err) {
// 		return console.error(err);
// 	}
// 	files.forEach(function(file){
// 		console.log(file);
// 	});
// });

// console.log('准备删除目录 /Users/warrior/Desktop/test 目录');
// fs.rmdir('/Users/warrior/Desktop/test', function(err){
// 	if (err) {
// 		return console.error(err);
// 	}

// 	console.log('读取 /Users/warrior/Desktop/test 目录');

// 	fs.readdir('/Users/warrior/Desktop/test', function(err, files){
// 		if (err) {
// 			return console.error(err);
// 		}

// 		files.forEach(function(file){
// 			console.log(file);
// 		});
// 	});
// });

// get
// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
// 	// res.end(util.inspect(url.parse(req.url, true)));
// 	var params = url.parse(req.url, true).query;
// 	res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();
// }).listen(8888);

// // post
// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';

// http.createServer(function(req, res){
// 	var body = "";
// 	req.on('data', function(chunk){
// 		body += chunk;
// 	});
// 	req.on('end', function(){
// 		body = querystring.parse(body);
// 		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
// 		if (body.name && body.url) {
// 			res.write('网站名：' + body.name);
// 			res.write('<br>');
// 			res.write('网站 URL：' + body.url);
// 		} else {
// 			res.write(postHTML);
// 		}
// 	});
// }).listen(8888);

// // CPU 的字节序
// console.log('endianness: ' + os.endianness());

// // 操作系统名
// console.log('type: ' + os.type());

// // 操作系统名
// console.log('platform: ' + os.platform());

// // 系统内存总量
// console.log('total memory : ' + os.totalmem() + ' bytes');

// // 操作系统空闲内存量
// console.log('free memory : ' + os.freemem() + 'bytes');

// // 格式化路径
// console.log('normalization : ' + path.normalize('/Users/warrior//Desktop/test'));

// // 连接路径
// console.log('joint path : ' + path.join('/Users', 'warrior/Desktop', 'test'));

// // 转化为绝对路径
// console.log('resolve : ' + path.resolve('server.js'));

// // 路径中文件的后缀名
// console.log('ext name : ' + path.extname('server.js'));

// dns.lookup('www.github.com', function onLookup(err, address, family) {
// 	console.log('ip 地址:', address);
// 	dns.reverse(address, function(err, hostnames){
// 		if (err) {
// 			console.error(err.stack);
// 		}

// 		console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames)); 
// 	});
// });

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	// 输出请求的文件名
    console.log("Request for " + pathname + " received.");

    fs.readFile(__dirname + '/' + pathname.substr(1), function(err, data){
    	if (err) {
    		console.error(err);
    		res.writeHead(404, {'Content-Type': 'text/html'});
    	} else {
    		// HTTP 状态码: 200 : OK
         	// Content Type: text/plain
        	res.writeHead(200, {'Content-Type': 'text/html'});
        	// 响应文件内容
        	res.write(data.toString());
    	}
    });
}).listen(8888);

// // 控制台会输出以下信息
// console.log('Server running at http://127.0.0.1:8080/');

// for(var i=0; i<3; i++) {
//     var workerProcess = child_process.exec('node /nodejs/node/server.js '+i, function (error, stdout, stderr) {
//         if (error) {
//             console.log(error.stack);
//             console.log('Error code: '+error.code);
//             console.log('Signal received: '+error.signal);
//         }
//         console.log('stdout: ' + stdout);
//         console.log('stderr: ' + stderr);
//     });
 
//     workerProcess.on('exit', function (code) {
//         console.log('子进程已退出，退出码 '+code);
//     });
// }































