var fs = require("fs");
// var events = require("events");

// fs.readFile('/Users/warrior/Desktop/update_ios.sh', function(err, data){
// 	if (err) return console.err(err);
// 	console.log(data.toString());
// });

// var data = fs.readFileSync('/Users/warrior/Desktop/update_ios.sh');
// console.log(data.toString());
// console.log("程序执行结束");

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
// 	console.log('连接成功');

// 	eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection',connectHandler);

// eventEmitter.on('data_received', function(){
// 	console.log("数据接收成功");
// });

// eventEmitter.emit('connection');

// console.log('程序执行完毕');

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();

// event.on('some_event', function(){
// 	console.log('some_event 事件触发');
// });

// setTimeout(function(){
// 	event.emit('some_event');
// }, 1000);

// var events = require('events');
// var emitter = new events.EventEmitter();

// emitter.on('someEvent', function(arg1, arg2){
// 	console.log('listener1', arg1, arg2);
// });

// emitter.on('someEvent', function(arg1, arg2){
// 	console.log('listener2', arg1, arg2);
// });

// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // 监听器 #1
// var listener1 = function listener1() {
// 	console.log('监听器 listener1 执行');
// }

// // 监听器 #2
// var listener2 = function listener2() {
// 	console.log('监听器 listener2 执行');
// }

// // 绑定 connection 事件，处理函数为listener1
// eventEmitter.addListener('connection', listener1);
// eventEmitter.on('connection', listener2);

// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " 个监听器监听");

// // 处理 connection 事件
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log('listener1 不再受监听');

// // 触发连接事件
// eventEmitter.emit('connection');

// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
// console.log(eventListeners + " 个监听器监听");

// error 事件
// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.emit('error');

// #Buffer 与字符编码
// const buf = Buffer.from('runoob', 'ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// 创建一个长度为 10、且用 0 填充的 Buffer。
// const buf1 = Buffer.alloc(10);

// // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
// const buf2 = Buffer.alloc(10, 1);

// // 创建一个长度为 10、且未初始化的 Buffer。
// // 这个方法比调用 Buffer.alloc() 更快，
// // 但返回的 Buffer 实例可能包含旧数据，
// // 因此需要使用 fill() 或 write() 重写。
// const buf3 = Buffer.allocUnsafe(10);

// // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
// const buf4 = Buffer.from([1, 2, 3]);

// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');

// // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
// const buf6 = Buffer.from('tést', 'latin1');

// 写入缓冲区
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");
// console.log('写入字节数：'+ len);

// 从缓冲区读取数据
// buf = Buffer.alloc(26);
// for (var i = 0; i < 26; i++) {
// 	buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // 输出: abcde
// console.log( buf.toString('utf8',0,5));    // 输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// 将 Buffer 转换为 JSON 对象
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// console.log(json);

// const copy = JSON.parse(json, (key, value) => {
// 	return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
// });

// console.log(copy);

// 缓冲区合并
// var buffer1 = Buffer.from(('菜鸟教程'));
// var buffer2 = Buffer.from(('www.runoob.com'));
// var buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log('buffer3 内容：' + buffer3);

// 缓冲区比较
// var buffer1 = Buffer.from('ABC');
// var buffer2 = Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// 拷贝缓冲区
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('RUNOOB');
// buf2.copy(buf1, 2);
// console.log(buf1.toString());

// 缓冲区裁剪
// var buffer1 = Buffer.from('runoob');
// /// 剪切缓冲区
// var buffer2 = buffer1.slice(0, 2);
// console.log("buffer2 content: " + buffer2.toString());

// // 缓冲区长度
// var buffer = Buffer.from('www.runoob.com');
// // 缓冲区长度
// console.log('buffer length：' + buffer.length);

// 从流中读取数据
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('/Users/warrior/Desktop/ipa/export.plist');

// // 设置编码为uft-8
// readerStream.setEncoding('UTF8');

// // 处理流时间 -- > data, end, and err
// readerStream.on('data', function(chunk){
// 	data += chunk;
// });

// readerStream.on('end', function(){
// 	console.log(data);
// });

// readerStream.on('error', function(err){
// 	console.log(err.stack);
// });

// console.log('程序执行完毕');

// 写入流
// var data = '菜鸟教程官网地址：www.runoob.com';

// // 创建一个可以写入的流，写入到文件output.txt
// var writerStream = fs.createWriteStream('/Users/warrior/Desktop/output.txt');

// // 使用utf8 编码写入数据
// writerStream.write(data, 'UTF8');

// // 标记文件末尾
// writerStream.end();

// // 处理流事件 -- > data, end, and error
// writerStream.on('finish', function(){
// 	console.log("写入完成。");
// })

// writerStream.on('error', function(err){
// 	console.log(err.stack);
// });

// console.log('程序执行完毕');

// 管道流

// // 创建一个可读流
// var readerStream = fs.createReadStream('/Users/warrior/Desktop/input.txt');

// // 创建一个可写流
// var writeStream = fs.createWriteStream('/Users/warrior/Desktop/output.txt');

// // 管道读写操作
// // 读写input.txt 文件内容，并将内容写入input.txt中
// readerStream.pipe(writeStream);

// console.log('程序执行完毕');

// 链式流
// var zlib = require('zlib');

// fs.createReadStream('/Users/warrior/Desktop/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('/Users/warrior/Desktop/input.txt.gz'));
// console.log('文件压缩完成');

// fs.createReadStream('/Users/warrior/Desktop/input.txt.gz').pipe(
// 	zlib.createGunzip()).pipe(fs.createWriteStream('/Users/warrior/Desktop/input2.txt'));
// console.log('解压完成');

// node.js模块系统
// var hello = require('./hello');
// hello.world();

// var Hello = require('./hello');
// hello = new Hello();
// hello.setName('xxx');
// hello.sayHello();

// var http = require('http');
// http.createServer(function(request, response){
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write('hello world');
// 	response.end();
// }).listen(8888);

// function onRequest(request, response) {
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write('hello world');
// 	response.end();
// }

// http.createServer(onRequest).listen(8888);






































































































