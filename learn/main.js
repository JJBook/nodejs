var fs = require("fs")

// var data = fs.readFileSync('/nodejs/input.txt');

// console.log(data.toString());

// console.log("程序执行结束");

// fs.readFile('/nodejs/input.txt', function(err, data){
// 	if (err) return console.error(err);
// 	return console.log(data.toString());
// });

// console.log("程序执行结束")

var events = require('events')

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected(){
// 	console.log('链接成功');

// 	eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function(){
// 	console.log("数据接收成功")
// });

// eventEmitter.emit('connection');
// console.log("程序执行完毕");

// fs.readFile('/nodejs/input.txt', function(err, data){
// 	if(err){
// 		console.log(err.stack);
// 		return;
// 	}
// 	console.log(data.toString());
// });

// var emitter = new events.EventEmitter();
// emitter.on('someEvent', function(arg1, arg2){
// 	console.log('listener1', arg1, arg2);
// });

// emitter.on('someEvent', function(arg1, arg2){
// 	console.log("listener2", arg1, arg2);
// });
// emitter.emit('someEvent', '牢记', 1991)

// buf = new Buffer(1);
// len = buf.write('www.babybus.com');
// console.log("写入字节数 : "+  len);

// buf = new Buffer(26)
// for (var i = 0 ; i < 26 ; i++) {
// 	buf[i] = i + 97;
// }
// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // 输出: abcde
// console.log( buf.toString('utf8',0,5));    // 输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// var buf = new Buffer('www.babybus.com');
// var json = buf.toJSON(buf);
// console.log(json);

// var buffer1 = new Buffer("宝宝巴士")
// var buffer2 = new Buffer("www.babybus.com")
// var buffer3 = Buffer.concat([buffer1, buffer2])
// console.log(buffer3)

// var buffer1 = new Buffer('abc')
// var buffer2 = new Buffer('abcd')
// var result  = buffer1.compare(buffer2)
// if (result < 0) {
// 	console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
// 	console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else{
// 	console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// var buffer1 = new Buffer('abc')
// var buffer2 = new Buffer(3)
// buffer1.copy(buffer2)
// console.log("buffer2 content: " + buffer2.toString());

// var buffer1 = new Buffer('youj')
// var buffer2 = buffer1.slice(0, 3)
// console.log("buffer2 content: " + buffer2.toString());

// var data = '';
// var readerStream = fs.createReadStream('/nodejs/input.txt');
// readerStream.setEncoding('UTF8');

// readerStream.on('data', function(chunk){
// 	data += chunk;
// });

// readerStream.on('end', function(){
// 	console.log(data);
// });

// readerStream.on('error', function(error){
// 	console.log(err);
// });

// console.log('程序执行结束');

// var data = '宝宝巴士欢迎你';
// var writerStream = fs.createWriteStream('/nodejs/input.txt');
// writerStream.write(data, 'UTF8');
// writerStream.end()
// writerStream.on('finish', function(){
// 	console.log("写入完成");
// });
// writerStream.on('error', function(){
// 	console.log(error.stack);
// });
// console.log("程序执行完毕");

// var readerStream = fs.createReadStream("/nodejs/input.txt");

// var writerStream = fs.createWriteStream("/nodejs/output.txt");

// readerStream.pipe(writerStream);
// console.log("程序执行结束");

// var zlib = require("zlib");
// fs.createReadStream('/nodejs/input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('/nodejs/input.txt.gz'));
// console.log("文件压缩完成");

// fs.createReadStream('/nodejs/input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('/nodejs/input2.txt'));

// console.log("文件解压完成");

// var hello = require("./hello");

// h = new hello();
// h.setName('byvoid');
// h.sayHello();

// var server = require("./start");
// var router = require("./router");

// server.start(router.route);


var util = require('util');

// function Base(){
// 	this.name = 'base';
// 	this.base = 1991;
// 	this.sayHello = function(){
// 		console.log("hello", + this.name);
// 	};
// }

// Base.prototype.showName = function(){
// 	console.log(this.name);
// }

// function Sub(){
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

// function Person(){
// 	this.name = '忘记了';
// 	this.toString = function(){
// 		return this.name;
// 	};
// }

// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));

fs.readFile("/nodejs/input.txt", 'utf-8', function(err, data){
	if (err) {
		console.error(err);
	}else{
		console.log(data);
	}
});

















































































































































































































